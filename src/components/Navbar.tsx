import React, { useState } from 'react';
import { TheDreamHomesLogo } from './Logo';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Mark & Title */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              {/* Logo roof mark without text, as instructed by user */}
              <TheDreamHomesLogo size="md" />
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-zinc-950 text-lg sm:text-xl leading-none">
                  THE DREAM HOMES
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-amber-600 uppercase mt-1">
                  Building Dreams
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: 4-6 Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <button
              onClick={() => scrollTo('special-offers')}
              className="hover:text-amber-600 transition-colors text-zinc-800 font-semibold flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Offers
            </button>
            <button
              onClick={() => scrollTo('calculator')}
              className="hover:text-amber-600 transition-colors"
            >
              Cost Estimator
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-amber-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('highlights')}
              className="hover:text-amber-600 transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9677148702"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-amber-600 transition-colors px-3 py-2 rounded-lg border border-zinc-200 hover:border-amber-400 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>9677148702</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-700">
            <button
              onClick={() => scrollTo('special-offers')}
              className="text-left py-2 px-3 rounded-md hover:bg-amber-50 hover:text-amber-700 font-semibold text-amber-700 flex items-center justify-between"
            >
              <span>🎁 Special Flash Offers</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-mono">3 Days Left</span>
            </button>
            <button
              onClick={() => scrollTo('calculator')}
              className="text-left py-2 px-3 rounded-md hover:bg-zinc-50"
            >
              Cost Estimator
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 px-3 rounded-md hover:bg-zinc-50"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollTo('highlights')}
              className="text-left py-2 px-3 rounded-md hover:bg-zinc-50"
            >
              Why Choose The Dream Homes
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-3 rounded-md hover:bg-zinc-50"
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href="tel:9677148702"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-zinc-900 bg-zinc-100 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call 9677148702 / 9444906051</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
