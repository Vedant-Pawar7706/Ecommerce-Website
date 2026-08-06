import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 text-xs font-medium pt-16 pb-8 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">Cartify</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs max-w-sm leading-relaxed">
              Cartify is a next-generation e-commerce platform delivering ultra-fast 2-day delivery, 360° interactive product previews, and AI-assisted shopping experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-[11px] font-semibold">🔒 256-Bit SSL Encrypted</span>
              <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-[11px] font-semibold">⚡ Powered by FastAPI & React</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-4">Shop Categories</h4>
            <ul className="space-y-2.5">
              <li><Link to="/products?category_id=11" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Smartphones & Mobiles</Link></li>
              <li><Link to="/products?category_id=12" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Laptops & Workstations</Link></li>
              <li><Link to="/products?category_id=21" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Noise Cancelling Audio</Link></li>
              <li><Link to="/products?category_id=13" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Smartwatches & Trackers</Link></li>
              <li><Link to="/products?is_flash_sale=true" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Flash Sales & Deals</Link></li>
            </ul>
          </div>

          {/* Portals & Account */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-4">Account & Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/dashboard" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">My Profile & Account</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Order History & Tracking</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Saved Wishlist</Link></li>
              <li><Link to="/compare" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Product Comparison Tool</Link></li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-4">Contact & Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>+91 1800-CARTIFY-VIP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>support@cartify.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Cartify Inc. All rights reserved. Designed for ultra-performance.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">Security Audit</a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">API Documentation</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
