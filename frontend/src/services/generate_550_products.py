import json

categories = [
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

# Dedicated, distinct photo IDs per category (STRICTLY NO HEADPHONES outside category 2)
cat_images = {
  1: [ # Electronics & Mobiles
    "1517336714731-489689fd1ca8", "1511707171634-5f897ff02aa9", "1523275335684-37898b6baf30", "1544244015-0df4b3ffc6b0",
    "1516035069371-29a1b244cc32", "1588872657578-7efd1f1555ed", "1592899677977-9c10ca588bbd", "1609592424009-5996dd9edbad",
    "1587829741301-dc798b83add3", "1526170375885-4d8ecf77b99f", "1598327105666-5b89351aff97", "1496181133206-80ce9b88a853",
    "1512941937669-90a1b58e7e9c", "1546868871-7041f2a55e12", "1580910051074-3eb694886505", "1585060544812-6b45742d762f",
    "1510557880182-3d4d3cba35a5", "1616353071588-708dcff912a2", "1541807084-5c52b6b3adef", "1593642632823-8f785ba67e45"
  ],
  2: [ # Audio & Sound (Headphones ONLY here)
    "1505740420928-5e560c06d30e", "1546435770-a3e426bf472b", "1484704849700-f032a568e944", "1590658268037-6bf12165a8df",
    "1572536147248-ac59a8abfa4e", "1524678606370-a47ad25cb82a", "1558089687-f282ff1b2682", "1508700115892-45ecd05ae2ad",
    "1545454675-3531b543be5d", "1511671782779-c97d3d27a1d4", "1514525253161-7a46d19cd819", "1519671482749-fd09be7ccebf",
    "1598300042247-d088f8ab3a91", "1516981879613-9f5da904015f", "1520170350707-b2da59c70f03", "1563245372-f21724e3856d"
  ],
  3: [ # Fashion & Apparel
    "1542291026-7eec264c27ff", "1608231387042-66d1773070a5", "1445205170230-053b83016050", "1490481651871-ab68de25d43d",
    "1483985988355-763728e1935b", "1515886657613-9f3515b0c78f", "1539109136881-3be0616acf4b", "1529374255404-311a2a4f1fd9",
    "1551028719-00167b16eac5", "1521572267360-ee0c2909d518", "1560343090-f0409e92791a", "1576995853123-5a10305d93c0",
    "1525966222134-fcfa99b8ae77", "1591047139829-d91aecb6caea", "1509631179647-0177331693ae", "1516762689617-e1cffcef479d"
  ],
  4: [ # Home & Smart Living
    "1558317374-067fb5f30001", "1584992236310-6edddc08acff", "1513694203232-719a280e022f", "1583847268964-b28dc8f51f92",
    "1507652313519-d4e9174996dd", "1585515320310-259814833e62", "1540555700478-4be289fbecef", "1512917774080-9991f1c4c750",
    "1616486338812-3dadae4b4ace", "1586023492125-27b2c045efd7", "1522758971460-1d21eed7dc1d", "1581578731548-c64695cc6952"
  ],
  5: [ # Gaming & Esports
    "1606813907291-d86efa9b94db", "1603302576837-37561b2e2302", "1538481199705-c710c4e965fc", "1542751371-adc38448a05e",
    "1612287230202-1ff1d85d1bdf", "1550745165-9bc0b252726f", "1593305841991-05c297ba4575", "1618005182384-a83a8bd57fbe",
    "1580234811497-9df7fd2f357e", "1629429408209-1f912961dbd8", "1526509867975-d1425e791b8a", "1511512578047-dfb367046420"
  ],
  6: [ # Beauty & Personal Care
    "1522337360788-8b13dee7a37e", "1621607512214-68297480165e", "1596462502278-27bfdc403348", "1571781926291-c477ebfd024b",
    "1527799820374-dcf8d9d4a388", "1608248597261-81320510a18f", "1556228720-195a672e8a03", "1616683693504-3ea7e9ad6fec",
    "1512290900673-7002b5217615", "1526947425960-945c6e72858f"
  ],
  7: [ # Sports & Fitness
    "1517838277536-f5f99be501cd", "1584735935682-2f2b69dff9d2", "1571019613454-1cb2f99b2d8b", "1518611012118-696072aa579a",
    "1576678927484-cc907957088c", "1517637318644-1464a0505b27", "1538805060514-97d9cc17730c", "1534438327276-14e5300c3a48"
  ],
  8: [ # Toys & Games (LEGO, Drones, Board games, RC cars, Plushies ONLY)
    "1566576912321-d58ddd7a6088", "1527977966376-1c8408f9f108", "1607604276583-eef5d076aa5f", "1587654562363-607474573eef",
    "1596461404969-9ae70f2830c1", "1515488042361-ee00e0ddd4e4", "1560169897-fc0978021348", "1558060370-d644479be6f7",
    "1513542789411-b6a5d4f31634", "1585366119957-e9730b6d0f60", "1596461404969-9ae70f2830c1", "1515488042361-ee00e0ddd4e4"
  ],
  9: [ # Automotive & Accessories (Cars, dash cams, tire inflators)
    "1511919884226-fd3cad34687c", "1619642751034-765dfdf7c58e", "1503376780353-7e6692767b70", "1542282088-72c9c27ed0cd",
    "1552519507-da3b142c6e3d", "1580273916550-e323be2ae537", "1514316454349-750a7fd3da3a", "1541348263662-e08266f92976"
  ],
  10: [ # Books & Stationery (Books, journals, pens, e-readers)
    "1544716278-ca5e3f4abd8c", "1586075010923-2dd4570fb338", "1512820790803-83ca734da794", "1524995997946-a1c2e315a42f",
    "1497633762265-9d179a990aa6", "1543002588-bfa74002ed7e", "1516979187457-637abb4f9353", "1495446815901-a7297e633e8d"
  ],
  11: [ # Groceries & Gourmet (Coffee, tea, chocolate, food)
    "1542838132-92c53300491e", "1549007994-cb92caebd54b", "1511537190424-bb543f309565", "1509440159596-0249088772ff",
    "1571771894821-ce9b6c11b08e", "1550547660-d9450f859349", "1506368249639-73a05d6f6488", "1540420773420-3366772f4999"
  ]
}

cat_templates = {
  1: ("Electronics & Mobiles", ["Smartphone", "Pro Laptop", "Smartwatch GPS", "Tablet OLED", "4K Action Cam", "Wireless Power Bank", "Monitors 144Hz", "Bluetooth Earbuds"]),
  2: ("Audio & Sound", ["ANC Noise Cancelling Headphones", "Studio Monitor Speakers", "TWS Earbuds Pro", "Soundbar Surround", "Vlog Microphone", "Portable Speaker"]),
  3: ("Fashion & Apparel", ["Retro Sneakers", "Slim Fit Denim Jeans", "Leather Biker Jacket", "Cotton Oversized Hoodie", "Classic Chronograph Watch", "Polarized Sunglasses"]),
  4: ("Home & Smart Living", ["Robot Vacuum Cleaner", "Smart Air Purifier", "Digital Air Fryer", "Espresso Machine", "RGB Smart Light Strip", "Pressure Cooker"]),
  5: ("Gaming & Esports", ["Ultra Gaming Console", "Esports Mechanical Keyboard", "Lightweight Wireless Mouse", "Gaming Chair Ergonomic", "RGB Headset", "4K Gaming Monitor"]),
  6: ("Beauty & Personal Care", ["Hair Multi-Styler", "Electric Shaver Pro", "Sonic Toothbrush", "Hyaluronic Hydrating Serum", "Night Repair Cream", "Beard Trimmer Kit"]),
  7: ("Sports & Fitness", ["Motorized Treadmill", "Adjustable Dumbbell Set", "GPS Runner Watch", "Non-Slip Yoga Mat", "Deep Tissue Massage Gun", "Workout Resistance Bands"]),
  8: ("Toys & Games", ["Technic Formula 1 Race Car", "4K Camera Mini Drone", "Classic Board Game Edition", "Remote Control Supercar", "STEM Robot Building Kit", "Speed Cube"]),
  9: ("Automotive & Accessories", ["Ultra 4K Dash Cam", "Portable Car Tire Inflator", "Cordless Car Vacuum", "Android Touchscreen Car Stereo", "Complete Car Wash Polish Kit"]),
  10: ("Books & Stationery", ["Paperwhite E-Reader", "Executive Fountain Pen", "Smart Reusable Notebook", "Hardcover Leather Journal", "Desk Organizer Set"]),
  11: ("Groceries & Gourmet", ["Gourmet Whole Bean Coffee", "Artisanal Loose Leaf Tea", "Assorted Chocolate Gift Box", "Cold Pressed Extra Virgin Olive Oil", "Raw Organic Manuka Honey"])
}

brands_by_cat = {
  1: ["Aether", "Quantum Tech", "ChronoPulse", "ApexTech", "VisionCam", "Asus", "Samsung", "Anker", "Logitech", "Google"],
  2: ["SonicPulse", "boAt", "Bose", "Sony", "JBL", "Sennheiser", "Marshall", "Audio-Technica", "Shure"],
  3: ["Nike", "Puma", "Levi's", "Adidas", "Ray-Ban", "Zara", "H&M", "Tommy Hilfiger", "Calvin Klein"],
  4: ["Dyson", "Instant Brands", "Philips", "Xiaomi", "Roborock", "Nespresso", "iRobot", "DeLonghi"],
  5: ["Sony", "Asus", "Logitech", "Razer", "Microsoft", "Nintendo", "SteelSeries", "Corsair", "Secretlab"],
  6: ["Dyson", "Philips", "L'Oréal", "Braun", "Oral-B", "Estée Lauder", "Clinique", "Forest Essentials"],
  7: ["PowerMax", "Flexbell", "Garmin", "Manduka", "Under Armour", "Bowflex", "Theragun", "Decathlon"],
  8: ["LEGO", "DJI", "Hot Wheels", "Hasbro", "Barbie", "Nerf", "Playmobil", "Rubik's"],
  9: ["70mai", "Baseus", "Dyson", "ArmorAll", "Blaupunkt", "Pioneer", "Meguiar's", "Bosch"],
  10: ["Amazon", "Rocketbook", "Lamy", "Moleskine", "Parker", "Pilot", "Leuchtturm1917"],
  11: ["GourmetBeans", "Ferrero", "Blue Mountain", "Fortnum & Mason", "Lindt", "Twinings", "Godiva"]
}

products = []
prod_id = 100

for cat_id in range(1, 12):
  cat_name, templates = cat_templates[cat_id]
  brands = brands_by_cat[cat_id]
  img_pool = cat_images[cat_id]

  for i in range(50):
    prod_id += 1
    brand = brands[i % len(brands)]
    template = templates[i % len(templates)]
    model_num = (i * 7 + 13) % 99 + 1
    
    title = f"{brand} {template} Series-{model_num}"
    slug = f"{brand.lower().replace(' ', '-')}-{template.lower().replace(' ', '-')}-{model_num}-{prod_id}"
    
    base_price = float((i * 1250 + 2990) if cat_id in [1, 4, 5, 7] else (i * 350 + 990))
    discount_pct = 10 + (i % 25)
    disc_price = round(base_price * (100 - discount_pct) / 100.0, 2)
    
    # Select category-specific image photo ID
    photo_id = img_pool[i % len(img_pool)]
    img_url = f"https://images.unsplash.com/photo-{photo_id}?w=800&auto=format&fit=crop&q=80"
    
    rating = round(4.2 + (i % 8) * 0.1, 1)
    if rating > 5.0: rating = 4.9
    
    is_flash = (i % 4 == 0)
    is_trending = (i % 3 == 0)
    is_featured = (i % 5 == 0)

    prod = {
      "id": prod_id,
      "title": title,
      "slug": slug,
      "sku": f"{brand[:4].upper()}-{prod_id}",
      "brand": brand,
      "category_id": cat_id,
      "seller_id": 2,
      "short_description": f"Premium quality {title} featuring advanced engineering, durable build, and top performance.",
      "description": f"Experience unmatched satisfaction with the {title}. Crafted with high grade materials for longevity and peak user experience.",
      "highlights": [
        "100% Genuine Certified Product",
        "Express 2-Day Delivery across India",
        "7 Days Replacement / Return Guarantee",
        "Official Brand Warranty Included"
      ],
      "base_price": base_price,
      "discount_price": disc_price,
      "discount_percentage": discount_pct,
      "stock_quantity": 25 + (i % 30),
      "is_in_stock": True,
      "is_featured": is_featured,
      "is_trending": is_trending,
      "is_flash_sale": is_flash,
      "rating": rating,
      "review_count": 45 + i * 11,
      "primary_image": img_url,
      "gallery_images": [img_url],
      "images_360": [img_url] if i % 2 == 0 else [],
      "warranty_info": "1 Year Official Warranty",
      "return_policy": "7 Days Return Policy",
      "estimated_delivery_days": 2,
      "specs": [{"spec_key": "Model", "spec_value": f"Edition {model_num}"}],
      "variants": [],
      "faqs": []
    }
    products.append(prod)

output_code = f"""// Auto-generated 550 Products Dataset (50 products x 11 categories)
import {{ Product, Category }} from '../types';

export const MOCK_CATEGORIES: Category[] = {json.dumps(categories, indent=2)};

export const MOCK_PRODUCTS: Product[] = {json.dumps(products, indent=2)};
"""

with open('c:/Users/pawar/Desktop/Cartify/frontend/src/services/mockProducts.ts', 'w', encoding='utf-8') as f:
  f.write(output_code)

print(f"Successfully generated {len(products)} products across 11 categories with strict category-only images!")
