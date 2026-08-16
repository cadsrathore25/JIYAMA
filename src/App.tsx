import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import EnquiryCart from './components/EnquiryCart';
import CustomSourcingForm from './components/CustomSourcingForm';
import SourcingAssistant from './components/SourcingAssistant';
import AboutContact from './components/AboutContact';
import { products } from './data/products';
import { Product, EnquiryItem } from './types';
import { Beaker, MapPin, Sparkles, Phone, Award, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [assistantInitialMsg, setAssistantInitialMsg] = useState<string | null>(null);

  // Load enquiry items from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('jiyama_enquiry_items');
      if (stored) {
        setEnquiryItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load enquiry list', e);
    }
  }, []);

  // Save enquiry items to localStorage on change
  const saveEnquiryItems = (items: EnquiryItem[]) => {
    setEnquiryItems(items);
    try {
      localStorage.setItem('jiyama_enquiry_items', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save enquiry list', e);
    }
  };

  const handleAddToEnquiry = (product: Product, quantity?: string) => {
    const existing = enquiryItems.find((item) => item.product.id === product.id);
    if (existing) {
      const updated = enquiryItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: quantity || item.quantity } : item
      );
      saveEnquiryItems(updated);
    } else {
      const updated = [...enquiryItems, { product, quantity: quantity || '1 kg' }];
      saveEnquiryItems(updated);
    }
    setIsCartOpen(true); // Open enquiry drawer to show addition
  };

  const handleRemoveEnquiryItem = (productId: string) => {
    const updated = enquiryItems.filter((item) => item.product.id !== productId);
    saveEnquiryItems(updated);
  };

  const handleUpdateEnquiryQty = (productId: string, qty: string) => {
    const updated = enquiryItems.map((item) =>
      item.product.id === productId ? { ...item, quantity: qty } : item
    );
    saveEnquiryItems(updated);
  };

  const handleClearEnquiry = () => {
    saveEnquiryItems([]);
  };

  const handleOpenAssistant = (initialMsg?: string) => {
    if (initialMsg) {
      setAssistantInitialMsg(initialMsg);
    }
    setIsAssistantOpen(true);
    // Scroll down to the assistant if opened
    setTimeout(() => {
      document.getElementById('ai-assistant-wrapper')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Pre-selected categories featured on home
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased selection:bg-sky-600 selection:text-white">
      {/* Top micro-banner */}
      <div id="top-banner" className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 text-center text-xs text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-[11px] sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>High-Purity Industrial Grade Catalysts & Specialty Intermediates Hub</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-sky-400" /> Udaipur, Rajasthan, India
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-sky-400" /> Procurement hotline: <strong className="text-white">+91-8918588147</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        onNavigate={(section) => {
          setActiveSection(section);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeSection={activeSection}
        cartCount={enquiryItems.length}
        onOpenCart={() => setIsCartOpen(!isCartOpen)}
        onOpenAssistant={() => handleOpenAssistant()}
      />

      {/* Conditional Content Layout */}
      <main className="pb-24">
        {/* RFQ / Enquiry Cart Panel (Inline modal behavior) */}
        {isCartOpen && (
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <EnquiryCart
              items={enquiryItems}
              onRemoveItem={handleRemoveEnquiryItem}
              onUpdateQty={handleUpdateEnquiryQty}
              onClear={handleClearEnquiry}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        )}

        {/* AI Sourcing Assistant Widget Panel */}
        {isAssistantOpen && (
          <div id="ai-assistant-wrapper" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <SourcingAssistant
              onClose={() => setIsAssistantOpen(false)}
              initialMessage={assistantInitialMsg}
              onClearInitialMessage={() => setAssistantInitialMsg(null)}
            />
          </div>
        )}

        {activeSection === 'home' && (
          <div className="space-y-16">
            <Hero
              onSearch={(query) => {
                setActiveSection('catalog');
                setSearchQuery(query);
              }}
              onNavigate={(section) => {
                setActiveSection(section);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAssistant={() => handleOpenAssistant()}
            />

            {/* Curated Catalysts Showcase */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-[1px] w-6 bg-sky-500"></span>
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">Selected Catalysts</span>
                  <span className="h-[1px] w-6 bg-sky-500"></span>
                </div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
                  Featured Precious Metal <span className="font-serif italic text-sky-200">Catalysts</span>
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Sourced in wet or dry forms. We guarantee precise precious metal dispersion, batch homogeneity, and high catalytic recovery cycles.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/5"
                  >
                    <div>
                      <span className="inline-block rounded-full bg-sky-950/60 border border-sky-800/60 px-2.5 py-0.5 text-[9px] font-semibold text-sky-400 uppercase tracking-wider">
                        {p.subcategory}
                      </span>
                      <h3 className="mt-3 font-display text-sm font-bold text-slate-100 group-hover:text-sky-400 transition">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-[11px] text-slate-400 line-clamp-2">
                        {p.uses}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-medium text-slate-500">High-Purity Series</span>
                      <button
                        onClick={() => {
                          setActiveSection('catalog');
                          setSearchQuery(p.name);
                        }}
                        className="text-xs font-semibold text-slate-200 group-hover:text-sky-400 flex items-center space-x-1"
                      >
                        <span>Inspect</span>
                        <ArrowRight className="h-3 w-3 text-sky-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setActiveSection('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="rounded-xl border border-sky-900 bg-slate-900/40 hover:bg-sky-950/60 text-sky-400 px-6 py-3 text-xs font-semibold transition shadow-sm"
                >
                  View All Catalysts & Compounds
                </button>
              </div>
            </section>

            {/* Custom Sourcing Callout banner */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden text-white shadow-lg">
                <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
                
                <div className="relative max-w-2xl">
                  <span className="font-sans text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                    Procurement Intelligence Desk
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl text-white">
                    Need a custom compound <span className="font-serif italic text-sky-200">synthesised</span> or imported?
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Our procurement veteran team has 20+ years of logistics connections in Europe, East Asia, and America. 
                    We manage end-to-end import compliance, laboratory purity validations, customs declarations, and hazard transport parameters.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setActiveSection('sourcing');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-xl bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 text-xs font-bold transition shadow-sm"
                    >
                      Fill Sourcing Request Sheet
                    </button>
                    <button
                      onClick={() => handleOpenAssistant('How does Jiyama custom source a chemical compound internationally?')}
                      className="rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-950 text-slate-300 px-5 py-2.5 text-xs font-semibold transition"
                    >
                      Consult Jiyama-Bot AI
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Credentials / Trust indicators */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center space-y-3 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-950/50 text-sky-400 border border-sky-900/40">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-slate-100 text-sm">COA, NMR & HPLC Verified</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every gram shipped complies with rigorous analytical testing and specifications sheets. No mock assurances.
                </p>
              </div>

              <div className="text-center space-y-3 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-950/50 text-sky-400 border border-sky-900/40">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-slate-100 text-sm">20+ Years Veteran Procurement</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Founded and led by fine chemistry pioneers and industrial purchasing consultants.
                </p>
              </div>

              <div className="text-center space-y-3 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-950/50 text-sky-400 border border-sky-900/40">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-slate-100 text-sm">Rajasthan Warehousing Advantage</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Secure storage inside Udaipur, fully compliant with national safety standards and express chemical freight links.
                </p>
              </div>
            </section>

            {/* About and Contact company background, photos and maps */}
            <AboutContact />
          </div>
        )}

        {(activeSection === 'catalog' || activeSection === 'services') && (
          <CatalogSection
            key={activeSection}
            products={products}
            initialSegment={activeSection === 'services' ? 'services' : 'products'}
            searchQuery={searchQuery}
            onSearchQueryChange={(query) => setSearchQuery(query)}
            onAddToEnquiry={handleAddToEnquiry}
            enquiryItems={enquiryItems}
            onOpenAssistant={(msg) => handleOpenAssistant(msg)}
          />
        )}

        {activeSection === 'sourcing' && (
          <CustomSourcingForm
            onOpenAssistant={(msg) => handleOpenAssistant(msg)}
          />
        )}
      </main>

      {/* Footer */}
      <footer id="app-footer" className="bg-slate-900 py-12 text-slate-400 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 border-b border-slate-800 pb-8">
            <div className="space-y-4">
              <span className="font-display text-lg font-bold tracking-tight text-white block">
                JIYAMA <span className="text-sky-400">FINECHEM LLP</span>
              </span>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Udaipur, Rajasthan based premium supplier of precious metal catalysts, active ingredients and customized global chemical sourcing.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest block">Quick Links</span>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => { setActiveSection('home'); window.scrollTo(0,0); }} className="hover:text-sky-400 transition">
                    Home Page & Guarantee
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveSection('catalog'); window.scrollTo(0,0); }} className="hover:text-sky-400 transition">
                    Chemical Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveSection('services'); window.scrollTo(0,0); }} className="hover:text-sky-400 transition">
                    Scientific Services
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveSection('sourcing'); window.scrollTo(0,0); }} className="hover:text-sky-400 transition">
                    Sourcing & Services Request
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest block">Contact Udaipur Desk</span>
              <div className="space-y-2 text-xs">
                <p>Mobile / WhatsApp: <strong className="text-white">+91-8918588147</strong></p>
                <div className="space-y-1">
                  <p>Inquiries: <a href="mailto:info@jiyamatradelinks.com" className="text-white font-semibold hover:text-sky-400 transition">info@jiyamatradelinks.com</a></p>
                  <p>Sales Desk: <a href="mailto:sales@jiyamatradelinks.com" className="text-sky-400 font-semibold hover:text-white transition">sales@jiyamatradelinks.com</a></p>
                </div>
                <p>Udaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Jiyama Finechem LLP. All Rights Reserved. Purity Tested, Compliance Ensured.</p>
            <p className="mt-2 sm:mt-0">Veteran Chemical Procurement Solutions Desk</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
