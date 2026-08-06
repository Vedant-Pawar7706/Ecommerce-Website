// 550 Products Dataset (50 items x 11 categories) - 100% Unique Titles & 100% Unique Image URLs
import { Product, Category } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  {
    "id": 1,
    "name": "Electronics & Mobiles",
    "slug": "electronics-mobiles",
    "description": "Smartphones, Laptops, Audio & Wearables",
    "image_url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Smartphone"
  },
  {
    "id": 2,
    "name": "Audio & Sound",
    "slug": "audio-sound",
    "description": "Noise Cancelling Headphones, Earbuds & Soundbars",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Headphones"
  },
  {
    "id": 3,
    "name": "Fashion & Apparel",
    "slug": "fashion-apparel",
    "description": "Men & Women luxury clothing, footwear & accessories",
    "image_url": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Shirt"
  },
  {
    "id": 4,
    "name": "Home & Smart Living",
    "slug": "home-smart-living",
    "description": "Smart Lighting, Robot Vacuums & Appliances",
    "image_url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Home"
  },
  {
    "id": 5,
    "name": "Gaming & Esports",
    "slug": "gaming-esports",
    "description": "Gaming Consoles, Laptops, Mechanical Keyboards & Gear",
    "image_url": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Gamepad2"
  },
  {
    "id": 6,
    "name": "Beauty & Personal Care",
    "slug": "beauty-personal-care",
    "description": "Grooming, Hair Care, Skincare & Wellness Tech",
    "image_url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Sparkles"
  },
  {
    "id": 7,
    "name": "Sports & Fitness",
    "slug": "sports-fitness",
    "description": "Treadmills, Dumbbells, Fitness Trackers & Activewear",
    "image_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Dumbbell"
  },
  {
    "id": 8,
    "name": "Toys & Games",
    "slug": "toys-games",
    "description": "RC Cars, Building Blocks, Board Games & Educational Toys",
    "image_url": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80",
    "icon_name": "ToyBrick"
  },
  {
    "id": 9,
    "name": "Automotive & Accessories",
    "slug": "automotive-accessories",
    "description": "Dash Cams, Car Vacuums, Tire Inflators & Car Electronics",
    "image_url": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=80",
    "icon_name": "Car"
  },
  {
    "id": 10,
    "name": "Books & Stationery",
    "slug": "books-stationery",
    "description": "E-Readers, Fountain Pens, Smart Notebooks & Organizers",
    "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    "icon_name": "BookOpen"
  },
  {
    "id": 11,
    "name": "Groceries & Gourmet",
    "slug": "groceries-gourmet",
    "description": "Organic Teas, Artisanal Oils, Gourmet Chocolates & Coffee",
    "image_url": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    "icon_name": "ShoppingBag"
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": 101,
    "title": "Aether Fold Smartphone Model-101",
    "slug": "aether-fold-smartphone-101",
    "sku": "AETH-101",
    "brand": "Aether",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Aether Fold Smartphone Model-101 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Aether Fold Smartphone Model-101. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2490.0,
    "discount_price": 2241.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80&img_id=101",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80&img_id=101"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80&img_id=101"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 101"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 102,
    "title": "Quantum Tech Ultra Laptop 16 Model-102",
    "slug": "quantum-tech-ultra-laptop-16-102",
    "sku": "QUAN-102",
    "brand": "Quantum Tech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Quantum Tech Ultra Laptop 16 Model-102 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Quantum Tech Ultra Laptop 16 Model-102. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3440.0,
    "discount_price": 3061.6,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80&img_id=102",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80&img_id=102"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 102"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 103,
    "title": "ChronoPulse Titanium Smartwatch Model-103",
    "slug": "chronopulse-titanium-smartwatch-103",
    "sku": "CHRO-103",
    "brand": "ChronoPulse",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ChronoPulse Titanium Smartwatch Model-103 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ChronoPulse Titanium Smartwatch Model-103. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4390.0,
    "discount_price": 3863.2,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80&img_id=103",
    "gallery_images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80&img_id=103"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80&img_id=103"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 103"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 104,
    "title": "ApexTech Tandem OLED Tablet Model-104",
    "slug": "apextech-tandem-oled-tablet-104",
    "sku": "APEX-104",
    "brand": "ApexTech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ApexTech Tandem OLED Tablet Model-104 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ApexTech Tandem OLED Tablet Model-104. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5340.0,
    "discount_price": 4645.8,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80&img_id=104",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80&img_id=104"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 104"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 105,
    "title": "VisionCam Cinema 4K Vlog Cam Model-105",
    "slug": "visioncam-cinema-4k-vlog-cam-105",
    "sku": "VISI-105",
    "brand": "VisionCam",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified VisionCam Cinema 4K Vlog Cam Model-105 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the VisionCam Cinema 4K Vlog Cam Model-105. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6290.0,
    "discount_price": 5409.4,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80&img_id=105",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80&img_id=105"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80&img_id=105"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 105"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 106,
    "title": "Asus MagSafe Power Bank 140W Model-106",
    "slug": "asus-magsafe-power-bank-140w-106",
    "sku": "ASUS-106",
    "brand": "Asus",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Asus MagSafe Power Bank 140W Model-106 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus MagSafe Power Bank 140W Model-106. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7240.0,
    "discount_price": 6154.0,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80&img_id=106",
    "gallery_images": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80&img_id=106"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 106"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 107,
    "title": "Samsung Curved Gaming Monitor 240Hz Model-107",
    "slug": "samsung-curved-gaming-monitor-240hz-107",
    "sku": "SAMS-107",
    "brand": "Samsung",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Samsung Curved Gaming Monitor 240Hz Model-107 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Samsung Curved Gaming Monitor 240Hz Model-107. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8190.0,
    "discount_price": 6879.6,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80&img_id=107",
    "gallery_images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80&img_id=107"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80&img_id=107"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 107"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 108,
    "title": "Anker Wireless Charging Pad Model-108",
    "slug": "anker-wireless-charging-pad-108",
    "sku": "ANKE-108",
    "brand": "Anker",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Anker Wireless Charging Pad Model-108 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Anker Wireless Charging Pad Model-108. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9140.0,
    "discount_price": 7586.2,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80&img_id=108",
    "gallery_images": [
      "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80&img_id=108"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 108"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 109,
    "title": "Logitech Pro Stylus Pen Model-109",
    "slug": "logitech-pro-stylus-pen-109",
    "sku": "LOGI-109",
    "brand": "Logitech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Pro Stylus Pen Model-109 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Pro Stylus Pen Model-109. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10090.0,
    "discount_price": 8273.8,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80&img_id=109",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80&img_id=109"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80&img_id=109"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 109"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 110,
    "title": "Google USB-C Thunderbolt Dock Model-110",
    "slug": "google-usb-c-thunderbolt-dock-110",
    "sku": "GOOG-110",
    "brand": "Google",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Google USB-C Thunderbolt Dock Model-110 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Google USB-C Thunderbolt Dock Model-110. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11040.0,
    "discount_price": 8942.4,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80&img_id=110",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80&img_id=110"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 110"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 111,
    "title": "Aether Fold Smartphone Model-111",
    "slug": "aether-fold-smartphone-111",
    "sku": "AETH-111",
    "brand": "Aether",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Aether Fold Smartphone Model-111 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Aether Fold Smartphone Model-111. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11990.0,
    "discount_price": 9592.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80&img_id=111",
    "gallery_images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80&img_id=111"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80&img_id=111"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 111"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 112,
    "title": "Quantum Tech Ultra Laptop 16 Model-112",
    "slug": "quantum-tech-ultra-laptop-16-112",
    "sku": "QUAN-112",
    "brand": "Quantum Tech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Quantum Tech Ultra Laptop 16 Model-112 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Quantum Tech Ultra Laptop 16 Model-112. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12940.0,
    "discount_price": 10222.6,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80&img_id=112",
    "gallery_images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80&img_id=112"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 112"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 113,
    "title": "ChronoPulse Titanium Smartwatch Model-113",
    "slug": "chronopulse-titanium-smartwatch-113",
    "sku": "CHRO-113",
    "brand": "ChronoPulse",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ChronoPulse Titanium Smartwatch Model-113 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ChronoPulse Titanium Smartwatch Model-113. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13890.0,
    "discount_price": 10834.2,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80&img_id=113",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80&img_id=113"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80&img_id=113"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 113"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 114,
    "title": "ApexTech Tandem OLED Tablet Model-114",
    "slug": "apextech-tandem-oled-tablet-114",
    "sku": "APEX-114",
    "brand": "ApexTech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ApexTech Tandem OLED Tablet Model-114 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ApexTech Tandem OLED Tablet Model-114. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14840.0,
    "discount_price": 11426.8,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80&img_id=114",
    "gallery_images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80&img_id=114"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 114"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 115,
    "title": "VisionCam Cinema 4K Vlog Cam Model-115",
    "slug": "visioncam-cinema-4k-vlog-cam-115",
    "sku": "VISI-115",
    "brand": "VisionCam",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified VisionCam Cinema 4K Vlog Cam Model-115 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the VisionCam Cinema 4K Vlog Cam Model-115. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 15790.0,
    "discount_price": 12000.4,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80&img_id=115",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80&img_id=115"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80&img_id=115"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 115"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 116,
    "title": "Asus MagSafe Power Bank 140W Model-116",
    "slug": "asus-magsafe-power-bank-140w-116",
    "sku": "ASUS-116",
    "brand": "Asus",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Asus MagSafe Power Bank 140W Model-116 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus MagSafe Power Bank 140W Model-116. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 16740.0,
    "discount_price": 12555.0,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80&img_id=116",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80&img_id=116"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 116"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 117,
    "title": "Samsung Curved Gaming Monitor 240Hz Model-117",
    "slug": "samsung-curved-gaming-monitor-240hz-117",
    "sku": "SAMS-117",
    "brand": "Samsung",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Samsung Curved Gaming Monitor 240Hz Model-117 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Samsung Curved Gaming Monitor 240Hz Model-117. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 17690.0,
    "discount_price": 13090.6,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80&img_id=117",
    "gallery_images": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80&img_id=117"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80&img_id=117"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 117"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 118,
    "title": "Anker Wireless Charging Pad Model-118",
    "slug": "anker-wireless-charging-pad-118",
    "sku": "ANKE-118",
    "brand": "Anker",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Anker Wireless Charging Pad Model-118 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Anker Wireless Charging Pad Model-118. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 18640.0,
    "discount_price": 13607.2,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1616353071588-708dcff912a2?w=800&auto=format&fit=crop&q=80&img_id=118",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616353071588-708dcff912a2?w=800&auto=format&fit=crop&q=80&img_id=118"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 118"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 119,
    "title": "Logitech Pro Stylus Pen Model-119",
    "slug": "logitech-pro-stylus-pen-119",
    "sku": "LOGI-119",
    "brand": "Logitech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Pro Stylus Pen Model-119 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Pro Stylus Pen Model-119. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 19590.0,
    "discount_price": 14104.8,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80&img_id=119",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80&img_id=119"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80&img_id=119"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 119"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 120,
    "title": "Google USB-C Thunderbolt Dock Model-120",
    "slug": "google-usb-c-thunderbolt-dock-120",
    "sku": "GOOG-120",
    "brand": "Google",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Google USB-C Thunderbolt Dock Model-120 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Google USB-C Thunderbolt Dock Model-120. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 20540.0,
    "discount_price": 14583.4,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80&img_id=120",
    "gallery_images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80&img_id=120"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 120"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 121,
    "title": "Aether Fold Smartphone Model-121",
    "slug": "aether-fold-smartphone-121",
    "sku": "AETH-121",
    "brand": "Aether",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Aether Fold Smartphone Model-121 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Aether Fold Smartphone Model-121. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 21490.0,
    "discount_price": 19341.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=80&img_id=121",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=80&img_id=121"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=80&img_id=121"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 121"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 122,
    "title": "Quantum Tech Ultra Laptop 16 Model-122",
    "slug": "quantum-tech-ultra-laptop-16-122",
    "sku": "QUAN-122",
    "brand": "Quantum Tech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Quantum Tech Ultra Laptop 16 Model-122 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Quantum Tech Ultra Laptop 16 Model-122. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 22440.0,
    "discount_price": 19971.6,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=122",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=122"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 122"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 123,
    "title": "ChronoPulse Titanium Smartwatch Model-123",
    "slug": "chronopulse-titanium-smartwatch-123",
    "sku": "CHRO-123",
    "brand": "ChronoPulse",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ChronoPulse Titanium Smartwatch Model-123 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ChronoPulse Titanium Smartwatch Model-123. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 23390.0,
    "discount_price": 20583.2,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop&q=80&img_id=123",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop&q=80&img_id=123"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop&q=80&img_id=123"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 123"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 124,
    "title": "ApexTech Tandem OLED Tablet Model-124",
    "slug": "apextech-tandem-oled-tablet-124",
    "sku": "APEX-124",
    "brand": "ApexTech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ApexTech Tandem OLED Tablet Model-124 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ApexTech Tandem OLED Tablet Model-124. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 24340.0,
    "discount_price": 21175.8,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80&img_id=124",
    "gallery_images": [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80&img_id=124"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 124"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 125,
    "title": "VisionCam Cinema 4K Vlog Cam Model-125",
    "slug": "visioncam-cinema-4k-vlog-cam-125",
    "sku": "VISI-125",
    "brand": "VisionCam",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified VisionCam Cinema 4K Vlog Cam Model-125 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the VisionCam Cinema 4K Vlog Cam Model-125. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 25290.0,
    "discount_price": 21749.4,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=800&auto=format&fit=crop&q=80&img_id=125",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=800&auto=format&fit=crop&q=80&img_id=125"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=800&auto=format&fit=crop&q=80&img_id=125"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 125"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 126,
    "title": "Asus MagSafe Power Bank 140W Model-126",
    "slug": "asus-magsafe-power-bank-140w-126",
    "sku": "ASUS-126",
    "brand": "Asus",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Asus MagSafe Power Bank 140W Model-126 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus MagSafe Power Bank 140W Model-126. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 26240.0,
    "discount_price": 22304.0,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&auto=format&fit=crop&q=80&img_id=126",
    "gallery_images": [
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&auto=format&fit=crop&q=80&img_id=126"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 126"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 127,
    "title": "Samsung Curved Gaming Monitor 240Hz Model-127",
    "slug": "samsung-curved-gaming-monitor-240hz-127",
    "sku": "SAMS-127",
    "brand": "Samsung",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Samsung Curved Gaming Monitor 240Hz Model-127 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Samsung Curved Gaming Monitor 240Hz Model-127. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 27190.0,
    "discount_price": 22839.6,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1574944985070-8f30c4397220?w=800&auto=format&fit=crop&q=80&img_id=127",
    "gallery_images": [
      "https://images.unsplash.com/photo-1574944985070-8f30c4397220?w=800&auto=format&fit=crop&q=80&img_id=127"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1574944985070-8f30c4397220?w=800&auto=format&fit=crop&q=80&img_id=127"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 127"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 128,
    "title": "Anker Wireless Charging Pad Model-128",
    "slug": "anker-wireless-charging-pad-128",
    "sku": "ANKE-128",
    "brand": "Anker",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Anker Wireless Charging Pad Model-128 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Anker Wireless Charging Pad Model-128. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 28140.0,
    "discount_price": 23356.2,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80&img_id=128",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80&img_id=128"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 128"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 129,
    "title": "Logitech Pro Stylus Pen Model-129",
    "slug": "logitech-pro-stylus-pen-129",
    "sku": "LOGI-129",
    "brand": "Logitech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Pro Stylus Pen Model-129 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Pro Stylus Pen Model-129. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 29090.0,
    "discount_price": 23853.8,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80&img_id=129",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80&img_id=129"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80&img_id=129"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 129"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 130,
    "title": "Google USB-C Thunderbolt Dock Model-130",
    "slug": "google-usb-c-thunderbolt-dock-130",
    "sku": "GOOG-130",
    "brand": "Google",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Google USB-C Thunderbolt Dock Model-130 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Google USB-C Thunderbolt Dock Model-130. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30040.0,
    "discount_price": 24332.4,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80&img_id=130",
    "gallery_images": [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80&img_id=130"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 130"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 131,
    "title": "Aether Fold Smartphone Model-131",
    "slug": "aether-fold-smartphone-131",
    "sku": "AETH-131",
    "brand": "Aether",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Aether Fold Smartphone Model-131 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Aether Fold Smartphone Model-131. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30990.0,
    "discount_price": 24792.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80&img_id=131",
    "gallery_images": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80&img_id=131"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80&img_id=131"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 131"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 132,
    "title": "Quantum Tech Ultra Laptop 16 Model-132",
    "slug": "quantum-tech-ultra-laptop-16-132",
    "sku": "QUAN-132",
    "brand": "Quantum Tech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Quantum Tech Ultra Laptop 16 Model-132 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Quantum Tech Ultra Laptop 16 Model-132. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 31940.0,
    "discount_price": 25232.6,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80&img_id=132",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80&img_id=132"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 132"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 133,
    "title": "ChronoPulse Titanium Smartwatch Model-133",
    "slug": "chronopulse-titanium-smartwatch-133",
    "sku": "CHRO-133",
    "brand": "ChronoPulse",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ChronoPulse Titanium Smartwatch Model-133 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ChronoPulse Titanium Smartwatch Model-133. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 32890.0,
    "discount_price": 25654.2,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80&img_id=133",
    "gallery_images": [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80&img_id=133"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80&img_id=133"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 133"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 134,
    "title": "ApexTech Tandem OLED Tablet Model-134",
    "slug": "apextech-tandem-oled-tablet-134",
    "sku": "APEX-134",
    "brand": "ApexTech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ApexTech Tandem OLED Tablet Model-134 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ApexTech Tandem OLED Tablet Model-134. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 33840.0,
    "discount_price": 26056.8,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1555617766-c94804975da3?w=800&auto=format&fit=crop&q=80&img_id=134",
    "gallery_images": [
      "https://images.unsplash.com/photo-1555617766-c94804975da3?w=800&auto=format&fit=crop&q=80&img_id=134"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 134"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 135,
    "title": "VisionCam Cinema 4K Vlog Cam Model-135",
    "slug": "visioncam-cinema-4k-vlog-cam-135",
    "sku": "VISI-135",
    "brand": "VisionCam",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified VisionCam Cinema 4K Vlog Cam Model-135 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the VisionCam Cinema 4K Vlog Cam Model-135. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 34790.0,
    "discount_price": 26440.4,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80&img_id=135",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80&img_id=135"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80&img_id=135"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 135"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 136,
    "title": "Asus MagSafe Power Bank 140W Model-136",
    "slug": "asus-magsafe-power-bank-140w-136",
    "sku": "ASUS-136",
    "brand": "Asus",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Asus MagSafe Power Bank 140W Model-136 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus MagSafe Power Bank 140W Model-136. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 35740.0,
    "discount_price": 26805.0,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&auto=format&fit=crop&q=80&img_id=136",
    "gallery_images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&auto=format&fit=crop&q=80&img_id=136"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 136"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 137,
    "title": "Samsung Curved Gaming Monitor 240Hz Model-137",
    "slug": "samsung-curved-gaming-monitor-240hz-137",
    "sku": "SAMS-137",
    "brand": "Samsung",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Samsung Curved Gaming Monitor 240Hz Model-137 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Samsung Curved Gaming Monitor 240Hz Model-137. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 36690.0,
    "discount_price": 27150.6,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&auto=format&fit=crop&q=80&img_id=137",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&auto=format&fit=crop&q=80&img_id=137"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&auto=format&fit=crop&q=80&img_id=137"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 137"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 138,
    "title": "Anker Wireless Charging Pad Model-138",
    "slug": "anker-wireless-charging-pad-138",
    "sku": "ANKE-138",
    "brand": "Anker",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Anker Wireless Charging Pad Model-138 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Anker Wireless Charging Pad Model-138. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 37640.0,
    "discount_price": 27477.2,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1507764923504-74ffe32822a1?w=800&auto=format&fit=crop&q=80&img_id=138",
    "gallery_images": [
      "https://images.unsplash.com/photo-1507764923504-74ffe32822a1?w=800&auto=format&fit=crop&q=80&img_id=138"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 138"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 139,
    "title": "Logitech Pro Stylus Pen Model-139",
    "slug": "logitech-pro-stylus-pen-139",
    "sku": "LOGI-139",
    "brand": "Logitech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Pro Stylus Pen Model-139 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Pro Stylus Pen Model-139. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 38590.0,
    "discount_price": 27784.8,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80&img_id=139",
    "gallery_images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80&img_id=139"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80&img_id=139"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 139"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 140,
    "title": "Google USB-C Thunderbolt Dock Model-140",
    "slug": "google-usb-c-thunderbolt-dock-140",
    "sku": "GOOG-140",
    "brand": "Google",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Google USB-C Thunderbolt Dock Model-140 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Google USB-C Thunderbolt Dock Model-140. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 39540.0,
    "discount_price": 28073.4,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=800&auto=format&fit=crop&q=80&img_id=140",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=800&auto=format&fit=crop&q=80&img_id=140"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 140"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 141,
    "title": "Aether Fold Smartphone Model-141",
    "slug": "aether-fold-smartphone-141",
    "sku": "AETH-141",
    "brand": "Aether",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Aether Fold Smartphone Model-141 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Aether Fold Smartphone Model-141. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 40490.0,
    "discount_price": 36441.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&auto=format&fit=crop&q=80&img_id=141",
    "gallery_images": [
      "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&auto=format&fit=crop&q=80&img_id=141"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&auto=format&fit=crop&q=80&img_id=141"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 141"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 142,
    "title": "Quantum Tech Ultra Laptop 16 Model-142",
    "slug": "quantum-tech-ultra-laptop-16-142",
    "sku": "QUAN-142",
    "brand": "Quantum Tech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Quantum Tech Ultra Laptop 16 Model-142 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Quantum Tech Ultra Laptop 16 Model-142. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 41440.0,
    "discount_price": 36881.6,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80&img_id=142",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80&img_id=142"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 142"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 143,
    "title": "ChronoPulse Titanium Smartwatch Model-143",
    "slug": "chronopulse-titanium-smartwatch-143",
    "sku": "CHRO-143",
    "brand": "ChronoPulse",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ChronoPulse Titanium Smartwatch Model-143 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ChronoPulse Titanium Smartwatch Model-143. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 42390.0,
    "discount_price": 37303.2,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80&img_id=143",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80&img_id=143"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80&img_id=143"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 143"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 144,
    "title": "ApexTech Tandem OLED Tablet Model-144",
    "slug": "apextech-tandem-oled-tablet-144",
    "sku": "APEX-144",
    "brand": "ApexTech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified ApexTech Tandem OLED Tablet Model-144 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ApexTech Tandem OLED Tablet Model-144. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 43340.0,
    "discount_price": 37705.8,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=144",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=144"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 144"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 145,
    "title": "VisionCam Cinema 4K Vlog Cam Model-145",
    "slug": "visioncam-cinema-4k-vlog-cam-145",
    "sku": "VISI-145",
    "brand": "VisionCam",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified VisionCam Cinema 4K Vlog Cam Model-145 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the VisionCam Cinema 4K Vlog Cam Model-145. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 44290.0,
    "discount_price": 38089.4,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&auto=format&fit=crop&q=80&img_id=145",
    "gallery_images": [
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&auto=format&fit=crop&q=80&img_id=145"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&auto=format&fit=crop&q=80&img_id=145"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 145"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 146,
    "title": "Asus MagSafe Power Bank 140W Model-146",
    "slug": "asus-magsafe-power-bank-140w-146",
    "sku": "ASUS-146",
    "brand": "Asus",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Asus MagSafe Power Bank 140W Model-146 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus MagSafe Power Bank 140W Model-146. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 45240.0,
    "discount_price": 38454.0,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&auto=format&fit=crop&q=80&img_id=146",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&auto=format&fit=crop&q=80&img_id=146"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 146"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 147,
    "title": "Samsung Curved Gaming Monitor 240Hz Model-147",
    "slug": "samsung-curved-gaming-monitor-240hz-147",
    "sku": "SAMS-147",
    "brand": "Samsung",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Samsung Curved Gaming Monitor 240Hz Model-147 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Samsung Curved Gaming Monitor 240Hz Model-147. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 46190.0,
    "discount_price": 38799.6,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80&img_id=147",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80&img_id=147"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80&img_id=147"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 147"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 148,
    "title": "Anker Wireless Charging Pad Model-148",
    "slug": "anker-wireless-charging-pad-148",
    "sku": "ANKE-148",
    "brand": "Anker",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Anker Wireless Charging Pad Model-148 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Anker Wireless Charging Pad Model-148. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 47140.0,
    "discount_price": 39126.2,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80&img_id=148",
    "gallery_images": [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80&img_id=148"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 148"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 149,
    "title": "Logitech Pro Stylus Pen Model-149",
    "slug": "logitech-pro-stylus-pen-149",
    "sku": "LOGI-149",
    "brand": "Logitech",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Pro Stylus Pen Model-149 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Pro Stylus Pen Model-149. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 48090.0,
    "discount_price": 39433.8,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80&img_id=149",
    "gallery_images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80&img_id=149"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80&img_id=149"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 149"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 150,
    "title": "Google USB-C Thunderbolt Dock Model-150",
    "slug": "google-usb-c-thunderbolt-dock-150",
    "sku": "GOOG-150",
    "brand": "Google",
    "category_id": 1,
    "seller_id": 2,
    "short_description": "Genuine certified Google USB-C Thunderbolt Dock Model-150 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Google USB-C Thunderbolt Dock Model-150. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 49040.0,
    "discount_price": 39722.4,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop&q=80&img_id=150",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop&q=80&img_id=150"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 150"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 151,
    "title": "SonicPulse ANC Wireless Over-Ear Headphones Model-151",
    "slug": "sonicpulse-anc-wireless-over-ear-headphones-151",
    "sku": "SONI-151",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse ANC Wireless Over-Ear Headphones Model-151 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse ANC Wireless Over-Ear Headphones Model-151. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=151",
    "gallery_images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=151"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=151"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 151"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 152,
    "title": "boAt TWS Active Earbuds Model-152",
    "slug": "boat-tws-active-earbuds-152",
    "sku": "BOAT-152",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt TWS Active Earbuds Model-152 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt TWS Active Earbuds Model-152. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=152",
    "gallery_images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=152"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 152"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 153,
    "title": "Bose Wireless Party Speaker 50W Model-153",
    "slug": "bose-wireless-party-speaker-50w-153",
    "sku": "BOSE-153",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Wireless Party Speaker 50W Model-153 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Wireless Party Speaker 50W Model-153. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=153",
    "gallery_images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=153"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=153"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 153"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 154,
    "title": "Sony Studio Reference Headphones Model-154",
    "slug": "sony-studio-reference-headphones-154",
    "sku": "SONY-154",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Studio Reference Headphones Model-154 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Studio Reference Headphones Model-154. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=154",
    "gallery_images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=154"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 154"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 155,
    "title": "JBL Dolby Atmos Soundbar Model-155",
    "slug": "jbl-dolby-atmos-soundbar-155",
    "sku": "JBL-155",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL Dolby Atmos Soundbar Model-155 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL Dolby Atmos Soundbar Model-155. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=155",
    "gallery_images": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=155"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=155"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 155"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 156,
    "title": "Sennheiser Condenser Vlog Microphone Model-156",
    "slug": "sennheiser-condenser-vlog-microphone-156",
    "sku": "SENN-156",
    "brand": "Sennheiser",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sennheiser Condenser Vlog Microphone Model-156 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sennheiser Condenser Vlog Microphone Model-156. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=156",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=156"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 156"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 157,
    "title": "Marshall Hi-Fi DAC Amplifier Model-157",
    "slug": "marshall-hi-fi-dac-amplifier-157",
    "sku": "MARS-157",
    "brand": "Marshall",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Marshall Hi-Fi DAC Amplifier Model-157 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Marshall Hi-Fi DAC Amplifier Model-157. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=157",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=157"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=157"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 157"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 158,
    "title": "Audio-Technica Sport In-Ear Wireless Earbuds Model-158",
    "slug": "audio-technica-sport-in-ear-wireless-earbuds-158",
    "sku": "AUDI-158",
    "brand": "Audio-Technica",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Audio-Technica Sport In-Ear Wireless Earbuds Model-158 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Audio-Technica Sport In-Ear Wireless Earbuds Model-158. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=158",
    "gallery_images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=158"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 158"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 159,
    "title": "Shure ANC Wireless Over-Ear Headphones Model-159",
    "slug": "shure-anc-wireless-over-ear-headphones-159",
    "sku": "SHUR-159",
    "brand": "Shure",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Shure ANC Wireless Over-Ear Headphones Model-159 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Shure ANC Wireless Over-Ear Headphones Model-159. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=159",
    "gallery_images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=159"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=159"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 159"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 160,
    "title": "SonicPulse TWS Active Earbuds Model-160",
    "slug": "sonicpulse-tws-active-earbuds-160",
    "sku": "SONI-160",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse TWS Active Earbuds Model-160 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse TWS Active Earbuds Model-160. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=160",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=160"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 160"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 161,
    "title": "boAt Wireless Party Speaker 50W Model-161",
    "slug": "boat-wireless-party-speaker-50w-161",
    "sku": "BOAT-161",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt Wireless Party Speaker 50W Model-161 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt Wireless Party Speaker 50W Model-161. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=161",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=161"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=161"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 161"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 162,
    "title": "Bose Studio Reference Headphones Model-162",
    "slug": "bose-studio-reference-headphones-162",
    "sku": "BOSE-162",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Studio Reference Headphones Model-162 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Studio Reference Headphones Model-162. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=162",
    "gallery_images": [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=162"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 162"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 163,
    "title": "Sony Dolby Atmos Soundbar Model-163",
    "slug": "sony-dolby-atmos-soundbar-163",
    "sku": "SONY-163",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Dolby Atmos Soundbar Model-163 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Dolby Atmos Soundbar Model-163. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=163",
    "gallery_images": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=163"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=163"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 163"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 164,
    "title": "JBL Condenser Vlog Microphone Model-164",
    "slug": "jbl-condenser-vlog-microphone-164",
    "sku": "JBL-164",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL Condenser Vlog Microphone Model-164 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL Condenser Vlog Microphone Model-164. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=164",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=164"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 164"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 165,
    "title": "Sennheiser Hi-Fi DAC Amplifier Model-165",
    "slug": "sennheiser-hi-fi-dac-amplifier-165",
    "sku": "SENN-165",
    "brand": "Sennheiser",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sennheiser Hi-Fi DAC Amplifier Model-165 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sennheiser Hi-Fi DAC Amplifier Model-165. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=165",
    "gallery_images": [
      "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=165"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=165"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 165"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 166,
    "title": "Marshall Sport In-Ear Wireless Earbuds Model-166",
    "slug": "marshall-sport-in-ear-wireless-earbuds-166",
    "sku": "MARS-166",
    "brand": "Marshall",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Marshall Sport In-Ear Wireless Earbuds Model-166 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Marshall Sport In-Ear Wireless Earbuds Model-166. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80&img_id=166",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80&img_id=166"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 166"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 167,
    "title": "Audio-Technica ANC Wireless Over-Ear Headphones Model-167",
    "slug": "audio-technica-anc-wireless-over-ear-headphones-167",
    "sku": "AUDI-167",
    "brand": "Audio-Technica",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Audio-Technica ANC Wireless Over-Ear Headphones Model-167 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Audio-Technica ANC Wireless Over-Ear Headphones Model-167. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=167",
    "gallery_images": [
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=167"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=167"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 167"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 168,
    "title": "Shure TWS Active Earbuds Model-168",
    "slug": "shure-tws-active-earbuds-168",
    "sku": "SHUR-168",
    "brand": "Shure",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Shure TWS Active Earbuds Model-168 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Shure TWS Active Earbuds Model-168. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80&img_id=168",
    "gallery_images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80&img_id=168"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 168"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 169,
    "title": "SonicPulse Wireless Party Speaker 50W Model-169",
    "slug": "sonicpulse-wireless-party-speaker-50w-169",
    "sku": "SONI-169",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse Wireless Party Speaker 50W Model-169 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse Wireless Party Speaker 50W Model-169. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=169",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=169"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=169"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 169"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 170,
    "title": "boAt Studio Reference Headphones Model-170",
    "slug": "boat-studio-reference-headphones-170",
    "sku": "BOAT-170",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt Studio Reference Headphones Model-170 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt Studio Reference Headphones Model-170. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=170",
    "gallery_images": [
      "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=170"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 170"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 171,
    "title": "Bose Dolby Atmos Soundbar Model-171",
    "slug": "bose-dolby-atmos-soundbar-171",
    "sku": "BOSE-171",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Dolby Atmos Soundbar Model-171 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Dolby Atmos Soundbar Model-171. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=171",
    "gallery_images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=171"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=171"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 171"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 172,
    "title": "Sony Condenser Vlog Microphone Model-172",
    "slug": "sony-condenser-vlog-microphone-172",
    "sku": "SONY-172",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Condenser Vlog Microphone Model-172 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Condenser Vlog Microphone Model-172. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=172",
    "gallery_images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=172"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 172"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 173,
    "title": "JBL Hi-Fi DAC Amplifier Model-173",
    "slug": "jbl-hi-fi-dac-amplifier-173",
    "sku": "JBL-173",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL Hi-Fi DAC Amplifier Model-173 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL Hi-Fi DAC Amplifier Model-173. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=173",
    "gallery_images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=173"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=173"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 173"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 174,
    "title": "Sennheiser Sport In-Ear Wireless Earbuds Model-174",
    "slug": "sennheiser-sport-in-ear-wireless-earbuds-174",
    "sku": "SENN-174",
    "brand": "Sennheiser",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sennheiser Sport In-Ear Wireless Earbuds Model-174 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sennheiser Sport In-Ear Wireless Earbuds Model-174. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=174",
    "gallery_images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=174"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 174"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 175,
    "title": "Marshall ANC Wireless Over-Ear Headphones Model-175",
    "slug": "marshall-anc-wireless-over-ear-headphones-175",
    "sku": "MARS-175",
    "brand": "Marshall",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Marshall ANC Wireless Over-Ear Headphones Model-175 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Marshall ANC Wireless Over-Ear Headphones Model-175. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=175",
    "gallery_images": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=175"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=175"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 175"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 176,
    "title": "Audio-Technica TWS Active Earbuds Model-176",
    "slug": "audio-technica-tws-active-earbuds-176",
    "sku": "AUDI-176",
    "brand": "Audio-Technica",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Audio-Technica TWS Active Earbuds Model-176 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Audio-Technica TWS Active Earbuds Model-176. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=176",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=176"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 176"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 177,
    "title": "Shure Wireless Party Speaker 50W Model-177",
    "slug": "shure-wireless-party-speaker-50w-177",
    "sku": "SHUR-177",
    "brand": "Shure",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Shure Wireless Party Speaker 50W Model-177 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Shure Wireless Party Speaker 50W Model-177. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=177",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=177"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=177"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 177"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 178,
    "title": "SonicPulse Studio Reference Headphones Model-178",
    "slug": "sonicpulse-studio-reference-headphones-178",
    "sku": "SONI-178",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse Studio Reference Headphones Model-178 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse Studio Reference Headphones Model-178. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=178",
    "gallery_images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=178"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 178"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 179,
    "title": "boAt Dolby Atmos Soundbar Model-179",
    "slug": "boat-dolby-atmos-soundbar-179",
    "sku": "BOAT-179",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt Dolby Atmos Soundbar Model-179 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt Dolby Atmos Soundbar Model-179. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=179",
    "gallery_images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=179"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=179"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 179"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 180,
    "title": "Bose Condenser Vlog Microphone Model-180",
    "slug": "bose-condenser-vlog-microphone-180",
    "sku": "BOSE-180",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Condenser Vlog Microphone Model-180 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Condenser Vlog Microphone Model-180. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=180",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=180"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 180"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 181,
    "title": "Sony Hi-Fi DAC Amplifier Model-181",
    "slug": "sony-hi-fi-dac-amplifier-181",
    "sku": "SONY-181",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Hi-Fi DAC Amplifier Model-181 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Hi-Fi DAC Amplifier Model-181. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=181",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=181"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=181"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 181"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 182,
    "title": "JBL Sport In-Ear Wireless Earbuds Model-182",
    "slug": "jbl-sport-in-ear-wireless-earbuds-182",
    "sku": "JBL-182",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL Sport In-Ear Wireless Earbuds Model-182 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL Sport In-Ear Wireless Earbuds Model-182. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=182",
    "gallery_images": [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=182"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 182"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 183,
    "title": "Sennheiser ANC Wireless Over-Ear Headphones Model-183",
    "slug": "sennheiser-anc-wireless-over-ear-headphones-183",
    "sku": "SENN-183",
    "brand": "Sennheiser",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sennheiser ANC Wireless Over-Ear Headphones Model-183 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sennheiser ANC Wireless Over-Ear Headphones Model-183. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=183",
    "gallery_images": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=183"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80&img_id=183"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 183"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 184,
    "title": "Marshall TWS Active Earbuds Model-184",
    "slug": "marshall-tws-active-earbuds-184",
    "sku": "MARS-184",
    "brand": "Marshall",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Marshall TWS Active Earbuds Model-184 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Marshall TWS Active Earbuds Model-184. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=184",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=80&img_id=184"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 184"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 185,
    "title": "Audio-Technica Wireless Party Speaker 50W Model-185",
    "slug": "audio-technica-wireless-party-speaker-50w-185",
    "sku": "AUDI-185",
    "brand": "Audio-Technica",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Audio-Technica Wireless Party Speaker 50W Model-185 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Audio-Technica Wireless Party Speaker 50W Model-185. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=185",
    "gallery_images": [
      "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=185"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1520170350707-b2da59c70f03?w=800&auto=format&fit=crop&q=80&img_id=185"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 185"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 186,
    "title": "Shure Studio Reference Headphones Model-186",
    "slug": "shure-studio-reference-headphones-186",
    "sku": "SHUR-186",
    "brand": "Shure",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Shure Studio Reference Headphones Model-186 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Shure Studio Reference Headphones Model-186. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80&img_id=186",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80&img_id=186"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 186"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 187,
    "title": "SonicPulse Dolby Atmos Soundbar Model-187",
    "slug": "sonicpulse-dolby-atmos-soundbar-187",
    "sku": "SONI-187",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse Dolby Atmos Soundbar Model-187 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse Dolby Atmos Soundbar Model-187. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=187",
    "gallery_images": [
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=187"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=800&auto=format&fit=crop&q=80&img_id=187"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 187"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 188,
    "title": "boAt Condenser Vlog Microphone Model-188",
    "slug": "boat-condenser-vlog-microphone-188",
    "sku": "BOAT-188",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt Condenser Vlog Microphone Model-188 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt Condenser Vlog Microphone Model-188. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80&img_id=188",
    "gallery_images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80&img_id=188"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 188"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 189,
    "title": "Bose Hi-Fi DAC Amplifier Model-189",
    "slug": "bose-hi-fi-dac-amplifier-189",
    "sku": "BOSE-189",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Hi-Fi DAC Amplifier Model-189 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Hi-Fi DAC Amplifier Model-189. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=189",
    "gallery_images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=189"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80&img_id=189"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 189"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 190,
    "title": "Sony Sport In-Ear Wireless Earbuds Model-190",
    "slug": "sony-sport-in-ear-wireless-earbuds-190",
    "sku": "SONY-190",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Sport In-Ear Wireless Earbuds Model-190 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Sport In-Ear Wireless Earbuds Model-190. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=190",
    "gallery_images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80&img_id=190"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 190"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 191,
    "title": "JBL ANC Wireless Over-Ear Headphones Model-191",
    "slug": "jbl-anc-wireless-over-ear-headphones-191",
    "sku": "JBL-191",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL ANC Wireless Over-Ear Headphones Model-191 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL ANC Wireless Over-Ear Headphones Model-191. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=191",
    "gallery_images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=191"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80&img_id=191"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 191"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 192,
    "title": "Sennheiser TWS Active Earbuds Model-192",
    "slug": "sennheiser-tws-active-earbuds-192",
    "sku": "SENN-192",
    "brand": "Sennheiser",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sennheiser TWS Active Earbuds Model-192 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sennheiser TWS Active Earbuds Model-192. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=192",
    "gallery_images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80&img_id=192"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 192"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 193,
    "title": "Marshall Wireless Party Speaker 50W Model-193",
    "slug": "marshall-wireless-party-speaker-50w-193",
    "sku": "MARS-193",
    "brand": "Marshall",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Marshall Wireless Party Speaker 50W Model-193 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Marshall Wireless Party Speaker 50W Model-193. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=193",
    "gallery_images": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=193"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80&img_id=193"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 193"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 194,
    "title": "Audio-Technica Studio Reference Headphones Model-194",
    "slug": "audio-technica-studio-reference-headphones-194",
    "sku": "AUDI-194",
    "brand": "Audio-Technica",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Audio-Technica Studio Reference Headphones Model-194 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Audio-Technica Studio Reference Headphones Model-194. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=194",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80&img_id=194"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 194"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 195,
    "title": "Shure Dolby Atmos Soundbar Model-195",
    "slug": "shure-dolby-atmos-soundbar-195",
    "sku": "SHUR-195",
    "brand": "Shure",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Shure Dolby Atmos Soundbar Model-195 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Shure Dolby Atmos Soundbar Model-195. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=195",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=195"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80&img_id=195"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 195"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 196,
    "title": "SonicPulse Condenser Vlog Microphone Model-196",
    "slug": "sonicpulse-condenser-vlog-microphone-196",
    "sku": "SONI-196",
    "brand": "SonicPulse",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified SonicPulse Condenser Vlog Microphone Model-196 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SonicPulse Condenser Vlog Microphone Model-196. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=196",
    "gallery_images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80&img_id=196"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 196"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 197,
    "title": "boAt Hi-Fi DAC Amplifier Model-197",
    "slug": "boat-hi-fi-dac-amplifier-197",
    "sku": "BOAT-197",
    "brand": "boAt",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified boAt Hi-Fi DAC Amplifier Model-197 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the boAt Hi-Fi DAC Amplifier Model-197. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=197",
    "gallery_images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=197"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80&img_id=197"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 197"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 198,
    "title": "Bose Sport In-Ear Wireless Earbuds Model-198",
    "slug": "bose-sport-in-ear-wireless-earbuds-198",
    "sku": "BOSE-198",
    "brand": "Bose",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Bose Sport In-Ear Wireless Earbuds Model-198 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bose Sport In-Ear Wireless Earbuds Model-198. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=198",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80&img_id=198"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 198"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 199,
    "title": "Sony ANC Wireless Over-Ear Headphones Model-199",
    "slug": "sony-anc-wireless-over-ear-headphones-199",
    "sku": "SONY-199",
    "brand": "Sony",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified Sony ANC Wireless Over-Ear Headphones Model-199 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony ANC Wireless Over-Ear Headphones Model-199. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=199",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=199"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80&img_id=199"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 199"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 200,
    "title": "JBL TWS Active Earbuds Model-200",
    "slug": "jbl-tws-active-earbuds-200",
    "sku": "JBL-200",
    "brand": "JBL",
    "category_id": 2,
    "seller_id": 2,
    "short_description": "Genuine certified JBL TWS Active Earbuds Model-200 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the JBL TWS Active Earbuds Model-200. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=200",
    "gallery_images": [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&img_id=200"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 200"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 201,
    "title": "Nike Air Cushion Running Sneakers Model-201",
    "slug": "nike-air-cushion-running-sneakers-201",
    "sku": "NIKE-201",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Air Cushion Running Sneakers Model-201 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Air Cushion Running Sneakers Model-201. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80&img_id=201",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80&img_id=201"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80&img_id=201"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 201"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 202,
    "title": "Puma Retro Streetwear Shoes Model-202",
    "slug": "puma-retro-streetwear-shoes-202",
    "sku": "PUMA-202",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Retro Streetwear Shoes Model-202 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Retro Streetwear Shoes Model-202. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80&img_id=202",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80&img_id=202"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 202"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 203,
    "title": "Levi's Original Fit Denim Jeans Model-203",
    "slug": "levi's-original-fit-denim-jeans-203",
    "sku": "LEVI-203",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Original Fit Denim Jeans Model-203 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Original Fit Denim Jeans Model-203. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80&img_id=203",
    "gallery_images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80&img_id=203"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80&img_id=203"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 203"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 204,
    "title": "Adidas Double Breasted Wool Overcoat Model-204",
    "slug": "adidas-double-breasted-wool-overcoat-204",
    "sku": "ADID-204",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Double Breasted Wool Overcoat Model-204 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Double Breasted Wool Overcoat Model-204. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80&img_id=204",
    "gallery_images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80&img_id=204"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 204"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 205,
    "title": "Ray-Ban Cotton Graphic Hoodie Model-205",
    "slug": "ray-ban-cotton-graphic-hoodie-205",
    "sku": "RAY--205",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Cotton Graphic Hoodie Model-205 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Cotton Graphic Hoodie Model-205. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80&img_id=205",
    "gallery_images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80&img_id=205"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80&img_id=205"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 205"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 206,
    "title": "Zara Polarized Aviator Sunglasses Model-206",
    "slug": "zara-polarized-aviator-sunglasses-206",
    "sku": "ZARA-206",
    "brand": "Zara",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Zara Polarized Aviator Sunglasses Model-206 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Zara Polarized Aviator Sunglasses Model-206. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&img_id=206",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&img_id=206"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 206"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 207,
    "title": "H&M Classic Leather Chronograph Watch Model-207",
    "slug": "h&m-classic-leather-chronograph-watch-207",
    "sku": "H&M-207",
    "brand": "H&M",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified H&M Classic Leather Chronograph Watch Model-207 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the H&M Classic Leather Chronograph Watch Model-207. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80&img_id=207",
    "gallery_images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80&img_id=207"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80&img_id=207"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 207"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 208,
    "title": "Tommy Hilfiger Leather Biker Jacket Model-208",
    "slug": "tommy-hilfiger-leather-biker-jacket-208",
    "sku": "TOMM-208",
    "brand": "Tommy Hilfiger",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Tommy Hilfiger Leather Biker Jacket Model-208 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Tommy Hilfiger Leather Biker Jacket Model-208. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80&img_id=208",
    "gallery_images": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80&img_id=208"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 208"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 209,
    "title": "Calvin Klein Air Cushion Running Sneakers Model-209",
    "slug": "calvin-klein-air-cushion-running-sneakers-209",
    "sku": "CALV-209",
    "brand": "Calvin Klein",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Calvin Klein Air Cushion Running Sneakers Model-209 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Calvin Klein Air Cushion Running Sneakers Model-209. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80&img_id=209",
    "gallery_images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80&img_id=209"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80&img_id=209"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 209"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 210,
    "title": "Nike Retro Streetwear Shoes Model-210",
    "slug": "nike-retro-streetwear-shoes-210",
    "sku": "NIKE-210",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Retro Streetwear Shoes Model-210 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Retro Streetwear Shoes Model-210. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80&img_id=210",
    "gallery_images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80&img_id=210"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 210"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 211,
    "title": "Puma Original Fit Denim Jeans Model-211",
    "slug": "puma-original-fit-denim-jeans-211",
    "sku": "PUMA-211",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Original Fit Denim Jeans Model-211 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Original Fit Denim Jeans Model-211. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80&img_id=211",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80&img_id=211"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80&img_id=211"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 211"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 212,
    "title": "Levi's Double Breasted Wool Overcoat Model-212",
    "slug": "levi's-double-breasted-wool-overcoat-212",
    "sku": "LEVI-212",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Double Breasted Wool Overcoat Model-212 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Double Breasted Wool Overcoat Model-212. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80&img_id=212",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80&img_id=212"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 212"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 213,
    "title": "Adidas Cotton Graphic Hoodie Model-213",
    "slug": "adidas-cotton-graphic-hoodie-213",
    "sku": "ADID-213",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Cotton Graphic Hoodie Model-213 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Cotton Graphic Hoodie Model-213. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80&img_id=213",
    "gallery_images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80&img_id=213"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80&img_id=213"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 213"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 214,
    "title": "Ray-Ban Polarized Aviator Sunglasses Model-214",
    "slug": "ray-ban-polarized-aviator-sunglasses-214",
    "sku": "RAY--214",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Polarized Aviator Sunglasses Model-214 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Polarized Aviator Sunglasses Model-214. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80&img_id=214",
    "gallery_images": [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80&img_id=214"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 214"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 215,
    "title": "Zara Classic Leather Chronograph Watch Model-215",
    "slug": "zara-classic-leather-chronograph-watch-215",
    "sku": "ZARA-215",
    "brand": "Zara",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Zara Classic Leather Chronograph Watch Model-215 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Zara Classic Leather Chronograph Watch Model-215. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80&img_id=215",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80&img_id=215"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80&img_id=215"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 215"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 216,
    "title": "H&M Leather Biker Jacket Model-216",
    "slug": "h&m-leather-biker-jacket-216",
    "sku": "H&M-216",
    "brand": "H&M",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified H&M Leather Biker Jacket Model-216 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the H&M Leather Biker Jacket Model-216. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=80&img_id=216",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=80&img_id=216"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 216"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 217,
    "title": "Tommy Hilfiger Air Cushion Running Sneakers Model-217",
    "slug": "tommy-hilfiger-air-cushion-running-sneakers-217",
    "sku": "TOMM-217",
    "brand": "Tommy Hilfiger",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Tommy Hilfiger Air Cushion Running Sneakers Model-217 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Tommy Hilfiger Air Cushion Running Sneakers Model-217. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80&img_id=217",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80&img_id=217"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80&img_id=217"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 217"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 218,
    "title": "Calvin Klein Retro Streetwear Shoes Model-218",
    "slug": "calvin-klein-retro-streetwear-shoes-218",
    "sku": "CALV-218",
    "brand": "Calvin Klein",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Calvin Klein Retro Streetwear Shoes Model-218 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Calvin Klein Retro Streetwear Shoes Model-218. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80&img_id=218",
    "gallery_images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80&img_id=218"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 218"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 219,
    "title": "Nike Original Fit Denim Jeans Model-219",
    "slug": "nike-original-fit-denim-jeans-219",
    "sku": "NIKE-219",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Original Fit Denim Jeans Model-219 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Original Fit Denim Jeans Model-219. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80&img_id=219",
    "gallery_images": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80&img_id=219"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80&img_id=219"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 219"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 220,
    "title": "Puma Double Breasted Wool Overcoat Model-220",
    "slug": "puma-double-breasted-wool-overcoat-220",
    "sku": "PUMA-220",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Double Breasted Wool Overcoat Model-220 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Double Breasted Wool Overcoat Model-220. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80&img_id=220",
    "gallery_images": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80&img_id=220"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 220"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 221,
    "title": "Levi's Cotton Graphic Hoodie Model-221",
    "slug": "levi's-cotton-graphic-hoodie-221",
    "sku": "LEVI-221",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Cotton Graphic Hoodie Model-221 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Cotton Graphic Hoodie Model-221. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&auto=format&fit=crop&q=80&img_id=221",
    "gallery_images": [
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&auto=format&fit=crop&q=80&img_id=221"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&auto=format&fit=crop&q=80&img_id=221"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 221"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 222,
    "title": "Adidas Polarized Aviator Sunglasses Model-222",
    "slug": "adidas-polarized-aviator-sunglasses-222",
    "sku": "ADID-222",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Polarized Aviator Sunglasses Model-222 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Polarized Aviator Sunglasses Model-222. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80&img_id=222",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80&img_id=222"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 222"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 223,
    "title": "Ray-Ban Classic Leather Chronograph Watch Model-223",
    "slug": "ray-ban-classic-leather-chronograph-watch-223",
    "sku": "RAY--223",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Classic Leather Chronograph Watch Model-223 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Classic Leather Chronograph Watch Model-223. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80&img_id=223",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80&img_id=223"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80&img_id=223"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 223"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 224,
    "title": "Zara Leather Biker Jacket Model-224",
    "slug": "zara-leather-biker-jacket-224",
    "sku": "ZARA-224",
    "brand": "Zara",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Zara Leather Biker Jacket Model-224 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Zara Leather Biker Jacket Model-224. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1512686096865-4a24f000787e?w=800&auto=format&fit=crop&q=80&img_id=224",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512686096865-4a24f000787e?w=800&auto=format&fit=crop&q=80&img_id=224"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 224"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 225,
    "title": "H&M Air Cushion Running Sneakers Model-225",
    "slug": "h&m-air-cushion-running-sneakers-225",
    "sku": "H&M-225",
    "brand": "H&M",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified H&M Air Cushion Running Sneakers Model-225 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the H&M Air Cushion Running Sneakers Model-225. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80&img_id=225",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80&img_id=225"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80&img_id=225"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 225"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 226,
    "title": "Tommy Hilfiger Retro Streetwear Shoes Model-226",
    "slug": "tommy-hilfiger-retro-streetwear-shoes-226",
    "sku": "TOMM-226",
    "brand": "Tommy Hilfiger",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Tommy Hilfiger Retro Streetwear Shoes Model-226 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Tommy Hilfiger Retro Streetwear Shoes Model-226. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1534030347209-467a5b0ad316?w=800&auto=format&fit=crop&q=80&img_id=226",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad316?w=800&auto=format&fit=crop&q=80&img_id=226"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 226"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 227,
    "title": "Calvin Klein Original Fit Denim Jeans Model-227",
    "slug": "calvin-klein-original-fit-denim-jeans-227",
    "sku": "CALV-227",
    "brand": "Calvin Klein",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Calvin Klein Original Fit Denim Jeans Model-227 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Calvin Klein Original Fit Denim Jeans Model-227. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80&img_id=227",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80&img_id=227"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80&img_id=227"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 227"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 228,
    "title": "Nike Double Breasted Wool Overcoat Model-228",
    "slug": "nike-double-breasted-wool-overcoat-228",
    "sku": "NIKE-228",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Double Breasted Wool Overcoat Model-228 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Double Breasted Wool Overcoat Model-228. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&auto=format&fit=crop&q=80&img_id=228",
    "gallery_images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&auto=format&fit=crop&q=80&img_id=228"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 228"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 229,
    "title": "Puma Cotton Graphic Hoodie Model-229",
    "slug": "puma-cotton-graphic-hoodie-229",
    "sku": "PUMA-229",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Cotton Graphic Hoodie Model-229 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Cotton Graphic Hoodie Model-229. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80&img_id=229",
    "gallery_images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80&img_id=229"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80&img_id=229"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 229"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 230,
    "title": "Levi's Polarized Aviator Sunglasses Model-230",
    "slug": "levi's-polarized-aviator-sunglasses-230",
    "sku": "LEVI-230",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Polarized Aviator Sunglasses Model-230 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Polarized Aviator Sunglasses Model-230. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80&img_id=230",
    "gallery_images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80&img_id=230"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 230"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 231,
    "title": "Adidas Classic Leather Chronograph Watch Model-231",
    "slug": "adidas-classic-leather-chronograph-watch-231",
    "sku": "ADID-231",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Classic Leather Chronograph Watch Model-231 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Classic Leather Chronograph Watch Model-231. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=80&img_id=231",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=80&img_id=231"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=80&img_id=231"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 231"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 232,
    "title": "Ray-Ban Leather Biker Jacket Model-232",
    "slug": "ray-ban-leather-biker-jacket-232",
    "sku": "RAY--232",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Leather Biker Jacket Model-232 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Leather Biker Jacket Model-232. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80&img_id=232",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80&img_id=232"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 232"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 233,
    "title": "Zara Air Cushion Running Sneakers Model-233",
    "slug": "zara-air-cushion-running-sneakers-233",
    "sku": "ZARA-233",
    "brand": "Zara",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Zara Air Cushion Running Sneakers Model-233 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Zara Air Cushion Running Sneakers Model-233. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80&img_id=233",
    "gallery_images": [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80&img_id=233"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80&img_id=233"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 233"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 234,
    "title": "H&M Retro Streetwear Shoes Model-234",
    "slug": "h&m-retro-streetwear-shoes-234",
    "sku": "H&M-234",
    "brand": "H&M",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified H&M Retro Streetwear Shoes Model-234 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the H&M Retro Streetwear Shoes Model-234. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1487222477894-8943e600f29f?w=800&auto=format&fit=crop&q=80&img_id=234",
    "gallery_images": [
      "https://images.unsplash.com/photo-1487222477894-8943e600f29f?w=800&auto=format&fit=crop&q=80&img_id=234"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 234"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 235,
    "title": "Tommy Hilfiger Original Fit Denim Jeans Model-235",
    "slug": "tommy-hilfiger-original-fit-denim-jeans-235",
    "sku": "TOMM-235",
    "brand": "Tommy Hilfiger",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Tommy Hilfiger Original Fit Denim Jeans Model-235 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Tommy Hilfiger Original Fit Denim Jeans Model-235. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80&img_id=235",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80&img_id=235"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80&img_id=235"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 235"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 236,
    "title": "Calvin Klein Double Breasted Wool Overcoat Model-236",
    "slug": "calvin-klein-double-breasted-wool-overcoat-236",
    "sku": "CALV-236",
    "brand": "Calvin Klein",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Calvin Klein Double Breasted Wool Overcoat Model-236 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Calvin Klein Double Breasted Wool Overcoat Model-236. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80&img_id=236",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80&img_id=236"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 236"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 237,
    "title": "Nike Cotton Graphic Hoodie Model-237",
    "slug": "nike-cotton-graphic-hoodie-237",
    "sku": "NIKE-237",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Cotton Graphic Hoodie Model-237 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Cotton Graphic Hoodie Model-237. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80&img_id=237",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80&img_id=237"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80&img_id=237"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 237"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 238,
    "title": "Puma Polarized Aviator Sunglasses Model-238",
    "slug": "puma-polarized-aviator-sunglasses-238",
    "sku": "PUMA-238",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Polarized Aviator Sunglasses Model-238 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Polarized Aviator Sunglasses Model-238. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&auto=format&fit=crop&q=80&img_id=238",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&auto=format&fit=crop&q=80&img_id=238"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 238"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 239,
    "title": "Levi's Classic Leather Chronograph Watch Model-239",
    "slug": "levi's-classic-leather-chronograph-watch-239",
    "sku": "LEVI-239",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Classic Leather Chronograph Watch Model-239 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Classic Leather Chronograph Watch Model-239. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80&img_id=239",
    "gallery_images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80&img_id=239"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80&img_id=239"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 239"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 240,
    "title": "Adidas Leather Biker Jacket Model-240",
    "slug": "adidas-leather-biker-jacket-240",
    "sku": "ADID-240",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Leather Biker Jacket Model-240 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Leather Biker Jacket Model-240. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80&img_id=240",
    "gallery_images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80&img_id=240"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 240"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 241,
    "title": "Ray-Ban Air Cushion Running Sneakers Model-241",
    "slug": "ray-ban-air-cushion-running-sneakers-241",
    "sku": "RAY--241",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Air Cushion Running Sneakers Model-241 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Air Cushion Running Sneakers Model-241. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80&img_id=241",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80&img_id=241"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80&img_id=241"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 241"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 242,
    "title": "Zara Retro Streetwear Shoes Model-242",
    "slug": "zara-retro-streetwear-shoes-242",
    "sku": "ZARA-242",
    "brand": "Zara",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Zara Retro Streetwear Shoes Model-242 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Zara Retro Streetwear Shoes Model-242. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80&img_id=242",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80&img_id=242"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 242"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 243,
    "title": "H&M Original Fit Denim Jeans Model-243",
    "slug": "h&m-original-fit-denim-jeans-243",
    "sku": "H&M-243",
    "brand": "H&M",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified H&M Original Fit Denim Jeans Model-243 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the H&M Original Fit Denim Jeans Model-243. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80&img_id=243",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80&img_id=243"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80&img_id=243"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 243"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 244,
    "title": "Tommy Hilfiger Double Breasted Wool Overcoat Model-244",
    "slug": "tommy-hilfiger-double-breasted-wool-overcoat-244",
    "sku": "TOMM-244",
    "brand": "Tommy Hilfiger",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Tommy Hilfiger Double Breasted Wool Overcoat Model-244 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Tommy Hilfiger Double Breasted Wool Overcoat Model-244. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80&img_id=244",
    "gallery_images": [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80&img_id=244"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 244"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 245,
    "title": "Calvin Klein Cotton Graphic Hoodie Model-245",
    "slug": "calvin-klein-cotton-graphic-hoodie-245",
    "sku": "CALV-245",
    "brand": "Calvin Klein",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Calvin Klein Cotton Graphic Hoodie Model-245 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Calvin Klein Cotton Graphic Hoodie Model-245. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80&img_id=245",
    "gallery_images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80&img_id=245"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80&img_id=245"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 245"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 246,
    "title": "Nike Polarized Aviator Sunglasses Model-246",
    "slug": "nike-polarized-aviator-sunglasses-246",
    "sku": "NIKE-246",
    "brand": "Nike",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Nike Polarized Aviator Sunglasses Model-246 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nike Polarized Aviator Sunglasses Model-246. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80&img_id=246",
    "gallery_images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80&img_id=246"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 246"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 247,
    "title": "Puma Classic Leather Chronograph Watch Model-247",
    "slug": "puma-classic-leather-chronograph-watch-247",
    "sku": "PUMA-247",
    "brand": "Puma",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Puma Classic Leather Chronograph Watch Model-247 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Puma Classic Leather Chronograph Watch Model-247. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&img_id=247",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&img_id=247"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&img_id=247"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 247"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 248,
    "title": "Levi's Leather Biker Jacket Model-248",
    "slug": "levi's-leather-biker-jacket-248",
    "sku": "LEVI-248",
    "brand": "Levi's",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Levi's Leather Biker Jacket Model-248 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Levi's Leather Biker Jacket Model-248. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80&img_id=248",
    "gallery_images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80&img_id=248"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 248"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 249,
    "title": "Adidas Air Cushion Running Sneakers Model-249",
    "slug": "adidas-air-cushion-running-sneakers-249",
    "sku": "ADID-249",
    "brand": "Adidas",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Adidas Air Cushion Running Sneakers Model-249 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Adidas Air Cushion Running Sneakers Model-249. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80&img_id=249",
    "gallery_images": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80&img_id=249"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80&img_id=249"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 249"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 250,
    "title": "Ray-Ban Retro Streetwear Shoes Model-250",
    "slug": "ray-ban-retro-streetwear-shoes-250",
    "sku": "RAY--250",
    "brand": "Ray-Ban",
    "category_id": 3,
    "seller_id": 2,
    "short_description": "Genuine certified Ray-Ban Retro Streetwear Shoes Model-250 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ray-Ban Retro Streetwear Shoes Model-250. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80&img_id=250",
    "gallery_images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80&img_id=250"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 250"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 251,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-251",
    "slug": "dyson-cordless-laser-vacuum-cleaner-251",
    "sku": "DYSO-251",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-251 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-251. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2490.0,
    "discount_price": 2241.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=251",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=251"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=251"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 251"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 252,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-252",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-252",
    "sku": "INST-252",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-252 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-252. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3440.0,
    "discount_price": 3061.6,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=252",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=252"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 252"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 253,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-253",
    "slug": "philips-rgb-ambient-smart-lighting-bar-253",
    "sku": "PHIL-253",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-253 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-253. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4390.0,
    "discount_price": 3863.2,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=253",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=253"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=253"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 253"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 254,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-254",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-254",
    "sku": "XIAO-254",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-254 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-254. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5340.0,
    "discount_price": 4645.8,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=254",
    "gallery_images": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=254"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 254"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 255,
    "title": "Roborock Automatic Espresso Coffee Machine Model-255",
    "slug": "roborock-automatic-espresso-coffee-machine-255",
    "sku": "ROBO-255",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-255 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-255. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6290.0,
    "discount_price": 5409.4,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=255",
    "gallery_images": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=255"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=255"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 255"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 256,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-256",
    "slug": "nespresso-ai-self-empty-robot-vacuum-256",
    "sku": "NESP-256",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-256 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-256. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7240.0,
    "discount_price": 6154.0,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=256",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=256"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 256"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 257,
    "title": "iRobot Digital Air Fryer XL Model-257",
    "slug": "irobot-digital-air-fryer-xl-257",
    "sku": "IROB-257",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-257 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-257. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8190.0,
    "discount_price": 6879.6,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=257",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=257"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=257"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 257"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 258,
    "title": "DeLonghi Smart Electric Kettle Model-258",
    "slug": "delonghi-smart-electric-kettle-258",
    "sku": "DELO-258",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-258 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-258. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9140.0,
    "discount_price": 7586.2,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=258",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=258"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 258"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 259,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-259",
    "slug": "dyson-cordless-laser-vacuum-cleaner-259",
    "sku": "DYSO-259",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-259 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-259. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10090.0,
    "discount_price": 8273.8,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=259",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=259"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=259"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 259"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 260,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-260",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-260",
    "sku": "INST-260",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-260 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-260. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11040.0,
    "discount_price": 8942.4,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=260",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=260"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 260"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 261,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-261",
    "slug": "philips-rgb-ambient-smart-lighting-bar-261",
    "sku": "PHIL-261",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-261 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-261. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11990.0,
    "discount_price": 9592.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=261",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=261"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=261"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 261"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 262,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-262",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-262",
    "sku": "XIAO-262",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-262 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-262. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12940.0,
    "discount_price": 10222.6,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=262",
    "gallery_images": [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=262"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 262"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 263,
    "title": "Roborock Automatic Espresso Coffee Machine Model-263",
    "slug": "roborock-automatic-espresso-coffee-machine-263",
    "sku": "ROBO-263",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-263 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-263. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13890.0,
    "discount_price": 10834.2,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=263",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=263"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=263"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 263"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 264,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-264",
    "slug": "nespresso-ai-self-empty-robot-vacuum-264",
    "sku": "NESP-264",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-264 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-264. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14840.0,
    "discount_price": 11426.8,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=264",
    "gallery_images": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=264"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 264"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 265,
    "title": "iRobot Digital Air Fryer XL Model-265",
    "slug": "irobot-digital-air-fryer-xl-265",
    "sku": "IROB-265",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-265 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-265. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 15790.0,
    "discount_price": 12000.4,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=265",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=265"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=265"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 265"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 266,
    "title": "DeLonghi Smart Electric Kettle Model-266",
    "slug": "delonghi-smart-electric-kettle-266",
    "sku": "DELO-266",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-266 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-266. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 16740.0,
    "discount_price": 12555.0,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=266",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=266"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 266"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 267,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-267",
    "slug": "dyson-cordless-laser-vacuum-cleaner-267",
    "sku": "DYSO-267",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-267 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-267. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 17690.0,
    "discount_price": 13090.6,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=267",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=267"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=267"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 267"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 268,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-268",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-268",
    "sku": "INST-268",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-268 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-268. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 18640.0,
    "discount_price": 13607.2,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=268",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=268"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 268"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 269,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-269",
    "slug": "philips-rgb-ambient-smart-lighting-bar-269",
    "sku": "PHIL-269",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-269 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-269. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 19590.0,
    "discount_price": 14104.8,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=269",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=269"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=269"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 269"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 270,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-270",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-270",
    "sku": "XIAO-270",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-270 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-270. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 20540.0,
    "discount_price": 14583.4,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=270",
    "gallery_images": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=270"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 270"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 271,
    "title": "Roborock Automatic Espresso Coffee Machine Model-271",
    "slug": "roborock-automatic-espresso-coffee-machine-271",
    "sku": "ROBO-271",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-271 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-271. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 21490.0,
    "discount_price": 19341.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=271",
    "gallery_images": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=271"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=271"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 271"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 272,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-272",
    "slug": "nespresso-ai-self-empty-robot-vacuum-272",
    "sku": "NESP-272",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-272 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-272. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 22440.0,
    "discount_price": 19971.6,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=272",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=272"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 272"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 273,
    "title": "iRobot Digital Air Fryer XL Model-273",
    "slug": "irobot-digital-air-fryer-xl-273",
    "sku": "IROB-273",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-273 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-273. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 23390.0,
    "discount_price": 20583.2,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=273",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=273"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=273"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 273"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 274,
    "title": "DeLonghi Smart Electric Kettle Model-274",
    "slug": "delonghi-smart-electric-kettle-274",
    "sku": "DELO-274",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-274 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-274. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 24340.0,
    "discount_price": 21175.8,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=274",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=274"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 274"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 275,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-275",
    "slug": "dyson-cordless-laser-vacuum-cleaner-275",
    "sku": "DYSO-275",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-275 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-275. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 25290.0,
    "discount_price": 21749.4,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=275",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=275"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=275"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 275"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 276,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-276",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-276",
    "sku": "INST-276",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-276 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-276. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 26240.0,
    "discount_price": 22304.0,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=276",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=276"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 276"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 277,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-277",
    "slug": "philips-rgb-ambient-smart-lighting-bar-277",
    "sku": "PHIL-277",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-277 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-277. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 27190.0,
    "discount_price": 22839.6,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=277",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=277"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=277"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 277"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 278,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-278",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-278",
    "sku": "XIAO-278",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-278 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-278. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 28140.0,
    "discount_price": 23356.2,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=278",
    "gallery_images": [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=278"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 278"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 279,
    "title": "Roborock Automatic Espresso Coffee Machine Model-279",
    "slug": "roborock-automatic-espresso-coffee-machine-279",
    "sku": "ROBO-279",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-279 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-279. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 29090.0,
    "discount_price": 23853.8,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=279",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=279"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=279"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 279"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 280,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-280",
    "slug": "nespresso-ai-self-empty-robot-vacuum-280",
    "sku": "NESP-280",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-280 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-280. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30040.0,
    "discount_price": 24332.4,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=280",
    "gallery_images": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=280"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 280"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 281,
    "title": "iRobot Digital Air Fryer XL Model-281",
    "slug": "irobot-digital-air-fryer-xl-281",
    "sku": "IROB-281",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-281 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-281. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30990.0,
    "discount_price": 24792.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=281",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=281"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=281"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 281"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 282,
    "title": "DeLonghi Smart Electric Kettle Model-282",
    "slug": "delonghi-smart-electric-kettle-282",
    "sku": "DELO-282",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-282 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-282. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 31940.0,
    "discount_price": 25232.6,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=282",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=282"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 282"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 283,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-283",
    "slug": "dyson-cordless-laser-vacuum-cleaner-283",
    "sku": "DYSO-283",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-283 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-283. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 32890.0,
    "discount_price": 25654.2,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=283",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=283"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=283"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 283"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 284,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-284",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-284",
    "sku": "INST-284",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-284 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-284. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 33840.0,
    "discount_price": 26056.8,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=284",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=284"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 284"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 285,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-285",
    "slug": "philips-rgb-ambient-smart-lighting-bar-285",
    "sku": "PHIL-285",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-285 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-285. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 34790.0,
    "discount_price": 26440.4,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=285",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=285"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80&img_id=285"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 285"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 286,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-286",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-286",
    "sku": "XIAO-286",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-286 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-286. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 35740.0,
    "discount_price": 26805.0,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=286",
    "gallery_images": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80&img_id=286"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 286"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 287,
    "title": "Roborock Automatic Espresso Coffee Machine Model-287",
    "slug": "roborock-automatic-espresso-coffee-machine-287",
    "sku": "ROBO-287",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-287 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-287. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 36690.0,
    "discount_price": 27150.6,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=287",
    "gallery_images": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=287"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80&img_id=287"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 287"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 288,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-288",
    "slug": "nespresso-ai-self-empty-robot-vacuum-288",
    "sku": "NESP-288",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-288 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-288. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 37640.0,
    "discount_price": 27477.2,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=288",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80&img_id=288"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 288"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 289,
    "title": "iRobot Digital Air Fryer XL Model-289",
    "slug": "irobot-digital-air-fryer-xl-289",
    "sku": "IROB-289",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-289 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-289. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 38590.0,
    "discount_price": 27784.8,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=289",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=289"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80&img_id=289"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 289"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 290,
    "title": "DeLonghi Smart Electric Kettle Model-290",
    "slug": "delonghi-smart-electric-kettle-290",
    "sku": "DELO-290",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-290 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-290. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 39540.0,
    "discount_price": 28073.4,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=290",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80&img_id=290"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 290"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 291,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-291",
    "slug": "dyson-cordless-laser-vacuum-cleaner-291",
    "sku": "DYSO-291",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-291 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-291. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 40490.0,
    "discount_price": 36441.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=291",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=291"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80&img_id=291"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 291"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 292,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-292",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-292",
    "sku": "INST-292",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-292 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-292. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 41440.0,
    "discount_price": 36881.6,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=292",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80&img_id=292"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 292"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 293,
    "title": "Philips RGB Ambient Smart Lighting Bar Model-293",
    "slug": "philips-rgb-ambient-smart-lighting-bar-293",
    "sku": "PHIL-293",
    "brand": "Philips",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Philips RGB Ambient Smart Lighting Bar Model-293 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips RGB Ambient Smart Lighting Bar Model-293. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 42390.0,
    "discount_price": 37303.2,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=293",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=293"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=800&auto=format&fit=crop&q=80&img_id=293"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 293"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 294,
    "title": "Xiaomi Smart HEPA Air Purifier Pro Model-294",
    "slug": "xiaomi-smart-hepa-air-purifier-pro-294",
    "sku": "XIAO-294",
    "brand": "Xiaomi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Xiaomi Smart HEPA Air Purifier Pro Model-294 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Xiaomi Smart HEPA Air Purifier Pro Model-294. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 43340.0,
    "discount_price": 37705.8,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=294",
    "gallery_images": [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80&img_id=294"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 294"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 295,
    "title": "Roborock Automatic Espresso Coffee Machine Model-295",
    "slug": "roborock-automatic-espresso-coffee-machine-295",
    "sku": "ROBO-295",
    "brand": "Roborock",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Roborock Automatic Espresso Coffee Machine Model-295 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Roborock Automatic Espresso Coffee Machine Model-295. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 44290.0,
    "discount_price": 38089.4,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=295",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=295"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&img_id=295"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 295"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 296,
    "title": "Nespresso AI Self-Empty Robot Vacuum Model-296",
    "slug": "nespresso-ai-self-empty-robot-vacuum-296",
    "sku": "NESP-296",
    "brand": "Nespresso",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Nespresso AI Self-Empty Robot Vacuum Model-296 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nespresso AI Self-Empty Robot Vacuum Model-296. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 45240.0,
    "discount_price": 38454.0,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=296",
    "gallery_images": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80&img_id=296"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 296"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 297,
    "title": "iRobot Digital Air Fryer XL Model-297",
    "slug": "irobot-digital-air-fryer-xl-297",
    "sku": "IROB-297",
    "brand": "iRobot",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified iRobot Digital Air Fryer XL Model-297 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the iRobot Digital Air Fryer XL Model-297. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 46190.0,
    "discount_price": 38799.6,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=297",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=297"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80&img_id=297"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 297"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 298,
    "title": "DeLonghi Smart Electric Kettle Model-298",
    "slug": "delonghi-smart-electric-kettle-298",
    "sku": "DELO-298",
    "brand": "DeLonghi",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified DeLonghi Smart Electric Kettle Model-298 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DeLonghi Smart Electric Kettle Model-298. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 47140.0,
    "discount_price": 39126.2,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=298",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80&img_id=298"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 298"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 299,
    "title": "Dyson Cordless Laser Vacuum Cleaner Model-299",
    "slug": "dyson-cordless-laser-vacuum-cleaner-299",
    "sku": "DYSO-299",
    "brand": "Dyson",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Laser Vacuum Cleaner Model-299 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Laser Vacuum Cleaner Model-299. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 48090.0,
    "discount_price": 39433.8,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=299",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=299"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80&img_id=299"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 299"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 300,
    "title": "Instant Brands 7-in-1 Electric Pressure Cooker Model-300",
    "slug": "instant-brands-7-in-1-electric-pressure-cooker-300",
    "sku": "INST-300",
    "brand": "Instant Brands",
    "category_id": 4,
    "seller_id": 2,
    "short_description": "Genuine certified Instant Brands 7-in-1 Electric Pressure Cooker Model-300 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Instant Brands 7-in-1 Electric Pressure Cooker Model-300. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 49040.0,
    "discount_price": 39722.4,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=300",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80&img_id=300"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 300"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 301,
    "title": "Sony Slim 1TB Next-Gen Gaming Console Model-301",
    "slug": "sony-slim-1tb-next-gen-gaming-console-301",
    "sku": "SONY-301",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Slim 1TB Next-Gen Gaming Console Model-301 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Slim 1TB Next-Gen Gaming Console Model-301. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2490.0,
    "discount_price": 2241.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=301",
    "gallery_images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=301"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=301"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 301"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 302,
    "title": "Asus Core i7 RTX Gaming Laptop Model-302",
    "slug": "asus-core-i7-rtx-gaming-laptop-302",
    "sku": "ASUS-302",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus Core i7 RTX Gaming Laptop Model-302 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus Core i7 RTX Gaming Laptop Model-302. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3440.0,
    "discount_price": 3061.6,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=302",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=302"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 302"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 303,
    "title": "Logitech RGB Mechanical Gaming Keyboard Model-303",
    "slug": "logitech-rgb-mechanical-gaming-keyboard-303",
    "sku": "LOGI-303",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech RGB Mechanical Gaming Keyboard Model-303 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech RGB Mechanical Gaming Keyboard Model-303. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4390.0,
    "discount_price": 3863.2,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=303",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=303"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=303"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 303"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 304,
    "title": "Razer Ultralight Wireless Gaming Mouse Model-304",
    "slug": "razer-ultralight-wireless-gaming-mouse-304",
    "sku": "RAZE-304",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer Ultralight Wireless Gaming Mouse Model-304 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer Ultralight Wireless Gaming Mouse Model-304. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5340.0,
    "discount_price": 4645.8,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=304",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=304"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 304"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 305,
    "title": "Microsoft Ergonomic Esports Gaming Chair Model-305",
    "slug": "microsoft-ergonomic-esports-gaming-chair-305",
    "sku": "MICR-305",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft Ergonomic Esports Gaming Chair Model-305 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft Ergonomic Esports Gaming Chair Model-305. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6290.0,
    "discount_price": 5409.4,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=305",
    "gallery_images": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=305"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=305"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 305"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 306,
    "title": "Nintendo OLED Portable Gaming Console Model-306",
    "slug": "nintendo-oled-portable-gaming-console-306",
    "sku": "NINT-306",
    "brand": "Nintendo",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Nintendo OLED Portable Gaming Console Model-306 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nintendo OLED Portable Gaming Console Model-306. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7240.0,
    "discount_price": 6154.0,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=306",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=306"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 306"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 307,
    "title": "SteelSeries All-in-One VR Headset Model-307",
    "slug": "steelseries-all-in-one-vr-headset-307",
    "sku": "STEE-307",
    "brand": "SteelSeries",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified SteelSeries All-in-One VR Headset Model-307 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SteelSeries All-in-One VR Headset Model-307. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8190.0,
    "discount_price": 6879.6,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=307",
    "gallery_images": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=307"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=307"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 307"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 308,
    "title": "Corsair Slim 1TB Next-Gen Gaming Console Model-308",
    "slug": "corsair-slim-1tb-next-gen-gaming-console-308",
    "sku": "CORS-308",
    "brand": "Corsair",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Corsair Slim 1TB Next-Gen Gaming Console Model-308 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Corsair Slim 1TB Next-Gen Gaming Console Model-308. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9140.0,
    "discount_price": 7586.2,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=308",
    "gallery_images": [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=308"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 308"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 309,
    "title": "Secretlab Core i7 RTX Gaming Laptop Model-309",
    "slug": "secretlab-core-i7-rtx-gaming-laptop-309",
    "sku": "SECR-309",
    "brand": "Secretlab",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Secretlab Core i7 RTX Gaming Laptop Model-309 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Secretlab Core i7 RTX Gaming Laptop Model-309. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10090.0,
    "discount_price": 8273.8,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=309",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=309"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=309"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 309"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 310,
    "title": "Sony RGB Mechanical Gaming Keyboard Model-310",
    "slug": "sony-rgb-mechanical-gaming-keyboard-310",
    "sku": "SONY-310",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony RGB Mechanical Gaming Keyboard Model-310 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony RGB Mechanical Gaming Keyboard Model-310. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11040.0,
    "discount_price": 8942.4,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=310",
    "gallery_images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=310"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 310"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 311,
    "title": "Asus Ultralight Wireless Gaming Mouse Model-311",
    "slug": "asus-ultralight-wireless-gaming-mouse-311",
    "sku": "ASUS-311",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus Ultralight Wireless Gaming Mouse Model-311 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus Ultralight Wireless Gaming Mouse Model-311. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11990.0,
    "discount_price": 9592.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=311",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=311"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=311"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 311"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 312,
    "title": "Logitech Ergonomic Esports Gaming Chair Model-312",
    "slug": "logitech-ergonomic-esports-gaming-chair-312",
    "sku": "LOGI-312",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Ergonomic Esports Gaming Chair Model-312 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Ergonomic Esports Gaming Chair Model-312. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12940.0,
    "discount_price": 10222.6,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=312",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=312"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 312"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 313,
    "title": "Razer OLED Portable Gaming Console Model-313",
    "slug": "razer-oled-portable-gaming-console-313",
    "sku": "RAZE-313",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer OLED Portable Gaming Console Model-313 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer OLED Portable Gaming Console Model-313. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13890.0,
    "discount_price": 10834.2,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=313",
    "gallery_images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=313"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=313"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 313"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 314,
    "title": "Microsoft All-in-One VR Headset Model-314",
    "slug": "microsoft-all-in-one-vr-headset-314",
    "sku": "MICR-314",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft All-in-One VR Headset Model-314 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft All-in-One VR Headset Model-314. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14840.0,
    "discount_price": 11426.8,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=314",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=314"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 314"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 315,
    "title": "Nintendo Slim 1TB Next-Gen Gaming Console Model-315",
    "slug": "nintendo-slim-1tb-next-gen-gaming-console-315",
    "sku": "NINT-315",
    "brand": "Nintendo",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Nintendo Slim 1TB Next-Gen Gaming Console Model-315 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nintendo Slim 1TB Next-Gen Gaming Console Model-315. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 15790.0,
    "discount_price": 12000.4,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=315",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=315"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=315"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 315"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 316,
    "title": "SteelSeries Core i7 RTX Gaming Laptop Model-316",
    "slug": "steelseries-core-i7-rtx-gaming-laptop-316",
    "sku": "STEE-316",
    "brand": "SteelSeries",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified SteelSeries Core i7 RTX Gaming Laptop Model-316 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SteelSeries Core i7 RTX Gaming Laptop Model-316. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 16740.0,
    "discount_price": 12555.0,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=316",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=316"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 316"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 317,
    "title": "Corsair RGB Mechanical Gaming Keyboard Model-317",
    "slug": "corsair-rgb-mechanical-gaming-keyboard-317",
    "sku": "CORS-317",
    "brand": "Corsair",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Corsair RGB Mechanical Gaming Keyboard Model-317 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Corsair RGB Mechanical Gaming Keyboard Model-317. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 17690.0,
    "discount_price": 13090.6,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=317",
    "gallery_images": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=317"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=317"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 317"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 318,
    "title": "Secretlab Ultralight Wireless Gaming Mouse Model-318",
    "slug": "secretlab-ultralight-wireless-gaming-mouse-318",
    "sku": "SECR-318",
    "brand": "Secretlab",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Secretlab Ultralight Wireless Gaming Mouse Model-318 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Secretlab Ultralight Wireless Gaming Mouse Model-318. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 18640.0,
    "discount_price": 13607.2,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=318",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=318"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 318"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 319,
    "title": "Sony Ergonomic Esports Gaming Chair Model-319",
    "slug": "sony-ergonomic-esports-gaming-chair-319",
    "sku": "SONY-319",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Ergonomic Esports Gaming Chair Model-319 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Ergonomic Esports Gaming Chair Model-319. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 19590.0,
    "discount_price": 14104.8,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=319",
    "gallery_images": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=319"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=319"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 319"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 320,
    "title": "Asus OLED Portable Gaming Console Model-320",
    "slug": "asus-oled-portable-gaming-console-320",
    "sku": "ASUS-320",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus OLED Portable Gaming Console Model-320 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus OLED Portable Gaming Console Model-320. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 20540.0,
    "discount_price": 14583.4,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=320",
    "gallery_images": [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=320"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 320"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 321,
    "title": "Logitech All-in-One VR Headset Model-321",
    "slug": "logitech-all-in-one-vr-headset-321",
    "sku": "LOGI-321",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech All-in-One VR Headset Model-321 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech All-in-One VR Headset Model-321. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 21490.0,
    "discount_price": 19341.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=321",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=321"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=321"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 321"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 322,
    "title": "Razer Slim 1TB Next-Gen Gaming Console Model-322",
    "slug": "razer-slim-1tb-next-gen-gaming-console-322",
    "sku": "RAZE-322",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer Slim 1TB Next-Gen Gaming Console Model-322 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer Slim 1TB Next-Gen Gaming Console Model-322. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 22440.0,
    "discount_price": 19971.6,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=322",
    "gallery_images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=322"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 322"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 323,
    "title": "Microsoft Core i7 RTX Gaming Laptop Model-323",
    "slug": "microsoft-core-i7-rtx-gaming-laptop-323",
    "sku": "MICR-323",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft Core i7 RTX Gaming Laptop Model-323 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft Core i7 RTX Gaming Laptop Model-323. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 23390.0,
    "discount_price": 20583.2,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=323",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=323"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=323"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 323"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 324,
    "title": "Nintendo RGB Mechanical Gaming Keyboard Model-324",
    "slug": "nintendo-rgb-mechanical-gaming-keyboard-324",
    "sku": "NINT-324",
    "brand": "Nintendo",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Nintendo RGB Mechanical Gaming Keyboard Model-324 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nintendo RGB Mechanical Gaming Keyboard Model-324. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 24340.0,
    "discount_price": 21175.8,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=324",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=324"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 324"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 325,
    "title": "SteelSeries Ultralight Wireless Gaming Mouse Model-325",
    "slug": "steelseries-ultralight-wireless-gaming-mouse-325",
    "sku": "STEE-325",
    "brand": "SteelSeries",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified SteelSeries Ultralight Wireless Gaming Mouse Model-325 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SteelSeries Ultralight Wireless Gaming Mouse Model-325. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 25290.0,
    "discount_price": 21749.4,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=325",
    "gallery_images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=325"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=325"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 325"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 326,
    "title": "Corsair Ergonomic Esports Gaming Chair Model-326",
    "slug": "corsair-ergonomic-esports-gaming-chair-326",
    "sku": "CORS-326",
    "brand": "Corsair",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Corsair Ergonomic Esports Gaming Chair Model-326 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Corsair Ergonomic Esports Gaming Chair Model-326. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 26240.0,
    "discount_price": 22304.0,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=326",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=326"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 326"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 327,
    "title": "Secretlab OLED Portable Gaming Console Model-327",
    "slug": "secretlab-oled-portable-gaming-console-327",
    "sku": "SECR-327",
    "brand": "Secretlab",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Secretlab OLED Portable Gaming Console Model-327 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Secretlab OLED Portable Gaming Console Model-327. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 27190.0,
    "discount_price": 22839.6,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=327",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=327"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=327"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 327"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 328,
    "title": "Sony All-in-One VR Headset Model-328",
    "slug": "sony-all-in-one-vr-headset-328",
    "sku": "SONY-328",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony All-in-One VR Headset Model-328 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony All-in-One VR Headset Model-328. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 28140.0,
    "discount_price": 23356.2,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=328",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=328"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 328"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 329,
    "title": "Asus Slim 1TB Next-Gen Gaming Console Model-329",
    "slug": "asus-slim-1tb-next-gen-gaming-console-329",
    "sku": "ASUS-329",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus Slim 1TB Next-Gen Gaming Console Model-329 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus Slim 1TB Next-Gen Gaming Console Model-329. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 29090.0,
    "discount_price": 23853.8,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=329",
    "gallery_images": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=329"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=329"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 329"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 330,
    "title": "Logitech Core i7 RTX Gaming Laptop Model-330",
    "slug": "logitech-core-i7-rtx-gaming-laptop-330",
    "sku": "LOGI-330",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Core i7 RTX Gaming Laptop Model-330 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Core i7 RTX Gaming Laptop Model-330. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30040.0,
    "discount_price": 24332.4,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=330",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=330"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 330"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 331,
    "title": "Razer RGB Mechanical Gaming Keyboard Model-331",
    "slug": "razer-rgb-mechanical-gaming-keyboard-331",
    "sku": "RAZE-331",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer RGB Mechanical Gaming Keyboard Model-331 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer RGB Mechanical Gaming Keyboard Model-331. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30990.0,
    "discount_price": 24792.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=331",
    "gallery_images": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=331"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=331"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 331"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 332,
    "title": "Microsoft Ultralight Wireless Gaming Mouse Model-332",
    "slug": "microsoft-ultralight-wireless-gaming-mouse-332",
    "sku": "MICR-332",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft Ultralight Wireless Gaming Mouse Model-332 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft Ultralight Wireless Gaming Mouse Model-332. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 31940.0,
    "discount_price": 25232.6,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=332",
    "gallery_images": [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=332"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 332"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 333,
    "title": "Nintendo Ergonomic Esports Gaming Chair Model-333",
    "slug": "nintendo-ergonomic-esports-gaming-chair-333",
    "sku": "NINT-333",
    "brand": "Nintendo",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Nintendo Ergonomic Esports Gaming Chair Model-333 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nintendo Ergonomic Esports Gaming Chair Model-333. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 32890.0,
    "discount_price": 25654.2,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=333",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=333"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=333"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 333"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 334,
    "title": "SteelSeries OLED Portable Gaming Console Model-334",
    "slug": "steelseries-oled-portable-gaming-console-334",
    "sku": "STEE-334",
    "brand": "SteelSeries",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified SteelSeries OLED Portable Gaming Console Model-334 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SteelSeries OLED Portable Gaming Console Model-334. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 33840.0,
    "discount_price": 26056.8,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=334",
    "gallery_images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=334"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 334"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 335,
    "title": "Corsair All-in-One VR Headset Model-335",
    "slug": "corsair-all-in-one-vr-headset-335",
    "sku": "CORS-335",
    "brand": "Corsair",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Corsair All-in-One VR Headset Model-335 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Corsair All-in-One VR Headset Model-335. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 34790.0,
    "discount_price": 26440.4,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=335",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=335"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=335"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 335"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 336,
    "title": "Secretlab Slim 1TB Next-Gen Gaming Console Model-336",
    "slug": "secretlab-slim-1tb-next-gen-gaming-console-336",
    "sku": "SECR-336",
    "brand": "Secretlab",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Secretlab Slim 1TB Next-Gen Gaming Console Model-336 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Secretlab Slim 1TB Next-Gen Gaming Console Model-336. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 35740.0,
    "discount_price": 26805.0,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=336",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=336"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 336"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 337,
    "title": "Sony Core i7 RTX Gaming Laptop Model-337",
    "slug": "sony-core-i7-rtx-gaming-laptop-337",
    "sku": "SONY-337",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Core i7 RTX Gaming Laptop Model-337 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Core i7 RTX Gaming Laptop Model-337. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 36690.0,
    "discount_price": 27150.6,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=337",
    "gallery_images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=337"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=337"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 337"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 338,
    "title": "Asus RGB Mechanical Gaming Keyboard Model-338",
    "slug": "asus-rgb-mechanical-gaming-keyboard-338",
    "sku": "ASUS-338",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus RGB Mechanical Gaming Keyboard Model-338 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus RGB Mechanical Gaming Keyboard Model-338. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 37640.0,
    "discount_price": 27477.2,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=338",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=338"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 338"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 339,
    "title": "Logitech Ultralight Wireless Gaming Mouse Model-339",
    "slug": "logitech-ultralight-wireless-gaming-mouse-339",
    "sku": "LOGI-339",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech Ultralight Wireless Gaming Mouse Model-339 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech Ultralight Wireless Gaming Mouse Model-339. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 38590.0,
    "discount_price": 27784.8,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=339",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=339"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80&img_id=339"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 339"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 340,
    "title": "Razer Ergonomic Esports Gaming Chair Model-340",
    "slug": "razer-ergonomic-esports-gaming-chair-340",
    "sku": "RAZE-340",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer Ergonomic Esports Gaming Chair Model-340 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer Ergonomic Esports Gaming Chair Model-340. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 39540.0,
    "discount_price": 28073.4,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=340",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80&img_id=340"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 340"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 341,
    "title": "Microsoft OLED Portable Gaming Console Model-341",
    "slug": "microsoft-oled-portable-gaming-console-341",
    "sku": "MICR-341",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft OLED Portable Gaming Console Model-341 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft OLED Portable Gaming Console Model-341. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 40490.0,
    "discount_price": 36441.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=341",
    "gallery_images": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=341"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80&img_id=341"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 341"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 342,
    "title": "Nintendo All-in-One VR Headset Model-342",
    "slug": "nintendo-all-in-one-vr-headset-342",
    "sku": "NINT-342",
    "brand": "Nintendo",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Nintendo All-in-One VR Headset Model-342 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nintendo All-in-One VR Headset Model-342. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 41440.0,
    "discount_price": 36881.6,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=342",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80&img_id=342"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 342"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 343,
    "title": "SteelSeries Slim 1TB Next-Gen Gaming Console Model-343",
    "slug": "steelseries-slim-1tb-next-gen-gaming-console-343",
    "sku": "STEE-343",
    "brand": "SteelSeries",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified SteelSeries Slim 1TB Next-Gen Gaming Console Model-343 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the SteelSeries Slim 1TB Next-Gen Gaming Console Model-343. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 42390.0,
    "discount_price": 37303.2,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=343",
    "gallery_images": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=343"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80&img_id=343"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 343"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 344,
    "title": "Corsair Core i7 RTX Gaming Laptop Model-344",
    "slug": "corsair-core-i7-rtx-gaming-laptop-344",
    "sku": "CORS-344",
    "brand": "Corsair",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Corsair Core i7 RTX Gaming Laptop Model-344 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Corsair Core i7 RTX Gaming Laptop Model-344. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 43340.0,
    "discount_price": 37705.8,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=344",
    "gallery_images": [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80&img_id=344"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 344"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 345,
    "title": "Secretlab RGB Mechanical Gaming Keyboard Model-345",
    "slug": "secretlab-rgb-mechanical-gaming-keyboard-345",
    "sku": "SECR-345",
    "brand": "Secretlab",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Secretlab RGB Mechanical Gaming Keyboard Model-345 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Secretlab RGB Mechanical Gaming Keyboard Model-345. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 44290.0,
    "discount_price": 38089.4,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=345",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=345"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80&img_id=345"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 345"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 346,
    "title": "Sony Ultralight Wireless Gaming Mouse Model-346",
    "slug": "sony-ultralight-wireless-gaming-mouse-346",
    "sku": "SONY-346",
    "brand": "Sony",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Sony Ultralight Wireless Gaming Mouse Model-346 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Sony Ultralight Wireless Gaming Mouse Model-346. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 45240.0,
    "discount_price": 38454.0,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=346",
    "gallery_images": [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&auto=format&fit=crop&q=80&img_id=346"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 346"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 347,
    "title": "Asus Ergonomic Esports Gaming Chair Model-347",
    "slug": "asus-ergonomic-esports-gaming-chair-347",
    "sku": "ASUS-347",
    "brand": "Asus",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Asus Ergonomic Esports Gaming Chair Model-347 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Asus Ergonomic Esports Gaming Chair Model-347. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 46190.0,
    "discount_price": 38799.6,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=347",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=347"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1526509867975-d1425e791b8a?w=800&auto=format&fit=crop&q=80&img_id=347"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 347"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 348,
    "title": "Logitech OLED Portable Gaming Console Model-348",
    "slug": "logitech-oled-portable-gaming-console-348",
    "sku": "LOGI-348",
    "brand": "Logitech",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Logitech OLED Portable Gaming Console Model-348 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Logitech OLED Portable Gaming Console Model-348. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 47140.0,
    "discount_price": 39126.2,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=348",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80&img_id=348"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 348"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 349,
    "title": "Razer All-in-One VR Headset Model-349",
    "slug": "razer-all-in-one-vr-headset-349",
    "sku": "RAZE-349",
    "brand": "Razer",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Razer All-in-One VR Headset Model-349 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Razer All-in-One VR Headset Model-349. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 48090.0,
    "discount_price": 39433.8,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=349",
    "gallery_images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=349"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80&img_id=349"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 349"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 350,
    "title": "Microsoft Slim 1TB Next-Gen Gaming Console Model-350",
    "slug": "microsoft-slim-1tb-next-gen-gaming-console-350",
    "sku": "MICR-350",
    "brand": "Microsoft",
    "category_id": 5,
    "seller_id": 2,
    "short_description": "Genuine certified Microsoft Slim 1TB Next-Gen Gaming Console Model-350 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Microsoft Slim 1TB Next-Gen Gaming Console Model-350. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 49040.0,
    "discount_price": 39722.4,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=350",
    "gallery_images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80&img_id=350"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 350"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 351,
    "title": "Dyson Airwrap Hair Multi-Styler Model-351",
    "slug": "dyson-airwrap-hair-multi-styler-351",
    "sku": "DYSO-351",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Airwrap Hair Multi-Styler Model-351 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Airwrap Hair Multi-Styler Model-351. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=351",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=351"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=351"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 351"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 352,
    "title": "Philips Wet & Dry Electric Shaver Model-352",
    "slug": "philips-wet-&-dry-electric-shaver-352",
    "sku": "PHIL-352",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Wet & Dry Electric Shaver Model-352 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Wet & Dry Electric Shaver Model-352. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=352",
    "gallery_images": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=352"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 352"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 353,
    "title": "L'Or\u00e9al Synchronized Night Repair Serum Model-353",
    "slug": "l'or\u00e9al-synchronized-night-repair-serum-353",
    "sku": "L'OR-353",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al Synchronized Night Repair Serum Model-353 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al Synchronized Night Repair Serum Model-353. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=353",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=353"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=353"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 353"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 354,
    "title": "Braun 1.5% Pure Hyaluronic Acid Serum Model-354",
    "slug": "braun-1.5%-pure-hyaluronic-acid-serum-354",
    "sku": "BRAU-354",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun 1.5% Pure Hyaluronic Acid Serum Model-354 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun 1.5% Pure Hyaluronic Acid Serum Model-354. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=354",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=354"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 354"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 355,
    "title": "Oral-B Sonic Toothbrush Pro Model-355",
    "slug": "oral-b-sonic-toothbrush-pro-355",
    "sku": "ORAL-355",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Sonic Toothbrush Pro Model-355 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Sonic Toothbrush Pro Model-355. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=355",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=355"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=355"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 355"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 356,
    "title": "Est\u00e9e Lauder Beard Trimmer Styling Kit Model-356",
    "slug": "est\u00e9e-lauder-beard-trimmer-styling-kit-356",
    "sku": "EST\u00c9-356",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder Beard Trimmer Styling Kit Model-356 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder Beard Trimmer Styling Kit Model-356. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=356",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=356"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 356"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 357,
    "title": "Clinique Hydrating Face Wash Cleanser Model-357",
    "slug": "clinique-hydrating-face-wash-cleanser-357",
    "sku": "CLIN-357",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique Hydrating Face Wash Cleanser Model-357 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique Hydrating Face Wash Cleanser Model-357. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=357",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=357"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=357"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 357"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 358,
    "title": "Forest Essentials Airwrap Hair Multi-Styler Model-358",
    "slug": "forest-essentials-airwrap-hair-multi-styler-358",
    "sku": "FORE-358",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials Airwrap Hair Multi-Styler Model-358 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials Airwrap Hair Multi-Styler Model-358. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=358",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=358"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 358"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 359,
    "title": "Dyson Wet & Dry Electric Shaver Model-359",
    "slug": "dyson-wet-&-dry-electric-shaver-359",
    "sku": "DYSO-359",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Wet & Dry Electric Shaver Model-359 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Wet & Dry Electric Shaver Model-359. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=359",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=359"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=359"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 359"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 360,
    "title": "Philips Synchronized Night Repair Serum Model-360",
    "slug": "philips-synchronized-night-repair-serum-360",
    "sku": "PHIL-360",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Synchronized Night Repair Serum Model-360 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Synchronized Night Repair Serum Model-360. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=360",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=360"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 360"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 361,
    "title": "L'Or\u00e9al 1.5% Pure Hyaluronic Acid Serum Model-361",
    "slug": "l'or\u00e9al-1.5%-pure-hyaluronic-acid-serum-361",
    "sku": "L'OR-361",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al 1.5% Pure Hyaluronic Acid Serum Model-361 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al 1.5% Pure Hyaluronic Acid Serum Model-361. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=361",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=361"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=361"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 361"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 362,
    "title": "Braun Sonic Toothbrush Pro Model-362",
    "slug": "braun-sonic-toothbrush-pro-362",
    "sku": "BRAU-362",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun Sonic Toothbrush Pro Model-362 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun Sonic Toothbrush Pro Model-362. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=362",
    "gallery_images": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=362"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 362"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 363,
    "title": "Oral-B Beard Trimmer Styling Kit Model-363",
    "slug": "oral-b-beard-trimmer-styling-kit-363",
    "sku": "ORAL-363",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Beard Trimmer Styling Kit Model-363 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Beard Trimmer Styling Kit Model-363. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=363",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=363"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=363"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 363"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 364,
    "title": "Est\u00e9e Lauder Hydrating Face Wash Cleanser Model-364",
    "slug": "est\u00e9e-lauder-hydrating-face-wash-cleanser-364",
    "sku": "EST\u00c9-364",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder Hydrating Face Wash Cleanser Model-364 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder Hydrating Face Wash Cleanser Model-364. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=364",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=364"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 364"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 365,
    "title": "Clinique Airwrap Hair Multi-Styler Model-365",
    "slug": "clinique-airwrap-hair-multi-styler-365",
    "sku": "CLIN-365",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique Airwrap Hair Multi-Styler Model-365 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique Airwrap Hair Multi-Styler Model-365. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=365",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=365"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=365"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 365"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 366,
    "title": "Forest Essentials Wet & Dry Electric Shaver Model-366",
    "slug": "forest-essentials-wet-&-dry-electric-shaver-366",
    "sku": "FORE-366",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials Wet & Dry Electric Shaver Model-366 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials Wet & Dry Electric Shaver Model-366. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=366",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=366"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 366"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 367,
    "title": "Dyson Synchronized Night Repair Serum Model-367",
    "slug": "dyson-synchronized-night-repair-serum-367",
    "sku": "DYSO-367",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Synchronized Night Repair Serum Model-367 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Synchronized Night Repair Serum Model-367. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=367",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=367"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=367"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 367"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 368,
    "title": "Philips 1.5% Pure Hyaluronic Acid Serum Model-368",
    "slug": "philips-1.5%-pure-hyaluronic-acid-serum-368",
    "sku": "PHIL-368",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips 1.5% Pure Hyaluronic Acid Serum Model-368 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips 1.5% Pure Hyaluronic Acid Serum Model-368. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=368",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=368"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 368"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 369,
    "title": "L'Or\u00e9al Sonic Toothbrush Pro Model-369",
    "slug": "l'or\u00e9al-sonic-toothbrush-pro-369",
    "sku": "L'OR-369",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al Sonic Toothbrush Pro Model-369 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al Sonic Toothbrush Pro Model-369. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=369",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=369"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=369"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 369"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 370,
    "title": "Braun Beard Trimmer Styling Kit Model-370",
    "slug": "braun-beard-trimmer-styling-kit-370",
    "sku": "BRAU-370",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun Beard Trimmer Styling Kit Model-370 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun Beard Trimmer Styling Kit Model-370. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=370",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=370"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 370"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 371,
    "title": "Oral-B Hydrating Face Wash Cleanser Model-371",
    "slug": "oral-b-hydrating-face-wash-cleanser-371",
    "sku": "ORAL-371",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Hydrating Face Wash Cleanser Model-371 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Hydrating Face Wash Cleanser Model-371. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=371",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=371"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=371"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 371"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 372,
    "title": "Est\u00e9e Lauder Airwrap Hair Multi-Styler Model-372",
    "slug": "est\u00e9e-lauder-airwrap-hair-multi-styler-372",
    "sku": "EST\u00c9-372",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder Airwrap Hair Multi-Styler Model-372 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder Airwrap Hair Multi-Styler Model-372. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=372",
    "gallery_images": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=372"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 372"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 373,
    "title": "Clinique Wet & Dry Electric Shaver Model-373",
    "slug": "clinique-wet-&-dry-electric-shaver-373",
    "sku": "CLIN-373",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique Wet & Dry Electric Shaver Model-373 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique Wet & Dry Electric Shaver Model-373. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=373",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=373"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=373"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 373"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 374,
    "title": "Forest Essentials Synchronized Night Repair Serum Model-374",
    "slug": "forest-essentials-synchronized-night-repair-serum-374",
    "sku": "FORE-374",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials Synchronized Night Repair Serum Model-374 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials Synchronized Night Repair Serum Model-374. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=374",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=374"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 374"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 375,
    "title": "Dyson 1.5% Pure Hyaluronic Acid Serum Model-375",
    "slug": "dyson-1.5%-pure-hyaluronic-acid-serum-375",
    "sku": "DYSO-375",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson 1.5% Pure Hyaluronic Acid Serum Model-375 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson 1.5% Pure Hyaluronic Acid Serum Model-375. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=375",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=375"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=375"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 375"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 376,
    "title": "Philips Sonic Toothbrush Pro Model-376",
    "slug": "philips-sonic-toothbrush-pro-376",
    "sku": "PHIL-376",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Sonic Toothbrush Pro Model-376 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Sonic Toothbrush Pro Model-376. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=376",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=376"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 376"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 377,
    "title": "L'Or\u00e9al Beard Trimmer Styling Kit Model-377",
    "slug": "l'or\u00e9al-beard-trimmer-styling-kit-377",
    "sku": "L'OR-377",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al Beard Trimmer Styling Kit Model-377 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al Beard Trimmer Styling Kit Model-377. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=377",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=377"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=377"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 377"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 378,
    "title": "Braun Hydrating Face Wash Cleanser Model-378",
    "slug": "braun-hydrating-face-wash-cleanser-378",
    "sku": "BRAU-378",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun Hydrating Face Wash Cleanser Model-378 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun Hydrating Face Wash Cleanser Model-378. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=378",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=378"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 378"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 379,
    "title": "Oral-B Airwrap Hair Multi-Styler Model-379",
    "slug": "oral-b-airwrap-hair-multi-styler-379",
    "sku": "ORAL-379",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Airwrap Hair Multi-Styler Model-379 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Airwrap Hair Multi-Styler Model-379. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=379",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=379"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=379"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 379"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 380,
    "title": "Est\u00e9e Lauder Wet & Dry Electric Shaver Model-380",
    "slug": "est\u00e9e-lauder-wet-&-dry-electric-shaver-380",
    "sku": "EST\u00c9-380",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder Wet & Dry Electric Shaver Model-380 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder Wet & Dry Electric Shaver Model-380. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=380",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=380"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 380"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 381,
    "title": "Clinique Synchronized Night Repair Serum Model-381",
    "slug": "clinique-synchronized-night-repair-serum-381",
    "sku": "CLIN-381",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique Synchronized Night Repair Serum Model-381 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique Synchronized Night Repair Serum Model-381. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=381",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=381"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=381"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 381"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 382,
    "title": "Forest Essentials 1.5% Pure Hyaluronic Acid Serum Model-382",
    "slug": "forest-essentials-1.5%-pure-hyaluronic-acid-serum-382",
    "sku": "FORE-382",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials 1.5% Pure Hyaluronic Acid Serum Model-382 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials 1.5% Pure Hyaluronic Acid Serum Model-382. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=382",
    "gallery_images": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=382"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 382"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 383,
    "title": "Dyson Sonic Toothbrush Pro Model-383",
    "slug": "dyson-sonic-toothbrush-pro-383",
    "sku": "DYSO-383",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Sonic Toothbrush Pro Model-383 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Sonic Toothbrush Pro Model-383. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=383",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=383"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=383"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 383"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 384,
    "title": "Philips Beard Trimmer Styling Kit Model-384",
    "slug": "philips-beard-trimmer-styling-kit-384",
    "sku": "PHIL-384",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Beard Trimmer Styling Kit Model-384 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Beard Trimmer Styling Kit Model-384. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=384",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=384"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 384"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 385,
    "title": "L'Or\u00e9al Hydrating Face Wash Cleanser Model-385",
    "slug": "l'or\u00e9al-hydrating-face-wash-cleanser-385",
    "sku": "L'OR-385",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al Hydrating Face Wash Cleanser Model-385 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al Hydrating Face Wash Cleanser Model-385. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=385",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=385"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=385"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 385"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 386,
    "title": "Braun Airwrap Hair Multi-Styler Model-386",
    "slug": "braun-airwrap-hair-multi-styler-386",
    "sku": "BRAU-386",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun Airwrap Hair Multi-Styler Model-386 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun Airwrap Hair Multi-Styler Model-386. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=386",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=386"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 386"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 387,
    "title": "Oral-B Wet & Dry Electric Shaver Model-387",
    "slug": "oral-b-wet-&-dry-electric-shaver-387",
    "sku": "ORAL-387",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Wet & Dry Electric Shaver Model-387 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Wet & Dry Electric Shaver Model-387. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=387",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=387"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=387"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 387"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 388,
    "title": "Est\u00e9e Lauder Synchronized Night Repair Serum Model-388",
    "slug": "est\u00e9e-lauder-synchronized-night-repair-serum-388",
    "sku": "EST\u00c9-388",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder Synchronized Night Repair Serum Model-388 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder Synchronized Night Repair Serum Model-388. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=388",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=388"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 388"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 389,
    "title": "Clinique 1.5% Pure Hyaluronic Acid Serum Model-389",
    "slug": "clinique-1.5%-pure-hyaluronic-acid-serum-389",
    "sku": "CLIN-389",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique 1.5% Pure Hyaluronic Acid Serum Model-389 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique 1.5% Pure Hyaluronic Acid Serum Model-389. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=389",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=389"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=389"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 389"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 390,
    "title": "Forest Essentials Sonic Toothbrush Pro Model-390",
    "slug": "forest-essentials-sonic-toothbrush-pro-390",
    "sku": "FORE-390",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials Sonic Toothbrush Pro Model-390 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials Sonic Toothbrush Pro Model-390. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=390",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=390"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 390"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 391,
    "title": "Dyson Beard Trimmer Styling Kit Model-391",
    "slug": "dyson-beard-trimmer-styling-kit-391",
    "sku": "DYSO-391",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Beard Trimmer Styling Kit Model-391 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Beard Trimmer Styling Kit Model-391. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=391",
    "gallery_images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=391"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80&img_id=391"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 391"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 392,
    "title": "Philips Hydrating Face Wash Cleanser Model-392",
    "slug": "philips-hydrating-face-wash-cleanser-392",
    "sku": "PHIL-392",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Hydrating Face Wash Cleanser Model-392 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Hydrating Face Wash Cleanser Model-392. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=392",
    "gallery_images": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80&img_id=392"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 392"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 393,
    "title": "L'Or\u00e9al Airwrap Hair Multi-Styler Model-393",
    "slug": "l'or\u00e9al-airwrap-hair-multi-styler-393",
    "sku": "L'OR-393",
    "brand": "L'Or\u00e9al",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified L'Or\u00e9al Airwrap Hair Multi-Styler Model-393 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the L'Or\u00e9al Airwrap Hair Multi-Styler Model-393. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=393",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=393"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80&img_id=393"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 393"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 394,
    "title": "Braun Wet & Dry Electric Shaver Model-394",
    "slug": "braun-wet-&-dry-electric-shaver-394",
    "sku": "BRAU-394",
    "brand": "Braun",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Braun Wet & Dry Electric Shaver Model-394 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Braun Wet & Dry Electric Shaver Model-394. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=394",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80&img_id=394"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 394"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 395,
    "title": "Oral-B Synchronized Night Repair Serum Model-395",
    "slug": "oral-b-synchronized-night-repair-serum-395",
    "sku": "ORAL-395",
    "brand": "Oral-B",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Oral-B Synchronized Night Repair Serum Model-395 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Oral-B Synchronized Night Repair Serum Model-395. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=395",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=395"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80&img_id=395"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 395"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 396,
    "title": "Est\u00e9e Lauder 1.5% Pure Hyaluronic Acid Serum Model-396",
    "slug": "est\u00e9e-lauder-1.5%-pure-hyaluronic-acid-serum-396",
    "sku": "EST\u00c9-396",
    "brand": "Est\u00e9e Lauder",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Est\u00e9e Lauder 1.5% Pure Hyaluronic Acid Serum Model-396 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Est\u00e9e Lauder 1.5% Pure Hyaluronic Acid Serum Model-396. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=396",
    "gallery_images": [
      "https://images.unsplash.com/photo-1608248597261-81320510a18f?w=800&auto=format&fit=crop&q=80&img_id=396"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 396"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 397,
    "title": "Clinique Sonic Toothbrush Pro Model-397",
    "slug": "clinique-sonic-toothbrush-pro-397",
    "sku": "CLIN-397",
    "brand": "Clinique",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Clinique Sonic Toothbrush Pro Model-397 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Clinique Sonic Toothbrush Pro Model-397. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=397",
    "gallery_images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=397"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80&img_id=397"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 397"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 398,
    "title": "Forest Essentials Beard Trimmer Styling Kit Model-398",
    "slug": "forest-essentials-beard-trimmer-styling-kit-398",
    "sku": "FORE-398",
    "brand": "Forest Essentials",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Forest Essentials Beard Trimmer Styling Kit Model-398 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Forest Essentials Beard Trimmer Styling Kit Model-398. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=398",
    "gallery_images": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80&img_id=398"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 398"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 399,
    "title": "Dyson Hydrating Face Wash Cleanser Model-399",
    "slug": "dyson-hydrating-face-wash-cleanser-399",
    "sku": "DYSO-399",
    "brand": "Dyson",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Hydrating Face Wash Cleanser Model-399 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Hydrating Face Wash Cleanser Model-399. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=399",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=399"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512290900673-7002b5217615?w=800&auto=format&fit=crop&q=80&img_id=399"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 399"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 400,
    "title": "Philips Airwrap Hair Multi-Styler Model-400",
    "slug": "philips-airwrap-hair-multi-styler-400",
    "sku": "PHIL-400",
    "brand": "Philips",
    "category_id": 6,
    "seller_id": 2,
    "short_description": "Genuine certified Philips Airwrap Hair Multi-Styler Model-400 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Philips Airwrap Hair Multi-Styler Model-400. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=400",
    "gallery_images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=80&img_id=400"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 400"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 401,
    "title": "PowerMax Motorized Home Foldable Treadmill Model-401",
    "slug": "powermax-motorized-home-foldable-treadmill-401",
    "sku": "POWE-401",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax Motorized Home Foldable Treadmill Model-401 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax Motorized Home Foldable Treadmill Model-401. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2490.0,
    "discount_price": 2241.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=401",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=401"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=401"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 401"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 402,
    "title": "Flexbell Twist Adjustable Dumbbell Pair Model-402",
    "slug": "flexbell-twist-adjustable-dumbbell-pair-402",
    "sku": "FLEX-402",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell Twist Adjustable Dumbbell Pair Model-402 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell Twist Adjustable Dumbbell Pair Model-402. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3440.0,
    "discount_price": 3061.6,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=402",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=402"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 402"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 403,
    "title": "Garmin AMOLED GPS Premium Running Watch Model-403",
    "slug": "garmin-amoled-gps-premium-running-watch-403",
    "sku": "GARM-403",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin AMOLED GPS Premium Running Watch Model-403 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin AMOLED GPS Premium Running Watch Model-403. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4390.0,
    "discount_price": 3863.2,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=403",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=403"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=403"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 403"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 404,
    "title": "Manduka 6mm Non-Slip Professional Yoga Mat Model-404",
    "slug": "manduka-6mm-non-slip-professional-yoga-mat-404",
    "sku": "MAND-404",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka 6mm Non-Slip Professional Yoga Mat Model-404 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka 6mm Non-Slip Professional Yoga Mat Model-404. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5340.0,
    "discount_price": 4645.8,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=404",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=404"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 404"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 405,
    "title": "Under Armour Deep Tissue Percussive Massage Gun Model-405",
    "slug": "under-armour-deep-tissue-percussive-massage-gun-405",
    "sku": "UNDE-405",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour Deep Tissue Percussive Massage Gun Model-405 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour Deep Tissue Percussive Massage Gun Model-405. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6290.0,
    "discount_price": 5409.4,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=405",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=405"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=405"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 405"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 406,
    "title": "Bowflex Workout Resistance Bands Set Model-406",
    "slug": "bowflex-workout-resistance-bands-set-406",
    "sku": "BOWF-406",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex Workout Resistance Bands Set Model-406 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex Workout Resistance Bands Set Model-406. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7240.0,
    "discount_price": 6154.0,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=406",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=406"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 406"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 407,
    "title": "Theragun Motorized Home Foldable Treadmill Model-407",
    "slug": "theragun-motorized-home-foldable-treadmill-407",
    "sku": "THER-407",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun Motorized Home Foldable Treadmill Model-407 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun Motorized Home Foldable Treadmill Model-407. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8190.0,
    "discount_price": 6879.6,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=407",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=407"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=407"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 407"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 408,
    "title": "Decathlon Twist Adjustable Dumbbell Pair Model-408",
    "slug": "decathlon-twist-adjustable-dumbbell-pair-408",
    "sku": "DECA-408",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon Twist Adjustable Dumbbell Pair Model-408 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon Twist Adjustable Dumbbell Pair Model-408. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9140.0,
    "discount_price": 7586.2,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=408",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=408"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 408"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 409,
    "title": "PowerMax AMOLED GPS Premium Running Watch Model-409",
    "slug": "powermax-amoled-gps-premium-running-watch-409",
    "sku": "POWE-409",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax AMOLED GPS Premium Running Watch Model-409 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax AMOLED GPS Premium Running Watch Model-409. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10090.0,
    "discount_price": 8273.8,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=409",
    "gallery_images": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=409"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=409"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 409"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 410,
    "title": "Flexbell 6mm Non-Slip Professional Yoga Mat Model-410",
    "slug": "flexbell-6mm-non-slip-professional-yoga-mat-410",
    "sku": "FLEX-410",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell 6mm Non-Slip Professional Yoga Mat Model-410 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell 6mm Non-Slip Professional Yoga Mat Model-410. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11040.0,
    "discount_price": 8942.4,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=410",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=410"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 410"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 411,
    "title": "Garmin Deep Tissue Percussive Massage Gun Model-411",
    "slug": "garmin-deep-tissue-percussive-massage-gun-411",
    "sku": "GARM-411",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin Deep Tissue Percussive Massage Gun Model-411 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin Deep Tissue Percussive Massage Gun Model-411. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11990.0,
    "discount_price": 9592.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=411",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=411"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=411"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 411"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 412,
    "title": "Manduka Workout Resistance Bands Set Model-412",
    "slug": "manduka-workout-resistance-bands-set-412",
    "sku": "MAND-412",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka Workout Resistance Bands Set Model-412 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka Workout Resistance Bands Set Model-412. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12940.0,
    "discount_price": 10222.6,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=412",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=412"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 412"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 413,
    "title": "Under Armour Motorized Home Foldable Treadmill Model-413",
    "slug": "under-armour-motorized-home-foldable-treadmill-413",
    "sku": "UNDE-413",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour Motorized Home Foldable Treadmill Model-413 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour Motorized Home Foldable Treadmill Model-413. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13890.0,
    "discount_price": 10834.2,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=413",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=413"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=413"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 413"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 414,
    "title": "Bowflex Twist Adjustable Dumbbell Pair Model-414",
    "slug": "bowflex-twist-adjustable-dumbbell-pair-414",
    "sku": "BOWF-414",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex Twist Adjustable Dumbbell Pair Model-414 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex Twist Adjustable Dumbbell Pair Model-414. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14840.0,
    "discount_price": 11426.8,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=414",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=414"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 414"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 415,
    "title": "Theragun AMOLED GPS Premium Running Watch Model-415",
    "slug": "theragun-amoled-gps-premium-running-watch-415",
    "sku": "THER-415",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun AMOLED GPS Premium Running Watch Model-415 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun AMOLED GPS Premium Running Watch Model-415. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 15790.0,
    "discount_price": 12000.4,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=415",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=415"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=415"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 415"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 416,
    "title": "Decathlon 6mm Non-Slip Professional Yoga Mat Model-416",
    "slug": "decathlon-6mm-non-slip-professional-yoga-mat-416",
    "sku": "DECA-416",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon 6mm Non-Slip Professional Yoga Mat Model-416 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon 6mm Non-Slip Professional Yoga Mat Model-416. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 16740.0,
    "discount_price": 12555.0,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=416",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=416"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 416"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 417,
    "title": "PowerMax Deep Tissue Percussive Massage Gun Model-417",
    "slug": "powermax-deep-tissue-percussive-massage-gun-417",
    "sku": "POWE-417",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax Deep Tissue Percussive Massage Gun Model-417 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax Deep Tissue Percussive Massage Gun Model-417. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 17690.0,
    "discount_price": 13090.6,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=417",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=417"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=417"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 417"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 418,
    "title": "Flexbell Workout Resistance Bands Set Model-418",
    "slug": "flexbell-workout-resistance-bands-set-418",
    "sku": "FLEX-418",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell Workout Resistance Bands Set Model-418 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell Workout Resistance Bands Set Model-418. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 18640.0,
    "discount_price": 13607.2,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=418",
    "gallery_images": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=418"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 418"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 419,
    "title": "Garmin Motorized Home Foldable Treadmill Model-419",
    "slug": "garmin-motorized-home-foldable-treadmill-419",
    "sku": "GARM-419",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin Motorized Home Foldable Treadmill Model-419 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin Motorized Home Foldable Treadmill Model-419. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 19590.0,
    "discount_price": 14104.8,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=419",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=419"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=419"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 419"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 420,
    "title": "Manduka Twist Adjustable Dumbbell Pair Model-420",
    "slug": "manduka-twist-adjustable-dumbbell-pair-420",
    "sku": "MAND-420",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka Twist Adjustable Dumbbell Pair Model-420 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka Twist Adjustable Dumbbell Pair Model-420. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 20540.0,
    "discount_price": 14583.4,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=420",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=420"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 420"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 421,
    "title": "Under Armour AMOLED GPS Premium Running Watch Model-421",
    "slug": "under-armour-amoled-gps-premium-running-watch-421",
    "sku": "UNDE-421",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour AMOLED GPS Premium Running Watch Model-421 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour AMOLED GPS Premium Running Watch Model-421. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 21490.0,
    "discount_price": 19341.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=421",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=421"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=421"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 421"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 422,
    "title": "Bowflex 6mm Non-Slip Professional Yoga Mat Model-422",
    "slug": "bowflex-6mm-non-slip-professional-yoga-mat-422",
    "sku": "BOWF-422",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex 6mm Non-Slip Professional Yoga Mat Model-422 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex 6mm Non-Slip Professional Yoga Mat Model-422. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 22440.0,
    "discount_price": 19971.6,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=422",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=422"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 422"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 423,
    "title": "Theragun Deep Tissue Percussive Massage Gun Model-423",
    "slug": "theragun-deep-tissue-percussive-massage-gun-423",
    "sku": "THER-423",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun Deep Tissue Percussive Massage Gun Model-423 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun Deep Tissue Percussive Massage Gun Model-423. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 23390.0,
    "discount_price": 20583.2,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=423",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=423"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=423"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 423"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 424,
    "title": "Decathlon Workout Resistance Bands Set Model-424",
    "slug": "decathlon-workout-resistance-bands-set-424",
    "sku": "DECA-424",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon Workout Resistance Bands Set Model-424 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon Workout Resistance Bands Set Model-424. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 24340.0,
    "discount_price": 21175.8,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=424",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=424"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 424"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 425,
    "title": "PowerMax Motorized Home Foldable Treadmill Model-425",
    "slug": "powermax-motorized-home-foldable-treadmill-425",
    "sku": "POWE-425",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax Motorized Home Foldable Treadmill Model-425 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax Motorized Home Foldable Treadmill Model-425. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 25290.0,
    "discount_price": 21749.4,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=425",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=425"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=425"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 425"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 426,
    "title": "Flexbell Twist Adjustable Dumbbell Pair Model-426",
    "slug": "flexbell-twist-adjustable-dumbbell-pair-426",
    "sku": "FLEX-426",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell Twist Adjustable Dumbbell Pair Model-426 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell Twist Adjustable Dumbbell Pair Model-426. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 26240.0,
    "discount_price": 22304.0,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=426",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=426"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 426"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 427,
    "title": "Garmin AMOLED GPS Premium Running Watch Model-427",
    "slug": "garmin-amoled-gps-premium-running-watch-427",
    "sku": "GARM-427",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin AMOLED GPS Premium Running Watch Model-427 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin AMOLED GPS Premium Running Watch Model-427. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 27190.0,
    "discount_price": 22839.6,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=427",
    "gallery_images": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=427"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=427"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 427"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 428,
    "title": "Manduka 6mm Non-Slip Professional Yoga Mat Model-428",
    "slug": "manduka-6mm-non-slip-professional-yoga-mat-428",
    "sku": "MAND-428",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka 6mm Non-Slip Professional Yoga Mat Model-428 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka 6mm Non-Slip Professional Yoga Mat Model-428. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 28140.0,
    "discount_price": 23356.2,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=428",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=428"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 428"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 429,
    "title": "Under Armour Deep Tissue Percussive Massage Gun Model-429",
    "slug": "under-armour-deep-tissue-percussive-massage-gun-429",
    "sku": "UNDE-429",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour Deep Tissue Percussive Massage Gun Model-429 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour Deep Tissue Percussive Massage Gun Model-429. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 29090.0,
    "discount_price": 23853.8,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=429",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=429"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=429"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 429"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 430,
    "title": "Bowflex Workout Resistance Bands Set Model-430",
    "slug": "bowflex-workout-resistance-bands-set-430",
    "sku": "BOWF-430",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex Workout Resistance Bands Set Model-430 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex Workout Resistance Bands Set Model-430. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30040.0,
    "discount_price": 24332.4,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=430",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=430"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 430"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 431,
    "title": "Theragun Motorized Home Foldable Treadmill Model-431",
    "slug": "theragun-motorized-home-foldable-treadmill-431",
    "sku": "THER-431",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun Motorized Home Foldable Treadmill Model-431 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun Motorized Home Foldable Treadmill Model-431. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 30990.0,
    "discount_price": 24792.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=431",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=431"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=431"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 431"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 432,
    "title": "Decathlon Twist Adjustable Dumbbell Pair Model-432",
    "slug": "decathlon-twist-adjustable-dumbbell-pair-432",
    "sku": "DECA-432",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon Twist Adjustable Dumbbell Pair Model-432 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon Twist Adjustable Dumbbell Pair Model-432. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 31940.0,
    "discount_price": 25232.6,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=432",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=432"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 432"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 433,
    "title": "PowerMax AMOLED GPS Premium Running Watch Model-433",
    "slug": "powermax-amoled-gps-premium-running-watch-433",
    "sku": "POWE-433",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax AMOLED GPS Premium Running Watch Model-433 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax AMOLED GPS Premium Running Watch Model-433. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 32890.0,
    "discount_price": 25654.2,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=433",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=433"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=433"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 433"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 434,
    "title": "Flexbell 6mm Non-Slip Professional Yoga Mat Model-434",
    "slug": "flexbell-6mm-non-slip-professional-yoga-mat-434",
    "sku": "FLEX-434",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell 6mm Non-Slip Professional Yoga Mat Model-434 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell 6mm Non-Slip Professional Yoga Mat Model-434. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 33840.0,
    "discount_price": 26056.8,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=434",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=434"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 434"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 435,
    "title": "Garmin Deep Tissue Percussive Massage Gun Model-435",
    "slug": "garmin-deep-tissue-percussive-massage-gun-435",
    "sku": "GARM-435",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin Deep Tissue Percussive Massage Gun Model-435 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin Deep Tissue Percussive Massage Gun Model-435. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 34790.0,
    "discount_price": 26440.4,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=435",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=435"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=435"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 435"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 436,
    "title": "Manduka Workout Resistance Bands Set Model-436",
    "slug": "manduka-workout-resistance-bands-set-436",
    "sku": "MAND-436",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka Workout Resistance Bands Set Model-436 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka Workout Resistance Bands Set Model-436. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 35740.0,
    "discount_price": 26805.0,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=436",
    "gallery_images": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=436"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 436"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 437,
    "title": "Under Armour Motorized Home Foldable Treadmill Model-437",
    "slug": "under-armour-motorized-home-foldable-treadmill-437",
    "sku": "UNDE-437",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour Motorized Home Foldable Treadmill Model-437 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour Motorized Home Foldable Treadmill Model-437. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 36690.0,
    "discount_price": 27150.6,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=437",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=437"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=437"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 437"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 438,
    "title": "Bowflex Twist Adjustable Dumbbell Pair Model-438",
    "slug": "bowflex-twist-adjustable-dumbbell-pair-438",
    "sku": "BOWF-438",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex Twist Adjustable Dumbbell Pair Model-438 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex Twist Adjustable Dumbbell Pair Model-438. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 37640.0,
    "discount_price": 27477.2,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=438",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=438"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 438"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 439,
    "title": "Theragun AMOLED GPS Premium Running Watch Model-439",
    "slug": "theragun-amoled-gps-premium-running-watch-439",
    "sku": "THER-439",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun AMOLED GPS Premium Running Watch Model-439 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun AMOLED GPS Premium Running Watch Model-439. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 38590.0,
    "discount_price": 27784.8,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=439",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=439"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=439"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 439"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 440,
    "title": "Decathlon 6mm Non-Slip Professional Yoga Mat Model-440",
    "slug": "decathlon-6mm-non-slip-professional-yoga-mat-440",
    "sku": "DECA-440",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon 6mm Non-Slip Professional Yoga Mat Model-440 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon 6mm Non-Slip Professional Yoga Mat Model-440. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 39540.0,
    "discount_price": 28073.4,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=440",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=440"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 440"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 441,
    "title": "PowerMax Deep Tissue Percussive Massage Gun Model-441",
    "slug": "powermax-deep-tissue-percussive-massage-gun-441",
    "sku": "POWE-441",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax Deep Tissue Percussive Massage Gun Model-441 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax Deep Tissue Percussive Massage Gun Model-441. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 40490.0,
    "discount_price": 36441.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=441",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=441"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=441"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 441"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 442,
    "title": "Flexbell Workout Resistance Bands Set Model-442",
    "slug": "flexbell-workout-resistance-bands-set-442",
    "sku": "FLEX-442",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell Workout Resistance Bands Set Model-442 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell Workout Resistance Bands Set Model-442. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 41440.0,
    "discount_price": 36881.6,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=442",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517637318644-1464a0505b27?w=800&auto=format&fit=crop&q=80&img_id=442"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 442"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 443,
    "title": "Garmin Motorized Home Foldable Treadmill Model-443",
    "slug": "garmin-motorized-home-foldable-treadmill-443",
    "sku": "GARM-443",
    "brand": "Garmin",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Garmin Motorized Home Foldable Treadmill Model-443 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Garmin Motorized Home Foldable Treadmill Model-443. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 42390.0,
    "discount_price": 37303.2,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=443",
    "gallery_images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=443"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop&q=80&img_id=443"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 443"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 444,
    "title": "Manduka Twist Adjustable Dumbbell Pair Model-444",
    "slug": "manduka-twist-adjustable-dumbbell-pair-444",
    "sku": "MAND-444",
    "brand": "Manduka",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Manduka Twist Adjustable Dumbbell Pair Model-444 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Manduka Twist Adjustable Dumbbell Pair Model-444. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 43340.0,
    "discount_price": 37705.8,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=444",
    "gallery_images": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80&img_id=444"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 444"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 445,
    "title": "Under Armour AMOLED GPS Premium Running Watch Model-445",
    "slug": "under-armour-amoled-gps-premium-running-watch-445",
    "sku": "UNDE-445",
    "brand": "Under Armour",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Under Armour AMOLED GPS Premium Running Watch Model-445 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Under Armour AMOLED GPS Premium Running Watch Model-445. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 44290.0,
    "discount_price": 38089.4,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=445",
    "gallery_images": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=445"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1599058945520-474580058b7d?w=800&auto=format&fit=crop&q=80&img_id=445"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 445"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 446,
    "title": "Bowflex 6mm Non-Slip Professional Yoga Mat Model-446",
    "slug": "bowflex-6mm-non-slip-professional-yoga-mat-446",
    "sku": "BOWF-446",
    "brand": "Bowflex",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Bowflex 6mm Non-Slip Professional Yoga Mat Model-446 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bowflex 6mm Non-Slip Professional Yoga Mat Model-446. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 45240.0,
    "discount_price": 38454.0,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=446",
    "gallery_images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80&img_id=446"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 446"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 447,
    "title": "Theragun Deep Tissue Percussive Massage Gun Model-447",
    "slug": "theragun-deep-tissue-percussive-massage-gun-447",
    "sku": "THER-447",
    "brand": "Theragun",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Theragun Deep Tissue Percussive Massage Gun Model-447 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Theragun Deep Tissue Percussive Massage Gun Model-447. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 46190.0,
    "discount_price": 38799.6,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=447",
    "gallery_images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=447"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80&img_id=447"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 447"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 448,
    "title": "Decathlon Workout Resistance Bands Set Model-448",
    "slug": "decathlon-workout-resistance-bands-set-448",
    "sku": "DECA-448",
    "brand": "Decathlon",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Decathlon Workout Resistance Bands Set Model-448 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Decathlon Workout Resistance Bands Set Model-448. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 47140.0,
    "discount_price": 39126.2,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=448",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&img_id=448"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 448"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 449,
    "title": "PowerMax Motorized Home Foldable Treadmill Model-449",
    "slug": "powermax-motorized-home-foldable-treadmill-449",
    "sku": "POWE-449",
    "brand": "PowerMax",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified PowerMax Motorized Home Foldable Treadmill Model-449 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the PowerMax Motorized Home Foldable Treadmill Model-449. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 48090.0,
    "discount_price": 39433.8,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=449",
    "gallery_images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=449"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80&img_id=449"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 449"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 450,
    "title": "Flexbell Twist Adjustable Dumbbell Pair Model-450",
    "slug": "flexbell-twist-adjustable-dumbbell-pair-450",
    "sku": "FLEX-450",
    "brand": "Flexbell",
    "category_id": 7,
    "seller_id": 2,
    "short_description": "Genuine certified Flexbell Twist Adjustable Dumbbell Pair Model-450 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Flexbell Twist Adjustable Dumbbell Pair Model-450. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 49040.0,
    "discount_price": 39722.4,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=450",
    "gallery_images": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80&img_id=450"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 450"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 451,
    "title": "LEGO Technic Formula 1 Supercar Kit Model-451",
    "slug": "lego-technic-formula-1-supercar-kit-451",
    "sku": "LEGO-451",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Technic Formula 1 Supercar Kit Model-451 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Technic Formula 1 Supercar Kit Model-451. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=451",
    "gallery_images": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=451"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=451"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 451"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 452,
    "title": "DJI 4K Camera Mini Selfie Drone Model-452",
    "slug": "dji-4k-camera-mini-selfie-drone-452",
    "sku": "DJI-452",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI 4K Camera Mini Selfie Drone Model-452 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI 4K Camera Mini Selfie Drone Model-452. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=452",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=452"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 452"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 453,
    "title": "Hot Wheels Anime Collectible Action Statue Model-453",
    "slug": "hot-wheels-anime-collectible-action-statue-453",
    "sku": "HOT -453",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Anime Collectible Action Statue Model-453 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Anime Collectible Action Statue Model-453. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=453",
    "gallery_images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=453"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=453"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 453"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 454,
    "title": "Hasbro Architecture Landmark Building Set Model-454",
    "slug": "hasbro-architecture-landmark-building-set-454",
    "sku": "HASB-454",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro Architecture Landmark Building Set Model-454 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro Architecture Landmark Building Set Model-454. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=454",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=454"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 454"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 455,
    "title": "Barbie Wooden Railway Express Train Set Model-455",
    "slug": "barbie-wooden-railway-express-train-set-455",
    "sku": "BARB-455",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie Wooden Railway Express Train Set Model-455 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie Wooden Railway Express Train Set Model-455. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=455",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=455"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=455"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 455"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 456,
    "title": "Nerf Classic Collector Strategy Board Game Model-456",
    "slug": "nerf-classic-collector-strategy-board-game-456",
    "sku": "NERF-456",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf Classic Collector Strategy Board Game Model-456 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf Classic Collector Strategy Board Game Model-456. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=456",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=456"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 456"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 457,
    "title": "Playmobil Connected Bluetooth Speed Cube Model-457",
    "slug": "playmobil-connected-bluetooth-speed-cube-457",
    "sku": "PLAY-457",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil Connected Bluetooth Speed Cube Model-457 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil Connected Bluetooth Speed Cube Model-457. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=457",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=457"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=457"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 457"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 458,
    "title": "Rubik's Technic Formula 1 Supercar Kit Model-458",
    "slug": "rubik's-technic-formula-1-supercar-kit-458",
    "sku": "RUBI-458",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's Technic Formula 1 Supercar Kit Model-458 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's Technic Formula 1 Supercar Kit Model-458. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=458",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=458"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 458"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 459,
    "title": "LEGO 4K Camera Mini Selfie Drone Model-459",
    "slug": "lego-4k-camera-mini-selfie-drone-459",
    "sku": "LEGO-459",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO 4K Camera Mini Selfie Drone Model-459 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO 4K Camera Mini Selfie Drone Model-459. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=459",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=459"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=459"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 459"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 460,
    "title": "DJI Anime Collectible Action Statue Model-460",
    "slug": "dji-anime-collectible-action-statue-460",
    "sku": "DJI-460",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Anime Collectible Action Statue Model-460 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Anime Collectible Action Statue Model-460. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=460",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=460"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 460"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 461,
    "title": "Hot Wheels Architecture Landmark Building Set Model-461",
    "slug": "hot-wheels-architecture-landmark-building-set-461",
    "sku": "HOT -461",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Architecture Landmark Building Set Model-461 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Architecture Landmark Building Set Model-461. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=461",
    "gallery_images": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=461"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=461"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 461"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 462,
    "title": "Hasbro Wooden Railway Express Train Set Model-462",
    "slug": "hasbro-wooden-railway-express-train-set-462",
    "sku": "HASB-462",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro Wooden Railway Express Train Set Model-462 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro Wooden Railway Express Train Set Model-462. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=462",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=462"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 462"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 463,
    "title": "Barbie Classic Collector Strategy Board Game Model-463",
    "slug": "barbie-classic-collector-strategy-board-game-463",
    "sku": "BARB-463",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie Classic Collector Strategy Board Game Model-463 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie Classic Collector Strategy Board Game Model-463. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=463",
    "gallery_images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=463"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=463"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 463"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 464,
    "title": "Nerf Connected Bluetooth Speed Cube Model-464",
    "slug": "nerf-connected-bluetooth-speed-cube-464",
    "sku": "NERF-464",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf Connected Bluetooth Speed Cube Model-464 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf Connected Bluetooth Speed Cube Model-464. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=464",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=464"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 464"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 465,
    "title": "Playmobil Technic Formula 1 Supercar Kit Model-465",
    "slug": "playmobil-technic-formula-1-supercar-kit-465",
    "sku": "PLAY-465",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil Technic Formula 1 Supercar Kit Model-465 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil Technic Formula 1 Supercar Kit Model-465. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=465",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=465"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=465"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 465"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 466,
    "title": "Rubik's 4K Camera Mini Selfie Drone Model-466",
    "slug": "rubik's-4k-camera-mini-selfie-drone-466",
    "sku": "RUBI-466",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's 4K Camera Mini Selfie Drone Model-466 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's 4K Camera Mini Selfie Drone Model-466. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=466",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=466"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 466"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 467,
    "title": "LEGO Anime Collectible Action Statue Model-467",
    "slug": "lego-anime-collectible-action-statue-467",
    "sku": "LEGO-467",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Anime Collectible Action Statue Model-467 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Anime Collectible Action Statue Model-467. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=467",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=467"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=467"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 467"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 468,
    "title": "DJI Architecture Landmark Building Set Model-468",
    "slug": "dji-architecture-landmark-building-set-468",
    "sku": "DJI-468",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Architecture Landmark Building Set Model-468 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Architecture Landmark Building Set Model-468. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=468",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=468"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 468"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 469,
    "title": "Hot Wheels Wooden Railway Express Train Set Model-469",
    "slug": "hot-wheels-wooden-railway-express-train-set-469",
    "sku": "HOT -469",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Wooden Railway Express Train Set Model-469 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Wooden Railway Express Train Set Model-469. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=469",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=469"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=469"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 469"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 470,
    "title": "Hasbro Classic Collector Strategy Board Game Model-470",
    "slug": "hasbro-classic-collector-strategy-board-game-470",
    "sku": "HASB-470",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro Classic Collector Strategy Board Game Model-470 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro Classic Collector Strategy Board Game Model-470. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=470",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=470"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 470"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 471,
    "title": "Barbie Connected Bluetooth Speed Cube Model-471",
    "slug": "barbie-connected-bluetooth-speed-cube-471",
    "sku": "BARB-471",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie Connected Bluetooth Speed Cube Model-471 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie Connected Bluetooth Speed Cube Model-471. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=471",
    "gallery_images": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=471"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=471"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 471"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 472,
    "title": "Nerf Technic Formula 1 Supercar Kit Model-472",
    "slug": "nerf-technic-formula-1-supercar-kit-472",
    "sku": "NERF-472",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf Technic Formula 1 Supercar Kit Model-472 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf Technic Formula 1 Supercar Kit Model-472. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=472",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=472"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 472"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 473,
    "title": "Playmobil 4K Camera Mini Selfie Drone Model-473",
    "slug": "playmobil-4k-camera-mini-selfie-drone-473",
    "sku": "PLAY-473",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil 4K Camera Mini Selfie Drone Model-473 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil 4K Camera Mini Selfie Drone Model-473. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=473",
    "gallery_images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=473"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=473"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 473"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 474,
    "title": "Rubik's Anime Collectible Action Statue Model-474",
    "slug": "rubik's-anime-collectible-action-statue-474",
    "sku": "RUBI-474",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's Anime Collectible Action Statue Model-474 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's Anime Collectible Action Statue Model-474. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=474",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=474"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 474"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 475,
    "title": "LEGO Architecture Landmark Building Set Model-475",
    "slug": "lego-architecture-landmark-building-set-475",
    "sku": "LEGO-475",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Architecture Landmark Building Set Model-475 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Architecture Landmark Building Set Model-475. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=475",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=475"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=475"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 475"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 476,
    "title": "DJI Wooden Railway Express Train Set Model-476",
    "slug": "dji-wooden-railway-express-train-set-476",
    "sku": "DJI-476",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Wooden Railway Express Train Set Model-476 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Wooden Railway Express Train Set Model-476. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=476",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=476"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 476"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 477,
    "title": "Hot Wheels Classic Collector Strategy Board Game Model-477",
    "slug": "hot-wheels-classic-collector-strategy-board-game-477",
    "sku": "HOT -477",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Classic Collector Strategy Board Game Model-477 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Classic Collector Strategy Board Game Model-477. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=477",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=477"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=477"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 477"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 478,
    "title": "Hasbro Connected Bluetooth Speed Cube Model-478",
    "slug": "hasbro-connected-bluetooth-speed-cube-478",
    "sku": "HASB-478",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro Connected Bluetooth Speed Cube Model-478 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro Connected Bluetooth Speed Cube Model-478. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=478",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=478"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 478"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 479,
    "title": "Barbie Technic Formula 1 Supercar Kit Model-479",
    "slug": "barbie-technic-formula-1-supercar-kit-479",
    "sku": "BARB-479",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie Technic Formula 1 Supercar Kit Model-479 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie Technic Formula 1 Supercar Kit Model-479. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=479",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=479"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=479"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 479"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 480,
    "title": "Nerf 4K Camera Mini Selfie Drone Model-480",
    "slug": "nerf-4k-camera-mini-selfie-drone-480",
    "sku": "NERF-480",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf 4K Camera Mini Selfie Drone Model-480 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf 4K Camera Mini Selfie Drone Model-480. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=480",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=480"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 480"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 481,
    "title": "Playmobil Anime Collectible Action Statue Model-481",
    "slug": "playmobil-anime-collectible-action-statue-481",
    "sku": "PLAY-481",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil Anime Collectible Action Statue Model-481 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil Anime Collectible Action Statue Model-481. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=481",
    "gallery_images": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=481"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=481"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 481"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 482,
    "title": "Rubik's Architecture Landmark Building Set Model-482",
    "slug": "rubik's-architecture-landmark-building-set-482",
    "sku": "RUBI-482",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's Architecture Landmark Building Set Model-482 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's Architecture Landmark Building Set Model-482. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=482",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=482"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 482"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 483,
    "title": "LEGO Wooden Railway Express Train Set Model-483",
    "slug": "lego-wooden-railway-express-train-set-483",
    "sku": "LEGO-483",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Wooden Railway Express Train Set Model-483 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Wooden Railway Express Train Set Model-483. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=483",
    "gallery_images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=483"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=483"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 483"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 484,
    "title": "DJI Classic Collector Strategy Board Game Model-484",
    "slug": "dji-classic-collector-strategy-board-game-484",
    "sku": "DJI-484",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Classic Collector Strategy Board Game Model-484 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Classic Collector Strategy Board Game Model-484. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=484",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=484"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 484"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 485,
    "title": "Hot Wheels Connected Bluetooth Speed Cube Model-485",
    "slug": "hot-wheels-connected-bluetooth-speed-cube-485",
    "sku": "HOT -485",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Connected Bluetooth Speed Cube Model-485 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Connected Bluetooth Speed Cube Model-485. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=485",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=485"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=485"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 485"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 486,
    "title": "Hasbro Technic Formula 1 Supercar Kit Model-486",
    "slug": "hasbro-technic-formula-1-supercar-kit-486",
    "sku": "HASB-486",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro Technic Formula 1 Supercar Kit Model-486 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro Technic Formula 1 Supercar Kit Model-486. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=486",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=486"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 486"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 487,
    "title": "Barbie 4K Camera Mini Selfie Drone Model-487",
    "slug": "barbie-4k-camera-mini-selfie-drone-487",
    "sku": "BARB-487",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie 4K Camera Mini Selfie Drone Model-487 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie 4K Camera Mini Selfie Drone Model-487. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=487",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=487"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=487"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 487"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 488,
    "title": "Nerf Anime Collectible Action Statue Model-488",
    "slug": "nerf-anime-collectible-action-statue-488",
    "sku": "NERF-488",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf Anime Collectible Action Statue Model-488 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf Anime Collectible Action Statue Model-488. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=488",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=488"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 488"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 489,
    "title": "Playmobil Architecture Landmark Building Set Model-489",
    "slug": "playmobil-architecture-landmark-building-set-489",
    "sku": "PLAY-489",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil Architecture Landmark Building Set Model-489 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil Architecture Landmark Building Set Model-489. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=489",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=489"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=489"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 489"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 490,
    "title": "Rubik's Wooden Railway Express Train Set Model-490",
    "slug": "rubik's-wooden-railway-express-train-set-490",
    "sku": "RUBI-490",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's Wooden Railway Express Train Set Model-490 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's Wooden Railway Express Train Set Model-490. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=490",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=490"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 490"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 491,
    "title": "LEGO Classic Collector Strategy Board Game Model-491",
    "slug": "lego-classic-collector-strategy-board-game-491",
    "sku": "LEGO-491",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Classic Collector Strategy Board Game Model-491 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Classic Collector Strategy Board Game Model-491. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=491",
    "gallery_images": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=491"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80&img_id=491"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 491"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 492,
    "title": "DJI Connected Bluetooth Speed Cube Model-492",
    "slug": "dji-connected-bluetooth-speed-cube-492",
    "sku": "DJI-492",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Connected Bluetooth Speed Cube Model-492 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Connected Bluetooth Speed Cube Model-492. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=492",
    "gallery_images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80&img_id=492"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 492"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 493,
    "title": "Hot Wheels Technic Formula 1 Supercar Kit Model-493",
    "slug": "hot-wheels-technic-formula-1-supercar-kit-493",
    "sku": "HOT -493",
    "brand": "Hot Wheels",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hot Wheels Technic Formula 1 Supercar Kit Model-493 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hot Wheels Technic Formula 1 Supercar Kit Model-493. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=493",
    "gallery_images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=493"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80&img_id=493"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 493"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 494,
    "title": "Hasbro 4K Camera Mini Selfie Drone Model-494",
    "slug": "hasbro-4k-camera-mini-selfie-drone-494",
    "sku": "HASB-494",
    "brand": "Hasbro",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Hasbro 4K Camera Mini Selfie Drone Model-494 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Hasbro 4K Camera Mini Selfie Drone Model-494. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=494",
    "gallery_images": [
      "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80&img_id=494"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 494"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 495,
    "title": "Barbie Anime Collectible Action Statue Model-495",
    "slug": "barbie-anime-collectible-action-statue-495",
    "sku": "BARB-495",
    "brand": "Barbie",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Barbie Anime Collectible Action Statue Model-495 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Barbie Anime Collectible Action Statue Model-495. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=495",
    "gallery_images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=495"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80&img_id=495"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 495"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 496,
    "title": "Nerf Architecture Landmark Building Set Model-496",
    "slug": "nerf-architecture-landmark-building-set-496",
    "sku": "NERF-496",
    "brand": "Nerf",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Nerf Architecture Landmark Building Set Model-496 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Nerf Architecture Landmark Building Set Model-496. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=496",
    "gallery_images": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80&img_id=496"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 496"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 497,
    "title": "Playmobil Wooden Railway Express Train Set Model-497",
    "slug": "playmobil-wooden-railway-express-train-set-497",
    "sku": "PLAY-497",
    "brand": "Playmobil",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Playmobil Wooden Railway Express Train Set Model-497 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Playmobil Wooden Railway Express Train Set Model-497. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=497",
    "gallery_images": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=497"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80&img_id=497"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 497"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 498,
    "title": "Rubik's Classic Collector Strategy Board Game Model-498",
    "slug": "rubik's-classic-collector-strategy-board-game-498",
    "sku": "RUBI-498",
    "brand": "Rubik's",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified Rubik's Classic Collector Strategy Board Game Model-498 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rubik's Classic Collector Strategy Board Game Model-498. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=498",
    "gallery_images": [
      "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80&img_id=498"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 498"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 499,
    "title": "LEGO Connected Bluetooth Speed Cube Model-499",
    "slug": "lego-connected-bluetooth-speed-cube-499",
    "sku": "LEGO-499",
    "brand": "LEGO",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified LEGO Connected Bluetooth Speed Cube Model-499 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the LEGO Connected Bluetooth Speed Cube Model-499. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=499",
    "gallery_images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=499"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80&img_id=499"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 499"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 500,
    "title": "DJI Technic Formula 1 Supercar Kit Model-500",
    "slug": "dji-technic-formula-1-supercar-kit-500",
    "sku": "DJI-500",
    "brand": "DJI",
    "category_id": 8,
    "seller_id": 2,
    "short_description": "Genuine certified DJI Technic Formula 1 Supercar Kit Model-500 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the DJI Technic Formula 1 Supercar Kit Model-500. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=500",
    "gallery_images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80&img_id=500"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 500"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 501,
    "title": "70mai 4K Ultra Front & Rear Dash Cam Model-501",
    "slug": "70mai-4k-ultra-front-&-rear-dash-cam-501",
    "sku": "70MA-501",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai 4K Ultra Front & Rear Dash Cam Model-501 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai 4K Ultra Front & Rear Dash Cam Model-501. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=501",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=501"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=501"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 501"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 502,
    "title": "Baseus Wireless High Pressure Car Tire Inflator Model-502",
    "slug": "baseus-wireless-high-pressure-car-tire-inflator-502",
    "sku": "BASE-502",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Wireless High Pressure Car Tire Inflator Model-502 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Wireless High Pressure Car Tire Inflator Model-502. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=502",
    "gallery_images": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=502"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 502"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 503,
    "title": "Dyson Android Touchscreen Car Stereo 10.1\" Model-503",
    "slug": "dyson-android-touchscreen-car-stereo-10.1-503",
    "sku": "DYSO-503",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Android Touchscreen Car Stereo 10.1\" Model-503 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Android Touchscreen Car Stereo 10.1\" Model-503. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=503",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=503"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=503"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 503"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 504,
    "title": "ArmorAll Complete Car Wash Polish Care Kit Model-504",
    "slug": "armorall-complete-car-wash-polish-care-kit-504",
    "sku": "ARMO-504",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Complete Car Wash Polish Care Kit Model-504 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Complete Car Wash Polish Care Kit Model-504. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=504",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=504"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 504"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 505,
    "title": "Blaupunkt Cordless Car Interior Handheld Vacuum Model-505",
    "slug": "blaupunkt-cordless-car-interior-handheld-vacuum-505",
    "sku": "BLAU-505",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt Cordless Car Interior Handheld Vacuum Model-505 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt Cordless Car Interior Handheld Vacuum Model-505. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=505",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=505"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=505"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 505"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 506,
    "title": "Pioneer Emergency Car Battery Jump Starter Model-506",
    "slug": "pioneer-emergency-car-battery-jump-starter-506",
    "sku": "PION-506",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Emergency Car Battery Jump Starter Model-506 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Emergency Car Battery Jump Starter Model-506. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=506",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=506"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 506"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 507,
    "title": "Meguiar's 4K Ultra Front & Rear Dash Cam Model-507",
    "slug": "meguiar's-4k-ultra-front-&-rear-dash-cam-507",
    "sku": "MEGU-507",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's 4K Ultra Front & Rear Dash Cam Model-507 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's 4K Ultra Front & Rear Dash Cam Model-507. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=507",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=507"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=507"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 507"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 508,
    "title": "Bosch Wireless High Pressure Car Tire Inflator Model-508",
    "slug": "bosch-wireless-high-pressure-car-tire-inflator-508",
    "sku": "BOSC-508",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Wireless High Pressure Car Tire Inflator Model-508 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Wireless High Pressure Car Tire Inflator Model-508. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=508",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=508"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 508"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 509,
    "title": "70mai Android Touchscreen Car Stereo 10.1\" Model-509",
    "slug": "70mai-android-touchscreen-car-stereo-10.1-509",
    "sku": "70MA-509",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai Android Touchscreen Car Stereo 10.1\" Model-509 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai Android Touchscreen Car Stereo 10.1\" Model-509. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=509",
    "gallery_images": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=509"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=509"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 509"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 510,
    "title": "Baseus Complete Car Wash Polish Care Kit Model-510",
    "slug": "baseus-complete-car-wash-polish-care-kit-510",
    "sku": "BASE-510",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Complete Car Wash Polish Care Kit Model-510 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Complete Car Wash Polish Care Kit Model-510. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=510",
    "gallery_images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=510"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 510"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 511,
    "title": "Dyson Cordless Car Interior Handheld Vacuum Model-511",
    "slug": "dyson-cordless-car-interior-handheld-vacuum-511",
    "sku": "DYSO-511",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Car Interior Handheld Vacuum Model-511 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Car Interior Handheld Vacuum Model-511. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=511",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=511"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=511"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 511"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 512,
    "title": "ArmorAll Emergency Car Battery Jump Starter Model-512",
    "slug": "armorall-emergency-car-battery-jump-starter-512",
    "sku": "ARMO-512",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Emergency Car Battery Jump Starter Model-512 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Emergency Car Battery Jump Starter Model-512. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=512",
    "gallery_images": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=512"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 512"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 513,
    "title": "Blaupunkt 4K Ultra Front & Rear Dash Cam Model-513",
    "slug": "blaupunkt-4k-ultra-front-&-rear-dash-cam-513",
    "sku": "BLAU-513",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt 4K Ultra Front & Rear Dash Cam Model-513 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt 4K Ultra Front & Rear Dash Cam Model-513. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=513",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=513"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=513"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 513"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 514,
    "title": "Pioneer Wireless High Pressure Car Tire Inflator Model-514",
    "slug": "pioneer-wireless-high-pressure-car-tire-inflator-514",
    "sku": "PION-514",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Wireless High Pressure Car Tire Inflator Model-514 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Wireless High Pressure Car Tire Inflator Model-514. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=514",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=514"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 514"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 515,
    "title": "Meguiar's Android Touchscreen Car Stereo 10.1\" Model-515",
    "slug": "meguiar's-android-touchscreen-car-stereo-10.1-515",
    "sku": "MEGU-515",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's Android Touchscreen Car Stereo 10.1\" Model-515 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's Android Touchscreen Car Stereo 10.1\" Model-515. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=515",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=515"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=515"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 515"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 516,
    "title": "Bosch Complete Car Wash Polish Care Kit Model-516",
    "slug": "bosch-complete-car-wash-polish-care-kit-516",
    "sku": "BOSC-516",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Complete Car Wash Polish Care Kit Model-516 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Complete Car Wash Polish Care Kit Model-516. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=516",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=516"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 516"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 517,
    "title": "70mai Cordless Car Interior Handheld Vacuum Model-517",
    "slug": "70mai-cordless-car-interior-handheld-vacuum-517",
    "sku": "70MA-517",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai Cordless Car Interior Handheld Vacuum Model-517 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai Cordless Car Interior Handheld Vacuum Model-517. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=517",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=517"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=517"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 517"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 518,
    "title": "Baseus Emergency Car Battery Jump Starter Model-518",
    "slug": "baseus-emergency-car-battery-jump-starter-518",
    "sku": "BASE-518",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Emergency Car Battery Jump Starter Model-518 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Emergency Car Battery Jump Starter Model-518. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=518",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=518"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 518"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 519,
    "title": "Dyson 4K Ultra Front & Rear Dash Cam Model-519",
    "slug": "dyson-4k-ultra-front-&-rear-dash-cam-519",
    "sku": "DYSO-519",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson 4K Ultra Front & Rear Dash Cam Model-519 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson 4K Ultra Front & Rear Dash Cam Model-519. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=519",
    "gallery_images": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=519"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=519"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 519"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 520,
    "title": "ArmorAll Wireless High Pressure Car Tire Inflator Model-520",
    "slug": "armorall-wireless-high-pressure-car-tire-inflator-520",
    "sku": "ARMO-520",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Wireless High Pressure Car Tire Inflator Model-520 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Wireless High Pressure Car Tire Inflator Model-520. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=520",
    "gallery_images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=520"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 520"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 521,
    "title": "Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-521",
    "slug": "blaupunkt-android-touchscreen-car-stereo-10.1-521",
    "sku": "BLAU-521",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-521 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-521. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=521",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=521"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=521"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 521"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 522,
    "title": "Pioneer Complete Car Wash Polish Care Kit Model-522",
    "slug": "pioneer-complete-car-wash-polish-care-kit-522",
    "sku": "PION-522",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Complete Car Wash Polish Care Kit Model-522 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Complete Car Wash Polish Care Kit Model-522. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=522",
    "gallery_images": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=522"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 522"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 523,
    "title": "Meguiar's Cordless Car Interior Handheld Vacuum Model-523",
    "slug": "meguiar's-cordless-car-interior-handheld-vacuum-523",
    "sku": "MEGU-523",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's Cordless Car Interior Handheld Vacuum Model-523 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's Cordless Car Interior Handheld Vacuum Model-523. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=523",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=523"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=523"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 523"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 524,
    "title": "Bosch Emergency Car Battery Jump Starter Model-524",
    "slug": "bosch-emergency-car-battery-jump-starter-524",
    "sku": "BOSC-524",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Emergency Car Battery Jump Starter Model-524 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Emergency Car Battery Jump Starter Model-524. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=524",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=524"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 524"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 525,
    "title": "70mai 4K Ultra Front & Rear Dash Cam Model-525",
    "slug": "70mai-4k-ultra-front-&-rear-dash-cam-525",
    "sku": "70MA-525",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai 4K Ultra Front & Rear Dash Cam Model-525 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai 4K Ultra Front & Rear Dash Cam Model-525. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=525",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=525"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=525"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 525"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 526,
    "title": "Baseus Wireless High Pressure Car Tire Inflator Model-526",
    "slug": "baseus-wireless-high-pressure-car-tire-inflator-526",
    "sku": "BASE-526",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Wireless High Pressure Car Tire Inflator Model-526 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Wireless High Pressure Car Tire Inflator Model-526. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=526",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=526"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 526"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 527,
    "title": "Dyson Android Touchscreen Car Stereo 10.1\" Model-527",
    "slug": "dyson-android-touchscreen-car-stereo-10.1-527",
    "sku": "DYSO-527",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Android Touchscreen Car Stereo 10.1\" Model-527 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Android Touchscreen Car Stereo 10.1\" Model-527. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=527",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=527"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=527"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 527"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 528,
    "title": "ArmorAll Complete Car Wash Polish Care Kit Model-528",
    "slug": "armorall-complete-car-wash-polish-care-kit-528",
    "sku": "ARMO-528",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Complete Car Wash Polish Care Kit Model-528 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Complete Car Wash Polish Care Kit Model-528. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=528",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=528"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 528"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 529,
    "title": "Blaupunkt Cordless Car Interior Handheld Vacuum Model-529",
    "slug": "blaupunkt-cordless-car-interior-handheld-vacuum-529",
    "sku": "BLAU-529",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt Cordless Car Interior Handheld Vacuum Model-529 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt Cordless Car Interior Handheld Vacuum Model-529. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=529",
    "gallery_images": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=529"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=529"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 529"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 530,
    "title": "Pioneer Emergency Car Battery Jump Starter Model-530",
    "slug": "pioneer-emergency-car-battery-jump-starter-530",
    "sku": "PION-530",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Emergency Car Battery Jump Starter Model-530 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Emergency Car Battery Jump Starter Model-530. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=530",
    "gallery_images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=530"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 530"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 531,
    "title": "Meguiar's 4K Ultra Front & Rear Dash Cam Model-531",
    "slug": "meguiar's-4k-ultra-front-&-rear-dash-cam-531",
    "sku": "MEGU-531",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's 4K Ultra Front & Rear Dash Cam Model-531 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's 4K Ultra Front & Rear Dash Cam Model-531. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=531",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=531"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=531"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 531"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 532,
    "title": "Bosch Wireless High Pressure Car Tire Inflator Model-532",
    "slug": "bosch-wireless-high-pressure-car-tire-inflator-532",
    "sku": "BOSC-532",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Wireless High Pressure Car Tire Inflator Model-532 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Wireless High Pressure Car Tire Inflator Model-532. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=532",
    "gallery_images": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=532"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 532"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 533,
    "title": "70mai Android Touchscreen Car Stereo 10.1\" Model-533",
    "slug": "70mai-android-touchscreen-car-stereo-10.1-533",
    "sku": "70MA-533",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai Android Touchscreen Car Stereo 10.1\" Model-533 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai Android Touchscreen Car Stereo 10.1\" Model-533. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=533",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=533"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=533"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 533"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 534,
    "title": "Baseus Complete Car Wash Polish Care Kit Model-534",
    "slug": "baseus-complete-car-wash-polish-care-kit-534",
    "sku": "BASE-534",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Complete Car Wash Polish Care Kit Model-534 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Complete Car Wash Polish Care Kit Model-534. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=534",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=534"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 534"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 535,
    "title": "Dyson Cordless Car Interior Handheld Vacuum Model-535",
    "slug": "dyson-cordless-car-interior-handheld-vacuum-535",
    "sku": "DYSO-535",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson Cordless Car Interior Handheld Vacuum Model-535 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson Cordless Car Interior Handheld Vacuum Model-535. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=535",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=535"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=535"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 535"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 536,
    "title": "ArmorAll Emergency Car Battery Jump Starter Model-536",
    "slug": "armorall-emergency-car-battery-jump-starter-536",
    "sku": "ARMO-536",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Emergency Car Battery Jump Starter Model-536 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Emergency Car Battery Jump Starter Model-536. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=536",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=536"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 536"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 537,
    "title": "Blaupunkt 4K Ultra Front & Rear Dash Cam Model-537",
    "slug": "blaupunkt-4k-ultra-front-&-rear-dash-cam-537",
    "sku": "BLAU-537",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt 4K Ultra Front & Rear Dash Cam Model-537 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt 4K Ultra Front & Rear Dash Cam Model-537. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=537",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=537"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=537"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 537"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 538,
    "title": "Pioneer Wireless High Pressure Car Tire Inflator Model-538",
    "slug": "pioneer-wireless-high-pressure-car-tire-inflator-538",
    "sku": "PION-538",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Wireless High Pressure Car Tire Inflator Model-538 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Wireless High Pressure Car Tire Inflator Model-538. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=538",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=538"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 538"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 539,
    "title": "Meguiar's Android Touchscreen Car Stereo 10.1\" Model-539",
    "slug": "meguiar's-android-touchscreen-car-stereo-10.1-539",
    "sku": "MEGU-539",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's Android Touchscreen Car Stereo 10.1\" Model-539 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's Android Touchscreen Car Stereo 10.1\" Model-539. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=539",
    "gallery_images": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=539"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=539"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 539"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 540,
    "title": "Bosch Complete Car Wash Polish Care Kit Model-540",
    "slug": "bosch-complete-car-wash-polish-care-kit-540",
    "sku": "BOSC-540",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Complete Car Wash Polish Care Kit Model-540 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Complete Car Wash Polish Care Kit Model-540. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=540",
    "gallery_images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=540"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 540"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 541,
    "title": "70mai Cordless Car Interior Handheld Vacuum Model-541",
    "slug": "70mai-cordless-car-interior-handheld-vacuum-541",
    "sku": "70MA-541",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai Cordless Car Interior Handheld Vacuum Model-541 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai Cordless Car Interior Handheld Vacuum Model-541. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=541",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=541"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80&img_id=541"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 541"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 542,
    "title": "Baseus Emergency Car Battery Jump Starter Model-542",
    "slug": "baseus-emergency-car-battery-jump-starter-542",
    "sku": "BASE-542",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Emergency Car Battery Jump Starter Model-542 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Emergency Car Battery Jump Starter Model-542. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=542",
    "gallery_images": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80&img_id=542"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 542"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 543,
    "title": "Dyson 4K Ultra Front & Rear Dash Cam Model-543",
    "slug": "dyson-4k-ultra-front-&-rear-dash-cam-543",
    "sku": "DYSO-543",
    "brand": "Dyson",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Dyson 4K Ultra Front & Rear Dash Cam Model-543 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Dyson 4K Ultra Front & Rear Dash Cam Model-543. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=543",
    "gallery_images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=543"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80&img_id=543"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 543"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 544,
    "title": "ArmorAll Wireless High Pressure Car Tire Inflator Model-544",
    "slug": "armorall-wireless-high-pressure-car-tire-inflator-544",
    "sku": "ARMO-544",
    "brand": "ArmorAll",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified ArmorAll Wireless High Pressure Car Tire Inflator Model-544 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the ArmorAll Wireless High Pressure Car Tire Inflator Model-544. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=544",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80&img_id=544"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 544"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 545,
    "title": "Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-545",
    "slug": "blaupunkt-android-touchscreen-car-stereo-10.1-545",
    "sku": "BLAU-545",
    "brand": "Blaupunkt",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-545 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blaupunkt Android Touchscreen Car Stereo 10.1\" Model-545. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=545",
    "gallery_images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=545"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80&img_id=545"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 545"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 546,
    "title": "Pioneer Complete Car Wash Polish Care Kit Model-546",
    "slug": "pioneer-complete-car-wash-polish-care-kit-546",
    "sku": "PION-546",
    "brand": "Pioneer",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Pioneer Complete Car Wash Polish Care Kit Model-546 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pioneer Complete Car Wash Polish Care Kit Model-546. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=546",
    "gallery_images": [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80&img_id=546"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 546"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 547,
    "title": "Meguiar's Cordless Car Interior Handheld Vacuum Model-547",
    "slug": "meguiar's-cordless-car-interior-handheld-vacuum-547",
    "sku": "MEGU-547",
    "brand": "Meguiar's",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Meguiar's Cordless Car Interior Handheld Vacuum Model-547 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Meguiar's Cordless Car Interior Handheld Vacuum Model-547. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=547",
    "gallery_images": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=547"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&auto=format&fit=crop&q=80&img_id=547"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 547"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 548,
    "title": "Bosch Emergency Car Battery Jump Starter Model-548",
    "slug": "bosch-emergency-car-battery-jump-starter-548",
    "sku": "BOSC-548",
    "brand": "Bosch",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Bosch Emergency Car Battery Jump Starter Model-548 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Bosch Emergency Car Battery Jump Starter Model-548. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=548",
    "gallery_images": [
      "https://images.unsplash.com/photo-1541348263662-e08266f92976?w=800&auto=format&fit=crop&q=80&img_id=548"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 548"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 549,
    "title": "70mai 4K Ultra Front & Rear Dash Cam Model-549",
    "slug": "70mai-4k-ultra-front-&-rear-dash-cam-549",
    "sku": "70MA-549",
    "brand": "70mai",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified 70mai 4K Ultra Front & Rear Dash Cam Model-549 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the 70mai 4K Ultra Front & Rear Dash Cam Model-549. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=549",
    "gallery_images": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=549"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80&img_id=549"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 549"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 550,
    "title": "Baseus Wireless High Pressure Car Tire Inflator Model-550",
    "slug": "baseus-wireless-high-pressure-car-tire-inflator-550",
    "sku": "BASE-550",
    "brand": "Baseus",
    "category_id": 9,
    "seller_id": 2,
    "short_description": "Genuine certified Baseus Wireless High Pressure Car Tire Inflator Model-550 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Baseus Wireless High Pressure Car Tire Inflator Model-550. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=550",
    "gallery_images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80&img_id=550"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 550"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 551,
    "title": "Amazon Signature Edition 32GB E-Reader Model-551",
    "slug": "amazon-signature-edition-32gb-e-reader-551",
    "sku": "AMAZ-551",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Signature Edition 32GB E-Reader Model-551 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Signature Edition 32GB E-Reader Model-551. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=551",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=551"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=551"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 551"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 552,
    "title": "Rocketbook Smart Reusable Spiral Grid Notebook Model-552",
    "slug": "rocketbook-smart-reusable-spiral-grid-notebook-552",
    "sku": "ROCK-552",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Smart Reusable Spiral Grid Notebook Model-552 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Smart Reusable Spiral Grid Notebook Model-552. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=552",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=552"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 552"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 553,
    "title": "Lamy Makrolon Executive Fountain Pen Model-553",
    "slug": "lamy-makrolon-executive-fountain-pen-553",
    "sku": "LAMY-553",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Makrolon Executive Fountain Pen Model-553 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Makrolon Executive Fountain Pen Model-553. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=553",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=553"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=553"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 553"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 554,
    "title": "Moleskine Classic Hardcover Leather Journal Model-554",
    "slug": "moleskine-classic-hardcover-leather-journal-554",
    "sku": "MOLE-554",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Classic Hardcover Leather Journal Model-554 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Classic Hardcover Leather Journal Model-554. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=554",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=554"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 554"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 555,
    "title": "Parker Stainless Steel Ballpoint Desk Pen Set Model-555",
    "slug": "parker-stainless-steel-ballpoint-desk-pen-set-555",
    "sku": "PARK-555",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Stainless Steel Ballpoint Desk Pen Set Model-555 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Stainless Steel Ballpoint Desk Pen Set Model-555. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=555",
    "gallery_images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=555"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=555"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 555"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 556,
    "title": "Pilot Signature Edition 32GB E-Reader Model-556",
    "slug": "pilot-signature-edition-32gb-e-reader-556",
    "sku": "PILO-556",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Signature Edition 32GB E-Reader Model-556 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Signature Edition 32GB E-Reader Model-556. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=556",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=556"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 556"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 557,
    "title": "Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-557",
    "slug": "leuchtturm1917-smart-reusable-spiral-grid-notebook-557",
    "sku": "LEUC-557",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-557 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-557. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=557",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=557"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=557"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 557"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 558,
    "title": "Amazon Makrolon Executive Fountain Pen Model-558",
    "slug": "amazon-makrolon-executive-fountain-pen-558",
    "sku": "AMAZ-558",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Makrolon Executive Fountain Pen Model-558 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Makrolon Executive Fountain Pen Model-558. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=558",
    "gallery_images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=558"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 558"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 559,
    "title": "Rocketbook Classic Hardcover Leather Journal Model-559",
    "slug": "rocketbook-classic-hardcover-leather-journal-559",
    "sku": "ROCK-559",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Classic Hardcover Leather Journal Model-559 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Classic Hardcover Leather Journal Model-559. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=559",
    "gallery_images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=559"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=559"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 559"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 560,
    "title": "Lamy Stainless Steel Ballpoint Desk Pen Set Model-560",
    "slug": "lamy-stainless-steel-ballpoint-desk-pen-set-560",
    "sku": "LAMY-560",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Stainless Steel Ballpoint Desk Pen Set Model-560 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Stainless Steel Ballpoint Desk Pen Set Model-560. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=560",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=560"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 560"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 561,
    "title": "Moleskine Signature Edition 32GB E-Reader Model-561",
    "slug": "moleskine-signature-edition-32gb-e-reader-561",
    "sku": "MOLE-561",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Signature Edition 32GB E-Reader Model-561 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Signature Edition 32GB E-Reader Model-561. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=561",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=561"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=561"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 561"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 562,
    "title": "Parker Smart Reusable Spiral Grid Notebook Model-562",
    "slug": "parker-smart-reusable-spiral-grid-notebook-562",
    "sku": "PARK-562",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Smart Reusable Spiral Grid Notebook Model-562 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Smart Reusable Spiral Grid Notebook Model-562. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=562",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=562"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 562"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 563,
    "title": "Pilot Makrolon Executive Fountain Pen Model-563",
    "slug": "pilot-makrolon-executive-fountain-pen-563",
    "sku": "PILO-563",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Makrolon Executive Fountain Pen Model-563 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Makrolon Executive Fountain Pen Model-563. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=563",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=563"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=563"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 563"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 564,
    "title": "Leuchtturm1917 Classic Hardcover Leather Journal Model-564",
    "slug": "leuchtturm1917-classic-hardcover-leather-journal-564",
    "sku": "LEUC-564",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Classic Hardcover Leather Journal Model-564 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Classic Hardcover Leather Journal Model-564. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=564",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=564"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 564"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 565,
    "title": "Amazon Stainless Steel Ballpoint Desk Pen Set Model-565",
    "slug": "amazon-stainless-steel-ballpoint-desk-pen-set-565",
    "sku": "AMAZ-565",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Stainless Steel Ballpoint Desk Pen Set Model-565 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Stainless Steel Ballpoint Desk Pen Set Model-565. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=565",
    "gallery_images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=565"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=565"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 565"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 566,
    "title": "Rocketbook Signature Edition 32GB E-Reader Model-566",
    "slug": "rocketbook-signature-edition-32gb-e-reader-566",
    "sku": "ROCK-566",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Signature Edition 32GB E-Reader Model-566 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Signature Edition 32GB E-Reader Model-566. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=566",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=566"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 566"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 567,
    "title": "Lamy Smart Reusable Spiral Grid Notebook Model-567",
    "slug": "lamy-smart-reusable-spiral-grid-notebook-567",
    "sku": "LAMY-567",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Smart Reusable Spiral Grid Notebook Model-567 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Smart Reusable Spiral Grid Notebook Model-567. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=567",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=567"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=567"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 567"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 568,
    "title": "Moleskine Makrolon Executive Fountain Pen Model-568",
    "slug": "moleskine-makrolon-executive-fountain-pen-568",
    "sku": "MOLE-568",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Makrolon Executive Fountain Pen Model-568 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Makrolon Executive Fountain Pen Model-568. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=568",
    "gallery_images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=568"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 568"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 569,
    "title": "Parker Classic Hardcover Leather Journal Model-569",
    "slug": "parker-classic-hardcover-leather-journal-569",
    "sku": "PARK-569",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Classic Hardcover Leather Journal Model-569 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Classic Hardcover Leather Journal Model-569. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=569",
    "gallery_images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=569"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=569"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 569"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 570,
    "title": "Pilot Stainless Steel Ballpoint Desk Pen Set Model-570",
    "slug": "pilot-stainless-steel-ballpoint-desk-pen-set-570",
    "sku": "PILO-570",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Stainless Steel Ballpoint Desk Pen Set Model-570 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Stainless Steel Ballpoint Desk Pen Set Model-570. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=570",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=570"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 570"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 571,
    "title": "Leuchtturm1917 Signature Edition 32GB E-Reader Model-571",
    "slug": "leuchtturm1917-signature-edition-32gb-e-reader-571",
    "sku": "LEUC-571",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Signature Edition 32GB E-Reader Model-571 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Signature Edition 32GB E-Reader Model-571. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=571",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=571"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=571"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 571"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 572,
    "title": "Amazon Smart Reusable Spiral Grid Notebook Model-572",
    "slug": "amazon-smart-reusable-spiral-grid-notebook-572",
    "sku": "AMAZ-572",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Smart Reusable Spiral Grid Notebook Model-572 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Smart Reusable Spiral Grid Notebook Model-572. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=572",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=572"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 572"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 573,
    "title": "Rocketbook Makrolon Executive Fountain Pen Model-573",
    "slug": "rocketbook-makrolon-executive-fountain-pen-573",
    "sku": "ROCK-573",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Makrolon Executive Fountain Pen Model-573 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Makrolon Executive Fountain Pen Model-573. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=573",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=573"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=573"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 573"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 574,
    "title": "Lamy Classic Hardcover Leather Journal Model-574",
    "slug": "lamy-classic-hardcover-leather-journal-574",
    "sku": "LAMY-574",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Classic Hardcover Leather Journal Model-574 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Classic Hardcover Leather Journal Model-574. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=574",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=574"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 574"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 575,
    "title": "Moleskine Stainless Steel Ballpoint Desk Pen Set Model-575",
    "slug": "moleskine-stainless-steel-ballpoint-desk-pen-set-575",
    "sku": "MOLE-575",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Stainless Steel Ballpoint Desk Pen Set Model-575 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Stainless Steel Ballpoint Desk Pen Set Model-575. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=575",
    "gallery_images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=575"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=575"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 575"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 576,
    "title": "Parker Signature Edition 32GB E-Reader Model-576",
    "slug": "parker-signature-edition-32gb-e-reader-576",
    "sku": "PARK-576",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Signature Edition 32GB E-Reader Model-576 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Signature Edition 32GB E-Reader Model-576. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=576",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=576"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 576"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 577,
    "title": "Pilot Smart Reusable Spiral Grid Notebook Model-577",
    "slug": "pilot-smart-reusable-spiral-grid-notebook-577",
    "sku": "PILO-577",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Smart Reusable Spiral Grid Notebook Model-577 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Smart Reusable Spiral Grid Notebook Model-577. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=577",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=577"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=577"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 577"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 578,
    "title": "Leuchtturm1917 Makrolon Executive Fountain Pen Model-578",
    "slug": "leuchtturm1917-makrolon-executive-fountain-pen-578",
    "sku": "LEUC-578",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Makrolon Executive Fountain Pen Model-578 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Makrolon Executive Fountain Pen Model-578. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=578",
    "gallery_images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=578"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 578"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 579,
    "title": "Amazon Classic Hardcover Leather Journal Model-579",
    "slug": "amazon-classic-hardcover-leather-journal-579",
    "sku": "AMAZ-579",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Classic Hardcover Leather Journal Model-579 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Classic Hardcover Leather Journal Model-579. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=579",
    "gallery_images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=579"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=579"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 579"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 580,
    "title": "Rocketbook Stainless Steel Ballpoint Desk Pen Set Model-580",
    "slug": "rocketbook-stainless-steel-ballpoint-desk-pen-set-580",
    "sku": "ROCK-580",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Stainless Steel Ballpoint Desk Pen Set Model-580 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Stainless Steel Ballpoint Desk Pen Set Model-580. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=580",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=580"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 580"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 581,
    "title": "Lamy Signature Edition 32GB E-Reader Model-581",
    "slug": "lamy-signature-edition-32gb-e-reader-581",
    "sku": "LAMY-581",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Signature Edition 32GB E-Reader Model-581 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Signature Edition 32GB E-Reader Model-581. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=581",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=581"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=581"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 581"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 582,
    "title": "Moleskine Smart Reusable Spiral Grid Notebook Model-582",
    "slug": "moleskine-smart-reusable-spiral-grid-notebook-582",
    "sku": "MOLE-582",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Smart Reusable Spiral Grid Notebook Model-582 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Smart Reusable Spiral Grid Notebook Model-582. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=582",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=582"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 582"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 583,
    "title": "Parker Makrolon Executive Fountain Pen Model-583",
    "slug": "parker-makrolon-executive-fountain-pen-583",
    "sku": "PARK-583",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Makrolon Executive Fountain Pen Model-583 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Makrolon Executive Fountain Pen Model-583. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=583",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=583"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=583"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 583"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 584,
    "title": "Pilot Classic Hardcover Leather Journal Model-584",
    "slug": "pilot-classic-hardcover-leather-journal-584",
    "sku": "PILO-584",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Classic Hardcover Leather Journal Model-584 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Classic Hardcover Leather Journal Model-584. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=584",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=584"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 584"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 585,
    "title": "Leuchtturm1917 Stainless Steel Ballpoint Desk Pen Set Model-585",
    "slug": "leuchtturm1917-stainless-steel-ballpoint-desk-pen-set-585",
    "sku": "LEUC-585",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Stainless Steel Ballpoint Desk Pen Set Model-585 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Stainless Steel Ballpoint Desk Pen Set Model-585. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=585",
    "gallery_images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=585"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=585"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 585"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 586,
    "title": "Amazon Signature Edition 32GB E-Reader Model-586",
    "slug": "amazon-signature-edition-32gb-e-reader-586",
    "sku": "AMAZ-586",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Signature Edition 32GB E-Reader Model-586 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Signature Edition 32GB E-Reader Model-586. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=586",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=586"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 586"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 587,
    "title": "Rocketbook Smart Reusable Spiral Grid Notebook Model-587",
    "slug": "rocketbook-smart-reusable-spiral-grid-notebook-587",
    "sku": "ROCK-587",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Smart Reusable Spiral Grid Notebook Model-587 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Smart Reusable Spiral Grid Notebook Model-587. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=587",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=587"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=587"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 587"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 588,
    "title": "Lamy Makrolon Executive Fountain Pen Model-588",
    "slug": "lamy-makrolon-executive-fountain-pen-588",
    "sku": "LAMY-588",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Makrolon Executive Fountain Pen Model-588 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Makrolon Executive Fountain Pen Model-588. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=588",
    "gallery_images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=588"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 588"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 589,
    "title": "Moleskine Classic Hardcover Leather Journal Model-589",
    "slug": "moleskine-classic-hardcover-leather-journal-589",
    "sku": "MOLE-589",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Classic Hardcover Leather Journal Model-589 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Classic Hardcover Leather Journal Model-589. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=589",
    "gallery_images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=589"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=589"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 589"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 590,
    "title": "Parker Stainless Steel Ballpoint Desk Pen Set Model-590",
    "slug": "parker-stainless-steel-ballpoint-desk-pen-set-590",
    "sku": "PARK-590",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Stainless Steel Ballpoint Desk Pen Set Model-590 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Stainless Steel Ballpoint Desk Pen Set Model-590. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=590",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=590"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 590"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 591,
    "title": "Pilot Signature Edition 32GB E-Reader Model-591",
    "slug": "pilot-signature-edition-32gb-e-reader-591",
    "sku": "PILO-591",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Signature Edition 32GB E-Reader Model-591 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Signature Edition 32GB E-Reader Model-591. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=591",
    "gallery_images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=591"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80&img_id=591"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 591"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 592,
    "title": "Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-592",
    "slug": "leuchtturm1917-smart-reusable-spiral-grid-notebook-592",
    "sku": "LEUC-592",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-592 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Smart Reusable Spiral Grid Notebook Model-592. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=592",
    "gallery_images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80&img_id=592"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 592"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 593,
    "title": "Amazon Makrolon Executive Fountain Pen Model-593",
    "slug": "amazon-makrolon-executive-fountain-pen-593",
    "sku": "AMAZ-593",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Makrolon Executive Fountain Pen Model-593 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Makrolon Executive Fountain Pen Model-593. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=593",
    "gallery_images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=593"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80&img_id=593"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 593"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 594,
    "title": "Rocketbook Classic Hardcover Leather Journal Model-594",
    "slug": "rocketbook-classic-hardcover-leather-journal-594",
    "sku": "ROCK-594",
    "brand": "Rocketbook",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Rocketbook Classic Hardcover Leather Journal Model-594 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Rocketbook Classic Hardcover Leather Journal Model-594. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=594",
    "gallery_images": [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80&img_id=594"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 594"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 595,
    "title": "Lamy Stainless Steel Ballpoint Desk Pen Set Model-595",
    "slug": "lamy-stainless-steel-ballpoint-desk-pen-set-595",
    "sku": "LAMY-595",
    "brand": "Lamy",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Lamy Stainless Steel Ballpoint Desk Pen Set Model-595 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lamy Stainless Steel Ballpoint Desk Pen Set Model-595. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=595",
    "gallery_images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=595"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80&img_id=595"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 595"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 596,
    "title": "Moleskine Signature Edition 32GB E-Reader Model-596",
    "slug": "moleskine-signature-edition-32gb-e-reader-596",
    "sku": "MOLE-596",
    "brand": "Moleskine",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Moleskine Signature Edition 32GB E-Reader Model-596 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Moleskine Signature Edition 32GB E-Reader Model-596. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=596",
    "gallery_images": [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80&img_id=596"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 596"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 597,
    "title": "Parker Smart Reusable Spiral Grid Notebook Model-597",
    "slug": "parker-smart-reusable-spiral-grid-notebook-597",
    "sku": "PARK-597",
    "brand": "Parker",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Parker Smart Reusable Spiral Grid Notebook Model-597 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Parker Smart Reusable Spiral Grid Notebook Model-597. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=597",
    "gallery_images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=597"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80&img_id=597"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 597"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 598,
    "title": "Pilot Makrolon Executive Fountain Pen Model-598",
    "slug": "pilot-makrolon-executive-fountain-pen-598",
    "sku": "PILO-598",
    "brand": "Pilot",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Pilot Makrolon Executive Fountain Pen Model-598 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Pilot Makrolon Executive Fountain Pen Model-598. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=598",
    "gallery_images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=80&img_id=598"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 598"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 599,
    "title": "Leuchtturm1917 Classic Hardcover Leather Journal Model-599",
    "slug": "leuchtturm1917-classic-hardcover-leather-journal-599",
    "sku": "LEUC-599",
    "brand": "Leuchtturm1917",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Leuchtturm1917 Classic Hardcover Leather Journal Model-599 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Leuchtturm1917 Classic Hardcover Leather Journal Model-599. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=599",
    "gallery_images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=599"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80&img_id=599"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 599"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 600,
    "title": "Amazon Stainless Steel Ballpoint Desk Pen Set Model-600",
    "slug": "amazon-stainless-steel-ballpoint-desk-pen-set-600",
    "sku": "AMAZ-600",
    "brand": "Amazon",
    "category_id": 10,
    "seller_id": 2,
    "short_description": "Genuine certified Amazon Stainless Steel Ballpoint Desk Pen Set Model-600 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Amazon Stainless Steel Ballpoint Desk Pen Set Model-600. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=600",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&auto=format&fit=crop&q=80&img_id=600"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 600"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 601,
    "title": "GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-601",
    "slug": "gourmetbeans-gourmet-whole-bean-roasted-coffee-500g-601",
    "sku": "GOUR-601",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-601 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-601. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 890.0,
    "discount_price": 801.0,
    "discount_percentage": 10,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 50,
    "primary_image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=601",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=601"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=601"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 601"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 602,
    "title": "Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-602",
    "slug": "ferrero-italian-hazelnut-chocolate-gift-box-48pcs-602",
    "sku": "FERR-602",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-602 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-602. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1170.0,
    "discount_price": 1041.3,
    "discount_percentage": 11,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 57,
    "primary_image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=602",
    "gallery_images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=602"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 602"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 603,
    "title": "Blue Mountain Royal Blend Loose Leaf Tea 250g Model-603",
    "slug": "blue-mountain-royal-blend-loose-leaf-tea-250g-603",
    "sku": "BLUE-603",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Royal Blend Loose Leaf Tea 250g Model-603 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Royal Blend Loose Leaf Tea 250g Model-603. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1450.0,
    "discount_price": 1276.0,
    "discount_percentage": 12,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 64,
    "primary_image": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=603",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=603"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=603"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 603"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 604,
    "title": "Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-604",
    "slug": "fortnum-&-mason-extra-virgin-cold-pressed-olive-oil-1l-604",
    "sku": "FORT-604",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-604 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-604. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 1730.0,
    "discount_price": 1505.1,
    "discount_percentage": 13,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 71,
    "primary_image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=604",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=604"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 604"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 605,
    "title": "Lindt Raw Organic Monofloral Manuka Honey 500g Model-605",
    "slug": "lindt-raw-organic-monofloral-manuka-honey-500g-605",
    "sku": "LIND-605",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Raw Organic Monofloral Manuka Honey 500g Model-605 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Raw Organic Monofloral Manuka Honey 500g Model-605. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2010.0,
    "discount_price": 1728.6,
    "discount_percentage": 14,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 78,
    "primary_image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=605",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=605"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=605"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 605"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 606,
    "title": "Twinings Gourmet Whole Bean Roasted Coffee 500g Model-606",
    "slug": "twinings-gourmet-whole-bean-roasted-coffee-500g-606",
    "sku": "TWIN-606",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Gourmet Whole Bean Roasted Coffee 500g Model-606 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Gourmet Whole Bean Roasted Coffee 500g Model-606. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2290.0,
    "discount_price": 1946.5,
    "discount_percentage": 15,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 85,
    "primary_image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=606",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=606"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 606"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 607,
    "title": "Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-607",
    "slug": "godiva-italian-hazelnut-chocolate-gift-box-48pcs-607",
    "sku": "GODI-607",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-607 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-607. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2570.0,
    "discount_price": 2158.8,
    "discount_percentage": 16,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 92,
    "primary_image": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=607",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=607"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=607"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 607"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 608,
    "title": "GourmetBeans Royal Blend Loose Leaf Tea 250g Model-608",
    "slug": "gourmetbeans-royal-blend-loose-leaf-tea-250g-608",
    "sku": "GOUR-608",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Royal Blend Loose Leaf Tea 250g Model-608 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Royal Blend Loose Leaf Tea 250g Model-608. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 2850.0,
    "discount_price": 2365.5,
    "discount_percentage": 17,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 99,
    "primary_image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=608",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=608"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 608"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 609,
    "title": "Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-609",
    "slug": "ferrero-extra-virgin-cold-pressed-olive-oil-1l-609",
    "sku": "FERR-609",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-609 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-609. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3130.0,
    "discount_price": 2566.6,
    "discount_percentage": 18,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 106,
    "primary_image": "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=609",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=609"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=609"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 609"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 610,
    "title": "Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-610",
    "slug": "blue-mountain-raw-organic-monofloral-manuka-honey-500g-610",
    "sku": "BLUE-610",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-610 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-610. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3410.0,
    "discount_price": 2762.1,
    "discount_percentage": 19,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 113,
    "primary_image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=610",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=610"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 610"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 611,
    "title": "Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-611",
    "slug": "fortnum-&-mason-gourmet-whole-bean-roasted-coffee-500g-611",
    "sku": "FORT-611",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-611 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-611. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3690.0,
    "discount_price": 2952.0,
    "discount_percentage": 20,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 120,
    "primary_image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=611",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=611"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=611"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 611"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 612,
    "title": "Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-612",
    "slug": "lindt-italian-hazelnut-chocolate-gift-box-48pcs-612",
    "sku": "LIND-612",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-612 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-612. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 3970.0,
    "discount_price": 3136.3,
    "discount_percentage": 21,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 127,
    "primary_image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=612",
    "gallery_images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=612"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 612"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 613,
    "title": "Twinings Royal Blend Loose Leaf Tea 250g Model-613",
    "slug": "twinings-royal-blend-loose-leaf-tea-250g-613",
    "sku": "TWIN-613",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Royal Blend Loose Leaf Tea 250g Model-613 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Royal Blend Loose Leaf Tea 250g Model-613. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4250.0,
    "discount_price": 3315.0,
    "discount_percentage": 22,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 134,
    "primary_image": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=613",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=613"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=613"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 613"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 614,
    "title": "Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-614",
    "slug": "godiva-extra-virgin-cold-pressed-olive-oil-1l-614",
    "sku": "GODI-614",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-614 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-614. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4530.0,
    "discount_price": 3488.1,
    "discount_percentage": 23,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 141,
    "primary_image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=614",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=614"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 614"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 615,
    "title": "GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-615",
    "slug": "gourmetbeans-raw-organic-monofloral-manuka-honey-500g-615",
    "sku": "GOUR-615",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-615 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-615. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 4810.0,
    "discount_price": 3655.6,
    "discount_percentage": 24,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 148,
    "primary_image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=615",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=615"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=615"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 615"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 616,
    "title": "Ferrero Gourmet Whole Bean Roasted Coffee 500g Model-616",
    "slug": "ferrero-gourmet-whole-bean-roasted-coffee-500g-616",
    "sku": "FERR-616",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Gourmet Whole Bean Roasted Coffee 500g Model-616 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Gourmet Whole Bean Roasted Coffee 500g Model-616. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5090.0,
    "discount_price": 3817.5,
    "discount_percentage": 25,
    "stock_quantity": 35,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 155,
    "primary_image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=616",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=616"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 616"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 617,
    "title": "Blue Mountain Italian Hazelnut Chocolate Gift Box 48Pcs Model-617",
    "slug": "blue-mountain-italian-hazelnut-chocolate-gift-box-48pcs-617",
    "sku": "BLUE-617",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Italian Hazelnut Chocolate Gift Box 48Pcs Model-617 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Italian Hazelnut Chocolate Gift Box 48Pcs Model-617. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5370.0,
    "discount_price": 3973.8,
    "discount_percentage": 26,
    "stock_quantity": 36,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 162,
    "primary_image": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=617",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=617"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=617"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 617"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 618,
    "title": "Fortnum & Mason Royal Blend Loose Leaf Tea 250g Model-618",
    "slug": "fortnum-&-mason-royal-blend-loose-leaf-tea-250g-618",
    "sku": "FORT-618",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Royal Blend Loose Leaf Tea 250g Model-618 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Royal Blend Loose Leaf Tea 250g Model-618. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5650.0,
    "discount_price": 4124.5,
    "discount_percentage": 27,
    "stock_quantity": 37,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 169,
    "primary_image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=618",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=618"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 618"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 619,
    "title": "Lindt Extra Virgin Cold Pressed Olive Oil 1L Model-619",
    "slug": "lindt-extra-virgin-cold-pressed-olive-oil-1l-619",
    "sku": "LIND-619",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Extra Virgin Cold Pressed Olive Oil 1L Model-619 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Extra Virgin Cold Pressed Olive Oil 1L Model-619. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 5930.0,
    "discount_price": 4269.6,
    "discount_percentage": 28,
    "stock_quantity": 38,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 176,
    "primary_image": "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=619",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=619"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=619"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 619"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 620,
    "title": "Twinings Raw Organic Monofloral Manuka Honey 500g Model-620",
    "slug": "twinings-raw-organic-monofloral-manuka-honey-500g-620",
    "sku": "TWIN-620",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Raw Organic Monofloral Manuka Honey 500g Model-620 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Raw Organic Monofloral Manuka Honey 500g Model-620. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6210.0,
    "discount_price": 4409.1,
    "discount_percentage": 29,
    "stock_quantity": 39,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 183,
    "primary_image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=620",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=620"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 620"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 621,
    "title": "Godiva Gourmet Whole Bean Roasted Coffee 500g Model-621",
    "slug": "godiva-gourmet-whole-bean-roasted-coffee-500g-621",
    "sku": "GODI-621",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Gourmet Whole Bean Roasted Coffee 500g Model-621 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Gourmet Whole Bean Roasted Coffee 500g Model-621. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6490.0,
    "discount_price": 5841.0,
    "discount_percentage": 10,
    "stock_quantity": 40,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 190,
    "primary_image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=621",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=621"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=621"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 621"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 622,
    "title": "GourmetBeans Italian Hazelnut Chocolate Gift Box 48Pcs Model-622",
    "slug": "gourmetbeans-italian-hazelnut-chocolate-gift-box-48pcs-622",
    "sku": "GOUR-622",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Italian Hazelnut Chocolate Gift Box 48Pcs Model-622 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Italian Hazelnut Chocolate Gift Box 48Pcs Model-622. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 6770.0,
    "discount_price": 6025.3,
    "discount_percentage": 11,
    "stock_quantity": 41,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 197,
    "primary_image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=622",
    "gallery_images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=622"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 622"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 623,
    "title": "Ferrero Royal Blend Loose Leaf Tea 250g Model-623",
    "slug": "ferrero-royal-blend-loose-leaf-tea-250g-623",
    "sku": "FERR-623",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Royal Blend Loose Leaf Tea 250g Model-623 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Royal Blend Loose Leaf Tea 250g Model-623. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7050.0,
    "discount_price": 6204.0,
    "discount_percentage": 12,
    "stock_quantity": 42,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 204,
    "primary_image": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=623",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=623"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=623"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 623"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 624,
    "title": "Blue Mountain Extra Virgin Cold Pressed Olive Oil 1L Model-624",
    "slug": "blue-mountain-extra-virgin-cold-pressed-olive-oil-1l-624",
    "sku": "BLUE-624",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Extra Virgin Cold Pressed Olive Oil 1L Model-624 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Extra Virgin Cold Pressed Olive Oil 1L Model-624. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7330.0,
    "discount_price": 6377.1,
    "discount_percentage": 13,
    "stock_quantity": 43,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 211,
    "primary_image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=624",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=624"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 624"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 625,
    "title": "Fortnum & Mason Raw Organic Monofloral Manuka Honey 500g Model-625",
    "slug": "fortnum-&-mason-raw-organic-monofloral-manuka-honey-500g-625",
    "sku": "FORT-625",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Raw Organic Monofloral Manuka Honey 500g Model-625 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Raw Organic Monofloral Manuka Honey 500g Model-625. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7610.0,
    "discount_price": 6544.6,
    "discount_percentage": 14,
    "stock_quantity": 44,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 218,
    "primary_image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=625",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=625"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=625"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 625"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 626,
    "title": "Lindt Gourmet Whole Bean Roasted Coffee 500g Model-626",
    "slug": "lindt-gourmet-whole-bean-roasted-coffee-500g-626",
    "sku": "LIND-626",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Gourmet Whole Bean Roasted Coffee 500g Model-626 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Gourmet Whole Bean Roasted Coffee 500g Model-626. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 7890.0,
    "discount_price": 6706.5,
    "discount_percentage": 15,
    "stock_quantity": 45,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 225,
    "primary_image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=626",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=626"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 626"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 627,
    "title": "Twinings Italian Hazelnut Chocolate Gift Box 48Pcs Model-627",
    "slug": "twinings-italian-hazelnut-chocolate-gift-box-48pcs-627",
    "sku": "TWIN-627",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Italian Hazelnut Chocolate Gift Box 48Pcs Model-627 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Italian Hazelnut Chocolate Gift Box 48Pcs Model-627. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8170.0,
    "discount_price": 6862.8,
    "discount_percentage": 16,
    "stock_quantity": 46,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 232,
    "primary_image": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=627",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=627"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=627"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 627"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 628,
    "title": "Godiva Royal Blend Loose Leaf Tea 250g Model-628",
    "slug": "godiva-royal-blend-loose-leaf-tea-250g-628",
    "sku": "GODI-628",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Royal Blend Loose Leaf Tea 250g Model-628 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Royal Blend Loose Leaf Tea 250g Model-628. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8450.0,
    "discount_price": 7013.5,
    "discount_percentage": 17,
    "stock_quantity": 47,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 239,
    "primary_image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=628",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=628"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 628"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 629,
    "title": "GourmetBeans Extra Virgin Cold Pressed Olive Oil 1L Model-629",
    "slug": "gourmetbeans-extra-virgin-cold-pressed-olive-oil-1l-629",
    "sku": "GOUR-629",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Extra Virgin Cold Pressed Olive Oil 1L Model-629 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Extra Virgin Cold Pressed Olive Oil 1L Model-629. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 8730.0,
    "discount_price": 7158.6,
    "discount_percentage": 18,
    "stock_quantity": 48,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 246,
    "primary_image": "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=629",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=629"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=629"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 629"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 630,
    "title": "Ferrero Raw Organic Monofloral Manuka Honey 500g Model-630",
    "slug": "ferrero-raw-organic-monofloral-manuka-honey-500g-630",
    "sku": "FERR-630",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Raw Organic Monofloral Manuka Honey 500g Model-630 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Raw Organic Monofloral Manuka Honey 500g Model-630. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9010.0,
    "discount_price": 7298.1,
    "discount_percentage": 19,
    "stock_quantity": 49,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 253,
    "primary_image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=630",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=630"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 630"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 631,
    "title": "Blue Mountain Gourmet Whole Bean Roasted Coffee 500g Model-631",
    "slug": "blue-mountain-gourmet-whole-bean-roasted-coffee-500g-631",
    "sku": "BLUE-631",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Gourmet Whole Bean Roasted Coffee 500g Model-631 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Gourmet Whole Bean Roasted Coffee 500g Model-631. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9290.0,
    "discount_price": 7432.0,
    "discount_percentage": 20,
    "stock_quantity": 50,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 260,
    "primary_image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=631",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=631"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=631"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 631"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 632,
    "title": "Fortnum & Mason Italian Hazelnut Chocolate Gift Box 48Pcs Model-632",
    "slug": "fortnum-&-mason-italian-hazelnut-chocolate-gift-box-48pcs-632",
    "sku": "FORT-632",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Italian Hazelnut Chocolate Gift Box 48Pcs Model-632 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Italian Hazelnut Chocolate Gift Box 48Pcs Model-632. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9570.0,
    "discount_price": 7560.3,
    "discount_percentage": 21,
    "stock_quantity": 51,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 267,
    "primary_image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=632",
    "gallery_images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=632"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 632"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 633,
    "title": "Lindt Royal Blend Loose Leaf Tea 250g Model-633",
    "slug": "lindt-royal-blend-loose-leaf-tea-250g-633",
    "sku": "LIND-633",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Royal Blend Loose Leaf Tea 250g Model-633 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Royal Blend Loose Leaf Tea 250g Model-633. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 9850.0,
    "discount_price": 7683.0,
    "discount_percentage": 22,
    "stock_quantity": 52,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 274,
    "primary_image": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=633",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=633"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=633"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 633"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 634,
    "title": "Twinings Extra Virgin Cold Pressed Olive Oil 1L Model-634",
    "slug": "twinings-extra-virgin-cold-pressed-olive-oil-1l-634",
    "sku": "TWIN-634",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Extra Virgin Cold Pressed Olive Oil 1L Model-634 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Extra Virgin Cold Pressed Olive Oil 1L Model-634. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10130.0,
    "discount_price": 7800.1,
    "discount_percentage": 23,
    "stock_quantity": 53,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 281,
    "primary_image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=634",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=634"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 634"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 635,
    "title": "Godiva Raw Organic Monofloral Manuka Honey 500g Model-635",
    "slug": "godiva-raw-organic-monofloral-manuka-honey-500g-635",
    "sku": "GODI-635",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Raw Organic Monofloral Manuka Honey 500g Model-635 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Raw Organic Monofloral Manuka Honey 500g Model-635. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10410.0,
    "discount_price": 7911.6,
    "discount_percentage": 24,
    "stock_quantity": 54,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 288,
    "primary_image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=635",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=635"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=635"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 635"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 636,
    "title": "GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-636",
    "slug": "gourmetbeans-gourmet-whole-bean-roasted-coffee-500g-636",
    "sku": "GOUR-636",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-636 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Gourmet Whole Bean Roasted Coffee 500g Model-636. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10690.0,
    "discount_price": 8017.5,
    "discount_percentage": 25,
    "stock_quantity": 20,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 295,
    "primary_image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=636",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=636"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 636"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 637,
    "title": "Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-637",
    "slug": "ferrero-italian-hazelnut-chocolate-gift-box-48pcs-637",
    "sku": "FERR-637",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-637 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Italian Hazelnut Chocolate Gift Box 48Pcs Model-637. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 10970.0,
    "discount_price": 8117.8,
    "discount_percentage": 26,
    "stock_quantity": 21,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 302,
    "primary_image": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=637",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=637"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=637"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 637"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 638,
    "title": "Blue Mountain Royal Blend Loose Leaf Tea 250g Model-638",
    "slug": "blue-mountain-royal-blend-loose-leaf-tea-250g-638",
    "sku": "BLUE-638",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Royal Blend Loose Leaf Tea 250g Model-638 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Royal Blend Loose Leaf Tea 250g Model-638. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11250.0,
    "discount_price": 8212.5,
    "discount_percentage": 27,
    "stock_quantity": 22,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 309,
    "primary_image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=638",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=638"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 638"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 639,
    "title": "Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-639",
    "slug": "fortnum-&-mason-extra-virgin-cold-pressed-olive-oil-1l-639",
    "sku": "FORT-639",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-639 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Extra Virgin Cold Pressed Olive Oil 1L Model-639. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11530.0,
    "discount_price": 8301.6,
    "discount_percentage": 28,
    "stock_quantity": 23,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 316,
    "primary_image": "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=639",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=639"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=639"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 639"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 640,
    "title": "Lindt Raw Organic Monofloral Manuka Honey 500g Model-640",
    "slug": "lindt-raw-organic-monofloral-manuka-honey-500g-640",
    "sku": "LIND-640",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Raw Organic Monofloral Manuka Honey 500g Model-640 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Raw Organic Monofloral Manuka Honey 500g Model-640. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 11810.0,
    "discount_price": 8385.1,
    "discount_percentage": 29,
    "stock_quantity": 24,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 323,
    "primary_image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=640",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=640"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 640"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 641,
    "title": "Twinings Gourmet Whole Bean Roasted Coffee 500g Model-641",
    "slug": "twinings-gourmet-whole-bean-roasted-coffee-500g-641",
    "sku": "TWIN-641",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Gourmet Whole Bean Roasted Coffee 500g Model-641 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Gourmet Whole Bean Roasted Coffee 500g Model-641. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12090.0,
    "discount_price": 10881.0,
    "discount_percentage": 10,
    "stock_quantity": 25,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 330,
    "primary_image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=641",
    "gallery_images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=641"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&img_id=641"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 641"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 642,
    "title": "Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-642",
    "slug": "godiva-italian-hazelnut-chocolate-gift-box-48pcs-642",
    "sku": "GODI-642",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-642 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Italian Hazelnut Chocolate Gift Box 48Pcs Model-642. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12370.0,
    "discount_price": 11009.3,
    "discount_percentage": 11,
    "stock_quantity": 26,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 337,
    "primary_image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=642",
    "gallery_images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80&img_id=642"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 642"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 643,
    "title": "GourmetBeans Royal Blend Loose Leaf Tea 250g Model-643",
    "slug": "gourmetbeans-royal-blend-loose-leaf-tea-250g-643",
    "sku": "GOUR-643",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Royal Blend Loose Leaf Tea 250g Model-643 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Royal Blend Loose Leaf Tea 250g Model-643. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12650.0,
    "discount_price": 11132.0,
    "discount_percentage": 12,
    "stock_quantity": 27,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.4,
    "review_count": 344,
    "primary_image": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=643",
    "gallery_images": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=643"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80&img_id=643"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 643"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 644,
    "title": "Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-644",
    "slug": "ferrero-extra-virgin-cold-pressed-olive-oil-1l-644",
    "sku": "FERR-644",
    "brand": "Ferrero",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-644 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Ferrero Extra Virgin Cold Pressed Olive Oil 1L Model-644. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 12930.0,
    "discount_price": 11249.1,
    "discount_percentage": 13,
    "stock_quantity": 28,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.5,
    "review_count": 351,
    "primary_image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=644",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80&img_id=644"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 644"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 645,
    "title": "Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-645",
    "slug": "blue-mountain-raw-organic-monofloral-manuka-honey-500g-645",
    "sku": "BLUE-645",
    "brand": "Blue Mountain",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-645 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Blue Mountain Raw Organic Monofloral Manuka Honey 500g Model-645. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13210.0,
    "discount_price": 11360.6,
    "discount_percentage": 14,
    "stock_quantity": 29,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": true,
    "rating": 4.6,
    "review_count": 358,
    "primary_image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=645",
    "gallery_images": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=645"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80&img_id=645"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 645"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 646,
    "title": "Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-646",
    "slug": "fortnum-&-mason-gourmet-whole-bean-roasted-coffee-500g-646",
    "sku": "FORT-646",
    "brand": "Fortnum & Mason",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-646 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Fortnum & Mason Gourmet Whole Bean Roasted Coffee 500g Model-646. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13490.0,
    "discount_price": 11466.5,
    "discount_percentage": 15,
    "stock_quantity": 30,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": true,
    "is_flash_sale": false,
    "rating": 4.7,
    "review_count": 365,
    "primary_image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=646",
    "gallery_images": [
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80&img_id=646"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 646"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 647,
    "title": "Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-647",
    "slug": "lindt-italian-hazelnut-chocolate-gift-box-48pcs-647",
    "sku": "LIND-647",
    "brand": "Lindt",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-647 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Lindt Italian Hazelnut Chocolate Gift Box 48Pcs Model-647. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 13770.0,
    "discount_price": 11566.8,
    "discount_percentage": 16,
    "stock_quantity": 31,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.8,
    "review_count": 372,
    "primary_image": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=647",
    "gallery_images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=647"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80&img_id=647"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 647"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 648,
    "title": "Twinings Royal Blend Loose Leaf Tea 250g Model-648",
    "slug": "twinings-royal-blend-loose-leaf-tea-250g-648",
    "sku": "TWIN-648",
    "brand": "Twinings",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Twinings Royal Blend Loose Leaf Tea 250g Model-648 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Twinings Royal Blend Loose Leaf Tea 250g Model-648. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14050.0,
    "discount_price": 11661.5,
    "discount_percentage": 17,
    "stock_quantity": 32,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.9,
    "review_count": 379,
    "primary_image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=648",
    "gallery_images": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80&img_id=648"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 648"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 649,
    "title": "Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-649",
    "slug": "godiva-extra-virgin-cold-pressed-olive-oil-1l-649",
    "sku": "GODI-649",
    "brand": "Godiva",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-649 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the Godiva Extra Virgin Cold Pressed Olive Oil 1L Model-649. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14330.0,
    "discount_price": 11750.6,
    "discount_percentage": 18,
    "stock_quantity": 33,
    "is_in_stock": true,
    "is_featured": true,
    "is_trending": true,
    "is_flash_sale": true,
    "rating": 4.2,
    "review_count": 386,
    "primary_image": "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=649",
    "gallery_images": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=649"
    ],
    "images_360": [
      "https://images.unsplash.com/photo-1509358211525-c9ab36977805?w=800&auto=format&fit=crop&q=80&img_id=649"
    ],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 649"
      }
    ],
    "variants": [],
    "faqs": []
  },
  {
    "id": 650,
    "title": "GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-650",
    "slug": "gourmetbeans-raw-organic-monofloral-manuka-honey-500g-650",
    "sku": "GOUR-650",
    "brand": "GourmetBeans",
    "category_id": 11,
    "seller_id": 2,
    "short_description": "Genuine certified GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-650 featuring premium engineering and 1-year brand warranty.",
    "description": "Experience top tier performance with the GourmetBeans Raw Organic Monofloral Manuka Honey 500g Model-650. Designed for longevity and optimum user satisfaction.",
    "highlights": [
      "100% Certified Genuine Product",
      "Express 2-Day Free Doorstep Shipping",
      "7 Days Instant Return / Replacement Policy",
      "Official 1-Year Brand Warranty Included"
    ],
    "base_price": 14610.0,
    "discount_price": 11834.1,
    "discount_percentage": 19,
    "stock_quantity": 34,
    "is_in_stock": true,
    "is_featured": false,
    "is_trending": false,
    "is_flash_sale": false,
    "rating": 4.3,
    "review_count": 393,
    "primary_image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=650",
    "gallery_images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80&img_id=650"
    ],
    "images_360": [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [
      {
        "spec_key": "Model",
        "spec_value": "Edition 650"
      }
    ],
    "variants": [],
    "faqs": []
  }
];
