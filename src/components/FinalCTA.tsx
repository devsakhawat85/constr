import React from 'react';
import { ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { IMAGES } from '../assets/imagePaths';
import { COMPANY_INFO } from '../data/mmsData';

interface FinalCTAProps {
  onRequestConsultation: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onRequestConsultation,
  onContactClick,
}) => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroArchitecture}
          alt="Modern property management excellence in Canada"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15] via-[#0B0F15]/90 to-[#0B0F15]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-4 block">
          Partner With Marissa Management &amp; Services
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display mb-6 leading-tight text-balance">
          Let's Take Better Care of Your Property.
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
          Connect with MMS to discuss your property management, maintenance, restoration or building
          service needs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onRequestConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-xl transition-all shadow-xl shadow-amber-500/20 cursor-pointer"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white hover:text-amber-300 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] rounded-xl transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Direct Phone reassurance */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <span>Need immediate assistance? Call our 24/7 hotline directly:</span>
          <a
            href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
            className="text-amber-400 font-mono font-semibold hover:underline"
          >
            {COMPANY_INFO.emergencyHotline}
          </a>
        </div>
      </div>
    </section>
  );
};
