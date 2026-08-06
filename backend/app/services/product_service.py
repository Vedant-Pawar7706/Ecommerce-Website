import math
from typing import Optional, List, Dict, Any
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, or_, and_, desc, asc
from sqlalchemy.orm import selectinload
from app.models.product import Product, ProductSpec, ProductFAQ
from app.models.category import Category
from app.models.variant import ProductVariant


class ProductService:

    @staticmethod
    async def get_products(
        db: AsyncSession,
        category_id: Optional[int] = None,
        search_query: Optional[str] = None,
        brand: Optional[str] = None,
        min_price: Optional[float] = None,
        max_price: Optional[float] = None,
        min_rating: Optional[float] = None,
        is_featured: Optional[bool] = None,
        is_trending: Optional[bool] = None,
        is_flash_sale: Optional[bool] = None,
        sort_by: str = "popularity",  # popularity, price_asc, price_desc, rating, newest
        page: int = 1,
        size: int = 12
    ) -> Dict[str, Any]:
        query = select(Product).options(
            selectinload(Product.category),
            selectinload(Product.specs),
            selectinload(Product.variants),
            selectinload(Product.faqs)
        )

        conditions = []

        if category_id:
            # Include subcategory products as well
            sub_query = select(Category.id).where(or_(Category.id == category_id, Category.parent_id == category_id))
            sub_res = await db.execute(sub_query)
            cat_ids = [r[0] for r in sub_res.fetchall()]
            if cat_ids:
                conditions.append(Product.category_id.in_(cat_ids))
            else:
                conditions.append(Product.category_id == category_id)

        if search_query and search_query.strip():
            term = f"%{search_query.strip().lower()}%"
            conditions.append(
                or_(
                    func.lower(Product.title).like(term),
                    func.lower(Product.brand).like(term),
                    func.lower(Product.short_description).like(term),
                    func.lower(Product.sku).like(term)
                )
            )

        if brand and brand.strip():
            brands = [b.strip() for b in brand.split(",")]
            conditions.append(Product.brand.in_(brands))

        if min_price is not None:
            conditions.append(Product.base_price >= min_price)
        if max_price is not None:
            conditions.append(Product.base_price <= max_price)

        if min_rating is not None:
            conditions.append(Product.rating >= min_rating)

        if is_featured is not None:
            conditions.append(Product.is_featured == is_featured)
        if is_trending is not None:
            conditions.append(Product.is_trending == is_trending)
        if is_flash_sale is not None:
            conditions.append(Product.is_flash_sale == is_flash_sale)

        if conditions:
            query = query.where(and_(*conditions))

        # Count total
        count_query = select(func.count(Product.id))
        if conditions:
            count_query = count_query.where(and_(*conditions))
        total_res = await db.execute(count_query)
        total = total_res.scalar() or 0

        # Order by logic
        if sort_by == "price_asc":
            query = query.order_by(asc(Product.base_price))
        elif sort_by == "price_desc":
            query = query.order_by(desc(Product.base_price))
        elif sort_by == "rating":
            query = query.order_by(desc(Product.rating))
        elif sort_by == "newest":
            query = query.order_by(desc(Product.created_at))
        else:  # popularity default
            query = query.order_by(desc(Product.review_count), desc(Product.rating))

        # Pagination
        offset = (page - 1) * size
        query = query.offset(offset).limit(size)

        res = await db.execute(query)
        items = res.scalars().all()
        pages = math.ceil(total / size) if total > 0 else 1

        return {
            "items": items,
            "total": total,
            "page": page,
            "size": size,
            "pages": pages
        }

    @staticmethod
    async def get_product_by_slug_or_id(db: AsyncSession, slug_or_id: str) -> Optional[Product]:
        query = select(Product).options(
            selectinload(Product.category),
            selectinload(Product.specs),
            selectinload(Product.variants),
            selectinload(Product.faqs),
            selectinload(Product.seller)
        )
        if slug_or_id.isdigit():
            query = query.where(Product.id == int(slug_or_id))
        else:
            query = query.where(Product.slug == slug_or_id)
        
        res = await db.execute(query)
        return res.scalars().first()

    @staticmethod
    async def autocomplete_search(db: AsyncSession, query_str: str) -> List[Dict[str, Any]]:
        if not query_str or len(query_str.strip()) < 2:
            return []
        term = f"%{query_str.strip().lower()}%"
        query = select(Product).where(
            or_(
                func.lower(Product.title).like(term),
                func.lower(Product.brand).like(term)
            )
        ).limit(6)
        res = await db.execute(query)
        products = res.scalars().all()
        return [
            {
                "id": p.id,
                "title": p.title,
                "slug": p.slug,
                "brand": p.brand,
                "price": p.base_price,
                "primary_image": p.primary_image
            }
            for p in products
        ]
