import React from 'react';
import { TheDreamHomesLogo } from './Logo';
import { Phone, MapPin, Instagram, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <TheDreamHomesLogo size="md" />
              <div>
                <span className="font-display font-extrabold tracking-tight text-white text-lg block leading-none">
                  THE DREAM HOMES
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-amber-400 uppercase">
                  Building Dreams
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              “We Don’t Just Build Homes. We Build Trust.” Serving Chennai, Tiruvallur, and Kanchipuram with transparent pricing, premium materials, and timely 6-month execution.
            </p>

            <div className="pt-2 text-xs text-zinc-500 space-y-1">
              <p>5+ Years of Experience · 20+ Completed Projects</p>
              <p>Turnkey Construction Starting from ₹2,349/sq.ft</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => scrollTo('special-offers')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Special 3-Day Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('calculator')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Cost Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Construction Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('highlights')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Company Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('quote-form')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Free Site Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Call & WhatsApp
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a
                  href="tel:9677148702"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>+91 96771 48702</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:9444906051"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>+91 94449 06051</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://instagram.com/the.dreamhomes_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-amber-500" />
                  <span>@the.dreamhomes_</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?q=The+Dream+Homes+Chennai+Construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-500" />
                  <span>The Dream Homes on Google</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Registered Office
            </span>
            <div className="text-xs text-zinc-400 leading-relaxed space-y-1">
              <p>Plot No. 247, Sri Balaji Nagar Extension – 1,</p>
              <p>Kannigapuram, Vaniyanchithram,</p>
              <p>Chennai – 600052, Tamil Nadu.</p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenTerms}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} The Dream Homes. All rights reserved. Premium Construction in Chennai, Tiruvallur & Kanchipuram.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerms}
              className="hover:text-zinc-300 transition-colors"
            >
              Eligibility & Offers Disclaimer
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
