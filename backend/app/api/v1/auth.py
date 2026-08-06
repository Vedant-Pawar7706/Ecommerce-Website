from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.schemas.user import UserCreate, UserLogin, UserResponse, TokenResponse, AddressCreate, AddressResponse
from app.services.auth_service import AuthService
from app.models.user import User, Address
from app.api.v1.deps import get_current_user

router = APIRouter(prefix="/auth", tags=["Authentication & User"])


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register(user_in: UserCreate, db: AsyncSession = Depends(get_db)):
    user = await AuthService.register_user(db, user_in)
    access_token, refresh_token = AuthService.generate_tokens(user)
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        user=UserResponse.model_validate(user)
    )


@router.post("/login", response_model=TokenResponse)
async def login(login_in: UserLogin, db: AsyncSession = Depends(get_db)):
    user = await AuthService.authenticate_user(db, login_in)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    access_token, refresh_token = AuthService.generate_tokens(user)
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        user=UserResponse.model_validate(user)
    )


@router.post("/oauth2-login", response_model=TokenResponse)
async def oauth2_token_login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    login_in = UserLogin(email=form_data.username, password=form_data.password)
    user = await AuthService.authenticate_user(db, login_in)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    access_token, refresh_token = AuthService.generate_tokens(user)
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        user=UserResponse.model_validate(user)
    )


@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(current_user: User = Depends(get_current_user)):
    return UserResponse.model_validate(current_user)


@router.post("/addresses", response_model=AddressResponse, status_code=status.HTTP_201_CREATED)
async def add_address(
    address_in: AddressCreate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    new_addr = Address(
        user_id=current_user.id,
        full_name=address_in.full_name,
        phone=address_in.phone,
        street_address=address_in.street_address,
        city=address_in.city,
        state=address_in.state,
        postal_code=address_in.postal_code,
        country=address_in.country,
        address_type=address_in.address_type,
        is_default=address_in.is_default
    )
    db.add(new_addr)
    await db.commit()
    await db.refresh(new_addr)
    return AddressResponse.model_validate(new_addr)


@router.get("/addresses", response_model=List[AddressResponse])
async def get_user_addresses(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    res = await db.execute(select(Address).where(Address.user_id == current_user.id))
    addresses = res.scalars().all()
    return [AddressResponse.model_validate(a) for a in addresses]
