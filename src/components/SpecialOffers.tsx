import React from 'react';
import { Gift, Zap, Sparkles, Home, Check, ArrowRight, Info } from 'lucide-react';

interface SpecialOffersProps {
  onSelectOffer: (offerTitle: string) => void;
  onOpenTerms: () => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onSelectOffer, onOpenTerms }) => {
  const offers = [
    {
      id: 'offer-tv',
      badge: 'FIRST 10 CUSTOMERS ONLY',
      badgeColor: 'bg-rose-500 text-white',
      title: 'Free Basic TV Unit',
      valueSubtitle: 'Worth ₹15,000/- Included at Zero Cost',
      priceDisplay: 'FREE',
      priceUnit: 'with construction project',
      description:
        'The first 10 customers to sign their home construction project receive a complimentary custom floating basic TV wall unit worth ₹15,000/-.',
      perks: [
        'Custom floating console with cable routing',
        'Contemporary wood finish accent panel',
        'Installed free during project handover',
        'Available exclusively for first 10 clients (only 3 slots left)',
      ],
      ctaText: 'Claim Free TV Unit Slot',
      isHot: true,
      highlightBorder: 'border-rose-400 ring-2 ring-rose-400/20',
      bgGradient: 'bg-gradient-to-b from-rose-50/50 via-white to-white',
    },
    {
      id: 'offer-3day-civil',
      badge: 'FLASH OFFER · ONLY 3 DAYS',
      badgeColor: 'bg-amber-500 text-zinc-950 font-bold',
      title: 'Complete Home Construction',
      valueSubtitle: 'Limited 3-Day Flash Window',
      priceDisplay: '₹2,350',
      priceUnit: 'per sq. ft.',
      description:
        'Special 3-day promotional rate for full structural and civil home construction across Chennai, Tiruvallur & Kanchipuram.',
      perks: [
        'Complete RCC foundation & superstructure',
        'UltraTech / Coromandel cement & Tata / Fe550 steel',
        'Standard vitrified tiling, plumbing & electricals',
        'Guaranteed completion within 6 months',
      ],
      ctaText: 'Lock ₹2,350/sq.ft Rate',
      isHot: true,
      highlightBorder: 'border-amber-400 ring-2 ring-amber-400/30',
      bgGradient: 'bg-gradient-to-b from-amber-50/60 via-white to-white',
    },
    {
      id: 'offer-3day-turnkey',
      badge: 'MOST POPULAR · ONLY 3 DAYS',
      badgeColor: 'bg-zinc-900 text-amber-400 font-bold',
      title: 'Complete Construction + Interiors',
      valueSubtitle: 'Flash Turnkey Combo Package',
      priceDisplay: '₹2,450',
      priceUnit: 'per sq. ft.',
      description:
        'Save ₹50/sq.ft on our most comprehensive turnkey package combining complete home construction with full interior woodwork.',
      perks: [
        'Complete end-to-end home construction',
        'Custom modular kitchen with marine ply & accessories',
        'Basic TV unit & master bedroom wardrobe woodwork',
        'Interior painting, designer false ceiling & LED lighting',
      ],
      ctaText: 'Lock ₹2,450 Combo Deal',
      isHot: true,
      highlightBorder: 'border-amber-500 shadow-xl ring-2 ring-amber-500/40',
      bgGradient: 'bg-gradient-to-b from-amber-100/40 via-white to-stone-50',
    },
    {
      id: 'offer-turnkey-standard',
      badge: 'ALL-INCLUSIVE TURNKEY',
      badgeColor: 'bg-zinc-100 text-zinc-800 border border-zinc-200',
      title: 'Home Construction + Interiors',
      valueSubtitle: 'Full Spectrum Turnkey Build',
      priceDisplay: '₹2,500',
      priceUnit: 'per sq. ft.',
      description:
        'Total peace of mind with complete construction plus personalized designer interiors tailored to your exact lifestyle preferences.',
      perks: [
        'Comprehensive architectural & structural execution',
        'Customized interior design & modular kitchen setup',
        'Premium sanitaryware (Jaguar/Hindware or equivalent)',
        'Stage-by-stage transparent photo/video updates',
      ],
      ctaText: 'Choose ₹2,500/sq.ft Plan',
      isHot: false,
      highlightBorder: 'border-zinc-200 hover:border-zinc-300',
      bgGradient: 'bg-white',
    },
  ];

  return (
    <section id="special-offers" className="py-16 lg:py-24 bg-zinc-50 border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Psychological Hook */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Limited-Time Promotional Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Transparent Pricing with High-Value Offers
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed text-balance">
            Lock in Chennai’s most transparent construction rates today. Choose from our 3-day flash discounts or claim the exclusive first-10 customer free TV unit bonus.
          </p>

          {/* Social Proof Counter */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-800 bg-amber-50 px-4 py-1.5 rounded-lg border border-amber-200">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>
              First-10 Customer TV Unit Offer: <strong>7 of 10 Slots Already Claimed</strong>. Only 3 remain!
            </span>
          </div>
        </div>

        {/* 4 Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md border ${offer.highlightBorder} ${offer.bgGradient} relative`}
            >
              {/* Hot badge or standard badge */}
              <div className="mb-4">
                <span className={`inline-block text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md ${offer.badgeColor}`}>
                  {offer.badge}
                </span>
              </div>

              {/* Title & Price */}
              <div className="space-y-3 mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-zinc-950 leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mt-0.5">
                    {offer.valueSubtitle}
                  </p>
                </div>

                <div className="pt-2 pb-1 border-y border-zinc-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight tabular-nums">
                      {offer.priceDisplay}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {offer.priceUnit}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed min-h-[36px]">
                  {offer.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 mb-6 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Package Inclusions:
                </div>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {offer.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectOffer(offer.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    offer.isHot
                      ? 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-sm'
                      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  <span>{offer.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Terms & Conditions Mention (As explicitly instructed) */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-zinc-900">
                Terms & Conditions & Eligibility Criteria
              </p>
              <p className="text-zinc-600 mt-0.5">
                All promotional offers (₹2,350/sq.ft, ₹2,450/sq.ft, and Free ₹15,000 Basic TV Unit) are subject to project eligibility criteria, minimum 1,000 sq.ft built-up area in Chennai, Tiruvallur, or Kanchipuram, and valid booking during the 3-day promotion. Free TV unit is strictly capped at the first 10 confirmed contracts.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTerms}
            className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 whitespace-nowrap text-xs shrink-0"
          >
            Read Detailed T&C
          </button>
        </div>

      </div>
    </section>
  );
};
