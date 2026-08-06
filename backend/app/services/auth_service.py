from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import HTTPException, status
from app.models.user import User, UserRole
from app.schemas.user import UserCreate, UserLogin
from app.core.security import get_password_hash, verify_password, create_access_token, create_refresh_token


class AuthService:

    @staticmethod
    async def register_user(db: AsyncSession, user_in: UserCreate) -> User:
        # Check if email exists
        result = await db.execute(select(User).where(User.email == user_in.email))
        existing_user = result.scalars().first()
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email already exists"
            )

        hashed_pwd = get_password_hash(user_in.password)
        new_user = User(
            email=user_in.email,
            hashed_password=hashed_pwd,
            full_name=user_in.full_name,
            phone=user_in.phone,
            role=user_in.role or UserRole.CUSTOMER,
            is_active=True,
            is_verified=True,  # Auto verify for smooth demo
            wallet_balance=100.0,
            reward_coins=500
        )
        db.add(new_user)
        await db.commit()
        await db.refresh(new_user)
        return new_user

    @staticmethod
    async def authenticate_user(db: AsyncSession, login_in: UserLogin) -> Optional[User]:
        result = await db.execute(select(User).where(User.email == login_in.email))
        user = result.scalars().first()
        if not user:
            return None
        if not verify_password(login_in.password, user.hashed_password):
            return None
        return user

    @staticmethod
    def generate_tokens(user: User):
        access_token = create_access_token(subject=user.id, role=user.role.value)
        refresh_token = create_refresh_token(subject=user.id)
        return access_token, refresh_token
