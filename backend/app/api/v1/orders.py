from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.core.database import get_db
from app.schemas.order import OrderCreate, OrderResponse
from app.services.checkout_service import CheckoutService
from app.api.v1.deps import get_current_user
from app.models.user import User
from app.models.order import Order

router = APIRouter(prefix="/orders", tags=["Orders & Checkout"])


@router.post("", response_model=OrderResponse, status_code=status.HTTP_201_CREATED)
async def create_order(
    order_in: OrderCreate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    try:
        order = await CheckoutService.create_order(
            db=db,
            user_id=current_user.id,
            shipping_address=order_in.shipping_address.model_dump(),
            payment_method=order_in.payment_method,
            coupon_code=order_in.coupon_code,
            notes=order_in.notes,
            session_id=order_in.session_id
        )
        return OrderResponse.model_validate(order)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.get("", response_model=List[OrderResponse])
async def list_user_orders(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    query = select(Order).options(
        selectinload(Order.items),
        selectinload(Order.tracking_updates)
    ).where(Order.user_id == current_user.id).order_by(Order.created_at.desc())

    res = await db.execute(query)
    orders = res.scalars().all()
    return [OrderResponse.model_validate(o) for o in orders]


@router.get("/{order_number}", response_model=OrderResponse)
async def get_order_by_number(
    order_number: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    query = select(Order).options(
        selectinload(Order.items),
        selectinload(Order.tracking_updates)
    ).where(Order.order_number == order_number, Order.user_id == current_user.id)

    res = await db.execute(query)
    order = res.scalars().first()
    if not order:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Order not found")
    return OrderResponse.model_validate(order)
