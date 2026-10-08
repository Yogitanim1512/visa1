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
            ? 'bg-[#0A1C38] border-blue-900/60 text-slate-100 shadow-black/40'
            : 'bg-white border-blue-100 text-[#0A3670] shadow-[0_20px_45px_-12px_rgba(10,54,112,0.14)]'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:items-end gap-4 sm:gap-6">
          
          {/* Header Title with Subtitle */}
          <div className="lg:w-1/4 shrink-0">
            <div className="flex items-center gap-2 text-[#1565C0] font-bold text-xs tracking-wider uppercase mb-1">
              <Search className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dossier Assessment</span>
            </div>
            <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}>
              Find Your Visa
            </h2>
            <p className={`text-xs mt-0.5 ${
              isEcoMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Select destination &amp; category for instant consular requirements
            </p>
          </div>

          {/* Destination Selector */}
          <div className="flex-1">
            <label 
              htmlFor="destination-select" 
              className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                isEcoMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Destination Country
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1565C0]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </div>
              <select
                id="destination-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#1565C0] transition-colors appearance-none cursor-pointer ${
                  isEcoMode 
                    ? 'bg-[#071933] border-blue-800 text-white' 
                    : 'bg-slate-50 border-slate-200 text-[#0A3670] hover:bg-blue-50/50'
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
              className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                isEcoMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Visa Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1565C0]">
                <FileText className="w-4 h-4" aria-hidden="true" />
              </div>
              <select
                id="visa-type-select"
                value={selectedVisaType}
                onChange={(e) => setSelectedVisaType(e.target.value as VisaCategory)}
                className={`w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#1565C0] transition-colors appearance-none cursor-pointer ${
                  isEcoMode 
                    ? 'bg-[#071933] border-blue-800 text-white' 
                    : 'bg-slate-50 border-slate-200 text-[#0A3670] hover:bg-blue-50/50'
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
              className="w-full lg:w-auto py-3.5 px-6 text-sm font-bold rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white hover:from-[#082a57] hover:to-[#0f4d96] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap focus:ring-2 focus:ring-[#1565C0]"
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
