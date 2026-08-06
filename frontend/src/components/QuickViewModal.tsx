import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { X, ShoppingBag, Star, Heart, CheckCircle2, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { isQuickViewOpen, quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist } = useStore();

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);
  const effectivePrice = quickViewProduct.discount_price || quickViewProduct.base_price;
  const hasDiscount = quickViewProduct.discount_price && quickViewProduct.discount_price < quickViewProduct.base_price;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-950 rounded-3xl max-w-3xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Showcase */}
        <div className="md:w-1/2 bg-slate-100 dark:bg-slate-900/60 p-6 flex flex-col justify-center items-center relative">
          {hasDiscount && (
            <span className="absolute top-4 left-4 bg-rose-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow">
              {quickViewProduct.discount_percentage}% OFF
            </span>
          )}
          <img
            src={quickViewProduct.primary_image}
            alt={quickViewProduct.title}
            className="max-h-72 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Product Details & Cart Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4 overflow-y-auto">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                {quickViewProduct.brand}
              </span>
              <span className="flex items-center gap-1 text-amber-500 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                {quickViewProduct.rating} ({quickViewProduct.review_count} reviews)
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {quickViewProduct.title}
            </h2>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ₹{effectivePrice.toLocaleString('en-IN')}
              </span>
              {hasDiscount && (
                <span className="text-sm text-slate-400 line-through">
                  ₹{quickViewProduct.base_price.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {quickViewProduct.description || quickViewProduct.short_description}
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold pt-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Truck className="w-4 h-4" />
                <span>Free 2-Day Doorstep Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>100% Certified Authentic Guarantee</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  closeQuickView();
                }}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3.5 rounded-2xl border transition-colors ${inWishlist ? 'bg-rose-500 text-white border-rose-500' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500'}`}
                title={inWishlist ? "Saved in Wishlist" : "Save to Wishlist"}
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            <Link
              to={`/products/${quickViewProduct.slug}`}
              onClick={closeQuickView}
              className="w-full text-center block text-xs font-extrabold text-purple-600 dark:text-purple-400 hover:underline pt-1"
            >
              View Full Product Details Page →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickViewModal;
