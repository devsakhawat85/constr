import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO, VERIFIED_OFFICES, VERIFIED_SERVICES } from '../data/mmsData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    message: '',
    isUrgent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid business email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    }
    if (!formData.serviceNeeded) {
      errs.serviceNeeded = 'Please select the primary service needed';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F15] border-t border-white/[0.08] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct verified contact information */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
              Direct Contact
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
              Let's Talk About Your Property.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Reach out to our leadership team for facility management inquiries, emergency dispatch,
              or superintendent staffing proposals.
            </p>

            {/* Office Locations */}
            <div className="space-y-6 mb-8">
              {VERIFIED_OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#121822] border border-white/[0.07]"
                >
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    {office.region}
                  </div>
                  <div className="text-xs text-slate-400 mb-3">
                    {office.territory}
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                      className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span className="font-mono tabular-nums">{office.phone}</span>
                      {office.isDispatchHeadquarters && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">
                          24/7 Hotline
                        </span>
                      )}
                    </a>

                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    24/7 Emergency Dispatch
                  </div>
                  <div className="text-xs text-slate-300">
                    Always answered live for property emergencies
                  </div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
                className="text-xs font-mono font-bold text-amber-300 underline"
              >
                {COMPANY_INFO.emergencyHotline}
              </a>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121822] rounded-2xl p-8 sm:p-10 border border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-2">
                    Request Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. An MMS property specialist will review your request
                    and connect with you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceNeeded: '',
                        message: '',
                        isUrgent: false,
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Vance"
                        className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company or Condominium Corp #
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. TSCC 2450 / Property Management"
                        className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. manager@condoboard.ca"
                        className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (416) 555-0199"
                        className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Category Needed <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a service category</option>
                      {VERIFIED_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Integrated Building Management">
                        Complete Integrated Building Solutions (Turnkey)
                      </option>
                    </select>
                    {errors.serviceNeeded && (
                      <p className="text-xs text-rose-400 mt-1">{errors.serviceNeeded}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details &amp; Building Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your property type (high-rise, commercial, townhouse complex), estimated unit count, and specific challenges..."
                      className="w-full bg-[#18202E] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Urgent 24/7 Checkbox */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <input
                      type="checkbox"
                      id="isUrgent"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                    />
                    <label htmlFor="isUrgent" className="text-xs text-slate-300 cursor-pointer">
                      <span className="font-semibold text-amber-400">Emergency 24/7 Request:</span> This
                      is an active water leak, flood, or urgent building issue requiring immediate
                      dispatch.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <span>Send Request to MMS</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
