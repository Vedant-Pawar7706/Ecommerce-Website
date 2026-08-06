import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Layers, Eye, Flame } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
}

const CATEGORY_FALLBACK_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
  2: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
  3: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
  4: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
  5: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80',
  6: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
  7: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
  8: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80',
  9: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80',
  10: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
  11: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, compareList, openQuickView } = useStore();
  const inWishlist = isInWishlist(product.id);
  const inCompare = compareList.some((p) => p.id === product.id);

  const effectivePrice = product.discount_price || product.base_price;
  const hasDiscount = product.discount_price && product.discount_price < product.base_price;

  return (
    <div className="group relative glass-card rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900/60">
      
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.is_flash_sale && (
          <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Flame className="w-3 h-3 fill-current" />
            Flash Sale
          </span>
        )}
        {hasDiscount && (
          <span className="bg-rose-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow">
            {product.discount_percentage}% OFF
          </span>
        )}
        {product.images_360 && product.images_360.length > 0 && (
          <span className="bg-indigo-600/90 text-white font-semibold text-[10px] px-2 py-0.5 rounded-full backdrop-blur">
            360° View
          </span>
        )}
      </div>

      {/* Action Buttons Top Right */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`p-2 rounded-full glass-panel border border-slate-200 dark:border-slate-700 transition-transform duration-200 hover:scale-110 ${inWishlist ? 'bg-rose-500 text-white border-rose-500' : 'text-slate-600 dark:text-slate-300 hover:text-rose-500'}`}
          title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Compare Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleCompare(product);
          }}
          className={`p-2 rounded-full glass-panel border border-slate-200 dark:border-slate-700 transition-transform duration-200 hover:scale-110 ${inCompare ? 'bg-purple-500 text-white border-purple-500' : 'text-slate-600 dark:text-slate-300 hover:text-purple-500'}`}
          title="Compare Product"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Quick View Button (Only visible on product hover) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickView(product);
          }}
          className="p-2 rounded-full glass-panel border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-110 hidden group-hover:flex opacity-0 group-hover:opacity-100 items-center justify-center shadow-sm"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image Container */}
      <Link to={`/products/${product.slug}`} className="block relative pt-[75%] bg-slate-100 dark:bg-slate-900/80 overflow-hidden">
        <img
          src={product.primary_image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = CATEGORY_FALLBACK_IMAGES[product.category_id] || CATEGORY_FALLBACK_IMAGES[1];
          }}
        />
      </Link>

      {/* Details Container */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-1">
            <span className="uppercase tracking-wider text-brand-600 dark:text-brand-400">{product.brand}</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded">
              <Star className="w-3 h-3 fill-current" />
              {product.rating} ({product.review_count})
            </span>
          </div>

          {/* Title */}
          <Link to={`/products/${product.slug}`} className="block">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors line-clamp-2 mb-2">
              {product.title}
            </h3>
          </Link>

          {/* Highlights Mini Bullet */}
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mb-3">
            {product.short_description}
          </p>
        </div>

        {/* Footer Pricing & Add to Cart */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">₹{effectivePrice.toLocaleString('en-IN')}</span>
              {hasDiscount && (
                <span className="text-xs text-slate-400 line-through">₹{product.base_price.toLocaleString('en-IN')}</span>
              )}
            </div>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Free Express Shipping</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-brand-600 hover:bg-brand-500 text-white p-2.5 rounded-xl shadow-md shadow-brand-600/20 hover:scale-105 transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
};
