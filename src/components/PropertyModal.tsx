import React from 'react';
import { X, MapPin, Building, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MMSProperty } from '../types';
import { IMAGES } from '../assets/imagePaths';

interface PropertyModalProps {
  property: MMSProperty | null;
  onClose: () => void;
  onRequestQuote: (propertyName: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onRequestQuote,
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#101622] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Visual Header */}
        <div className="relative h-64 bg-slate-900">
          <img
            src={
              property.id === 'aura-condo'
                ? IMAGES.skyscraperVertical
                : property.id === 'imperial-plaza'
                ? IMAGES.heroArchitecture
                : IMAGES.servicesFacility
            }
            alt={property.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-md inline-block mb-2">
              {property.scaleBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {property.name}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{property.location}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{property.type}</span>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              Building Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Verified Services Rendered */}
          <div className="p-4 rounded-xl bg-[#141C2B] border border-white/[0.06]">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              MMS Operational Scope:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.servicesProvided.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight statement */}
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{property.highlight}</span>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Back to Portfolio
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(property.name);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <span>Inquire for Similar Property</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
