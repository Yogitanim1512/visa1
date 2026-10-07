import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  FileText, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/visaData';
import { VisaCategory } from '../types';

interface VisaSearchProps {
  onCheckRequirements: (countryId: string, visaType: VisaCategory) => void;
  isEcoMode: boolean;
}

export const VisaSearch: React.FC<VisaSearchProps> = ({
  onCheckRequirements,
  isEcoMode,
}) => {
  const [selectedCountry, setSelectedCountry] = useState('canada');
  const [selectedVisaType, setSelectedVisaType] = useState<VisaCategory>('tourist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckRequirements(selectedCountry, selectedVisaType);
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div 
        className={`p-6 sm:p-8 rounded-3xl shadow-xl transition-all border ${
          isEcoMode
            ? 'bg-[#241a12] border-[#3d2c1d] text-[#f1e9dd] shadow-black/40'
            : 'bg-[#fdf8ef] border-[#241a12]/15 text-[#241a12] shadow-[0_20px_40px_-15px_rgba(52,34,16,0.18)]'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:items-end gap-4 sm:gap-6">
          
          {/* Header Title with Subtitle */}
          <div className="lg:w-1/4 shrink-0">
            <div className="flex items-center gap-2 text-[#b89047] font-semibold text-xs tracking-wider uppercase mb-1">
              <Search className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dossier Assessment</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif-ashen font-medium tracking-tight text-[#241a12] dark:text-white">
              Find Your Visa
            </h2>
            <p className="text-xs text-[#241a12]/65 dark:text-[#f1e9dd]/65 mt-0.5">
              Select destination & category for instant consular requirements
            </p>
          </div>

          {/* Destination Selector */}
          <div className="flex-1">
            <label 
              htmlFor="destination-select" 
              className="block text-xs font-semibold uppercase tracking-wider text-[#241a12]/60 dark:text-[#f1e9dd]/60 mb-1.5"
            >
              Destination Country
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#241a12]/50 dark:text-[#f1e9dd]/50">
                <MapPin className="w-4 h-4 text-[#b89047]" aria-hidden="true" />
              </div>
              <select
                id="destination-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 text-sm font-medium rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#b89047] transition-colors appearance-none cursor-pointer ${
                  isEcoMode 
                    ? 'bg-[#1a140e] border-[#3d2c1d] text-white' 
                    : 'bg-[#f6efe1] border-[#241a12]/15 text-[#241a12] hover:bg-[#ede5d5]'
                }`}
              >
                {POPULAR_DESTINATIONS.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.flag} {dest.name} ({dest.region})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Visa Type Selector */}
          <div className="flex-1">
            <label 
              htmlFor="visa-type-select" 
              className="block text-xs font-semibold uppercase tracking-wider text-[#241a12]/60 dark:text-[#f1e9dd]/60 mb-1.5"
            >
              Visa Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#241a12]/50 dark:text-[#f1e9dd]/50">
                <FileText className="w-4 h-4 text-[#b89047]" aria-hidden="true" />
              </div>
              <select
                id="visa-type-select"
                value={selectedVisaType}
                onChange={(e) => setSelectedVisaType(e.target.value as VisaCategory)}
                className={`w-full pl-10 pr-4 py-3 text-sm font-medium rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#b89047] transition-colors appearance-none cursor-pointer ${
                  isEcoMode 
                    ? 'bg-[#1a140e] border-[#3d2c1d] text-white' 
                    : 'bg-[#f6efe1] border-[#241a12]/15 text-[#241a12] hover:bg-[#ede5d5]'
                }`}
              >
                <option value="tourist">Tourist Visa (Leisure / Vacation)</option>
                <option value="student">Student Visa (University / College)</option>
                <option value="business">Business Visa (Meetings / Trade)</option>
                <option value="work">Work Visa (Employment / Migration)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="lg:w-auto shrink-0">
            <button
              type="submit"
              className="w-full lg:w-auto py-3.5 px-6 text-sm font-semibold rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors shadow-md flex items-center justify-center gap-2 whitespace-nowrap focus:ring-2 focus:ring-[#b89047]"
            >
              <span>Check Requirements</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
