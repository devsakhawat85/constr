import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Building, MapPin, ArrowRight } from 'lucide-react';
import { VERIFIED_PROPERTIES } from '../data/mmsData';
import { MMSProperty } from '../types';
import { IMAGES } from '../assets/imagePaths';

interface PropertyShowcaseProps {
  onSelectProperty: (property: MMSProperty) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onSelectProperty }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="properties" className="py-24 bg-[#0E141E] border-t border-white/[0.08] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
              Proven Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-3">
              Trusted Across Diverse Properties
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              From landmark 78-storey vertical towers in downtown Toronto to luxury suburban
              condominium communities, MMS delivers uncompromising facility reliability.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-lg bg-[#141B26] hover:bg-[#1A2332] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
              aria-label="Scroll left through properties"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-lg bg-[#141B26] hover:bg-[#1A2332] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
              aria-label="Scroll right through properties"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontally scrolling cards showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {VERIFIED_PROPERTIES.map((property, index) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="snap-start shrink-0 w-[310px] sm:w-[360px] bg-[#121822] hover:bg-[#151E2B] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Card Visual Header */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={
                    index === 0
                      ? IMAGES.skyscraperVertical
                      : index === 1
                      ? IMAGES.heroArchitecture
                      : IMAGES.servicesFacility
                  }
                  alt={property.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121822] via-[#121822]/40 to-transparent" />

                {/* Badge for Canada's tallest or scale */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/30">
                    {property.scaleBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-amber-300 transition-colors">
                    {property.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {property.description}
                  </p>

                  {/* Services tags (clean unboxed text list) */}
                  <div className="space-y-1 mb-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified Services:
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                      {property.servicesProvided.slice(0, 3).map((srv, sIdx) => (
                        <span key={sIdx} className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          <span>{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {property.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span>View Property</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
