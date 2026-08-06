from typing import Optional, Dict, Any, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, and_, or_, delete
from sqlalchemy.orm import selectinload
from app.models.cart import CartItem
from app.models.product import Product
from app.models.variant import ProductVariant
from app.models.coupon import Coupon, CouponType


class CartService:

    @staticmethod
    async def get_cart(db: AsyncSession, user_id: Optional[int] = None, session_id: Optional[str] = None) -> Dict[str, Any]:
        if not user_id and not session_id:
            return {"items": [], "subtotal": 0.0, "estimated_shipping": 0.0, "estimated_tax": 0.0, "discount": 0.0, "total": 0.0, "item_count": 0}

        query = select(CartItem).options(
            selectinload(CartItem.product).selectinload(Product.category),
            selectinload(CartItem.variant)
        )
        if user_id:
            query = query.where(CartItem.user_id == user_id)
        else:
            query = query.where(CartItem.session_id == session_id)

        res = await db.execute(query)
        items = res.scalars().all()

        formatted_items = []
        subtotal = 0.0
        item_count = 0

        for item in items:
            unit_price = item.variant.price if item.variant else (item.product.discount_price or item.product.base_price)
            item_total = unit_price * item.quantity
            subtotal += item_total
            item_count += item.quantity

            formatted_items.append({
                "id": item.id,
                "user_id": item.user_id,
                "session_id": item.session_id,
                "product_id": item.product_id,
                "variant_id": item.variant_id,
                "quantity": item.quantity,
                "price_at_addition": unit_price,
                "product": item.product,
                "variant": item.variant,
                "item_total": item_total
            })

        shipping = 0.0 if subtotal >= 99.0 or subtotal == 0 else 15.0
        tax = round(subtotal * 0.08, 2)  # 8% tax
        total = round(subtotal + shipping + tax, 2)

        return {
            "items": formatted_items,
            "subtotal": round(subtotal, 2),
            "estimated_shipping": shipping,
            "estimated_tax": tax,
            "discount": 0.0,
            "total": total,
            "item_count": item_count
        }

    @staticmethod
    async def add_item(db: AsyncSession, product_id: int, variant_id: Optional[int], quantity: int, user_id: Optional[int], session_id: Optional[str]) -> CartItem:
        # Check product
        prod_res = await db.execute(select(Product).where(Product.id == product_id))
        product = prod_res.scalars().first()
        if not product:
            raise ValueError("Product not found")

        # Price check
        unit_price = product.discount_price or product.base_price
        if variant_id:
            var_res = await db.execute(select(ProductVariant).where(ProductVariant.id == variant_id))
            variant = var_res.scalars().first()
            if variant:
                unit_price = variant.price

        # Existing check
        query = select(CartItem).where(CartItem.product_id == product_id, CartItem.variant_id == variant_id)
        if user_id:
            query = query.where(CartItem.user_id == user_id)
        else:
            query = query.where(CartItem.session_id == session_id)

        res = await db.execute(query)
        existing = res.scalars().first()

        if existing:
            existing.quantity += quantity
            await db.commit()
            await db.refresh(existing)
            return existing
        else:
            new_item = CartItem(
                user_id=user_id,
                session_id=session_id,
                product_id=product_id,
                variant_id=variant_id,
                quantity=quantity,
                price_at_addition=unit_price
            )
            db.add(new_item)
            await db.commit()
            await db.refresh(new_item)
            return new_item

    @staticmethod
    async def update_item(db: AsyncSession, cart_item_id: int, quantity: int) -> Optional[CartItem]:
        res = await db.execute(select(CartItem).where(CartItem.id == cart_item_id))
        item = res.scalars().first()
        if not item:
            return None
        if quantity <= 0:
            await db.delete(item)
            await db.commit()
            return None
        item.quantity = quantity
        await db.commit()
        await db.refresh(item)
        return item

    @staticmethod
    async def remove_item(db: AsyncSession, cart_item_id: int) -> bool:
        res = await db.execute(select(CartItem).where(CartItem.id == cart_item_id))
        item = res.scalars().first()
        if item:
            await db.delete(item)
            await db.commit()
            return True
        return False
