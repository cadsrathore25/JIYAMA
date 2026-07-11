import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Award, 
  Clock, 
  Beaker, 
  ShieldCheck, 
  Globe, 
  Star, 
  Truck, 
  Users, 
  Sparkles,
  Layers,
  HeartHandshake,
  TrendingUp
} from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about-contact-section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      
      {/* Dynamic Hub Title & Subtitle */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Premier Indian Chemistry Supply Desk</span>
        </div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Lab Grade Catalysts, Fine Chemicals & <br className="hidden md:inline" />
          <span className="font-serif italic text-sky-200">Custom Synthesized</span> Intermediates Specialist Hub
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed">
          From Udaipur, Rajasthan to the global scientific frontier — bridging the gap between state-of-the-art research laboratories and continuous high-ton industrial production with certified chemical integrity.
        </p>
      </div>

      {/* Core Slogan Box - "Who Understands the Pain of a Scientist" */}
      <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-sky-950/40 rounded-3xl border border-sky-900/30 p-8 shadow-xl text-center relative overflow-hidden">
        <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-sky-500/5 blur-2xl" />
        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl" />
        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-950/50 text-sky-400 border border-sky-900/40">
              <HeartHandshake className="h-6 w-6" />
            </span>
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            "A Scientist-Started Company to the Laboratory"
          </h2>
          <p className="text-sm text-sky-200/90 italic font-serif leading-relaxed">
            "We understand the true pain of a scientist. Research timelines, uncompromising purity indexes, demanding HPLC/NMR spectra, and customized batch volumes aren't just technical specifications — they represent years of human effort. We speak your language and expedite your breakthroughs."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky-400" /> COA & Spec Sheets Bound
            </span>
            <span className="flex items-center gap-1.5">
              <Beaker className="h-4 w-4 text-sky-400" /> Direct Scientist-to-Procurement Liaison
            </span>
          </div>
        </div>
      </div>

      {/* Strategic USPs (Grid layout of requested value propositions) */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
            Why Laboratories & Industries Standardize on Jiyama Tradelinks
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* USP 1: Multilocation Benefit */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <Warehouse className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Multilocation Benefit</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Our decentralized chemical distribution and state-of-the-art warehouses are strategically situated near major chemical corridors. This dual-presence allows us to hedge supply bottlenecks, handle high-risk transport parameters, and ensure proximity storage for critical pharmaceutical clusters.
            </p>
          </div>

          {/* USP 2: Fastest Delivery */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <Truck className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Fastest Delivery to Scientific Community</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              We operate expedited chemical-grade express delivery lanes. By maintaining real-time logistics partnerships and robust custom clearance pipelines, we ensure that lab-scale batches, noble-metal reagents, and synthesis catalysts reach your bench without critical timeline slips.
            </p>
          </div>

          {/* USP 3: LR & AR Catalogue Grade */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <Layers className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Catalogue Chemicals: LR & AR Grade</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              We offer off-the-shelf Laboratory Reagent (LR) and Analytical Reagent (AR) grade chemicals. Every item in our catalogue features rigorous assay validations, low impurity indexes, and stable shelf-lives, fully optimized for delicate analytical testing and pilot runs.
            </p>
          </div>

          {/* USP 4: Comprehensive Portfolio Supplier */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <Beaker className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Portfolio Chemical Supplier</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Access an extensive catalog of specialty chemicals. We are a single-point vendor for heterogeneous/homogeneous catalysts (Pd/C, Pt/C, Ru/C), active chiral building blocks, Raney Nickel variants, precious metal salts, and fine chemical reagents.
            </p>
          </div>

          {/* USP 5: Scientist-to-Scientist Liaison */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <Users className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Scientist-Led Management</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Avoid navigating sales bureaucracies that don't comprehend synthetic chemistry. Our senior procurement leads and company founders hold deep academic and industrial chemistry experience, providing technical consultation on catalyst selection and metal reclaiming.
            </p>
          </div>

          {/* USP 6: Global Compliance Guarantee */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 transition hover:border-sky-500/40 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-white">Analytical Validation Bond</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Every chemical batch includes pre-verified Certificates of Analysis (COA). We coordinate structural proofing (HPLC, NMR, GC-MS) so you can introduce our compounds into your synthetic pathways or industrial lines with absolute piece of mind.
            </p>
          </div>

        </div>
      </div>

      {/* Lab Showcase & Timely Availability/ROI Guarantee Panel */}
      <div className="space-y-8 border-t border-slate-800 pt-16">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] text-sky-400 uppercase tracking-widest font-mono font-bold">Guaranteed Continuity</span>
          <h3 className="font-display text-2xl font-bold text-white">Advanced Laboratory Support & Delivery Speed</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ensuring high-efficiency synthesis pipelines, rapid logistical routing, and uncompromised asset availability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left: Beautiful Lab Photographs Gallery */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 h-80 flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Jiyama Chemistry Synthesis Lab - Active Research" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="relative p-6 space-y-1">
                <span className="text-[9px] text-sky-400 font-bold uppercase tracking-wider font-mono">Partner Synthesis Laboratory</span>
                <h4 className="text-sm font-bold text-white">Analytical Quality Desk</h4>
                <p className="text-[10px] text-slate-400">Verifying homogenous metal dispersion & batch parameters.</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 h-80 flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=800&q=80" 
                alt="Jiyama Glassware and High Vacuum Distillation Setup" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="relative p-6 space-y-1">
                <span className="text-[9px] text-sky-400 font-bold uppercase tracking-wider font-mono">Bespoke Glassware Systems</span>
                <h4 className="text-sm font-bold text-white">Active Product Purification</h4>
                <p className="text-[10px] text-slate-400">Fractional distillation & fractional crystallization under vacuum.</p>
              </div>
            </div>
          </div>

          {/* Right: Timing, Availability & ROI Guarantees */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-500/5 blur-2xl" />
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-white">Protecting Your Milestones</h4>
                <p className="text-xs text-sky-400 font-mono">The Jiyama Double-Shield Guarantee</p>
              </div>

              {/* USP: Faster Chemical Delivery */}
              <div className="flex items-start space-x-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-950/50 text-sky-400 border border-sky-900/30 mt-0.5">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-slate-100">Faster Chemical Delivery Network</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    By maintaining direct air freight partnerships out of Jaipur and Ahmedabad airports, and running automated customs clearance templates, we guarantee rapid transit. We cut down delivery timelines to standard research communities by up to 40%.
                  </p>
                </div>
              </div>

              {/* USP: Maximum R&D ROI Guarantee */}
              <div className="flex items-start space-x-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-950/50 text-sky-400 border border-sky-900/30 mt-0.5">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-slate-100">Maximum ROI on R&D Investments</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Chemical delays are the leading cause of wasted R&D capital: idle scientist labor, stalled clinical development windows, and underutilized laboratory infrastructure. Jiyama guarantees chemical availability through proactive Udaipur safety stocking, ensuring uninterrupted workflows and delivering the maximum return on your R&D budgets.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-850 p-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>Zero timeline slippage, verified.</span>
              </div>
              <span className="text-sky-400 font-bold">Jiyama Standard</span>
            </div>
          </div>

        </div>
      </div>

      {/* Jiyama Profile / Warehouse Stats */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-md">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-sky-500/10 border border-sky-500/25 px-3 py-1 text-xs font-semibold text-sky-400">
            <Award className="h-4 w-4" />
            <span>20+ Years Sourcing Mastery</span>
          </div>
          
          <h2 className="font-display text-3xl font-extrabold text-white">
            About <span className="font-serif italic text-sky-200">Jiyama</span> Tradelinks
          </h2>
          
          <p className="text-sm text-slate-300 leading-relaxed">
            Jiyama Tradelinks was founded by a <strong>Chemical Industry Veteran</strong> and seasoned procurement experts with <strong>over 20 years of active, hands-on experience</strong> in catalytic synthesis, global supply logistics, and regulatory compliance. 
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Based in the historical industrial hub of <strong>Udaipur, Rajasthan</strong>, we specialize in bridging the gap between state-of-the-art chemical researchers and heavy multi-ton scale industrial manufacturers. Our core competency lies in supplying high-purity industrial grade catalysts, precious metal compounds (Palladium, Platinum, Ruthenium, Rhodium, Silver), Raney Nickel catalysts, active pharmaceutical ingredient (API) intermediates, and bespoke customized sourcing.
          </p>
        </div>

        {/* Company Quick Specs */}
        <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 text-white border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="font-sans text-[10px] font-bold tracking-widest text-sky-400 uppercase">Corporate Profile</span>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
              Sourcing & Supply Desk
            </h3>
            
            <div className="mt-6 space-y-4 text-xs">
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3 text-slate-300">
                <Globe className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Serving global research labs & pharmaceutical majors</span>
              </div>
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3 text-slate-300">
                <Star className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Specialized in precious metal recycling & reclaiming catalysis</span>
              </div>
              <div className="flex items-center space-x-3 pb-2 text-slate-300">
                <Clock className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Udaipur warehousing with express national delivery</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Purity Checked</p>
              <p className="text-xs text-slate-200 font-bold">COA, NMR & HPLC Verified</p>
            </div>
            <div className="h-10 w-10 bg-sky-500 rounded-lg flex items-center justify-center text-slate-950 font-display font-black">
              20+
            </div>
          </div>
        </div>
      </div>

      {/* Segment Divisions Section */}
      <div className="space-y-6 border-t border-slate-800 pt-16">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h3 className="font-display text-2xl font-bold text-white">Our Dual-Segment Operations</h3>
          <p className="text-xs text-slate-400">
            Catering to complex research projects and continuous bulk industrial scaling with dedicated products and services divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-sky-500/30 transition">
            <div className="flex items-center space-x-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30 font-bold">1</span>
              <div>
                <h4 className="font-display font-bold text-white text-base">Chemical & Catalysts Products Division</h4>
                <p className="text-[10px] text-sky-400 font-mono font-bold uppercase tracking-wider">Off-The-Shelf Reagents & Commercial Intermediates</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We warehouse and distribute a wide catalog of high-purity chemicals, categorized specifically for industrial sectors. From our flagship precious metal catalysts and salts to specialized intermediates across cosmetic, agrochemical, and pharmaceutical industries.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 bg-slate-950/50 p-4 rounded-xl border border-slate-850">
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Catalysts & Precious Metal Salts (Pd/C, Pt/C, Raney Ni)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Pharmaceutical Intermediates (Amino Pyridine, 2-Acetyl Thiophene)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Agrochemical & Cosmetic Intermediates (Pentanediol, Selenium Sulfate)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Speciality & Fine Chemicals (Diiodomethane, Iodobenzoic Acid)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-sky-500/30 transition">
            <div className="flex items-center space-x-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30 font-bold">2</span>
              <div>
                <h4 className="font-display font-bold text-white text-base">Scientific & Technical Services Division</h4>
                <p className="text-[10px] text-sky-400 font-mono font-bold uppercase tracking-wider">Bespoke Purification, Custom Synthesis & Advisory</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Helping scientists resolve isomer mixtures, optimize synthetic reaction paths, scale up compounds, and perform explosive reduction experiments inside highly monitored, hazard-safe corridors.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 bg-slate-950/50 p-4 rounded-xl border border-slate-850">
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Product Purification & Custom Synthesis (Pilot/Commercial scales)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Product Development Desk (Pathway planning & process optimization)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Hydrogenation Reduction Capability (High pressure Parr shaker/autoclave runs)</li>
              <li className="flex items-center gap-2"><span className="text-sky-500 font-bold">•</span> Pharma & Chemical Consultancy (Metal reclaiming & compliance clearances)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Direct Contact & Physical Address Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl font-bold text-white">Get in Touch Directly</h3>
          <p className="text-xs text-slate-400">
            Have a custom requirement or require immediate bulk pricing indexes? Contact our Rajasthan desk directly.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Mobile / Whatsapp */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Mobile Hotline</span>
                <a href="tel:+918918588147" className="text-xs font-bold text-white hover:text-sky-400 transition block mt-0.5">
                  +91-8918588147
                </a>
                <span className="text-[10px] text-slate-400 block mt-0.5">Direct & WhatsApp Sourcing Desk</span>
              </div>
            </div>

            {/* Email Contact with both emails */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/40 text-sky-400 border border-sky-900/30">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Sales Desk</span>
                  <a href="mailto:sales@jiyamatradelinks.com" className="text-xs font-bold text-sky-400 hover:text-white transition block mt-0.5">
                    sales@jiyamatradelinks.com
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Technical Inquiries</span>
                  <a href="mailto:info@jiyamatradelinks.com" className="text-xs font-bold text-slate-300 hover:text-sky-400 transition block mt-0.5">
                    info@jiyamatradelinks.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide">Operational Hours</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>Monday - Friday</span>
                <span className="font-semibold text-slate-200">09:00 AM - 06:30 PM (IST)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>Saturday</span>
                <span className="font-semibold text-slate-200">10:00 AM - 04:00 PM (IST)</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-rose-400 font-semibold">Closed (AI Sourcing active)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Address & Map context */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-sky-400" />
              <span>Rajasthan Distribution Hub</span>
            </h3>
            
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              Our central corporate facility and logistic warehouse are strategically situated in <strong>Udaipur, Rajasthan</strong>, offering exceptional proximity to direct rail and freight links, guaranteeing robust chemical supply chains.
            </p>

            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-850 font-display font-medium text-xs text-slate-300">
              <strong>Jiyama Tradelinks Corporate Address:</strong> <br />
              Udaipur, Rajasthan, <br />
              India - 313001
            </div>
          </div>

          {/* Styled abstract graphic map representation */}
          <div className="mt-6 rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900 h-44 relative overflow-hidden border border-slate-850 flex items-center justify-center">
            {/* abstract map lines */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute top-1/2 left-1/3 h-0.5 w-1/2 bg-sky-500/20 rotate-12" />
            <div className="absolute top-1/3 left-1/2 h-0.5 w-1/3 bg-sky-500/10 -rotate-45" />
            
            {/* Udaipur marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg animate-bounce">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="mt-1.5 rounded-full bg-slate-950 border border-slate-800 px-2.5 py-1 text-[9px] font-bold text-white shadow-sm font-display tracking-tight">
                UDAIPUR, RAJASTHAN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple absolute icons placeholder to avoid compile errors
function Warehouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21V10l9-6 9 6v11H3z" />
      <path d="M9 21V11h6v10" />
      <path d="M2 10h20" />
    </svg>
  );
}
