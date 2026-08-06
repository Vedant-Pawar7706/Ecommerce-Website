import { create } from 'zustand';
import { User, Product, CartItem, Coupon } from '../types';

export interface RegisteredUserRecord {
  email: string;
  password: string;
  user: User;
}

const DEFAULT_USERS: RegisteredUserRecord[] = [
  {
    email: 'vedant@gmail.com',
    password: 'Customer123!',
    user: {
      id: 1,
      email: 'vedant@gmail.com',
      full_name: 'Vedant Pawar',
      phone: '+91 98765 43210',
      role: 'customer',
      is_active: true,
      is_verified: true,
      wallet_balance: 350,
      reward_coins: 750,
      created_at: '2026-01-15T00:00:00.000Z'
    }
  },
  {
    email: 'rahul.sharma@email.com',
    password: 'Customer123!',
    user: {
      id: 2,
      email: 'rahul.sharma@email.com',
      full_name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      role: 'customer',
      is_active: true,
      is_verified: true,
      wallet_balance: 350,
      reward_coins: 750,
      created_at: '2026-01-15T00:00:00.000Z'
    }
  },
  {
    email: 'alex.johnson@example.com',
    password: 'Customer123!',
    user: {
      id: 3,
      email: 'alex.johnson@example.com',
      full_name: 'Alex Johnson',
      phone: '+91 98765 43210',
      role: 'customer',
      is_active: true,
      is_verified: true,
      wallet_balance: 10000,
      reward_coins: 750,
      created_at: '2026-01-15T00:00:00.000Z'
    }
  },
  {
    email: 'seller@techhub.com',
    password: 'Seller123!',
    user: {
      id: 4,
      email: 'seller@techhub.com',
      full_name: 'TechHub Store',
      phone: '+91 98765 43210',
      role: 'seller',
      is_active: true,
      is_verified: true,
      wallet_balance: 25000,
      reward_coins: 500,
      created_at: '2026-01-15T00:00:00.000Z'
    }
  },
  {
    email: 'admin@cartify.com',
    password: 'Admin123!',
    user: {
      id: 5,
      email: 'admin@cartify.com',
      full_name: 'Cartify Admin',
      phone: '+91 98765 43210',
      role: 'admin',
      is_active: true,
      is_verified: true,
      wallet_balance: 50000,
      reward_coins: 1000,
      created_at: '2026-01-15T00:00:00.000Z'
    }
  }
];

const loadRegisteredUsers = (): RegisteredUserRecord[] => {
  try {
    const saved = localStorage.getItem('cartify_registered_users');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load registered users', e);
  }
  localStorage.setItem('cartify_registered_users', JSON.stringify(DEFAULT_USERS));
  return DEFAULT_USERS;
};

const saveRegisteredUsers = (users: RegisteredUserRecord[]) => {
  try {
    localStorage.setItem('cartify_registered_users', JSON.stringify(users));
  } catch (e) {
    console.error('Failed to save registered users', e);
  }
};

interface CartifyStore {
  // Auth state
  user: User | null;
  token: string | null;
  setUser: (user: User | null, token?: string) => void;
  logout: () => void;
  authenticateUser: (email: string, pass: string) => { success: boolean; message?: string; user?: User };
  registerAccount: (email: string, pass: string, user: User) => { success: boolean; message?: string; user?: User };

  // Cart state
  cartItems: { product: Product; variantId?: number; quantity: number }[];
  appliedCoupon: Coupon | null;
  addToCart: (product: Product, quantity?: number, variantId?: number) => void;
  removeFromCart: (productId: number, variantId?: number) => void;
  updateQuantity: (productId: number, quantity: number, variantId?: number) => void;
  clearCart: () => void;
  setAppliedCoupon: (coupon: Coupon | null) => void;

  // Wishlist state
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;

  // Compare state
  compareList: Product[];
  toggleCompare: (product: Product) => void;

  // UI state
  isCartifyAIOpen: boolean;
  setCartifyAIOpen: (open: boolean) => void;
  isAIRufusOpen: boolean;
  setAIRufusOpen: (open: boolean) => void;
  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  
  // Theme state
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const useStore = create<CartifyStore>((set, get) => ({
  // Auth
  user: null,
  token: localStorage.getItem('cartify_token') || null,
  setUser: (user, token) => {
    if (token) localStorage.setItem('cartify_token', token);
    set({ user, token: token || get().token });
  },
  logout: () => {
    localStorage.removeItem('cartify_token');
    set({ user: null, token: null });
  },
  authenticateUser: (email: string, pass: string) => {
    const records = loadRegisteredUsers();
    const cleanEmail = email.trim().toLowerCase();
    const found = records.find(r => r.email.toLowerCase() === cleanEmail);

    if (!found) {
      return { success: false, message: 'Account not registered. Please create an account first.' };
    }
    if (found.password !== pass) {
      return { success: false, message: 'Incorrect password. Please check your credentials.' };
    }

    const token = 'cartify_jwt_token_' + Date.now();
    localStorage.setItem('cartify_token', token);
    set({ user: found.user, token });
    return { success: true, user: found.user };
  },
  registerAccount: (email: string, pass: string, newUser: User) => {
    const records = loadRegisteredUsers();
    const cleanEmail = email.trim().toLowerCase();
    const exists = records.some(r => r.email.toLowerCase() === cleanEmail);

    if (exists) {
      return { success: false, message: 'This email is already registered. Please sign in instead.' };
    }

    const newRecord: RegisteredUserRecord = {
      email: cleanEmail,
      password: pass,
      user: newUser
    };

    const updated = [...records, newRecord];
    saveRegisteredUsers(updated);

    const token = 'cartify_jwt_token_' + Date.now();
    localStorage.setItem('cartify_token', token);
    set({ user: newUser, token });
    return { success: true, user: newUser };
  },

  // Cart
  cartItems: [],
  appliedCoupon: null,
  addToCart: (product, quantity = 1, variantId) => {
    set((state) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product.id === product.id && item.variantId === variantId
      );
      if (existingIndex > -1) {
        const updated = [...state.cartItems];
        updated[existingIndex].quantity += quantity;
        return { cartItems: updated };
      }
      return { cartItems: [...state.cartItems, { product, quantity, variantId }] };
    });
  },
  removeFromCart: (productId, variantId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => !(item.product.id === productId && item.variantId === variantId)
      ),
    }));
  },
  updateQuantity: (productId, quantity, variantId) => {
    set((state) => {
      if (quantity <= 0) {
        return {
          cartItems: state.cartItems.filter(
            (item) => !(item.product.id === productId && item.variantId === variantId)
          ),
        };
      }
      const updated = state.cartItems.map((item) => {
        if (item.product.id === productId && item.variantId === variantId) {
          return { ...item, quantity };
        }
        return item;
      });
      return { cartItems: updated };
    });
  },
  clearCart: () => set({ cartItems: [], appliedCoupon: null }),
  setAppliedCoupon: (coupon) => set({ appliedCoupon: coupon }),

  // Wishlist
  wishlist: [],
  toggleWishlist: (product) => {
    set((state) => {
      const exists = state.wishlist.some((p) => p.id === product.id);
      if (exists) {
        return { wishlist: state.wishlist.filter((p) => p.id !== product.id) };
      }
      return { wishlist: [...state.wishlist, product] };
    });
  },
  isInWishlist: (productId) => {
    return get().wishlist.some((p) => p.id === productId);
  },

  // Compare
  compareList: [],
  toggleCompare: (product) => {
    set((state) => {
      const exists = state.compareList.some((p) => p.id === product.id);
      if (exists) {
        return { compareList: state.compareList.filter((p) => p.id !== product.id) };
      }
      if (state.compareList.length >= 4) {
        return state;
      }
      return { compareList: [...state.compareList, product] };
    });
  },

  // UI
  isCartifyAIOpen: false,
  setCartifyAIOpen: (open) => set({ isCartifyAIOpen: open, isAIRufusOpen: open }),
  isAIRufusOpen: false,
  setAIRufusOpen: (open) => set({ isCartifyAIOpen: open, isAIRufusOpen: open }),
  isQuickViewOpen: false,
  quickViewProduct: null,
  openQuickView: (product) => set({ isQuickViewOpen: true, quickViewProduct: product }),
  closeQuickView: () => set({ isQuickViewOpen: false, quickViewProduct: null }),

  // Theme
  theme: 'light',
  toggleTheme: () => {
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { theme: nextTheme };
    });
  },
}));

export default useStore;
