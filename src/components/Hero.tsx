import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Building } from 'lucide-react';
import { IMAGES } from '../assets/imagePaths';
import { COMPANY_INFO } from '../data/mmsData';

interface HeroProps {
  onRequestConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestConsultation, onExploreServices }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroArchitecture}
          alt="Modern luxury high-rise condominium architecture in Toronto"
          className="w-full h-full object-cover object-center transform scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-[#0B0F15]/80 to-[#0B0F15]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F15]/90 via-[#0B0F15]/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Authentic verification kicker (no pill boxes) */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-amber-400 mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Ontario &amp; Alberta Registered Group of Companies</span>
            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300 hidden sm:inline">24/7/365 On-Call Dispatch</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 font-display text-balance">
            Complete Building Solutions.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              One Trusted Partner.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            {COMPANY_INFO.subTagline}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <button
              onClick={onRequestConsultation}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded transition-all duration-200 shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] rounded transition-all duration-200 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Trust Statement beneath buttons */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-2">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Professional Property &amp; Building Services</span>
            </div>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Building className="w-4 h-4 text-slate-400" />
              <span>Trusted at Aura (78 Storeys) &amp; 110+ properties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle architectural separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
    </section>
  );
};
