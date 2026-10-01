import React from 'react';
import { ArrowRight, Cpu, Wrench, ShieldCheck, Activity } from 'lucide-react';
import { IMAGES } from '../assets/imagePaths';

interface FeaturedSplitSectionProps {
  onExploreServices: () => void;
  onRequestConsultation: () => void;
}

export const FeaturedSplitSection: React.FC<FeaturedSplitSectionProps> = ({
  onExploreServices,
  onRequestConsultation,
}) => {
  return (
    <section className="py-24 bg-[#0E141E] border-y border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-fidelity Facility & Mechanical Operations visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#141B26]">
              <img
                src={IMAGES.servicesFacility}
                alt="Modern building mechanical room with automated controls and pristine epoxy flooring maintained by MMS"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F15]/90 via-transparent to-transparent" />

              {/* Informative overlay tag (clean unboxed metadata) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E1520]/90 backdrop-blur-md border border-white/[0.1]">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Permanent Engineered Solutions</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We deploy thermal imaging optics, calibrated moisture meters, and building
                  automation telemetry to solve problems at their root cause.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Editorial Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-3 block">
              Integrated Facility Operations
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-6 leading-tight">
              More Than Maintenance.
              <br />
              <span className="text-amber-400">A Complete Property Partner.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              Modern high-density residential towers and commercial facilities demand more than
              ad-hoc repair technicians. Marissa Management &amp; Services Inc. functions as your
              strategic operational partner, integrating on-site superintendent staffing with licensed
              mechanical trades and rapid emergency restoration.
            </p>

            {/* Key Factual Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">
                    Building Automation &amp; AI-Based Diagnostics
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sophisticated mechanical equipment monitoring, thermal camera assessments, and
                    endoscope inspection technology to detect leaks before they cause catastrophic
                    floods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">
                    Certified International Standards
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Restoration procedures strictly comply with ANSI/IICRC S500 for water damage and
                    ANSI/IICRC S520 for professional mold remediation, ensuring health compliance and
                    full insurance auditability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-1">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">
                    Eliminating Subcontractor Friction
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    By consolidating general contracting, custodial management, electrical, and
                    superintendent services under one company, boards and managers benefit from one
                    accountable point of contact.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded transition-all cursor-pointer shadow-lg shadow-amber-500/10"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded transition-all cursor-pointer"
              >
                <span>Schedule Property Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
