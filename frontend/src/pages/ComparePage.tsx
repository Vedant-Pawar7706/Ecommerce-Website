import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Layers, ShoppingBag, Star, Check, X, ArrowLeft } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const navigate = useNavigate();
  const { compareList, toggleCompare, addToCart } = useStore();

  if (compareList.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <Layers className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">No Products Selected for Comparison</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Click the compare button on any product card to add side-by-side specs comparison.</p>
        <Link to="/products" className="inline-block bg-brand-600 text-white font-bold text-xs px-6 py-3 rounded-full">
          Browse Products
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

      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Layers className="w-8 h-8 text-brand-600 dark:text-brand-400" />
            <span>Product Spec Comparison</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Comparing {compareList.length} items side-by-side</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr>
              <th className="p-4 glass-panel border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold uppercase w-48 bg-slate-100 dark:bg-slate-900">Feature</th>
              {compareList.map((prod) => (
                <th key={prod.id} className="p-4 glass-card border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 min-w-[240px] bg-white dark:bg-slate-900">
                  <div className="relative space-y-2">
                    <button
                      onClick={() => toggleCompare(prod)}
                      className="absolute -top-2 -right-2 p-1 text-slate-400 hover:text-rose-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <img src={prod.primary_image} alt={prod.title} className="w-24 h-24 object-cover rounded-xl bg-slate-100 dark:bg-slate-900 mx-auto" />
                    <p className="font-bold text-sm text-center truncate">{prod.title}</p>
                    <p className="text-center font-extrabold text-brand-600 dark:text-brand-400 text-base">₹{(prod.discount_price || prod.base_price).toLocaleString('en-IN')}</p>
                    <button
                      onClick={() => addToCart(prod)}
                      className="w-full bg-brand-600 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <td className="p-4 font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40">Brand</td>
              {compareList.map((p) => <td key={p.id} className="p-4 font-semibold">{p.brand}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40">Customer Rating</td>
              {compareList.map((p) => (
                <td key={p.id} className="p-4 font-semibold text-amber-500 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" /> {p.rating} ({p.review_count})
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40">360° Interactive</td>
              {compareList.map((p) => (
                <td key={p.id} className="p-4">
                  {p.images_360?.length ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-slate-400" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40">Warranty</td>
              {compareList.map((p) => <td key={p.id} className="p-4">{p.warranty_info}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
