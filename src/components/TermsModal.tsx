import React from 'react';
import { X, ShieldAlert, Check } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-300 shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Close Terms Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 id="terms-title" className="text-xl font-display font-bold text-zinc-950">
              Terms & Conditions & Eligibility Criteria
            </h3>
            <p className="text-xs text-zinc-500">
              The Dream Homes Promotional Pricing & Free Basic TV Unit Offer
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-zinc-100 pt-4">
          <p>
            The promotional offers displayed on this landing page are provided by <strong>The Dream Homes</strong> (Plot No. 247, Sri Balaji Nagar Extension – 1, Kannigapuram, Vaniyanchithram, Chennai – 600052) subject to the following criteria:
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-zinc-200 space-y-1.5">
              <h4 className="font-bold text-zinc-950 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-600" />
                1. Free Basic TV Unit Offer (Worth ₹15,000/-)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 pl-2">
                <li>Strictly limited to the <strong>first 10 confirmed customers</strong> who execute a formal construction agreement.</li>
                <li>Applicable on residential home construction projects having a minimum built-up area of 1,000 sq.ft.</li>
                <li>The TV unit includes standard floating console carpentry and decorative laminates. Electronic appliances (TV, soundbars) are not included.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-zinc-200 space-y-1.5">
              <h4 className="font-bold text-zinc-950 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-600" />
                2. 3-Day Flash Rates (₹2,350/sq.ft & ₹2,450/sq.ft)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 pl-2">
                <li>The ₹2,350/sq.ft rate covers complete standard RCC civil and structural home construction.</li>
                <li>The ₹2,450/sq.ft flash deal includes complete home construction plus core modular interiors (modular kitchen, basic TV unit, wardrobe basic woodwork).</li>
                <li>Rates apply to standard single or duplex residential plots with standard foundation soil conditions (black cotton/pile foundation may incur differential structural engineering costing).</li>
                <li>The 3-day offer duration starts upon initial enquiry registration and must be formalized within the booking window.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-zinc-200 space-y-1.5">
              <h4 className="font-bold text-zinc-950 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-600" />
                3. Geographic Jurisdiction & 6-Month Timeline
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 pl-2">
                <li>Active operational boundaries: Chennai District, Tiruvallur District, and Kanchipuram District.</li>
                <li>The 6-month completion guarantee commences from the date of statutory municipal plan sanction and clear unencumbered site handover.</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-zinc-500 pt-2">
            For specific structural customizations or plot feasibility clarifications, please contact our engineering directors directly at +91 9677148702 / +91 9444906051.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
