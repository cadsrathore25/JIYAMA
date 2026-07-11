import React, { useState } from 'react';
import { Search, Sparkles, ShieldCheck, Globe, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onNavigate: (section: string) => void;
  onOpenAssistant: () => void;
}

export default function Hero({ onSearch, onNavigate, onOpenAssistant }: HeroProps) {
  const [localSearch, setLocalSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearch);
    onNavigate('catalog');
  };

  const handleTrendingClick = (tag: string) => {
    setLocalSearch(tag);
    onSearch(tag);
    onNavigate('catalog');
  };

  return (
    <section id="hero-banner" className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full bg-sky-950/60 border border-sky-800/60 px-3.5 py-1.5 text-xs font-semibold text-sky-400 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-sky-400" />
            <span>20+ Years of Procurement & Veteran Chemistry Expertise</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            High-Purity <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent font-serif italic font-normal text-sky-200">Industrial Catalysts</span> <br className="hidden sm:inline" />
            & Specialty Chemical Sourcing
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-400 sm:text-lg">
            Jiyama Tradelinks is Udaipur's premier supplier of high-purity precious metal catalysts, 
            active pharmaceutical ingredients (APIs), and specialty compounds. We cater to global researchers 
            and heavy chemical industries with uncompromising purity and speed.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 max-w-2xl">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <div className="pointer-events-none absolute left-4 text-slate-500">
                <Search className="h-5 w-5" />
              </div>
              <input
                id="hero-search-input"
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search by Chemical Name, CAS No (e.g. 7440-05-3) or Applications..."
                className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-4 pl-12 pr-32 text-sm text-slate-200 placeholder-slate-500 shadow-xl shadow-slate-950/80 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-950"
              />
              <button
                id="hero-search-submit"
                type="submit"
                className="absolute right-2 rounded-xl bg-sky-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-sky-500"
              >
                Find Product
              </button>
            </form>

            {/* Trending tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Trending Searches:</span>
              <button
                onClick={() => handleTrendingClick('MCT 1040')}
                className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 hover:border-sky-500 hover:text-sky-400 text-slate-300 transition"
              >
                MCT 1040 (Raney Ni)
              </button>
              <button
                onClick={() => handleTrendingClick('7440-05-3')}
                className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 hover:border-sky-500 hover:text-sky-400 text-slate-300 transition"
              >
                Palladium CAS 7440-05-3
              </button>
              <button
                onClick={() => handleTrendingClick('1,2-Pentanediol')}
                className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 hover:border-sky-500 hover:text-sky-400 text-slate-300 transition"
              >
                1,2-Pentanediol
              </button>
              <button
                onClick={() => handleTrendingClick('4-Amino Pyridine')}
                className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 hover:border-sky-500 hover:text-sky-400 text-slate-300 transition"
              >
                4-Amino Pyridine
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-cta-catalog"
              onClick={() => onNavigate('catalog')}
              className="flex items-center space-x-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-500"
            >
              <span>Explore Product Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              id="hero-cta-ai"
              onClick={onOpenAssistant}
              className="flex items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm transition hover:bg-slate-850 hover:border-sky-500"
            >
              <Sparkles className="h-4 w-4 text-sky-400 animate-pulse" />
              <span>Consult Chemistry AI</span>
            </button>
          </div>
        </div>

        {/* Feature stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-start space-x-4 rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-950/50 text-sky-400 border border-sky-900/40">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-100">Custom Chemical Sourcing</h3>
              <p className="mt-1 text-xs text-slate-400">
                Can't find a rare complex or intermediate? We custom-source high-purity compounds worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-950/50 text-sky-400 border border-sky-900/40">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-100">Research & Industrial Purity</h3>
              <p className="mt-1 text-xs text-slate-400">
                Supplying lab-grade reagents for global scientists and robust industrial catalysts for bulk scaling.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-950/50 text-sky-400 border border-sky-900/40">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-100">Udaipur Hub & Supply Chain</h3>
              <p className="mt-1 text-xs text-slate-400">
                State-of-the-art storage facilities in Rajasthan, ensuring seamless local compliance and speedy dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
