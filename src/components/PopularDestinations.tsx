import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Leaf, 
  MapPin, 
  ChevronRight,
  Globe2
} from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/visaData';
import { Destination } from '../types';

interface PopularDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
  isEcoMode: boolean;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestination,
  isEcoMode,
}) => {
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filtered = POPULAR_DESTINATIONS.filter((item) => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'north-america') return item.region.includes('North America');
    if (filterRegion === 'europe') return item.region.includes('Europe');
    if (filterRegion === 'oceania') return item.region.includes('Oceania');
    if (filterRegion === 'middle-east') return item.region.includes('Middle East');
    return true;
  });

  return (
    <section 
      id="destinations" 
      aria-labelledby="destinations-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#dfd3c1]/70 text-[#241a12]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          
          <div className="max-w-xl">
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047] mb-2.5">
              <Globe2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Consular Portfolios</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums opacity-75">120+ Embassies Supported</span>
            </div>

            <h2 
              id="destinations-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-ashen font-medium tracking-tight leading-tight text-[#241a12] dark:text-white"
            >
              Where Will Your Journey{' '}
              <span className="italic">Take You?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-3 max-w-lg">
              Explore leading international destinations with transparent timelines, verified consulate fees, and expedited processing pathways.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Button Tabs) */}
          <div 
            role="tablist"
            aria-label="Filter destinations by continent"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#f6efe1] dark:bg-[#241a12] border border-[#241a12]/15 self-start md:self-auto"
          >
            {[
              { id: 'all', label: 'All Regions' },
              { id: 'north-america', label: 'North America' },
              { id: 'europe', label: 'Europe' },
              { id: 'oceania', label: 'Oceania' },
              { id: 'middle-east', label: 'Middle East' },
            ].map((tab) => {
              const isActive = filterRegion === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilterRegion(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#241a12] text-[#f6efe1] shadow-sm'
                      : 'text-[#241a12]/70 dark:text-[#f1e9dd]/70 hover:text-[#241a12] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Destination Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((dest, idx) => {
            const isMarquee = idx === 0 && filterRegion === 'all';
            return (
              <div
                key={dest.id}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-2 min-h-[380px]' : 'min-h-[380px]'
                } ${
                  isEcoMode
                    ? 'bg-[#241a12] border-[#3d2c1d] hover:border-[#b89047]'
                    : 'bg-[#fdf8ef] border-[#241a12]/15 hover:border-[#b89047] hover:shadow-xl shadow-[0_10px_25px_-10px_rgba(52,34,16,0.12)]'
                }`}
              >
                {/* Photo with Fallback Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-800">
                  <img
                    src={dest.image}
                    alt={`${dest.name} scenic landscape`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241a12]/85 via-[#241a12]/30 to-transparent" />

                  {/* Flag & Region Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#241a12]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-xs font-medium">
                    <span className="text-base" aria-hidden="true">{dest.flag}</span>
                    <span>{dest.region}</span>
                  </div>

                  {/* Green Travel Eco Score */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#1a2f26]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-mono tabular-nums">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Eco {dest.ecoFriendlyScore}%</span>
                  </div>

                  {/* Quick Card Title on Image for immediate recognition */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-serif-ashen font-medium tracking-tight text-white drop-shadow-sm">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-[#f6efe1]/80 mt-0.5">
                        {dest.popularFor}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest)}
                      aria-label={`View requirements for ${dest.name}`}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#fdf8ef] text-white hover:text-[#241a12] backdrop-blur-md flex items-center justify-center transition-all group-hover:scale-110 shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 leading-relaxed line-clamp-2 mb-4">
                    {dest.description}
                  </p>

                  <div className="pt-4 border-t border-[#241a12]/10 dark:border-white/10 flex items-center justify-between text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="font-mono tabular-nums">{dest.processingTime}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#b89047]" aria-hidden="true" />
                      <span className="font-mono tabular-nums text-[#241a12] dark:text-[#f1e9dd] font-semibold">
                        {dest.successRate} Success
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd]">
                      Standard Fee: <span className="font-mono tabular-nums text-[#b89047]">{dest.standardFee}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest)}
                      className="text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] hover:text-[#b89047] flex items-center gap-1 hover:underline"
                    >
                      <span>Check Checklist</span>
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
