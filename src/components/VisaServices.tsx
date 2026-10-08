import React from 'react';
import { 
  Palmtree, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { VISA_SERVICES } from '../data/visaData';
import { VisaService, VisaCategory } from '../types';

interface VisaServicesProps {
  onSelectService: (serviceCategory: VisaCategory) => void;
  isEcoMode: boolean;
}

export const VisaServices: React.FC<VisaServicesProps> = ({
  onSelectService,
  isEcoMode,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palmtree':
        return <Palmtree className="w-6 h-6 text-[#1565C0]" aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#0A3670]" aria-hidden="true" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-600" aria-hidden="true" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-600" aria-hidden="true" />;
      default:
        return <Palmtree className="w-6 h-6 text-[#1565C0]" aria-hidden="true" />;
    }
  };

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#061427] text-slate-100' : 'bg-white text-[#0A3670]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
            <span>Official Visa Categories</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono opacity-85">End-to-End Dossier Management</span>
          </div>

          <h2 
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[#0A3670] dark:text-white"
          >
            Sovereign Solutions For{' '}
            <span className="text-[#1565C0]">Every Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-normal">
            Whether you are travelling for leisure, international education, cross-border corporate business, or permanent skilled migration, our seasoned visa specialists guide you.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VISA_SERVICES.map((service) => {
            const isFeatured = service.badge === 'Most Popular';
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? isEcoMode
                      ? 'bg-[#0A1C38] border-[#1565C0] ring-1 ring-[#1565C0]/60'
                      : 'bg-blue-50/40 border-[#1565C0] shadow-[0_12px_32px_-12px_rgba(10,54,112,0.18)] ring-1 ring-[#1565C0]/40'
                    : isEcoMode
                    ? 'bg-[#071933] border-blue-900/60 hover:border-[#1565C0]'
                    : 'bg-slate-50 border-slate-200/90 hover:border-[#1565C0] hover:shadow-lg'
                }`}
              >
                {/* Most Popular Label if featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-6 bg-[#0A3670] text-white border border-[#1565C0] text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0A1C38] border border-blue-100 dark:border-blue-800 flex items-center justify-center shadow-sm mb-5">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#0A3670] dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#1565C0] mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Included Features Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/70 dark:border-blue-900/50">
                    {service.includedFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#1565C0] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Duration & Fee info */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-blue-900/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1565C0]" aria-hidden="true" />
                      <span className="font-mono tabular-nums">{service.processingDays}</span>
                    </div>
                    <span className="font-mono tabular-nums font-bold text-[#0A3670] dark:text-white">
                      {service.feeEstimate}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.category)}
                    className={`w-full py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white hover:from-[#082a57] hover:to-[#0f4d96] shadow-md'
                        : isEcoMode
                        ? 'bg-[#0A1C38] hover:bg-[#0f284f] text-white border border-blue-800'
                        : 'bg-white hover:bg-blue-50 text-[#0A3670] border border-slate-200'
                    }`}
                  >
                    <span>Apply for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
