import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '../data/mmsData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? VERIFIED_TESTIMONIALS.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === VERIFIED_TESTIMONIALS.length - 1 ? 0 : prevIdx + 1
    );
  };

  const activeTestimonial = VERIFIED_TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#0B0F15] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/[0.08] gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-3">
              Words From the Communities We Protect
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Authentic statements from residents and condominium communities serviced by MMS.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-lg bg-[#141B26] hover:bg-[#1A2332] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400 tabular-nums">
              0{currentIndex + 1} / 0{VERIFIED_TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="p-3 rounded-lg bg-[#141B26] hover:bg-[#1A2332] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Showcase */}
        <div className="relative bg-[#111722] rounded-2xl p-8 sm:p-12 lg:p-16 border border-white/[0.08] shadow-2xl">
          <Quote className="w-12 h-12 text-amber-500/20 mb-6" />

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed font-display mb-10 text-balance">
            "{activeTestimonial.quote}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
            <div>
              <div className="text-base font-bold text-white font-display">
                {activeTestimonial.author}
              </div>
              <div className="text-sm font-semibold text-amber-400">
                {activeTestimonial.affiliation}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {activeTestimonial.propertyContext}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Client Record</span>
            </div>
          </div>
        </div>

        {/* Small preview strip below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {VERIFIED_TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'bg-[#151D2A] border-amber-500/40'
                  : 'bg-[#0E141D] border-white/[0.04] hover:border-white/[0.1]'
              }`}
            >
              <div className="text-xs font-semibold text-white mb-1 truncate">
                {t.affiliation}
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                "{t.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
