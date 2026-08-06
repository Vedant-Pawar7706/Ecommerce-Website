from typing import Dict, Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.api.v1.deps import get_current_admin
from app.models.user import User
from app.models.order import Order, OrderStatus, OrderTracking
from app.schemas.product import ProductCreate, ProductResponse
from app.schemas.review_coupon_ai import AnalyticsSummaryResponse
from app.services.analytics_service import AnalyticsService

router = APIRouter(prefix="/admin", tags=["Admin & Executive Control"])


@router.get("/analytics", response_model=AnalyticsSummaryResponse)
async def get_dashboard_analytics(
    admin_user: User = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    metrics = await AnalyticsService.get_admin_dashboard_metrics(db)
    return AnalyticsSummaryResponse(**metrics)


@router.put("/orders/{order_id}/status")
async def update_order_status(
    order_id: int,
    status_str: str,
    admin_user: User = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    res = await db.execute(select(Order).where(Order.id == order_id))
    order = res.scalars().first()
    if not order:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Order not found")

    try:
        new_status = OrderStatus(status_str.lower())
        order.order_status = new_status
        
        # Add tracking entry
        tracking = OrderTracking(
            order_id=order.id,
            status=new_status,
            description=f"Order status updated to {new_status.value.upper()} by Admin",
            location="Cartify Distribution Facility"
        )
        db.add(tracking)
        await db.commit()
        return {"message": "Order status updated successfully", "status": new_status.value}
    except ValueError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid order status value")
