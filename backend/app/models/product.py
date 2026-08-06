from datetime import datetime, timezone
from typing import List, Optional
from sqlalchemy import String, Boolean, DateTime, Float, ForeignKey, Text, Integer, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(300), unique=True, index=True, nullable=False)
    sku: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    barcode: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    brand: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    
    category_id: Mapped[int] = mapped_column(ForeignKey("categories.id", ondelete="CASCADE"), nullable=False)
    seller_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    short_description: Mapped[str] = mapped_column(Text, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    highlights: Mapped[Optional[List[str]]] = mapped_column(JSON, default=list)  # List of bullet strings
    
    base_price: Mapped[float] = mapped_column(Float, nullable=False)
    discount_price: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    discount_percentage: Mapped[int] = mapped_column(Integer, default=0)
    
    stock_quantity: Mapped[int] = mapped_column(Integer, default=50)
    is_in_stock: Mapped[bool] = mapped_column(Boolean, default=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False)
    is_trending: Mapped[bool] = mapped_column(Boolean, default=False)
    is_flash_sale: Mapped[bool] = mapped_column(Boolean, default=False)
    
    rating: Mapped[float] = mapped_column(Float, default=4.5)
    review_count: Mapped[int] = mapped_column(Integer, default=0)

    primary_image: Mapped[str] = mapped_column(String(500), nullable=False)
    gallery_images: Mapped[Optional[List[str]]] = mapped_column(JSON, default=list)
    images_360: Mapped[Optional[List[str]]] = mapped_column(JSON, default=list)
    video_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)

    warranty_info: Mapped[str] = mapped_column(String(200), default="1 Year Brand Warranty")
    return_policy: Mapped[str] = mapped_column(String(200), default="7 Days Replacement Policy")
    estimated_delivery_days: Mapped[int] = mapped_column(Integer, default=3)
    
    weight_kg: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    dimensions_cm: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    # Relationships
    category: Mapped["Category"] = relationship("Category", back_populates="products")
    seller: Mapped["User"] = relationship("User")
    variants: Mapped[List["ProductVariant"]] = relationship("ProductVariant", back_populates="product", cascade="all, delete-orphan")
    specs: Mapped[List["ProductSpec"]] = relationship("ProductSpec", back_populates="product", cascade="all, delete-orphan")
    reviews: Mapped[List["Review"]] = relationship("Review", back_populates="product", cascade="all, delete-orphan")
    faqs: Mapped[List["ProductFAQ"]] = relationship("ProductFAQ", back_populates="product", cascade="all, delete-orphan")


class ProductSpec(Base):
    __tablename__ = "product_specs"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"), nullable=False)
    spec_key: Mapped[str] = mapped_column(String(100), nullable=False)
    spec_value: Mapped[str] = mapped_column(String(255), nullable=False)

    product: Mapped["Product"] = relationship("Product", back_populates="specs")


class ProductFAQ(Base):
    __tablename__ = "product_faqs"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"), nullable=False)
    question: Mapped[str] = mapped_column(Text, nullable=False)
    answer: Mapped[str] = mapped_column(Text, nullable=False)

    product: Mapped["Product"] = relationship("Product", back_populates="faqs")
