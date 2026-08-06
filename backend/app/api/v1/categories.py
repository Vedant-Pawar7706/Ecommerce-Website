from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from app.core.database import get_db
from app.models.category import Category
from app.schemas.category import CategoryResponse

router = APIRouter(prefix="/categories", tags=["Categories"])


@router.get("", response_model=List[CategoryResponse])
async def list_categories(db: AsyncSession = Depends(get_db)):
    # Fetch root categories with preloaded subcategories
    query = select(Category).options(selectinload(Category.subcategories)).where(Category.parent_id == None).order_by(Category.display_order)
    res = await db.execute(query)
    categories = res.scalars().all()
    return [CategoryResponse.model_validate(c) for c in categories]
