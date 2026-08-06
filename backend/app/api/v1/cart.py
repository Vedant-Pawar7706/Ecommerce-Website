from typing import Optional
from fastapi import APIRouter, Depends, Query, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.cart import CartItemCreate, CartItemUpdate, CartSummaryResponse, CartItemResponse
from app.services.cart_service import CartService
from app.api.v1.deps import get_current_user_optional
from app.models.user import User

router = APIRouter(prefix="/cart", tags=["Shopping Cart"])


@router.get("", response_model=CartSummaryResponse)
async def get_cart(
    session_id: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    user_id = current_user.id if current_user else None
    cart_summary = await CartService.get_cart(db, user_id=user_id, session_id=session_id)
    return CartSummaryResponse(**cart_summary)


@router.post("/items", response_model=CartSummaryResponse)
async def add_to_cart(
    item_in: CartItemCreate,
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    user_id = current_user.id if current_user else None
    await CartService.add_item(
        db,
        product_id=item_in.product_id,
        variant_id=item_in.variant_id,
        quantity=item_in.quantity,
        user_id=user_id,
        session_id=item_in.session_id
    )
    cart_summary = await CartService.get_cart(db, user_id=user_id, session_id=item_in.session_id)
    return CartSummaryResponse(**cart_summary)


@router.put("/items/{item_id}", response_model=CartSummaryResponse)
async def update_cart_item(
    item_id: int,
    update_in: CartItemUpdate,
    session_id: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    user_id = current_user.id if current_user else None
    await CartService.update_item(db, item_id, update_in.quantity)
    cart_summary = await CartService.get_cart(db, user_id=user_id, session_id=session_id)
    return CartSummaryResponse(**cart_summary)


@router.delete("/items/{item_id}", response_model=CartSummaryResponse)
async def remove_cart_item(
    item_id: int,
    session_id: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    user_id = current_user.id if current_user else None
    await CartService.remove_item(db, item_id)
    cart_summary = await CartService.get_cart(db, user_id=user_id, session_id=session_id)
    return CartSummaryResponse(**cart_summary)
