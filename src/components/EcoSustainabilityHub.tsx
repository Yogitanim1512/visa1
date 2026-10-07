import React, { useState } from 'react';
import { 
  Leaf, 
  TreePine, 
  Zap, 
  ShieldCheck, 
  FileCheck, 
  Car, 
  HelpCircle,
  RefreshCw
} from 'lucide-react';

interface EcoSustainabilityHubProps {
  isEcoMode: boolean;
  onToggleEcoMode: () => void;
}

export const EcoSustainabilityHub: React.FC<EcoSustainabilityHubProps> = ({
  isEcoMode,
  onToggleEcoMode,
}) => {
  const [applicantCount, setApplicantCount] = useState<number>(2);

  // Carbon calculation: each traditional visa application averages ~2.4 kg CO2 from physical forms, courier shipments, and consulate transit
  const co2SavedPerPerson = 2.4;
  const totalCo2Saved = (applicantCount * co2SavedPerPerson).toFixed(1);
  const paperPagesSaved = applicantCount * 45;
  const carKmEquivalent = (applicantCount * 14.8).toFixed(0);

  return (
    <section 
      id="sustainability" 
      aria-labelledby="eco-heading"
      className={`py-20 sm:py-28 transition-colors border-y ${
        isEcoMode 
          ? 'bg-[#15100b] border-[#3d2c1d] text-[#f1e9dd]' 
          : 'bg-[#1e2a22] text-[#f6efe1] border-[#2e3f34]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047] mb-2">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Digital Carbon Neutrality</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums opacity-80">18,450+ kg CO₂ Prevented</span>
            </div>

            <h2 
              id="eco-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-ashen font-medium tracking-tight leading-tight text-white"
            >
              Eco-Friendly Travel,{' '}
              <span className="text-[#b89047] italic">Paperless Visas</span>
            </h2>

            <p className="text-base text-[#f6efe1]/75 mt-3 leading-relaxed font-normal">
              We eliminated physical paper applications, redundant consulate couriers, and in-person queue travel through 100% encrypted digital visa dossiers.
            </p>
          </div>

          {/* Quick Eco Mode Toggle CTA */}
          <div className="self-start md:self-auto bg-[#142018]/80 p-5 rounded-3xl border border-emerald-900/60 max-w-sm">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-sm font-serif-ashen font-medium text-white">Device Power Eco Mode</span>
              <button
                type="button"
                onClick={onToggleEcoMode}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                  isEcoMode 
                    ? 'bg-[#b89047] text-[#241a12]' 
                    : 'bg-[#2e4235] text-[#f6efe1] hover:bg-[#3d5746]'
                }`}
              >
                {isEcoMode ? 'Active (ON)' : 'Turn ON'}
              </button>
            </div>
            <p className="text-xs text-[#f6efe1]/70 leading-relaxed font-normal">
              Optimizes screen energy consumption on phones, tablets, and laptops by reducing GPU render cycles.
            </p>
          </div>
        </div>

        {/* Interactive Carbon Savings Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15231a]/60 rounded-3xl p-6 sm:p-10 border border-emerald-900/40">
          
          {/* Left Column: Interactive Slider */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif-ashen font-medium tracking-tight text-white">
              Calculate Your Digital Application Savings
            </h3>
            
            <p className="text-sm text-[#f6efe1]/75 font-normal">
              Select the number of travelers or visa applicants to estimate the environmental footprint eliminated by using our paperless cloud filing:
            </p>

            <div>
              <div className="flex items-center justify-between text-sm font-semibold text-white mb-2">
                <span>Number of Visa Applicants:</span>
                <span className="font-serif-ashen text-[#b89047] text-xl tabular-nums">{applicantCount} {applicantCount === 1 ? 'Person' : 'People'}</span>
              </div>
              
              <input 
                type="range"
                min="1"
                max="8"
                step="1"
                value={applicantCount}
                onChange={(e) => setApplicantCount(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-[#0f1712] rounded-lg appearance-none cursor-pointer accent-[#b89047]"
                aria-label="Number of applicants"
              />
              
              <div className="flex justify-between text-xs text-[#f6efe1]/50 mt-2 font-mono">
                <span>1 Solo</span>
                <span>2 Couple</span>
                <span>4 Family</span>
                <span>8 Group</span>
              </div>
            </div>

            {/* Why Paperless Matters list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-emerald-900/60 text-xs text-[#f6efe1]/75">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>Zero Printed Bank Booklets</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>Instant Digital Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>No Embassy Commute Required</span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>Reforestation Partner Offset</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Impact Counters */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Metric 1 */}
            <div className="bg-[#101913]/90 p-5 rounded-3xl border border-emerald-900/60 text-center flex flex-col justify-center">
              <span className="text-3xl sm:text-4xl font-serif-ashen text-[#b89047] tabular-nums">
                {totalCo2Saved} kg
              </span>
              <span className="text-xs font-semibold text-white mt-2">
                CO₂ Emissions Prevented
              </span>
              <span className="text-[11px] text-[#f6efe1]/60 mt-1">
                vs physical consular visits
              </span>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#101913]/90 p-5 rounded-3xl border border-emerald-900/60 text-center flex flex-col justify-center">
              <span className="text-3xl sm:text-4xl font-serif-ashen text-[#d8c5aa] tabular-nums">
                {paperPagesSaved}
              </span>
              <span className="text-xs font-semibold text-white mt-2">
                Paper Pages Eliminated
              </span>
              <span className="text-[11px] text-[#f6efe1]/60 mt-1">
                Zero printing required
              </span>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#101913]/90 p-5 rounded-3xl border border-emerald-900/60 text-center flex flex-col justify-center">
              <span className="text-3xl sm:text-4xl font-serif-ashen text-emerald-300 tabular-nums">
                ~{carKmEquivalent} km
              </span>
              <span className="text-xs font-semibold text-white mt-2">
                Vehicle Transit Saved
              </span>
              <span className="text-[11px] text-[#f6efe1]/60 mt-1">
                Avoided courier travel
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
