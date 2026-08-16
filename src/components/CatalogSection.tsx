import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Search, Plus, Check, Info, FileText, ClipboardList, Send, Beaker, Atom, Filter } from 'lucide-react';

interface CatalogSectionProps {
  products: Product[];
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onAddToEnquiry: (product: Product, quantity?: string) => void;
  enquiryItems: { product: Product; quantity?: string }[];
  onOpenAssistant: (initialMessage?: string) => void;
  initialSegment?: 'products' | 'services';
  key?: string;
}

export default function CatalogSection({
  products,
  searchQuery,
  onSearchQueryChange,
  onAddToEnquiry,
  enquiryItems,
  onOpenAssistant,
  initialSegment = 'products',
}: CatalogSectionProps) {
  const [activeSegment, setActiveSegment] = useState<'products' | 'services'>(initialSegment);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [showOnlyWithCAS, setShowOnlyWithCAS] = useState(false);

  const services = useMemo(() => [
    {
      id: 'srv-purif',
      title: 'Product Purification, Custom Synthesis & Manufacturing',
      tagline: 'Expediting multi-step pathways from gram scale to multi-ton bulk production',
      description: 'We specialize in solving low-yield bottle-necks, resolving complex isomeric mixtures, and managing custom fine chemical synthesis under pristine laboratory conditions.',
      details: [
        'Advanced purification: fractional high-vacuum distillation, column chromatography, stereochemical recrystallization.',
        'Custom synthesis & scaling: multi-step organic and organometallic pathways tailored to strict scientist specifications.',
        'Rigorous analytical validation: every custom-synthesized batch is verified with full NMR, HPLC, GC-MS spectra sheets.'
      ],
      scientistPain: "Getting stuck on low-purity reagents or spending weeks on purification when you should be screening reactions and exploring new mechanisms."
    },
    {
      id: 'srv-dev',
      title: 'Product Development Desk',
      tagline: 'Bridging the gap between laboratory benchwork and industrial process design',
      description: 'Consult with Jiyama experts to optimize your synthetic processes, map viable chemical paths, and design robust scaling models for complex clinical trial compounds.',
      details: [
        'Pathway planning: mapping cost-effective, high-yield, and green-chemistry compliant synthesis routes.',
        'Process optimization: robust scaling from bench scales (mg/grams) to pilot plant runs with high reproducibility.',
        'Contract research liaison: direct scientist-to-scientist technical advisory and technology transfers.'
      ],
      scientistPain: "Transitioning a lab-scale discovery into a commercially viable process without losing yield or purity consistency."
    },
    {
      id: 'srv-hydro',
      title: 'Hydrogenation Reduction Capability',
      tagline: 'State-of-the-art catalytic reduction testing & manufacturing safety setups',
      description: 'Dedicated high-pressure hydrogenation setups, Parr shakers, and autoclave reactors operated by seasoned reduction chemists.',
      details: [
        'Autoclave and Parr setups: capacity to handle high-pressure and selective reduction protocols safely.',
        'Catalysts screening: matching the perfect Precious Metal (Pd/C, Pt/C, Rh/C, Ru/C) or Raney Nickel grade for your molecule.',
        'Hazard management: handling explosive risks, pyrophoric catalysts, and gaseous parameters in certified safety corridors.'
      ],
      scientistPain: "High-pressure hydrogen reaction setups carry severe lab hazards and require expensive specialized autoclaves. Let us absorb that risk."
    },
    {
      id: 'srv-consult',
      title: 'Pharma, Chemicals & Allied Industries Consultancy',
      tagline: '20+ Years veteran procurement, logistics, and catalytic recycling knowhow',
      description: 'Direct consultation on precious metal reclaiming, international hazardous supply corridors, and specialized chemical vendor auditing.',
      details: [
        'Precious metal reclaiming: audit your spent catalysts and optimize recycling loops to save heavy capital.',
        'Regulatory & logistics advisory: certified compliance auditing for hazardous chemicals and complex custom clearances.',
        'Vendor screening: assessing global raw material sources to safeguard your supply chain integrity.'
      ],
      scientistPain: "Bureaucratic supply regulations, customs paperwork, and catalyst cost management can drain your research energy."
    }
  ], []);

  // Determine available categories and subcategories
  const categories = useMemo(() => {
    const list = new Set(products.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, [products]);

  const subcategories = useMemo(() => {
    const filtered = selectedCategory === 'All' 
      ? products 
      : products.filter((p) => p.category === selectedCategory);
    const list = new Set(filtered.map((p) => p.subcategory));
    return ['All', ...Array.from(list)];
  }, [products, selectedCategory]);

  // Filter products based on search, category, and options
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Subcategory match
      if (selectedSubcategory !== 'All' && product.subcategory !== selectedSubcategory) {
        return false;
      }
      // CAS filter
      if (showOnlyWithCAS && !product.casNo) {
        return false;
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(query);
        const casMatch = product.casNo?.toLowerCase().includes(query);
        const otherNameMatch = product.otherNames?.toLowerCase().includes(query);
        const subMatch = product.subcategory.toLowerCase().includes(query);
        const appMatch = product.applications?.some((app) => app.toLowerCase().includes(query));
        const usesMatch = product.uses?.toLowerCase().includes(query);
        
        return nameMatch || casMatch || otherNameMatch || subMatch || appMatch || usesMatch;
      }
      return true;
    });
  }, [products, selectedCategory, selectedSubcategory, showOnlyWithCAS, searchQuery]);

  // Check if item is in enquiry cart
  const getCartQuantity = (productId: string) => {
    const found = enquiryItems.find((item) => item.product.id === productId);
    return found ? found.quantity || '1 kg' : null;
  };

  const handleConsultAI = (product: Product) => {
    onOpenAssistant(
      `Hello! I'm interested in Jiyama Finechem LLP's product: ${product.name} ${product.casNo ? `(CAS: ${product.casNo})` : ''}. Can you provide detailed tech specs, reaction compatibility, and packaging parameters?`
    );
  };

  return (
    <section id="product-catalog-section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="border-b border-slate-800 pb-5 md:flex md:items-center md:justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
            Premium <span className="font-serif italic text-sky-200">Offerings Desk</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {activeSegment === 'products'
              ? 'High-purity chemical intermediates, catalysts, precious metal compounds and specialized reagents.'
              : 'Bespoke chemical purification, custom synthesis, pilot-scale hydrogenation, and technical consultancy.'}
          </p>
        </div>

        {/* High-Contrast Toggle Tabs */}
        <div className="mt-4 md:mt-0 inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 self-start">
          <button
            onClick={() => setActiveSegment('products')}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeSegment === 'products'
                ? 'bg-sky-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Products Catalogue
          </button>
          <button
            onClick={() => setActiveSegment('services')}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeSegment === 'services'
                ? 'bg-sky-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Scientific Services
          </button>
        </div>
      </div>

      {activeSegment === 'products' ? (
        /* Control Panel */
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Left Side: Filter sidebar */}
        <div className="space-y-6 lg:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm self-start">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Filter className="h-5 w-5 text-sky-400" />
            <span className="font-display font-semibold text-white">Filters & Sorting</span>
          </div>

          {/* Search bar inside filter */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">Search Keywords</label>
            <div className="relative mt-2">
              <Search className="absolute top-3 left-3 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                placeholder="Name, CAS, keywords..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2.5 pl-9 pr-4 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-950/40"
              />
            </div>
          </div>

          {/* Category selection */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">Category</label>
            <div className="mt-2 space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubcategory('All');
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Categories' : cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory selection */}
          {selectedCategory !== 'All' && (
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">Subcategory</label>
              <div className="mt-2 space-y-1 max-h-48 overflow-y-auto pr-1">
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-xs transition ${
                      selectedSubcategory === sub
                        ? 'bg-slate-950 text-sky-400 font-medium border border-sky-900/30'
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                    }`}
                  >
                    <span>{sub === 'All' ? 'All Subcategories' : sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Options toggle */}
          <div className="border-t border-slate-800 pt-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={showOnlyWithCAS}
                onChange={(e) => setShowOnlyWithCAS(e.target.checked)}
                className="h-4 w-4 rounded border-slate-800 text-sky-600 focus:ring-sky-500 bg-slate-950"
              />
              <span className="text-xs font-medium text-slate-400">Only show items with CAS No</span>
            </label>
          </div>
        </div>

        {/* Right Side: Products Grid */}
        <div className="lg:col-span-3">
          {/* Result Stats */}
          <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
            <span>Showing <strong className="text-slate-200">{filteredProducts.length}</strong> compounds matching criteria</span>
            {(selectedCategory !== 'All' || searchQuery !== '' || showOnlyWithCAS) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubcategory('All');
                  setShowOnlyWithCAS(false);
                  onSearchQueryChange('');
                }}
                className="font-semibold text-sky-400 hover:text-sky-300 underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">
              <Beaker className="mx-auto h-12 w-12 text-slate-500" />
              <h3 className="mt-4 font-display text-sm font-semibold text-slate-200">No products found</h3>
              <p className="mt-2 text-xs text-slate-400 max-w-md mx-auto">
                We might still have your chemical in our vast warehouse network, or we can custom-source it for you using Jiyama's 20+ years of procurement pathways.
              </p>
              <div className="mt-6 flex justify-center space-x-3">
                <button
                  onClick={() => onOpenAssistant(`Can Jiyama custom source a chemical for me?`)}
                  className="rounded-xl bg-sky-600 hover:bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white transition shadow-sm"
                >
                  Consult AI Sourcing Assistant
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredProducts.map((product) => {
                const inCartQuantity = getCartQuantity(product.id);
                return (
                  <div
                    key={product.id}
                    id={`product-card-${product.id}`}
                    className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/5"
                  >
                    <div>
                      {/* Subcategory & Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-sky-950/40 px-2.5 py-1 text-[10px] font-semibold text-sky-400 border border-sky-900/30 uppercase tracking-wider">
                          {product.subcategory}
                        </span>
                        {product.casNo && (
                          <span className="font-mono text-[10px] font-medium text-slate-400 bg-slate-950 border border-slate-800 rounded px-2 py-0.5">
                            CAS: <span className="text-slate-200 font-semibold">{product.casNo}</span>
                          </span>
                        )}
                      </div>

                      {/* Chemical Name */}
                      <h3 className="mt-4 font-display text-base font-bold text-slate-100">
                        {product.name}
                      </h3>

                      {product.otherNames && (
                        <p className="mt-1 text-xs italic text-slate-400">
                          Alt: {product.otherNames}
                        </p>
                      )}

                      {/* Structural Graphic / Molecular Data */}
                      <div className="mt-4 flex items-center space-x-4 rounded-xl bg-slate-950 border border-slate-800/40 p-3 text-xs">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 font-bold border border-sky-900/30">
                          <Atom className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          {product.molecularFormula ? (
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-slate-500">Formula:</span>
                              <span className="font-mono font-bold text-sky-300">{product.molecularFormula}</span>
                            </div>
                          ) : (
                            <div className="text-slate-500 italic">Precious Metal Compound</div>
                          )}
                          {product.molecularWeight && (
                            <div className="flex items-center space-x-2 mt-0.5">
                              <span className="font-semibold text-slate-500">M.W:</span>
                              <span className="font-mono text-slate-400">{product.molecularWeight}</span>
                            </div>
                          )}
                          {product.activity && (
                            <div className="flex items-center space-x-2 mt-0.5">
                              <span className="font-semibold text-slate-500">Activity:</span>
                              <span className="font-mono text-xs font-semibold text-sky-400 bg-sky-950/40 border border-sky-900/30 px-1 rounded">{product.activity}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Applications / Uses */}
                      <div className="mt-4">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Uses & Applications</span>
                        {product.applications && product.applications.length > 0 ? (
                          <ul className="space-y-1 text-xs text-slate-400">
                            {product.applications.map((app, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-1.5 text-sky-500 font-bold">•</span>
                                <span className="line-clamp-2">{app}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-slate-400 line-clamp-3">
                            {product.uses || 'High-purity premium catalog chemical engineered for scientific researchers and chemical manufacturers.'}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 border-t border-slate-800/60 pt-4 flex items-center justify-between space-x-2">
                      {/* AI Consult */}
                      <button
                        onClick={() => handleConsultAI(product)}
                        className="flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 py-1 px-2.5 rounded-lg hover:bg-sky-950/30 transition"
                      >
                        <Beaker className="h-3.5 w-3.5" />
                        <span>AI Tech Specs</span>
                      </button>

                      {/* Add to list */}
                      <div className="flex items-center space-x-1">
                        {inCartQuantity ? (
                          <button
                            disabled
                            className="flex items-center space-x-1 rounded-xl bg-sky-950/40 border border-sky-900/30 px-3 py-2 text-xs font-bold text-sky-400 shadow-sm"
                          >
                            <Check className="h-4 w-4 text-sky-400" />
                            <span>In Enquiry ({inCartQuantity})</span>
                          </button>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <select
                              id={`qty-select-${product.id}`}
                              defaultValue="1 kg"
                              className="rounded-xl border border-slate-800 bg-slate-950 px-2 py-2 text-xs text-slate-300 outline-none focus:border-sky-500"
                            >
                              <option value="500 g">500 g</option>
                              <option value="1 kg">1 kg</option>
                              <option value="5 kg">5 kg</option>
                              <option value="10 kg">10 kg</option>
                              <option value="50 kg">50 kg</option>
                              <option value="100 kg">100 kg</option>
                              <option value="Custom">Custom Qty</option>
                            </select>
                            <button
                              id={`add-enquiry-${product.id}`}
                              onClick={() => {
                                const selectEl = document.getElementById(`qty-select-${product.id}`) as HTMLSelectElement;
                                const qty = selectEl?.value || '1 kg';
                                onAddToEnquiry(product, qty);
                              }}
                              className="flex items-center space-x-1 rounded-xl bg-sky-600 hover:bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition shadow-sm"
                            >
                              <Plus className="h-4 w-4" />
                              <span>Add</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      ) : (
        <div className="mt-8 space-y-8">
          <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-8 text-center max-w-4xl mx-auto space-y-3">
            <h3 className="font-display text-lg font-bold text-white">"Outsource the pain of synthesising, purifying or reduction reactions"</h3>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              Our service segment leverages high-purity chemical processing facilities and over 20 years of active technical knowhow. We are a direct bridge from scientist to laboratory, providing complete analytical safety, COA, NMR, and spectroscopic guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((srv) => (
              <div 
                key={srv.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between space-y-6 hover:border-sky-500/50 transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
                      <Beaker className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white leading-tight">{srv.title}</h4>
                      <p className="text-[10px] text-sky-400 font-medium font-mono uppercase tracking-wider">{srv.tagline}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{srv.description}</p>

                  <div className="rounded-xl bg-slate-950/50 border border-slate-850 p-4 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Scope of Capability</span>
                    <ul className="space-y-1.5">
                      {srv.details.map((detail, idx) => (
                        <li key={idx} className="text-[11px] text-slate-400 flex items-start">
                          <span className="text-sky-500 font-bold mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scientist Pain point addressed */}
                  <div className="rounded-xl bg-sky-950/15 border border-sky-900/10 p-3.5 text-[11px] text-sky-200 italic font-serif">
                    <strong>Scientist Pain Solved:</strong> {srv.scientistPain}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Certified Compliance guaranteed</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onOpenAssistant(`Can you tell me more about Jiyama Finechem LLP's service: ${srv.title}? I would like to discuss a potential project/timeline.`)}
                      className="rounded-lg border border-slate-700 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 py-2 px-3 transition"
                    >
                      Consult AI
                    </button>
                    <a
                      href={`mailto:sales@jiyamatradelinks.com?subject=Inquiry on Jiyama Service: ${encodeURIComponent(srv.title)}`}
                      className="rounded-lg bg-sky-600 hover:bg-sky-500 text-[11px] font-bold text-white py-2 px-3.5 transition shadow-sm"
                    >
                      Email Sales Desk
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
