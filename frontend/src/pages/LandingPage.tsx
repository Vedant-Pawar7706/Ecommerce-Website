import React, { useEffect, useState } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryIconGrid } from '../components/CategoryIconGrid';
import { ProductCard } from '../components/ProductCard';
import { fetchProducts, fetchCategories } from '../services/api';
import { Product, Category } from '../types';
import { Flame, Sparkles, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const LandingPage: React.FC = () => {
  const { setAIRufusOpen } = useStore();
  const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Live Flash Sale Countdown Timer (Ticks every second)
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 }; // Reset cycle
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [flashRes, trendRes, catRes] = await Promise.all([
        fetchProducts({ is_flash_sale: true, size: 8 }),
        fetchProducts({ is_trending: true, size: 8 }),
        fetchCategories()
      ]);
      setFlashSaleProducts(flashRes.items);
      setTrendingProducts(trendRes.items);
      setCategories(catRes);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-4">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Categories Icon Grid (Below Slideshow) */}
      <CategoryIconGrid />

      {/* Categories Showcase (8 Categories in a clean 4x2 grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-brand-500" />
              <span>Explore Top Categories</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Curated collections with 2-day express shipping</p>
          </div>
          <Link to="/products" className="text-brand-600 dark:text-brand-400 hover:underline font-bold text-xs flex items-center gap-1">
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category_id=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-4 hover:border-brand-500/50 transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-slate-900/60 shadow-sm"
            >
              <div className="relative pt-[60%] rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-900">
                <img
                  src={cat.image_url}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{cat.name}</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 relative overflow-hidden bg-white/90 dark:bg-slate-950/90 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-500 border border-amber-500/30 animate-pulse">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Flash Sale Deals</span>
                  <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase">Limited Time</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Exclusive deep discounts ending soon!</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* LIVE Ticking Countdown Timer */}
              <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900 dark:text-white">
                <span className="bg-slate-900 text-white border border-slate-700 px-3 py-1.5 rounded-xl shadow-md">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </span>
                <span className="text-amber-500 font-bold">:</span>
                <span className="bg-slate-900 text-white border border-slate-700 px-3 py-1.5 rounded-xl shadow-md">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </span>
                <span className="text-amber-500 font-bold">:</span>
                <span className="bg-slate-900 text-white border border-slate-700 px-3 py-1.5 rounded-xl text-amber-400 shadow-md animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>

              <Link to="/products?is_flash_sale=true" className="text-amber-600 dark:text-amber-400 hover:underline font-extrabold text-xs flex items-center gap-1">
                <span>View All Flash Deals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-brand-500" />
              <span>Trending Now</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Most ordered products this week across Cartify</p>
          </div>
          <Link to="/products?is_trending=true" className="text-brand-600 dark:text-brand-400 hover:underline font-bold text-xs flex items-center gap-1">
            <span>Explore All Trending</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Recommendations Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-indigo-500/40 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl space-y-4">
            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase border border-indigo-400/30">
              Cartify AI Shopping Assistant Ready
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Need Help Choosing The Perfect Spec?</h3>
            <p className="text-slate-200 text-sm">
              Our Cartify AI Shopping Assistant can compare laptop processors, headphone acoustics, check active coupons, or track your live order instantly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setAIRufusOpen(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Try Shopping Assistant</span>
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
              </button>
            </div>
          </div>

          {/* Fixed 4.9/5.0 Card - High Contrast & Crisp Styling */}
          <div className="w-full md:w-80 h-48 bg-slate-900/90 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-indigo-400/40 shadow-2xl shrink-0">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-3">
              <Star className="w-7 h-7 fill-current text-amber-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">4.9 / 5.0</p>
            <p className="text-xs font-semibold text-slate-300 mt-1">Over 50,000+ Verified Customer Reviews</p>
          </div>
        </div>
      </section>

    </div>
  );
};
