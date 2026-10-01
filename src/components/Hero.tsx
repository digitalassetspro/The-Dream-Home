import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { TheDreamHomesLogo } from './Logo';

interface HeroProps {
  onSelectOffer: (offerName: string) => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectOffer, onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-stone-50 border-b border-zinc-200 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background architectural geometric grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d97706 1px, transparent 1px), radial-gradient(#d97706 1px, #FFFDF9 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Psychological Value Argument & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Regional Trust Marker & Credentials (Editorial inline text, no pill badges) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-zinc-600">
              <span className="text-amber-700 font-semibold">Chennai</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span className="text-amber-700 font-semibold">Tiruvallur</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span className="text-amber-700 font-semibold">Kanchipuram</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span className="text-zinc-700">5+ Years Experience</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span className="text-zinc-700">20+ Completed Projects</span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-zinc-950 tracking-tight leading-[1.12] text-balance">
                “We Don’t Just Build Homes.{' '}
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  We Build Trust.”
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                The Dream Homes is a trusted construction company serving homeowners across Chennai. We deliver end-to-end residential and commercial construction solutions with premium quality materials, 100% transparent pricing, and guaranteed handover within 6 months.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-zinc-800 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Premium Quality Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Transparent Work Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Strict Timely Delivery (6 Mo.)</span>
              </div>
            </div>

            {/* Urgent Flash Deals Alert Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-50 to-orange-50/40 border border-amber-300/80 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded">
                      Special First-10 Offer
                    </span>
                    <span className="text-xs text-amber-900 font-semibold">Limited Availability</span>
                  </div>
                  <p className="text-sm font-bold text-zinc-900">
                    Get a <span className="text-amber-700 underline decoration-amber-400 decoration-2">FREE Basic TV Unit worth ₹15,000/-</span> with your project.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Plus exclusive 3-day construction deals starting at just <strong className="text-zinc-950 font-bold">₹2,350/sq.ft</strong>!
                  </p>
                </div>

                <button
                  onClick={() => scrollTo('special-offers')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm whitespace-nowrap self-start sm:self-auto transition-transform active:scale-95"
                >
                  <span>View All 4 Deals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Book Free Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('calculator')}
                className="px-5 py-3.5 text-sm sm:text-base font-semibold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-zinc-400 rounded-xl transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <span>Calculate Cost (₹/sq.ft)</span>
              </button>

              <a
                href="https://wa.me/919677148702?text=Hello%20The%20Dream%20Homes,%20I%20am%20interested%20in%20home%20construction%20and%20your%203-day%20flash%20offers."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
                title="Chat with our engineering team on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Visual Representation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-neutral-900 text-white p-6 sm:p-8 shadow-2xl border border-zinc-800">
              
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header inside showcase card */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <TheDreamHomesLogo size="sm" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Standard Quality Benchmark
                    </div>
                    <div className="text-sm font-semibold text-zinc-200">
                      Turnkey Home Construction
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 block">Starting from</span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-amber-400 tabular-nums">
                    ₹2,349<span className="text-xs text-zinc-300 font-normal"> /sq.ft</span>
                  </span>
                </div>
              </div>

              {/* Architectural Elevation Diagram & Render Card */}
              <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 p-4 relative mb-6">
                <svg viewBox="0 0 400 220" className="w-full h-auto text-amber-400/80" fill="none" stroke="currentColor">
                  {/* Modern Villa Elevation Sketch */}
                  {/* Ground Line */}
                  <line x1="20" y1="200" x2="380" y2="200" strokeWidth="2" stroke="#71717a" />
                  
                  {/* Main Ground Floor Structure */}
                  <rect x="50" y="110" width="180" height="90" strokeWidth="1.5" stroke="#f59e0b" fill="#18181b" />
                  {/* Main Door */}
                  <rect x="75" y="140" width="35" height="60" strokeWidth="1.5" stroke="#f59e0b" fill="#27272a" />
                  {/* Large Picture Window with Panes */}
                  <rect x="130" y="135" width="80" height="45" strokeWidth="1.5" stroke="#38bdf8" fill="#0f172a" opacity="0.8" />
                  <line x1="170" y1="135" x2="170" y2="180" strokeWidth="1" stroke="#38bdf8" />
                  <line x1="130" y1="158" x2="210" y2="158" strokeWidth="1" stroke="#38bdf8" />

                  {/* Cantilevered First Floor Master Suite */}
                  <rect x="40" y="40" width="200" height="70" strokeWidth="1.5" stroke="#f59e0b" fill="#18181b" />
                  {/* Balcony Glass Railing */}
                  <rect x="35" y="85" width="85" height="25" strokeWidth="1" stroke="#38bdf8" strokeDasharray="2 2" fill="#0284c7" fillOpacity="0.1" />
                  {/* First floor floor-to-ceiling glass slider */}
                  <rect x="135" y="55" width="90" height="50" strokeWidth="1.5" stroke="#38bdf8" fill="#0f172a" opacity="0.8" />

                  {/* Right Wing (Car Porch & Terrace Garden) */}
                  <rect x="230" y="125" width="125" height="75" strokeWidth="1.5" stroke="#f59e0b" fill="#18181b" />
                  <rect x="245" y="135" width="95" height="65" strokeWidth="1" stroke="#71717a" strokeDasharray="3 3" />
                  <circle cx="270" cy="180" r="10" stroke="#71717a" />
                  <circle cx="315" cy="180" r="10" stroke="#71717a" />
                  {/* Terrace pergolas */}
                  <line x1="230" y1="125" x2="355" y2="125" strokeWidth="2" stroke="#f59e0b" />
                  <line x1="250" y1="110" x2="250" y2="125" strokeWidth="1.5" stroke="#f59e0b" />
                  <line x1="280" y1="110" x2="280" y2="125" strokeWidth="1.5" stroke="#f59e0b" />
                  <line x1="310" y1="110" x2="310" y2="125" strokeWidth="1.5" stroke="#f59e0b" />
                  <line x1="340" y1="110" x2="340" y2="125" strokeWidth="1.5" stroke="#f59e0b" />
                  <line x1="240" y1="110" x2="350" y2="110" strokeWidth="1.5" stroke="#f59e0b" />

                  {/* Brand signature roofline motif overlay on top */}
                  <polygon points="120,40 180,18 240,40" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.2" />

                  {/* Blueprint dimension callout lines */}
                  <line x1="30" y1="40" x2="30" y2="200" strokeWidth="0.8" stroke="#a1a1aa" strokeDasharray="2 2" />
                  <text x="18" y="125" fill="#a1a1aa" fontSize="9" transform="rotate(-90 18 125)" fontFamily="monospace">6-MONTH HANDOVER</text>
                  
                  <line x1="40" y1="215" x2="355" y2="215" strokeWidth="0.8" stroke="#a1a1aa" strokeDasharray="2 2" />
                  <text x="150" y="218" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">CHENNAI · TIRUVALLUR · KANCHIPURAM</text>
                </svg>

                <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>SPEC: FE550 TMT + ULTRATECH</span>
                  <span className="text-amber-400 font-semibold">100% DTCP / CMDA COMPLIANT</span>
                </div>
              </div>

              {/* 4 Quick Stat Tiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-zinc-800/60 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Experience</span>
                  </div>
                  <div className="text-lg font-bold text-white tabular-nums">5+ Years</div>
                  <div className="text-[11px] text-zinc-400">Industry Expertise</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-800/60 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Projects Done</span>
                  </div>
                  <div className="text-lg font-bold text-white tabular-nums">20+ Completed</div>
                  <div className="text-[11px] text-zinc-400">100% Happy Clients</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-800/60 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Timeline</span>
                  </div>
                  <div className="text-lg font-bold text-amber-400 tabular-nums">Within 6 Mo.</div>
                  <div className="text-[11px] text-zinc-400">Guaranteed On-Time</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-800/60 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Daily Updates</span>
                  </div>
                  <div className="text-lg font-bold text-white">Live Tracking</div>
                  <div className="text-[11px] text-zinc-400">Photos & Videos via App</div>
                </div>
              </div>

              {/* Direct call action inside hero card */}
              <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Direct Engineering Line:</span>
                <a href="tel:9677148702" className="text-amber-400 hover:text-amber-300 font-bold tracking-wide">
                  +91 9677148702 / 9444906051
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
