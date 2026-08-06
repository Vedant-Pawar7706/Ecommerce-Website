import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MegaNav } from './components/MegaNav';
import { Footer } from './components/Footer';
import { AIRufusWidget } from './components/AIRufusWidget';
import { QuickViewModal } from './components/QuickViewModal';

import { LandingPage } from './pages/LandingPage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { ComparePage } from './pages/ComparePage';
import { Dashboard } from './pages/Dashboard';
import { AuthPage } from './pages/AuthPage';

import { useStore } from './store/useStore';

export function App() {
  const { theme } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
        
        {/* Navigation Header Bar */}
        <Navbar />
        <MegaNav />

        {/* Main Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>

        {/* AI Rufus Shopping Assistant Drawers */}
        <AIRufusWidget />
        <QuickViewModal />

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
