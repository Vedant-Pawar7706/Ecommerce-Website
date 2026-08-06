from typing import Optional
from sqlalchemy import String, Float, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


class ProductVariant(Base):
    __tablename__ = "product_variants"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"), nullable=False)
    sku: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    
    color_name: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)
    color_hex: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    size: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)
    storage: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)  # e.g., 128GB, 256GB, 1TB
    
    price: Mapped[float] = mapped_column(Float, nullable=False)
    stock_quantity: Mapped[int] = mapped_column(Integer, default=20)
    variant_image: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)

    product: Mapped["Product"] = relationship("Product", back_populates="variants")
