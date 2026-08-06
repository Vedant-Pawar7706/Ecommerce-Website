from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, ConfigDict
from app.models.coupon import CouponType


class ReviewCreate(BaseModel):
    product_id: int
    rating: int
    title: str
    comment: str
    images: List[str] = []


class ReviewResponse(BaseModel):
    id: int
    product_id: int
    user_id: int
    user_name: str
    rating: int
    title: str
    comment: str
    is_verified_buyer: bool
    helpful_likes: int
    unhelpful_dislikes: int
    images: List[str] = []
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)


class CouponValidateRequest(BaseModel):
    code: str
    cart_amount: float


class CouponResponse(BaseModel):
    id: int
    code: str
    description: str
    coupon_type: CouponType
    discount_value: float
    max_discount_amount: Optional[float] = None
    min_order_amount: float
    is_active: bool
    model_config = ConfigDict(from_attributes=True)


class AIChatMessageRequest(BaseModel):
    session_id: Optional[str] = None
    message: str


class AIChatResponse(BaseModel):
    session_id: str
    role: str = "assistant"
    content: str
    recommended_products: List[dict] = []
    created_at: datetime


class AnalyticsSummaryResponse(BaseModel):
    total_revenue: float
    total_orders: int
    total_customers: int
    total_products: int
    revenue_growth_percentage: float
    sales_by_category: List[dict]
    recent_orders: List[dict]
    top_selling_products: List[dict]
