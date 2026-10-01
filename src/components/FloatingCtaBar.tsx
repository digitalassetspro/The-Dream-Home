import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface FloatingCtaBarProps {
  onOpenQuote: () => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 py-2 px-3 sm:px-6 md:hidden shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:9677148702"
          className="flex-1 py-2 px-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:text-amber-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-500" />
          <span>Call 9677148702</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919677148702?text=Hello%20The%20Dream%20Homes,%20I%20am%20interested%20in%20home%20construction%20and%20your%203-day%20flash%20offers."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Claim Offer CTA */}
        <button
          onClick={onOpenQuote}
          className="flex-1 py-2 px-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 text-xs font-bold flex items-center justify-center gap-1 shadow-sm whitespace-nowrap active:scale-95"
        >
          <span>Claim Offer</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
