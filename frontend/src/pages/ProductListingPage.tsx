import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { fetchProducts, fetchCategories } from '../services/api';
import { Product, Category } from '../types';
import {
  SlidersHorizontal,
  Grid,
  List,
  Search,
  Star,
  RefreshCw,
  ChevronRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Flame,
  Zap,
  Award,
  Check,
  X,
  Tag,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProductListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    searchParams.get('category_id') ? Number(searchParams.get('category_id')) : null
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(250000);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [minDiscount, setMinDiscount] = useState<number | null>(null);
  const [onlyFlashSale, setOnlyFlashSale] = useState<boolean>(searchParams.get('is_flash_sale') === 'true');
  const [onlyTrending, setOnlyTrending] = useState<boolean>(searchParams.get('is_trending') === 'true');
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(searchParams.get('is_featured') === 'true');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Accordion Sections Open State
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    discount: true,
    perks: true,
    rating: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Sync filters from URL searchParams
  useEffect(() => {
    const catParam = searchParams.get('category_id');
    setSelectedCategory(catParam ? Number(catParam) : null);
    setSearchQuery(searchParams.get('search') || '');
    if (searchParams.get('is_flash_sale') === 'true') setOnlyFlashSale(true);
    if (searchParams.get('is_trending') === 'true') setOnlyTrending(true);
    if (searchParams.get('is_featured') === 'true') setOnlyFeatured(true);
  }, [searchParams]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  // Calculate active filter count
  const activeFiltersCount = [
    selectedCategory !== null,
    searchQuery.trim() !== '',
    maxPrice < 250000 || minPrice > 0,
    minRating !== null,
    minDiscount !== null,
    onlyFlashSale,
    onlyTrending,
    onlyFeatured,
    onlyInStock
  ].filter(Boolean).length;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const params: Record<string, any> = {
        sort_by: sortBy,
        min_price: minPrice,
        max_price: maxPrice
      };
      if (selectedCategory) params.category_id = selectedCategory;
      if (searchQuery) params.search = searchQuery;
      if (minRating) params.min_rating = minRating;
      if (onlyFlashSale) params.is_flash_sale = true;
      if (onlyTrending) params.is_trending = true;
      if (onlyFeatured) params.is_featured = true;

      const res = await fetchProducts(params);
      let items = res.items;

      // Extra client-side filter enhancements
      if (minDiscount !== null) {
        items = items.filter(p => (p.discount_percentage || 0) >= minDiscount);
      }
      if (onlyInStock) {
        items = items.filter(p => p.is_in_stock);
      }

      setProducts(items);
      setLoading(false);
    };

    loadProducts();
  }, [selectedCategory, searchQuery, minPrice, maxPrice, minRating, minDiscount, onlyFlashSale, onlyTrending, onlyFeatured, onlyInStock, sortBy, searchParams]);

  const handleSelectCategory = (catId: number | null) => {
    setSelectedCategory(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId !== null) {
      newParams.set('category_id', String(catId));
    } else {
      newParams.delete('category_id');
    }
    setSearchParams(newParams);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setMinPrice(0);
    setMaxPrice(250000);
    setMinRating(null);
    setMinDiscount(null);
    setOnlyFlashSale(false);
    setOnlyTrending(false);
    setOnlyFeatured(false);
    setOnlyInStock(false);
    setSortBy('popularity');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Cartify</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Product Catalog</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore Products'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Showing {products.length} products with 360° interactive models</p>
        </div>

        {/* View mode & Sort */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 focus:outline-none focus:border-purple-600 font-bold shadow-sm"
            >
              <option value="popularity">Popularity & Rating</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- LUXURY REDESIGNED FILTER PRODUCTS SIDEBAR PANEL (FULLY SCROLLABLE) --- */}
        <div className="lg:col-span-3 space-y-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xl relative sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Filter Products</h3>
                {activeFiltersCount > 0 && (
                  <span className="text-[10px] bg-purple-600 text-white font-bold px-2 py-0.5 rounded-full">
                    {activeFiltersCount} Active
                  </span>
                )}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-[11px] text-purple-600 dark:text-purple-400 hover:text-purple-700 font-extrabold flex items-center gap-1 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-xl transition-all hover:scale-105"
              >
                <RefreshCw className="w-3 h-3" /> Clear All
              </button>
            )}
          </div>

          {/* Keyword Search inside Sidebar */}
          <div className="relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-purple-600 font-medium shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* SECTION 1: CATEGORIES ACCORDION */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <button
              onClick={() => toggleSection('categories')}
              className="w-full flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Categories</span>
              </div>
              {openSections.categories ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.categories && (
              <div className="space-y-1 text-xs max-h-80 overflow-y-auto pr-1 overflow-x-hidden animate-fadeIn custom-scrollbar">
                <button
                  onClick={() => handleSelectCategory(null)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedCategory === null
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>All Categories</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === null ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    550
                  </span>
                </button>

                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                        50
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* SECTION 2: PRICE RANGE & QUICK PRESETS */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <button
              onClick={() => toggleSection('price')}
              className="w-full flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3"
            >
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Price Range</span>
              </div>
              {openSections.price ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.price && (
              <div className="space-y-3 text-xs animate-fadeIn">
                {/* Price Presets */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: 'Under ₹5k', max: 5000 },
                    { label: '₹5k - ₹25k', max: 25000 },
                    { label: '₹25k - ₹1L', max: 100000 },
                    { label: 'Up to ₹2.5L', max: 250000 }
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setMaxPrice(preset.max)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border text-center transition-all ${
                        maxPrice === preset.max
                          ? 'border-purple-600 bg-purple-600/10 text-purple-600 dark:text-purple-400'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Range Input */}
                <input
                  type="range"
                  min="0"
                  max="250000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />

                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>₹0</span>
                  <span className="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-lg border border-purple-200 dark:border-purple-800">
                    Up to ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 3: MINIMUM DISCOUNT FILTER */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <button
              onClick={() => toggleSection('discount')}
              className="w-full flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Discount Offers</span>
              </div>
              {openSections.discount ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.discount && (
              <div className="grid grid-cols-2 gap-2 text-xs animate-fadeIn">
                {[10, 20, 30, 50].map((disc) => (
                  <button
                    key={disc}
                    onClick={() => setMinDiscount(minDiscount === disc ? null : disc)}
                    className={`px-3 py-2 rounded-xl border text-center font-bold transition-all ${
                      minDiscount === disc
                        ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    {disc}% OFF & Above
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 4: SPECIAL PERKS & BADGES TOGGLES */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <button
              onClick={() => toggleSection('perks')}
              className="w-full flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Special Perks</span>
              </div>
              {openSections.perks ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.perks && (
              <div className="space-y-2 text-xs animate-fadeIn">
                <label className="flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                    <span>Flash Sale Only</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={onlyFlashSale}
                    onChange={() => setOnlyFlashSale(!onlyFlashSale)}
                    className="w-4 h-4 accent-purple-600 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Zap className="w-4 h-4 text-indigo-500" />
                    <span>Trending Items Only</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={onlyTrending}
                    onChange={() => setOnlyTrending(!onlyTrending)}
                    className="w-4 h-4 accent-purple-600 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span>Featured Items Only</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={onlyFeatured}
                    onChange={() => setOnlyFeatured(!onlyFeatured)}
                    className="w-4 h-4 accent-purple-600 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                    <Package className="w-4 h-4 text-emerald-500" />
                    <span>In Stock Only</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={() => setOnlyInStock(!onlyInStock)}
                    className="w-4 h-4 accent-purple-600 rounded"
                  />
                </label>
              </div>
            )}
          </div>

          {/* SECTION 5: CUSTOMER RATING */}
          <div>
            <button
              onClick={() => toggleSection('rating')}
              className="w-full flex items-center justify-between font-extrabold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Customer Rating</span>
              </div>
              {openSections.rating ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.rating && (
              <div className="space-y-2 text-xs animate-fadeIn">
                {[4.5, 4.0, 3.5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(minRating === rating ? null : rating)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-xl border text-left font-bold transition-all ${
                      minRating === rating
                        ? 'border-amber-400 bg-amber-400/10 text-amber-600 dark:text-amber-300 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-current text-amber-500" />
                      <span>{rating} Stars & Above</span>
                    </div>
                    {minRating === rating && <Check className="w-4 h-4 text-amber-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* --- PRODUCTS GRID DISPLAY --- */}
        <div className="lg:col-span-9">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="glass-card rounded-2xl h-80 animate-pulse p-4 bg-slate-200 dark:bg-slate-900" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="glass-panel rounded-3xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <Search className="w-10 h-10 mx-auto text-slate-400 dark:text-slate-600" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No products match your selected filters</h3>
              <p className="text-xs max-w-sm mx-auto">Try clearing some filter criteria to discover more products from our catalog.</p>
              <button onClick={resetFilters} className="bg-purple-600 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg shadow-purple-500/25 mt-2">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
