from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.models.coupon import Coupon, CouponType
from app.schemas.review_coupon_ai import CouponResponse, CouponValidateRequest

router = APIRouter(prefix="/coupons", tags=["Coupons & Discounts"])


@router.get("", response_model=List[CouponResponse])
async def list_active_coupons(db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(Coupon).where(Coupon.is_active == True))
    coupons = res.scalars().all()
    return [CouponResponse.model_validate(c) for c in coupons]


@router.post("/validate", response_model=CouponResponse)
async def validate_coupon(req: CouponValidateRequest, db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(Coupon).where(Coupon.code == req.code, Coupon.is_active == True))
    coupon = res.scalars().first()
    if not coupon:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid or expired coupon code")
    if req.cart_amount < coupon.min_order_amount:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Minimum order amount for code {req.code} is ${coupon.min_order_amount}"
        )
    return CouponResponse.model_validate(coupon)
