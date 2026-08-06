from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, ConfigDict
from app.schemas.category import CategorySimpleResponse


class ProductSpecSchema(BaseModel):
    spec_key: str
    spec_value: str
    model_config = ConfigDict(from_attributes=True)


class ProductFAQSchema(BaseModel):
    id: Optional[int] = None
    question: str
    answer: str
    model_config = ConfigDict(from_attributes=True)


class ProductVariantSchema(BaseModel):
    id: int
    sku: str
    color_name: Optional[str] = None
    color_hex: Optional[str] = None
    size: Optional[str] = None
    storage: Optional[str] = None
    price: float
    stock_quantity: int
    variant_image: Optional[str] = None
    model_config = ConfigDict(from_attributes=True)


class ProductBase(BaseModel):
    title: str
    sku: str
    barcode: Optional[str] = None
    brand: str
    category_id: int
    short_description: str
    description: str
    highlights: List[str] = []
    base_price: float
    discount_price: Optional[float] = None
    discount_percentage: int = 0
    stock_quantity: int = 50
    is_in_stock: bool = True
    is_featured: bool = False
    is_trending: bool = False
    is_flash_sale: bool = False
    primary_image: str
    gallery_images: List[str] = []
    images_360: List[str] = []
    video_url: Optional[str] = None
    warranty_info: str = "1 Year Brand Warranty"
    return_policy: str = "7 Days Replacement"
    estimated_delivery_days: int = 3
    weight_kg: Optional[float] = None
    dimensions_cm: Optional[str] = None


class ProductCreate(ProductBase):
    specs: List[ProductSpecSchema] = []
    variants: List[ProductVariantSchema] = []


class ProductResponse(ProductBase):
    id: int
    slug: str
    seller_id: int
    rating: float
    review_count: int
    created_at: datetime
    updated_at: datetime
    category: Optional[CategorySimpleResponse] = None
    specs: List[ProductSpecSchema] = []
    variants: List[ProductVariantSchema] = []
    faqs: List[ProductFAQSchema] = []
    model_config = ConfigDict(from_attributes=True)


class ProductListResponse(BaseModel):
    items: List[ProductResponse]
    total: int
    page: int
    size: int
    pages: int
