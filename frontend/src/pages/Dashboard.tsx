import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { AuthPage } from './AuthPage';
import { SellerDashboard } from '../components/SellerDashboard';
import { AdminDashboard } from '../components/AdminDashboard';
import {
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
  Share2
} from 'lucide-react';

const INITIAL_ORDERS = [
  {
    id: 'ORD-12345',
    title: 'boAt Noise Cancelling Headphones',
    date: '12 May 2024',
    status: 'Delivered',
    statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
    price: '₹2,499',
    rawPrice: 2499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'ORD-12344',
    title: 'Apple iPhone 15 (128GB)',
    date: '10 May 2024',
    status: 'Delivered',
    statusBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
    price: '₹69,900',
    rawPrice: 69900,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'ORD-12343',
    title: "Nike Air Max Excee Men's Shoes",
    date: '05 May 2024',
    status: 'Shipped',
    statusBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
    price: '₹4,795',
    rawPrice: 4795,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'ORD-12342',
    title: 'Skybags Casual Backpack',
    date: '01 May 2024',
    status: 'Cancelled',
    statusBg: 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    price: '₹899',
    rawPrice: 899,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&auto=format&fit=crop&q=80'
  }
];

const INITIAL_ADDRESSES = [
  {
    id: 1,
    type: 'Home',
    name: 'Rahul Sharma',
    street: '123, Green Park, Sector 45',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122003',
    country: 'India',
    phone: '+91 98765 43210',
    isDefault: true
  },
  {
    id: 2,
    type: 'Work',
    name: 'Rahul Sharma',
    street: 'Cartify Pvt. Ltd., DLF Cyber City',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122002',
    country: 'India',
    phone: '+91 98765 43210',
    isDefault: false
  }
];

const INITIAL_WISHLIST = [
  {
    id: 101,
    name: 'Samsung Galaxy S24 (256GB)',
    price: '₹64,999',
    rawPrice: 64999,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 102,
    name: 'boAt Lunar Connect Ace Smartwatch',
    price: '₹2,199',
    rawPrice: 2199,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 103,
    name: 'ASUS TUF Gaming F15 Laptop',
    price: '₹75,990',
    rawPrice: 75990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 104,
    name: 'Puma Future Rider Play Sneakers',
    price: '₹3,499',
    rawPrice: 3499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 105,
    name: 'Wildcraft Laptop Backpack',
    price: '₹1,299',
    rawPrice: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80'
  }
];

const INITIAL_RECENTLY_VIEWED = [
  {
    id: 201,
    name: 'Sony WH-CH720N Headphones',
    price: '₹8,990',
    rawPrice: 8990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 202,
    name: 'iQOO Neo 9 Pro 5G',
    price: '₹35,999',
    rawPrice: 35999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 203,
    name: 'LEGO Technic McLaren',
    price: '₹19,999',
    rawPrice: 19999,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&auto=format&fit=crop&q=80'
  }
];

const RECOMMENDED_PRODUCTS = [
  {
    id: 301,
    name: 'Apple iPhone 15 Pro Max',
    price: '₹1,34,900',
    rawPrice: 134900,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 302,
    name: 'MacBook Air M3 Chip',
    price: '₹1,14,900',
    rawPrice: 114900,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 303,
    name: 'Samsung Galaxy Watch 6',
    price: '₹28,999',
    rawPrice: 28999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 304,
    name: 'Sony PlayStation 5 Console',
    price: '₹54,990',
    rawPrice: 54990,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 305,
    name: 'Bose QuietComfort 45',
    price: '₹29,900',
    rawPrice: 29900,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80'
  }
];

const INITIAL_COUPONS = [
  {
    code: 'WELCOME100',
    title: 'Flat ₹100 Off on First Order',
    desc: 'Valid on minimum order value of ₹499',
    expires: '31 Dec 2026',
    bg: 'from-purple-600 to-indigo-600'
  },
  {
    code: 'CARTIFY20',
    title: '20% Instant Discount',
    desc: 'Max discount up to ₹1,500 on Electronics & Mobiles',
    expires: '15 Aug 2026',
    bg: 'from-blue-600 to-cyan-600'
  },
  {
    code: 'FREESHIP',
    title: 'Free Express Shipping',
    desc: 'No minimum order required across India',
    expires: '30 Nov 2026',
    bg: 'from-emerald-600 to-teal-600'
  }
];

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser, logout, addToCart, authenticateUser } = useStore();

  const [activeSidebarTab, setActiveSidebarTab] = useState('Overview');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState('rahul.sharma@email.com');
  const [loginPassword, setLoginPassword] = useState('Customer123!');
  const [loginError, setLoginError] = useState('');

  // Profile Form States
  const [profileData, setProfileData] = useState({
    fullName: user ? user.full_name : 'Rahul Sharma',
    email: user ? user.email : 'rahul.sharma@email.com',
    phone: '+91 98765 43210',
    gender: 'Male',
    dob: '1996-08-15'
  });

  // Password States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Addresses State
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'Home',
    name: 'Rahul Sharma',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: '+91 98765 43210'
  });

  // Wallet State
  const [walletBalance, setWalletBalance] = useState(350);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [addAmount, setAddAmount] = useState('500');

  // Wishlist State
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);

  // Recently Viewed State
  const [recentlyViewed, setRecentlyViewed] = useState(INITIAL_RECENTLY_VIEWED);

  // Notification Preferences Toggles
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    orders: true,
    offers: true,
    whatsapp: false
  });

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({ ...user, full_name: profileData.fullName, email: profileData.email }, 'cartify_demo_jwt_token_2026');
    }
    showToast('Personal information updated successfully!');
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      showToast('Please fill in all password fields.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      showToast('New passwords do not match!');
      return;
    }
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    showToast('Password changed successfully!');
  };

  const handleAddAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddress.street || !newAddress.city || !newAddress.pincode) {
      showToast('Please enter complete street, city & pincode.');
      return;
    }
    const item = {
      id: Date.now(),
      type: newAddress.type,
      name: newAddress.name,
      street: newAddress.street,
      city: newAddress.city,
      state: newAddress.state || 'Haryana',
      pincode: newAddress.pincode,
      country: 'India',
      phone: newAddress.phone,
      isDefault: addresses.length === 0
    };
    setAddresses([...addresses, item]);
    setIsAddressModalOpen(false);
    setNewAddress({ type: 'Home', name: 'Rahul Sharma', street: '', city: '', state: '', pincode: '', phone: '+91 98765 43210' });
    showToast('New delivery address added successfully!');
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter(a => a.id !== id));
    showToast('Address removed.');
  };

  const handleSetDefaultAddress = (id: number) => {
    setAddresses(addresses.map(a => ({ ...a, isDefault: a.id === id })));
    showToast('Default delivery address updated.');
  };

  const handleAddWalletMoney = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(addAmount) || 0;
    if (val <= 0) return;
    setWalletBalance(prev => prev + val);
    setIsWalletModalOpen(false);
    showToast(`Successfully added ₹${val} to Cartify Cash balance!`);
  };

  const handleRemoveWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(i => i.id !== id));
    showToast('Item removed from Wishlist.');
  };

  const handleAddToCartItem = (item: { id: number; name: string; rawPrice: number; image: string }) => {
    addToCart({
      id: item.id,
      title: item.name,
      slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      sku: `SKU-${item.id}`,
      brand: 'Generic',
      category_id: 1,
      seller_id: 1,
      short_description: item.name,
      description: item.name,
      highlights: ['Official Brand Warranty'],
      base_price: item.rawPrice,
      discount_price: item.rawPrice,
      discount_percentage: 0,
      stock_quantity: 10,
      is_in_stock: true,
      is_featured: false,
      is_trending: true,
      is_flash_sale: false,
      rating: 4.8,
      review_count: 120,
      primary_image: item.image,
      gallery_images: [item.image],
      images_360: [],
      warranty_info: '1 Year Warranty',
      return_policy: '7 Days Return',
      estimated_delivery_days: 2,
      specs: [],
      variants: [],
      faqs: []
    });
    showToast(`Added "${item.name}" to Cart!`);
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast(`Coupon code ${code} copied to clipboard!`);
  };

  const handleInviteFriends = () => {
    navigator.clipboard.writeText('https://cartify.app/invite?ref=RAHUL200');
    showToast('Invite link copied! Share with friends to earn ₹200.');
  };

  const userName = user ? user.full_name : profileData.fullName;
  const userEmail = user ? user.email : profileData.email;

  const SIDEBAR_ITEMS = [
    { name: 'Overview', icon: UserIcon, tab: 'Overview' },
    { name: 'Personal Information', icon: UserIcon, tab: 'Personal Information' },
    { name: 'Addresses', icon: MapPin, tab: 'Addresses' },
    { name: 'My Orders', icon: Package, tab: 'My Orders' },
    { name: 'Wishlist', icon: Heart, badge: wishlistItems.length, tab: 'Wishlist' },
    { name: 'Recently Viewed', icon: Clock, tab: 'Recently Viewed' },
    { name: 'Compare', icon: Layers, badge: 2, tab: 'Compare' },
    { name: 'Reviews & Ratings', icon: Star, tab: 'Reviews & Ratings' },
    { name: 'Coupons & Offers', icon: Tag, tab: 'Coupons & Offers' },
    { name: 'My Wallet', icon: Wallet, tab: 'My Wallet' },
    { name: 'Saved Cards', icon: CreditCard, tab: 'Saved Cards' },
    { name: 'Notification Preferences', icon: Bell, tab: 'Notification Preferences' },
    { name: 'Account Settings', icon: Settings, tab: 'Account Settings' },
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
        
        {!user ? (
          <AuthPage />
        ) : user.role === 'admin' ? (
          <AdminDashboard />
        ) : user.role === 'seller' ? (
          <SellerDashboard />
        ) : (
          /* Customer Profile Page Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Vertical Sidebar ("MY ACCOUNT") */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-3 shadow-sm space-y-1">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 px-3 py-2 block">
                  MY ACCOUNT
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
                      {item.badge !== undefined && (
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

              {/* Invite Friends & Earn Card */}
              <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40 p-5 rounded-2xl border border-purple-200 dark:border-purple-800/50 space-y-3 relative overflow-hidden">
                <div className="space-y-1">
                  <h4 className="font-extrabold text-purple-900 dark:text-purple-200 text-sm">Invite Friends & Earn</h4>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300">Invite your friends and earn <strong className="font-extrabold">₹200 Cartify Cash</strong></p>
                </div>
                <button
                  onClick={handleInviteFriends}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" /> Invite Now
                </button>
              </div>

            </div>

            {/* Right Main Content Area (Dynamic based on activeSidebarTab) */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* TAB 1: OVERVIEW (Default Dashboard Layout) */}
              {activeSidebarTab === 'Overview' && (
                <div className="space-y-6">
                  {/* Profile Header & 4 Stat Cards Row */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                    
                    {/* Profile Info Left */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner">
                          <UserIcon className="w-10 h-10 text-slate-500 dark:text-slate-400 stroke-[1.8]" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-purple-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[10px]">
                          ✓
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{userName}</h2>
                          <span className="bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {userEmail} • +91 98765 43210
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Member since Jan 2023
                        </p>

                        <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                          <Crown className="w-4 h-4 fill-amber-400 text-amber-500" />
                          <span>Gold Member</span>
                          <span className="text-[11px] text-slate-400 font-normal ml-1">You are saving more with Gold Membership!</span>
                        </div>
                      </div>
                    </div>

                    {/* Stat Cards Right */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full xl:w-auto">
                      
                      <button onClick={() => setActiveSidebarTab('My Orders')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center">
                          <Package className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold block pt-1">Total Orders</span>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">24</p>
                        <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold block">View all orders</span>
                      </button>

                      <Link to="/cart" className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold block pt-1">Cart Value</span>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">₹12,450</p>
                        <span className="text-[10px] text-slate-400 font-medium block">3 items in cart</span>
                      </Link>

                      <button onClick={() => setActiveSidebarTab('Wishlist')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center">
                          <Heart className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold block pt-1">Wishlist</span>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">{wishlistItems.length}</p>
                        <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold block">View wishlist</span>
                      </button>

                      <button onClick={() => setActiveSidebarTab('My Wallet')} className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1 text-left hover:border-purple-500 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
                          <Wallet className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold block pt-1">Cartify Cash</span>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">₹{walletBalance}</p>
                        <span className="text-[10px] text-slate-400 font-medium block">Available Balance</span>
                      </button>

                    </div>

                  </div>

                  {/* Middle Section (Recent Orders & Addresses) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Recent Orders Panel */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Recent Orders</h3>
                        <button onClick={() => setActiveSidebarTab('My Orders')} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                          View All Orders
                        </button>
                      </div>

                      <div className="space-y-3">
                        {INITIAL_ORDERS.map((order, idx) => (
                          <div key={idx} onClick={() => setActiveSidebarTab('My Orders')} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors border border-transparent hover:border-slate-200/60 text-xs cursor-pointer">
                            <div className="flex items-center gap-3">
                              <img src={order.image} alt={order.title} className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 dark:border-slate-800 shrink-0" />
                              <div>
                                <p className="font-bold text-slate-900 dark:text-white line-clamp-1">{order.title}</p>
                                <p className="text-[11px] text-slate-400">Order #{order.id} • {order.date}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-right">
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${order.statusBg}`}>
                                {order.status}
                              </span>
                              <span className="font-extrabold text-slate-900 dark:text-white">{order.price}</span>
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Saved Addresses Panel */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Saved Addresses</h3>
                        <button onClick={() => setActiveSidebarTab('Addresses')} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                          Manage Addresses
                        </button>
                      </div>

                      <div className="space-y-3 text-xs">
                        {addresses.map((addr) => (
                          <div key={addr.id} className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2 relative">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${addr.isDefault ? 'bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
                                {addr.type} {addr.isDefault && '• Default'}
                              </span>
                              <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
                                <button onClick={() => setActiveSidebarTab('Addresses')} className="hover:text-purple-600 flex items-center gap-1"><Edit3 className="w-3 h-3" /> Edit</button>
                                <button onClick={() => handleDeleteAddress(addr.id)} className="hover:text-rose-500 flex items-center gap-1"><Trash2 className="w-3 h-3" /> Delete</button>
                              </div>
                            </div>
                            <div>
                              <p className="font-extrabold text-slate-900 dark:text-white">{addr.name}</p>
                              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                                {addr.street}, {addr.city}, {addr.state} - {addr.pincode}, {addr.country} • {addr.phone}
                              </p>
                            </div>
                          </div>
                        ))}

                        <button onClick={() => setIsAddressModalOpen(true)} className="w-full py-2.5 rounded-xl border border-dashed border-purple-300 dark:border-purple-800 text-purple-600 dark:text-purple-400 font-extrabold text-xs flex items-center justify-center gap-1.5 hover:bg-purple-50/50 dark:hover:bg-purple-950/20 transition-colors">
                          <Plus className="w-4 h-4" /> Add New Address
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Lower Section (Wishlist & Recently Viewed) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Wishlist Panel */}
                    <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Wishlist ({wishlistItems.length} Items)</h3>
                        <button onClick={() => setActiveSidebarTab('Wishlist')} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                          View Wishlist
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {wishlistItems.slice(0, 5).map((item) => (
                          <div key={item.id} className="group border border-slate-200/60 dark:border-slate-800 p-2 rounded-xl bg-slate-50/50 dark:bg-slate-950 space-y-2 flex flex-col justify-between relative">
                            <button onClick={() => handleRemoveWishlist(item.id)} className="absolute top-2.5 right-2.5 text-rose-500 z-10 hover:scale-110">
                              <Heart className="w-3.5 h-3.5 fill-rose-500" />
                            </button>
                            <div className="pt-2">
                              <img src={item.image} alt={item.name} className="w-full h-16 object-contain mb-2 group-hover:scale-105 transition-transform" />
                              <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2">{item.name}</p>
                            </div>
                            <div className="flex items-center justify-between pt-1 border-t border-slate-200/40 dark:border-slate-800">
                              <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.price}</span>
                              <button onClick={() => handleAddToCartItem(item)} className="p-1 rounded-md bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                                <ShoppingBag className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recently Viewed Panel */}
                    <div className="md:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Recently Viewed</h3>
                        <button onClick={() => setActiveSidebarTab('Recently Viewed')} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                          View All
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {recentlyViewed.map((item) => (
                          <div key={item.id} className="group border border-slate-200/60 dark:border-slate-800 p-2 rounded-xl bg-slate-50/50 dark:bg-slate-950 space-y-2 flex flex-col justify-between">
                            <div>
                              <img src={item.image} alt={item.name} className="w-full h-16 object-contain mb-2 group-hover:scale-105 transition-transform" />
                              <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 line-clamp-2">{item.name}</p>
                            </div>
                            <div className="flex items-center justify-between pt-1 border-t border-slate-200/40 dark:border-slate-800">
                              <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.price}</span>
                              <button onClick={() => handleAddToCartItem(item)} className="p-1 rounded-md bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                                <ShoppingBag className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Recommended for You */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Recommended for You</h3>
                      <Link to="/products" className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline">
                        View All
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {RECOMMENDED_PRODUCTS.map((item) => (
                        <div key={item.id} className="group border border-slate-200/60 dark:border-slate-800 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-950 space-y-2 flex flex-col justify-between">
                          <div>
                            <img src={item.image} alt={item.name} className="w-full h-24 object-contain mb-2 group-hover:scale-105 transition-transform" />
                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2">{item.name}</p>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/40 dark:border-slate-800">
                            <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.price}</span>
                            <button onClick={() => handleAddToCartItem(item)} className="p-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow">
                              <ShoppingBag className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PERSONAL INFORMATION */}
              {activeSidebarTab === 'Personal Information' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Personal Information</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Update your profile details and contact information</p>
                  </div>

                  <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Full Name</label>
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-purple-600 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Email Address</label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-purple-600 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Phone Number</label>
                        <input
                          type="text"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-purple-600 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Gender</label>
                        <select
                          value={profileData.gender}
                          onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-purple-600 font-medium"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2.5 rounded-xl shadow transition-colors"
                    >
                      Save Profile Changes
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 3: ADDRESSES */}
              {activeSidebarTab === 'Addresses' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Saved Delivery Addresses</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Manage your shipping and billing locations</p>
                    </div>
                    <button
                      onClick={() => setIsAddressModalOpen(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow"
                    >
                      <Plus className="w-4 h-4" /> Add Address
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {addresses.map((addr) => (
                      <div key={addr.id} className={`p-4 rounded-2xl border space-y-3 relative ${addr.isDefault ? 'border-purple-500 bg-purple-50/20 dark:bg-purple-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950'}`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${addr.isDefault ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                            {addr.type} {addr.isDefault && '• Default Address'}
                          </span>
                          {!addr.isDefault && (
                            <button onClick={() => handleSetDefaultAddress(addr.id)} className="text-[10px] text-purple-600 dark:text-purple-400 font-bold hover:underline">
                              Set as Default
                            </button>
                          )}
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-900 dark:text-white text-sm">{addr.name}</p>
                          <p className="text-slate-600 dark:text-slate-300 text-xs mt-1 leading-relaxed">
                            {addr.street}, {addr.city}, {addr.state} - {addr.pincode}, {addr.country}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 font-semibold mt-1">Phone: {addr.phone}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-end gap-3 text-xs">
                          <button onClick={() => handleDeleteAddress(addr.id)} className="text-rose-500 hover:underline flex items-center gap-1 font-semibold">
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: MY ORDERS */}
              {activeSidebarTab === 'My Orders' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">My Order History</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">View and track all your orders</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {INITIAL_ORDERS.map((order, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-4 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-800 pb-3">
                          <div>
                            <span className="font-extrabold text-slate-900 dark:text-white text-sm">Order #{order.id}</span>
                            <p className="text-slate-500 dark:text-slate-400 text-[11px]">Placed on {order.date}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${order.statusBg}`}>
                              {order.status}
                            </span>
                            <button onClick={() => showToast(`Invoice downloaded for Order #${order.id}`)} className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img src={order.image} alt={order.title} className="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-800 shrink-0" />
                            <div>
                              <p className="font-extrabold text-slate-900 dark:text-white text-sm">{order.title}</p>
                              <p className="text-slate-500 dark:text-slate-400 text-xs">Quantity: 1 • Express Shipping</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-extrabold text-slate-900 dark:text-white text-base block">{order.price}</span>
                            <button onClick={() => handleAddToCartItem({ id: Date.now(), name: order.title, rawPrice: order.rawPrice, image: order.image })} className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-1 mt-1">
                              <RotateCcw className="w-3 h-3" /> Reorder Item
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: WISHLIST */}
              {activeSidebarTab === 'Wishlist' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">My Saved Wishlist ({wishlistItems.length})</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Items saved for later shopping</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-3 flex flex-col justify-between relative group">
                        <button onClick={() => handleRemoveWishlist(item.id)} className="absolute top-3 right-3 text-rose-500 hover:scale-110 z-10">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="pt-2">
                          <img src={item.image} alt={item.name} className="w-full h-28 object-contain mb-3 group-hover:scale-105 transition-transform" />
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2">{item.name}</p>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                          <span className="text-sm font-extrabold text-slate-900 dark:text-white block">{item.price}</span>
                          <button onClick={() => handleAddToCartItem(item)} className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1.5">
                            <ShoppingBag className="w-3.5 h-3.5" /> Move to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: RECENTLY VIEWED */}
              {activeSidebarTab === 'Recently Viewed' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Recently Viewed Products</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Products you checked out recently</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {recentlyViewed.map((item) => (
                      <div key={item.id} className="p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-3 flex flex-col justify-between group">
                        <div className="pt-2">
                          <img src={item.image} alt={item.name} className="w-full h-28 object-contain mb-3 group-hover:scale-105 transition-transform" />
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2">{item.name}</p>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                          <span className="text-sm font-extrabold text-slate-900 dark:text-white block">{item.price}</span>
                          <button onClick={() => handleAddToCartItem(item)} className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1.5">
                            <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: COMPARE */}
              {activeSidebarTab === 'Compare' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Product Comparison</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Comparing 2 saved items side by side</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-3">
                      <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=80" alt="iPhone 15" className="w-full h-32 object-contain" />
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Apple iPhone 15</h4>
                      <p className="font-extrabold text-purple-600 text-base">₹69,900</p>
                      <p className="text-slate-500">6.1" OLED • A16 Bionic • 128GB</p>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-3">
                      <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=80" alt="Galaxy S24" className="w-full h-32 object-contain" />
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Samsung Galaxy S24</h4>
                      <p className="font-extrabold text-purple-600 text-base">₹64,999</p>
                      <p className="text-slate-500">6.2" AMOLED • Exynos 2400 • 256GB</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 8: REVIEWS & RATINGS */}
              {activeSidebarTab === 'Reviews & Ratings' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">My Product Reviews & Ratings</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Reviews you published on Cartify products</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 dark:text-white">boAt Noise Cancelling Headphones</span>
                      <div className="flex text-amber-400">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">"Amazing sound quality and battery backup! Noise cancellation works really well during travel."</p>
                    <span className="text-[10px] text-slate-400 block">Reviewed on 15 May 2024</span>
                  </div>
                </div>
              )}

              {/* TAB 9: COUPONS & OFFERS */}
              {activeSidebarTab === 'Coupons & Offers' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Coupons & Exclusive Offers</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Apply these promo codes during checkout</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {INITIAL_COUPONS.map((coupon, idx) => (
                      <div key={idx} className={`p-5 rounded-2xl bg-gradient-to-br ${coupon.bg} text-white space-y-3 shadow-lg relative overflow-hidden`}>
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-extrabold text-sm tracking-wider border border-white/30 px-3 py-1 rounded-lg bg-black/20">
                            {coupon.code}
                          </span>
                          <Tag className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm">{coupon.title}</h4>
                          <p className="text-[11px] text-white/80 mt-1">{coupon.desc}</p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[10px] text-white/70">
                          <span>Expires {coupon.expires}</span>
                          <button onClick={() => handleCopyCoupon(coupon.code)} className="font-extrabold text-white underline hover:text-amber-200 flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Copy
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 10: MY WALLET */}
              {activeSidebarTab === 'My Wallet' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Cartify Cash Wallet</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Instant one-click checkout balance</p>
                    </div>
                    <button onClick={() => setIsWalletModalOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow">
                      <Plus className="w-4 h-4" /> Add Money
                    </button>
                  </div>

                  <div className="p-6 rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-purple-300 uppercase tracking-widest font-extrabold block">Cartify Cash Balance</span>
                      <p className="text-3xl font-extrabold mt-1">₹{walletBalance}</p>
                      <p className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> 100% Ready for Checkout
                      </p>
                    </div>
                    <Wallet className="w-12 h-12 text-purple-300 opacity-80" />
                  </div>
                </div>
              )}

              {/* TAB 11: SAVED CARDS */}
              {activeSidebarTab === 'Saved Cards' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Saved Cards & Payment Instruments</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Manage your cards</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-900 text-white max-w-sm shadow-xl space-y-6 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">HDFC Visa Platinum</span>
                      <CreditCard className="w-7 h-7 text-amber-400" />
                    </div>
                    <p className="font-mono text-lg tracking-widest font-extrabold">•••• •••• •••• 4092</p>
                    <div className="flex items-center justify-between text-xs pt-2">
                      <span>{userName}</span>
                      <span>08/29</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 12: NOTIFICATION PREFERENCES */}
              {activeSidebarTab === 'Notification Preferences' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Notification Preferences</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Control alerts and communication channels</p>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                        <span className="font-bold capitalize text-slate-800 dark:text-slate-200">{key} Notifications</span>
                        <input
                          type="checkbox"
                          checked={val}
                          onChange={() => {
                            setNotifications({ ...notifications, [key]: !val });
                            showToast(`Updated ${key} notification settings.`);
                          }}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 13: ACCOUNT SETTINGS */}
              {activeSidebarTab === 'Account Settings' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Account Settings</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Regional preferences and account privacy</p>
                  </div>

                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Currency</label>
                      <select className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
                        <option>INR (₹) - Indian Rupee</option>
                        <option>USD ($) - US Dollar</option>
                        <option>EUR (€) - Euro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Language</label>
                      <select className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
                        <option>English (US)</option>
                        <option>Hindi (हिंदी)</option>
                      </select>
                    </div>

                    <button onClick={() => showToast('Account settings saved.')} className="bg-purple-600 text-white font-bold px-5 py-2.5 rounded-xl shadow">
                      Save Settings
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 14: CHANGE PASSWORD */}
              {activeSidebarTab === 'Change Password' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Change Password</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Update your account login credentials securely</p>
                  </div>

                  <form onSubmit={handleChangePasswordSubmit} className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Current Password</label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">New Password</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">Confirm New Password</label>
                      <input
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2.5 rounded-xl shadow transition-colors">
                      Update Password
                    </button>
                  </form>
                </div>
              )}

            </div>

          </div>
        )}

      </div>

      {/* MODAL 1: ADD NEW ADDRESS */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Add New Delivery Address</h3>
              <button onClick={() => setIsAddressModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddAddressSubmit} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Address Label</label>
                <select value={newAddress.type} onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-1">Full Name</label>
                <input type="text" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800" />
              </div>

              <div>
                <label className="block font-bold mb-1">Street Address</label>
                <input type="text" placeholder="House no, Street name, Area" value={newAddress.street} onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">City</label>
                  <input type="text" placeholder="Gurugram" value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800" />
                </div>
                <div>
                  <label className="block font-bold mb-1">Pincode</label>
                  <input type="text" placeholder="122003" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800" />
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-purple-600 text-white font-extrabold rounded-xl shadow mt-2">
                Save Address
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD MONEY TO WALLET */}
      {isWalletModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Add Money to Cartify Cash</h3>
              <button onClick={() => setIsWalletModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddWalletMoney} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Enter Amount (₹)</label>
                <input type="number" value={addAmount} onChange={(e) => setAddAmount(e.target.value)} className="w-full text-base font-extrabold bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800" />
              </div>

              <div className="flex gap-2">
                {['500', '1000', '2500'].map((amt) => (
                  <button key={amt} type="button" onClick={() => setAddAmount(amt)} className="flex-1 py-1.5 rounded-lg border border-purple-200 text-purple-600 font-bold">
                    +₹{amt}
                  </button>
                ))}
              </div>

              <button type="submit" className="w-full py-3 bg-purple-600 text-white font-extrabold rounded-xl shadow mt-2">
                Proceed & Add Money
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
