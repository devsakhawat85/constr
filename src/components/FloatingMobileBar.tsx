import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/mmsData';

interface FloatingMobileBarProps {
  onRequestConsultation: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  onRequestConsultation,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#0B0F15]/95 backdrop-blur-md border-t border-white/[0.1] px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold"
          aria-label="Call 24/7 Emergency Line"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call 24/7</span>
        </a>

        <button
          onClick={onRequestConsultation}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Consultation</span>
        </button>
      </div>
    </div>
  );
};
