import React, { useState, useEffect } from 'react';
import { Clock, Gift, ArrowRight } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  // 3-day countdown simulation that persists or settles smoothly
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 18,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    const el = document.getElementById('special-offers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-zinc-950 text-white border-b border-amber-500/20 py-2.5 px-4 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left message */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold text-amber-400 uppercase tracking-wider text-[11px] md:text-xs">
            3-Day Flash Offers Live
          </span>
          <span className="hidden sm:inline text-zinc-500">·</span>
          <span className="hidden sm:inline text-zinc-300">
            Home construction at <strong className="text-white">₹2,350/sq.ft</strong> & Turnkey Interiors at <strong className="text-white">₹2,450/sq.ft</strong>
          </span>
        </div>

        {/* Right countdown & CTA */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] text-zinc-400 hidden md:inline">Offer ends in:</span>
            <span className="font-mono font-bold text-amber-400 tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>

          <button
            onClick={scrollToOffer}
            className="flex items-center gap-1 text-[11px] md:text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 rounded hover:from-amber-300 hover:to-amber-400 transition-colors whitespace-nowrap shadow-sm"
          >
            <Gift className="w-3 h-3" />
            <span>Claim Free TV Unit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
