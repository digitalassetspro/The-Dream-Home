import React from 'react';
import { Home, Building2, Palette, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      index: '01',
      title: 'Residential Construction',
      tagline: 'Custom Independent Houses, Duplexes & Luxury Villas',
      description:
        'From architectural 2D/3D floor planning and DTCP/CMDA approvals to foundation, RCC frame, brickwork, and handover. Built to your family’s generational specifications with zero compromise on structural safety.',
      highlights: [
        'Soil testing & customized foundation engineering',
        'Branded cement (UltraTech/Coromandel) & Fe550 steel',
        'Standard electrical & sanitary fittings included',
        'Strict 6-month completion guarantee',
      ],
      icon: Home,
    },
    {
      index: '02',
      title: 'Commercial Construction',
      tagline: 'Retail Showrooms, Commercial Complexes & Office Spaces',
      description:
        'Engineered for maximum commercial footfall, durability, and functional utility across Chennai and suburban industrial corridors. Turnkey civil execution with modern glass facades and durable flooring.',
      highlights: [
        'High load-bearing structural design',
        'Modern exterior facade & glass glazing',
        'Fire safety & electrical code compliance',
        'On-schedule commercial delivery to protect ROI',
      ],
      icon: Building2,
    },
    {
      index: '03',
      title: 'Interior Works',
      tagline: 'Modular Kitchens, Designer TV Units & Woodwork',
      description:
        'Transform your living spaces with factory-finish modular interiors. We specialize in custom marine ply kitchens, false ceiling acoustic treatments, accent TV units, and ergonomic storage wardrobes.',
      highlights: [
        'Free Basic TV Unit worth ₹15,000 for first 10 customers',
        'BWP/BWR grade waterproof marine plywood',
        'Designer false ceiling with indirect LED cove lights',
        'Premium soft-close hardware & acrylic/laminate finishes',
      ],
      icon: Palette,
    },
    {
      index: '04',
      title: 'Home Renovation & Remodeling',
      tagline: 'Floor Additions, Structural Modernization & Redesign',
      description:
        'Upgrade your older home to contemporary standards. Whether adding a first-floor duplex, modernizing bathrooms, replacing flooring, or re-engineering structural spaces, we ensure minimal disruption.',
      highlights: [
        'Structural stability audit prior to work',
        'Complete bathroom waterproofing & replumbing',
        'Modern vitrified/granite flooring replacements',
        'Exterior facade elevation modernization',
      ],
      icon: Hammer,
    },
    {
      index: '05',
      title: 'Complete Construction Solutions',
      tagline: 'Single-Window Turnkey Contract from Plan to Handover',
      description:
        'Eliminate the stress of dealing with multiple contractors, engineers, and municipal offices. We handle soil testing, plan approvals, procurement, site execution, quality inspection, and final key handover.',
      highlights: [
        'Single point of accountability & dedicated site engineer',
        'Transparent itemized material ledger',
        'Daily photo/video WhatsApp progress updates',
        'Post-handover maintenance support & structural warranty',
      ],
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            End-to-End Construction & Interior Solutions
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed text-balance">
            Every project by The Dream Homes follows rigorous engineering standards, transparent documentation, and on-time milestone delivery across Chennai, Tiruvallur, and Kanchipuram.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 2; // Residential & Interiors get prominent subtle tint
            return (
              <div
                key={service.index}
                className={`rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-stone-50/70 border-amber-200/80 shadow-sm'
                    : 'bg-white border-zinc-200'
                }`}
              >
                <div>
                  {/* Top editorial index & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-amber-600">
                      {service.index}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-zinc-950 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-700 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Inclusions checklist */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100 mb-6">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-zinc-900 bg-white hover:bg-amber-50 border border-zinc-200 hover:border-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Enquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
