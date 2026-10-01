/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { CostCalculator } from './components/CostCalculator';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TermsModal } from './components/TermsModal';
import { FloatingCtaBar } from './components/FloatingCtaBar';

export default function App() {
  const [selectedOffer, setSelectedOffer] = useState<string>(
    '3-Day Flash: ₹2,450/sq.ft Complete Construction + Interiors'
  );
  const [selectedArea, setSelectedArea] = useState<number>(1500);
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);

  const scrollToQuote = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOffer = (offerTitle: string) => {
    // Map card title to dropdown offer option
    if (offerTitle.includes('TV Unit')) {
      setSelectedOffer('Free Basic TV Unit worth ₹15,000 (First 10 Customers)');
    } else if (offerTitle.includes('₹2,350') || offerTitle.includes('Complete Home Construction')) {
      setSelectedOffer('3-Day Flash: ₹2,350/sq.ft Complete Home Construction');
    } else if (offerTitle.includes('₹2,450') || offerTitle.includes('Interiors')) {
      setSelectedOffer('3-Day Flash: ₹2,450/sq.ft Complete Construction + Interiors');
    } else if (offerTitle.includes('₹2,500')) {
      setSelectedOffer('₹2,500/sq.ft Complete Home Construction + Home Interiors');
    } else {
      setSelectedOffer(offerTitle);
    }
    scrollToQuote();
  };

  const handleApplyEstimate = ({
    area,
    packageTitle,
  }: {
    area: number;
    packageTitle: string;
    estimatedTotal: number;
  }) => {
    setSelectedArea(area);
    if (packageTitle.includes('2350') || packageTitle.includes('Flash Construction')) {
      setSelectedOffer('3-Day Flash: ₹2,350/sq.ft Complete Home Construction');
    } else if (packageTitle.includes('2450') || packageTitle.includes('Interiors')) {
      setSelectedOffer('3-Day Flash: ₹2,450/sq.ft Complete Construction + Interiors');
    } else if (packageTitle.includes('2500')) {
      setSelectedOffer('₹2,500/sq.ft Complete Home Construction + Home Interiors');
    } else {
      setSelectedOffer('Standard Base Construction ₹2,349/sq.ft');
    }
    scrollToQuote();
  };

  const handleSelectService = (serviceName: string) => {
    if (serviceName.includes('Interior')) {
      setSelectedOffer('Free Basic TV Unit worth ₹15,000 (First 10 Customers)');
    }
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-zinc-900 selection:bg-amber-500 selection:text-white">
      {/* 3-Day Countdown Urgency Header Bar */}
      <UrgencyBanner />

      {/* Top Navigation Bar with exact Logo mark */}
      <Navbar onOpenQuote={scrollToQuote} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectOffer={handleSelectOffer}
          onOpenQuote={scrollToQuote}
        />

        {/* Special 3-Day Flash Offers & Free ₹15,000 TV Unit Section */}
        <SpecialOffers
          onSelectOffer={handleSelectOffer}
          onOpenTerms={() => setIsTermsOpen(true)}
        />

        {/* Interactive Cost Calculator */}
        <CostCalculator onApplyEstimate={handleApplyEstimate} />

        {/* 5 Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* 8 Company Highlights & Transparent Process */}
        <WhyChooseUs />

        {/* High-Converting Lead Capture Form with Terms & Conditions Notice */}
        <LeadCaptureForm
          initialOffer={selectedOffer}
          initialArea={selectedArea}
          onOpenTerms={() => setIsTermsOpen(true)}
        />

        {/* Contact Information, Address, Instagram & Google Maps */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% Mobile Sticky Cap) */}
      <FloatingCtaBar onOpenQuote={scrollToQuote} />
    </div>
  );
}
