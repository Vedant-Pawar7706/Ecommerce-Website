from typing import Optional, List
from pydantic import BaseModel, ConfigDict
from app.schemas.product import ProductResponse, ProductVariantSchema


class CartItemCreate(BaseModel):
    product_id: int
    variant_id: Optional[int] = None
    quantity: int = 1
    session_id: Optional[str] = None


class CartItemUpdate(BaseModel):
    quantity: int


class CartItemResponse(BaseModel):
    id: int
    user_id: Optional[int] = None
    session_id: Optional[str] = None
    product_id: int
    variant_id: Optional[int] = None
    quantity: int
    price_at_addition: float
    product: ProductResponse
    variant: Optional[ProductVariantSchema] = None
    item_total: float
    model_config = ConfigDict(from_attributes=True)


class CartSummaryResponse(BaseModel):
    items: List[CartItemResponse]
    subtotal: float
    estimated_shipping: float
    estimated_tax: float
    discount: float
    total: float
    item_count: int
