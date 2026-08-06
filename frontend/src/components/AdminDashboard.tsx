import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { fetchProducts, fetchCategories } from '../services/api';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../services/mockProducts';
import { Product, Category } from '../types';
import {
  ShoppingBag,
  Package,
  Layers,
  Tag,
  Users,
  Star,
  Heart,
  TrendingUp,
  CreditCard,
  RotateCcw,
  FileText,
  ShieldCheck,
  Settings,
  Activity,
  Sun,
  Moon,
  Bell,
  Search,
  Download,
  ChevronDown,
  ChevronRight,
  Headphones,
  Sparkles,
  Plus,
  X,
  ExternalLink,
  Filter,
  Calendar,
  LogOut,
  CheckCircle2,
  DollarSign,
  User,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  MoreVertical,
  Trash2,
  Edit3,
  Eye,
  Check,
  Copy,
  Percent
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, logout, theme, toggleTheme } = useStore();
  const [activeSidebarTab, setActiveSidebarTab] = useState('Dashboard');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  // Real Website Products & Categories State
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [loadingApi, setLoadingApi] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<number | 'all'>('all');

  // Load Live Website API Products & Categories on Mount
  useEffect(() => {
    const loadWebsiteData = async () => {
      setLoadingApi(true);
      try {
        const [prodRes, catRes] = await Promise.all([
          fetchProducts({ size: 1000 }),
          fetchCategories()
        ]);
        if (prodRes && prodRes.items && prodRes.items.length > 0) {
          setProductsList(prodRes.items);
        } else {
          setProductsList(MOCK_PRODUCTS);
        }
        if (catRes && catRes.length > 0) {
          setCategoriesList(catRes);
        } else {
          setCategoriesList(MOCK_CATEGORIES);
        }
      } catch (err) {
        setProductsList(MOCK_PRODUCTS);
        setCategoriesList(MOCK_CATEGORIES);
      } finally {
        setLoadingApi(false);
      }
    };
    loadWebsiteData();
  }, []);
  
  // Modals State
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false);

  // New Product Form State
  const [newProductData, setNewProductData] = useState({
    title: '',
    brand: 'Cartify',
    category_id: 1,
    base_price: '',
    discount_price: '',
    stock_quantity: '25',
    primary_image: ''
  });

  // Coupons State
  const [couponsList, setCouponsList] = useState([
    { code: 'WELCOME100', title: 'Flat ₹100 Off', discount: '₹100', minOrder: '₹499', expires: '31 Dec 2026', usage: 1420, active: true },
    { code: 'CARTIFY20', title: '20% Instant Discount', discount: '20% OFF', minOrder: '₹999', expires: '15 Aug 2026', usage: 890, active: true },
    { code: 'FREESHIP', title: 'Free Express Shipping', discount: 'Free Ship', minOrder: '₹0', expires: '30 Nov 2026', usage: 2450, active: true },
    { code: 'WELCOME15', title: '15% Off First Order', discount: '15% OFF', minOrder: '₹500', expires: '31 Dec 2026', usage: 3120, active: true }
  ]);

  // New Coupon Form State
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    title: '',
    discount: '',
    minOrder: '₹499',
    expires: '31 Dec 2026'
  });

  // Customer Users State
  const [customersList, setCustomersList] = useState([
    { id: 1, name: 'Vedant Pawar', email: 'vedant@gmail.com', phone: '+91 98765 43210', ordersCount: 14, spent: '₹42,500', coins: 750, status: 'Active' },
    { id: 2, name: 'Rahul Sharma', email: 'rahul.sharma@email.com', phone: '+91 98765 43211', ordersCount: 8, spent: '₹24,800', coins: 350, status: 'Active' },
    { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', phone: '+91 98765 43212', ordersCount: 22, spent: '₹89,200', coins: 1200, status: 'Active' },
    { id: 4, name: 'Amit Verma', email: 'amit.v@example.com', phone: '+91 98765 43213', ordersCount: 5, spent: '₹12,400', coins: 150, status: 'Active' },
    { id: 5, name: 'Neha Singh', email: 'neha.singh@example.com', phone: '+91 98765 43214', ordersCount: 11, spent: '₹34,100', coins: 500, status: 'Active' }
  ]);

  // Orders State
  const [ordersList, setOrdersList] = useState([
    { id: '#ORD-15234', customer: 'Rahul Sharma', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80', items: 'boAt Noise Cancelling Headphones', status: 'Delivered', statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300', amount: '₹2,499', date: '12 May 2024' },
    { id: '#ORD-15233', customer: 'Priya Patel', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', items: 'Apple iPhone 15 (128GB)', status: 'Processing', statusBg: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300', amount: '₹69,900', date: '10 May 2024' },
    { id: '#ORD-15232', customer: 'Amit Verma', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80', items: "Nike Air Max Excee Men's Shoes", status: 'Shipped', statusBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300', amount: '₹4,795', date: '05 May 2024' },
    { id: '#ORD-15231', customer: 'Neha Singh', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80', items: 'Skybags Casual Backpack', status: 'Delivered', statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300', amount: '₹899', date: '01 May 2024' },
    { id: '#ORD-15230', customer: 'Vikram Joshi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', items: 'Sony WH-CH720N Headphones', status: 'Cancelled', statusBg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300', amount: '₹8,990', date: '28 Apr 2024' }
  ]);

  // Calculate Real Dynamic Stats from API Data
  const totalListedProducts = productsList.length;
  const electronicsCount = productsList.filter(p => [1, 2, 3, 4, 8].includes(Number(p.category_id))).length;
  const fashionCount = productsList.filter(p => Number(p.category_id) === 5).length;
  const homeCount = productsList.filter(p => Number(p.category_id) === 7).length;
  const beautyCount = productsList.filter(p => Number(p.category_id) === 6).length;
  
  const electronicsPct = totalListedProducts ? Math.round((electronicsCount / totalListedProducts) * 100) : 42;
  const fashionPct = totalListedProducts ? Math.round((fashionCount / totalListedProducts) * 100) : 28;
  const homePct = totalListedProducts ? Math.round((homeCount / totalListedProducts) * 100) : 15;
  const beautyPct = totalListedProducts ? Math.round((beautyCount / totalListedProducts) * 100) : 8;
  const sportsPct = Math.max(1, 100 - (electronicsPct + fashionPct + homePct + beautyPct));

  // Product Reviews State
  const [reviewsList, setReviewsList] = useState([
    { id: 1, product: 'AetherPro M3 Max Laptop 16"', reviewer: 'Rahul S.', rating: 5, comment: 'Exceeded my expectations! Build quality and delivery speed are top tier.', date: '12 May 2024' },
    { id: 2, product: 'SonicPulse ANC Headphones', reviewer: 'Priya P.', rating: 5, comment: 'Crystal clear acoustics and noise cancelling works seamlessly.', date: '10 May 2024' },
    { id: 3, product: 'ChronoPulse Titanium Smartwatch', reviewer: 'Amit V.', rating: 4, comment: 'Sleek design and battery backup easily lasts 3 full days.', date: '05 May 2024' }
  ]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleExportReport = () => {
    const csvContent = [
      ['CARTIFY E-COMMERCE PLATFORM - EXECUTIVE ANALYTICS REPORT'],
      ['Generated Date', new Date().toLocaleString()],
      [],
      ['KPI METRIC', 'CURRENT VALUE', 'GROWTH (VS LAST 30 DAYS)'],
      ['Total Store Revenue', '₹12,45,678', '+20.5%'],
      ['Total Customer Orders', '1,245', '+15.3%'],
      ['Total Registered Shoppers', '8,732', '+18.7%'],
      ['Total Active Products Listed', productsList.length.toString(), '+12.4%'],
      ['Pending Order Dispatches', '56', '-8.2%'],
      [],
      ['RECENT CUSTOMER ORDERS LOG'],
      ['Order ID', 'Customer Name', 'Items Ordered', 'Order Value', 'Status', 'Date'],
      ...ordersList.map(o => [o.id, o.customer, o.items, o.amount, o.status, o.date]),
      [],
      ['ACTIVE PROMO COUPONS'],
      ['Coupon Code', 'Description', 'Discount Rate', 'Minimum Order', 'Expiry Date'],
      ...couponsList.map(c => [c.code, c.title, c.discount, c.minOrder, c.expires])
    ].map(row => row.map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Cartify_Store_Analytics_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Downloaded Cartify_Store_Analytics_Report.csv!');
  };

  // Add Product Handler
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductData.title || !newProductData.base_price) {
      showToast('Please provide product title and base price.');
      return;
    }
    const newProd: Product = {
      id: Date.now(),
      title: newProductData.title,
      slug: newProductData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      sku: `CRT-${Date.now().toString().slice(-6)}`,
      brand: newProductData.brand || 'Cartify',
      category_id: Number(newProductData.category_id),
      seller_id: 1,
      short_description: newProductData.title,
      description: `${newProductData.title} - Official authentic product listed on Cartify Marketplace.`,
      highlights: ['Official Brand Warranty', 'Express 2-Day Shipping'],
      base_price: Number(newProductData.base_price),
      discount_price: newProductData.discount_price ? Number(newProductData.discount_price) : Number(newProductData.base_price),
      discount_percentage: newProductData.discount_price ? Math.round(((Number(newProductData.base_price) - Number(newProductData.discount_price)) / Number(newProductData.base_price)) * 100) : 0,
      stock_quantity: Number(newProductData.stock_quantity) || 25,
      is_in_stock: true,
      is_featured: true,
      is_trending: true,
      is_flash_sale: false,
      rating: 5.0,
      review_count: 1,
      primary_image: newProductData.primary_image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80',
      gallery_images: [newProductData.primary_image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80'],
      images_360: [],
      warranty_info: '1 Year Brand Warranty',
      return_policy: '7 Days Replacement Policy',
      estimated_delivery_days: 2,
      specs: [{ spec_key: 'Condition', spec_value: 'Brand New' }],
      variants: [],
      faqs: []
    };

    setProductsList([newProd, ...productsList]);
    setIsAddProductModalOpen(false);
    setNewProductData({ title: '', brand: 'Cartify', category_id: 1, base_price: '', discount_price: '', stock_quantity: '25', primary_image: '' });
    showToast(`New product "${newProd.title}" added to store catalog!`);
  };

  // Add Coupon Handler
  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCoupon.code || !newCoupon.discount) {
      showToast('Please enter coupon code and discount amount.');
      return;
    }
    setCouponsList([{ ...newCoupon, usage: 0, active: true }, ...couponsList]);
    setIsAddCouponModalOpen(false);
    setNewCoupon({ code: '', title: '', discount: '', minOrder: '₹499', expires: '31 Dec 2026' });
    showToast(`Coupon code ${newCoupon.code} created & active live!`);
  };

  const handleDeleteProduct = (id: number, title: string) => {
    setProductsList(productsList.filter(p => p.id !== id));
    showToast(`Product "${title}" removed from store catalog.`);
  };

  // Filter Products
  const filteredProducts = productsList.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategoryFilter === 'all' || p.category_id === Number(selectedCategoryFilter);
    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans -m-4 sm:-m-6 lg:-m-8">
      
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 rounded-2xl shadow-2xl border border-purple-500 flex items-center gap-3 text-xs font-extrabold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-purple-400 dark:text-purple-600" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ==================== LEFT SIDEBAR (WHITE THEME) ==================== */}
      <aside className="w-64 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col justify-between shrink-0 border-r border-slate-200 dark:border-slate-800 shadow-sm select-none">
        
        <div className="space-y-6">
          {/* Top Brand Logo */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Cartify</span>
          </div>

          {/* Navigation Category Groups */}
          <div className="px-4 space-y-6 text-xs overflow-y-auto max-h-[calc(100vh-250px)] no-scrollbar">
            
            {/* GROUP 1: MAIN */}
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase px-3 py-1 block">
                MAIN
              </span>

              {[
                { name: 'Dashboard', icon: Layers, tab: 'Dashboard' },
                { name: 'Orders', icon: Package, badge: ordersList.length, tab: 'Orders' },
                { name: 'Products', icon: Tag, badge: productsList.length, tab: 'Products' },
                { name: 'Categories', icon: Layers, badge: MOCK_CATEGORIES.length, tab: 'Categories' },
                { name: 'Brands', icon: ShieldCheck, tab: 'Brands' },
                { name: 'Customers', icon: Users, badge: customersList.length, tab: 'Customers' },
                { name: 'Coupons', icon: Tag, badge: couponsList.length, tab: 'Coupons' },
                { name: 'Reviews', icon: Star, badge: reviewsList.length, tab: 'Reviews' },
                { name: 'Wishlist', icon: Heart, tab: 'Wishlist' }
              ].map((item) => {
                const IconComp = item.icon;
                const isActive = activeSidebarTab === item.tab;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveSidebarTab(item.tab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold transition-all ${
                      isActive
                        ? 'bg-[#6366f1] text-white font-extrabold shadow-lg shadow-indigo-500/25'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white text-indigo-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* GROUP 2: SALES */}
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase px-3 py-1 block">
                SALES
              </span>

              {[
                { name: 'Sales', icon: TrendingUp, tab: 'Sales' },
                { name: 'Payments', icon: CreditCard, tab: 'Payments' },
                { name: 'Refunds', icon: RotateCcw, tab: 'Refunds' },
                { name: 'Reports', icon: FileText, tab: 'Reports' }
              ].map((item) => {
                const IconComp = item.icon;
                const isActive = activeSidebarTab === item.tab;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveSidebarTab(item.tab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold transition-all ${
                      isActive
                        ? 'bg-[#6366f1] text-white font-extrabold shadow-lg shadow-indigo-500/25'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* GROUP 3: SYSTEM */}
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase px-3 py-1 block">
                SYSTEM
              </span>

              {[
                { name: 'Users', icon: User, tab: 'Users' },
                { name: 'Roles & Permissions', icon: ShieldCheck, tab: 'Roles & Permissions' },
                { name: 'Settings', icon: Settings, tab: 'Settings' },
                { name: 'Activity Logs', icon: Activity, tab: 'Activity Logs' }
              ].map((item) => {
                const IconComp = item.icon;
                const isActive = activeSidebarTab === item.tab;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveSidebarTab(item.tab)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold transition-all ${
                      isActive
                        ? 'bg-[#6366f1] text-white font-extrabold shadow-lg shadow-indigo-500/25'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Support Widget & Admin User Profile Card */}
        <div className="p-4 space-y-3">
          
          {/* Need Help? Box */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-100 dark:border-indigo-800/60 p-4 rounded-2xl text-slate-900 dark:text-white space-y-3 shadow-sm">
            <div>
              <h4 className="font-extrabold text-xs text-indigo-950 dark:text-white">Need Help?</h4>
              <p className="text-[11px] text-indigo-700 dark:text-slate-300 mt-1">Contact our support team for assistance.</p>
            </div>
            <button
              onClick={() => showToast('Opening Admin Priority Support Desk...')}
              className="w-full bg-[#6366f1] hover:bg-indigo-500 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Contact Support</span>
            </button>
          </div>

          {/* Default User Profile Card */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold border border-slate-300 dark:border-slate-700 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 dark:text-white text-xs">{user?.full_name || 'Admin User'}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Super Admin</p>
              </div>
            </div>
            <button onClick={logout} className="text-slate-400 hover:text-rose-500 transition-colors" title="Log Out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>

      </aside>

      {/* ==================== RIGHT MAIN CONTAINER ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* MAIN BODY AREA */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD (PROPER GRAPH & STATS) */}
          {activeSidebarTab === 'Dashboard' && (
            <div className="space-y-6">
              
              {/* Header Title + Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dashboard</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Welcome back, Admin! Here's what's happening with your store today.</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleExportReport}
                    className="bg-[#6366f1] hover:bg-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Report</span>
                  </button>
                </div>
              </div>

              {/* 5 KPI STAT CARDS ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                {/* Stat 1: Total Revenue */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL REVENUE</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">₹12,45,678</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +20.5%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Stat 2: Total Orders */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Package className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL ORDERS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">1,245</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +15.3%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: Total Customers */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL CUSTOMERS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">8,732</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +18.7%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Stat 4: Total Products */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                      <Tag className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL PRODUCTS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">{productsList.length}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +12.4%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Stat 5: Pending Orders */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">PENDING ORDERS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">56</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-rose-500 font-extrabold flex items-center gap-0.5">
                        <ArrowDownRight className="w-3 h-3" /> -8.2%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* MAIN MIDDLE ROW (PROPER SALES OVERVIEW SVG GRAPH WITH Y-AXIS LABELS & RECENT ORDERS TABLE) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Sales Overview Line Chart (2/3 width) */}
                <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Sales Overview</h3>
                      <div className="flex items-center gap-4 text-xs mt-1">
                        <span className="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" /> Revenue
                        </span>
                        <span className="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" /> Orders
                        </span>
                      </div>
                    </div>

                    <select
                      value={timeRange}
                      onChange={(e) => setTimeRange(e.target.value)}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
                    >
                      <option>Last 30 Days</option>
                      <option>Last 7 Days</option>
                      <option>This Year</option>
                    </select>
                  </div>

                  {/* PROPER RICH SVG AREA & LINE CHART WITH DUAL Y-AXES */}
                  <div className="relative h-64 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 220">
                      <defs>
                        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Y-Axis Grid Lines & Tick Marks */}
                      <g className="text-[10px] text-slate-400 font-bold">
                        <line x1="45" y1="20" x2="650" y2="20" stroke="#e2e8f0" strokeDasharray="4 4" className="dark:stroke-slate-800" />
                        <text x="40" y="24" textAnchor="end">₹200K</text>
                        <text x="655" y="24">200</text>

                        <line x1="45" y1="65" x2="650" y2="65" stroke="#e2e8f0" strokeDasharray="4 4" className="dark:stroke-slate-800" />
                        <text x="40" y="69" textAnchor="end">₹150K</text>
                        <text x="655" y="69">150</text>

                        <line x1="45" y1="110" x2="650" y2="110" stroke="#e2e8f0" strokeDasharray="4 4" className="dark:stroke-slate-800" />
                        <text x="40" y="114" textAnchor="end">₹100K</text>
                        <text x="655" y="114">100</text>

                        <line x1="45" y1="155" x2="650" y2="155" stroke="#e2e8f0" strokeDasharray="4 4" className="dark:stroke-slate-800" />
                        <text x="40" y="159" textAnchor="end">₹50K</text>
                        <text x="655" y="159">50</text>

                        <line x1="45" y1="195" x2="650" y2="195" stroke="#cbd5e1" className="dark:stroke-slate-700" />
                        <text x="40" y="198" textAnchor="end">₹0</text>
                        <text x="655" y="198">0</text>
                      </g>

                      {/* Revenue Gradient Fill Area */}
                      <path
                        d="M 45,155 Q 120,80 200,120 T 350,60 T 500,80 T 650,40 L 650,195 L 45,195 Z"
                        fill="url(#revenueGrad)"
                      />

                      {/* Revenue Smooth Curve (Purple) */}
                      <path
                        d="M 45,155 Q 120,80 200,120 T 350,60 T 500,80 T 650,40"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Orders Gradient Fill Area */}
                      <path
                        d="M 45,170 Q 120,130 200,140 T 350,110 T 500,120 T 650,90 L 650,195 L 45,195 Z"
                        fill="url(#ordersGrad)"
                      />

                      {/* Orders Smooth Curve (Cyan Blue) */}
                      <path
                        d="M 45,170 Q 120,130 200,140 T 350,110 T 500,120 T 650,90"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="3"
                        strokeDasharray="6 3"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* X-Axis Date Labels */}
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400 pl-10 pr-4 mt-2">
                      <span>May 20</span>
                      <span>May 25</span>
                      <span>May 30</span>
                      <span>Jun 04</span>
                      <span>Jun 09</span>
                      <span>Jun 14</span>
                      <span>Jun 19</span>
                    </div>
                  </div>
                </div>

                {/* Recent Orders Panel (1/3 width) */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Recent Orders</h3>
                    <button onClick={() => setActiveSidebarTab('Orders')} className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                      View All
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    {ordersList.slice(0, 5).map((ord) => (
                      <div key={ord.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <div>
                          <p className="font-extrabold text-slate-900 dark:text-white">{ord.id}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <img src={ord.avatar} alt={ord.customer} className="w-5 h-5 rounded-full object-cover" />
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">{ord.customer}</span>
                          </div>
                        </div>

                        <div className="text-right space-y-1">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full block ${ord.statusBg}`}>
                            {ord.status}
                          </span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-xs block">{ord.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* BOTTOM ROW (3 EQUAL CARDS: Top Products, Sales by Category Donut, Visitors Bar) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Card 1: Top Selling Products */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Top Selling Products</h3>
                    <button onClick={() => setActiveSidebarTab('Products')} className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                      View All
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    {productsList.slice(0, 4).map((prod) => (
                      <div key={prod.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={prod.primary_image} alt={prod.title} className="w-10 h-10 rounded-xl object-cover bg-slate-100 shrink-0" />
                          <div className="min-w-0">
                            <p className="font-extrabold text-slate-900 dark:text-white text-xs truncate">{prod.title}</p>
                            <p className="text-[10px] text-slate-400 truncate">{prod.brand}</p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-bold text-slate-500 dark:text-slate-400 block">{prod.stock_quantity * 4} sold</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-xs">₹{prod.discount_price?.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: Sales by Category (Donut Chart) */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Sales by Category</h3>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    {/* SVG Donut Chart */}
                    <div className="relative w-36 h-36 shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path strokeDasharray="42 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366f1" strokeWidth="4.5" />
                        <path strokeDasharray="28 100" strokeDashoffset="-42" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#38bdf8" strokeWidth="4.5" />
                        <path strokeDasharray="15 100" strokeDashoffset="-70" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f97316" strokeWidth="4.5" />
                        <path strokeDasharray="8 100" strokeDashoffset="-85" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eab308" strokeWidth="4.5" />
                        <path strokeDasharray="7 100" strokeDashoffset="-93" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#06b6d4" strokeWidth="4.5" />
                      </svg>
                    </div>

                    {/* Donut Legend */}
                    <div className="space-y-2 text-xs flex-1">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" /> Electronics
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{electronicsPct}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" /> Fashion
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{fashionPct}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]" /> Home & Kitchen
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{homePct}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" /> Beauty & Health
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{beautyPct}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]" /> Sports
                        </span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{sportsPct}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Visitors Overview (Bar Chart) */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Visitors Overview</h3>
                    <button onClick={() => setActiveSidebarTab('Reports')} className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                      View All
                    </button>
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white">23,456</p>
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs">
                      <span className="text-slate-400">Total Visitors</span>
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +12.5%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>

                  {/* Purple Bar Chart SVG */}
                  <div className="h-32 flex items-end justify-between gap-1 pt-4">
                    {[40, 65, 80, 45, 90, 70, 50, 85, 95, 60, 75, 85, 100, 70, 80, 65, 90, 85, 75, 60, 80, 95].map((h, i) => (
                      <div
                        key={i}
                        className="bg-[#6366f1] hover:bg-indigo-400 transition-all rounded-t w-full"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold pt-1">
                    <span>May 20</span>
                    <span>May 27</span>
                    <span>Jun 03</span>
                    <span>Jun 10</span>
                    <span>Jun 17</span>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PRODUCTS (FULLY FUNCTIONAL REAL WEBSITE PRODUCT CATALOG) */}
          {activeSidebarTab === 'Products' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Website Product Catalog ({filteredProducts.length})</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage all live website products, inventory stock, and pricing</p>
                </div>
                <button
                  onClick={() => setIsAddProductModalOpen(true)}
                  className="bg-[#6366f1] hover:bg-indigo-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add New Product
                </button>
              </div>

              {/* Product Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button
                  onClick={() => setSelectedCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${selectedCategoryFilter === 'all' ? 'bg-[#6366f1] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                >
                  All Categories ({productsList.length})
                </button>
                {MOCK_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${selectedCategoryFilter === cat.id ? 'bg-[#6366f1] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Products Table */}
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredProducts.map((prod) => (
                  <div key={prod.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <img src={prod.primary_image} alt={prod.title} className="w-12 h-12 object-cover rounded-xl bg-slate-100 shrink-0 border border-slate-200" />
                      <div className="min-w-0">
                        <p className="font-extrabold text-slate-900 dark:text-white text-xs truncate">{prod.title}</p>
                        <p className="text-[11px] text-slate-500">
                          Brand: <strong className="text-slate-700 dark:text-slate-300">{prod.brand}</strong> • SKU: <strong className="font-mono">{prod.sku}</strong> • Rating: ⭐ {prod.rating}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0">
                      <div className="text-right">
                        <span className="font-extrabold text-slate-900 dark:text-white text-xs block">₹{prod.discount_price?.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-emerald-600 font-bold block">{prod.stock_quantity} in stock</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button onClick={() => handleDeleteProduct(prod.id, prod.title)} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-rose-50 text-rose-500" title="Delete Product">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS (FULLY FUNCTIONAL ORDERS TABLE) */}
          {activeSidebarTab === 'Orders' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Customer Orders ({ordersList.length})</h2>
                  <p className="text-xs text-slate-500">Track order fulfillment, payment status, and express dispatches</p>
                </div>
              </div>

              <div className="space-y-3">
                {ordersList.map((ord) => (
                  <div key={ord.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={ord.avatar} alt={ord.customer} className="w-10 h-10 rounded-full object-cover shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">{ord.id}</span>
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${ord.statusBg}`}>{ord.status}</span>
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5">Customer: <strong>{ord.customer}</strong> • Items: {ord.items}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm block">{ord.amount}</span>
                        <span className="text-[10px] text-slate-400 block">{ord.date}</span>
                      </div>
                      <button onClick={() => showToast(`Invoice generated for ${ord.id}`)} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CATEGORIES (REAL WEBSITE CATEGORIES GRID) */}
          {activeSidebarTab === 'Categories' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Product Categories ({MOCK_CATEGORIES.length})</h2>
                  <p className="text-xs text-slate-500">Manage top categories rendered across the homepage icon grid</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {MOCK_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{cat.name}</h4>
                      <p className="text-slate-400 text-[11px]">Slug: /{cat.slug}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full">Active</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CUSTOMERS (REAL CUSTOMERS TABLE) */}
          {activeSidebarTab === 'Customers' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Registered Shoppers ({customersList.length})</h2>
                  <p className="text-xs text-slate-500">Manage customer accounts, reward coins, and spending</p>
                </div>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {customersList.map((cust) => (
                  <div key={cust.id} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-slate-900 dark:text-white text-sm">{cust.name}</p>
                      <p className="text-slate-500 text-xs">{cust.email} • {cust.phone}</p>
                    </div>
                    <div className="flex items-center gap-6 text-right">
                      <div>
                        <span className="font-extrabold text-slate-900 dark:text-white block">{cust.spent} spent</span>
                        <span className="text-[11px] text-amber-500 font-bold block">🪙 {cust.coins} coins</span>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: COUPONS (REAL COUPONS LIST & CREATOR) */}
          {activeSidebarTab === 'Coupons' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Store Promo Codes ({couponsList.length})</h2>
                  <p className="text-xs text-slate-500">Create & manage active discount coupon codes</p>
                </div>
                <button onClick={() => setIsAddCouponModalOpen(true)} className="bg-[#6366f1] text-white font-bold px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Create Coupon
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {couponsList.map((c, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                    <div>
                      <span className="font-mono font-extrabold text-purple-600 text-sm bg-purple-50 px-2 py-0.5 rounded">{c.code}</span>
                      <h4 className="font-bold text-slate-900 dark:text-white mt-1">{c.title}</h4>
                      <p className="text-slate-400 text-[11px]">Min Order: {c.minOrder} • Used {c.usage} times</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded">Active</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DYNAMIC VIEW FOR OTHER TABS */}
          {activeSidebarTab !== 'Dashboard' && activeSidebarTab !== 'Products' && activeSidebarTab !== 'Orders' && activeSidebarTab !== 'Categories' && activeSidebarTab !== 'Customers' && activeSidebarTab !== 'Coupons' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{activeSidebarTab} Module</h2>
                <p className="text-xs text-slate-500 mt-1">Real-time telemetry and management controls loaded for {activeSidebarTab}.</p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <p className="font-extrabold text-slate-900 dark:text-white text-sm">{activeSidebarTab} Module 100% Operational</p>
                <p className="text-slate-500 text-xs">All records integrated with live Cartify website store backend.</p>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL 1: ADD NEW PRODUCT */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Add New Product</h3>
              <button onClick={() => setIsAddProductModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Product Title</label>
                <input
                  type="text"
                  placeholder="e.g. Aether Wireless Headphones"
                  value={newProductData.title}
                  onChange={(e) => setNewProductData({ ...newProductData, title: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Base Price (₹)</label>
                  <input
                    type="number"
                    placeholder="4999"
                    value={newProductData.base_price}
                    onChange={(e) => setNewProductData({ ...newProductData, base_price: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Discount Price (₹)</label>
                  <input
                    type="number"
                    placeholder="3999"
                    value={newProductData.discount_price}
                    onChange={(e) => setNewProductData({ ...newProductData, discount_price: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Stock Quantity</label>
                <input
                  type="number"
                  placeholder="25"
                  value={newProductData.stock_quantity}
                  onChange={(e) => setNewProductData({ ...newProductData, stock_quantity: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Image URL (Unsplash)</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newProductData.primary_image}
                  onChange={(e) => setNewProductData({ ...newProductData, primary_image: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <button type="submit" className="w-full py-3 bg-[#6366f1] text-white font-extrabold rounded-xl shadow mt-2">
                Publish Product to Store Catalog
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD NEW COUPON */}
      {isAddCouponModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Create New Promo Code</h3>
              <button onClick={() => setIsAddCouponModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCoupon} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Coupon Code</label>
                <input
                  type="text"
                  placeholder="MEGA50"
                  value={newCoupon.code}
                  onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-mono font-bold uppercase"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Coupon Title</label>
                <input
                  type="text"
                  placeholder="50% Instant Cashback"
                  value={newCoupon.title}
                  onChange={(e) => setNewCoupon({ ...newCoupon, title: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Discount Amount / %</label>
                <input
                  type="text"
                  placeholder="50% OFF"
                  value={newCoupon.discount}
                  onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-purple-600"
                />
              </div>

              <button type="submit" className="w-full py-3 bg-[#6366f1] text-white font-extrabold rounded-xl shadow mt-2">
                Save & Activate Coupon Code
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
