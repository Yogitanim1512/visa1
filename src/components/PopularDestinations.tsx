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
        isEcoMode ? 'bg-[#071529] text-slate-100' : 'bg-slate-50 text-[#0A3670]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          
          <div className="max-w-xl">
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
              <Globe2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Consular Portfolios</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums opacity-85">120+ Embassies Supported</span>
            </div>

            <h2 
              id="destinations-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                isEcoMode ? 'text-white' : 'text-[#0A3670]'
              }`}
            >
              Where Will Your Journey{' '}
              <span className="text-[#1565C0]">Take You?</span>
            </h2>

            <p className={`text-base sm:text-lg mt-3 max-w-lg ${
              isEcoMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Explore leading international destinations with transparent timelines, verified consulate fees, and expedited processing pathways.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div 
            role="tablist"
            aria-label="Filter destinations by continent"
            className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-full border shadow-sm self-start md:self-auto ${
              isEcoMode ? 'bg-[#0A1C38] border-blue-900' : 'bg-white border-slate-200'
            }`}
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
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0A3670] text-white shadow-sm'
                      : isEcoMode
                      ? 'text-slate-300 hover:text-white hover:bg-blue-900/50'
                      : 'text-[#0A3670]/70 hover:text-[#0A3670] hover:bg-blue-50/60'
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
                    ? 'bg-[#0A1C38] border-blue-900/60 hover:border-[#1565C0]'
                    : 'bg-white border-slate-200/90 hover:border-[#1565C0] hover:shadow-xl shadow-[0_4px_20px_rgba(10,54,112,0.06)]'
                }`}
              >
                {/* Photo Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-800">
                  <img
                    src={dest.image}
                    alt={`${dest.name} scenic landscape`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3670]/90 via-[#0A3670]/30 to-transparent" />

                  {/* Flag & Region Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A3670]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-xs font-semibold">
                    <span className="text-base" aria-hidden="true">{dest.flag}</span>
                    <span>{dest.region}</span>
                  </div>

                  {/* Green Travel Eco Score */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold tabular-nums">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Eco {dest.ecoFriendlyScore}%</span>
                  </div>

                  {/* Quick Card Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-blue-100/90 mt-0.5 font-medium">
                        {dest.popularFor}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest)}
                      aria-label={`View requirements for ${dest.name}`}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0A3670] backdrop-blur-md flex items-center justify-center transition-all group-hover:scale-110 shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className={`text-sm leading-relaxed line-clamp-2 mb-4 font-normal ${
                    isEcoMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {dest.description}
                  </p>

                  <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                    isEcoMode ? 'border-blue-900/50 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1565C0]" aria-hidden="true" />
                      <span className="font-mono tabular-nums">{dest.processingTime}</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                      <span className={`font-mono tabular-nums font-bold ${
                        isEcoMode ? 'text-white' : 'text-[#0A3670]'
                      }`}>
                        {dest.successRate} Success
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className={`mt-4 pt-3 flex items-center justify-between border-t ${
                    isEcoMode ? 'border-blue-900/40' : 'border-slate-100'
                  }`}>
                    <span className={`text-xs font-bold ${
                      isEcoMode ? 'text-white' : 'text-[#0A3670]'
                    }`}>
                      Standard Fee: <span className="font-mono tabular-nums text-[#1565C0]">{dest.standardFee}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest)}
                      className={`text-xs font-bold flex items-center gap-1 hover:underline ${
                        isEcoMode ? 'text-blue-300 hover:text-white' : 'text-[#0A3670] hover:text-[#1565C0]'
                      }`}
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
