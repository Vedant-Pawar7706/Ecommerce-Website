import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, ArrowLeft } from 'lucide-react';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, appliedCoupon, setAppliedCoupon } = useStore();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product.discount_price || item.product.base_price;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 150;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.coupon_type === 'percentage') {
      discount = (subtotal * appliedCoupon.discount_value) / 100;
    } else if (appliedCoupon.coupon_type === 'flat') {
      discount = appliedCoupon.discount_value;
    } else if (appliedCoupon.coupon_type === 'free_shipping') {
      discount = shipping;
    }
  }

  const total = Math.max(0, subtotal + shipping + tax - discount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.toUpperCase() === 'WELCOME15') {
      setAppliedCoupon({
        id: 1,
        code: 'WELCOME15',
        description: '15% OFF First Order',
        coupon_type: 'percentage',
        discount_value: 15,
        min_order_amount: 500,
        is_active: true
      });
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setAppliedCoupon({
        id: 2,
        code: 'FREESHIP',
        description: 'Free Express Shipping',
        coupon_type: 'free_shipping',
        discount_value: 150,
        min_order_amount: 0,
        is_active: true
      });
    } else {
      setCouponError('Invalid coupon code. Try WELCOME15 or FREESHIP');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Your Shopping Cart is Empty</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Discover our latest 360° interactive smartphones, pro laptops, and noise cancelling headphones!
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-brand-600 dark:text-brand-400" />
        <span>Shopping Cart ({cartItems.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Item List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(({ product, variantId, quantity }) => {
            const price = product.discount_price || product.base_price;
            return (
              <div key={`${product.id}-${variantId}`} className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-4 bg-white dark:bg-slate-900/60">
                <img src={product.primary_image} alt={product.title} className="w-20 h-20 object-cover rounded-xl bg-slate-100 dark:bg-slate-900 shrink-0" />
                
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{product.brand}</span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{product.title}</h3>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">₹{price.toLocaleString('en-IN')}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1, variantId)}
                    className="p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-slate-900 dark:text-white px-2">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1, variantId)}
                    className="p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeFromCart(product.id, variantId)}
                  className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                  title="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary & Coupon Card */}
        <div className="space-y-6">
          
          {/* Coupon Input */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-950">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Apply Promo Coupon</span>
            </h3>

            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter WELCOME15"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs uppercase px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-500"
              />
              <button type="submit" className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold px-4 py-2 rounded-xl">
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <div className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 text-xs p-2.5 rounded-xl flex items-center justify-between font-semibold">
                <span>Code {appliedCoupon.code} Applied!</span>
                <button onClick={() => setAppliedCoupon(null)} className="text-rose-500 hover:underline text-[10px]">Remove</button>
              </div>
            )}
            {couponError && <p className="text-[11px] text-rose-500 font-semibold">{couponError}</p>}
          </div>

          {/* Pricing Breakdown Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white dark:bg-slate-950">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-200 dark:border-slate-800 pb-3">Order Summary</h3>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? <strong className="text-emerald-600 dark:text-emerald-400">FREE</strong> : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated GST Tax (8%)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>Coupon Discount</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between text-base font-extrabold text-slate-900 dark:text-white">
              <span>Total Amount</span>
              <span className="text-brand-600 dark:text-brand-400">₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
