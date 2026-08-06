from typing import Optional, List
from pydantic import BaseModel, ConfigDict


class CategoryBase(BaseModel):
    name: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    icon_name: Optional[str] = None
    parent_id: Optional[int] = None
    display_order: int = 0


class CategoryCreate(CategoryBase):
    pass


class CategorySimpleResponse(CategoryBase):
    id: int
    slug: str
    model_config = ConfigDict(from_attributes=True)


class CategoryResponse(CategoryBase):
    id: int
    slug: str
    subcategories: List[CategorySimpleResponse] = []
    model_config = ConfigDict(from_attributes=True)
