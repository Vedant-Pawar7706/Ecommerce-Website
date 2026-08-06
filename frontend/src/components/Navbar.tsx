import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { fetchAutocomplete } from '../services/api';
import {
  ShoppingBag,
  Search,
  Heart,
  User as UserIcon,
  Sun,
  Moon,
  Layers,
  Mic,
  Bot
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const {
    theme,
    toggleTheme,
    cartItems,
    wishlist,
    compareList,
    user,
    setAIRufusOpen
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Web Speech API Voice Search
  const handleVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice recognition is not supported in this browser version. Please try Google Chrome or Microsoft Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      setSearchQuery(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (searchQuery.trim()) {
        navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      }
    };

    recognition.start();
  };

  // Autocomplete fetch on search input
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      fetchAutocomplete(searchQuery).then((results) => {
        setSuggestions(results);
        setShowSuggestions(true);
      });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Click outside listener for search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-colors">
      {/* Main Navigation Bar */}
      <div className="bg-white/95 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 py-3">
          
          {/* Logo & Brand (Only "Cartify") */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-300">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              Cartify
            </span>
          </Link>

          {/* Search Bar with AI & Autocomplete */}
          <div ref={searchRef} className="relative flex-1 max-w-2xl hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-slate-100 dark:bg-slate-900/90 rounded-full border border-slate-200 dark:border-slate-800 p-1 shadow-inner focus-within:border-purple-600 transition-all">
              <div className="relative flex-1 flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="text"
                  placeholder={isListening ? "Listening... Speak your search query..." : "Search for products, brands and more..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
                  className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs pl-9 pr-10 py-2 focus:outline-none font-medium"
                />
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className={`absolute right-2 p-1.5 rounded-full transition-all ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/50 scale-110'
                      : 'text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                  title={isListening ? "Listening... Speak now!" : "Voice Search (Click & Speak)"}
                >
                  <Mic className={`w-4 h-4 ${isListening ? 'animate-bounce' : ''}`} />
                </button>
              </div>
            </form>

            {/* Voice Listening Badge Popover */}
            {isListening && (
              <div className="absolute top-full left-0 mt-2 bg-rose-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-bounce z-50">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span>Microphone active: Listening for voice input...</span>
              </div>
            )}

            {/* Autocomplete Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 glass-panel bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto animate-fadeIn">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                  Instant Matches
                </p>
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(false);
                      navigate(`/products/${item.slug}`);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                  >
                    <img
                      src={item.primary_image}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded-lg bg-slate-100 dark:bg-slate-950"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-brand-600 dark:text-brand-400 font-semibold">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons & User Portal */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Cartify AI Shopping Assistant Widget Toggle */}
            <button
              onClick={() => setAIRufusOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs px-3.5 py-2 rounded-full shadow-lg shadow-purple-500/20 flex items-center gap-1.5 hover:scale-105 transition-all"
              title="Cartify AI Assistant"
            >
              <Bot className="w-4 h-4 text-amber-300 animate-bounce" />
              <span className="hidden sm:inline">Cartify AI</span>
            </button>

            {/* Compare Tool */}
            <Link
              to="/compare"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              title="Compare Products"
            >
              <Layers className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              to="/dashboard?tab=customer"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account Portal Link to /login */}
            <Link
              to={user ? "/dashboard" : "/login"}
              target={user ? undefined : "_blank"}
              rel={user ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-500/50 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
            >
              <UserIcon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span className="hidden lg:inline">{user ? user.full_name.split(' ')[0] : 'Sign In'}</span>
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
};
