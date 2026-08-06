from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.product import ProductResponse, ProductListResponse
from app.services.product_service import ProductService

router = APIRouter(prefix="/products", tags=["Products & Catalog"])


@router.get("", response_model=ProductListResponse)
async def list_products(
    category_id: Optional[int] = Query(None),
    search: Optional[str] = Query(None),
    brand: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    min_rating: Optional[float] = Query(None),
    is_featured: Optional[bool] = Query(None),
    is_trending: Optional[bool] = Query(None),
    is_flash_sale: Optional[bool] = Query(None),
    sort_by: str = Query("popularity"),
    page: int = Query(1, ge=1),
    size: int = Query(12, ge=1, le=100),
    db: AsyncSession = Depends(get_db)
):
    result = await ProductService.get_products(
        db=db,
        category_id=category_id,
        search_query=search,
        brand=brand,
        min_price=min_price,
        max_price=max_price,
        min_rating=min_rating,
        is_featured=is_featured,
        is_trending=is_trending,
        is_flash_sale=is_flash_sale,
        sort_by=sort_by,
        page=page,
        size=size
    )
    items = [ProductResponse.model_validate(p) for p in result["items"]]
    return ProductListResponse(
        items=items,
        total=result["total"],
        page=result["page"],
        size=result["size"],
        pages=result["pages"]
    )


@router.get("/autocomplete")
async def autocomplete(
    q: str = Query(..., min_length=2),
    db: AsyncSession = Depends(get_db)
):
    suggestions = await ProductService.autocomplete_search(db, q)
    return suggestions


@router.get("/{slug_or_id}", response_model=ProductResponse)
async def get_product(
    slug_or_id: str,
    db: AsyncSession = Depends(get_db)
):
    product = await ProductService.get_product_by_slug_or_id(db, slug_or_id)
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    return ProductResponse.model_validate(product)
