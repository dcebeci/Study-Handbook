import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Search, Book, Moon, Sun, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, setTheme, searchQuery, setSearchQuery } = useAppContext();

  return (
    <nav className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md z-10 sticky top-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#38BDF8] rounded-lg flex items-center justify-center font-bold text-slate-900">ii</div>
          <span className="font-bold text-xl tracking-tight">INTERVIEW<span className="text-[#38BDF8]">.HANDBOOK</span></span>
        </div>

        <div className="relative flex items-center hidden sm:flex">
          <Search className="absolute left-3 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder={language === 'en' ? 'Search topics (⌘+K)' : 'Konu ara (⌘+K)'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1E293B] border border-slate-700 rounded-md py-1.5 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-[#38BDF8] transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex bg-[#1E293B] p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-xs font-semibold rounded ${language === 'en' ? 'bg-[#38BDF8] text-slate-900' : 'text-slate-400'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('tr')}
            className={`px-3 py-1 text-xs font-semibold rounded ${language === 'tr' ? 'bg-[#38BDF8] text-slate-900' : 'text-slate-400'}`}
          >
            TR
          </button>
        </div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-8 h-8 rounded-full bg-[#1E293B] border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
};
