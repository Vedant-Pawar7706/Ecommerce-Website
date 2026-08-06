from fastapi import APIRouter
from app.api.v1.auth import router as auth_router
from app.api.v1.products import router as products_router
from app.api.v1.categories import router as categories_router
from app.api.v1.cart import router as cart_router
from app.api.v1.orders import router as orders_router
from app.api.v1.ai_chat import router as ai_chat_router
from app.api.v1.admin import router as admin_router
from app.api.v1.coupons import router as coupons_router
from app.api.v1.reviews import router as reviews_router

api_v1_router = APIRouter()

api_v1_router.include_router(auth_router)
api_v1_router.include_router(products_router)
api_v1_router.include_router(categories_router)
api_v1_router.include_router(cart_router)
api_v1_router.include_router(orders_router)
api_v1_router.include_router(ai_chat_router)
api_v1_router.include_router(admin_router)
api_v1_router.include_router(coupons_router)
api_v1_router.include_router(reviews_router)
