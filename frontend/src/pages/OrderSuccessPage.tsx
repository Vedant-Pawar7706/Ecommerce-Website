import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center space-y-8">
      
      {/* Back Button */}
      <div className="text-left">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-2xl animate-bounce">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Order Confirmed!</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Order Number: <strong className="text-brand-600 dark:text-brand-400">#CRT-98402819</strong></p>
      </div>

      {/* Order Status Timeline */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 text-left bg-white dark:bg-slate-950">
        <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
          Live Shipment Timeline
        </h3>

        <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          <div className="relative pl-8 flex items-center justify-between">
            <span className="absolute left-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-950" />
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Order Placed & Confirmed</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Payment verified via Cartify Security</p>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">Just Now</span>
          </div>

          <div className="relative pl-8 flex items-center justify-between opacity-60">
            <span className="absolute left-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Processing & Quality Check</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Preparing item at Fulfillment Hub</p>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">In 2 Hours</span>
          </div>

          <div className="relative pl-8 flex items-center justify-between opacity-60">
            <span className="absolute left-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Out for Express Delivery</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Handed to Delhivery Express</p>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">Est 2 Days</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/dashboard?tab=orders"
          className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-6 py-3 rounded-full shadow flex items-center gap-2"
        >
          <span>Track Order in Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/"
          className="glass-card text-slate-700 dark:text-slate-300 font-semibold text-xs px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800"
        >
          Continue Shopping
        </Link>
      </div>

    </div>
  );
};
