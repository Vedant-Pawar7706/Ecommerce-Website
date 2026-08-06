from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload
from app.core.database import get_db
from app.models.review import Review
from app.models.product import Product
from app.schemas.review_coupon_ai import ReviewCreate, ReviewResponse
from app.api.v1.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/reviews", tags=["Product Reviews"])


@router.post("", response_model=ReviewResponse, status_code=status.HTTP_201_CREATED)
async def create_review(
    review_in: ReviewCreate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    prod_res = await db.execute(select(Product).where(Product.id == review_in.product_id))
    product = prod_res.scalars().first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")

    new_review = Review(
        product_id=review_in.product_id,
        user_id=current_user.id,
        rating=review_in.rating,
        title=review_in.title,
        comment=review_in.comment,
        is_verified_buyer=True,
        images=review_in.images
    )
    db.add(new_review)
    
    # Recalculate average rating
    rev_count_res = await db.execute(select(func.count(Review.id), func.avg(Review.rating)).where(Review.product_id == review_in.product_id))
    rev_count, rev_avg = rev_count_res.first()
    product.review_count = (rev_count or 0) + 1
    product.rating = round(float(rev_avg or review_in.rating), 1)

    await db.commit()
    await db.refresh(new_review)

    return ReviewResponse(
        id=new_review.id,
        product_id=new_review.product_id,
        user_id=new_review.user_id,
        user_name=current_user.full_name,
        rating=new_review.rating,
        title=new_review.title,
        comment=new_review.comment,
        is_verified_buyer=new_review.is_verified_buyer,
        helpful_likes=new_review.helpful_likes,
        unhelpful_dislikes=new_review.unhelpful_dislikes,
        images=new_review.images or [],
        created_at=new_review.created_at
    )


@router.get("/product/{product_id}", response_model=List[ReviewResponse])
async def get_product_reviews(product_id: int, db: AsyncSession = Depends(get_db)):
    query = select(Review).options(selectinload(Review.user)).where(Review.product_id == product_id).order_by(Review.created_at.desc())
    res = await db.execute(query)
    reviews = res.scalars().all()
    
    return [
        ReviewResponse(
            id=r.id,
            product_id=r.product_id,
            user_id=r.user_id,
            user_name=r.user.full_name if r.user else "Verified Customer",
            rating=r.rating,
            title=r.title,
            comment=r.comment,
            is_verified_buyer=r.is_verified_buyer,
            helpful_likes=r.helpful_likes,
            unhelpful_dislikes=r.unhelpful_dislikes,
            images=r.images or [],
            created_at=r.created_at
        )
        for r in reviews
    ]
