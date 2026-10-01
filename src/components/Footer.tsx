import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, VERIFIED_SERVICES } from '../data/mmsData';

interface FooterProps {
  onNavClick: (href: string) => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onRequestConsultation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A0F] text-slate-400 text-sm border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center text-white font-extrabold text-base tracking-wider shadow-md">
                MMS
              </div>
              <div>
                <span className="text-base font-bold text-white block leading-tight font-display">
                  Marissa Management
                </span>
                <span className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                  &amp; Services Inc.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Registered group of companies in Ontario and Alberta providing comprehensive building
              solutions, superintendent staffing, ANSI/IICRC certified disaster restoration, and
              mechanical property maintenance.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Serving 110+ Buildings &amp; 23,000+ Residents in Canada</span>
              </div>
              <div className="text-slate-400 pl-6">
                Proud provider for Canada's tallest residential tower (Aura, 78 storeys)
              </div>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Integrated Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {VERIFIED_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick('#services');
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#about');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  About MMS
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#properties');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Featured Properties
                </a>
              </li>
              <li>
                <a
                  href="#why-mms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#why-mms');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Why Partner With MMS
                </a>
              </li>
              <li>
                <a
                  href="#emergency"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#emergency');
                  }}
                  className="hover:text-amber-400 transition-colors text-amber-400 font-semibold"
                >
                  24/7/365 Emergency Dispatch
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#testimonials');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Client Testimonials
                </a>
              </li>
              <li>
                <button
                  onClick={onRequestConsultation}
                  className="text-amber-400 hover:underline cursor-pointer font-medium"
                >
                  Request a Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Operations & Hotlines */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-semibold text-white">Ontario Office &amp; 24/7 Hotline</div>
                <a
                  href="tel:19053022888"
                  className="text-amber-400 hover:underline block font-mono mt-0.5"
                >
                  (905) 302-2888
                </a>
                <a
                  href="mailto:admin@marissamsinc.com"
                  className="text-slate-400 hover:text-white block mt-0.5"
                >
                  admin@marissamsinc.com
                </a>
              </div>

              <div>
                <div className="font-semibold text-white">Alberta Operations</div>
                <a
                  href="tel:17802812530"
                  className="text-slate-300 hover:underline block font-mono mt-0.5"
                >
                  (780) 281-2530
                </a>
                <a
                  href="mailto:mms.ab@marissamsinc.com"
                  className="text-slate-400 hover:text-white block mt-0.5"
                >
                  mms.ab@marissamsinc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} Marissa Management &amp; Services Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Ontario &amp; Alberta, Canada</span>
            <span aria-hidden="true">·</span>
            <span>ANSI/IICRC Certified Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
