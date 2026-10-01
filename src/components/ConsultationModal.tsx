import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Building } from 'lucide-react';
import { VERIFIED_SERVICES, COMPANY_INFO } from '../data/mmsData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    propertyType: 'High-Rise Residential Condominium',
    unitCount: '100-300 units',
    selectedServices: preselectedService ? [preselectedService] : ['Building Superintendent Services'],
    urgency: 'scheduled_quote',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceTitle);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== serviceTitle)
          : [...prev.selectedServices, serviceTitle],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please provide your name, business email, and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#101622] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-[#141C2B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              MMS
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Request Property Consultation
              </h3>
              <p className="text-xs text-slate-400">
                Tailored building solutions for property managers &amp; boards of directors
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white font-display mb-2">
                Consultation Request Submitted
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Thank you, {formData.name}. Our facility operations director will review your
                property requirements and contact you within one business day.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 max-w-sm mx-auto mb-6">
                For active emergency response, call our 24/7 hotline directly:{' '}
                <span className="text-amber-400 font-mono font-semibold">
                  {COMPANY_INFO.emergencyHotline}
                </span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                  {error}
                </div>
              )}

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robert Henderson"
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Condominium Corp #
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. TSCC #2140"
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. manager@condo.ca"
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (905) 555-0123"
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.06]">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="High-Rise Residential Condominium">High-Rise Residential Condominium</option>
                    <option value="Multi-Tower Residential Campus">Multi-Tower Residential Campus</option>
                    <option value="Mid-Rise / Boutique Condominium">Mid-Rise / Boutique Condominium</option>
                    <option value="Commercial Office Building">Commercial Office Building</option>
                    <option value="Retail Plaza / Mixed-Use">Retail Plaza / Mixed-Use</option>
                    <option value="Industrial / Facility Complex">Industrial / Facility Complex</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Approximate Scale / Unit Count
                  </label>
                  <select
                    value={formData.unitCount}
                    onChange={(e) => setFormData({ ...formData, unitCount: e.target.value })}
                    className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Under 100 units / < 50k sq ft">Under 100 units / &lt; 50k sq ft</option>
                    <option value="100-300 units / 50k-150k sq ft">100–300 units / 50k–150k sq ft</option>
                    <option value="300-600 units / 150k-300k sq ft">300–600 units / 150k–300k sq ft</option>
                    <option value="600+ units / High-Rise Vertical Tower">600+ units / High-Rise Vertical Tower</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div className="pt-2 border-t border-white/[0.06]">
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Select Services You Wish to Discuss:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 bg-[#0D121B] rounded-lg border border-white/[0.06]">
                  {VERIFIED_SERVICES.map((s) => {
                    const isChecked = formData.selectedServices.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => handleServiceToggle(s.title)}
                        className={`flex items-center gap-2 p-2 rounded text-left text-xs transition-colors cursor-pointer ${
                          isChecked
                            ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                            : 'hover:bg-white/[0.04] text-slate-300'
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold text-[10px]'
                              : 'border-slate-600'
                          }`}
                        >
                          {isChecked && '✓'}
                        </div>
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Property Needs or Target Start Date
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any upcoming board review dates, RFP requirements, or existing building challenges..."
                  className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Confidential &amp; Non-Binding</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    Submit Consultation Request
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
