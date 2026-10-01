import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, MessageCircle, AlertCircle, Phone } from 'lucide-react';

interface LeadCaptureFormProps {
  initialOffer?: string;
  initialArea?: number;
  onOpenTerms: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialOffer = '3-Day Flash: ₹2,450/sq.ft Complete Construction + Interiors',
  initialArea = 1500,
  onOpenTerms,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Chennai');
  const [area, setArea] = useState<number>(initialArea);
  const [selectedOffer, setSelectedOffer] = useState(initialOffer);
  const [requirements, setRequirements] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize when initialOffer changes from external triggers
  React.useEffect(() => {
    if (initialOffer) {
      setSelectedOffer(initialOffer);
    }
  }, [initialOffer]);

  React.useEffect(() => {
    if (initialArea) {
      setArea(initialArea);
    }
  }, [initialArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Phone validation (10 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!agreedToTerms) {
      setErrorMessage('Please accept the Terms & Conditions to proceed with the promotional offer.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello The Dream Homes!\nName: ${name || 'Prospective Client'}\nPhone: ${phone}\nLocation: ${location}\nApprox Built-up Area: ${area} sq.ft\nSelected Offer: ${selectedOffer}\nRequirements: ${requirements || 'Need free site inspection'}\n(Accepted Terms & Conditions)`
    );
    window.open(`https://wa.me/919677148702?text=${text}`, '_blank');
  };

  return (
    <section id="quote-form" className="py-16 lg:py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="bg-white rounded-3xl border border-zinc-300 shadow-xl overflow-hidden">
          
          {/* Top Banner */}
          <div className="bg-zinc-950 text-white p-6 sm:p-8 border-b border-amber-500/20">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Guaranteed Response Within 2 Hours
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Lock Your 3-Day Flash Rate & Claim Free TV Unit
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fill this simple form to secure promotional pricing for your project across Chennai, Tiruvallur, or Kanchipuram. We will schedule a free on-site feasibility inspection.
              </p>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-zinc-950">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-900">{name}</strong>. Our senior civil engineering coordinator will call you at <strong className="text-zinc-900">{phone}</strong> shortly to confirm your plot details and lock your promotional rate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 max-w-md mx-auto text-xs text-amber-900 space-y-1">
                  <p className="font-bold">Locked Offer Preference:</p>
                  <p className="text-zinc-800">{selectedOffer}</p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    *First-10 customer free TV unit slot reserved for 24 hours pending site inspection.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect Instantly on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-sm transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900 block">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900 block">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-xs font-semibold text-zinc-500 bg-zinc-100 border border-r-0 border-zinc-300 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9677148702"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-r-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* District / Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900 block">
                      Project Location / District <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    >
                      <option value="Chennai">Chennai (North / Central / South)</option>
                      <option value="Tiruvallur">Tiruvallur District</option>
                      <option value="Kanchipuram">Kanchipuram District</option>
                      <option value="Other Tamil Nadu Location">Other Surrounding Areas</option>
                    </select>
                  </div>

                  {/* Built-up area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-900 block">
                      Approximate Built-up Area (Sq. Ft) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      min={500}
                      max={10000}
                      step={50}
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Offer Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-900 block">
                    Select Preferred Offer / Package
                  </label>
                  <select
                    value={selectedOffer}
                    onChange={(e) => setSelectedOffer(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-amber-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors font-semibold text-zinc-900"
                  >
                    <option value="3-Day Flash: ₹2,450/sq.ft Complete Construction + Interiors">
                      ⚡ 3-Day Flash: ₹2,450/sq.ft Complete Home Construction + Interiors (Recommended)
                    </option>
                    <option value="3-Day Flash: ₹2,350/sq.ft Complete Home Construction">
                      ⚡ 3-Day Flash: ₹2,350/sq.ft Complete Home Construction (Civil & Structural)
                    </option>
                    <option value="Free Basic TV Unit worth ₹15,000 (First 10 Customers)">
                      🎁 Free Basic TV Unit worth ₹15,000/- (First 10 Customers Bonus)
                    </option>
                    <option value="₹2,500/sq.ft Complete Home Construction + Home Interiors">
                      🏠 ₹2,500/sq.ft Complete Home Construction + Luxury Interiors
                    </option>
                    <option value="Standard Base Construction ₹2,349/sq.ft">
                      ⭐ Standard Base Construction ₹2,349/sq.ft
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-900 block">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Looking to build a 2-storey duplex in Avadi / Tambaram / Kanchipuram within 6 months..."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  />
                </div>

                {/* Explicit Terms & Conditions Mention (As instructed: Form la Terms and conditions nu mention panniduvom) */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="termsAndConditionsCheck"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="termsAndConditionsCheck" className="text-xs text-zinc-800 leading-snug cursor-pointer">
                      <span className="font-bold text-zinc-950">
                        Terms & Conditions & Eligibility Criteria Agreement:
                      </span>{' '}
                      I understand that all promotional rates (₹2,350/sq.ft, ₹2,450/sq.ft, and Free ₹15,000 Basic TV Unit) have eligibility criteria, including a minimum built-up area of 1,000 sq.ft within Chennai, Tiruvallur, or Kanchipuram districts, and require project confirmation during the active 3-day offer period. The complimentary TV unit is strictly reserved for the first 10 confirmed contracts.{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-amber-800 hover:text-amber-950 font-bold underline inline ml-1"
                      >
                        [View Detailed Terms]
                      </button>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-display font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving Your Offer...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Lock Promotional Offer & Request Site Visit</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      Zero spam. We never share your contact.
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      Call directly: 9677148702
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
