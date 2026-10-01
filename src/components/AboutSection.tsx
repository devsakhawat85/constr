import React from 'react';
import { ShieldCheck, Users, Compass, Award, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/imagePaths';
import { COMPANY_INFO } from '../data/mmsData';

interface AboutSectionProps {
  onRequestConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestConsultation }) => {
  return (
    <section id="about" className="py-24 bg-[#0B0F15] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#121822]">
              <img
                src={IMAGES.skyscraperVertical}
                alt="Marissa Management & Services high-rise architectural excellence"
                className="w-full h-[520px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15]/90 via-transparent to-transparent" />

              {/* Quiet metric callout */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0E1520]/90 backdrop-blur-md border border-white/[0.1]">
                <div className="text-2xl font-bold text-white font-display tabular-nums mb-0.5">
                  10+ Years
                </div>
                <div className="text-xs font-semibold text-amber-400 mb-1">
                  Operational Excellence in Canada
                </div>
                <p className="text-xs text-slate-300">
                  Registered in Ontario and Alberta, dedicated to long-term property value protection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Editorial Story */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
              About Marissa Management &amp; Services
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-6 leading-tight">
              Built Around Reliable Service.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
              Marissa Management &amp; Services Inc. (MMS) is a Canadian group of companies registered
              in Ontario and Alberta. We provide turnkey building solutions across the Greater
              Toronto Area, southern Ontario, and Alberta metropolitan markets.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              From day-to-day property maintenance and full-time building superintendent staffing to
              certified disaster restoration and complex mechanical overhauls, MMS serves residential,
              commercial, and industrial complexes. We currently provide services to over 110
              buildings and 11,000 suites—including Canada's tallest and largest residential vertical
              community tower.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#121822] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Integrity &amp; Transparency</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Honest, transparent billing, clear digital work logs, and accountable reporting for
                  boards of directors.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121822] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Engineered Solutions</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We diagnose underlying mechanical and structural failures to deliver lasting repairs,
                  never cosmetic shortcuts.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121822] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Diversity &amp; Respect</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Committed to respectful resident interactions, professional conduct, and positive
                  community relations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121822] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Quality &amp; Standards</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict adherence to ANSI/IICRC protocols, provincial building codes, and ESA safety
                  regulations.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded transition-all cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <span>Request a Property Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
