import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { fetchProducts, fetchCategories } from '../services/api';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../services/mockProducts';
import { Product, Category } from '../types';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
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
  Percent,
  AlertTriangle,
  Lock,
  RefreshCw,
  SlidersHorizontal,
  Building,
  UserPlus,
  ShieldAlert,
  Smartphone,
  Globe,
  Bot,
  Zap,
  Crown,
  CheckCircle,
  XCircle,
  AlertCircle,
  Receipt,
  BarChart3,
  PieChart,
  FileSpreadsheet
} from 'lucide-react';

const MONTHLY_REVENUE_TRAJECTORY = [
  { month: 'Jan', gross: 450000, net: 410000, orders: 320 },
  { month: 'Feb', gross: 600000, net: 550000, orders: 430 },
  { month: 'Mar', gross: 750000, net: 690000, orders: 520 },
  { month: 'Apr', gross: 550000, net: 505000, orders: 390 },
  { month: 'May', gross: 920000, net: 845000, orders: 650 },
  { month: 'Jun', gross: 800000, net: 735000, orders: 570 },
  { month: 'Jul', gross: 880000, net: 810000, orders: 620 },
  { month: 'Aug', gross: 950000, net: 875000, orders: 710 },
  { month: 'Sep', gross: 1120000, net: 1030000, orders: 830 },
  { month: 'Oct', gross: 1380000, net: 1270000, orders: 990 },
  { month: 'Nov', gross: 1620000, net: 1490000, orders: 1140 },
  { month: 'Dec', gross: 1842950, net: 1695400, orders: 1245 },
];

const SALES_TIMEFRAME_DATA: Record<string, Array<{ name: string; sales: number; orders: number }>> = {
  'Today': [
    { name: '00:00', sales: 12500, orders: 8 },
    { name: '04:00', sales: 4800, orders: 3 },
    { name: '08:00', sales: 28400, orders: 19 },
    { name: '12:00', sales: 74200, orders: 52 },
    { name: '16:00', sales: 89600, orders: 61 },
    { name: '20:00', sales: 112000, orders: 78 },
    { name: '23:00', sales: 45000, orders: 31 },
  ],
  'Last 7 Days': [
    { name: 'Mon', sales: 184000, orders: 124 },
    { name: 'Tue', sales: 215000, orders: 145 },
    { name: 'Wed', sales: 198000, orders: 132 },
    { name: 'Thu', sales: 245000, orders: 168 },
    { name: 'Fri', sales: 310000, orders: 210 },
    { name: 'Sat', sales: 380000, orders: 260 },
    { name: 'Sun', sales: 310950, orders: 206 },
  ],
  'Last 30 Days': [
    { name: 'Week 1', sales: 380000, orders: 254 },
    { name: 'Week 2', sales: 445000, orders: 301 },
    { name: 'Week 3', sales: 490000, orders: 332 },
    { name: 'Week 4', sales: 527950, orders: 358 },
  ],
  'This Financial Year': [
    { name: 'Q1', sales: 1800000, orders: 1260 },
    { name: 'Q2', sales: 2270000, orders: 1580 },
    { name: 'Q3', sales: 3450000, orders: 2350 },
    { name: 'Q4', sales: 4120000, orders: 2810 },
  ]
};

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

  // Modals State
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedTxnReceipt, setSelectedTxnReceipt] = useState<any | null>(null);

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

  // Product Reviews State
  const [reviewsList, setReviewsList] = useState([
    { id: 1, product: 'AetherPro M3 Max Laptop 16"', reviewer: 'Rahul S.', rating: 5, comment: 'Exceeded my expectations! Build quality and delivery speed are top tier.', date: '12 May 2024', status: 'Approved' },
    { id: 2, product: 'SonicPulse ANC Headphones', reviewer: 'Priya P.', rating: 5, comment: 'Crystal clear acoustics and noise cancelling works seamlessly.', date: '10 May 2024', status: 'Approved' },
    { id: 3, product: 'ChronoPulse Titanium Smartwatch', reviewer: 'Amit V.', rating: 4, comment: 'Sleek design and battery backup easily lasts 3 full days.', date: '05 May 2024', status: 'Approved' },
    { id: 4, product: 'Nike Air Max Excee Shoes', reviewer: 'Neha S.', rating: 5, comment: 'Super comfy sole and perfect fit for daily gym workout.', date: '02 May 2024', status: 'Approved' },
    { id: 5, product: 'Apple iPhone 15 (128GB)', reviewer: 'Vikram J.', rating: 5, comment: 'Super vibrant display and fast dispatch packaging.', date: '29 Apr 2024', status: 'Pending Review' }
  ]);

  // ==================== 1. SALES STATE ====================
  const [salesTimeframe, setSalesTimeframe] = useState('Last 30 Days');
  const [salesBreakdownList] = useState([
    { id: 'INV-2024-001', orderId: '#ORD-15234', customer: 'Rahul Sharma', channel: 'UPI (GPay)', items: 'boAt Headphones', gross: '₹2,499', tax: '₹381', net: '₹2,118', date: '12 May 2024', status: 'Settled' },
    { id: 'INV-2024-002', orderId: '#ORD-15233', customer: 'Priya Patel', channel: 'Credit Card (HDFC)', items: 'Apple iPhone 15', gross: '₹69,900', tax: '₹10,662', net: '₹59,238', date: '10 May 2024', status: 'Settled' },
    { id: 'INV-2024-003', orderId: '#ORD-15232', customer: 'Amit Verma', channel: 'UPI (PhonePe)', items: 'Nike Air Max Shoes', gross: '₹4,795', tax: '₹731', net: '₹4,064', date: '05 May 2024', status: 'Settled' },
    { id: 'INV-2024-004', orderId: '#ORD-15231', customer: 'Neha Singh', channel: 'Cash On Delivery', items: 'Skybags Backpack', gross: '₹899', tax: '₹137', net: '₹762', date: '01 May 2024', status: 'Processing' },
    { id: 'INV-2024-005', orderId: '#ORD-15229', customer: 'Deepak Gupta', channel: 'Net Banking (ICICI)', items: 'Sony WH-1000XM5', gross: '₹26,990', tax: '₹4,117', net: '₹22,873', date: '27 Apr 2024', status: 'Settled' }
  ]);

  // ==================== 2. PAYMENTS STATE ====================
  const [paymentGatewayFilter, setPaymentGatewayFilter] = useState('All');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('All');
  const [paymentsList] = useState([
    { txnId: 'TXN-984128', orderId: '#ORD-15234', customer: 'Rahul Sharma', gateway: 'Razorpay UPI', method: 'Google Pay', amount: '₹2,499.00', fee: '₹44.98', net: '₹2,454.02', status: 'Success', timestamp: '12 May 2024, 02:45 PM' },
    { txnId: 'TXN-984127', orderId: '#ORD-15233', customer: 'Priya Patel', gateway: 'Stripe Global', method: 'Visa Card (•••• 4242)', amount: '₹69,900.00', fee: '₹1,398.00', net: '₹68,502.00', status: 'Success', timestamp: '10 May 2024, 11:12 AM' },
    { txnId: 'TXN-984126', orderId: '#ORD-15232', customer: 'Amit Verma', gateway: 'Razorpay UPI', method: 'PhonePe', amount: '₹4,795.00', fee: '₹86.31', net: '₹4,708.69', status: 'Success', timestamp: '05 May 2024, 06:20 PM' },
    { txnId: 'TXN-984125', orderId: '#ORD-15231', customer: 'Neha Singh', gateway: 'COD Escrow', method: 'Cash On Delivery', amount: '₹899.00', fee: '₹0.00', net: '₹899.00', status: 'Pending Settlement', timestamp: '01 May 2024, 04:15 PM' },
    { txnId: 'TXN-984124', orderId: '#ORD-15230', customer: 'Vikram Joshi', gateway: 'Razorpay Cards', method: 'Mastercard (•••• 8812)', amount: '₹8,990.00', fee: '₹0.00', net: '₹0.00', status: 'Failed / Reversed', timestamp: '28 Apr 2024, 09:30 AM' },
    { txnId: 'TXN-984123', orderId: '#ORD-15229', customer: 'Deepak Gupta', gateway: 'Stripe NetBanking', method: 'ICICI NetBanking', amount: '₹26,990.00', fee: '₹539.80', net: '₹26,450.20', status: 'Success', timestamp: '27 Apr 2024, 01:10 PM' }
  ]);

  // ==================== 3. REFUNDS STATE ====================
  const [refundStatusFilter, setRefundStatusFilter] = useState('All');
  const [refundsList, setRefundsList] = useState([
    { id: '#RFND-801', orderId: '#ORD-15230', customer: 'Vikram Joshi', email: 'vikram.j@example.com', product: 'Sony WH-CH720N Headphones', reason: 'Defective audio on left ear cup', amount: '₹8,990', date: '29 Apr 2024', status: 'Pending Approval', condition: 'Inspection Required' },
    { id: '#RFND-802', orderId: '#ORD-15225', customer: 'Kavita Roy', email: 'kavita.roy@example.com', product: 'Nike Air Max Shoes', reason: 'Size mismatch (received UK 8 instead of UK 9)', amount: '₹4,795', date: '26 Apr 2024', status: 'Approved', condition: 'Sealed Box Verified' },
    { id: '#RFND-803', orderId: '#ORD-15218', customer: 'Sanjay Deshmukh', email: 'sanjay.d@example.com', product: 'Skybags Casual Backpack', reason: 'Zipper runner detached on delivery', amount: '₹899', date: '20 Apr 2024', status: 'Processed', condition: 'Returned to Warehouse' },
    { id: '#RFND-804', orderId: '#ORD-15210', customer: 'Ananya Sen', email: 'ananya.sen@example.com', product: 'Aether 100W GaN Fast Charger', reason: 'Customer changed mind (unopened)', amount: '₹2,199', date: '18 Apr 2024', status: 'Processed', condition: 'Original Package' },
    { id: '#RFND-805', orderId: '#ORD-15202', customer: 'Manoj Kumar', email: 'manoj.k@example.com', product: 'ChronoPulse Smartwatch', reason: 'Scratched glass on arrival', amount: '₹3,499', date: '15 Apr 2024', status: 'Rejected', condition: 'Damage after 10 days' }
  ]);

  // ==================== 4. REPORTS STATE ====================
  const [reportType, setReportType] = useState('Sales & Revenue');
  const [reportFormat, setReportFormat] = useState('CSV (.csv)');
  const [reportDateRange, setReportDateRange] = useState('Current Month (May 2024)');

  // ==================== 5. USERS STATE ====================
  const [userRoleFilter, setUserRoleFilter] = useState('All');
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [systemUsersList, setSystemUsersList] = useState([
    { id: 1, name: 'Admin User', email: 'admin@cartify.com', role: 'Super Admin', department: 'Executive Hub', status: 'Active', lastLogin: 'Just now', ip: '192.168.1.1' },
    { id: 2, name: 'Vikram Joshi', email: 'vikram.manager@cartify.com', role: 'Store Manager', department: 'Operations', status: 'Active', lastLogin: '2 hours ago', ip: '103.21.244.2' },
    { id: 3, name: 'TechHub Official', email: 'seller@techhub.com', role: 'Seller / Vendor', department: 'Marketplace Partner', status: 'Active', lastLogin: '5 hours ago', ip: '49.36.120.88' },
    { id: 4, name: 'Sneha Rao', email: 'sneha.support@cartify.com', role: 'Support Agent', department: 'Customer Success', status: 'Active', lastLogin: '1 day ago', ip: '103.21.244.5' },
    { id: 5, name: 'Rahul Sharma', email: 'rahul.sharma@email.com', role: 'Customer', department: 'Shopper', status: 'Active', lastLogin: '3 days ago', ip: '157.34.89.12' },
    { id: 6, name: 'Priya Patel', email: 'priya.patel@example.com', role: 'Customer', department: 'Shopper', status: 'Active', lastLogin: '4 days ago', ip: '157.34.89.14' },
    { id: 7, name: 'Vedant Pawar', email: 'vedant@gmail.com', role: 'Customer', department: 'Shopper', status: 'Active', lastLogin: '1 day ago', ip: '192.168.1.10' }
  ]);

  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    role: 'Store Manager',
    department: 'Operations',
    password: ''
  });

  // ==================== 6. ROLES & PERMISSIONS STATE ====================
  const [rbacMatrix, setRbacMatrix] = useState({
    'Super Admin': { products: { r: true, w: true, d: true }, orders: { r: true, w: true, d: true }, sales: { r: true, w: true, d: true }, refunds: { r: true, w: true, d: true }, settings: { r: true, w: true, d: true }, users: { r: true, w: true, d: true } },
    'Store Manager': { products: { r: true, w: true, d: true }, orders: { r: true, w: true, d: false }, sales: { r: true, w: false, d: false }, refunds: { r: true, w: true, d: false }, settings: { r: false, w: false, d: false }, users: { r: true, w: false, d: false } },
    'Seller / Vendor': { products: { r: true, w: true, d: false }, orders: { r: true, w: false, d: false }, sales: { r: true, w: false, d: false }, refunds: { r: false, w: false, d: false }, settings: { r: false, w: false, d: false }, users: { r: false, w: false, d: false } },
    'Support Agent': { products: { r: true, w: false, d: false }, orders: { r: true, w: true, d: false }, sales: { r: false, w: false, d: false }, refunds: { r: true, w: true, d: false }, settings: { r: false, w: false, d: false }, users: { r: true, w: false, d: false } },
    'Financial Auditor': { products: { r: true, w: false, d: false }, orders: { r: true, w: false, d: false }, sales: { r: true, w: false, d: false }, refunds: { r: true, w: false, d: false }, settings: { r: false, w: false, d: false }, users: { r: false, w: false, d: false } }
  });

  // ==================== 7. SETTINGS STATE ====================
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'Cartify Marketplace',
    supportEmail: 'support@cartify.com',
    supportPhone: '+91 8000 123 456',
    currency: 'INR (₹)',
    timezone: 'Asia/Kolkata (IST)',
    freeShippingThreshold: '499',
    gstTaxRate: '18',
    enableGuestCheckout: true,
    enableCOD: true,
    geminiModel: 'gemini-2.5-flash',
    aiVoiceAssist: true,
    aiAutoCoupons: true,
    twoFactorAuth: true,
    adminSessionTimeout: '30',
    orderSmsAlerts: true,
    orderWhatsAppAlerts: true
  });

  // ==================== 8. ACTIVITY LOGS STATE ====================
  const [logSeverityFilter, setLogSeverityFilter] = useState('All');
  const [logSearchQuery, setLogSearchQuery] = useState('');
  const [activityLogsList] = useState([
    { id: 'LOG-5091', timestamp: '2 mins ago', actor: 'Admin User', role: 'Super Admin', action: 'Generated & Downloaded Store Analytics CSV Report', severity: 'Info', ip: '192.168.1.1', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300' },
    { id: 'LOG-5090', timestamp: '15 mins ago', actor: 'Admin User', role: 'Super Admin', action: 'Updated Catalog Stock for SKU-CRT-881923 (+50 Units)', severity: 'Info', ip: '192.168.1.1', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300' },
    { id: 'LOG-5089', timestamp: '42 mins ago', actor: 'Vikram Joshi', role: 'Store Manager', action: 'Approved Customer Return #RFND-802 (₹4,795)', severity: 'Warning', ip: '103.21.244.2', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' },
    { id: 'LOG-5088', timestamp: '1 hour ago', actor: 'System Auth', role: 'Security Shield', action: 'Super Admin Login Success via Two-Factor Verification', severity: 'Success', ip: '192.168.1.1', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' },
    { id: 'LOG-5087', timestamp: '2 hours ago', actor: 'TechHub Official', role: 'Seller / Vendor', action: 'Listed New Product "Sony WH-CH720N ANC Headphones"', severity: 'Info', ip: '49.36.120.88', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300' },
    { id: 'LOG-5086', timestamp: '3 hours ago', actor: 'Database Cron', role: 'System Daemon', action: 'Automated Snapshot & Index Optimization Completed', severity: 'Success', ip: '127.0.0.1', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' },
    { id: 'LOG-5085', timestamp: '4 hours ago', actor: 'Sneha Rao', role: 'Support Agent', action: 'Dispatched Tracking Link SMS for Order #ORD-15232', severity: 'Info', ip: '103.21.244.5', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300' },
    { id: 'LOG-5084', timestamp: '5 hours ago', actor: 'Firewall Guard', role: 'Security Shield', action: 'Blocked Malicious Rate-limit Burst on /api/v1/auth/login', severity: 'Critical', ip: '185.220.101.5', badge: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300' }
  ]);

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

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Export Analytics CSV
  const handleExportReport = () => {
    const csvContent = [
      ['CARTIFY E-COMMERCE PLATFORM - EXECUTIVE ANALYTICS REPORT'],
      ['Generated Date', new Date().toLocaleString()],
      [],
      ['KPI METRIC', 'CURRENT VALUE', 'GROWTH (VS LAST 30 DAYS)'],
      ['Total Store Revenue', '₹18,42,950', '+23.8%'],
      ['Net Settled Revenue', '₹16,95,400', '+21.2%'],
      ['Total Customer Orders', '1,245', '+15.3%'],
      ['Average Order Value', '₹1,480', '+5.4%'],
      ['Total Registered Shoppers', '8,732', '+18.7%'],
      ['Total Active Products Listed', productsList.length.toString(), '+12.4%'],
      ['Refunds Processed', '₹48,200', '-14.2%'],
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
    link.setAttribute('download', `Cartify_Store_Analytics_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Downloaded Cartify_Store_Analytics.csv!');
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

  // Add User Handler
  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserData.name || !newUserData.email) {
      showToast('Please enter staff name and email.');
      return;
    }
    const newUser = {
      id: Date.now(),
      name: newUserData.name,
      email: newUserData.email,
      role: newUserData.role,
      department: newUserData.department,
      status: 'Active',
      lastLogin: 'Never',
      ip: '192.168.1.1'
    };
    setSystemUsersList([newUser, ...systemUsersList]);
    setIsAddUserModalOpen(false);
    setNewUserData({ name: '', email: '', role: 'Store Manager', department: 'Operations', password: '' });
    showToast(`Staff account for ${newUser.name} created successfully!`);
  };

  // Refund Handlers
  const handleApproveRefund = (id: string, customer: string) => {
    setRefundsList(refundsList.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
    showToast(`Refund ${id} for ${customer} approved for instant payout!`);
  };

  const handleRejectRefund = (id: string, customer: string) => {
    setRefundsList(refundsList.map(r => r.id === id ? { ...r, status: 'Rejected' } : r));
    showToast(`Refund ${id} marked as rejected.`);
  };

  // User toggle status
  const handleToggleUserStatus = (id: number) => {
    setSystemUsersList(systemUsersList.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        showToast(`User ${u.name} is now ${nextStatus}`);
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const handleDeleteUser = (id: number, name: string) => {
    setSystemUsersList(systemUsersList.filter(u => u.id !== id));
    showToast(`User ${name} removed from system.`);
  };

  // Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('All Platform & Store Configurations Saved Live!');
  };

  // Save RBAC Permissions
  const handleSaveRbac = () => {
    showToast('Role-Based Access Control (RBAC) Matrix Updated!');
  };

  // Filter Products
  const filteredProducts = productsList.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategoryFilter === 'all' || p.category_id === Number(selectedCategoryFilter);
    return matchesSearch && matchesCat;
  });

  // Filter Users
  const filteredUsers = systemUsersList.filter(u => {
    const matchesRole = userRoleFilter === 'All' || u.role === userRoleFilter;
    const matchesQuery = u.name.toLowerCase().includes(userSearchQuery.toLowerCase()) || u.email.toLowerCase().includes(userSearchQuery.toLowerCase());
    return matchesRole && matchesQuery;
  });

  // Filter Payments
  const filteredPayments = paymentsList.filter(p => {
    const matchesGateway = paymentGatewayFilter === 'All' || p.gateway.includes(paymentGatewayFilter);
    const matchesStatus = paymentStatusFilter === 'All' || p.status.includes(paymentStatusFilter);
    return matchesGateway && matchesStatus;
  });

  // Filter Refunds
  const filteredRefunds = refundsList.filter(r => {
    if (refundStatusFilter === 'All') return true;
    return r.status.toLowerCase().includes(refundStatusFilter.toLowerCase());
  });

  // Filter Activity Logs
  const filteredLogs = activityLogsList.filter(l => {
    const matchesSeverity = logSeverityFilter === 'All' || l.severity === logSeverityFilter;
    const matchesQuery = l.action.toLowerCase().includes(logSearchQuery.toLowerCase()) || l.actor.toLowerCase().includes(logSearchQuery.toLowerCase());
    return matchesSeverity && matchesQuery;
  });

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans -m-4 sm:-m-6 lg:-m-8">
      
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 rounded-2xl shadow-2xl border border-indigo-500 flex items-center gap-3 text-xs font-extrabold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-indigo-400 dark:text-indigo-600" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ==================== LEFT SIDEBAR ==================== */}
      <aside className="w-64 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col justify-between shrink-0 border-r border-slate-200 dark:border-slate-800 shadow-sm select-none">
        
        <div className="space-y-6">
          {/* Top Brand Logo */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Cartify</span>
              <span className="block text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Super Admin Hub</span>
            </div>
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
                { name: 'Brands', icon: Building, tab: 'Brands' },
                { name: 'Customers', icon: Users, badge: customersList.length, tab: 'Customers' },
                { name: 'Coupons', icon: Percent, badge: couponsList.length, tab: 'Coupons' },
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
                { name: 'Refunds', icon: RotateCcw, badge: refundsList.filter(r => r.status === 'Pending Approval').length, tab: 'Refunds' },
                { name: 'Reports', icon: FileSpreadsheet, tab: 'Reports' }
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
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-rose-500 text-white">
                        {item.badge}
                      </span>
                    )}
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
                { name: 'Users', icon: User, badge: systemUsersList.length, tab: 'Users' },
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
              <p className="text-[11px] text-indigo-700 dark:text-slate-300 mt-1">Contact our 24/7 dedicated support desk.</p>
            </div>
            <button
              onClick={() => showToast('Opening Admin Priority Support Desk...')}
              className="w-full bg-[#6366f1] hover:bg-indigo-500 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Contact Support</span>
            </button>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-bold border border-indigo-200 dark:border-indigo-800 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 dark:text-white text-xs">{user?.full_name || 'Admin User'}</p>
                <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Super Admin</p>
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
          
          {/* ==================== TAB 1: DASHBOARD ==================== */}
          {activeSidebarTab === 'Dashboard' && (
            <div className="space-y-6">
              
              {/* Header Title + Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Executive Dashboard</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Welcome back, Super Admin! Here's the live store overview across sales, orders, and system health.</p>
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
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL REVENUE</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">₹18,42,950</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +23.8%
                      </span>
                      <span className="text-slate-400">vs last 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Stat 2: Total Orders */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">TOTAL ORDERS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">1,245</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +15.3%
                      </span>
                      <span className="text-slate-400">fulfilled</span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: Registered Shoppers */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">CUSTOMERS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">8,732</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> +18.7%
                      </span>
                      <span className="text-slate-400">new buyers</span>
                    </div>
                  </div>
                </div>

                {/* Stat 4: Catalog Products */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">LISTED PRODUCTS</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">{productsList.length}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> 100% Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat 5: Pending Dispatches */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">SUCCESS RATE</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">99.4%</p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                      <span className="text-slate-400">Low return SLA</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* REVENUE CHARTS & SHORTCUTS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 2-Col Sales Trajectory Area Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Monthly Revenue Trajectory</h3>
                      <p className="text-xs text-slate-400">Total gross vs net store earnings across months</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3 text-[11px] font-bold">
                        <span className="flex items-center gap-1.5 text-indigo-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Gross
                        </span>
                        <span className="flex items-center gap-1.5 text-purple-500">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Net
                        </span>
                      </div>
                      <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-xl border border-indigo-100 dark:border-indigo-900">
                        FY 2024-25
                      </span>
                    </div>
                  </div>

                  {/* Recharts Area Chart */}
                  <div className="h-64 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={MONTHLY_REVENUE_TRAJECTORY} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorGross" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                          </linearGradient>
                          <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.4} vertical={false} />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#94a3b8"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`}
                        />
                        <Tooltip
                          formatter={(val: any, name: any) => [
                            `₹${Number(val).toLocaleString('en-IN')}`,
                            name === 'gross' ? 'Gross Revenue' : 'Net Revenue'
                          ]}
                          labelFormatter={(label) => `Month: ${label}`}
                          contentStyle={{
                            backgroundColor: '#0f172a',
                            borderColor: '#334155',
                            borderRadius: '16px',
                            color: '#ffffff',
                            fontSize: '12px',
                            fontWeight: 700,
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                          }}
                        />
                        <Area type="monotone" dataKey="gross" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorGross)" />
                        <Area type="monotone" dataKey="net" stroke="#a855f7" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorNet)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* 1-Col Quick Actions & Store Health */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Executive Shortcuts</h3>
                  
                  <div className="space-y-2.5">
                    <button
                      onClick={() => setActiveSidebarTab('Sales')}
                      className="w-full p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 hover:bg-indigo-100 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">View Detailed Sales</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-indigo-500" />
                    </button>

                    <button
                      onClick={() => setActiveSidebarTab('Payments')}
                      className="w-full p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 hover:bg-emerald-100 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">Gateway Settlements</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-emerald-500" />
                    </button>

                    <button
                      onClick={() => setActiveSidebarTab('Refunds')}
                      className="w-full p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60 hover:bg-amber-100 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <RotateCcw className="w-4 h-4 text-amber-600" />
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">Pending Return Requests</span>
                      </div>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-500 text-white">3 New</span>
                    </button>

                    <button
                      onClick={() => setActiveSidebarTab('Users')}
                      className="w-full p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 hover:bg-purple-100 flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <UserPlus className="w-4 h-4 text-purple-600" />
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">Manage System Users</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-purple-500" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ==================== TAB 2: PRODUCTS ==================== */}
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
                        <button onClick={() => {
                          setProductsList(productsList.filter(p => p.id !== prod.id));
                          showToast(`Product "${prod.title}" removed from store catalog.`);
                        }} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-rose-50 text-rose-500" title="Delete Product">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 3: ORDERS ==================== */}
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

          {/* ==================== TAB 4: CATEGORIES ==================== */}
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

          {/* ==================== TAB 5: BRANDS ==================== */}
          {activeSidebarTab === 'Brands' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Authorized Brand Partners</h2>
                  <p className="text-xs text-slate-500">Manage verified brands and official merchant stores</p>
                </div>
                <button onClick={() => showToast('Brand partner registration form opened')} className="bg-[#6366f1] text-white font-bold px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5">
                  <Plus className="w-4 h-4" /> Add Partner Brand
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Apple Inc.', category: 'Electronics & Mobiles', items: '18 Products', rating: '4.9 ★', badge: 'Tier 1 Partner' },
                  { name: 'Sony Electronics', category: 'Audio & Cameras', items: '14 Products', rating: '4.8 ★', badge: 'Tier 1 Partner' },
                  { name: 'boAt Lifestyle', category: 'Wearables & Audio', items: '24 Products', rating: '4.7 ★', badge: 'Verified Merchant' },
                  { name: 'Nike Athletic', category: 'Footwear & Apparel', items: '32 Products', rating: '4.9 ★', badge: 'Tier 1 Partner' },
                  { name: 'Samsung Digital', category: 'Smartphones & Smart TVs', items: '20 Products', rating: '4.8 ★', badge: 'Tier 1 Partner' },
                  { name: 'Skybags India', category: 'Travel & Luggage', items: '12 Products', rating: '4.6 ★', badge: 'Verified Merchant' }
                ].map((b, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{b.name}</h4>
                      <p className="text-slate-400 text-[11px]">{b.category} • {b.items}</p>
                      <p className="text-amber-500 font-bold text-[11px] mt-1">{b.rating}</p>
                    </div>
                    <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-bold text-[10px] px-2.5 py-1 rounded-full">
                      {b.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 6: CUSTOMERS ==================== */}
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

          {/* ==================== TAB 7: COUPONS ==================== */}
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

          {/* ==================== TAB 8: REVIEWS ==================== */}
          {activeSidebarTab === 'Reviews' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Customer Reviews & Ratings ({reviewsList.length})</h2>
                  <p className="text-xs text-slate-500">Moderate product reviews and customer satisfaction feedback</p>
                </div>
              </div>

              <div className="space-y-3">
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-500">{'★'.repeat(rev.rating)}</span>
                        <span className="font-extrabold text-slate-900 dark:text-white">{rev.product}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mt-1 italic">"{rev.comment}"</p>
                      <p className="text-[11px] text-slate-400 mt-1">By <strong>{rev.reviewer}</strong> on {rev.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-700 font-bold text-[10px] px-2.5 py-1 rounded-full">
                        {rev.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 9: WISHLIST ==================== */}
          {activeSidebarTab === 'Wishlist' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Trending Wishlist Analytics</h2>
                <p className="text-xs text-slate-500">Track high-intent customer wishlisted items and conversion rates</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Apple iPhone 15 Pro Max', wishlists: 482, inStock: 'Available', potential: '₹64,20,000' },
                  { title: 'Sony WH-1000XM5 Wireless', wishlists: 310, inStock: 'Low Stock (4)', potential: '₹8,36,690' },
                  { title: 'boAt Nirvana Ion ANC', wishlists: 245, inStock: 'Available', potential: '₹6,12,255' },
                  { title: 'Nike Air Max Pulse', wishlists: 198, inStock: 'Available', potential: '₹9,49,410' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">Status: <strong className="text-emerald-600">{item.inStock}</strong></p>
                      <p className="text-indigo-600 font-bold text-[11px] mt-1">Pipeline Potential: {item.potential}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-rose-500 font-extrabold text-sm flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-rose-500" /> {item.wishlists}
                      </span>
                      <span className="text-[10px] text-slate-400">wishlists</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 10: SALES (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Sales' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Sales & Revenue Intelligence</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Real-time revenue telemetry, gross vs net breakdown, and sales channel velocity</p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={salesTimeframe}
                    onChange={(e) => setSalesTimeframe(e.target.value)}
                    className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    <option>Today</option>
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>This Financial Year</option>
                  </select>

                  <button
                    onClick={handleExportReport}
                    className="bg-[#6366f1] text-white font-extrabold px-4 py-2 rounded-xl shadow flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Export Sales CSV
                  </button>
                </div>
              </div>

              {/* Sales Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">GROSS SALES</span>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹18,42,950</p>
                  <div className="flex items-center gap-1 text-emerald-500 font-extrabold text-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +23.8% YoY growth
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">NET REVENUE</span>
                  <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">₹16,95,400</p>
                  <p className="text-[11px] text-slate-400">After ₹1,47,550 GST & gateway fee</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">AVERAGE ORDER VALUE (AOV)</span>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹1,480.28</p>
                  <div className="flex items-center gap-1 text-emerald-500 font-extrabold text-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +5.4% from coupons
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">CONVERSION RATE</span>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">3.64%</p>
                  <p className="text-[11px] text-slate-400">34,120 website store visits</p>
                </div>
              </div>

              {/* Dynamic Sales Velocity Recharts Graph */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-indigo-600" /> Sales Velocity & Order Volumes ({salesTimeframe})
                    </h3>
                    <p className="text-xs text-slate-400">Time-series breakdown of store transaction volume</p>
                  </div>
                </div>

                <div className="h-64 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SALES_TIMEFRAME_DATA[salesTimeframe] || SALES_TIMEFRAME_DATA['Last 30 Days']} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.4} vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                      <Tooltip
                        formatter={(val: any, name: any) => [
                          name === 'sales' ? `₹${Number(val).toLocaleString('en-IN')}` : `${val} orders`,
                          name === 'sales' ? 'Sales Revenue' : 'Volume'
                        ]}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderColor: '#334155',
                          borderRadius: '16px',
                          color: '#ffffff',
                          fontSize: '12px',
                          fontWeight: 700
                        }}
                      />
                      <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Category Breakdown & Sales Channels */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Category Sales Distribution */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-purple-600" /> Revenue by Category
                  </h3>

                  <div className="space-y-3">
                    {[
                      { name: 'Electronics & Mobiles', pct: 48, rev: '₹8,84,616', color: 'bg-indigo-600' },
                      { name: 'Men & Women Fashion', pct: 24, rev: '₹4,42,308', color: 'bg-purple-600' },
                      { name: 'Home & Kitchen Appliances', pct: 15, rev: '₹2,76,442', color: 'bg-pink-500' },
                      { name: 'Beauty & Personal Care', pct: 8, rev: '₹1,47,436', color: 'bg-amber-500' },
                      { name: 'Sports & Fitness', pct: 5, rev: '₹92,148', color: 'bg-emerald-500' }
                    ].map((cat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between font-bold">
                          <span>{cat.name} ({cat.pct}%)</span>
                          <span className="text-slate-900 dark:text-white font-extrabold">{cat.rev}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div className={`h-full ${cat.color}`} style={{ width: `${cat.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sales Channels Breakdown */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" /> Payment Velocity Distribution
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
                      <span className="text-indigo-600 font-extrabold text-xs block">UPI 2.0 (GPay / PhonePe)</span>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">₹11,42,600</p>
                      <span className="text-[10px] text-slate-400">62% of total transactions</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                      <span className="text-blue-600 font-extrabold text-xs block">Credit & Debit Cards</span>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">₹4,23,800</p>
                      <span className="text-[10px] text-slate-400">23% of total transactions</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900">
                      <span className="text-purple-600 font-extrabold text-xs block">Net Banking</span>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">₹1,84,300</p>
                      <span className="text-[10px] text-slate-400">10% of total transactions</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900">
                      <span className="text-amber-600 font-extrabold text-xs block">Cash On Delivery</span>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">₹92,250</p>
                      <span className="text-[10px] text-slate-400">5% of total transactions</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* High-Value Invoices & Sales Ledger */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Recent Sales Invoices & Orders</h3>
                  <span className="text-slate-400 text-xs">Live Database Synced</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px] uppercase">
                        <th className="pb-2">Invoice #</th>
                        <th className="pb-2">Customer</th>
                        <th className="pb-2">Channel</th>
                        <th className="pb-2">Gross Total</th>
                        <th className="pb-2">GST Tax</th>
                        <th className="pb-2">Net Payout</th>
                        <th className="pb-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {salesBreakdownList.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 font-mono font-bold text-indigo-600">{item.id}</td>
                          <td className="py-3 font-bold text-slate-900 dark:text-white">{item.customer}</td>
                          <td className="py-3 text-slate-500">{item.channel}</td>
                          <td className="py-3 font-extrabold text-slate-900 dark:text-white">{item.gross}</td>
                          <td className="py-3 text-slate-400">{item.tax}</td>
                          <td className="py-3 font-bold text-emerald-600">{item.net}</td>
                          <td className="py-3">
                            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 11: PAYMENTS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Payments' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-emerald-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Payment Gateways & Settlements</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Multi-gateway routing, live transaction hashes, fee reconciliation, and bank settlements</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-extrabold px-3 py-1.5 rounded-xl border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    All Gateways Operational
                  </span>
                </div>
              </div>

              {/* Gateway Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Razorpay (UPI + Cards)</h4>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Live</span>
                  </div>
                  <p className="text-slate-400 text-xs">Merchant ID: <strong className="font-mono text-slate-700 dark:text-slate-300">rzp_live_crtfy991</strong></p>
                  <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-[11px]">
                    <span>Standard Fee: <strong>1.8% + GST</strong></span>
                    <span className="text-indigo-600 font-bold">Payout: T+1 Day</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Stripe International</h4>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Live</span>
                  </div>
                  <p className="text-slate-400 text-xs">Account: <strong className="font-mono text-slate-700 dark:text-slate-300">acct_1NZCartify</strong></p>
                  <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-[11px]">
                    <span>Global Fee: <strong>2.9% + 30¢</strong></span>
                    <span className="text-blue-600 font-bold">Auto-Currency FX</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Cash on Delivery (COD)</h4>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
                  </div>
                  <p className="text-slate-400 text-xs">Escrow Handover: <strong className="text-slate-700 dark:text-slate-300">Delivery Partner API</strong></p>
                  <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-[11px]">
                    <span>OTP Verification: <strong>Enforced</strong></span>
                    <span className="text-amber-600 font-bold">Max Limit: ₹10,000</span>
                  </div>
                </div>
              </div>

              {/* Payments Transaction Filter & Table */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Transactions Audit Ledger</h3>
                    <p className="text-xs text-slate-400">Review all captured, authorized, and settled customer payments</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <select
                      value={paymentGatewayFilter}
                      onChange={(e) => setPaymentGatewayFilter(e.target.value)}
                      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl font-bold text-xs"
                    >
                      <option value="All">All Gateways</option>
                      <option value="Razorpay">Razorpay</option>
                      <option value="Stripe">Stripe</option>
                      <option value="COD">Cash on Delivery</option>
                    </select>

                    <select
                      value={paymentStatusFilter}
                      onChange={(e) => setPaymentStatusFilter(e.target.value)}
                      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl font-bold text-xs"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Success">Success</option>
                      <option value="Pending">Pending</option>
                      <option value="Failed">Failed</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px] uppercase">
                        <th className="pb-2">Txn ID</th>
                        <th className="pb-2">Order</th>
                        <th className="pb-2">Customer</th>
                        <th className="pb-2">Gateway & Method</th>
                        <th className="pb-2">Amount</th>
                        <th className="pb-2">Gateway Fee</th>
                        <th className="pb-2">Net Settled</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {filteredPayments.map((p) => (
                        <tr key={p.txnId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 font-mono font-bold text-indigo-600">{p.txnId}</td>
                          <td className="py-3 font-bold text-slate-900 dark:text-white">{p.orderId}</td>
                          <td className="py-3 text-slate-700 dark:text-slate-300">{p.customer}</td>
                          <td className="py-3">
                            <span className="font-bold text-slate-900 dark:text-white block">{p.gateway}</span>
                            <span className="text-[10px] text-slate-400">{p.method}</span>
                          </td>
                          <td className="py-3 font-extrabold text-slate-900 dark:text-white">{p.amount}</td>
                          <td className="py-3 text-slate-400">{p.fee}</td>
                          <td className="py-3 font-bold text-emerald-600">{p.net}</td>
                          <td className="py-3">
                            <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                              p.status === 'Success'
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                                : p.status.includes('Pending')
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                                : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                            }`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="py-3">
                            <button
                              onClick={() => setSelectedTxnReceipt(p)}
                              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-300"
                              title="View Receipt Slip"
                            >
                              <Receipt className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 12: REFUNDS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Refunds' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-6 h-6 text-rose-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Return & Refund Processing Desk</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Review buyer return claims, inspection verification, instant bank reversals, and dispute resolution</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 font-extrabold px-3 py-1.5 rounded-xl border border-rose-200">
                    {refundsList.filter(r => r.status === 'Pending Approval').length} Requests Awaiting Review
                  </span>
                </div>
              </div>

              {/* Refund KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">TOTAL REFUNDED</span>
                  <p className="text-2xl font-extrabold text-rose-600">₹48,200</p>
                  <p className="text-[11px] text-slate-400">14 total processed cases</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">PENDING ACTIONS</span>
                  <p className="text-2xl font-extrabold text-amber-500">{refundsList.filter(r => r.status === 'Pending Approval').length}</p>
                  <p className="text-[11px] text-slate-400">Requires manager approval</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">AVG SLA TURNAROUND</span>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">1.4 Days</p>
                  <p className="text-[11px] text-emerald-500 font-bold">Fastest in industry</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">STORE RETURN RATE</span>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">1.8%</p>
                  <p className="text-[11px] text-slate-400">Well below 5% benchmark</p>
                </div>
              </div>

              {/* Refunds Queue & Actions */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {['All', 'Pending', 'Approved', 'Processed', 'Rejected'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setRefundStatusFilter(status)}
                        className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                          refundStatusFilter === status ? 'bg-[#6366f1] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {status} ({status === 'All' ? refundsList.length : refundsList.filter(r => r.status.toLowerCase().includes(status.toLowerCase())).length})
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredRefunds.map((ref) => (
                    <div key={ref.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1 max-w-lg">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-rose-600 text-sm">{ref.id}</span>
                          <span className="font-bold text-slate-900 dark:text-white">for Order {ref.orderId}</span>
                          <span className={`px-2 py-0.5 rounded-full font-extrabold text-[10px] ${
                            ref.status === 'Approved' || ref.status === 'Processed'
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                              : ref.status === 'Rejected'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {ref.status}
                          </span>
                        </div>
                        <p className="font-extrabold text-slate-900 dark:text-white">{ref.product}</p>
                        <p className="text-slate-500 text-xs">Customer: <strong>{ref.customer}</strong> ({ref.email}) • Date: {ref.date}</p>
                        <p className="text-slate-600 dark:text-slate-300 text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                          <strong>Reason:</strong> {ref.reason} | <strong>Inspection:</strong> {ref.condition}
                        </p>
                      </div>

                      <div className="flex md:flex-col items-end justify-between md:justify-center gap-3 shrink-0">
                        <div className="text-right">
                          <span className="text-xl font-extrabold text-slate-900 dark:text-white">{ref.amount}</span>
                          <span className="text-[10px] text-slate-400 block">Refund Value</span>
                        </div>

                        {ref.status === 'Pending Approval' && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleApproveRefund(ref.id, ref.customer)}
                              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow flex items-center gap-1"
                            >
                              <Check className="w-3.5 h-3.5" /> Approve
                            </button>
                            <button
                              onClick={() => handleRejectRefund(ref.id, ref.customer)}
                              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-extrabold rounded-xl shadow flex items-center gap-1"
                            >
                              <X className="w-3.5 h-3.5" /> Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 13: REPORTS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Reports' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Business Intelligence & Exportable Reports</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Generate comprehensive financial reconciliations, stock valuation audits, GST filings, and customer cohorts</p>
                </div>
              </div>

              {/* 4 Ready-to-Download Report Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'P&L Revenue Statement',
                    desc: 'Comprehensive monthly gross, net, taxes and profit margins',
                    period: 'May 2024 (Current)',
                    type: 'Finance & Sales',
                    icon: BarChart3,
                    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60'
                  },
                  {
                    title: 'Inventory Stock Valuation',
                    desc: 'Active SKU quantities, warehouse cost, and stockout warnings',
                    period: `${productsList.length} Active SKUs`,
                    type: 'Inventory & Catalog',
                    icon: Package,
                    color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/60'
                  },
                  {
                    title: 'Customer Cohort LTV',
                    desc: 'Shopper lifetime value, repeat frequency, and wallet coins',
                    period: '8,732 Shoppers',
                    type: 'CRM & Marketing',
                    icon: Users,
                    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60'
                  },
                  {
                    title: 'GST & Tax Reconciliation',
                    desc: 'HSN summary, 18% GST collected, and e-way bill references',
                    period: 'FY 2024-Q1',
                    type: 'Compliance & Tax',
                    icon: FileText,
                    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60'
                  }
                ].map((rep, idx) => {
                  const IconComp = rep.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className={`w-10 h-10 rounded-xl ${rep.color} flex items-center justify-center`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{rep.title}</h4>
                        <p className="text-slate-400 text-xs">{rep.desc}</p>
                        <span className="text-[10px] font-bold text-slate-500 block">{rep.period}</span>
                      </div>

                      <button
                        onClick={handleExportReport}
                        className="w-full py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" /> Download (.CSV)
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Custom Report Builder */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Custom Report Generation Engine</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold mb-1">Report Dataset</label>
                    <select
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                    >
                      <option>Sales & Revenue</option>
                      <option>Products & Inventory</option>
                      <option>Orders & Delivery</option>
                      <option>Customers & Wallets</option>
                      <option>Refunds & Returns</option>
                      <option>Payment Gateway Settlements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Time Period</label>
                    <select
                      value={reportDateRange}
                      onChange={(e) => setReportDateRange(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                    >
                      <option>Current Month (May 2024)</option>
                      <option>Previous Quarter (Q1 2024)</option>
                      <option>Last 6 Months</option>
                      <option>Full Year 2023-2024</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Export Format</label>
                    <select
                      value={reportFormat}
                      onChange={(e) => setReportFormat(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                    >
                      <option>CSV (.csv)</option>
                      <option>Excel Spreadsheet (.xlsx)</option>
                      <option>PDF Executive Summary (.pdf)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleExportReport}
                  className="bg-[#6366f1] hover:bg-indigo-500 text-white font-extrabold px-6 py-3 rounded-xl shadow flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Build & Download {reportType} Report
                </button>
              </div>

              {/* Geographic Region Breakdown */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">State-Wise Revenue Distribution</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-extrabold text-slate-900 dark:text-white text-sm">Maharashtra</p>
                    <p className="text-indigo-600 font-extrabold text-base mt-0.5">34%</p>
                    <span className="text-[10px] text-slate-400">₹6,26,600</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-extrabold text-slate-900 dark:text-white text-sm">Karnataka</p>
                    <p className="text-indigo-600 font-extrabold text-base mt-0.5">22%</p>
                    <span className="text-[10px] text-slate-400">₹4,05,449</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-extrabold text-slate-900 dark:text-white text-sm">Delhi NCR</p>
                    <p className="text-indigo-600 font-extrabold text-base mt-0.5">18%</p>
                    <span className="text-[10px] text-slate-400">₹3,31,731</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-extrabold text-slate-900 dark:text-white text-sm">Tamil Nadu</p>
                    <p className="text-indigo-600 font-extrabold text-base mt-0.5">14%</p>
                    <span className="text-[10px] text-slate-400">₹2,58,013</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <p className="font-extrabold text-slate-900 dark:text-white text-sm">Other States</p>
                    <p className="text-indigo-600 font-extrabold text-base mt-0.5">12%</p>
                    <span className="text-[10px] text-slate-400">₹2,21,154</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 14: USERS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Users' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">System User & Staff Accounts</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Manage executive administrators, marketplace sellers, customer care staff, and registered customer logins</p>
                </div>

                <button
                  onClick={() => setIsAddUserModalOpen(true)}
                  className="bg-[#6366f1] text-white font-extrabold px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5"
                >
                  <UserPlus className="w-4 h-4" /> Add Staff Account
                </button>
              </div>

              {/* User Directory Table & Search */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 flex-1 max-w-sm">
                    <div className="relative w-full">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={userSearchQuery}
                        onChange={(e) => setUserSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {['All', 'Super Admin', 'Store Manager', 'Seller / Vendor', 'Support Agent', 'Customer'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setUserRoleFilter(role)}
                        className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                          userRoleFilter === role ? 'bg-[#6366f1] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px] uppercase">
                        <th className="pb-2">User Details</th>
                        <th className="pb-2">System Role</th>
                        <th className="pb-2">Department</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Last Active</th>
                        <th className="pb-2">IP Address</th>
                        <th className="pb-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {filteredUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="py-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs">
                                {u.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-extrabold text-slate-900 dark:text-white">{u.name}</p>
                                <p className="text-[11px] text-slate-400">{u.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] ${
                              u.role === 'Super Admin'
                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                                : u.role === 'Store Manager'
                                ? 'bg-indigo-100 text-indigo-700'
                                : u.role.includes('Seller')
                                ? 'bg-blue-100 text-blue-700'
                                : u.role.includes('Support')
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                            }`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="py-3 text-slate-500">{u.department}</td>
                          <td className="py-3">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              u.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                            }`}>
                              {u.status}
                            </span>
                          </td>
                          <td className="py-3 text-slate-400">{u.lastLogin}</td>
                          <td className="py-3 font-mono text-[11px] text-slate-400">{u.ip}</td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleToggleUserStatus(u.id)}
                                className={`px-2.5 py-1 rounded-lg font-bold text-[10px] border transition-colors ${
                                  u.status === 'Active'
                                    ? 'border-amber-200 text-amber-600 hover:bg-amber-50'
                                    : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'
                                }`}
                              >
                                {u.status === 'Active' ? 'Suspend' : 'Activate'}
                              </button>
                              <button
                                onClick={() => handleDeleteUser(u.id, u.name)}
                                className="p-1 rounded-lg border border-slate-200 hover:bg-rose-50 text-rose-500"
                                title="Delete User"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 15: ROLES & PERMISSIONS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Roles & Permissions' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Role-Based Access Control (RBAC)</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Configure granular read, write, and deletion privileges for system roles across all domain modules</p>
                </div>

                <button
                  onClick={handleSaveRbac}
                  className="bg-[#6366f1] text-white font-extrabold px-5 py-2.5 rounded-xl shadow flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" /> Save RBAC Matrix Changes
                </button>
              </div>

              {/* Roles Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: 'Super Admin', desc: 'Unrestricted full root control', icon: Crown, color: 'text-purple-600 bg-purple-50' },
                  { name: 'Store Manager', desc: 'Catalog, stock & dispatches', icon: ShieldCheck, color: 'text-indigo-600 bg-indigo-50' },
                  { name: 'Seller / Vendor', desc: 'Own product & sales metrics', icon: Building, color: 'text-blue-600 bg-blue-50' },
                  { name: 'Support Agent', desc: 'Order tracking & refund reviews', icon: Headphones, color: 'text-amber-600 bg-amber-50' },
                  { name: 'Financial Auditor', desc: 'Read-only financial statements', icon: BarChart3, color: 'text-emerald-600 bg-emerald-50' }
                ].map((r, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-lg ${r.color} flex items-center justify-center font-bold text-xs`}>
                        <r.icon className="w-4 h-4" />
                      </span>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{r.name}</h4>
                    </div>
                    <p className="text-slate-400 text-[11px]">{r.desc}</p>
                  </div>
                ))}
              </div>

              {/* RBAC Matrix Table */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Module Access Matrix</h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px] uppercase">
                        <th className="pb-3">Domain Module</th>
                        <th className="pb-3 text-center">Super Admin</th>
                        <th className="pb-3 text-center">Store Manager</th>
                        <th className="pb-3 text-center">Seller / Vendor</th>
                        <th className="pb-3 text-center">Support Agent</th>
                        <th className="pb-3 text-center">Financial Auditor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {[
                        { module: 'Products & Inventory', desc: 'Add, edit, delete catalog SKUs' },
                        { module: 'Customer Orders', desc: 'View, fulfill, cancel orders' },
                        { module: 'Sales & Revenue Telemetry', desc: 'Access revenue reports and margins' },
                        { module: 'Payment Gateways & Payouts', desc: 'Manage Razorpay, Stripe, settlements' },
                        { module: 'Refund & Returns Queue', desc: 'Approve or reject customer claims' },
                        { module: 'Store Coupons & Promos', desc: 'Create and broadcast discount codes' },
                        { module: 'System Configurations', desc: 'Modify taxes, API keys, AI model' },
                        { module: 'Staff & User Accounts', desc: 'Create, suspend, or delete accounts' }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="py-3.5">
                            <span className="font-extrabold text-slate-900 dark:text-white block text-xs">{row.module}</span>
                            <span className="text-[10px] text-slate-400">{row.desc}</span>
                          </td>
                          
                          {/* Super Admin */}
                          <td className="py-3.5 text-center">
                            <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-extrabold text-[10px]">Read/Write/Del</span>
                          </td>

                          {/* Store Manager */}
                          <td className="py-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              idx < 3 || idx === 4 || idx === 5 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {idx < 3 || idx === 4 || idx === 5 ? 'Read / Edit' : 'Restricted'}
                            </span>
                          </td>

                          {/* Seller */}
                          <td className="py-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              idx === 0 || idx === 1 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {idx === 0 || idx === 1 ? 'Own Data Only' : 'Restricted'}
                            </span>
                          </td>

                          {/* Support Agent */}
                          <td className="py-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              idx === 1 || idx === 4 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {idx === 1 || idx === 4 ? 'Support Read/Edit' : 'Restricted'}
                            </span>
                          </td>

                          {/* Financial Auditor */}
                          <td className="py-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              idx === 2 || idx === 3 ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-400'
                            }`}>
                              {idx === 2 || idx === 3 ? 'Read-Only Audit' : 'Restricted'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 16: SETTINGS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Settings' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Store & Platform Configurations</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Configure global store identities, checkout tax policies, AI shopping assistant, and security controls</p>
                </div>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-6">
                
                {/* SECTION 1: GENERAL STORE PROFILE */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">General Marketplace Profile</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1">Store Legal Name</label>
                      <input
                        type="text"
                        value={storeSettings.storeName}
                        onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Primary Support Email</label>
                      <input
                        type="email"
                        value={storeSettings.supportEmail}
                        onChange={(e) => setStoreSettings({ ...storeSettings, supportEmail: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Customer Care Helpline</label>
                      <input
                        type="text"
                        value={storeSettings.supportPhone}
                        onChange={(e) => setStoreSettings({ ...storeSettings, supportPhone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Store Base Currency</label>
                      <select
                        value={storeSettings.currency}
                        onChange={(e) => setStoreSettings({ ...storeSettings, currency: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                      >
                        <option>INR (₹) - Indian Rupee</option>
                        <option>USD ($) - US Dollar</option>
                        <option>EUR (€) - Euro</option>
                        <option>GBP (£) - British Pound</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: CHECKOUT & TAXES */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Checkout & Tax Rules</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1">Free Shipping Threshold (₹)</label>
                      <input
                        type="number"
                        value={storeSettings.freeShippingThreshold}
                        onChange={(e) => setStoreSettings({ ...storeSettings, freeShippingThreshold: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Default GST Rate (%)</label>
                      <input
                        type="number"
                        value={storeSettings.gstTaxRate}
                        onChange={(e) => setStoreSettings({ ...storeSettings, gstTaxRate: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="font-extrabold text-slate-900 dark:text-white">Allow Guest Checkout</p>
                        <p className="text-[10px] text-slate-400">Buyers can checkout without password</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={storeSettings.enableGuestCheckout}
                        onChange={(e) => setStoreSettings({ ...storeSettings, enableGuestCheckout: e.target.checked })}
                        className="w-5 h-5 rounded text-indigo-600 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="font-extrabold text-slate-900 dark:text-white">Enable Cash on Delivery (COD)</p>
                        <p className="text-[10px] text-slate-400">Enables COD payment option at checkout</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={storeSettings.enableCOD}
                        onChange={(e) => setStoreSettings({ ...storeSettings, enableCOD: e.target.checked })}
                        className="w-5 h-5 rounded text-indigo-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 3: AI RUFUS ASSISTANT */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-600" />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">AI Rufus Shopping Assistant (Google Gemini)</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1">Gemini AI Model Engine</label>
                      <select
                        value={storeSettings.geminiModel}
                        onChange={(e) => setStoreSettings({ ...storeSettings, geminiModel: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                      >
                        <option value="gemini-2.5-flash">Gemini 2.5 Flash (Ultra-fast & Recommended)</option>
                        <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Context Reasoning)</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="font-extrabold text-slate-900 dark:text-white">AI Auto-Coupon Hints</p>
                        <p className="text-[10px] text-slate-400">Rufus suggests best promo codes to shoppers</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={storeSettings.aiAutoCoupons}
                        onChange={(e) => setStoreSettings({ ...storeSettings, aiAutoCoupons: e.target.checked })}
                        className="w-5 h-5 rounded text-purple-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#6366f1] hover:bg-indigo-500 text-white font-extrabold px-8 py-3 rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center gap-2 text-sm"
                  >
                    <Check className="w-5 h-5" /> Save All Settings
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* ==================== TAB 17: ACTIVITY LOGS (FULL PAGE) ==================== */}
          {activeSidebarTab === 'Activity Logs' && (
            <div className="space-y-6 text-xs">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Real-Time Audit Trail & Telemetry</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Immutable security event logs, catalog mutations, admin authorizations, and firewall triggers</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-extrabold px-3 py-1.5 rounded-xl border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Audit Stream Active
                  </span>

                  <button
                    onClick={handleExportReport}
                    className="bg-[#6366f1] text-white font-extrabold px-4 py-2 rounded-xl shadow flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" /> Export Logs
                  </button>
                </div>
              </div>

              {/* Filter and Search Bar */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search logs by actor or action..."
                      value={logSearchQuery}
                      onChange={(e) => setLogSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {['All', 'Info', 'Warning', 'Success', 'Critical'].map((sev) => (
                      <button
                        key={sev}
                        onClick={() => setLogSeverityFilter(sev)}
                        className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                          logSeverityFilter === sev ? 'bg-[#6366f1] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {sev}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Audit Entries List */}
                <div className="space-y-3">
                  {filteredLogs.map((log) => (
                    <div key={log.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          {log.severity === 'Critical' ? (
                            <ShieldAlert className="w-5 h-5 text-rose-600" />
                          ) : log.severity === 'Warning' ? (
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                          ) : log.severity === 'Success' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <Activity className="w-5 h-5 text-indigo-600" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] text-slate-400 font-bold">{log.id}</span>
                            <span className="font-bold text-slate-900 dark:text-white">{log.actor}</span>
                            <span className="text-[10px] text-slate-400">({log.role})</span>
                            <span className={`px-2 py-0.2 rounded-full font-bold text-[10px] ${log.badge}`}>
                              {log.severity}
                            </span>
                          </div>
                          <p className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5">{log.action}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-slate-500 font-bold block">{log.timestamp}</span>
                        <span className="font-mono text-[10px] text-slate-400 block">IP: {log.ip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </main>
      </div>

      {/* ==================== MODAL 1: ADD NEW PRODUCT ==================== */}
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

      {/* ==================== MODAL 2: ADD NEW COUPON ==================== */}
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

      {/* ==================== MODAL 3: ADD NEW STAFF / USER ==================== */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Add Staff / Team Account</h3>
              <button onClick={() => setIsAddUserModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kulkarni"
                  value={newUserData.name}
                  onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="ramesh@cartify.com"
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">System Role</label>
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-bold"
                  >
                    <option>Store Manager</option>
                    <option>Seller / Vendor</option>
                    <option>Support Agent</option>
                    <option>Super Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Department</label>
                  <input
                    type="text"
                    placeholder="Operations / Support"
                    value={newUserData.department}
                    onChange={(e) => setNewUserData({ ...newUserData, department: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium"
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-[#6366f1] text-white font-extrabold rounded-xl shadow mt-2">
                Create & Send Access Invite
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL 4: TRANSACTION RECEIPT SLIP ==================== */}
      {selectedTxnReceipt && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Payment Receipt Slip</h3>
                <p className="font-mono text-slate-400 text-[11px]">{selectedTxnReceipt.txnId}</p>
              </div>
              <button onClick={() => setSelectedTxnReceipt(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Order Reference:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedTxnReceipt.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Customer:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedTxnReceipt.customer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gateway:</span>
                <span className="font-bold text-indigo-600">{selectedTxnReceipt.gateway} ({selectedTxnReceipt.method})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gross Amount:</span>
                <span className="font-extrabold text-slate-900 dark:text-white">{selectedTxnReceipt.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Processing Fee:</span>
                <span className="text-slate-400">{selectedTxnReceipt.fee}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-2 font-bold text-sm">
                <span>Net Settled:</span>
                <span className="text-emerald-600">{selectedTxnReceipt.net}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Timestamp:</span>
                <span className="text-slate-500">{selectedTxnReceipt.timestamp}</span>
              </div>
            </div>

            <button
              onClick={() => {
                showToast(`Receipt for ${selectedTxnReceipt.txnId} downloaded`);
                setSelectedTxnReceipt(null);
              }}
              className="w-full py-3 bg-[#6366f1] text-white font-extrabold rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Official PDF Receipt
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
