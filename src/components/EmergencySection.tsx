import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Flame, Droplets, Zap, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/imagePaths';
import { COMPANY_INFO } from '../data/mmsData';

interface EmergencySectionProps {
  onRequestEmergencyQuote: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onRequestEmergencyQuote }) => {
  return (
    <section id="emergency" className="relative py-24 bg-[#070A0F] border-y border-white/[0.08] overflow-hidden scroll-mt-12">
      {/* Background Architectural Night Photography */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={IMAGES.emergencyNight}
          alt="Night illumination of commercial building entrance ready for 24/7 emergency response"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-[#070A0F]/90 to-[#070A0F]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Urgent Editorial Message */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="uppercase tracking-wider">24/7/365 Rapid Emergency Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-6 leading-tight">
              When Your Property Needs Help,
              <br />
              <span className="text-amber-400">We're Ready.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Plumbing breaches, catastrophic riser bursts, and electrical failures don't wait for
              business hours. MMS operates a dedicated 24-hour on-call response team equipped with
              industrial water extractors, thermal cameras, and certified technicians.
            </p>

            {/* Emergency capabilities list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <Droplets className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Rapid Flood Extraction</div>
                  <div className="text-xs text-slate-400">Immediate containment, industrial desiccant drying.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Thermal Leak Diagnostics</div>
                  <div className="text-xs text-slate-400">Pinpointing hidden moisture behind demising walls.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Emergency Power &amp; Pumps</div>
                  <div className="text-xs text-slate-400">Sump pump failures, booster pumps &amp; panel trips.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <Flame className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">ANSI/IICRC S520 Remediation</div>
                  <div className="text-xs text-slate-400">Certified mold abatement with negative air containment.</div>
                </div>
              </div>
            </div>

            {/* Emergency Call Button & Form Trigger */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-3 px-7 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base rounded-xl transition-all shadow-xl shadow-amber-500/20"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Hotline: {COMPANY_INFO.emergencyHotline}</span>
              </a>

              <button
                onClick={onRequestEmergencyQuote}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-sm rounded-xl border border-white/[0.12] transition-colors cursor-pointer"
              >
                <span>Dispatch Request Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Emergency Dispatch Board */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F1622] rounded-2xl p-7 border border-white/[0.1] shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-white font-display">
                    Direct Dispatch Centers
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live 24/7/365
                </span>
              </div>

              {/* Ontario HQ */}
              <div className="p-4 rounded-xl bg-[#141C2B] border border-white/[0.06] mb-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  Ontario &amp; Greater Toronto Area
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  Hotline: (905) 302-2888
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Email: admin@marissamsinc.com
                </div>
                <a
                  href="tel:19053022888"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Ontario Dispatch Now</span>
                </a>
              </div>

              {/* Alberta Branch */}
              <div className="p-4 rounded-xl bg-[#141C2B] border border-white/[0.06]">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  Alberta Operations (Edmonton &amp; Calgary)
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  Direct: (780) 281-2530
                </div>
                <div className="text-xs text-slate-400 mb-3">
                  Email: mms.ab@marissamsinc.com
                </div>
                <a
                  href="tel:17802812530"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Alberta Branch Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
