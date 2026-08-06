import random
import string
from datetime import datetime, timedelta, timezone
from typing import Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, delete
from app.models.order import Order, OrderItem, OrderTracking, OrderStatus, PaymentStatus, PaymentMethod
from app.models.coupon import Coupon, CouponType
from app.models.cart import CartItem
from app.services.cart_service import CartService


class CheckoutService:

    @staticmethod
    def generate_order_number() -> str:
        prefix = "CRT"
        rand_str = ''.join(random.choices(string.digits, k=8))
        return f"{prefix}-{rand_str}"

    @staticmethod
    async def create_order(
        db: AsyncSession,
        user_id: int,
        shipping_address: dict,
        payment_method: PaymentMethod,
        coupon_code: Optional[str] = None,
        notes: Optional[str] = None,
        session_id: Optional[str] = None
    ) -> Order:
        cart = await CartService.get_cart(db, user_id=user_id, session_id=session_id)
        if not cart["items"]:
            raise ValueError("Cart is empty")

        subtotal = cart["subtotal"]
        shipping_fee = cart["estimated_shipping"]
        tax_amount = cart["estimated_tax"]
        discount_amount = 0.0

        # Apply coupon if provided
        if coupon_code:
            coupon_res = await db.execute(select(Coupon).where(Coupon.code == coupon_code, Coupon.is_active == True))
            coupon = coupon_res.scalars().first()
            if coupon and subtotal >= coupon.min_order_amount:
                if coupon.coupon_type == CouponType.PERCENTAGE:
                    discount_amount = (subtotal * coupon.discount_value) / 100.0
                    if coupon.max_discount_amount:
                        discount_amount = min(discount_amount, coupon.max_discount_amount)
                elif coupon.coupon_type == CouponType.FLAT:
                    discount_amount = min(coupon.discount_value, subtotal)
                elif coupon.coupon_type == CouponType.FREE_SHIPPING:
                    discount_amount = shipping_fee
                    shipping_fee = 0.0
                coupon.times_used += 1

        total_amount = round(subtotal + shipping_fee + tax_amount - discount_amount, 2)

        order_num = CheckoutService.generate_order_number()
        est_delivery = datetime.now(timezone.utc) + timedelta(days=3)

        new_order = Order(
            order_number=order_num,
            user_id=user_id,
            subtotal=subtotal,
            shipping_fee=shipping_fee,
            tax_amount=tax_amount,
            discount_amount=round(discount_amount, 2),
            total_amount=total_amount,
            coupon_code=coupon_code,
            order_status=OrderStatus.PLACED,
            payment_status=PaymentStatus.PAID if payment_method in [PaymentMethod.CREDIT_CARD, PaymentMethod.UPI, PaymentMethod.WALLET] else PaymentStatus.PENDING,
            payment_method=payment_method,
            payment_transaction_id=f"TXN-{random.randint(10000000, 99999999)}",
            shipping_address=shipping_address,
            tracking_number=f"TRK-{random.randint(100000, 999999)}",
            courier_partner="Delhivery Express",
            estimated_delivery_date=est_delivery,
            notes=notes
        )
        db.add(new_order)
        await db.flush()

        # Add Order Items
        for item in cart["items"]:
            variant_str = f"Color: {item['variant'].color_name or 'Standard'}, Size: {item['variant'].size or 'N/A'}" if item['variant'] else None
            order_item = OrderItem(
                order_id=new_order.id,
                product_id=item["product_id"],
                variant_id=item["variant_id"],
                product_name=item["product"].title,
                product_image=item["product"].primary_image,
                variant_details=variant_str,
                quantity=item["quantity"],
                unit_price=item["price_at_addition"],
                total_price=item["item_total"]
            )
            db.add(order_item)

        # Add Order Tracking Status Timeline
        tracking = OrderTracking(
            order_id=new_order.id,
            status=OrderStatus.PLACED,
            description="Order successfully placed and confirmed with merchant.",
            location="Cartify Central Hub"
        )
        db.add(tracking)

        # Clear user cart
        if user_id:
            await db.execute(delete(CartItem).where(CartItem.user_id == user_id))
        if session_id:
            await db.execute(delete(CartItem).where(CartItem.session_id == session_id))

        await db.commit()
        await db.refresh(new_order)
        return new_order
