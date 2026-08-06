import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
  isHome?: boolean;
  isBrands?: boolean;
  isDeals?: boolean;
  categoryId?: number;
}

const TOP_NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/', isHome: true },
  { name: 'Electronics', path: '/products?category_id=1', categoryId: 1 },
  { name: 'Audio & Sound', path: '/products?category_id=2', categoryId: 2 },
  { name: 'Fashion', path: '/products?category_id=3', categoryId: 3 },
  { name: 'Home & Kitchen', path: '/products?category_id=4', categoryId: 4 },
  { name: 'Gaming & Esports', path: '/products?category_id=5', categoryId: 5 },
  { name: 'Beauty', path: '/products?category_id=6', categoryId: 6 },
  { name: 'Sports', path: '/products?category_id=7', categoryId: 7 },
  { name: 'Toys & Games', path: '/products?category_id=8', categoryId: 8 },
  { name: 'Automotive', path: '/products?category_id=9', categoryId: 9 },
  { name: 'Books & Stationery', path: '/products?category_id=10', categoryId: 10 },
  { name: 'Groceries', path: '/products?category_id=11', categoryId: 11 },
  { name: 'Deals', path: '/products?is_flash_sale=true', isDeals: true },
];

export const MegaNav: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCatId = searchParams.get('category_id');
  const isFlashSale = searchParams.get('is_flash_sale') === 'true';

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium relative z-40 hidden md:block transition-colors shadow-sm">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-4 h-10 overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TOP_NAV_ITEMS.map((item, idx) => {
          let isActive = false;
          if (item.isHome) {
            isActive = location.pathname === '/' && !location.search;
          } else if (item.isDeals) {
            isActive = isFlashSale;
          } else if (item.isBrands) {
            isActive = location.pathname === '/products' && (!location.search || location.search === '?');
          } else if (item.categoryId !== undefined) {
            isActive = currentCatId === String(item.categoryId);
          }

          return (
            <Link
              key={idx}
              to={item.path}
              className={`h-full flex items-center px-2 border-b-2 transition-all whitespace-nowrap font-bold text-xs sm:text-sm ${
                isActive
                  ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 bg-purple-50/40 dark:bg-purple-950/20'
                  : 'border-transparent text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MegaNav;
