import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '../services/api';
import { Product, ProductVariant } from '../types';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  Heart,
  ShoppingBag,
  Zap,
  RotateCw,
  Layers,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  PackageCheck,
  Plus,
  Bot
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, compareList, setCartifyAIOpen } = useStore();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [is360Mode, setIs360Mode] = useState<boolean>(false);
  const [degreeIndex, setDegreeIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');
  const [aiRecommendations, setAiRecommendations] = useState<Product[]>([]);

  // Frequently Bought Together Bundle state
  const [includeWarranty, setIncludeWarranty] = useState<boolean>(true);
  const [includeAccessory, setIncludeAccessory] = useState<boolean>(true);

  // Recommendation Engine Scoring Algorithm
  const getSmartRecommendations = (target: Product, allItems: Product[]): Product[] => {
    const candidates = allItems.filter((p) => p.id !== target.id);
    const scored = candidates.map((p) => {
      let score = 0;
      // 1. Same category (+50 pts)
      if (Number(p.category_id) === Number(target.category_id)) score += 50;
      // 2. Same brand (+30 pts)
      if (p.brand.toLowerCase() === target.brand.toLowerCase()) score += 30;
      // 3. Price proximity (+20 pts)
      const targetPrice = target.discount_price || target.base_price;
      const itemPrice = p.discount_price || p.base_price;
      const diff = Math.abs(targetPrice - itemPrice) / Math.max(targetPrice, 1);
      if (diff <= 0.3) score += 20;
      else if (diff <= 0.6) score += 10;
      // 4. Rating & Trending (+10 pts)
      score += (p.rating || 4) * 2;
      if (p.is_trending) score += 5;
      return { product: p, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4).map((s) => s.product);
  };

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug).then(async (prod) => {
        setProduct(prod);
        setSelectedImage(prod.primary_image);
        if (prod.variants && prod.variants.length > 0) {
          setSelectedVariant(prod.variants[0]);
        }
        // Fetch category & general pool for smart recommendation engine
        const [catRes, allRes] = await Promise.all([
          fetchProducts({ category_id: prod.category_id, size: 10 }),
          fetchProducts({ size: 30 })
        ]);
        const pool = [...catRes.items, ...allRes.items];
        const uniquePool = Array.from(new Map(pool.map((item) => [item.id, item])).values());
        const recs = getSmartRecommendations(prod, uniquePool);
        setAiRecommendations(recs);
      });
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p>Loading Cartify 360° product experience...</p>
      </div>
    );
  }

  const effectivePrice = selectedVariant ? selectedVariant.price : (product.discount_price || product.base_price);
  const inWishlist = isInWishlist(product.id);
  const inCompare = compareList.some((p) => p.id === product.id);

  // Bundle calculations
  const warrantyPrice = 499;
  const accessoryPrice = 299;
  const bundleTotalPrice = effectivePrice + (includeWarranty ? warrantyPrice : 0) + (includeAccessory ? accessoryPrice : 0);

  const handleAddBundleToCart = () => {
    addToCart(product, 1, selectedVariant?.id);
    if (aiRecommendations[0] && includeAccessory) {
      addToCart(aiRecommendations[0], 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Top Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Image Gallery & 360 Simulator */}
        <div className="space-y-4 sticky top-24">
          <div className="relative glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-[80%]">
            
            {/* 360 Simulator Mode */}
            {is360Mode && product.images_360 && product.images_360.length > 0 ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <img
                  src={product.images_360[degreeIndex % product.images_360.length]}
                  alt="360 view"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-2 rounded-xl flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90">
                  <span className="flex items-center gap-1 font-bold text-purple-600 dark:text-purple-400">
                    <RotateCw className="w-4 h-4 animate-spin" /> Interactive 360° View
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={product.images_360.length - 1}
                    value={degreeIndex}
                    onChange={(e) => setDegreeIndex(Number(e.target.value))}
                    className="w-48 accent-purple-600"
                  />
                  <span>Angle: {(degreeIndex * 180) % 360}°</span>
                </div>
              </div>
            ) : (
              <img
                src={selectedImage}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain p-6"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80';
                }}
              />
            )}

            {/* 360 Mode Toggle Button */}
            {product.images_360 && product.images_360.length > 0 && (
              <button
                onClick={() => setIs360Mode(!is360Mode)}
                className={`absolute top-4 right-4 z-10 px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all ${is360Mode ? 'bg-purple-600 text-white' : 'glass-panel text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800'}`}
              >
                <RotateCw className="w-4 h-4 text-amber-500" />
                <span>{is360Mode ? 'Standard Image' : '360° Interactive'}</span>
              </button>
            )}
          </div>

          {/* Thumbnail Slider */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => { setSelectedImage(product.primary_image); setIs360Mode(false); }}
              className={`w-20 h-20 rounded-2xl overflow-hidden glass-card border-2 p-1 shrink-0 bg-white dark:bg-slate-900 ${selectedImage === product.primary_image && !is360Mode ? 'border-purple-600' : 'border-slate-200 dark:border-slate-800'}`}
            >
              <img src={product.primary_image} alt="Thumb" className="w-full h-full object-cover rounded-xl" />
            </button>
            {product.gallery_images?.map((imgUrl, i) => (
              <button
                key={i}
                onClick={() => { setSelectedImage(imgUrl); setIs360Mode(false); }}
                className={`w-20 h-20 rounded-2xl overflow-hidden glass-card border-2 p-1 shrink-0 bg-white dark:bg-slate-900 ${selectedImage === imgUrl && !is360Mode ? 'border-purple-600' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <img src={imgUrl} alt={`Thumb ${i}`} className="w-full h-full object-cover rounded-xl" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Details, Actions & SHIFTED SPECS/REVIEWS TABS */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 mb-2">
              <span className="uppercase tracking-widest">{product.brand}</span>
              <span className="text-slate-500 dark:text-slate-400">SKU: {selectedVariant ? selectedVariant.sku : product.sku}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-amber-500 bg-amber-400/10 px-2.5 py-1 rounded-lg font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating}</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">({product.review_count} verified reviews)</span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-1 rounded-lg">
                In Stock ({product.stock_quantity} available)
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-baseline gap-3 bg-white dark:bg-slate-950 shadow-sm">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">₹{effectivePrice.toLocaleString('en-IN')}</span>
            {product.discount_price && (
              <span className="text-sm text-slate-400 line-through">₹{product.base_price.toLocaleString('en-IN')}</span>
            )}
            {product.discount_percentage > 0 && (
              <span className="bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30 text-xs font-bold px-2.5 py-0.5 rounded-full">
                Save {product.discount_percentage}%
              </span>
            )}
          </div>

          {/* Variant Selectors (Color & Size) */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Select Variant</label>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${selectedVariant?.id === variant.id ? 'border-purple-600 bg-purple-600/10 text-purple-600 dark:text-white shadow' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-700'}`}
                  >
                    {variant.color_hex && (
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-700" style={{ backgroundColor: variant.color_hex }} />
                    )}
                    <span>{variant.color_name || variant.storage || variant.sku}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => addToCart(product, 1, selectedVariant?.id)}
              className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm py-4 rounded-2xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => {
                addToCart(product, 1, selectedVariant?.id);
                navigate('/cart');
              }}
              className="flex-1 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-extrabold text-sm py-4 rounded-2xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <Zap className="w-5 h-5 fill-current" />
              <span>Buy Now</span>
            </button>
          </div>

          {/* Secondary Actions (Wishlist & Compare) */}
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400 pt-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => toggleWishlist(product)}
              className={`flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors ${inWishlist ? 'text-rose-500' : ''}`}
            >
              <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              <span>{inWishlist ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>

            <button
              onClick={() => toggleCompare(product)}
              className={`flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors ${inCompare ? 'text-purple-600 dark:text-purple-400' : ''}`}
            >
              <Layers className="w-4 h-4" />
              <span>{inCompare ? 'Added to Compare' : 'Compare Spec'}</span>
            </button>
          </div>

          {/* --- SHIFTED TECHNICAL SPECIFICATIONS & REVIEWS TAB SECTION --- */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs font-bold">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 border-b-2 transition-colors ${activeTab === 'specs' ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-extrabold' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                Technical Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-extrabold' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
              >
                Verified Customer Reviews ({product.review_count})
              </button>
            </div>

            {activeTab === 'specs' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Key Highlights</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {product.highlights?.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Product Specs</h4>
                  <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                    {product.specs?.map((spec, i) => (
                      <div key={i} className="py-2 flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{spec.spec_key}</span>
                        <span className="text-slate-900 dark:text-slate-100 font-bold">{spec.spec_value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4 text-xs">
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white">{product.rating} out of 5</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Based on {product.review_count} verified buyer ratings</p>
                  </div>
                  <button className="bg-purple-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">Rahul S. - Verified Buyer</span>
                      <div className="flex text-amber-500"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">Exceeded my expectations! Build quality and delivery speed are top tier.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* --- SEGMENT 1: FREQUENTLY BOUGHT TOGETHER --- */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center gap-2">
          <PackageCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Frequently Bought Together</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          
          {/* Bundle Items Showcase */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Main Product */}
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-purple-500/40 shadow-sm w-56">
              <img src={product.primary_image} alt={product.title} className="w-14 h-14 object-cover rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-purple-600 uppercase">This Item</span>
                <p className="font-bold text-xs text-slate-900 dark:text-white truncate">{product.title}</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹{effectivePrice.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <Plus className="w-5 h-5 text-slate-400 shrink-0" />

            {/* Protection Plan Add-On */}
            <div className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer w-56 ${includeWarranty ? 'bg-white dark:bg-slate-900 border-purple-500/40 shadow-sm' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'}`}
              onClick={() => setIncludeWarranty(!includeWarranty)}>
              <input type="checkbox" checked={includeWarranty} onChange={() => {}} className="w-4 h-4 accent-purple-600 rounded" />
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Protection</span>
                <p className="font-bold text-xs text-slate-900 dark:text-white truncate">2-Yr Damage Warranty</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹499</p>
              </div>
            </div>

            <Plus className="w-5 h-5 text-slate-400 shrink-0" />

            {/* Accessory Add-On */}
            {aiRecommendations[0] ? (
              <div className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer w-56 ${includeAccessory ? 'bg-white dark:bg-slate-900 border-purple-500/40 shadow-sm' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'}`}
                onClick={() => setIncludeAccessory(!includeAccessory)}>
                <input type="checkbox" checked={includeAccessory} onChange={() => {}} className="w-4 h-4 accent-purple-600 rounded" />
                <img src={aiRecommendations[0].primary_image} alt={aiRecommendations[0].title} className="w-12 h-12 object-cover rounded-xl bg-slate-100 dark:bg-slate-800" />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">Add-On</span>
                  <p className="font-bold text-xs text-slate-900 dark:text-white truncate">{aiRecommendations[0].title}</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹{accessoryPrice}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 w-56">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">Add-On</span>
                  <p className="font-bold text-xs text-slate-900 dark:text-white">Fast Charging Stand</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">₹299</p>
                </div>
              </div>
            )}

          </div>

          {/* Bundle Total Action Box */}
          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Total Bundle Price</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">₹{bundleTotalPrice.toLocaleString('en-IN')}</span>
            <button
              onClick={handleAddBundleToCart}
              className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs px-6 py-3 rounded-2xl shadow-lg shadow-purple-600/30 flex items-center gap-2 hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Bundle To Cart</span>
            </button>
          </div>

        </div>
      </section>

      {/* --- SEGMENT 2: CARTIFY AI RECOMMENDATIONS --- */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>Cartify AI Personal Recommendations</span>
                <span className="bg-purple-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">AI Pick</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Handpicked specs matching your current selection</p>
            </div>
          </div>

          <button
            onClick={() => setCartifyAIOpen(true)}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Ask Cartify AI</span>
          </button>
        </div>

        {/* AI Recommended Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiRecommendations.map((item, index) => (
            <div key={item.id} className="relative group">
              <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md backdrop-blur">
                {98 - index * 2}% Spec Match
              </div>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
