import React from 'react';
import { Beaker, Phone, MapPin, ClipboardList, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAssistant: () => void;
}

export default function Navbar({
  onNavigate,
  activeSection,
  cartCount,
  onOpenCart,
  onOpenAssistant,
}: NavbarProps) {
  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          id="brand-logo" 
          onClick={() => onNavigate('home')} 
          className="flex cursor-pointer items-center space-x-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-slate-950 shadow-md">
            <Beaker className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              JIYAMA <span className="text-sky-400">TRADELINKS</span>
            </span>
            <p className="font-sans text-[10px] font-medium tracking-widest text-slate-500 uppercase">
              Catalysts & Specialty Chemicals
            </p>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <button
            id="nav-home"
            onClick={() => onNavigate('home')}
            className={`transition hover:text-sky-400 ${activeSection === 'home' ? 'text-sky-400 font-semibold border-b-2 border-sky-400 pb-1' : ''}`}
          >
            Home Page
          </button>
          <button
            id="nav-catalog"
            onClick={() => onNavigate('catalog')}
            className={`transition hover:text-sky-400 ${activeSection === 'catalog' ? 'text-sky-400 font-semibold border-b-2 border-sky-400 pb-1' : ''}`}
          >
            Chemical Catalog
          </button>
          <button
            id="nav-services"
            onClick={() => onNavigate('services')}
            className={`transition hover:text-sky-400 ${activeSection === 'services' ? 'text-sky-400 font-semibold border-b-2 border-sky-400 pb-1' : ''}`}
          >
            Scientific Services
          </button>
          <button
            id="nav-sourcing"
            onClick={() => onNavigate('sourcing')}
            className={`transition hover:text-sky-400 ${activeSection === 'sourcing' ? 'text-sky-400 font-semibold border-b-2 border-sky-400 pb-1' : ''}`}
          >
            Sourcing & Services Request
          </button>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-3">
          {/* AI Assistant Button */}
          <button
            id="ai-assistant-btn"
            onClick={onOpenAssistant}
            className="hidden sm:flex items-center space-x-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:from-sky-600 hover:to-indigo-700"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Sourcing Assistant</span>
          </button>

          {/* Sourcing / Enquiry Cart */}
          <button
            id="enquiry-cart-btn"
            onClick={onOpenCart}
            className="relative flex h-11 items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900 px-4 text-slate-300 transition hover:border-sky-500 hover:bg-slate-850"
          >
            <ClipboardList className="h-5 w-5" />
            <span className="hidden text-xs font-semibold sm:inline">Enquiry List</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-slate-950 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
