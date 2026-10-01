import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/mmsData';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onRequestConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onRequestConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Properties', href: '#properties', id: 'properties' },
    { label: 'Why MMS', href: '#why-mms', id: 'why-mms' },
    { label: 'Emergency 24/7', href: '#emergency', id: 'emergency' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveView('home');
    setMobileMenuOpen(false);

    // If element exists on page, smooth scroll to it
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F15]/95 backdrop-blur-md py-3.5 border-b border-white/[0.08] shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0F15]/90 via-[#0B0F15]/60 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element wordmark brand identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveView('home');
            }}
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Marissa Management & Services Inc. Home"
          >
            {/* Elegant architectural monogram */}
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center text-white font-extrabold text-lg tracking-wider shadow-lg shadow-amber-950/40 group-hover:scale-[1.02] transition-transform duration-200">
              MMS
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight font-display">
                Marissa Management
              </span>
              <span className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                &amp; Services Inc.
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className="hover:text-amber-400 transition-colors duration-150 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Emergency Hotline & Consultation) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors py-2 px-3 rounded border border-amber-500/20 hover:border-amber-500/40 bg-amber-500/5"
              title="24/7 Rapid Emergency Dispatch Line"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="font-mono tabular-nums">{COMPANY_INFO.emergencyHotline}</span>
            </a>

            <button
              onClick={onRequestConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded transition-all duration-150 shadow-md shadow-amber-500/10 cursor-pointer whitespace-nowrap"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
              className="p-2 text-amber-400 bg-amber-500/10 rounded border border-amber-500/30"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded bg-white/[0.04] border border-white/[0.08]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D121A] border-b border-white/[0.1] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="space-y-1 pb-4 border-b border-white/[0.06]">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className="block py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-1">
            <a
              href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^\d+]/g, '')}`}
              className="flex items-center justify-between p-3 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold"
            >
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>24/7 Emergency Line</span>
              </div>
              <span className="font-mono tabular-nums">{COMPANY_INFO.emergencyHotline}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded text-sm transition-colors"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
