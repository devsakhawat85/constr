/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedSplitSection } from './components/FeaturedSplitSection';
import { WhyMMS } from './components/WhyMMS';
import { PropertyShowcase } from './components/PropertyShowcase';
import { EmergencySection } from './components/EmergencySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PropertyModal } from './components/PropertyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { MMSService, MMSProperty } from './types';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedProperty, setSelectedProperty] = useState<MMSProperty | null>(null);
  const [selectedService, setSelectedService] = useState<MMSService | null>(null);

  const openConsultation = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F15] text-slate-100 flex flex-col font-sans pb-14 sm:pb-0">
      {/* Global Sticky Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onRequestConsultation={() => openConsultation()}
      />

      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onRequestConsultation={() => openConsultation()}
          onExploreServices={() => handleScrollTo('#services')}
        />

        {/* 2. Trust & Statistics Strip */}
        <StatsStrip />

        {/* 3. Services Section with Filter Controls */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuoteForService={(serviceTitle) => openConsultation(serviceTitle)}
        />

        {/* 4. Featured Immersive Split Section */}
        <FeaturedSplitSection
          onExploreServices={() => handleScrollTo('#services')}
          onRequestConsultation={() => openConsultation()}
        />

        {/* 5. Why MMS Editorial Pillars */}
        <WhyMMS />

        {/* 6. Clients & Properties Portfolio Showcase */}
        <PropertyShowcase
          onSelectProperty={(property) => setSelectedProperty(property)}
        />

        {/* 7. 24/7 / Emergency Services Section */}
        <EmergencySection
          onRequestEmergencyQuote={() => openConsultation('Emergency Water Extraction & Disaster Restoration')}
        />

        {/* 8. Editorial About MMS Section */}
        <AboutSection
          onRequestConsultation={() => openConsultation()}
        />

        {/* 9. Verified Client Testimonials */}
        <TestimonialsSection />

        {/* 10. Operational Process Section */}
        <ProcessSection />

        {/* 11. Final High-Conversion CTA */}
        <FinalCTA
          onRequestConsultation={() => openConsultation()}
          onContactClick={() => handleScrollTo('#contact')}
        />

        {/* 12. Contact Section with Validated Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onNavClick={handleScrollTo}
        onRequestConsultation={() => openConsultation()}
      />

      {/* Floating Mobile Bar (<15% mobile viewport height) */}
      <FloatingMobileBar
        onRequestConsultation={() => openConsultation()}
      />

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedService={preselectedService}
      />

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onRequestQuote={(propertyName) => openConsultation(`Inquiry inspired by ${propertyName}`)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => openConsultation(serviceTitle)}
      />
    </div>
  );
}
