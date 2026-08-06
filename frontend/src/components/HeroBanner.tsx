import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Truck, Award, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const CATEGORY_SLIDES = [
  {
    id: 1,
    title: 'Smartphones & Mobiles',
    subtitle: 'FEATURED CATEGORY COLLECTION 2026',
    description: 'Explore ultra-fast 5G flagships, foldable screens, and cinematic camera smartphones from top global brands.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80',
    badge: 'Up to 30% OFF',
    link: '/products?category_id=1',
    discount: 'Free Express Shipping'
  },
  {
    id: 2,
    title: 'Laptops & Workstations',
    subtitle: 'HIGH PERFORMANCE CREATOR & GAMING LAPTOPS',
    description: 'Engineered for developers, designers, and gamers with M3 Max, Intel i9, and Nvidia RTX GPUs.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&auto=format&fit=crop&q=80',
    badge: 'Save up to ₹25,000',
    link: '/products?category_id=1',
    discount: 'Instant ₹15,000 Bank Cashback'
  },
  {
    id: 3,
    title: 'Audio & Studio Sound',
    subtitle: 'IMMERSIVE HYBRID NOISE CANCELLATION & HI-RES AUDIO',
    description: 'Discover studio-grade wireless headphones, noise-cancelling earbuds, and powerful home soundbars.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80',
    badge: 'Starting at ₹2,999',
    link: '/products?category_id=2',
    discount: 'Flash Sale Live'
  },
  {
    id: 4,
    title: 'Gaming Consoles & VR',
    subtitle: 'NEXT-GEN GAMING CONSOLES, VR & PERIPHERALS',
    description: 'Immerse in true 4K 120Hz gaming with PlayStation 5, Xbox Series X, Nintendo Switch OLED, and VR headsets.',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&auto=format&fit=crop&q=80',
    badge: 'Flat 15% Cashback',
    link: '/products?category_id=5',
    discount: 'Official Brand Warranty'
  },
  {
    id: 5,
    title: 'Smart Home & Living',
    subtitle: 'AUTOMATED SMART LIGHTING, ROBOTICS & LIVING',
    description: 'Transform your living space with intelligent lighting, AI robot vacuums, and integrated security systems.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80',
    badge: 'Up to 40% OFF',
    link: '/products?category_id=4',
    discount: 'Smart Ecosystem'
  },
  {
    id: 6,
    title: 'Fashion & Luxury Apparel',
    subtitle: 'PREMIUM DESIGNER WEAR, SNEAKERS & ACCESSORIES',
    description: 'Elevate your style with curated streetwear, luxury sneakers, and sustainable designer apparel.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=80',
    badge: 'Trending 2026 Collection',
    link: '/products?category_id=3',
    discount: 'New Arrivals'
  },
  {
    id: 7,
    title: 'Beauty & Personal Care',
    subtitle: 'LUXURY SKINCARE, STYLING TOOLS & GROOMING',
    description: 'Experience professional hair multi-stylers, advanced night repair serums, and precision wet shavers.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=80',
    badge: 'Up to 35% OFF',
    link: '/products?category_id=6',
    discount: 'Certified Organic'
  },
  {
    id: 8,
    title: 'Smartwatches & Trackers',
    subtitle: 'HEALTH, ECG, SPO2 & DUAL-FREQUENCY GPS WEARABLES',
    description: 'Track workout metrics, heart health, and sleep recovery with rugged titanium smartwatches.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80',
    badge: 'Flat 20% OFF',
    link: '/products?category_id=7',
    discount: 'Health Suite Certified'
  }
];

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CATEGORY_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CATEGORY_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CATEGORY_SLIDES.length) % CATEGORY_SLIDES.length);
  };

  const slide = CATEGORY_SLIDES[currentSlide];

  return (
    <div className="relative overflow-hidden mt-3 mb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Category Slideshow Outer Wrapper with group for hover-visible arrows */}
      <div className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 shadow-2xl min-h-[440px] flex items-center bg-slate-900">
        
        {/* Background Image Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.88, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>

        {/* Gradient Text Protection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-2xl p-8 sm:p-12 text-white">
          
          {/* Category Badge */}
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/30 border border-brand-400/40 text-brand-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md"
          >
            <Layers className="w-3.5 h-3.5 text-amber-300" />
            <span>{slide.badge}</span>
            <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-extrabold">{slide.discount}</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={`sub-${slide.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold text-brand-300 tracking-widest uppercase mb-2 drop-shadow"
          >
            {slide.subtitle}
          </motion.p>

          {/* Category Name Title */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg"
          >
            {slide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-100 text-sm sm:text-base mb-8 max-w-xl line-clamp-2 drop-shadow"
          >
            {slide.description}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to={slide.link}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-xl shadow-purple-500/30 flex items-center gap-2 hover:scale-105 transition-all"
            >
              <span>Explore Category</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/products"
              className="bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/30 transition-colors shadow-lg"
            >
              Shop All Products
            </Link>
          </motion.div>

        </div>

        {/* Hover-Visible Navigation Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 shadow-2xl"
          title="Previous Category"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 shadow-2xl"
          title="Next Category"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
          {CATEGORY_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-purple-400' : 'w-2 bg-slate-400/80'}`}
            />
          ))}
        </div>

      </div>

      {/* Trust Badges Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 mb-1">
        <div className="glass-card py-4 px-5 rounded-2xl flex items-center gap-3.5 border border-slate-200 dark:border-slate-800/80 shadow-sm">
          <Truck className="w-7 h-7 text-purple-600 dark:text-purple-400 shrink-0" />
          <div className="flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">Express Delivery</p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Guaranteed 2-3 Day Arrival</p>
          </div>
        </div>

        <div className="glass-card py-4 px-5 rounded-2xl flex items-center gap-3.5 border border-slate-200 dark:border-slate-800/80 shadow-sm">
          <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div className="flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">Authentic Guarantee</p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">100% Brand Certified</p>
          </div>
        </div>

        <div className="glass-card py-4 px-5 rounded-2xl flex items-center gap-3.5 border border-slate-200 dark:border-slate-800/80 shadow-sm">
          <Zap className="w-7 h-7 text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">Instant Returns</p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">7 Days Doorstep Pick up</p>
          </div>
        </div>

        <div className="glass-card py-4 px-5 rounded-2xl flex items-center gap-3.5 border border-slate-200 dark:border-slate-800/80 shadow-sm">
          <Award className="w-7 h-7 text-purple-600 dark:text-purple-400 shrink-0" />
          <div className="flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">Cartify Rewards</p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Earn 5% Coins on Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};
