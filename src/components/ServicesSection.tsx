import React, { useState } from 'react';
import {
  Hammer,
  Building2,
  ShieldAlert,
  Wrench,
  Zap,
  Sparkles,
  Layers,
  Lock,
  FileCheck,
  Paintbrush,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { VERIFIED_SERVICES } from '../data/mmsData';
import { MMSService, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: MMSService) => void;
  onRequestQuoteForService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Hammer,
  Building2,
  ShieldAlert,
  Wrench,
  Zap,
  Sparkles,
  Layers,
  Lock,
  FileCheck,
  Paintbrush,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuoteForService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'staffing', label: 'Staffing & Facilities' },
    { id: 'mechanical', label: 'Mechanical & Systems' },
    { id: 'capital', label: 'Capital Projects' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? VERIFIED_SERVICES
      : VERIFIED_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#0B0F15] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
              Everything Your Property Needs.
              <br />
              <span className="text-slate-400">Under One Roof.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              From everyday maintenance to emergency restoration, MMS provides integrated
              building services through one experienced team.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#141B26] rounded-lg border border-white/[0.08] self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Hammer;

            return (
              <div
                key={service.id}
                className="group relative bg-[#111722] hover:bg-[#141C2B] rounded-xl p-7 border border-white/[0.07] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  {/* Top line with Icon and category kicker */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-150 mb-2.5 font-display">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer of Card: Standard and Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[170px]" title={service.standards}>
                    {service.standards}
                  </span>

                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300 hover:underline cursor-pointer"
                  >
                    <span>Scope Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
