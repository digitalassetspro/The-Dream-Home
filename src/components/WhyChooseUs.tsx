import React from 'react';
import { Award, Clock, IndianRupee, MapPin, ShieldCheck, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      metric: '5+ Years',
      label: 'Proven Experience',
      description:
        'Over half a decade of hands-on civil engineering mastery in residential villas and commercial complexes.',
    },
    {
      icon: ShieldCheck,
      metric: '20+ Projects',
      label: 'Successfully Handed Over',
      description:
        'Completed projects standing tall across Chennai with 100% customer satisfaction and zero legal encumbrances.',
    },
    {
      icon: IndianRupee,
      metric: '₹2,349/-',
      label: 'Per Sq. Ft. Starting Rate',
      description:
        'Unbeatable value benchmark. Every single rupee is documented with zero hidden contractor markups.',
    },
    {
      icon: Clock,
      metric: 'Within 6 Months',
      label: 'Guaranteed Completion',
      description:
        'Strict milestone schedules with financial commitment on handover timelines so you move in on schedule.',
    },
    {
      icon: MapPin,
      metric: '3 Districts',
      label: 'Chennai, Tiruvallur & Kanchipuram',
      description:
        'Full operational mobilization across north, central, south Chennai and surrounding suburban expansion corridors.',
    },
    {
      icon: Sparkles,
      metric: '100% Branded',
      label: 'Premium Quality Materials',
      description:
        'UltraTech / Coromandel 53-grade cement, Tata / JSW Fe550 TMT steel, and branded fixtures throughout.',
    },
    {
      icon: Eye,
      metric: 'Daily Transparency',
      label: 'WhatsApp Live Tracking',
      description:
        'Stage-by-stage photo and video logs sent daily to your phone, keeping you in complete control anywhere.',
    },
    {
      icon: CheckCircle2,
      metric: 'Turnkey Handover',
      label: 'Hassle-Free Possession',
      description:
        'From deep cleaning to electrical testing and key handover, everything is complete down to the finest detail.',
    },
  ];

  return (
    <section id="highlights" className="py-16 lg:py-24 bg-stone-50 border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Our Core Highlights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            “We Don’t Just Build Homes. We Build Trust.”
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed text-balance">
            Building a house is a milestone commitment. Here is why homeowners across Chennai, Tiruvallur, and Kanchipuram choose The Dream Homes over traditional contractors.
          </p>
        </div>

        {/* 8 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-zinc-200/90 shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  
                  <div className="font-display font-extrabold text-2xl text-zinc-950 tracking-tight mb-1 tabular-nums">
                    {item.metric}
                  </div>
                  
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                    {item.label}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Execution Workflow / 4-Step Process */}
        <div className="mt-16 bg-white rounded-2xl border border-zinc-200 p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950">
              Our 4-Stage Transparent Work Flow
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Clear milestones from initial soil inspection to key handover within 6 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Consultation & 3D Plan',
                desc: 'Free plot inspection, soil test review, 2D/3D architectural elevations and itemized budget lock.',
              },
              {
                step: '02',
                title: 'Approval & Foundation',
                desc: 'DTCP/CMDA sanction guidance, excavation, robust RCC column footing, and anti-termite treatment.',
              },
              {
                step: '03',
                title: 'Superstructure & Brickwork',
                desc: 'UltraTech cement casting, Fe550 steel reinforcement, precision masonry, and roof slab casting.',
              },
              {
                step: '04',
                title: 'Interiors & Handover',
                desc: 'Plastering, premium tiling, wiring, plumbing, free TV unit installation, and final key handover.',
              },
            ].map((st, i) => (
              <div key={i} className="relative space-y-2">
                <div className="text-2xl font-display font-extrabold text-amber-500 font-mono">
                  {st.step}
                </div>
                <h4 className="text-sm font-bold text-zinc-950">
                  {st.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
