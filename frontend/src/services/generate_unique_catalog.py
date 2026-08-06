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

# Unique real products definitions per category
products_raw = [
  # --- CATEGORY 1: Electronics & Mobiles ---
  {"cat": 1, "brand": "Apple", "title": "Apple MacBook Pro 16 M3 Max 36GB", "price": 249900, "disc": 229900, "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Samsung", "title": "Samsung Galaxy S24 Ultra 5G 512GB", "price": 139900, "disc": 124900, "img": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Apple", "title": "Apple Watch Ultra 2 GPS Titanium", "price": 89900, "disc": 79900, "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Apple", "title": "Apple iPad Pro 12.9 M2 Tandem OLED", "price": 112900, "disc": 99900, "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Sony", "title": "Sony Alpha A7 IV Full-Frame Mirrorless Camera", "price": 224900, "disc": 199900, "img": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Asus", "title": "Asus ZenBook 14 OLED Ultra Slim Laptop", "price": 99900, "disc": 84900, "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Samsung", "title": "Samsung Galaxy Z Fold 5 5G Phantom Black", "price": 164900, "disc": 139900, "img": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Anker", "title": "Anker 737 Power Bank 24000mAh 140W", "price": 14900, "disc": 9900, "img": "https://images.unsplash.com/photo-1609592424009-5996dd9edbad?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Logitech", "title": "Logitech MX Master 3S Wireless Mouse", "price": 10995, "disc": 8995, "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Fujifilm", "title": "Fujifilm Instax Mini Link 2 Pocket Printer", "price": 10999, "disc": 8499, "img": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80"},
  {"cat": 1, "brand": "Google", "title": "Google Pixel 8 Pro 256GB Bay Blue", "price": 106900, "disc": 89900, "img": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 2: Audio & Sound ---
  {"cat": 2, "brand": "Sony", "title": "Sony WH-1000XM5 Wireless ANC Headphones", "price": 34990, "disc": 29990, "img": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "boAt", "title": "boAt Rockerz 550 Over Ear Headphones", "price": 4999, "disc": 2499, "img": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "Bose", "title": "Bose QuietComfort 45 Noise Cancelling Headphones", "price": 29900, "disc": 24900, "img": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "JBL", "title": "JBL Flip 6 Portable Waterproof Bluetooth Speaker", "price": 13999, "disc": 9999, "img": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "Sennheiser", "title": "Sennheiser Momentum 4 Wireless Studio Headphones", "price": 34990, "disc": 27990, "img": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "Marshall", "title": "Marshall Emberton II Portable Bluetooth Speaker", "price": 17999, "disc": 14999, "img": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "Apple", "title": "Apple AirPods Pro 2nd Gen USB-C", "price": 24900, "disc": 21900, "img": "https://images.unsplash.com/photo-1558089687-f282ff1b2682?w=800&auto=format&fit=crop&q=80"},
  {"cat": 2, "brand": "Audio-Technica", "title": "Audio-Technica ATH-M50x Professional Monitor Headphones", "price": 17500, "disc": 13990, "img": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 3: Fashion & Apparel ---
  {"cat": 3, "brand": "Nike", "title": "Nike Air Max Excee Mens Running Sneakers", "price": 7995, "disc": 4795, "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Puma", "title": "Puma Future Rider Play Streetwear Sneakers", "price": 5999, "disc": 3499, "img": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Zara", "title": "Zara Wool Blend Double Breasted Overcoat", "price": 12990, "disc": 9990, "img": "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Levi's", "title": "Levi's 501 Original Fit Men's Denim Jeans", "price": 4999, "disc": 3499, "img": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Adidas", "title": "Adidas Ultraboost Light Running Shoes", "price": 18999, "disc": 14999, "img": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Ray-Ban", "title": "Ray-Ban Classic Aviator Polarized Sunglasses", "price": 10990, "disc": 8490, "img": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Tommy Hilfiger", "title": "Tommy Hilfiger Classic Cotton Polo Shirt", "price": 4999, "disc": 3299, "img": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 3, "brand": "Calvin Klein", "title": "Calvin Klein Men's Classic Leather Biker Jacket", "price": 24999, "disc": 18999, "img": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 4: Home & Smart Living ---
  {"cat": 4, "brand": "Dyson", "title": "Dyson V15 Detect Cordless Vacuum Cleaner", "price": 69900, "disc": 62900, "img": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80"},
  {"cat": 4, "brand": "Instant Brands", "title": "Instant Pot Duo 7-in-1 Smart Electric Pressure Cooker", "price": 13990, "disc": 9990, "img": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80"},
  {"cat": 4, "brand": "Philips", "title": "Philips Hue RGB Smart Lighting Starter Kit", "price": 14999, "disc": 11999, "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"},
  {"cat": 4, "brand": "Xiaomi", "title": "Xiaomi Smart Air Purifier 4 Pro HEPA Filter", "price": 19999, "disc": 14999, "img": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80"},
  {"cat": 4, "brand": "Nespresso", "title": "Nespresso Vertuo Next Espresso Coffee Machine", "price": 22990, "disc": 16990, "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80"},
  {"cat": 4, "brand": "Roborock", "title": "Roborock S8 Pro Ultra Robot Vacuum Cleaner", "price": 119900, "disc": 99900, "img": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 5: Gaming & Esports ---
  {"cat": 5, "brand": "Sony", "title": "Sony PlayStation 5 Slim 1TB Gaming Console", "price": 54990, "disc": 49990, "img": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80"},
  {"cat": 5, "brand": "Asus", "title": "Asus TUF Gaming F15 Intel i7 RTX 4060 Laptop", "price": 89990, "disc": 75990, "img": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80"},
  {"cat": 5, "brand": "Razer", "title": "Razer BlackWidow V4 Mechanical Gaming Keyboard", "price": 19999, "disc": 15999, "img": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80"},
  {"cat": 5, "brand": "Microsoft", "title": "Xbox Wireless Controller Cyberpunk Special Edition", "price": 6990, "disc": 5490, "img": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80"},
  {"cat": 5, "brand": "Nintendo", "title": "Nintendo Switch OLED Model Mario Red Edition", "price": 34990, "disc": 29990, "img": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"},
  {"cat": 5, "brand": "Meta", "title": "Meta Quest 3 128GB Advanced All-in-One VR Headset", "price": 54999, "disc": 47999, "img": "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 6: Beauty & Personal Care ---
  {"cat": 6, "brand": "Dyson", "title": "Dyson Airwrap Multi-Styler Complete Long Nickel/Copper", "price": 52900, "disc": 48900, "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 6, "brand": "Philips", "title": "Philips Norelco Series 9000 Wet & Dry Shaver", "price": 21999, "disc": 17999, "img": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 6, "brand": "Estée Lauder", "title": "Estée Lauder Advanced Night Repair Synchronized Multi-Recovery Serum", "price": 8900, "disc": 7490, "img": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80"},
  {"cat": 6, "brand": "L'Oréal", "title": "L'Oréal Paris Revitalift 1.5% Pure Hyaluronic Acid Serum", "price": 1299, "disc": 999, "img": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 6, "brand": "Braun", "title": "Braun Series 9 Pro Electric Shaver with PowerCase", "price": 32999, "disc": 27999, "img": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 7: Sports & Fitness ---
  {"cat": 7, "brand": "PowerMax", "title": "PowerMax Fitness TDM-97 Motorized Treadmill", "price": 38990, "disc": 28990, "img": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"},
  {"cat": 7, "brand": "Flexbell", "title": "Flexbell 32kg Twist Adjustable Dumbbell Pair", "price": 32999, "disc": 24999, "img": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80"},
  {"cat": 7, "brand": "Garmin", "title": "Garmin Forerunner 965 AMOLED Premium GPS Running Watch", "price": 67490, "disc": 59990, "img": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 7, "brand": "Manduka", "title": "Manduka PRO 6mm Non-Slip Premium Yoga Mat", "price": 9990, "disc": 7990, "img": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80"},
  {"cat": 7, "brand": "Theragun", "title": "Theragun PRO Bluetooth Percussive Deep Tissue Therapy Massage Gun", "price": 54990, "disc": 44990, "img": "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 8: Toys & Games ---
  {"cat": 8, "brand": "LEGO", "title": "LEGO Technic Ferrari Daytona SP3 Building Set", "price": 39999, "disc": 34999, "img": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "DJI", "title": "DJI Neo Mini 4K Palm Takeoff Camera Drone", "price": 28990, "disc": 24990, "img": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Bandai", "title": "Bandai Anime Collectible Action Figure Statue", "price": 4999, "disc": 3499, "img": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "LEGO", "title": "LEGO Architecture Taj Mahal Landmark Building Kit", "price": 14999, "disc": 11999, "img": "https://images.unsplash.com/photo-1587654562363-607474573eef?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Hape", "title": "Hape Wooden Railway Train Set & Track Accessories", "price": 6999, "disc": 4999, "img": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Steiff", "title": "Steiff Classic Brown Bear Plush Stuffed Animal Toy", "price": 3999, "disc": 2999, "img": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Hasbro", "title": "Hasbro Monopoly Deluxe Collector Strategy Board Game", "price": 2999, "disc": 1999, "img": "https://images.unsplash.com/photo-1560169897-fc0978021348?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Hot Wheels", "title": "Hot Wheels Track Builder Unlimited Super Construction Set", "price": 4499, "disc": 3299, "img": "https://images.unsplash.com/photo-1558060370-d644479be6f7?w=800&auto=format&fit=crop&q=80"},
  {"cat": 8, "brand": "Rubik's", "title": "Rubik's Connected Bluetooth Smart Speed Cube", "price": 5990, "disc": 4490, "img": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 9: Automotive & Accessories ---
  {"cat": 9, "brand": "70mai", "title": "70mai Dash Cam Pro Plus+ 4K Front & Rear Camera", "price": 14999, "disc": 11999, "img": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80"},
  {"cat": 9, "brand": "Baseus", "title": "Baseus Wireless High Pressure Car Tire Inflator", "price": 4999, "disc": 3499, "img": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 9, "brand": "Blaupunkt", "title": "Blaupunkt San Diego 10.1 Inch Android Car Stereo Touchscreen", "price": 22990, "disc": 16990, "img": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80"},
  {"cat": 9, "brand": "ArmorAll", "title": "ArmorAll Complete Car Wash & Polish Cleaning Care Kit", "price": 2499, "disc": 1799, "img": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 10: Books & Stationery ---
  {"cat": 10, "brand": "Amazon", "title": "Kindle Paperwhite 32GB Signature Edition E-Reader", "price": 14900, "disc": 11900, "img": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"},
  {"cat": 10, "brand": "Rocketbook", "title": "Rocketbook Smart Reusable Spiral Grid Notebook", "price": 4490, "disc": 3290, "img": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80"},
  {"cat": 10, "brand": "Lamy", "title": "Lamy 2000 Makrolon Black Fountain Pen Fine Nib", "price": 18500, "disc": 15490, "img": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"},
  {"cat": 10, "brand": "Moleskine", "title": "Moleskine Classic Hardcover Ruled Leather Notebook Journal", "price": 2499, "disc": 1899, "img": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80"},

  # --- CATEGORY 11: Groceries & Gourmet ---
  {"cat": 11, "brand": "GourmetBeans", "title": "Jamaica Blue Mountain Gourmet Whole Bean Coffee 500g", "price": 4499, "disc": 3499, "img": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"},
  {"cat": 11, "brand": "Ferrero", "title": "Ferrero Rocher Collection 48 Pieces Italian Chocolate Gift Box", "price": 2199, "disc": 1699, "img": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80"},
  {"cat": 11, "brand": "Fortnum & Mason", "title": "Fortnum & Mason Royal Blend English Loose Leaf Tea 250g", "price": 3490, "disc": 2790, "img": "https://images.unsplash.com/photo-1511537190424-bb543f309565?w=800&auto=format&fit=crop&q=80"},
  {"cat": 11, "brand": "Monini", "title": "Monini Extra Virgin Cold Pressed Italian Olive Oil 1L", "price": 1899, "disc": 1399, "img": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop&q=80"}
]

products = []
prod_id = 100

for item in products_raw:
  prod_id += 1
  brand = item["brand"]
  title = item["title"]
  cat_id = item["cat"]
  slug = title.lower().replace(' ', '-').replace("'", "").replace("&", "and").replace("/", "-") + f"-{prod_id}"
  base_price = float(item["price"])
  disc_price = float(item["disc"])
  discount_pct = int(round((1 - disc_price / base_price) * 100))

  prod = {
    "id": prod_id,
    "title": title,
    "slug": slug,
    "sku": f"{brand[:4].upper()}-{prod_id}",
    "brand": brand,
    "category_id": cat_id,
    "seller_id": 2,
    "short_description": f"Official authentic {title} with brand warranty and express doorstep delivery.",
    "description": f"Experience unmatched quality with the {title}. Crafted with premium components for superior user satisfaction.",
    "highlights": [
      "100% Certified Authentic Guaranteed",
      "Express 2-Day Doorstep Shipping",
      "7 Days Instant Return Policy",
      "Official Brand Warranty Included"
    ],
    "base_price": base_price,
    "discount_price": disc_price,
    "discount_percentage": discount_pct,
    "stock_quantity": 30,
    "is_in_stock": True,
    "is_featured": True if prod_id % 2 == 0 else False,
    "is_trending": True if prod_id % 3 == 0 else False,
    "is_flash_sale": True if prod_id % 4 == 0 else False,
    "rating": round(4.5 + (prod_id % 5) * 0.1, 1),
    "review_count": 80 + prod_id * 3,
    "primary_image": item["img"],
    "gallery_images": [item["img"]],
    "images_360": [item["img"]] if prod_id % 2 == 0 else [],
    "warranty_info": "1 Year Official Warranty",
    "return_policy": "7 Days Return Policy",
    "estimated_delivery_days": 2,
    "specs": [{"spec_key": "Brand", "spec_value": brand}],
    "variants": [],
    "faqs": []
  }
  products.append(prod)

output_code = f"""// 100% Unique Product Catalog (No duplicate titles or duplicate images)
import {{ Product, Category }} from '../types';

export const MOCK_CATEGORIES: Category[] = {json.dumps(categories, indent=2)};

export const MOCK_PRODUCTS: Product[] = {json.dumps(products, indent=2)};
"""

with open('c:/Users/pawar/Desktop/Cartify/frontend/src/services/mockProducts.ts', 'w', encoding='utf-8') as f:
  f.write(output_code)

print(f"Successfully created {len(products)} 100% unique products with distinct images!")
