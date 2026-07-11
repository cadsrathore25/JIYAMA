import React, { useState } from 'react';
import { Beaker, Search, Send, ShieldAlert, Sparkles, Phone, Globe, ShieldCheck } from 'lucide-react';

interface CustomSourcingFormProps {
  onOpenAssistant: (initialMessage?: string) => void;
}

export default function CustomSourcingForm({ onOpenAssistant }: CustomSourcingFormProps) {
  const [formData, setFormData] = useState({
    chemicalName: '',
    casNo: '',
    purity: '99% + (Standard Research Grade)',
    quantity: '1 kg',
    urgency: 'Standard (3-4 weeks)',
    specifications: '',
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleConsultAI = () => {
    onOpenAssistant(
      `Hello! I need a custom sourcing solution for a chemical. Name: ${formData.chemicalName}, CAS: ${formData.casNo || 'N/A'}, Purity: ${formData.purity}, Required Quantity: ${formData.quantity}. Can you verify sourcing pathways, global trade compliances, and key manufacturers in Jiyama's supply network?`
    );
  };

  return (
    <section id="custom-sourcing-section" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl font-extrabold text-white">
          Global Customized <span className="font-serif italic text-sky-200">Sourcing</span> Solutions
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          Can't find a rare catalyst, chiral intermediate, or specialized active ingredient? 
          Jiyama Tradelinks' veteran procurement experts can source, import, and test custom chemicals worldwide.
        </p>
      </div>

      {!submitted ? (
        <div className="mt-12 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sourcing form */}
          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide border-b border-slate-800 pb-2 flex items-center space-x-2">
              <Beaker className="h-5 w-5 text-sky-400" />
              <span>Chemical Specification Sheet</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-400">Chemical / IUPAC Name *</label>
                <input
                  type="text"
                  name="chemicalName"
                  required
                  value={formData.chemicalName}
                  onChange={handleInputChange}
                  placeholder="e.g. 4-Chloro-2-fluorobenzonitrile"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400">CAS Registry Number (Highly Recommended)</label>
                <input
                  type="text"
                  name="casNo"
                  value={formData.casNo}
                  onChange={handleInputChange}
                  placeholder="e.g. 289-95-2"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400">Purity Target</label>
                <select
                  name="purity"
                  value={formData.purity}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-2 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                >
                  <option value="99% + (Standard Research Grade)">99% + (Research)</option>
                  <option value="95% - 98% (Synthesis Grade)">95% - 98%</option>
                  <option value="99.9% + (High-Purity Catalyst / Electronic)">99.9% + (High Purity)</option>
                  <option value="USP / Ph. Eur. Compliant (API Grade)">USP / Ph. Eur. Compliant</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400">Required Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g. 250 g, 50 kg"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400">Sourcing Urgency</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-955 bg-slate-950 px-2 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                >
                  <option value="Standard (3-4 weeks)">Standard (3-4 weeks)</option>
                  <option value="Express (7-12 days)">Express (7-12 days)</option>
                  <option value="Long Term Contract (Yearly plan)">Long Term Supply</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400">Structural Details, MSDS demands, or Packing specs</label>
              <textarea
                name="specifications"
                value={formData.specifications}
                onChange={handleInputChange}
                rows={2}
                placeholder="e.g. Liquid form, packing under nitrogen/argon atmosphere, requires COA with HPLC chromatogram."
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900 resize-none"
              />
            </div>

            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide border-b border-slate-800 pt-2 pb-2">
              Requester Profile
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-400">Procurement Officer / Researcher Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Ramesh Chawla"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400">Institutional Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. sourcing@pharmalab.co.in"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-400">Company / Laboratory Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Apex Synthetics Pvt Ltd"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 90000 00000"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleConsultAI}
                className="flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 bg-sky-950/40 hover:bg-sky-900/60 border border-sky-900/30 py-2.5 px-4 rounded-xl transition"
              >
                <Sparkles className="h-4 w-4 text-sky-400" />
                <span>Pre-Scan Sourcing Pathways (AI)</span>
              </button>

              <button
                type="submit"
                className="flex items-center space-x-2 rounded-xl bg-sky-600 hover:bg-sky-500 px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition"
              >
                <Send className="h-4 w-4" />
                <span>Submit Sourcing Sheet</span>
              </button>
            </div>
          </form>

          {/* Guidelines Sidebar */}
          <div className="md:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                <span>Jiyama Sourcing Guarantee</span>
              </h4>
              <p className="mt-2 text-xs text-slate-400">
                Leveraging 20+ years of procurement expertise, we coordinate compliance, custom laboratory synthesis, custom-grade packaging, and seamless customs clearances.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-sky-950 text-sky-400 border border-sky-900/40 font-bold text-[10px]">1</div>
                  <p className="text-xs text-slate-400">
                    <strong>Purity Analysis:</strong> Every imported compound is tested in compliant laboratories to verify HPLC, NMR, and GC-MS profiles.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-sky-950 text-sky-400 border border-sky-900/40 font-bold text-[10px]">2</div>
                  <p className="text-xs text-slate-400">
                    <strong>Global Sourcing Network:</strong> Direct supply routes from major fine chemical hubs in Europe, US, Japan, and India.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-sky-950 text-sky-400 border border-sky-900/40 font-bold text-[10px]">3</div>
                  <p className="text-xs text-slate-400">
                    <strong>Compliance Standard:</strong> Handling hazardous reagents, toxic chemicals, and low-temperature logistics under local laws.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Urgent Inquiries</span>
              <p className="mt-1 text-xs text-slate-300 font-semibold">
                Call/WhatsApp: +91-8918588147
              </p>
              <p className="text-[11px] text-slate-500">
                Corporate Hub: Udaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Sourcing Confirmation Screen */
        <div className="mt-12 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-md text-center max-w-2xl mx-auto space-y-6">
          <div className="h-16 w-16 bg-sky-950/40 rounded-full flex items-center justify-center mx-auto text-sky-400 border border-sky-900/30">
            <ShieldCheck className="h-8 w-8 text-sky-400" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white">Sourcing Request Logged</h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. 
            We have successfully initiated pathways for <strong>{formData.chemicalName} {formData.casNo ? `(CAS: ${formData.casNo})` : ''}</strong>. 
            Our veteran procurement desks in Udaipur, Rajasthan will verify pricing indexes, supply limits, and import compliance rules immediately.
          </p>

          <div className="rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-300 text-left border border-slate-800">
            <span className="font-bold text-white block border-b border-slate-800 pb-1 mb-2">Logged Specs:</span>
            <div>• Name: {formData.chemicalName}</div>
            <div>• CAS: {formData.casNo || 'N/A'}</div>
            <div>• Purity Target: {formData.purity}</div>
            <div>• Quantity Demand: {formData.quantity}</div>
            <div>• Priority Status: {formData.urgency}</div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-slate-400 hover:text-white transition"
            >
              Submit Another Request
            </button>
            <button
              onClick={handleConsultAI}
              className="flex items-center space-x-1.5 rounded-xl bg-sky-600 hover:bg-sky-50 text-white px-5 py-2.5 text-xs font-semibold transition shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Simulate AI Logistics Scan</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
