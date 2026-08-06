import asyncio
import json
from datetime import datetime, timezone
from sqlalchemy import select
from app.core.database import engine, AsyncSessionLocal, Base
from app.models.user import User, UserRole, Address
from app.models.category import Category
from app.models.product import Product, ProductSpec, ProductFAQ
from app.models.variant import ProductVariant
from app.models.coupon import Coupon, CouponType
from app.models.review import Review
from app.core.security import get_password_hash

CATEGORIES_DATA = [
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
]

PRODUCTS_DATA = [
    {
        "id": 1,
        "title": "AetherPro 15 Ultra M3 Max Laptop",
        "slug": "aetherpro-15-ultra-m3-max-laptop",
        "sku": "AETH-001-AET",
        "brand": "Aether",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Next-Gen 16-core CPU, Liquid Retina XDR 120Hz OLED Display with 36GB Unified Memory.",
        "description": "Experience unmatched performance with the AetherPro 15 Ultra. Built for creators, software developers, and AI researchers.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 219900.0,
        "discount_price": 199900.0,
        "discount_percentage": 9,
        "stock_quantity": 46,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 128,
        "primary_image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Aether"
            },
            {
                "spec_key": "Model",
                "spec_value": "AetherPro Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 11,
                "sku": "AETH-001-AET-STD",
                "color_name": "Standard Edition",
                "price": 199900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does AetherPro 15 Ultra M3 Max Laptop come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 2,
        "title": "Quantum Phone 15 Pro Max Smartphone",
        "slug": "quantum-phone-15-pro-max-smartphone",
        "sku": "QUAN-002-QUA",
        "brand": "Quantum Tech",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "200MP Quad-Camera System, Titanium Frame, and Snapdragon 8 Gen 3 Processor.",
        "description": "The ultimate smartphone experience. Featuring an ultra-bright 2600 nits AMOLED display and 8K cinematic recording.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 129900.0,
        "discount_price": 114900.0,
        "discount_percentage": 11,
        "stock_quantity": 47,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 520,
        "primary_image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Quantum Tech"
            },
            {
                "spec_key": "Model",
                "spec_value": "Quantum Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 21,
                "sku": "QUAN-002-QUA-STD",
                "color_name": "Standard Edition",
                "price": 114900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Quantum Phone 15 Pro Max Smartphone come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 3,
        "title": "ChronoPulse Ultra Smartwatch GPS",
        "slug": "chronopulse-ultra-smartwatch-gps",
        "sku": "CHRO-003-CHR",
        "brand": "ChronoPulse",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Rugged Titanium Smartwatch with Dual-Frequency GPS, ECG, and 100m Water Resistance.",
        "description": "Designed for endurance athletes, outdoor explorers, and health conscious individuals.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 44900.0,
        "discount_price": 37900.0,
        "discount_percentage": 15,
        "stock_quantity": 48,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 89,
        "primary_image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ChronoPulse"
            },
            {
                "spec_key": "Model",
                "spec_value": "ChronoPulse Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 31,
                "sku": "CHRO-003-CHR-STD",
                "color_name": "Standard Edition",
                "price": 37900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ChronoPulse Ultra Smartwatch GPS come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 4,
        "title": "Apex Tab Ultra 12.9 Pro OLED",
        "slug": "apex-tab-ultra-12.9-pro-oled",
        "sku": "APEX-004-APE",
        "brand": "ApexTech",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "12.9-inch Tandem OLED Display, Stylus Pen Included & Octa-Core Chip.",
        "description": "Powerful tablet for digital illustration, video editing, and mobile desktop productivity.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 99900.0,
        "discount_price": 79900.0,
        "discount_percentage": 20,
        "stock_quantity": 49,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 142,
        "primary_image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ApexTech"
            },
            {
                "spec_key": "Model",
                "spec_value": "Apex Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 41,
                "sku": "APEX-004-APE-STD",
                "color_name": "Standard Edition",
                "price": 79900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Apex Tab Ultra 12.9 Pro OLED come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 5,
        "title": "VisionCam X1 8K Vlog Camera",
        "slug": "visioncam-x1-8k-vlog-camera",
        "sku": "VISI-005-VIS",
        "brand": "VisionCam",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "1-inch Sensor, 8K 60fps Video, 3-Axis Gimbal Stabilization for Content Creators.",
        "description": "Professional cinema quality in a compact pocket camera.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 89900.0,
        "discount_price": 69900.0,
        "discount_percentage": 22,
        "stock_quantity": 50,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 95,
        "primary_image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "VisionCam"
            },
            {
                "spec_key": "Model",
                "spec_value": "VisionCam Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 51,
                "sku": "VISI-005-VIS-STD",
                "color_name": "Standard Edition",
                "price": 69900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does VisionCam X1 8K Vlog Camera come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 6,
        "title": "ZenBook Flip 14 Touch Convertible",
        "slug": "zenbook-flip-14-touch-convertible",
        "sku": "ASUS-006-ZEN",
        "brand": "Asus",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "360-degree Hinge, Touchscreen Pen, Intel Core Ultra 7 with AI NPU.",
        "description": "Versatile 2-in-1 laptop built for flexibility, presentation, and office productivity.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 84900.0,
        "discount_price": 74900.0,
        "discount_percentage": 11,
        "stock_quantity": 51,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.6,
        "review_count": 210,
        "primary_image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Asus"
            },
            {
                "spec_key": "Model",
                "spec_value": "ZenBook Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 61,
                "sku": "ASUS-006-ZEN-STD",
                "color_name": "Standard Edition",
                "price": 74900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ZenBook Flip 14 Touch Convertible come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 7,
        "title": "Galaxion Fold 6 Ultra 5G",
        "slug": "galaxion-fold-6-ultra-5g",
        "sku": "SAMS-007-GAL",
        "brand": "Samsung",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Dual AMOLED Displays, Armor Aluminum Frame, Ray Tracing Mobile Gaming.",
        "description": "Next generation foldable smartphone offering laptop-like multitasking in your pocket.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 164900.0,
        "discount_price": 139900.0,
        "discount_percentage": 15,
        "stock_quantity": 52,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 310,
        "primary_image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Samsung"
            },
            {
                "spec_key": "Model",
                "spec_value": "Galaxion Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 71,
                "sku": "SAMS-007-GAL-STD",
                "color_name": "Standard Edition",
                "price": 139900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Galaxion Fold 6 Ultra 5G come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 8,
        "title": "Titanium Power Bank 25000mAh 140W",
        "slug": "titanium-power-bank-25000mah-140w",
        "sku": "ANKE-008-TIT",
        "brand": "Anker",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "140W Fast Charging, Smart Digital Display, Charges Laptops & Phones Simultaneously.",
        "description": "Ultra fast portable power bank capable of charging MacBook Pro and iPhone 15 at top speed.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 12900.0,
        "discount_price": 8900.0,
        "discount_percentage": 31,
        "stock_quantity": 53,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 640,
        "primary_image": "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Anker"
            },
            {
                "spec_key": "Model",
                "spec_value": "Titanium Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 81,
                "sku": "ANKE-008-TIT-STD",
                "color_name": "Standard Edition",
                "price": 8900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Titanium Power Bank 25000mAh 140W come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 9,
        "title": "SwiftPad Pro 11 Wireless Keyboard Folio",
        "slug": "swiftpad-pro-11-wireless-keyboard-folio",
        "sku": "LOGI-009-SWI",
        "brand": "Logitech",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Precision Trackpad, Backlit Scissor Keys & Magnetic Stand.",
        "description": "Turn your tablet into a laptop workstation effortlessly.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9900.0,
        "discount_price": 7490.0,
        "discount_percentage": 24,
        "stock_quantity": 54,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.5,
        "review_count": 88,
        "primary_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Logitech"
            },
            {
                "spec_key": "Model",
                "spec_value": "SwiftPad Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 91,
                "sku": "LOGI-009-SWI-STD",
                "color_name": "Standard Edition",
                "price": 7490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does SwiftPad Pro 11 Wireless Keyboard Folio come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 10,
        "title": "InstaMax Mini Pocket Printer",
        "slug": "instamax-mini-pocket-printer",
        "sku": "FUJI-010-INS",
        "brand": "Fuji",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Bluetooth Instant Photo Printing on ZINK Sticky Film.",
        "description": "Print your favorite smartphone memories instantly anywhere.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 7990.0,
        "discount_price": 5490.0,
        "discount_percentage": 31,
        "stock_quantity": 55,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.6,
        "review_count": 412,
        "primary_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Fuji"
            },
            {
                "spec_key": "Model",
                "spec_value": "InstaMax Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 101,
                "sku": "FUJI-010-INS-STD",
                "color_name": "Standard Edition",
                "price": 5490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does InstaMax Mini Pocket Printer come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 11,
        "title": "PixelMaster 8 Pro Smartphone",
        "slug": "pixelmaster-8-pro-smartphone",
        "sku": "GOOG-011-PIX",
        "brand": "Google",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Tensor G3 Chip, AI Magic Eraser, Best-in-class Low Light Photography.",
        "description": "Pure Android experience powered by advanced Google AI algorithms.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 106900.0,
        "discount_price": 84900.0,
        "discount_percentage": 20,
        "stock_quantity": 56,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 485,
        "primary_image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Google"
            },
            {
                "spec_key": "Model",
                "spec_value": "PixelMaster Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 111,
                "sku": "GOOG-011-PIX-STD",
                "color_name": "Standard Edition",
                "price": 84900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does PixelMaster 8 Pro Smartphone come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 12,
        "title": "AirSound Pro Wireless Charging Case",
        "slug": "airsound-pro-wireless-charging-case",
        "sku": "AETH-012-AIR",
        "brand": "Aether",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "MagSafe Compatible Wireless Charging Stand.",
        "description": "Sleek aluminum desktop wireless charger.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 4900.0,
        "discount_price": 3490.0,
        "discount_percentage": 28,
        "stock_quantity": 57,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.4,
        "review_count": 76,
        "primary_image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Aether"
            },
            {
                "spec_key": "Model",
                "spec_value": "AirSound Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 121,
                "sku": "AETH-012-AIR-STD",
                "color_name": "Standard Edition",
                "price": 3490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does AirSound Pro Wireless Charging Case come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 13,
        "title": "Optima Cinema Projector 4K Laser",
        "slug": "optima-cinema-projector-4k-laser",
        "sku": "OPTI-013-OPT",
        "brand": "Optima",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "3000 ANSI Lumens, 150-inch 4K HDR Laser Theater Projector.",
        "description": "Transform your living room into an IMAX cinema.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 149900.0,
        "discount_price": 119900.0,
        "discount_percentage": 20,
        "stock_quantity": 58,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 92,
        "primary_image": "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Optima"
            },
            {
                "spec_key": "Model",
                "spec_value": "Optima Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 131,
                "sku": "OPTI-013-OPT-STD",
                "color_name": "Standard Edition",
                "price": 119900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Optima Cinema Projector 4K Laser come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 14,
        "title": "E-Reader Paper White 32GB Waterproof",
        "slug": "e-reader-paper-white-32gb-waterproof",
        "sku": "KIND-014-E-R",
        "brand": "Kindle",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "6.8-inch Glare-Free 300 ppi E-Ink Screen with Warm Light.",
        "description": "Read comfortably day or night with weeks of battery life.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 14900.0,
        "discount_price": 11900.0,
        "discount_percentage": 20,
        "stock_quantity": 59,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Kindle"
            },
            {
                "spec_key": "Model",
                "spec_value": "E-Reader Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 141,
                "sku": "KIND-014-E-R-STD",
                "color_name": "Standard Edition",
                "price": 11900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does E-Reader Paper White 32GB Waterproof come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 15,
        "title": "DroneCam Maverick 3 Pro 4K Drone",
        "slug": "dronecam-maverick-3-pro-4k-drone",
        "sku": "DJI-015-DRO",
        "brand": "DJI",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Hasselblad Camera 4K 120fps, 43 Min Flight Time, 15km Range.",
        "description": "Flagship tri-camera aerial photography drone.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 134900.0,
        "discount_price": 112900.0,
        "discount_percentage": 16,
        "stock_quantity": 60,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 178,
        "primary_image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "DJI"
            },
            {
                "spec_key": "Model",
                "spec_value": "DroneCam Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 151,
                "sku": "DJI-015-DRO-STD",
                "color_name": "Standard Edition",
                "price": 112900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does DroneCam Maverick 3 Pro 4K Drone come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 16,
        "title": "Soundbar Studio 5.1 Dolby Atmos",
        "slug": "soundbar-studio-5.1-dolby-atmos",
        "sku": "SONY-016-SOU",
        "brand": "Sony",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Wireless Subwoofer, 3D Surround Sound & HDMI eARC.",
        "description": "Rich room-filling audio for movies and gaming.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 49900.0,
        "discount_price": 38900.0,
        "discount_percentage": 22,
        "stock_quantity": 61,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 215,
        "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sony"
            },
            {
                "spec_key": "Model",
                "spec_value": "Soundbar Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 161,
                "sku": "SONY-016-SOU-STD",
                "color_name": "Standard Edition",
                "price": 38900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Soundbar Studio 5.1 Dolby Atmos come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 17,
        "title": "HyperDrive 10-in-1 USB-C Docking Station",
        "slug": "hyperdrive-10-in-1-usb-c-docking-station",
        "sku": "HYPE-017-HYP",
        "brand": "Hyper",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Dual 4K HDMI, 100W Power Delivery, SD Card & Ethernet.",
        "description": "Expand laptop connectivity with single-cable dock.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 8900.0,
        "discount_price": 6490.0,
        "discount_percentage": 27,
        "stock_quantity": 62,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.6,
        "review_count": 130,
        "primary_image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Hyper"
            },
            {
                "spec_key": "Model",
                "spec_value": "HyperDrive Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 171,
                "sku": "HYPE-017-HYP-STD",
                "color_name": "Standard Edition",
                "price": 6490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does HyperDrive 10-in-1 USB-C Docking Station come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 18,
        "title": "Smart Ring Horizon Fitness & Sleep Tracker",
        "slug": "smart-ring-horizon-fitness-and-sleep-tracker",
        "sku": "OURA-018-SMA",
        "brand": "Oura",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "Titanium Finish, 24/7 Heart Rate, Readiness Score & 7-Day Battery.",
        "description": "Subtle lightweight smart ring monitoring health metrics seamlessly.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 29900.0,
        "discount_price": 24900.0,
        "discount_percentage": 16,
        "stock_quantity": 63,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 340,
        "primary_image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Oura"
            },
            {
                "spec_key": "Model",
                "spec_value": "Smart Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 181,
                "sku": "OURA-018-SMA-STD",
                "color_name": "Standard Edition",
                "price": 24900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Smart Ring Horizon Fitness & Sleep Tracker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 19,
        "title": "Portable SSD Extreme 2TB Rugged",
        "slug": "portable-ssd-extreme-2tb-rugged",
        "sku": "SAND-019-POR",
        "brand": "SanDisk",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "2000MB/s Read Speed, IP65 Water & Dust Resistance.",
        "description": "Fast durable external storage for videographers and photographers.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 19900.0,
        "discount_price": 14900.0,
        "discount_percentage": 25,
        "stock_quantity": 64,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 780,
        "primary_image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "SanDisk"
            },
            {
                "spec_key": "Model",
                "spec_value": "Portable Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 191,
                "sku": "SAND-019-POR-STD",
                "color_name": "Standard Edition",
                "price": 14900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Portable SSD Extreme 2TB Rugged come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 20,
        "title": "VR Headset Horizon Pro 3D",
        "slug": "vr-headset-horizon-pro-3d",
        "sku": "META-020-VR ",
        "brand": "Meta",
        "category_id": 1,
        "seller_id": 2,
        "short_description": "4K+ Passthrough mixed reality headset with Haptic Controllers.",
        "description": "Immersive gaming, virtual workspaces, and 3D entertainment.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 54900.0,
        "discount_price": 44900.0,
        "discount_percentage": 18,
        "stock_quantity": 65,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 290,
        "primary_image": "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Meta"
            },
            {
                "spec_key": "Model",
                "spec_value": "VR Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 201,
                "sku": "META-020-VR -STD",
                "color_name": "Standard Edition",
                "price": 44900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does VR Headset Horizon Pro 3D come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 21,
        "title": "SonicPulse ANC 700 Wireless Headphones",
        "slug": "sonicpulse-anc-700-wireless-headphones",
        "sku": "SONI-021-SON",
        "brand": "SonicPulse",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Industry-leading hybrid Active Noise Cancellation with 40-hour playback.",
        "description": "Immerse yourself in pure studio audio quality with custom 40mm titanium drivers.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 29900.0,
        "discount_price": 22900.0,
        "discount_percentage": 23,
        "stock_quantity": 66,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 312,
        "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "SonicPulse"
            },
            {
                "spec_key": "Model",
                "spec_value": "SonicPulse Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 211,
                "sku": "SONI-021-SON-STD",
                "color_name": "Standard Edition",
                "price": 22900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does SonicPulse ANC 700 Wireless Headphones come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 22,
        "title": "AcousticStudio 9 Pro Wireless Earbuds",
        "slug": "acousticstudio-9-pro-wireless-earbuds",
        "sku": "BOSE-022-ACO",
        "brand": "Bose",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "CustomTune Audio, World-Class ANC & Spatial Audio.",
        "description": "Pocket-sized True wireless earbuds with unmatched noise cancellation.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 18900.0,
        "discount_percentage": 24,
        "stock_quantity": 67,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 480,
        "primary_image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Bose"
            },
            {
                "spec_key": "Model",
                "spec_value": "AcousticStudio Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 221,
                "sku": "BOSE-022-ACO-STD",
                "color_name": "Standard Edition",
                "price": 18900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does AcousticStudio 9 Pro Wireless Earbuds come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 23,
        "title": "Marshall Stanmore III Bluetooth Speaker",
        "slug": "marshall-stanmore-iii-bluetooth-speaker",
        "sku": "MARS-023-MAR",
        "brand": "Marshall",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Iconic Vintage Vinyl Design with Heavy Bass & Treble Knobs.",
        "description": "Home audio speaker engineered for room-filling acoustic resonance.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 31900.0,
        "discount_price": 26900.0,
        "discount_percentage": 15,
        "stock_quantity": 68,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 310,
        "primary_image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Marshall"
            },
            {
                "spec_key": "Model",
                "spec_value": "Marshall Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 231,
                "sku": "MARS-023-MAR-STD",
                "color_name": "Standard Edition",
                "price": 26900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Marshall Stanmore III Bluetooth Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 24,
        "title": "JBL Boombox 3 Waterproof Portable Speaker",
        "slug": "jbl-boombox-3-waterproof-portable-speaker",
        "sku": "JBL-024-JBL",
        "brand": "JBL",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "24 Hours Playtime, IP67 Waterproof & Deep Monstrous Bass.",
        "description": "Ultimate outdoor party speaker built to handle any adventure.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 39900.0,
        "discount_price": 32900.0,
        "discount_percentage": 17,
        "stock_quantity": 69,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.7,
        "review_count": 520,
        "primary_image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "JBL"
            },
            {
                "spec_key": "Model",
                "spec_value": "JBL Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 241,
                "sku": "JBL-024-JBL-STD",
                "color_name": "Standard Edition",
                "price": 32900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does JBL Boombox 3 Waterproof Portable Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 25,
        "title": "Sennheiser Momentum 4 Wireless",
        "slug": "sennheiser-momentum-4-wireless",
        "sku": "SENN-025-SEN",
        "brand": "Sennheiser",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "60-Hour Battery Life, Audiophile Sound Tuning & Adaptive ANC.",
        "description": "Audiophile grade sound quality with extraordinary battery stamina.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 34900.0,
        "discount_price": 27900.0,
        "discount_percentage": 20,
        "stock_quantity": 70,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 190,
        "primary_image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sennheiser"
            },
            {
                "spec_key": "Model",
                "spec_value": "Sennheiser Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 251,
                "sku": "SENN-025-SEN-STD",
                "color_name": "Standard Edition",
                "price": 27900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Sennheiser Momentum 4 Wireless come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 26,
        "title": "Beats Studio Pro Wireless Over-Ear",
        "slug": "beats-studio-pro-wireless-over-ear",
        "sku": "BEAT-026-BEA",
        "brand": "Beats",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Personalized Spatial Audio, Lossless USB-C Audio & 40 Hours Playback.",
        "description": "Iconic acoustic platform designed for powerful sound signature.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 29900.0,
        "discount_price": 23900.0,
        "discount_percentage": 20,
        "stock_quantity": 71,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.6,
        "review_count": 410,
        "primary_image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Beats"
            },
            {
                "spec_key": "Model",
                "spec_value": "Beats Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 261,
                "sku": "BEAT-026-BEA-STD",
                "color_name": "Standard Edition",
                "price": 23900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Beats Studio Pro Wireless Over-Ear come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 27,
        "title": "Shure SM7B Cardioid Dynamic Vocal Mic",
        "slug": "shure-sm7b-cardioid-dynamic-vocal-mic",
        "sku": "SHUR-027-SHU",
        "brand": "Shure",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Industry Standard Microphone for Podcasting, Streaming & Vocals.",
        "description": "Smooth, flat, wide-range frequency response for vocal recording.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 39900.0,
        "discount_price": 34900.0,
        "discount_percentage": 12,
        "stock_quantity": 72,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 670,
        "primary_image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Shure"
            },
            {
                "spec_key": "Model",
                "spec_value": "Shure Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 271,
                "sku": "SHUR-027-SHU-STD",
                "color_name": "Standard Edition",
                "price": 34900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Shure SM7B Cardioid Dynamic Vocal Mic come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 28,
        "title": "Sonos Era 300 Smart Speaker",
        "slug": "sonos-era-300-smart-speaker",
        "sku": "SONO-028-SON",
        "brand": "Sonos",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Dolby Atmos Spatial Audio Speaker with Wi-Fi & AirPlay 2.",
        "description": "Revolutionary architectural speaker delivering immersive spatial sound.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 44900.0,
        "discount_price": 37900.0,
        "discount_percentage": 15,
        "stock_quantity": 73,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 140,
        "primary_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sonos"
            },
            {
                "spec_key": "Model",
                "spec_value": "Sonos Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 281,
                "sku": "SONO-028-SON-STD",
                "color_name": "Standard Edition",
                "price": 37900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Sonos Era 300 Smart Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 29,
        "title": "Sony WF-1000XM5 Noise Canceling Earbuds",
        "slug": "sony-wf-1000xm5-noise-canceling-earbuds",
        "sku": "SONY-029-SON",
        "brand": "Sony",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "The Best Noise Canceling TWS Earbuds with Hi-Res LDAC Audio.",
        "description": "Compact ergonomic design with crystal clear call microphone system.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 19900.0,
        "discount_percentage": 20,
        "stock_quantity": 74,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 590,
        "primary_image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sony"
            },
            {
                "spec_key": "Model",
                "spec_value": "Sony Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 291,
                "sku": "SONY-029-SON-STD",
                "color_name": "Standard Edition",
                "price": 19900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Sony WF-1000XM5 Noise Canceling Earbuds come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 30,
        "title": "Audio-Technica ATH-M50x Professional Monitors",
        "slug": "audio-technica-ath-m50x-professional-monitors",
        "sku": "AUDI-030-AUD",
        "brand": "Audio-Technica",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Critically Acclaimed Studio Monitoring Headphones.",
        "description": "Preferred choice of top audio engineers and music producers worldwide.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 14900.0,
        "discount_price": 11900.0,
        "discount_percentage": 20,
        "stock_quantity": 75,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 1200,
        "primary_image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Audio-Technica"
            },
            {
                "spec_key": "Model",
                "spec_value": "Audio-Technica Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 301,
                "sku": "AUDI-030-AUD-STD",
                "color_name": "Standard Edition",
                "price": 11900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Audio-Technica ATH-M50x Professional Monitors come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 31,
        "title": "JBL Flip 6 Waterproof Speaker",
        "slug": "jbl-flip-6-waterproof-speaker",
        "sku": "JBL-031-JBL",
        "brand": "JBL",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Bold Sound, 12 Hours Battery & IP67 Dust/Waterproof.",
        "description": "Compact party speaker with dual passive radiators.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 11900.0,
        "discount_price": 8900.0,
        "discount_percentage": 25,
        "stock_quantity": 76,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "JBL"
            },
            {
                "spec_key": "Model",
                "spec_value": "JBL Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 311,
                "sku": "JBL-031-JBL-STD",
                "color_name": "Standard Edition",
                "price": 8900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does JBL Flip 6 Waterproof Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 32,
        "title": "Anker Soundcore Motion X600 Spatial Speaker",
        "slug": "anker-soundcore-motion-x600-spatial-speaker",
        "sku": "ANKE-032-ANK",
        "brand": "Anker",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Immersive Spatial Audio with Metal Grille & 5 Drivers.",
        "description": "Hi-Res Wireless certified speaker inspired by theater acoustics.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 19900.0,
        "discount_price": 14900.0,
        "discount_percentage": 25,
        "stock_quantity": 77,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 210,
        "primary_image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Anker"
            },
            {
                "spec_key": "Model",
                "spec_value": "Anker Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 321,
                "sku": "ANKE-032-ANK-STD",
                "color_name": "Standard Edition",
                "price": 14900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Anker Soundcore Motion X600 Spatial Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 33,
        "title": "Nothing Ear (2) Transparent Wireless Earbuds",
        "slug": "nothing-ear-(2)-transparent-wireless-earbuds",
        "sku": "NOTH-033-NOT",
        "brand": "Nothing",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Ultra-light 4.5g Design, 24bit Hi-Res Audio & Dual Connection.",
        "description": "Distinctive iconic transparent aesthetic with customized audio profile.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9900.0,
        "discount_price": 7900.0,
        "discount_percentage": 20,
        "stock_quantity": 78,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.6,
        "review_count": 340,
        "primary_image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Nothing"
            },
            {
                "spec_key": "Model",
                "spec_value": "Nothing Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 331,
                "sku": "NOTH-033-NOT-STD",
                "color_name": "Standard Edition",
                "price": 7900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Nothing Ear (2) Transparent Wireless Earbuds come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 34,
        "title": "Bang & Olufsen Beosound Explore Speaker",
        "slug": "bang-and-olufsen-beosound-explore-speaker",
        "sku": "B&O-034-BAN",
        "brand": "B&O",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "Tough Anodized Aluminum Outdoor Speaker.",
        "description": "Scandinavian luxury craftsmanship for wilderness exploration.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 22900.0,
        "discount_price": 18900.0,
        "discount_percentage": 17,
        "stock_quantity": 79,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 95,
        "primary_image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "B&O"
            },
            {
                "spec_key": "Model",
                "spec_value": "Bang Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 341,
                "sku": "B&O-034-BAN-STD",
                "color_name": "Standard Edition",
                "price": 18900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Bang & Olufsen Beosound Explore Speaker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 35,
        "title": "Yamaha HS5 Powered Studio Monitor Pair",
        "slug": "yamaha-hs5-powered-studio-monitor-pair",
        "sku": "YAMA-035-YAM",
        "brand": "Yamaha",
        "category_id": 2,
        "seller_id": 2,
        "short_description": "White Cone Bi-Amplified Nearfield Studio Speakers.",
        "description": "Legendary flat frequency response for precise audio mixing.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 32900.0,
        "discount_price": 27900.0,
        "discount_percentage": 15,
        "stock_quantity": 80,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 450,
        "primary_image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Yamaha"
            },
            {
                "spec_key": "Model",
                "spec_value": "Yamaha Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 351,
                "sku": "YAMA-035-YAM-STD",
                "color_name": "Standard Edition",
                "price": 27900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Yamaha HS5 Powered Studio Monitor Pair come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 36,
        "title": "ApexGlide Pro Italian Leather Sneakers",
        "slug": "apexglide-pro-italian-leather-sneakers",
        "sku": "APEX-036-APE",
        "brand": "ApexGlide",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Handcrafted Italian Calfskin Leather with OrthoLite Cushioning Sole.",
        "description": "Sophisticated minimalist sneakers designed for ultimate comfort and high fashion.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 15990.0,
        "discount_price": 12490.0,
        "discount_percentage": 21,
        "stock_quantity": 81,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 94,
        "primary_image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ApexGlide"
            },
            {
                "spec_key": "Model",
                "spec_value": "ApexGlide Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 361,
                "sku": "APEX-036-APE-STD",
                "color_name": "Standard Edition",
                "price": 12490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ApexGlide Pro Italian Leather Sneakers come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 37,
        "title": "Nike Air Jordan 1 Retro High OG",
        "slug": "nike-air-jordan-1-retro-high-og",
        "sku": "NIKE-037-NIK",
        "brand": "Nike",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Iconic Basketball Sneaker in Premium Leather & Chicago Colorway.",
        "description": "Timeless streetwear legend offering unmatched style and padded support.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 18995.0,
        "discount_price": 14995.0,
        "discount_percentage": 21,
        "stock_quantity": 82,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Nike"
            },
            {
                "spec_key": "Model",
                "spec_value": "Nike Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 371,
                "sku": "NIKE-037-NIK-STD",
                "color_name": "Standard Edition",
                "price": 14995.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Nike Air Jordan 1 Retro High OG come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 38,
        "title": "Adidas Ultraboost Light Running Shoes",
        "slug": "adidas-ultraboost-light-running-shoes",
        "sku": "ADID-038-ADI",
        "brand": "Adidas",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Light BOOST Material, Primeknit+ Upper & Continental Rubber.",
        "description": "30% lighter boost midsole technology for explosive energy return.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 16999.0,
        "discount_price": 11999.0,
        "discount_percentage": 29,
        "stock_quantity": 83,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 620,
        "primary_image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Adidas"
            },
            {
                "spec_key": "Model",
                "spec_value": "Adidas Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 381,
                "sku": "ADID-038-ADI-STD",
                "color_name": "Standard Edition",
                "price": 11999.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Adidas Ultraboost Light Running Shoes come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 39,
        "title": "Ray-Ban Aviator Classic Gold Sunglasses",
        "slug": "ray-ban-aviator-classic-gold-sunglasses",
        "sku": "RAY--039-RAY",
        "brand": "Ray-Ban",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Polarized Green G-15 Lenses with 18k Gold Plated Frame.",
        "description": "Originally designed for U.S. Aviators in 1937, iconic teardrop styling.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 11490.0,
        "discount_price": 8990.0,
        "discount_percentage": 21,
        "stock_quantity": 84,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 740,
        "primary_image": "https://images.unsplash.com/photo-1565026057447-b8899f2911a0?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1565026057447-b8899f2911a0?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1565026057447-b8899f2911a0?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Ray-Ban"
            },
            {
                "spec_key": "Model",
                "spec_value": "Ray-Ban Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 391,
                "sku": "RAY--039-RAY-STD",
                "color_name": "Standard Edition",
                "price": 8990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Ray-Ban Aviator Classic Gold Sunglasses come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 40,
        "title": "Fossil Heritage Automatic Leather Watch",
        "slug": "fossil-heritage-automatic-leather-watch",
        "sku": "FOSS-040-FOS",
        "brand": "Fossil",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Exhibition Caseback, 21-Jewel Automatic Movement & Genuine Leather.",
        "description": "Classic horology aesthetics featuring self-winding mechanical engine.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 21995.0,
        "discount_price": 16495.0,
        "discount_percentage": 25,
        "stock_quantity": 45,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.7,
        "review_count": 210,
        "primary_image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Fossil"
            },
            {
                "spec_key": "Model",
                "spec_value": "Fossil Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 401,
                "sku": "FOSS-040-FOS-STD",
                "color_name": "Standard Edition",
                "price": 16495.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Fossil Heritage Automatic Leather Watch come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 41,
        "title": "Levi's Trucker Denim Jacket Original",
        "slug": "levis-trucker-denim-jacket-original",
        "sku": "LEVI-041-LEV",
        "brand": "Levi's",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "100% Cotton Non-Stretch Heavyweight Denim in Medium Wash.",
        "description": "The original denim jacket template since 1967.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 7999.0,
        "discount_price": 5499.0,
        "discount_percentage": 31,
        "stock_quantity": 46,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 490,
        "primary_image": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Levi's"
            },
            {
                "spec_key": "Model",
                "spec_value": "Levi's Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 411,
                "sku": "LEVI-041-LEV-STD",
                "color_name": "Standard Edition",
                "price": 5499.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Levi's Trucker Denim Jacket Original come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 42,
        "title": "Puma Classic Suede Sneakers",
        "slug": "puma-classic-suede-sneakers",
        "sku": "PUMA-042-PUM",
        "brand": "Puma",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Soft Suede Upper, Rubber Outsole & Formstrip Details.",
        "description": "Casual street icon worn by generations of breakdancers and athletes.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 6999.0,
        "discount_price": 4499.0,
        "discount_percentage": 35,
        "stock_quantity": 47,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.6,
        "review_count": 380,
        "primary_image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Puma"
            },
            {
                "spec_key": "Model",
                "spec_value": "Puma Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 421,
                "sku": "PUMA-042-PUM-STD",
                "color_name": "Standard Edition",
                "price": 4499.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Puma Classic Suede Sneakers come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 43,
        "title": "Tommy Hilfiger Classic Oxford Shirt",
        "slug": "tommy-hilfiger-classic-oxford-shirt",
        "sku": "TOMM-043-TOM",
        "brand": "Tommy Hilfiger",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Pure Organic Cotton Oxford Weave with Flag Embroidery.",
        "description": "Preppy business casual wardrobe staple.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 5999.0,
        "discount_price": 4199.0,
        "discount_percentage": 30,
        "stock_quantity": 48,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.5,
        "review_count": 180,
        "primary_image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Tommy Hilfiger"
            },
            {
                "spec_key": "Model",
                "spec_value": "Tommy Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 431,
                "sku": "TOMM-043-TOM-STD",
                "color_name": "Standard Edition",
                "price": 4199.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Tommy Hilfiger Classic Oxford Shirt come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 44,
        "title": "Herschel Little America Laptop Backpack",
        "slug": "herschel-little-america-laptop-backpack",
        "sku": "HERS-044-HER",
        "brand": "Herschel",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "25L Capacity, Fleece-Lined 15\" Laptop Sleeve & Magnetic Straps.",
        "description": "Mountaineering inspired backpack built for daily urban commutes.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 10990.0,
        "discount_price": 7990.0,
        "discount_percentage": 27,
        "stock_quantity": 49,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 510,
        "primary_image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Herschel"
            },
            {
                "spec_key": "Model",
                "spec_value": "Herschel Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 441,
                "sku": "HERS-044-HER-STD",
                "color_name": "Standard Edition",
                "price": 7990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Herschel Little America Laptop Backpack come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 45,
        "title": "Casio G-Shock Carbon Core Guard Watch",
        "slug": "casio-g-shock-carbon-core-guard-watch",
        "sku": "CASI-045-CAS",
        "brand": "Casio",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "200m Water Resistant, Shock Resistant Carbon Core.",
        "description": "Indestructible rugged outdoor analog-digital watch.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9995.0,
        "discount_price": 7495.0,
        "discount_percentage": 25,
        "stock_quantity": 50,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 920,
        "primary_image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Casio"
            },
            {
                "spec_key": "Model",
                "spec_value": "Casio Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 451,
                "sku": "CASI-045-CAS-STD",
                "color_name": "Standard Edition",
                "price": 7495.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Casio G-Shock Carbon Core Guard Watch come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 46,
        "title": "Samsonite Omni Hard Shell Luggage Set",
        "slug": "samsonite-omni-hard-shell-luggage-set",
        "sku": "SAMS-046-SAM",
        "brand": "Samsonite",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Polycarbonate Micro-Diamond Texture, TSA Lock & 360 Spinners.",
        "description": "Scratch-resistant lightweight travel spinner suite.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 18900.0,
        "discount_percentage": 24,
        "stock_quantity": 51,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 340,
        "primary_image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Samsonite"
            },
            {
                "spec_key": "Model",
                "spec_value": "Samsonite Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 461,
                "sku": "SAMS-046-SAM-STD",
                "color_name": "Standard Edition",
                "price": 18900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Samsonite Omni Hard Shell Luggage Set come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 47,
        "title": "Zara Tailored Slim Fit Suit Blazer",
        "slug": "zara-tailored-slim-fit-suit-blazer",
        "sku": "ZARA-047-ZAR",
        "brand": "Zara",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Structured Shoulder, Notch Lapel & Double Vents.",
        "description": "Sharp contemporary blazer for formal events and dinner wear.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9990.0,
        "discount_price": 6990.0,
        "discount_percentage": 30,
        "stock_quantity": 52,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.5,
        "review_count": 160,
        "primary_image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Zara"
            },
            {
                "spec_key": "Model",
                "spec_value": "Zara Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 471,
                "sku": "ZARA-047-ZAR-STD",
                "color_name": "Standard Edition",
                "price": 6990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Zara Tailored Slim Fit Suit Blazer come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 48,
        "title": "New Balance 574 Core Sneakers",
        "slug": "new-balance-574-core-sneakers",
        "sku": "NEWB-048-NEW",
        "brand": "New Balance",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "ENCAP Midsole Cushioning & Premium Suede/Mesh Upper.",
        "description": "Unassuming versatility and effortless comfort for everyday wear.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9999.0,
        "discount_price": 7499.0,
        "discount_percentage": 25,
        "stock_quantity": 53,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 670,
        "primary_image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "New Balance"
            },
            {
                "spec_key": "Model",
                "spec_value": "New Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 481,
                "sku": "NEWB-048-NEW-STD",
                "color_name": "Standard Edition",
                "price": 7499.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does New Balance 574 Core Sneakers come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 49,
        "title": "Oakley Holbrook Prizm Sport Sunglasses",
        "slug": "oakley-holbrook-prizm-sport-sunglasses",
        "sku": "OAKL-049-OAK",
        "brand": "Oakley",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "Prizm Lens Technology Enhances Color & Contrast.",
        "description": "Classic American frame design accented by metal rivets.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 12490.0,
        "discount_price": 9490.0,
        "discount_percentage": 24,
        "stock_quantity": 54,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.7,
        "review_count": 280,
        "primary_image": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Oakley"
            },
            {
                "spec_key": "Model",
                "spec_value": "Oakley Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 491,
                "sku": "OAKL-049-OAK-STD",
                "color_name": "Standard Edition",
                "price": 9490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Oakley Holbrook Prizm Sport Sunglasses come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 50,
        "title": "Calvin Klein Genuine Leather Wallet",
        "slug": "calvin-klein-genuine-leather-wallet",
        "sku": "CALV-050-CAL",
        "brand": "Calvin Klein",
        "category_id": 3,
        "seller_id": 2,
        "short_description": "RFID Blocking Technology, Bifold Design & Coin Pocket.",
        "description": "Sleek soft leather billfold wallet.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 4999.0,
        "discount_price": 3499.0,
        "discount_percentage": 30,
        "stock_quantity": 55,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.6,
        "review_count": 420,
        "primary_image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Calvin Klein"
            },
            {
                "spec_key": "Model",
                "spec_value": "Calvin Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 501,
                "sku": "CALV-050-CAL-STD",
                "color_name": "Standard Edition",
                "price": 3499.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Calvin Klein Genuine Leather Wallet come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 51,
        "title": "LuminaSmart Ambient Light Bar RGB",
        "slug": "luminasmart-ambient-light-bar-rgb",
        "sku": "LUMI-051-LUM",
        "brand": "Lumina",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "16 Million RGB Colors with Smart App Sync & Voice Controls.",
        "description": "Elevate your gaming room or home theater with LuminaSmart Ambient Light Bar.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 10990.0,
        "discount_price": 8990.0,
        "discount_percentage": 18,
        "stock_quantity": 56,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.6,
        "review_count": 76,
        "primary_image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Lumina"
            },
            {
                "spec_key": "Model",
                "spec_value": "LuminaSmart Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 511,
                "sku": "LUMI-051-LUM-STD",
                "color_name": "Standard Edition",
                "price": 8990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does LuminaSmart Ambient Light Bar RGB come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 52,
        "title": "RoboClean X10 Ultra Robot Vacuum",
        "slug": "roboclean-x10-ultra-robot-vacuum",
        "sku": "ROBO-052-ROB",
        "brand": "RoboClean",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Auto Mop Washing, 8000Pa Suction & LiDAR 3D Obstacle Avoidance.",
        "description": "Zero hands cleaning assistant with self-emptying dust base.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 69900.0,
        "discount_price": 52900.0,
        "discount_percentage": 24,
        "stock_quantity": 57,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 280,
        "primary_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "RoboClean"
            },
            {
                "spec_key": "Model",
                "spec_value": "RoboClean Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 521,
                "sku": "ROBO-052-ROB-STD",
                "color_name": "Standard Edition",
                "price": 52900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does RoboClean X10 Ultra Robot Vacuum come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 53,
        "title": "Dyson V15 Detect Cordless Vacuum",
        "slug": "dyson-v15-detect-cordless-vacuum",
        "sku": "DYSO-053-DYS",
        "brand": "Dyson",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Laser Reveals Invisible Dust, Piezo Sensor & 60 Min Run Time.",
        "description": "Most intelligent powerful cordless vacuum cleaner.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 62900.0,
        "discount_price": 54900.0,
        "discount_percentage": 12,
        "stock_quantity": 58,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 750,
        "primary_image": "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Dyson"
            },
            {
                "spec_key": "Model",
                "spec_value": "Dyson Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 531,
                "sku": "DYSO-053-DYS-STD",
                "color_name": "Standard Edition",
                "price": 54900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Dyson V15 Detect Cordless Vacuum come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 54,
        "title": "Philips Hue Smart RGB Lightstrip 2M",
        "slug": "philips-hue-smart-rgb-lightstrip-2m",
        "sku": "PHIL-054-PHI",
        "brand": "Philips",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Sync with Music & Movies, Alexa / Google Assistant Ready.",
        "description": "Flexible smart LED strip with gradient color transitions.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 8999.0,
        "discount_price": 6499.0,
        "discount_percentage": 27,
        "stock_quantity": 59,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 430,
        "primary_image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Philips"
            },
            {
                "spec_key": "Model",
                "spec_value": "Philips Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 541,
                "sku": "PHIL-054-PHI-STD",
                "color_name": "Standard Edition",
                "price": 6499.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Philips Hue Smart RGB Lightstrip 2M come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 55,
        "title": "Nespresso Vertuo Pop Espresso Machine",
        "slug": "nespresso-vertuo-pop-espresso-machine",
        "sku": "NESP-055-NES",
        "brand": "Nespresso",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Centrifusion Extraction Technology, Single-Touch Barcode Brew.",
        "description": "Barista quality espresso, double espresso, and coffee at home.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 16900.0,
        "discount_price": 12900.0,
        "discount_percentage": 23,
        "stock_quantity": 60,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 510,
        "primary_image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Nespresso"
            },
            {
                "spec_key": "Model",
                "spec_value": "Nespresso Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 551,
                "sku": "NESP-055-NES-STD",
                "color_name": "Standard Edition",
                "price": 12900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Nespresso Vertuo Pop Espresso Machine come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 56,
        "title": "ErgoPro Ergonomic Mesh Office Chair",
        "slug": "ergopro-ergonomic-mesh-office-chair",
        "sku": "ERGO-056-ERG",
        "brand": "ErgoPro",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "3D Dynamic Lumbar Support, 4D Armrests & Breathable Korean Mesh.",
        "description": "Engineered for 12+ hour comfortable work sessions.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 17900.0,
        "discount_percentage": 28,
        "stock_quantity": 61,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 390,
        "primary_image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ErgoPro"
            },
            {
                "spec_key": "Model",
                "spec_value": "ErgoPro Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 561,
                "sku": "ERGO-056-ERG-STD",
                "color_name": "Standard Edition",
                "price": 17900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ErgoPro Ergonomic Mesh Office Chair come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 57,
        "title": "Instant Pot Duo 7-in-1 Pressure Cooker",
        "slug": "instant-pot-duo-7-in-1-pressure-cooker",
        "sku": "INST-057-INS",
        "brand": "Instant Pot",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Slow Cooker, Rice Cooker, Steamer, Yogurt Maker & Saut\u00e9 Pan.",
        "description": "Cooks up to 70% faster with 13 one-touch smart programs.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 11990.0,
        "discount_price": 8990.0,
        "discount_percentage": 25,
        "stock_quantity": 62,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 1400,
        "primary_image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Instant Pot"
            },
            {
                "spec_key": "Model",
                "spec_value": "Instant Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 571,
                "sku": "INST-057-INS-STD",
                "color_name": "Standard Edition",
                "price": 8990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Instant Pot Duo 7-in-1 Pressure Cooker come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 58,
        "title": "Cosori Dual Blaze Air Fryer 6.4L",
        "slug": "cosori-dual-blaze-air-fryer-6.4l",
        "sku": "COSO-058-COS",
        "brand": "Cosori",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Dual Heating Elements, 12 Functions, No Preheating Required.",
        "description": "Crisp healthy meals with 85% less oil.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 14990.0,
        "discount_price": 10990.0,
        "discount_percentage": 26,
        "stock_quantity": 63,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Cosori"
            },
            {
                "spec_key": "Model",
                "spec_value": "Cosori Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 581,
                "sku": "COSO-058-COS-STD",
                "color_name": "Standard Edition",
                "price": 10990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Cosori Dual Blaze Air Fryer 6.4L come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 59,
        "title": "Smart Air Purifier HEPA H13 Room",
        "slug": "smart-air-purifier-hepa-h13-room",
        "sku": "LEVO-059-SMA",
        "brand": "Levoit",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Filters 99.97% Airborne Particles, Quiet Sleep Mode.",
        "description": "Real-time air quality display with PM2.5 monitoring sensor.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 12900.0,
        "discount_price": 9490.0,
        "discount_percentage": 26,
        "stock_quantity": 64,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.7,
        "review_count": 480,
        "primary_image": "https://images.unsplash.com/photo-1517668808822-9ebe02f2a6e8?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1517668808822-9ebe02f2a6e8?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1517668808822-9ebe02f2a6e8?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Levoit"
            },
            {
                "spec_key": "Model",
                "spec_value": "Smart Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 591,
                "sku": "LEVO-059-SMA-STD",
                "color_name": "Standard Edition",
                "price": 9490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Smart Air Purifier HEPA H13 Room come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 60,
        "title": "Brevil Pro Touch Espresso Machine",
        "slug": "brevil-pro-touch-espresso-machine",
        "sku": "BREV-060-BRE",
        "brand": "Breville",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Integrated Conical Burr Grinder, Touchscreen Display & Microfoam Milk.",
        "description": "Specialty third-wave coffee at home in under 30 seconds.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 89900.0,
        "discount_price": 74900.0,
        "discount_percentage": 16,
        "stock_quantity": 65,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 210,
        "primary_image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Breville"
            },
            {
                "spec_key": "Model",
                "spec_value": "Brevil Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 601,
                "sku": "BREV-060-BRE-STD",
                "color_name": "Standard Edition",
                "price": 74900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Brevil Pro Touch Espresso Machine come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 61,
        "title": "Nest Learning Smart Thermostat 4th Gen",
        "slug": "nest-learning-smart-thermostat-4th-gen",
        "sku": "GOOG-061-NES",
        "brand": "Google",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Auto-Schedules Temperature, Energy History & Remote Phone Control.",
        "description": "Saves energy automatically while maintaining perfect ambient comfort.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 19900.0,
        "discount_percentage": 20,
        "stock_quantity": 66,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 310,
        "primary_image": "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Google"
            },
            {
                "spec_key": "Model",
                "spec_value": "Nest Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 611,
                "sku": "GOOG-061-NES-STD",
                "color_name": "Standard Edition",
                "price": 19900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Nest Learning Smart Thermostat 4th Gen come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 62,
        "title": "Smart Door Lock Touch ID & Keypad",
        "slug": "smart-door-lock-touch-id-and-keypad",
        "sku": "YALE-062-SMA",
        "brand": "Yale",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Fingerprint Recognition, Temporary Guest Passcode & Wi-Fi Bridge.",
        "description": "Keyless entry convenience with real-time access logs.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 19900.0,
        "discount_price": 14900.0,
        "discount_percentage": 25,
        "stock_quantity": 67,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 190,
        "primary_image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Yale"
            },
            {
                "spec_key": "Model",
                "spec_value": "Smart Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 621,
                "sku": "YALE-062-SMA-STD",
                "color_name": "Standard Edition",
                "price": 14900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Smart Door Lock Touch ID & Keypad come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 63,
        "title": "Autonomous Standing Desk Motorized",
        "slug": "autonomous-standing-desk-motorized",
        "sku": "FLEX-063-AUT",
        "brand": "FlexiSpot",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Dual Motor Steel Frame, Memory Heights & Cable Management.",
        "description": "Smooth height adjustment between sit and stand postures.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 34900.0,
        "discount_price": 26900.0,
        "discount_percentage": 22,
        "stock_quantity": 68,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 420,
        "primary_image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "FlexiSpot"
            },
            {
                "spec_key": "Model",
                "spec_value": "Autonomous Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 631,
                "sku": "FLEX-063-AUT-STD",
                "color_name": "Standard Edition",
                "price": 26900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Autonomous Standing Desk Motorized come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 64,
        "title": "Ninja Foodi 8-in-1 Digital Oven",
        "slug": "ninja-foodi-8-in-1-digital-oven",
        "sku": "NINJ-064-NIN",
        "brand": "Ninja",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Air Fry, Air Roast, Bake, Bagel, Toast, Dehydrate & Flip Away.",
        "description": "Countertop convection oven that folds up to save kitchen counter space.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 21900.0,
        "discount_price": 16900.0,
        "discount_percentage": 22,
        "stock_quantity": 69,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 350,
        "primary_image": "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Ninja"
            },
            {
                "spec_key": "Model",
                "spec_value": "Ninja Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 641,
                "sku": "NINJ-064-NIN-STD",
                "color_name": "Standard Edition",
                "price": 16900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Ninja Foodi 8-in-1 Digital Oven come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 65,
        "title": "Bose Smart Soundbar 900 Atmos",
        "slug": "bose-smart-soundbar-900-atmos",
        "sku": "BOSE-065-BOS",
        "brand": "Bose",
        "category_id": 4,
        "seller_id": 2,
        "short_description": "Custom Dipole Transducers, Voice4Video & Glass Top Plate.",
        "description": "Separates instruments, dialogue and effects across room walls.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 84900.0,
        "discount_price": 69900.0,
        "discount_percentage": 17,
        "stock_quantity": 70,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 280,
        "primary_image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Bose"
            },
            {
                "spec_key": "Model",
                "spec_value": "Bose Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 651,
                "sku": "BOSE-065-BOS-STD",
                "color_name": "Standard Edition",
                "price": 69900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Bose Smart Soundbar 900 Atmos come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 66,
        "title": "ROG Strix SCAR 18 i9 RTX 4090",
        "slug": "rog-strix-scar-18-i9-rtx-4090",
        "sku": "ASUS-066-ROG",
        "brand": "ASUS ROG",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "18\" 240Hz Nebula HDR Display, Intel i9-14900HX & RTX 4090 16GB.",
        "description": "Peak competitive esports performance desktop replacement laptop.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 389900.0,
        "discount_price": 349900.0,
        "discount_percentage": 10,
        "stock_quantity": 71,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 185,
        "primary_image": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ASUS ROG"
            },
            {
                "spec_key": "Model",
                "spec_value": "ROG Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 661,
                "sku": "ASUS-066-ROG-STD",
                "color_name": "Standard Edition",
                "price": 349900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ROG Strix SCAR 18 i9 RTX 4090 come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 67,
        "title": "PlayStation 5 Pro Console Digital Edition",
        "slug": "playstation-5-pro-console-digital-edition",
        "sku": "SONY-067-PLA",
        "brand": "Sony",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Spectral Super Resolution, 2TB High Speed SSD & Ray Tracing.",
        "description": "Play games in stunning 4K 120Hz with enhanced GPU fidelity.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 69900.0,
        "discount_price": 59900.0,
        "discount_percentage": 14,
        "stock_quantity": 72,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 1250,
        "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sony"
            },
            {
                "spec_key": "Model",
                "spec_value": "PlayStation Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 671,
                "sku": "SONY-067-PLA-STD",
                "color_name": "Standard Edition",
                "price": 59900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does PlayStation 5 Pro Console Digital Edition come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 68,
        "title": "Logitech G Pro X Superlight 2 Wireless Mouse",
        "slug": "logitech-g-pro-x-superlight-2-wireless-mouse",
        "sku": "LOGI-068-LOG",
        "brand": "Logitech",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "60g Ultra-Lightweight, HERO 2 Sensor 32,000 DPI, 95 Hours Battery.",
        "description": "The choice of world leading esports professionals.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 15995.0,
        "discount_price": 12495.0,
        "discount_percentage": 21,
        "stock_quantity": 73,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Logitech"
            },
            {
                "spec_key": "Model",
                "spec_value": "Logitech Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 681,
                "sku": "LOGI-068-LOG-STD",
                "color_name": "Standard Edition",
                "price": 12495.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Logitech G Pro X Superlight 2 Wireless Mouse come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 69,
        "title": "Razer BlackWidow V4 Pro Mechanical Keyboard",
        "slug": "razer-blackwidow-v4-pro-mechanical-keyboard",
        "sku": "RAZE-069-RAZ",
        "brand": "Razer",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Command Dial, Green Tactile Switches, Underglow Chroma RGB.",
        "description": "Full-blown battlestation keyboard with magnetic wrist rest.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 22999.0,
        "discount_price": 17999.0,
        "discount_percentage": 21,
        "stock_quantity": 74,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 420,
        "primary_image": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Razer"
            },
            {
                "spec_key": "Model",
                "spec_value": "Razer Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 691,
                "sku": "RAZE-069-RAZ-STD",
                "color_name": "Standard Edition",
                "price": 17999.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Razer BlackWidow V4 Pro Mechanical Keyboard come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 70,
        "title": "Alienware 34 Curved QD-OLED Monitor 175Hz",
        "slug": "alienware-34-curved-qd-oled-monitor-175hz",
        "sku": "ALIE-070-ALI",
        "brand": "Alienware",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Quantum Dot OLED Panel, 0.1ms Response, G-SYNC Ultimate.",
        "description": "Infinite contrast ratio and vibrant colors for gaming immersion.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 99900.0,
        "discount_price": 79900.0,
        "discount_percentage": 20,
        "stock_quantity": 75,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 310,
        "primary_image": "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Alienware"
            },
            {
                "spec_key": "Model",
                "spec_value": "Alienware Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 701,
                "sku": "ALIE-070-ALI-STD",
                "color_name": "Standard Edition",
                "price": 79900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Alienware 34 Curved QD-OLED Monitor 175Hz come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 71,
        "title": "Xbox Wireless Controller Elite Series 2",
        "slug": "xbox-wireless-controller-elite-series-2",
        "sku": "MICR-071-XBO",
        "brand": "Microsoft",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Adjustable-Tension Thumbsticks, Rear Paddles & 40hr Battery.",
        "description": "Designed to meet the needs of competitive gamers.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 17990.0,
        "discount_price": 13990.0,
        "discount_percentage": 22,
        "stock_quantity": 76,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 680,
        "primary_image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Microsoft"
            },
            {
                "spec_key": "Model",
                "spec_value": "Xbox Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 711,
                "sku": "MICR-071-XBO-STD",
                "color_name": "Standard Edition",
                "price": 13990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Xbox Wireless Controller Elite Series 2 come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 72,
        "title": "SteelSeries Arctis Nova Pro Wireless",
        "slug": "steelseries-arctis-nova-pro-wireless",
        "sku": "STEE-072-STE",
        "brand": "SteelSeries",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Multi-System Connect, Hot-Swappable Batteries & Active Noise Cancelling.",
        "description": "Ultimate gaming audio system with OLED wireless base station.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 37900.0,
        "discount_price": 29900.0,
        "discount_percentage": 21,
        "stock_quantity": 77,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 270,
        "primary_image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "SteelSeries"
            },
            {
                "spec_key": "Model",
                "spec_value": "SteelSeries Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 721,
                "sku": "STEE-072-STE-STD",
                "color_name": "Standard Edition",
                "price": 29900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does SteelSeries Arctis Nova Pro Wireless come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 73,
        "title": "Stream Deck MK.2 Studio Controller",
        "slug": "stream-deck-mk.2-studio-controller",
        "sku": "ELGA-073-STR",
        "brand": "Elgato",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "15 Customizable LCD Keys for Scene Switching & Hotkeys.",
        "description": "Essential broadcast controller for Twitch and YouTube creators.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 14900.0,
        "discount_price": 11900.0,
        "discount_percentage": 20,
        "stock_quantity": 78,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 520,
        "primary_image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Elgato"
            },
            {
                "spec_key": "Model",
                "spec_value": "Stream Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 731,
                "sku": "ELGA-073-STR-STD",
                "color_name": "Standard Edition",
                "price": 11900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Stream Deck MK.2 Studio Controller come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 74,
        "title": "Secretlab TITAN EVO Gaming Chair",
        "slug": "secretlab-titan-evo-gaming-chair",
        "sku": "SECR-074-SEC",
        "brand": "Secretlab",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "4-Way L-ADAPT Lumbar System, Magnetic Memory Foam Pillow.",
        "description": "Ergonomic gaming seat crafted with SoftWeave Plus fabric.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 49900.0,
        "discount_price": 39900.0,
        "discount_percentage": 20,
        "stock_quantity": 79,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 940,
        "primary_image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Secretlab"
            },
            {
                "spec_key": "Model",
                "spec_value": "Secretlab Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 741,
                "sku": "SECR-074-SEC-STD",
                "color_name": "Standard Edition",
                "price": 39900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Secretlab TITAN EVO Gaming Chair come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 75,
        "title": "Nintendo Switch OLED Model Mario Edition",
        "slug": "nintendo-switch-oled-model-mario-edition",
        "sku": "NINT-075-NIN",
        "brand": "Nintendo",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "7-inch Vibrant OLED Screen, Wide Adjustable Stand & LAN Port Dock.",
        "description": "Play handheld, tabletop, or on TV anytime anywhere.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 34900.0,
        "discount_price": 28900.0,
        "discount_percentage": 17,
        "stock_quantity": 80,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 1100,
        "primary_image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Nintendo"
            },
            {
                "spec_key": "Model",
                "spec_value": "Nintendo Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 751,
                "sku": "NINT-075-NIN-STD",
                "color_name": "Standard Edition",
                "price": 28900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Nintendo Switch OLED Model Mario Edition come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 76,
        "title": "MSI GeForce RTX 4080 Super Gaming X",
        "slug": "msi-geforce-rtx-4080-super-gaming-x",
        "sku": "MSI-076-MSI",
        "brand": "MSI",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "16GB GDDR6X, TRI FROZR 3 Thermal Design, DLSS 3.5 Frame Gen.",
        "description": "Ultra high framerate PC graphics card for extreme 4K gaming.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 119900.0,
        "discount_price": 99900.0,
        "discount_percentage": 16,
        "stock_quantity": 81,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 160,
        "primary_image": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "MSI"
            },
            {
                "spec_key": "Model",
                "spec_value": "MSI Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 761,
                "sku": "MSI-076-MSI-STD",
                "color_name": "Standard Edition",
                "price": 99900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does MSI GeForce RTX 4080 Super Gaming X come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 77,
        "title": "Corsair Vengeance RGB DDR5 64GB Kit",
        "slug": "corsair-vengeance-rgb-ddr5-64gb-kit",
        "sku": "CORS-077-COR",
        "brand": "Corsair",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "DDR5 6000MHz CL30, Dynamic Ten-Zone RGB Lighting.",
        "description": "High performance memory modules for gaming and rendering rigs.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 18900.0,
        "discount_percentage": 24,
        "stock_quantity": 82,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 390,
        "primary_image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Corsair"
            },
            {
                "spec_key": "Model",
                "spec_value": "Corsair Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 771,
                "sku": "CORS-077-COR-STD",
                "color_name": "Standard Edition",
                "price": 18900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Corsair Vengeance RGB DDR5 64GB Kit come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 78,
        "title": "HyperX QuadCast S RGB USB Microphone",
        "slug": "hyperx-quadcast-s-rgb-usb-microphone",
        "sku": "HYPE-078-HYP",
        "brand": "HyperX",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Anti-Vibration Shock Mount, Tap-to-Mute Sensor with LED Indicator.",
        "description": "Standalone condenser mic optimized for game streaming.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 16990.0,
        "discount_price": 12990.0,
        "discount_percentage": 23,
        "stock_quantity": 83,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 720,
        "primary_image": "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "HyperX"
            },
            {
                "spec_key": "Model",
                "spec_value": "HyperX Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 781,
                "sku": "HYPE-078-HYP-STD",
                "color_name": "Standard Edition",
                "price": 12990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does HyperX QuadCast S RGB USB Microphone come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 79,
        "title": "ASUS ROG Swift 27\" 360Hz Esports Monitor",
        "slug": "asus-rog-swift-27-360hz-esports-monitor",
        "sku": "ASUS-079-ASU",
        "brand": "ASUS ROG",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "Fast IPS 0.2ms, NVIDIA Reflex Analyzer & HDR10.",
        "description": "Blazing fast refresh rate engineered for first-person shooters.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 79900.0,
        "discount_price": 64900.0,
        "discount_percentage": 18,
        "stock_quantity": 84,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 140,
        "primary_image": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ASUS ROG"
            },
            {
                "spec_key": "Model",
                "spec_value": "ASUS Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 791,
                "sku": "ASUS-079-ASU-STD",
                "color_name": "Standard Edition",
                "price": 64900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ASUS ROG Swift 27\" 360Hz Esports Monitor come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 80,
        "title": "Razer Leviathan V2 Pro Beamforming Soundbar",
        "slug": "razer-leviathan-v2-pro-beamforming-soundbar",
        "sku": "RAZE-080-RAZ",
        "brand": "Razer",
        "category_id": 5,
        "seller_id": 2,
        "short_description": "AI Head-Tracking Beamforming Audio with Subwoofer.",
        "description": "3D spatial audio directed straight to your ears.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 42900.0,
        "discount_price": 34900.0,
        "discount_percentage": 18,
        "stock_quantity": 45,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 85,
        "primary_image": "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Razer"
            },
            {
                "spec_key": "Model",
                "spec_value": "Razer Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 801,
                "sku": "RAZE-080-RAZ-STD",
                "color_name": "Standard Edition",
                "price": 34900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Razer Leviathan V2 Pro Beamforming Soundbar come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 81,
        "title": "Dyson Airwrap Multi-Styler Complete Long",
        "slug": "dyson-airwrap-multi-styler-complete-long",
        "sku": "DYSO-081-DYS",
        "brand": "Dyson",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Coanda Airflow Styling, No Extreme Heat, 6 Attachments Included.",
        "description": "Curls, shapes, smooths and hides flyaways with air instead of extreme heat.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 49900.0,
        "discount_price": 44900.0,
        "discount_percentage": 10,
        "stock_quantity": 46,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 820,
        "primary_image": "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Dyson"
            },
            {
                "spec_key": "Model",
                "spec_value": "Dyson Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 811,
                "sku": "DYSO-081-DYS-STD",
                "color_name": "Standard Edition",
                "price": 44900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Dyson Airwrap Multi-Styler Complete Long come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 82,
        "title": "Braun Series 9 Pro Electric Shaver",
        "slug": "braun-series-9-pro-electric-shaver",
        "sku": "BRAU-082-BRA",
        "brand": "Braun",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "ProLift Trimmer, SmartCare Center, Sonic Technology 40,000 Cuts/Min.",
        "description": "World's most efficient electric shaver designed to shave 1, 3, or 7-day beards.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 29900.0,
        "discount_price": 22900.0,
        "discount_percentage": 23,
        "stock_quantity": 47,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 410,
        "primary_image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Braun"
            },
            {
                "spec_key": "Model",
                "spec_value": "Braun Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 821,
                "sku": "BRAU-082-BRA-STD",
                "color_name": "Standard Edition",
                "price": 22900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Braun Series 9 Pro Electric Shaver come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 83,
        "title": "FOREO LUNA 4 Smart Facial Cleansing Brush",
        "slug": "foreo-luna-4-smart-facial-cleansing-brush",
        "sku": "FORE-083-FOR",
        "brand": "FOREO",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "T-Sonic Pulsations, Ultra-Hygienic Silicone & Firming Massage.",
        "description": "Removes 99.5% of dirt, oil, and makeup residue in 1 minute.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 19900.0,
        "discount_price": 14900.0,
        "discount_percentage": 25,
        "stock_quantity": 48,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 290,
        "primary_image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "FOREO"
            },
            {
                "spec_key": "Model",
                "spec_value": "FOREO Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 831,
                "sku": "FORE-083-FOR-STD",
                "color_name": "Standard Edition",
                "price": 14900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does FOREO LUNA 4 Smart Facial Cleansing Brush come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 84,
        "title": "Oral-B iO Series 10 Electric Toothbrush",
        "slug": "oral-b-io-series-10-electric-toothbrush",
        "sku": "ORAL-084-ORA",
        "brand": "Oral-B",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "iSense Smart Charger, AI 3D Teeth Tracking & Micro-Vibrations.",
        "description": "Professional clean feeling every single day with real-time pressure guidance.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 29900.0,
        "discount_price": 23900.0,
        "discount_percentage": 20,
        "stock_quantity": 49,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 530,
        "primary_image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Oral-B"
            },
            {
                "spec_key": "Model",
                "spec_value": "Oral-B Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 841,
                "sku": "ORAL-084-ORA-STD",
                "color_name": "Standard Edition",
                "price": 23900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Oral-B iO Series 10 Electric Toothbrush come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 85,
        "title": "Philips Norelco Multigroom 9000 Trimmer",
        "slug": "philips-norelco-multigroom-9000-trimmer",
        "sku": "PHIL-085-PHI",
        "brand": "Philips",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "21 Quality Guards, DualCut Steel Blades & 6 Hour Lithium Battery.",
        "description": "All-in-one precision grooming kit for head, face, and body.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 9900.0,
        "discount_price": 6900.0,
        "discount_percentage": 30,
        "stock_quantity": 50,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 980,
        "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Philips"
            },
            {
                "spec_key": "Model",
                "spec_value": "Philips Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 851,
                "sku": "PHIL-085-PHI-STD",
                "color_name": "Standard Edition",
                "price": 6900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Philips Norelco Multigroom 9000 Trimmer come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 86,
        "title": "Theragun PRO Gen 5 Percussive Massage Gun",
        "slug": "theragun-pro-gen-5-percussive-massage-gun",
        "sku": "THER-086-THE",
        "brand": "Therabody",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "60lbs No-Stall Force, OLED Screen, Guided Routines & QuietForce.",
        "description": "Deep muscle treatment trusted by athletic trainers.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 44900.0,
        "discount_price": 36900.0,
        "discount_percentage": 17,
        "stock_quantity": 51,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 340,
        "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Therabody"
            },
            {
                "spec_key": "Model",
                "spec_value": "Theragun Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 861,
                "sku": "THER-086-THE-STD",
                "color_name": "Standard Edition",
                "price": 36900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Theragun PRO Gen 5 Percussive Massage Gun come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 87,
        "title": "Waterpik Aquarius Professional Water Flosser",
        "slug": "waterpik-aquarius-professional-water-flosser",
        "sku": "WATE-087-WAT",
        "brand": "Waterpik",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "10 Pressure Settings, 7 Water Flossing Tips & Hydro-Pulse Massage.",
        "description": "Removes up to 99.9% of plaque from treated areas.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 8990.0,
        "discount_price": 6490.0,
        "discount_percentage": 27,
        "stock_quantity": 52,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": False,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 1150,
        "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Waterpik"
            },
            {
                "spec_key": "Model",
                "spec_value": "Waterpik Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 871,
                "sku": "WATE-087-WAT-STD",
                "color_name": "Standard Edition",
                "price": 6490.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Waterpik Aquarius Professional Water Flosser come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 88,
        "title": "ghd Platinum+ Smart Styler Hair Straightener",
        "slug": "ghd-platinum+-smart-styler-hair-straightener",
        "sku": "GHD-088-GHD",
        "brand": "ghd",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Predictive Ultra-Zone Technology Monitors Heat 250x per Second.",
        "description": "Delivers 70% stronger hair and 2x more color protection.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 24900.0,
        "discount_price": 19900.0,
        "discount_percentage": 20,
        "stock_quantity": 53,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.8,
        "review_count": 260,
        "primary_image": "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "ghd"
            },
            {
                "spec_key": "Model",
                "spec_value": "ghd Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 881,
                "sku": "GHD-088-GHD-STD",
                "color_name": "Standard Edition",
                "price": 19900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does ghd Platinum+ Smart Styler Hair Straightener come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 89,
        "title": "BaBylissPRO Nano Titanium Hair Dryer",
        "slug": "babylisspro-nano-titanium-hair-dryer",
        "sku": "BABY-089-BAB",
        "brand": "BaByliss",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "2000 Watts Performance, Ionic Technology & Lightweight Ergonomics.",
        "description": "Salon quality blowouts in half the time.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 11900.0,
        "discount_price": 8900.0,
        "discount_percentage": 25,
        "stock_quantity": 54,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.7,
        "review_count": 390,
        "primary_image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "BaByliss"
            },
            {
                "spec_key": "Model",
                "spec_value": "BaBylissPRO Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 891,
                "sku": "BABY-089-BAB-STD",
                "color_name": "Standard Edition",
                "price": 8900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does BaBylissPRO Nano Titanium Hair Dryer come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 90,
        "title": "Dyson Supersonic Hair Dryer Ceramic Pink",
        "slug": "dyson-supersonic-hair-dryer-ceramic-pink",
        "sku": "DYSO-090-DYS",
        "brand": "Dyson",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Intelligent Heat Control, V9 Digital Motor & Flyaway Attachment.",
        "description": "Fast drying with no extreme heat damage.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 38900.0,
        "discount_price": 33900.0,
        "discount_percentage": 12,
        "stock_quantity": 55,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 780,
        "primary_image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Dyson"
            },
            {
                "spec_key": "Model",
                "spec_value": "Dyson Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 901,
                "sku": "DYSO-090-DYS-STD",
                "color_name": "Standard Edition",
                "price": 33900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Dyson Supersonic Hair Dryer Ceramic Pink come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 91,
        "title": "NuFACE Trinity+ Advanced Facial Toning Device",
        "slug": "nuface-trinity+-advanced-facial-toning-device",
        "sku": "NUFA-091-NUF",
        "brand": "NuFACE",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Microcurrent Skincare Tech for Contour & Wrinkle Reduction.",
        "description": "At-home microcurrent facial lifting treatment.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 32900.0,
        "discount_price": 26900.0,
        "discount_percentage": 18,
        "stock_quantity": 56,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.6,
        "review_count": 180,
        "primary_image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "NuFACE"
            },
            {
                "spec_key": "Model",
                "spec_value": "NuFACE Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 911,
                "sku": "NUFA-091-NUF-STD",
                "color_name": "Standard Edition",
                "price": 26900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does NuFACE Trinity+ Advanced Facial Toning Device come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 92,
        "title": "Sharper Image Deep Tissue Shiatsu Foot Massager",
        "slug": "sharper-image-deep-tissue-shiatsu-foot-massager",
        "sku": "SHAR-092-SHA",
        "brand": "Sharper Image",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Infrared Heat Therapy, Air Compression & Rotating Nodes.",
        "description": "Relieves plantar fasciitis and daily arch fatigue.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 14900.0,
        "discount_price": 10900.0,
        "discount_percentage": 26,
        "stock_quantity": 57,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 310,
        "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Sharper Image"
            },
            {
                "spec_key": "Model",
                "spec_value": "Sharper Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 921,
                "sku": "SHAR-092-SHA-STD",
                "color_name": "Standard Edition",
                "price": 10900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Sharper Image Deep Tissue Shiatsu Foot Massager come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 93,
        "title": "La Mer Cr\u00e8me de la Mer Moisturizer 60ml",
        "slug": "la-mer-cr\u00e8me-de-la-mer-moisturizer-60ml",
        "sku": "LAME-093-LA ",
        "brand": "La Mer",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Miracle Broth Cell-Renewing Elixir Cream.",
        "description": "Ultra-rich luxury moisturizing cream.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 34900.0,
        "discount_price": 29900.0,
        "discount_percentage": 14,
        "stock_quantity": 58,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 220,
        "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "La Mer"
            },
            {
                "spec_key": "Model",
                "spec_value": "La Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 931,
                "sku": "LAME-093-LA -STD",
                "color_name": "Standard Edition",
                "price": 29900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does La Mer Cr\u00e8me de la Mer Moisturizer 60ml come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 94,
        "title": "Est\u00e9e Lauder Advanced Night Repair Serum",
        "slug": "est\u00e9e-lauder-advanced-night-repair-serum",
        "sku": "EST\u00c9-094-EST",
        "brand": "Est\u00e9e Lauder",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Chronolux Power Signal Technology for Multi-Recovery.",
        "description": "Deep nighttime hydration serum fighting signs of aging.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 11900.0,
        "discount_price": 8900.0,
        "discount_percentage": 25,
        "stock_quantity": 59,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 1450,
        "primary_image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Est\u00e9e Lauder"
            },
            {
                "spec_key": "Model",
                "spec_value": "Est\u00e9e Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 941,
                "sku": "EST\u00c9-094-EST-STD",
                "color_name": "Standard Edition",
                "price": 8900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Est\u00e9e Lauder Advanced Night Repair Serum come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 95,
        "title": "Tom Ford Oud Wood Eau De Parfum 100ml",
        "slug": "tom-ford-oud-wood-eau-de-parfum-100ml",
        "sku": "TOMF-095-TOM",
        "brand": "Tom Ford",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Rare Oud, Rosewood, Cardamom, Sandalwood & Amber.",
        "description": "Iconic warm woody oriental fragrance for connoisseurs.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 28900.0,
        "discount_price": 23900.0,
        "discount_percentage": 17,
        "stock_quantity": 60,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 590,
        "primary_image": "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1559591937-e58af10078d4?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Tom Ford"
            },
            {
                "spec_key": "Model",
                "spec_value": "Tom Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 951,
                "sku": "TOMF-095-TOM-STD",
                "color_name": "Standard Edition",
                "price": 23900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Tom Ford Oud Wood Eau De Parfum 100ml come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 96,
        "title": "Chanel Bleu De Chanel Parfum 100ml",
        "slug": "chanel-bleu-de-chanel-parfum-100ml",
        "sku": "CHAN-096-CHA",
        "brand": "Chanel",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Captivating Aromatic Woody Fragrance with New Caledonian Sandalwood.",
        "description": "Pure intense luxury fragrance embodying independence.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 16900.0,
        "discount_price": 13900.0,
        "discount_percentage": 17,
        "stock_quantity": 61,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": False,
        "rating": 4.9,
        "review_count": 1600,
        "primary_image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Chanel"
            },
            {
                "spec_key": "Model",
                "spec_value": "Chanel Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 961,
                "sku": "CHAN-096-CHA-STD",
                "color_name": "Standard Edition",
                "price": 13900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Chanel Bleu De Chanel Parfum 100ml come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 97,
        "title": "Maison Francis Kurkdjian Baccarat Rouge 540",
        "slug": "maison-francis-kurkdjian-baccarat-rouge-540",
        "sku": "MFK-097-MAI",
        "brand": "MFK",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Jasmine, Saffron, Cedarwood & Ambergris Mineral Notes.",
        "description": "Luminous condensed fragrance signature with unique sillage.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 38900.0,
        "discount_price": 32900.0,
        "discount_percentage": 15,
        "stock_quantity": 62,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 430,
        "primary_image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "MFK"
            },
            {
                "spec_key": "Model",
                "spec_value": "Maison Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 971,
                "sku": "MFK-097-MAI-STD",
                "color_name": "Standard Edition",
                "price": 32900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Maison Francis Kurkdjian Baccarat Rouge 540 come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 98,
        "title": "Withings Body Scan Smart Composition Scale",
        "slug": "withings-body-scan-smart-composition-scale",
        "sku": "WITH-098-WIT",
        "brand": "Withings",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "6-Lead ECG, Segmental Body Composition & Nerve Health.",
        "description": "Clinical-grade health station for home metabolic tracking.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 34900.0,
        "discount_price": 28900.0,
        "discount_percentage": 17,
        "stock_quantity": 63,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": False,
        "is_flash_sale": False,
        "rating": 4.8,
        "review_count": 120,
        "primary_image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Withings"
            },
            {
                "spec_key": "Model",
                "spec_value": "Withings Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 981,
                "sku": "WITH-098-WIT-STD",
                "color_name": "Standard Edition",
                "price": 28900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Withings Body Scan Smart Composition Scale come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 99,
        "title": "Hyperice Normatec 3 Legs Compression System",
        "slug": "hyperice-normatec-3-legs-compression-system",
        "sku": "HYPE-099-HYP",
        "brand": "Hyperice",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "Dynamic Air Compression Massage for Fast Athletic Recovery.",
        "description": "Flushes out soreness and speeds up post-workout muscle restoration.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 79900.0,
        "discount_price": 64900.0,
        "discount_percentage": 18,
        "stock_quantity": 64,
        "is_in_stock": True,
        "is_featured": True,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.9,
        "review_count": 210,
        "primary_image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "Hyperice"
            },
            {
                "spec_key": "Model",
                "spec_value": "Hyperice Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 991,
                "sku": "HYPE-099-HYP-STD",
                "color_name": "Standard Edition",
                "price": 64900.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does Hyperice Normatec 3 Legs Compression System come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    },
    {
        "id": 100,
        "title": "AuraGlow Professional Teeth Whitening Kit",
        "slug": "auraglow-professional-teeth-whitening-kit",
        "sku": "AURA-100-AUR",
        "brand": "AuraGlow",
        "category_id": 6,
        "seller_id": 2,
        "short_description": "35% Carbamide Peroxide Gel with 5x Blue LED Accelerator Light.",
        "description": "Removes years of stains from coffee, wine, and tea in 30 minutes.",
        "highlights": [
            "Official Brand Warranty Included",
            "Express 2-Day Delivery across Metro Cities",
            "7-Day Instant Easy Returns / Replacements",
            "100% Genuine Certified Authentic Product"
        ],
        "base_price": 6990.0,
        "discount_price": 4990.0,
        "discount_percentage": 28,
        "stock_quantity": 65,
        "is_in_stock": True,
        "is_featured": False,
        "is_trending": True,
        "is_flash_sale": True,
        "rating": 4.7,
        "review_count": 890,
        "primary_image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
        "gallery_images": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "images_360": [
            "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"
        ],
        "warranty_info": "1 Year Brand Warranty",
        "return_policy": "7 Days Return Policy",
        "estimated_delivery_days": 2,
        "specs": [
            {
                "spec_key": "Brand",
                "spec_value": "AuraGlow"
            },
            {
                "spec_key": "Model",
                "spec_value": "AuraGlow Premium Edition"
            },
            {
                "spec_key": "Warranty",
                "spec_value": "1 Year Official Warranty"
            }
        ],
        "variants": [
            {
                "id": 1001,
                "sku": "AURA-100-AUR-STD",
                "color_name": "Standard Edition",
                "price": 4990.0,
                "stock_quantity": 25
            }
        ],
        "faqs": [
            {
                "id": 1,
                "question": "Does AuraGlow Professional Teeth Whitening Kit come with warranty?",
                "answer": "Yes! All products sold on Cartify come with 100% official brand warranty."
            }
        ]
    }
]


async def seed_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as db:
        prod_count_res = await db.execute(select(Product))
        existing_prods = prod_count_res.scalars().all()
        if len(existing_prods) >= 100:
            print("Database already contains 100+ products!")
            return

        print("Seeding Cartify Database with 100 enterprise products & categories...")

        res_admin = await db.execute(select(User).where(User.email == "admin@cartify.com"))
        admin_user = res_admin.scalars().first()

        if not admin_user:
            admin_user = User(
                email="admin@cartify.com",
                hashed_password=get_password_hash("Admin123!"),
                full_name="Enterprise Admin",
                phone="+91-1800-CARTIFY",
                role=UserRole.SUPER_ADMIN,
                is_active=True,
                is_verified=True,
                wallet_balance=100000.0,
                reward_coins=5000
            )
            seller_user = User(
                email="seller@techhub.com",
                hashed_password=get_password_hash("Seller123!"),
                full_name="TechHub Flagship Store",
                phone="+91-888-TECHHUB",
                role=UserRole.SELLER,
                is_active=True,
                is_verified=True,
                wallet_balance=50000.0,
                reward_coins=2000
            )
            customer_user = User(
                email="alex.johnson@example.com",
                hashed_password=get_password_hash("Customer123!"),
                full_name="Alex Johnson",
                phone="+91-98765-43210",
                role=UserRole.CUSTOMER,
                is_active=True,
                is_verified=True,
                wallet_balance=10000.0,
                reward_coins=750
            )
            db.add_all([admin_user, seller_user, customer_user])
            await db.flush()

            customer_address = Address(
                user_id=customer_user.id,
                full_name="Alex Johnson",
                phone="+91-98765-43210",
                street_address="742 Evergreen Terrace",
                city="Mumbai",
                state="Maharashtra",
                postal_code="400001",
                country="India",
                address_type="Home",
                is_default=True
            )
            db.add(customer_address)
        else:
            res_seller = await db.execute(select(User).where(User.email == "seller@techhub.com"))
            seller_user = res_seller.scalars().first()
            res_cust = await db.execute(select(User).where(User.email == "alex.johnson@example.com"))
            customer_user = res_cust.scalars().first()

        for cat in CATEGORIES_DATA:
            res_cat = await db.execute(select(Category).where(Category.id == cat["id"]))
            if not res_cat.scalars().first():
                db.add(Category(
                    id=cat["id"],
                    name=cat["name"],
                    slug=cat["slug"],
                    description=cat.get("description"),
                    image_url=cat.get("image_url"),
                    icon_name=cat.get("icon_name"),
                    display_order=cat["id"]
                ))
        await db.flush()

        for pdata in PRODUCTS_DATA:
            pid = pdata["id"]
            res_p = await db.execute(select(Product).where(Product.id == pid))
            if res_p.scalars().first():
                continue

            specs_list = pdata.get("specs", [])
            variants_list = pdata.get("variants", [])
            faqs_list = pdata.get("faqs", [])

            product = Product(
                id=pid,
                title=pdata["title"],
                slug=pdata["slug"],
                sku=pdata["sku"],
                brand=pdata["brand"],
                category_id=pdata["category_id"],
                seller_id=seller_user.id,
                short_description=pdata["short_description"],
                description=pdata["description"],
                highlights=pdata.get("highlights", []),
                base_price=pdata["base_price"],
                discount_price=pdata.get("discount_price"),
                discount_percentage=pdata.get("discount_percentage", 0),
                stock_quantity=pdata.get("stock_quantity", 50),
                is_in_stock=True,
                is_featured=pdata.get("is_featured", False),
                is_trending=pdata.get("is_trending", False),
                is_flash_sale=pdata.get("is_flash_sale", False),
                rating=pdata.get("rating", 4.7),
                review_count=pdata.get("review_count", 100),
                primary_image=pdata["primary_image"],
                gallery_images=pdata.get("gallery_images", []),
                images_360=pdata.get("images_360", []),
                warranty_info=pdata.get("warranty_info", "1 Year Warranty"),
                return_policy=pdata.get("return_policy", "7 Days Return"),
                estimated_delivery_days=pdata.get("estimated_delivery_days", 2)
            )
            db.add(product)
            await db.flush()

            for spec in specs_list:
                db.add(ProductSpec(product_id=product.id, spec_key=spec["spec_key"], spec_value=spec["spec_value"]))

            for var in variants_list:
                db.add(ProductVariant(
                    product_id=product.id,
                    sku=var["sku"],
                    color_name=var.get("color_name"),
                    color_hex=var.get("color_hex"),
                    storage=var.get("storage"),
                    price=var["price"],
                    stock_quantity=var.get("stock_quantity", 25)
                ))

            for faq in faqs_list:
                db.add(ProductFAQ(
                    product_id=product.id,
                    question=faq["question"],
                    answer=faq["answer"]
                ))

            db.add(Review(
                product_id=product.id,
                user_id=customer_user.id,
                rating=int(pdata.get("rating", 5)),
                title="Verified Purchase Review",
                comment=f"Purchased {product.title} from Cartify. Excellent build quality, prompt delivery!",
                is_verified_buyer=True,
                helpful_likes=15
            ))

        res_coupon = await db.execute(select(Coupon).where(Coupon.code == "WELCOME15"))
        if not res_coupon.scalars().first():
            coupons = [
                Coupon(
                    code="WELCOME15",
                    description="15% OFF your first order over ₹500",
                    coupon_type=CouponType.PERCENTAGE,
                    discount_value=15.0,
                    max_discount_amount=5000.0,
                    min_order_amount=500.0,
                    is_active=True,
                    auto_apply=True
                ),
                Coupon(
                    code="FREESHIP",
                    description="Free Express Shipping on orders over ₹999",
                    coupon_type=CouponType.FREE_SHIPPING,
                    discount_value=150.0,
                    min_order_amount=999.0,
                    is_active=True
                ),
                Coupon(
                    code="FLASHSALE50",
                    description="Extra 50% OFF Flash Sale Deals!",
                    coupon_type=CouponType.PERCENTAGE,
                    discount_value=50.0,
                    max_discount_amount=10000.0,
                    min_order_amount=1000.0,
                    is_active=True
                )
            ]
            db.add_all(coupons)

        await db.commit()
        print("Database successfully seeded with 100 enterprise products!")


if __name__ == "__main__":
    asyncio.run(seed_database())
