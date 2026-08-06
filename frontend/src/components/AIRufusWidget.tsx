import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, ExternalLink } from 'lucide-react';
import { useStore } from '../store/useStore';
import { sendAIChatMessage } from '../services/api';
import { AIChatMessage } from '../types';
import { Link } from 'react-router-dom';

export const AIRufusWidget: React.FC = () => {
  const { isAIRufusOpen, isCartifyAIOpen, setAIRufusOpen, setCartifyAIOpen } = useStore();
  const isOpen = isCartifyAIOpen || isAIRufusOpen;
  const handleClose = () => {
    setCartifyAIOpen(false);
    setAIRufusOpen(false);
  };

  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      session_id: 'initial',
      role: 'assistant',
      content: "👋 Hi! I'm **Cartify AI**, your intelligent Shopping Assistant at Cartify. I can help you find products, compare technical specifications, check active coupon discounts, or track your recent orders. What are you looking for today?",
      created_at: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    const userMsg: AIChatMessage = {
      session_id: 'curr',
      role: 'user',
      content: userText,
      created_at: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await sendAIChatMessage(userText, messages[0]?.session_id);
      setMessages((prev) => [...prev, response]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          session_id: 'err',
          role: 'assistant',
          content: "I'm having trouble connecting right now, but I can tell you our top-rated laptops and headphones feature 15% OFF with code **WELCOME15**!",
          created_at: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-md h-[560px] glass-panel bg-white/95 dark:bg-slate-950/95 border border-indigo-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* Drawer Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-4 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
            <Bot className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-sm flex items-center gap-1.5">
              <span>Cartify AI Assistant</span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">Gemini</span>
            </h3>
            <p className="text-[11px] text-indigo-200">Personalized E-Commerce Companion</p>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="bg-slate-100 dark:bg-slate-900/80 px-3 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] no-scrollbar">
        <button
          onClick={() => { setInput("Suggest best noise cancelling headphones under ₹25,000"); }}
          className="bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700"
        >
          🎧 Best Headphones
        </button>
        <button
          onClick={() => { setInput("What are active coupon discount codes?"); }}
          className="bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-amber-600 dark:text-amber-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700"
        >
          🏷️ Coupons
        </button>
        <button
          onClick={() => { setInput("Where is my order?"); }}
          className="bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-purple-600 dark:text-purple-300 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700"
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
              <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs">
                <Bot className="w-4 h-4 text-amber-300" />
              </div>
            )}

            <div className={`max-w-[82%] rounded-2xl p-3.5 text-xs leading-relaxed ${
              msg.role === 'user'
                ? 'bg-purple-600 text-white rounded-br-none'
                : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none shadow'
            }`}>
              <p className="whitespace-pre-line">{msg.content}</p>

              {/* Recommended Product Cards rendered inside Chat */}
              {msg.recommended_products && msg.recommended_products.length > 0 && (
                <div className="mt-3 space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Recommended Items</p>
                  {msg.recommended_products.map((prod: any) => (
                    <div key={prod.id} className="bg-white dark:bg-slate-950 p-2 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                      <img src={prod.image || prod.primary_image} alt={prod.title} className="w-10 h-10 object-cover rounded-lg bg-slate-100 dark:bg-slate-800" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs truncate">{prod.title}</p>
                        <p className="text-purple-600 dark:text-purple-400 font-bold">₹{prod.price}</p>
                      </div>
                      <Link
                        to={`/products/${prod.slug}`}
                        onClick={handleClose}
                        className="bg-purple-600 hover:bg-purple-500 text-white p-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                U
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
            <Bot className="w-4 h-4 text-indigo-500 animate-spin" />
            <span>Cartify AI is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-3 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask Cartify AI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-full border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white p-2.5 rounded-full shadow transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
