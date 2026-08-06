from typing import Optional
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.schemas.review_coupon_ai import AIChatMessageRequest, AIChatResponse
from app.services.ai_assistant_service import AIAssistantService
from app.api.v1.deps import get_current_user_optional
from app.models.user import User

router = APIRouter(prefix="/ai-assistant", tags=["AI Shopping Assistant (Rufus)"])


@router.post("/chat", response_model=AIChatResponse)
async def chat_with_rufus(
    request: AIChatMessageRequest,
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: AsyncSession = Depends(get_db)
):
    user_id = current_user.id if current_user else None
    response = await AIAssistantService.process_chat(
        db=db,
        user_id=user_id,
        session_id=request.session_id,
        user_message=request.message
    )
    return AIChatResponse(**response)
