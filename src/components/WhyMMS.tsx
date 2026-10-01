import React from 'react';
import { WHY_MMS_POINTS } from '../data/mmsData';

export const WhyMMS: React.FC = () => {
  return (
    <section id="why-mms" className="py-24 bg-[#0B0F15] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
            The MMS Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-5">
            Engineered for Reliability.
            <br />
            <span className="text-slate-400">Chosen for Proven Accountability.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Property managers and condominium boards across Ontario and Alberta partner with MMS to
            safeguard their assets, elevate resident satisfaction, and ensure rapid 24/7 responsiveness.
          </p>
        </div>

        {/* 6 Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MMS_POINTS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#121822] hover:bg-[#151D2A] border border-white/[0.07] hover:border-amber-500/30 rounded-xl p-8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                    {pillar.number}
                  </span>
                  <div className="w-8 h-px bg-white/[0.1] group-hover:w-12 group-hover:bg-amber-400/50 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                MMS Operational Protocol
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
