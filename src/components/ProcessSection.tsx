import React from 'react';
import { PROCESS_STEPS } from '../data/mmsData';
import { Search, FileSpreadsheet, HardHat, ShieldCheck } from 'lucide-react';

const processIcons = [Search, FileSpreadsheet, HardHat, ShieldCheck];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0E141E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
            Operational Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-3">
            How MMS Delivers Excellence
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A structured, transparent engineering process designed to eliminate surprises for
            property managers and boards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = processIcons[idx] || Search;

            return (
              <div
                key={step.step}
                className="bg-[#121822] rounded-xl p-6 border border-white/[0.07] flex flex-col justify-between group hover:border-amber-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 font-display group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                  Phase 0{idx + 1} Delivery
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
