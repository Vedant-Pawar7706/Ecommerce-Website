import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import {
  ShoppingBag,
  Lock,
  Mail,
  User as UserIcon,
  Store,
  ShieldCheck,
  Phone,
  ArrowLeft,
  Eye,
  EyeOff,
  Sparkles,
  Truck,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'signin';
  
  const { setUser, authenticateUser, registerAccount } = useStore();
  const [mode, setMode] = useState<'signin' | 'register'>(initialMode);
  const [registerRole, setRegisterRole] = useState<'customer' | 'seller'>('customer');
  const [showPassword, setShowPassword] = useState(false);

  // Sign In State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Customer Register State
  const [customerData, setCustomerData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  });

  // Seller Register State
  const [sellerData, setSellerData] = useState({
    store_name: '',
    owner_name: '',
    email: '',
    phone: '',
    gstin: '',
    category: 'Electronics & Mobiles',
    password: '',
    confirm_password: ''
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!signInEmail || !signInPassword) {
      setErrorMsg('Please enter both your Email Address and Password.');
      return;
    }

    const res = authenticateUser(signInEmail, signInPassword);
    if (!res.success) {
      setErrorMsg(res.message || 'Authentication failed.');
      return;
    }

    navigate('/dashboard');
  };

  const handleCustomerRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!customerData.full_name || !customerData.email || !customerData.phone || !customerData.password) {
      setErrorMsg('Please fill in all required customer details.');
      return;
    }
    if (customerData.password !== customerData.confirm_password) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    const newUser = {
      id: Date.now(),
      email: customerData.email,
      full_name: customerData.full_name,
      phone: customerData.phone,
      role: 'customer' as const,
      is_active: true,
      is_verified: true,
      wallet_balance: 5000,
      reward_coins: 200,
      created_at: new Date().toISOString()
    };

    const res = registerAccount(customerData.email, customerData.password, newUser);
    if (!res.success) {
      setErrorMsg(res.message || 'Registration failed.');
      return;
    }

    navigate('/dashboard');
  };

  const handleSellerRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!sellerData.store_name || !sellerData.email || !sellerData.phone || !sellerData.gstin || !sellerData.password) {
      setErrorMsg('Please fill in all seller store and GSTIN business details.');
      return;
    }
    if (sellerData.password !== sellerData.confirm_password) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    const newSeller = {
      id: Date.now(),
      email: sellerData.email,
      full_name: sellerData.store_name,
      phone: sellerData.phone,
      role: 'seller' as const,
      is_active: true,
      is_verified: true,
      wallet_balance: 25000,
      reward_coins: 500,
      created_at: new Date().toISOString()
    };

    const res = registerAccount(sellerData.email, sellerData.password, newSeller);
    if (!res.success) {
      setErrorMsg(res.message || 'Registration failed.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-bold transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-md">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Cartify</span>
        </Link>
      </div>

      {/* Main Split-Screen Container */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        
        {/* Left Side: Premium Feature & Trust Showcase (Hidden on Mobile) */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white p-8 sm:p-10 flex-col justify-between relative overflow-hidden">
          
          {/* Glowing Ambient Backdrop Circles */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-purple-500/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-500/25 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>Next-Gen E-Commerce</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Welcome to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cartify</span> Experience
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Join over 250,000+ happy shoppers enjoying authentic luxury products, instant returns, and 2-day express shipping.
              </p>
              
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl text-[11px] font-bold text-amber-300 border border-white/10 backdrop-blur">
                <span>⭐ 4.9/5 Rating</span>
                <span className="text-white/40">•</span>
                <span>250k+ Happy Shoppers</span>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3.5 text-xs pt-2">
              <div className="flex items-center gap-3 bg-white/5 p-2.5 rounded-2xl border border-white/10 backdrop-blur transition-transform hover:translate-x-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Express 2-Day Guaranteed Delivery</p>
                  <p className="text-[11px] text-slate-400">Metro cities doorstep dispatch within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-2.5 rounded-2xl border border-white/10 backdrop-blur transition-transform hover:translate-x-1">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">100% Certified Genuine Guarantee</p>
                  <p className="text-[11px] text-slate-400">Official brand warranties & instant replacements</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-2.5 rounded-2xl border border-white/10 backdrop-blur transition-transform hover:translate-x-1">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">5% Unlimited VIP Cashback Coins</p>
                  <p className="text-[11px] text-slate-400">Earn coins on every single checkout</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-2.5 rounded-2xl border border-white/10 backdrop-blur transition-transform hover:translate-x-1">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="font-bold text-white">Cartify AI Assistant Included</p>
                  <p className="text-[11px] text-slate-400">Instant product comparison & 24/7 help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security & Customer Avatars Footer */}
          <div className="relative z-10 pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> 256-Bit SSL Encrypted
              </span>
              <span>Cartify Inc. © 2026</span>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Auth Controls */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-6">
          
          {/* Mode Switcher Tabs (Sign In vs Register) */}
          <div className="flex rounded-2xl bg-slate-100 dark:bg-slate-900 p-1.5 border border-slate-200 dark:border-slate-800 text-xs font-bold">
            <button
              onClick={() => { setMode('signin'); setErrorMsg(''); }}
              className={`flex-1 py-3 rounded-xl transition-all font-extrabold ${mode === 'signin' ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode('register'); setErrorMsg(''); }}
              className={`flex-1 py-3 rounded-xl transition-all font-extrabold ${mode === 'register' ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Create Account
            </button>
          </div>

          {errorMsg && (
            <div className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 text-xs p-3.5 rounded-2xl font-bold text-center">
              {errorMsg}
            </div>
          )}

          {/* MODE 1: SIGN IN FORM */}
          {mode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              
              {/* Quick Demo Credentials Pill Selector */}
              <div className="bg-purple-50 dark:bg-purple-950/40 p-3 rounded-2xl border border-purple-200 dark:border-purple-800 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-purple-600 dark:text-purple-400 block tracking-wider">⚡ 1-Click Quick Demo Login</span>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <button
                    type="button"
                    onClick={() => { setSignInEmail('vedant@gmail.com'); setSignInPassword('Customer123!'); }}
                    className="bg-white dark:bg-slate-800 hover:bg-purple-100 text-purple-700 dark:text-purple-300 font-bold px-2.5 py-1 rounded-xl border border-purple-300 transition-colors"
                  >
                    🛒 Customer
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSignInEmail('seller@techhub.com'); setSignInPassword('Seller123!'); }}
                    className="bg-white dark:bg-slate-800 hover:bg-purple-100 text-indigo-700 dark:text-indigo-300 font-bold px-2.5 py-1 rounded-xl border border-purple-300 transition-colors"
                  >
                    🏪 Seller Store
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSignInEmail('admin@cartify.com'); setSignInPassword('Admin123!'); }}
                    className="bg-white dark:bg-slate-800 hover:bg-purple-100 text-rose-600 dark:text-rose-400 font-bold px-2.5 py-1 rounded-xl border border-purple-300 transition-colors"
                  >
                    🛡️ Super Admin
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="alex.johnson@example.com"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Password</label>
                  <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs pl-10 pr-10 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs">
                <input type="checkbox" id="remember" defaultChecked className="rounded text-brand-600 focus:ring-brand-500" />
                <label htmlFor="remember" className="text-slate-600 dark:text-slate-400 font-semibold cursor-pointer">
                  Keep me signed in on this device
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Sign In to Cartify</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* MODE 2: CREATE ACCOUNT FORM */}
          {mode === 'register' && (
            <div className="space-y-4">
              
              {/* Role Selection Cards */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRegisterRole('customer')}
                  className={`p-3 rounded-2xl border flex items-center gap-3 transition-all text-left ${registerRole === 'customer' ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-300 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
                >
                  <UserIcon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  <div>
                    <p className="text-xs font-extrabold">Customer</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Shop & Earn Coins</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setRegisterRole('seller')}
                  className={`p-3 rounded-2xl border flex items-center gap-3 transition-all text-left ${registerRole === 'seller' ? 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-300 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
                >
                  <Store className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-xs font-extrabold">Seller Store</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Sell Products</p>
                  </div>
                </button>
              </div>

              {registerRole === 'customer' ? (
                <form onSubmit={handleCustomerRegister} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Alex Johnson"
                      value={customerData.full_name}
                      onChange={(e) => setCustomerData({ ...customerData, full_name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="alex@example.com"
                        value={customerData.email}
                        onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={customerData.phone}
                        onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={customerData.password}
                        onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={customerData.confirm_password}
                        onChange={(e) => setCustomerData({ ...customerData, confirm_password: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all mt-2"
                  >
                    <span>Create Customer Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSellerRegister} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Store Name</label>
                      <input
                        type="text"
                        placeholder="TechHub Electronics"
                        value={sellerData.store_name}
                        onChange={(e) => setSellerData({ ...sellerData, store_name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">GSTIN Number</label>
                      <input
                        type="text"
                        placeholder="29AAAAA0000A1Z5"
                        value={sellerData.gstin}
                        onChange={(e) => setSellerData({ ...sellerData, gstin: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Business Email</label>
                      <input
                        type="email"
                        placeholder="seller@techhub.com"
                        value={sellerData.email}
                        onChange={(e) => setSellerData({ ...sellerData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={sellerData.phone}
                        onChange={(e) => setSellerData({ ...sellerData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={sellerData.password}
                        onChange={(e) => setSellerData({ ...sellerData, password: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={sellerData.confirm_password}
                        onChange={(e) => setSellerData({ ...sellerData, confirm_password: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2 transition-all mt-2"
                  >
                    <span>Create Seller Store</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default AuthPage;
