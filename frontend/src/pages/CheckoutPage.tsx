import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { CreditCard, Wallet, ShieldCheck, Truck, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useStore();

  const [step, setStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'upi' | 'cod' | 'wallet'>('credit_card');
  
  const [address, setAddress] = useState({
    full_name: 'Alex Johnson',
    phone: '+91 98765 43210',
    street_address: '742 Evergreen Terrace',
    city: 'Mumbai',
    state: 'Maharashtra',
    postal_code: '400001',
    country: 'India'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.discount_price || item.product.base_price) * item.quantity, 0);
  const total = subtotal > 0 ? subtotal + (subtotal >= 999 ? 0 : 150) + subtotal * 0.08 : 0;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Checkout Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Express Checkout</h1>
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>1. Address</span>
          <span className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>2. Payment</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          
          {/* Step 1: Address */}
          {step === 1 && (
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white dark:bg-slate-950">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Shipping Address</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={address.full_name}
                    onChange={(e) => setAddress({ ...address, full_name: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2.5 rounded-xl border border-slate-300 dark:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2.5 rounded-xl border border-slate-300 dark:border-slate-800"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-slate-600 dark:text-slate-400 mb-1">Street Address</label>
                  <input
                    type="text"
                    value={address.street_address}
                    onChange={(e) => setAddress({ ...address, street_address: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2.5 rounded-xl border border-slate-300 dark:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1">City</label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2.5 rounded-xl border border-slate-300 dark:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1">Postal Code (Pincode)</label>
                  <input
                    type="text"
                    value={address.postal_code}
                    onChange={(e) => setAddress({ ...address, postal_code: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-2.5 rounded-xl border border-slate-300 dark:border-slate-800"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs py-3.5 rounded-xl shadow mt-4 flex items-center justify-center gap-2"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 bg-white dark:bg-slate-950">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Select Payment Gateway</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'credit_card', name: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
                  { id: 'upi', name: 'Instant UPI / Razorpay', icon: Wallet, desc: 'Google Pay, PhonePe, Paytm' },
                  { id: 'wallet', name: 'Cartify Wallet (₹10,000)', icon: Wallet, desc: 'Instant 1-Click Pay' },
                  { id: 'cod', name: 'Cash on Delivery', icon: Truck, desc: 'Pay when delivered' }
                ].map((pm) => {
                  const IconComp = pm.icon;
                  return (
                    <div
                      key={pm.id}
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${paymentMethod === pm.id ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-white font-semibold' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400'}`}
                    >
                      <IconComp className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-200">{pm.name}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{pm.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-gradient-to-r from-emerald-500 to-brand-600 hover:from-emerald-400 hover:to-brand-500 text-white font-extrabold text-sm py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Pay ₹{total.toLocaleString('en-IN')} & Place Order</span>
              </button>
            </div>
          )}

        </div>

        {/* Mini Order Summary */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 h-fit space-y-4 bg-white dark:bg-slate-950">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-200 dark:border-slate-800 pb-3">Cart Summary</h3>
          <div className="space-y-3">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
                <span className="truncate max-w-[180px]">{product.title} (x{quantity})</span>
                <span className="font-bold">₹{((product.discount_price || product.base_price) * quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between font-extrabold text-slate-900 dark:text-white text-base">
            <span>Total Payable</span>
            <span className="text-brand-600 dark:text-brand-400">₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
