import React, { useState, useId } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface CostCalculatorProps {
  onApplyEstimate: (data: { area: number; packageTitle: string; estimatedTotal: number }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [area, setArea] = useState<number>(1500);
  const [packageType, setPackageType] = useState<'flash-civil' | 'flash-interiors' | 'standard' | 'luxury'>('flash-interiors');
  const [floors, setFloors] = useState<string>('G+1 (Duplex)');
  const [includeFreeTvUnit, setIncludeFreeTvUnit] = useState<boolean>(true);
  const areaInputId = useId();

  const packages = {
    'flash-civil': {
      name: '3-Day Flash Construction',
      rate: 2350,
      description: 'Structural & civil construction (save ₹99/sq.ft compared to market)',
    },
    'flash-interiors': {
      name: '3-Day Flash Construction + Interiors',
      rate: 2450,
      description: 'Complete home construction + modular kitchen, TV unit & woodwork (save ₹50/sq.ft)',
    },
    'standard': {
      name: 'Standard Home Construction',
      rate: 2349,
      description: 'Guaranteed base turnkey construction with 6-month delivery',
    },
    'luxury': {
      name: 'Turnkey Construction + Full Interiors',
      rate: 2500,
      description: 'All-inclusive home construction + customized designer interiors',
    },
  };

  const selectedPkg = packages[packageType];
  const baseCost = area * selectedPkg.rate;
  const tvUnitValue = 15000;
  // Estimated market price benchmark around 2600/sq.ft
  const marketEstimatedCost = area * 2600;
  const estimatedSavings = Math.max(0, marketEstimatedCost - baseCost) + (includeFreeTvUnit ? tvUnitValue : 0);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleBookWithEstimate = () => {
    onApplyEstimate({
      area,
      packageTitle: selectedPkg.name,
      estimatedTotal: baseCost,
    });
  };

  const handleWhatsAppEstimate = () => {
    const message = encodeURIComponent(
      `Hello The Dream Homes team! I calculated an estimate for my house:\n- Built-up Area: ${area} sq.ft (${floors})\n- Chosen Package: ${selectedPkg.name} (₹${selectedPkg.rate}/sq.ft)\n- Estimated Cost: ${formatINR(baseCost)}\n- Include First-10 Customer Free ₹15,000 TV Unit: ${includeFreeTvUnit ? 'Yes' : 'No'}\nPlease arrange a free site consultation.`
    );
    window.open(`https://wa.me/919677148702?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Cost Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tracking-tight">
            Calculate Your Home Construction Cost Instantly
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed text-balance">
            Accurate, zero-hidden-fee estimates for Chennai, Tiruvallur, and Kanchipuram. Adjust your plot area and package to see estimated costs and savings.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-4xl mx-auto bg-stone-50/80 rounded-2xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Built-up Area Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={areaInputId} className="text-sm font-bold text-zinc-900">
                    Built-up Area (Sq. Ft)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id={areaInputId}
                      type="number"
                      min={600}
                      max={6000}
                      step={50}
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value) || 600)}
                      className="w-24 text-right px-2.5 py-1 text-sm font-bold font-mono text-zinc-950 bg-white border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <span className="text-xs text-zinc-500 font-medium">sq.ft</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={800}
                  max={4000}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                  <span>800 sq.ft (Compact)</span>
                  <span>1,500 sq.ft (Standard)</span>
                  <span>4,000+ sq.ft (Luxury Villa)</span>
                </div>
              </div>

              {/* Floors Selector */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 block">
                  Floors / Building Height
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Ground Floor', 'G+1 (Duplex)', 'G+2 (Triplex)'].map((fl) => (
                    <button
                      key={fl}
                      type="button"
                      onClick={() => setFloors(fl)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        floors === fl
                          ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      {fl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Selector */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 block">
                  Select Construction Package
                </label>
                <div className="space-y-2">
                  {(Object.keys(packages) as Array<keyof typeof packages>).map((key) => {
                    const pkg = packages[key];
                    const isSelected = packageType === key;
                    const isFlash = key.includes('flash');
                    return (
                      <div
                        key={key}
                        onClick={() => setPackageType(key)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-amber-50/80 border-amber-500 shadow-sm'
                            : 'bg-white border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-amber-600 bg-amber-500' : 'border-zinc-300 bg-white'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-zinc-900">
                                {pkg.name}
                              </span>
                              {isFlash && (
                                <span className="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-1.5 py-0.2 rounded uppercase">
                                  3-Day Deal
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-tight">
                              {pkg.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-sm sm:text-base font-extrabold font-display text-zinc-950 tabular-nums">
                            ₹{pkg.rate}
                          </span>
                          <span className="text-[10px] text-zinc-500 block">/sq.ft</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Free TV Unit Add-on Checkbox */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="tvUnitCheck"
                  checked={includeFreeTvUnit}
                  onChange={(e) => setIncludeFreeTvUnit(e.target.checked)}
                  className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="tvUnitCheck" className="text-xs text-zinc-800 cursor-pointer">
                  <span className="font-bold text-amber-900">Claim Free Basic TV Unit worth ₹15,000/-</span>
                  <span className="block text-[11px] text-zinc-600 mt-0.5">
                    Valid for the first 10 customers only. Terms and conditions apply.
                  </span>
                </label>
              </div>

            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-950 text-white rounded-2xl p-6 sm:p-7 border border-zinc-800 shadow-xl flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Estimate Summary
                  </span>
                  <span className="text-xs text-amber-400 font-mono">
                    Chennai / Tiruvallur / Kanchi
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span>Built-up Area:</span>
                    <span className="font-bold text-white font-mono">{area} sq.ft ({floors})</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Package Rate:</span>
                    <span className="font-bold text-white font-mono">₹{selectedPkg.rate}/sq.ft</span>
                  </div>
                  {includeFreeTvUnit && (
                    <div className="flex justify-between text-amber-400">
                      <span>Basic TV Unit (First 10 Offer):</span>
                      <span className="font-bold font-mono">FREE (Worth ₹15,000)</span>
                    </div>
                  )}
                  <div className="flex justify-between text-zinc-300">
                    <span>Guaranteed Delivery:</span>
                    <span className="font-bold text-emerald-400 font-mono">Within 6 Months</span>
                  </div>
                </div>

                {/* Estimated Cost Callout */}
                <div className="pt-4 border-t border-zinc-800 space-y-1">
                  <span className="text-xs text-zinc-400 block">Total Estimated Project Cost</span>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-amber-400 tabular-nums">
                    {formatINR(baseCost)}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    *Exclusive of government statutory approval fees. 100% transparent itemized quotation.
                  </div>
                </div>

                {/* Estimated Total Savings */}
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-zinc-300">Estimated Total Savings: </span>
                    <strong className="text-amber-400 font-bold tabular-nums">
                      {formatINR(estimatedSavings)}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleBookWithEstimate}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Lock This Estimate & Claim Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEstimate}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Estimate to WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
