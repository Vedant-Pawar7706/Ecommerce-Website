export type UserRole = 'customer' | 'seller' | 'admin' | 'super_admin';

export interface User {
  id: number;
  email: string;
  full_name: string;
  phone?: string;
  role: UserRole;
  avatar_url?: string;
  is_active: boolean;
  is_verified: boolean;
  wallet_balance: number;
  reward_coins: number;
  created_at: string;
}

export interface Address {
  id: number;
  user_id: number;
  full_name: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  address_type: string;
  is_default: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  icon_name?: string;
  parent_id?: number;
  subcategories?: Category[];
}

export interface ProductSpec {
  spec_key: string;
  spec_value: string;
}

export interface ProductVariant {
  id: number;
  sku: string;
  color_name?: string;
  color_hex?: string;
  size?: string;
  storage?: string;
  price: number;
  stock_quantity: number;
  variant_image?: string;
}

export interface ProductFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  sku: string;
  brand: string;
  category_id: number;
  seller_id: number;
  short_description: string;
  description: string;
  highlights: string[];
  base_price: number;
  discount_price?: number;
  discount_percentage: number;
  stock_quantity: number;
  is_in_stock: boolean;
  is_featured: boolean;
  is_trending: boolean;
  is_flash_sale: boolean;
  rating: number;
  review_count: number;
  primary_image: string;
  gallery_images: string[];
  images_360: string[];
  video_url?: string;
  warranty_info: string;
  return_policy: string;
  estimated_delivery_days: number;
  category?: Category;
  specs: ProductSpec[];
  variants: ProductVariant[];
  faqs: ProductFAQ[];
}

export interface ProductListResponse {
  items: Product[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface CartItem {
  id: number;
  product_id: number;
  variant_id?: number;
  quantity: number;
  price_at_addition: number;
  product: Product;
  variant?: ProductVariant;
  item_total: number;
}

export interface CartSummary {
  items: CartItem[];
  subtotal: number;
  estimated_shipping: number;
  estimated_tax: number;
  discount: number;
  total: number;
  item_count: number;
}

export interface OrderItem {
  id: number;
  product_id: number;
  product_name: string;
  product_image: string;
  variant_details?: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface OrderTracking {
  id: number;
  status: string;
  description: string;
  location: string;
  timestamp: string;
}

export interface Order {
  id: number;
  order_number: string;
  subtotal: number;
  shipping_fee: number;
  tax_amount: number;
  discount_amount: number;
  total_amount: number;
  coupon_code?: string;
  order_status: string;
  payment_status: string;
  payment_method: string;
  shipping_address: Address;
  tracking_number?: string;
  courier_partner?: string;
  estimated_delivery_date?: string;
  created_at: string;
  items: OrderItem[];
  tracking_updates: OrderTracking[];
}

export interface Review {
  id: number;
  product_id: number;
  user_name: string;
  rating: number;
  title: string;
  comment: string;
  is_verified_buyer: boolean;
  helpful_likes: number;
  created_at: string;
}

export interface Coupon {
  id: number;
  code: string;
  description: string;
  coupon_type: string;
  discount_type?: string;
  discount_value: number;
  min_order_amount: number;
  max_discount_amount?: number;
  expires_at?: string;
  is_active: boolean;
}

export interface AIChatMessage {
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  recommended_products?: Partial<Product>[];
  created_at: string;
}
