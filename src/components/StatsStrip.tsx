import React from 'react';
import { VERIFIED_STATS } from '../data/mmsData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#0E141D] border-y border-white/[0.08] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-white/[0.08]">
          {VERIFIED_STATS.map((stat, idx) => (
            <div
              key={stat.index}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'lg:pl-8' : ''
              } group`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[11px] font-mono text-amber-500/80 tracking-widest uppercase">
                  {stat.index}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums font-display mb-1.5">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-normal line-clamp-2">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
