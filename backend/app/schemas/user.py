from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, ConfigDict
from app.models.user import UserRole


class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    phone: Optional[str] = None


class UserCreate(UserBase):
    password: str
    role: Optional[UserRole] = UserRole.CUSTOMER


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    avatar_url: Optional[str] = None


class AddressBase(BaseModel):
    full_name: str
    phone: str
    street_address: str
    city: str
    state: str
    postal_code: str
    country: str = "India"
    address_type: str = "Home"
    is_default: bool = False


class AddressCreate(AddressBase):
    pass


class AddressResponse(AddressBase):
    id: int
    user_id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)


class UserResponse(UserBase):
    id: int
    role: UserRole
    avatar_url: Optional[str] = None
    is_active: bool
    is_verified: bool
    wallet_balance: float
    reward_coins: int
    created_at: datetime
    addresses: List[AddressResponse] = []
    model_config = ConfigDict(from_attributes=True)


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: UserResponse
