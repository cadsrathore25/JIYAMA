import React, { useState } from 'react';
import { Product, EnquiryItem, EnquiryForm } from '../types';
import { X, ClipboardList, Trash2, Send, Download, Check, Sparkles, Phone, MapPin, Mail } from 'lucide-react';

interface EnquiryCartProps {
  items: EnquiryItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQty: (productId: string, qty: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export default function EnquiryCart({
  items,
  onRemoveItem,
  onUpdateQty,
  onClear,
  onClose,
}: EnquiryCartProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateInquiryDocument = (form: typeof formData, enquiryItems: EnquiryItem[]) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let doc = `====================================================
           JIYAMA FINECHEM LLP - OFFICIAL QUOTE REQUEST
====================================================
Date: ${currentDate}
Location of Supplier: Udaipur, Rajasthan, India
Contact Mobile: +91-8918588147
Email: info@jiyamatradelinks.com

CUSTOMER PROFILE:
-----------------
Contact Person : ${form.name}
Company Name   : ${form.company}
Email Address  : ${form.email}
Phone/Mobile   : ${form.phone}

ADDITIONAL INSTRUCTIONS/MESSAGE:
"${form.message || 'None provided.'}"

INQUIRY PRODUCT LIST:
---------------------
`;

    enquiryItems.forEach((item, index) => {
      doc += `${index + 1}. Product: ${item.product.name}
   Category: ${item.product.category}
   CAS No  : ${item.product.casNo || 'N/A'}
   Required Qty : ${item.quantity || '1 kg'}
   Notes   : ${item.notes || 'Purity: High Purity / Standard packaging.'}
----------------------------------------------------\n`;
    });

    doc += `\nThank you for choosing Jiyama Finechem LLP. Our procurement veterans (with 20+ years of chemical supply expertise) will revert with structural compatibility analysis, formal proforma invoice, price index, and shipping timelines.`;
    return doc;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    // Create a beautiful downloadable/copyable document
    const documentText = generateInquiryDocument(formData, items);
    setGeneratedDoc(documentText);
    setSubmitted(true);
  };

  const downloadTextFile = () => {
    if (!generatedDoc) return;
    const element = document.createElement('a');
    const file = new Blob([generatedDoc], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Jiyama_Quote_Request_${formData.company.replace(/\s+/g, '_') || 'Inquiry'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    if (!generatedDoc) return;
    navigator.clipboard.writeText(generatedDoc);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div id="enquiry-cart-container" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg max-w-4xl mx-auto my-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-sky-400" />
          <h2 className="font-display text-xl font-bold text-white">
            Enquiry Cart / RFQ System
          </h2>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {!submitted ? (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Cart items list */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Selected Chemicals for Quote ({items.length})
            </h3>

            {items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center bg-slate-950">
                <ClipboardList className="mx-auto h-10 w-10 text-slate-600" />
                <p className="mt-2 text-xs text-slate-400">
                  Your Enquiry list is empty. Add high-purity catalysts or specialty compounds from the catalog to build a Quote Request.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-start justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-sm"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="inline-block rounded-full bg-slate-900 border border-slate-800 px-2 py-0.5 text-[9px] font-semibold text-slate-400">
                        {item.product.subcategory}
                      </span>
                      <h4 className="mt-1 font-display text-xs font-bold text-white truncate">
                        {item.product.name}
                      </h4>
                      {item.product.casNo && (
                        <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                          CAS: {item.product.casNo}
                        </p>
                      )}
                    </div>

                    <div className="ml-4 flex items-center space-x-3">
                      {/* Quantity specifier */}
                      <div className="flex flex-col">
                        <span className="text-[9px] font-semibold text-slate-500 uppercase">Quantity</span>
                        <input
                          type="text"
                          value={item.quantity || '1 kg'}
                          onChange={(e) => onUpdateQty(item.product.id, e.target.value)}
                          className="mt-1 w-20 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-950"
                          placeholder="e.g. 5 kg"
                        />
                      </div>

                      {/* Remove item */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-red-950/40 hover:text-red-400 transition self-end"
                        title="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-2">
                  <button
                    onClick={onClear}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 transition"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sourcing Contact Form */}
          <div className="lg:col-span-5 border-t border-slate-800 pt-6 lg:border-t-0 lg:border-l lg:border-slate-800 lg:pt-0 lg:pl-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Submit Request For Quote (RFQ)
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Satish Sharma"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400">Company / University / Lab *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Rajasthan Research Laboratories"
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-400">Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. procurement@lab.com"
                    className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400">Mobile No. *</label>
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

              <div>
                <label className="block text-xs font-semibold text-slate-400">Additional Specifications / Purity requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="e.g. Purity > 99.8%, demand dry format, custom sphere sizes for alumina sphere catalysts..."
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-900 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={items.length === 0}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 py-3 text-xs font-semibold text-white shadow-md transition"
              >
                <Send className="h-4 w-4" />
                <span>Generate Official Quote Request</span>
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Receipt / Quote generation screen */
        <div className="mt-6 space-y-6">
          <div className="rounded-xl bg-sky-950/40 p-6 text-center border border-sky-900/30">
            <Check className="mx-auto h-12 w-12 text-sky-400 bg-slate-900 rounded-full p-2 border border-sky-850 shadow-sm" />
            <h3 className="mt-4 font-display text-lg font-bold text-sky-300">
              Inquiry Generated Successfully!
            </h3>
            <p className="mt-2 text-xs text-slate-300 max-w-xl mx-auto">
              Your Request for Quote has been formatted. Jiyama Finechem LLP's senior veterans (+20 years of procurement and catalytic engineering expertise) are reviewing your synthetic guidelines.
            </p>
          </div>

          {/* Generated code template */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Formatted Inquiry Document
              </span>
              <div className="flex space-x-2 items-center">
                {copied && (
                  <span className="text-xs text-sky-400 font-semibold animate-fade-in mr-2">Copied RFQ to clipboard!</span>
                )}
                <button
                  onClick={copyToClipboard}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition"
                >
                  Copy Text
                </button>
                <button
                  onClick={downloadTextFile}
                  className="flex items-center space-x-1 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-500 transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download RFQ Document</span>
                </button>
              </div>
            </div>

            <pre className="w-full rounded-2xl bg-slate-950 p-6 text-left font-mono text-xs text-sky-400 overflow-x-auto border border-slate-800 shadow-inner max-h-80 whitespace-pre">
              {generatedDoc}
            </pre>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h4 className="font-display font-bold text-slate-200 flex items-center space-x-2">
              <Phone className="h-5 w-5 text-sky-400" />
              <span>Submit Instantly via Whatsapp or Direct Mail</span>
            </h4>
            <p className="mt-2 text-xs text-slate-400 max-w-2xl">
              You can instantly send the copied document text to our Udaipur corporate office to secure urgent processing or wholesale discount models:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/918918588147?text=${encodeURIComponent(
                  `Hello Jiyama Finechem LLP! I would like to request a quote for high-purity chemical intermediates. Here are my requirements: \n\n${items.map(it => `• ${it.product.name} (Qty: ${it.quantity})`).join('\n')}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 rounded-xl bg-sky-600 hover:bg-sky-500 p-3 text-xs font-semibold text-white transition shadow-sm"
              >
                <span>Send WhatsApp: +91-8918588147</span>
              </a>
              <div className="flex flex-col items-center justify-center space-y-1 rounded-xl border border-slate-800 bg-slate-900 p-3 text-xs font-semibold text-slate-300 shadow-sm">
                <div className="flex items-center space-x-1.5 text-[10px] text-sky-400 uppercase font-mono tracking-wider">
                  <Mail className="h-3.5 w-3.5 text-sky-400" />
                  <span>Email Desks</span>
                </div>
                <div className="text-center text-[11px] space-y-0.5">
                  <p>Sales: <span className="text-white">sales@jiyamatradelinks.com</span></p>
                  <p>General: <span className="text-slate-400">info@jiyamatradelinks.com</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setSubmitted(false);
                setGeneratedDoc(null);
                onClear();
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white transition"
            >
              Build New RFQ List
            </button>
            <button
              onClick={onClose}
              className="rounded-xl bg-sky-600 hover:bg-sky-500 px-5 py-2.5 text-xs font-semibold text-white transition shadow-sm"
            >
              Return to Catalog
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
