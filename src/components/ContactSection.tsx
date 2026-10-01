import React from 'react';
import { Phone, MapPin, Instagram, Globe, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { TheDreamHomesLogo } from './Logo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Visit Our Office or Schedule a Free Site Meeting
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed text-balance">
            Have a plot in Chennai, Tiruvallur, or Kanchipuram? Contact our engineering team for an on-site evaluation, structural consultation, or customized floor plan discussion.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Details Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Direct Phone Lines */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-zinc-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Phone & WhatsApp Inquiries
                  </span>
                  <div className="flex flex-wrap gap-4 pt-1">
                    <a
                      href="tel:9677148702"
                      className="text-lg sm:text-xl font-bold font-display text-zinc-950 hover:text-amber-600 transition-colors flex items-center gap-2"
                    >
                      <span>+91 96771 48702</span>
                    </a>
                    <span className="text-zinc-300 text-xl font-light">|</span>
                    <a
                      href="tel:9444906051"
                      className="text-lg sm:text-xl font-bold font-display text-zinc-950 hover:text-amber-600 transition-colors flex items-center gap-2"
                    >
                      <span>+91 94449 06051</span>
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Available Monday to Saturday (9:00 AM – 8:00 PM). Sunday appointments available upon request.
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href="https://wa.me/919677148702?text=Hello%20The%20Dream%20Homes,%20I%20would%20like%20to%20discuss%20a%20construction%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registered Office Address */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-zinc-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Registered Office Address
                  </span>
                  <div className="text-sm sm:text-base font-semibold text-zinc-900 leading-relaxed">
                    Plot No. 247, Sri Balaji Nagar Extension – 1,<br />
                    Kannigapuram, Vaniyanchithram,<br />
                    Chennai – 600052, Tamil Nadu, India.
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Plot+No+247+Sri+Balaji+Nagar+Extension+1+Kannigapuram+Vaniyanchithram+Chennai+600052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 underline underline-offset-4"
                    >
                      <span>View The Dream Homes on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Digital Handles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/the.dreamhomes_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-stone-50 border border-zinc-200 hover:border-amber-300 transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Instagram Handle
                    </span>
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                      @the.dreamhomes_
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700" />
              </a>

              {/* Google Business Profile */}
              <a
                href="https://www.google.com/search?q=The+Dream+Homes+Chennai+Construction"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-stone-50 border border-zinc-200 hover:border-amber-300 transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Google Reviews
                    </span>
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                      The Dream Homes on Google
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700" />
              </a>
            </div>

          </div>

          {/* Right: Operational Regions & Map Card (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-7 border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <TheDreamHomesLogo size="sm" />
                  <span className="text-sm font-bold text-zinc-200 font-display">
                    Service Jurisdiction
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono">
                  ACTIVE ON SITE
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-white">
                  Active Construction Zones
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Our specialized engineering crews and raw material supply logistics operate actively across these major sectors:
                </p>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <strong className="text-white block font-medium">Chennai District</strong>
                      <span className="text-[11px] text-zinc-400">North, Central, South & OMR Corridor</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">Mobilized</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <strong className="text-white block font-medium">Tiruvallur District</strong>
                      <span className="text-[11px] text-zinc-400">Avadi, Poonamallee, Thiruninravur & Hubs</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">Mobilized</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <strong className="text-white block font-medium">Kanchipuram District</strong>
                      <span className="text-[11px] text-zinc-400">Sriperumbudur, Walajabad, Kanchi Town</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">Mobilized</span>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-zinc-300 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Consultation Timings</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Site visits scheduled 7 days a week with 24-hour advance intimation.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+No+247+Sri+Balaji+Nagar+Extension+1+Kannigapuram+Vaniyanchithram+Chennai+600052"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
