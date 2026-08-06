from datetime import datetime, timezone
import enum
from typing import Optional
from sqlalchemy import String, Boolean, DateTime, Float, Enum, Integer
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base


class CouponType(str, enum.Enum):
    PERCENTAGE = "percentage"
    FLAT = "flat"
    FREE_SHIPPING = "free_shipping"


class Coupon(Base):
    __tablename__ = "coupons"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    code: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=False)
    
    coupon_type: Mapped[CouponType] = mapped_column(Enum(CouponType), default=CouponType.PERCENTAGE, nullable=False)
    discount_value: Mapped[float] = mapped_column(Float, nullable=False)  # 15 for 15% or $50 for flat
    max_discount_amount: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    min_order_amount: Mapped[float] = mapped_column(Float, default=0.0)
    
    usage_limit: Mapped[int] = mapped_column(Integer, default=1000)
    times_used: Mapped[int] = mapped_column(Integer, default=0)
    
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    auto_apply: Mapped[bool] = mapped_column(Boolean, default=False)
    
    expires_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
