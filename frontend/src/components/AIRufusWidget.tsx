import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  ExternalLink,
  ShoppingCart,
  Check,
  CheckCircle2,
  Mic,
  MicOff,
  Tag,
  RotateCcw,
  Zap,
  Maximize2,
  Minimize2,
  Scale,
  Star,
  Layers,
  Percent,
  Plus
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { sendAIChatMessage } from '../services/api';
import { AIChatMessage, Product, Coupon } from '../types';
import { Link } from 'react-router-dom';

const POPULAR_COUPONS: Coupon[] = [
  {
    id: 1,
    code: 'WELCOME15',
    description: '15% Off Your First Order',
    coupon_type: 'percentage',
    discount_type: 'percentage',
    discount_value: 15,
    min_order_amount: 500,
    max_discount_amount: 1500,
    expires_at: '2026-12-31T23:59:59Z',
    is_active: true
  },
  {
    id: 2,
    code: 'FREESHIP',
    description: '100% Free Express Shipping',
    coupon_type: 'free_shipping',
    discount_type: 'fixed',
    discount_value: 99,
    min_order_amount: 0,
    max_discount_amount: 99,
    expires_at: '2026-12-31T23:59:59Z',
    is_active: true
  },
  {
    id: 3,
    code: 'CARTIFY20',
    description: '20% Instant Festive Cashback',
    coupon_type: 'percentage',
    discount_type: 'percentage',
    discount_value: 20,
    min_order_amount: 999,
    max_discount_amount: 2000,
    expires_at: '2026-12-31T23:59:59Z',
    is_active: true
  }
];

export const AIRufusWidget: React.FC = () => {
  const {
    isAIRufusOpen,
    isCartifyAIOpen,
    setAIRufusOpen,
    setCartifyAIOpen,
    addToCart,
    setAppliedCoupon,
    openQuickView
  } = useStore();

  const isOpen = isCartifyAIOpen || isAIRufusOpen;
  const handleClose = () => {
    setCartifyAIOpen(false);
    setAIRufusOpen(false);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      session_id: 'initial',
      role: 'assistant',
      content: "👋 Hi! I'm **Cartify AI**, your intelligent Personal Shopping Concierge. I can help you find products, build budget setup bundles, compare specs side-by-side, apply promo discounts, or track live orders. What can I do for you today?",
      created_at: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState<number[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  // Voice Speech Recognition Setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsRecording(false);
        // Auto-send voice input
        sendMessageText(transcript);
      };

      recognitionRef.current.onerror = () => {
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const toggleVoiceRecording = () => {
    if (!recognitionRef.current) {
      showToast('Voice search not supported in this browser.');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      try {
        recognitionRef.current.start();
        showToast('🎙️ Listening... Speak your request now.');
      } catch (err) {
        setIsRecording(false);
      }
    }
  };

  const sendMessageText = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: AIChatMessage = {
      session_id: 'curr',
      role: 'user',
      content: text,
      created_at: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await sendAIChatMessage(text, messages[0]?.session_id);
      setMessages((prev) => [...prev, response]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          session_id: 'err',
          role: 'assistant',
          content: "I found top-rated options matching your request! Check out our catalog deals and apply code **WELCOME15** for 15% instant discount.",
          created_at: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const userText = input;
    setInput('');
    sendMessageText(userText);
  };

  // 1-Click Add Product to Cart from Chat
  const handleAddToCartFromAI = (prod: any) => {
    const productObj: Product = {
      id: prod.id,
      title: prod.title,
      slug: prod.slug || prod.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      sku: `CRT-${prod.id}`,
      brand: prod.brand || 'Cartify',
      category_id: 1,
      seller_id: 1,
      short_description: prod.title,
      description: `${prod.title} official authentic item.`,
      highlights: ['Brand Warranty', '2-Day Express Delivery'],
      base_price: Number(prod.base_price || prod.price),
      discount_price: Number(prod.price || prod.discount_price),
      discount_percentage: 15,
      stock_quantity: prod.stock_quantity || 25,
      is_in_stock: true,
      is_featured: true,
      is_trending: true,
      is_flash_sale: false,
      rating: prod.rating || 4.9,
      review_count: prod.review_count || 120,
      primary_image: prod.image || prod.primary_image,
      gallery_images: [prod.image || prod.primary_image],
      images_360: [],
      warranty_info: '1 Year Brand Warranty',
      return_policy: '7 Days Replacement Policy',
      estimated_delivery_days: 2,
      specs: [{ spec_key: 'Type', spec_value: 'Authentic' }],
      variants: [],
      faqs: []
    };

    addToCart(productObj, 1);
    setAddedItemIds((prev) => [...prev, prod.id]);
    showToast(`🛒 "${prod.title}" added to your Cart!`);
  };

  // 1-Click Add Entire Bundle to Cart
  const handleAddBundleToCart = (products: any[]) => {
    products.forEach((prod) => {
      handleAddToCartFromAI(prod);
    });
    showToast(`🎁 Entire ${products.length}-item setup bundle added to Cart!`);
  };

  // 1-Click Apply Coupon from Chat
  const handleApplyCoupon = (coupon: Coupon) => {
    setAppliedCoupon(coupon);
    showToast(`🏷️ Coupon code "${coupon.code}" applied to Cart!`);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 glass-panel bg-white/95 dark:bg-slate-950/95 border border-indigo-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100 ${
        isExpanded ? 'w-[92vw] max-w-2xl h-[700px]' : 'w-full max-w-md h-[580px]'
      }`}
    >
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-indigo-500 flex items-center gap-2 text-xs font-bold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-4 flex items-center justify-between text-white shadow-md select-none">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur shadow-inner">
            <Bot className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm flex items-center gap-1.5">
              <span>Cartify AI Assistant</span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                Gemini 2.5
              </span>
            </h3>
            <p className="text-[11px] text-indigo-200">Autonomous E-Commerce Concierge</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            title={isExpanded ? 'Collapse size' : 'Expand window'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            title="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Suggested Quick Action Chips */}
      <div className="bg-slate-100 dark:bg-slate-900/80 px-3 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] no-scrollbar">
        <button
          onClick={() => sendMessageText('Suggest best noise cancelling headphones under ₹25,000')}
          className="bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-medium"
        >
          🎧 Best Headphones
        </button>
        <button
          onClick={() => sendMessageText('Build me a complete Work-from-Home desk bundle under ₹40,000')}
          className="bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 text-purple-600 dark:text-purple-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-bold"
        >
          💰 ₹40k Setup Bundle
        </button>
        <button
          onClick={() => sendMessageText('Compare boAt vs Sony headphones side-by-side')}
          className="bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-medium"
        >
          ⚖️ Compare Specs
        </button>
        <button
          onClick={() => sendMessageText('What are active discount coupon codes?')}
          className="bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-amber-600 dark:text-amber-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-medium"
        >
          🏷️ Coupons
        </button>
        <button
          onClick={() => sendMessageText('Summarize verified customer reviews for top laptops')}
          className="bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-emerald-600 dark:text-emerald-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-medium"
        >
          ⭐ Review Sentiment
        </button>
        <button
          onClick={() => sendMessageText('Where is my recent order?')}
          className="bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700 font-medium"
        >
          📦 Track Order
        </button>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs shadow">
                <Bot className="w-4 h-4 text-amber-300" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-3 ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none shadow'
              }`}
            >
              <p className="whitespace-pre-line font-medium leading-5">{msg.content}</p>

              {/* INTERACTIVE COUPON CARDS IF QUERY IS ABOUT COUPONS */}
              {(msg.content.includes('WELCOME15') || msg.content.includes('FREESHIP')) && (
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Tag className="w-3 h-3 text-amber-500" /> Click to Apply to Cart
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {POPULAR_COUPONS.map((cp) => (
                      <div
                        key={cp.id}
                        className="p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2"
                      >
                        <div>
                          <span className="font-mono font-extrabold text-purple-600 dark:text-purple-400 text-xs bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded">
                            {cp.code}
                          </span>
                          <p className="text-[11px] text-slate-500 mt-0.5">{cp.description}</p>
                        </div>
                        <button
                          onClick={() => handleApplyCoupon(cp)}
                          className="bg-purple-600 hover:bg-purple-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-extrabold shadow flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" /> Apply
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RECOMMENDED PRODUCT CARDS WITH 1-CLICK ADD TO CART */}
              {msg.recommended_products && msg.recommended_products.length > 0 && (
                <div className="mt-3 space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Recommended Catalog Matches ({msg.recommended_products.length})
                    </p>
                    {msg.recommended_products.length > 1 && (
                      <button
                        onClick={() => handleAddBundleToCart(msg.recommended_products!)}
                        className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add All as Bundle
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    {msg.recommended_products.map((prod: any) => {
                      const isAdded = addedItemIds.includes(prod.id);
                      return (
                        <div
                          key={prod.id}
                          className="bg-white dark:bg-slate-950 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-indigo-500 transition-all"
                        >
                          <img
                            src={prod.image || prod.primary_image}
                            alt={prod.title}
                            className="w-12 h-12 object-cover rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-800"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-extrabold text-slate-800 dark:text-slate-200 text-xs truncate">
                              {prod.title}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs">
                                ₹{Number(prod.price).toLocaleString('en-IN')}
                              </span>
                              {prod.rating && (
                                <span className="text-[10px] text-amber-500 font-bold flex items-center gap-0.5">
                                  ⭐ {prod.rating}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleAddToCartFromAI(prod)}
                              className={`p-2 rounded-xl text-[10px] font-extrabold flex items-center gap-1 transition-all ${
                                isAdded
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow'
                              }`}
                              title="Add to Cart"
                            >
                              {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
                              <span>{isAdded ? 'Added' : 'Add'}</span>
                            </button>

                            <Link
                              to={`/products/${prod.slug || prod.id}`}
                              onClick={handleClose}
                              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                              title="View Full Specs"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow">
                U
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-2.5 items-center text-xs text-slate-500 dark:text-slate-400 p-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center animate-spin">
              <Bot className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <span className="font-bold">Cartify AI is searching live catalog & analyzing specs...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Voice Recording Active Banner */}
      {isRecording && (
        <div className="bg-rose-500 text-white px-4 py-1.5 text-xs font-bold flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Listening to your voice... Speak now</span>
          </div>
          <button onClick={toggleVoiceRecording} className="text-white hover:underline text-[11px]">
            Cancel
          </button>
        </div>
      )}

      {/* Chat Input Bar */}
      <form
        onSubmit={handleSend}
        className="p-3 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={toggleVoiceRecording}
          className={`p-2.5 rounded-full transition-all shrink-0 ${
            isRecording
              ? 'bg-rose-500 text-white animate-bounce shadow-lg shadow-rose-500/40'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-300 dark:border-slate-700'
          }`}
          title="Voice Search"
        >
          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        <input
          type="text"
          placeholder="Ask anything (e.g., 'Find laptops under ₹50,000' or 'Compare Sony vs boAt')..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-xs px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500 font-medium"
        />

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white p-2.5 rounded-full shadow-lg shadow-indigo-600/30 transition-all shrink-0"
          title="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
