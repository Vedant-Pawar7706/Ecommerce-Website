import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Headphones,
  Shirt,
  Home,
  Gamepad2,
  Sparkles,
  Dumbbell,
  ToyBrick,
  Car,
  BookOpen,
  ShoppingBag,
  Zap
} from 'lucide-react';

const CATEGORY_BUTTONS = [
  {
    name: 'Electronics',
    icon: Smartphone,
    color: 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30',
    link: '/products?category_id=1'
  },
  {
    name: 'Audio & Sound',
    icon: Headphones,
    color: 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/30',
    link: '/products?category_id=2'
  },
  {
    name: 'Fashion',
    icon: Shirt,
    color: 'bg-gradient-to-tr from-pink-500 to-rose-600 text-white shadow-md shadow-pink-500/30',
    link: '/products?category_id=3'
  },
  {
    name: 'Home & Kitchen',
    icon: Home,
    color: 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30',
    link: '/products?category_id=4'
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    color: 'bg-gradient-to-tr from-violet-600 to-purple-800 text-white shadow-md shadow-violet-500/30',
    link: '/products?category_id=5'
  },
  {
    name: 'Beauty',
    icon: Sparkles,
    color: 'bg-gradient-to-tr from-fuchsia-500 to-pink-600 text-white shadow-md shadow-fuchsia-500/30',
    link: '/products?category_id=6'
  },
  {
    name: 'Sports',
    icon: Dumbbell,
    color: 'bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/30',
    link: '/products?category_id=7'
  },
  {
    name: 'Toys & Games',
    icon: ToyBrick,
    color: 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/30',
    link: '/products?category_id=8'
  },
  {
    name: 'Automotive',
    icon: Car,
    color: 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30',
    link: '/products?category_id=9'
  },
  {
    name: 'Books',
    icon: BookOpen,
    color: 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30',
    link: '/products?category_id=10'
  },
  {
    name: 'Groceries',
    icon: ShoppingBag,
    color: 'bg-gradient-to-tr from-green-500 to-emerald-600 text-white shadow-md shadow-green-500/30',
    link: '/products?category_id=11'
  },
  {
    name: 'Deals & Offers',
    icon: Zap,
    color: 'bg-gradient-to-tr from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/30',
    link: '/products?is_flash_sale=true'
  }
];

export const CategoryIconGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-3.5 bg-slate-50/80 dark:bg-slate-900/80 p-3.5 sm:p-4 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        {CATEGORY_BUTTONS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <Link
              key={idx}
              to={item.link}
              className="flex flex-col items-center justify-center p-1.5 rounded-2xl group transition-all duration-300 hover:-translate-y-1 scale-[1.05]"
            >
              <div className={`w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-2xl flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 ${item.color}`}>
                <IconComp className="w-6 h-6 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 text-center truncate w-full group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryIconGrid;
