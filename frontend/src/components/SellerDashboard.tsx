import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Store,
  User as UserIcon,
  Package,
  Heart,
  Wallet,
  ShieldCheck,
  LogOut,
  Sparkles,
  MapPin,
  CreditCard,
  CheckCircle2,
  Lock,
  Crown,
  Edit3,
  Plus,
  ChevronRight,
  Truck,
  Clock,
  Award,
  Layers,
  Star,
  Tag,
  Bell,
  Settings,
  Gift,
  Trash2,
  ShoppingBag,
  Eye,
  EyeOff,
  X,
  Check,
  Copy,
  Download,
  RotateCcw,
  PlusCircle,
  Phone,
  Mail,
  SlidersHorizontal,
  FileText,
  Share2,
  DollarSign,
  TrendingUp,
  Building
} from 'lucide-react';
import { Product } from '../types';

export const SellerDashboard: React.FC = () => {
  const { user, logout } = useStore();
  const [activeSidebarTab, setActiveSidebarTab] = useState('Overview');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Store Profile Info State
  const [storeData, setStoreData] = useState({
    storeName: user?.full_name || 'TechHub Electronics Store',
    ownerName: 'Vedant Pawar',
    email: user?.email || 'vedant.seller@cartify.com',
    phone: '+91 98765 43210',
    gstin: '29AAAAA0000A1Z5',
    category: 'Electronics & Mobiles',
    bankAccount: 'HDFC Bank ••••••9840',
    ifsc: 'HDFC0000240'
  });

  // Seller Inventory State
  const [sellerProducts, setSellerProducts] = useState<Partial<Product>[]>([
    {
      id: 101,
      title: 'AetherPro M3 Max Laptop 16"',
      category_id: 1,
      base_price: 189999,
      discount_price: 169999,
      stock_quantity: 15,
      is_in_stock: true,
      rating: 4.9,
      review_count: 84,
      primary_image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop&q=80'
    },
    {
      id: 102,
      title: 'SonicPulse ANC Wireless Headphones',
      category_id: 1,
      base_price: 14999,
      discount_price: 11999,
      stock_quantity: 42,
      is_in_stock: true,
      rating: 4.8,
      review_count: 120,
      primary_image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80'
    },
    {
      id: 103,
      title: 'ChronoPulse Titanium Smartwatch',
      category_id: 1,
      base_price: 4390,
      discount_price: 3863,
      stock_quantity: 22,
      is_in_stock: true,
      rating: 4.4,
      review_count: 64,
      primary_image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80'
    },
    {
      id: 104,
      title: 'ApexTech Tandem OLED Tablet',
      category_id: 1,
      base_price: 5340,
      discount_price: 4645,
      stock_quantity: 18,
      is_in_stock: true,
      rating: 4.5,
      review_count: 71,
      primary_image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&auto=format&fit=crop&q=80'
    }
  ]);

  // Seller Orders State
  const [sellerOrders, setSellerOrders] = useState([
    {
      id: 'ORD-98402',
      customer: 'Rahul Sharma',
      address: '123 Green Park, Sector 45, Gurugram, HR',
      product: 'AetherPro M3 Max Laptop',
      qty: 1,
      amount: '₹1,69,999',
      date: '12 May 2024',
      status: 'Pending Dispatch',
      statusBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 'ORD-98399',
      customer: 'Priya Patel',
      address: 'Bandra West, Mumbai, MH',
      product: 'SonicPulse ANC Headphones',
      qty: 2,
      amount: '₹23,998',
      date: '10 May 2024',
      status: 'Dispatched',
      statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 'ORD-98395',
      customer: 'Amit Verma',
      address: 'Indiranagar, Bengaluru, KA',
      product: 'ChronoPulse Titanium Smartwatch',
      qty: 1,
      amount: '₹3,863',
      date: '05 May 2024',
      status: 'Delivered',
      statusBg: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80'
    }
  ]);

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProd, setNewProd] = useState({
    title: '',
    category: 'Electronics & Mobiles',
    price: '',
    discount_price: '',
    stock: '15',
    image: ''
  });

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.title || !newProd.price) {
      showToast('Please provide product title and price.');
      return;
    }
    const item: Partial<Product> = {
      id: Date.now(),
      title: newProd.title,
      base_price: Number(newProd.price),
      discount_price: newProd.discount_price ? Number(newProd.discount_price) : Number(newProd.price),
      stock_quantity: Number(newProd.stock) || 10,
      is_in_stock: true,
      rating: 5.0,
      review_count: 1,
      primary_image: newProd.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80'
    };

    setSellerProducts([item, ...sellerProducts]);
    setIsAddModalOpen(false);
    setNewProd({ title: '', category: 'Electronics & Mobiles', price: '', discount_price: '', stock: '15', image: '' });
    showToast('New product published live on Cartify marketplace!');
  };

  const handleDispatchOrder = (ordId: string) => {
    setSellerOrders(sellerOrders.map(o => o.id === ordId ? { ...o, status: 'Dispatched', statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' } : o));
    showToast(`Order #${ordId} marked as Dispatched!`);
  };

  const handleSaveStoreProfile = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Seller store profile information updated successfully!');
  };

  const SIDEBAR_ITEMS = [
    { name: 'Overview', icon: Store, tab: 'Overview' },
    { name: 'Store Profile Information', icon: UserIcon, tab: 'Store Profile Information' },
    { name: 'Product Inventory & Listings', icon: Layers, badge: sellerProducts.length, tab: 'Product Inventory & Listings' },
    { name: 'Customer Orders', icon: Package, badge: sellerOrders.filter(o => o.status.includes('Pending')).length, tab: 'Customer Orders' },
    { name: 'Sales & Revenue Analytics', icon: DollarSign, tab: 'Sales & Revenue Analytics' },
    { name: 'Payout Wallet & Banking', icon: Wallet, tab: 'Payout Wallet & Banking' },
    { name: 'Customer Reviews & Ratings', icon: Star, tab: 'Customer Reviews & Ratings' },
    { name: 'Store Coupons & Offers', icon: Tag, tab: 'Store Coupons & Offers' },
    { name: 'Store Settings', icon: Settings, tab: 'Store Settings' },
    { name: 'Change Password', icon: Lock, tab: 'Change Password' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-6 text-slate-800 dark:text-slate-100 relative">
      
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 rounded-2xl shadow-2xl border border-purple-500 flex items-center gap-3 text-xs font-extrabold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-purple-400 dark:text-purple-600" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Vertical Sidebar ("SELLER ACCOUNT") */}
          <div className="lg:col-span-3 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-3 shadow-sm space-y-1">
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 px-3 py-2 block">
                SELLER ACCOUNT
              </span>

              {SIDEBAR_ITEMS.map((item, idx) => {
                const IconComp = item.icon;
                const isActive = activeSidebarTab === item.tab;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSidebarTab(item.tab)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-bold border-l-4 border-purple-600'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="bg-purple-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors pt-2 border-t border-slate-100 dark:border-slate-800"
              >
                <LogOut className="w-4 h-4 text-rose-500" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Seller Support Card */}
            <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40 p-5 rounded-2xl border border-purple-200 dark:border-purple-800/50 space-y-3 relative overflow-hidden">
              <div className="space-y-1">
                <h4 className="font-extrabold text-purple-900 dark:text-purple-200 text-sm">Cartify Merchant Care</h4>
                <p className="text-[11px] text-purple-700 dark:text-purple-300">Dedicated 24/7 Seller Relationship Manager</p>
              </div>
              <button
                onClick={() => showToast('Connecting to Seller Account Manager...')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Manager
              </button>
            </div>

          </div>

          {/* Right Main Content Area (Dynamic based on activeSidebarTab) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* TAB 1: OVERVIEW */}
            {activeSidebarTab === 'Overview' && (
              <div className="space-y-6">
                
                {/* Store Profile Header & 4 Stat Cards Row */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                  
                  {/* Store Info Left */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center border-2 border-purple-500 shadow-inner font-extrabold text-2xl">
                        <Store className="w-10 h-10 text-amber-300" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-purple-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{storeData.storeName}</h2>
                        <span className="bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Verified Seller
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {storeData.email} • {storeData.phone}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        GSTIN: {storeData.gstin} • Member since Jan 2023
                      </p>

                      <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                        <Crown className="w-4 h-4 fill-amber-400 text-amber-500" />
                        <span>Platinum Merchant Badge</span>
                        <span className="text-[11px] text-slate-400 font-normal ml-1">4.9 ★ (98% Positive Feedback)</span>
                      </div>
                    </div>
                  </div>

                  {/* Stat Cards Right */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full xl:w-auto">
                    
                    <button onClick={() => setActiveSidebarTab('Sales & Revenue Analytics')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold block pt-1">Total Net Sales</span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">₹3,48,500</p>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">+18.4% growth</span>
                    </button>

                    <button onClick={() => setActiveSidebarTab('Customer Orders')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center">
                        <Package className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold block pt-1">Total Orders</span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">1,420</p>
                      <span className="text-[10px] text-amber-600 font-bold block">1 pending dispatch</span>
                    </button>

                    <button onClick={() => setActiveSidebarTab('Product Inventory & Listings')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold block pt-1">Active Products</span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">{sellerProducts.length}</p>
                      <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold block">View catalog</span>
                    </button>

                    <button onClick={() => setActiveSidebarTab('Payout Wallet & Banking')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
                        <Wallet className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold block pt-1">Payout Wallet</span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">₹25,000</p>
                      <span className="text-[10px] text-emerald-600 font-bold block">Instant payout ready</span>
                    </button>

                  </div>

                </div>

                {/* Middle Section (Recent Customer Orders & Listed Inventory) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Recent Customer Orders Panel */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Recent Customer Orders</h3>
                      <button onClick={() => setActiveSidebarTab('Customer Orders')} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                        View All Orders
                      </button>
                    </div>

                    <div className="space-y-3">
                      {sellerOrders.map((ord) => (
                        <div key={ord.id} onClick={() => setActiveSidebarTab('Customer Orders')} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors border border-transparent hover:border-slate-200/60 text-xs cursor-pointer">
                          <div className="flex items-center gap-3">
                            <img src={ord.image} alt={ord.product} className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 dark:border-slate-800 shrink-0" />
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white line-clamp-1">{ord.product}</p>
                              <p className="text-[11px] text-slate-400">Order #{ord.id} • Buyer: {ord.customer}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-right">
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${ord.statusBg}`}>
                              {ord.status}
                            </span>
                            <span className="font-extrabold text-slate-900 dark:text-white">{ord.amount}</span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Store Inventory Panel */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Store Inventory ({sellerProducts.length} Items)</h3>
                      <button onClick={() => setIsAddModalOpen(true)} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-1">
                        <Plus className="w-3.5 h-3.5" /> Add Product
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      {sellerProducts.map((prod) => (
                        <div key={prod.id} className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <img src={prod.primary_image} alt={prod.title} className="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0" />
                            <div className="min-w-0">
                              <p className="font-extrabold text-slate-900 dark:text-white truncate">{prod.title}</p>
                              <p className="text-slate-500 text-[11px]">Stock: <strong className="text-emerald-600">{prod.stock_quantity} available</strong></p>
                            </div>
                          </div>
                          <span className="font-extrabold text-slate-900 dark:text-white">₹{prod.discount_price?.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: STORE PROFILE INFORMATION */}
            {activeSidebarTab === 'Store Profile Information' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Store Profile & GSTIN Business Info</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Update your merchant legal identity and contact details</p>
                </div>

                <form onSubmit={handleSaveStoreProfile} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Store Brand Name</label>
                      <input
                        type="text"
                        value={storeData.storeName}
                        onChange={(e) => setStoreData({ ...storeData, storeName: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">GSTIN Business Registration Number</label>
                      <input
                        type="text"
                        value={storeData.gstin}
                        onChange={(e) => setStoreData({ ...storeData, gstin: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-mono font-bold uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Business Email Address</label>
                      <input
                        type="email"
                        value={storeData.email}
                        onChange={(e) => setStoreData({ ...storeData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Owner Contact Phone</label>
                      <input
                        type="text"
                        value={storeData.phone}
                        onChange={(e) => setStoreData({ ...storeData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2.5 rounded-xl shadow transition-colors"
                  >
                    Save Store Profile Changes
                  </button>
                </form>
              </div>
            )}

            {/* TAB 3: PRODUCT INVENTORY & LISTINGS */}
            {activeSidebarTab === 'Product Inventory & Listings' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Store Catalog & Inventory Management</h3>
                    <p className="text-xs text-slate-500">Manage live items, prices, and stock levels</p>
                  </div>
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add New Product
                  </button>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                  {sellerProducts.map((prod) => (
                    <div key={prod.id} className="py-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <img src={prod.primary_image} alt={prod.title} className="w-14 h-14 object-cover rounded-xl bg-slate-100 shrink-0 border border-slate-200" />
                        <div className="min-w-0">
                          <p className="font-extrabold text-slate-900 dark:text-white text-sm truncate">{prod.title}</p>
                          <p className="text-slate-500 text-xs">
                            Stock: <strong className="text-emerald-600 font-bold">{prod.stock_quantity} available</strong> • Rating: ⭐ {prod.rating}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 shrink-0">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm">₹{prod.discount_price?.toLocaleString('en-IN')}</span>
                        <div className="flex items-center gap-2">
                          <button onClick={() => showToast(`Edit mode for ${prod.title}`)} className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button onClick={() => { setSellerProducts(sellerProducts.filter(p => p.id !== prod.id)); showToast(`Deleted #${prod.id}`); }} className="p-2 rounded-xl border border-slate-200 hover:bg-rose-50 text-rose-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: CUSTOMER ORDERS */}
            {activeSidebarTab === 'Customer Orders' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Customer Fulfillment Orders</h3>
                  <p className="text-xs text-slate-500">Orders requiring dispatch & shipping labels</p>
                </div>

                <div className="space-y-4 text-xs">
                  {sellerOrders.map((ord) => (
                    <div key={ord.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">Order #{ord.id}</span>
                          <p className="text-slate-500 text-[11px]">Placed on {ord.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full font-extrabold text-[10px] ${ord.statusBg}`}>
                          {ord.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-200">{ord.product} (Qty: {ord.qty})</p>
                          <p className="text-slate-500 text-[11px]">Buyer: {ord.customer} • Address: {ord.address}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm block">{ord.amount}</span>
                          {ord.status !== 'Dispatched' && (
                            <button onClick={() => handleDispatchOrder(ord.id)} className="mt-1 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-[10px] px-3 py-1.5 rounded-xl shadow">
                              Dispatch Order
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: SALES & REVENUE ANALYTICS */}
            {activeSidebarTab === 'Sales & Revenue Analytics' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Sales & Revenue Breakdown</h3>
                  <p className="text-xs text-slate-500">Gross Sales vs Cartify Marketplace Fees</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-slate-400 font-semibold">Gross Sales Value</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white">₹3,58,800</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-slate-400 font-semibold">Marketplace Commission (2.5%)</span>
                    <p className="text-xl font-extrabold text-rose-500">-₹10,300</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-slate-400 font-semibold">Net Disbursed Revenue</span>
                    <p className="text-xl font-extrabold text-emerald-500">₹3,48,500</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: PAYOUT WALLET & BANKING */}
            {activeSidebarTab === 'Payout Wallet & Banking' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Seller Payout Wallet & Bank Account</h3>
                  <p className="text-xs text-slate-500">HDFC Bank payout destination: {storeData.bankAccount}</p>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-purple-300 uppercase tracking-widest font-extrabold block">Seller Wallet Balance</span>
                    <p className="text-3xl font-extrabold mt-1">₹25,000</p>
                    <button onClick={() => showToast('Instant withdrawal initiated to HDFC Bank!')} className="mt-3 bg-white text-slate-950 text-xs font-extrabold px-5 py-2 rounded-xl shadow hover:bg-slate-100">
                      Withdraw to Bank Account
                    </button>
                  </div>
                  <Wallet className="w-12 h-12 text-purple-300 opacity-80" />
                </div>
              </div>
            )}

            {/* TAB 7: CUSTOMER REVIEWS */}
            {activeSidebarTab === 'Customer Reviews & Ratings' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Customer Feedback on Your Products</h3>
                  <p className="text-xs text-slate-500">Overall Store Rating: 4.9 ★ out of 5</p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900 dark:text-white">Rahul S. - Buyer of AetherPro M3 Max Laptop</span>
                    <div className="flex text-amber-400">★★★★★</div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">"Authentic product delivered with original warranty invoice within 24 hours. Great seller!"</p>
                </div>
              </div>
            )}

            {/* TAB 8: STORE COUPONS */}
            {activeSidebarTab === 'Store Coupons & Offers' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Seller Store Coupon Codes</h3>
                  <p className="text-xs text-slate-500">Create promotional discount codes for your customers</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white space-y-2 max-w-sm">
                  <span className="font-mono font-extrabold text-sm border border-white/30 px-3 py-1 rounded-lg bg-black/20">SELLER15</span>
                  <h4 className="font-extrabold text-sm">15% Instant Store Discount</h4>
                  <p className="text-xs text-white/80">Valid on all items in {storeData.storeName}</p>
                </div>
              </div>
            )}

            {/* TAB 9: STORE SETTINGS */}
            {activeSidebarTab === 'Store Settings' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Merchant Operations & Shipping Rules</h3>
                  <p className="text-xs text-slate-500">Configure order dispatch SLA and return policy</p>
                </div>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Dispatch SLA (Days)</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
                      <option>Same Day Dispatch (Cutoff 2 PM)</option>
                      <option>1 Business Day</option>
                      <option>2 Business Days</option>
                    </select>
                  </div>

                  <button onClick={() => showToast('Store settings saved.')} className="bg-purple-600 text-white font-bold px-5 py-2.5 rounded-xl shadow">
                    Save Settings
                  </button>
                </div>
              </div>
            )}

            {/* TAB 10: CHANGE PASSWORD */}
            {activeSidebarTab === 'Change Password' && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Change Seller Account Password</h3>
                  <p className="text-xs text-slate-500">Secure your seller store credentials</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); showToast('Password updated.'); }} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium" />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium" />
                  </div>
                  <button type="submit" className="bg-purple-600 text-white font-bold px-6 py-2.5 rounded-xl shadow">
                    Update Password
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* MODAL: ADD NEW PRODUCT */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Add New Product Listing</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Product Title</label>
                <input
                  type="text"
                  placeholder="e.g. UltraFit Wireless Earbuds"
                  value={newProd.title}
                  onChange={(e) => setNewProd({ ...newProd, title: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Base Price (₹)</label>
                  <input
                    type="number"
                    placeholder="4999"
                    value={newProd.price}
                    onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Discount Price (₹)</label>
                  <input
                    type="number"
                    placeholder="3999"
                    value={newProd.discount_price}
                    onChange={(e) => setNewProd({ ...newProd, discount_price: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Stock Quantity</label>
                <input
                  type="number"
                  placeholder="25"
                  value={newProd.stock}
                  onChange={(e) => setNewProd({ ...newProd, stock: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Image URL (Unsplash)</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newProd.image}
                  onChange={(e) => setNewProd({ ...newProd, image: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <button type="submit" className="w-full py-3 bg-purple-600 text-white font-extrabold rounded-xl shadow mt-2">
                Publish Product to Cartify Marketplace
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
