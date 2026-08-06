from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, ConfigDict
from app.models.order import OrderStatus, PaymentStatus, PaymentMethod
from app.schemas.user import AddressBase


class OrderItemResponse(BaseModel):
    id: int
    product_id: int
    variant_id: Optional[int] = None
    product_name: str
    product_image: str
    variant_details: Optional[str] = None
    quantity: int
    unit_price: float
    total_price: float
    model_config = ConfigDict(from_attributes=True)


class OrderTrackingResponse(BaseModel):
    id: int
    status: OrderStatus
    description: str
    location: str
    timestamp: datetime
    model_config = ConfigDict(from_attributes=True)


class OrderCreate(BaseModel):
    shipping_address: AddressBase
    payment_method: PaymentMethod = PaymentMethod.CREDIT_CARD
    coupon_code: Optional[str] = None
    notes: Optional[str] = None
    session_id: Optional[str] = None


class OrderResponse(BaseModel):
    id: int
    order_number: str
    user_id: int
    subtotal: float
    shipping_fee: float
    tax_amount: float
    discount_amount: float
    total_amount: float
    coupon_code: Optional[str] = None
    order_status: OrderStatus
    payment_status: PaymentStatus
    payment_method: PaymentMethod
    payment_transaction_id: Optional[str] = None
    shipping_address: Dict[str, Any]
    tracking_number: Optional[str] = None
    courier_partner: Optional[str] = None
    estimated_delivery_date: Optional[datetime] = None
    notes: Optional[str] = None
    created_at: datetime
    items: List[OrderItemResponse] = []
    tracking_updates: List[OrderTrackingResponse] = []
    model_config = ConfigDict(from_attributes=True)


class PaymentProcessRequest(BaseModel):
    order_id: int
    payment_method: PaymentMethod
    card_number: Optional[str] = None
    upi_id: Optional[str] = None
    transaction_id: Optional[str] = None
