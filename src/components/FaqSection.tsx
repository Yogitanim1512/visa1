import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/visaData';

interface FaqSectionProps {
  isEcoMode: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isEcoMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      aria-labelledby="faq-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#061427] text-slate-100' : 'bg-slate-50 text-[#0A3670]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Consultancy Enquiries</span>
          </div>

          <h2 
            id="faq-heading"
            className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}
          >
            Clear Answers For Your Peace of Mind
          </h2>

          <p className={`text-base mt-3 font-normal ${
            isEcoMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Everything you need to know about our paperless process, 3D passport archival shelf, AI gesture navigation, and visa eligibility.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isOpen
                    ? isEcoMode
                      ? 'bg-[#0A1C38] border-[#1565C0] shadow-md ring-1 ring-[#1565C0]/40'
                      : 'bg-white border-[#1565C0] shadow-[0_12px_28px_-10px_rgba(10,54,112,0.14)] ring-1 ring-[#1565C0]/30'
                    : isEcoMode
                    ? 'bg-[#061427] border-blue-900/60 hover:border-blue-700'
                    : 'bg-white border-slate-200/90 hover:border-[#1565C0] shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1565C0] transition-colors ${
                    isEcoMode ? 'text-white hover:text-blue-200' : 'text-[#0A3670] hover:text-[#1565C0]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen 
                      ? isEcoMode
                        ? 'rotate-180 bg-blue-900/70 text-blue-200'
                        : 'rotate-180 bg-blue-100 text-[#1565C0]' 
                      : isEcoMode
                        ? 'text-slate-400 bg-blue-950/40'
                        : 'text-slate-400 bg-slate-100'
                  }`}>
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed font-normal border-t ${
                    isEcoMode 
                      ? 'text-slate-300 border-blue-950/80' 
                      : 'text-slate-700 border-slate-100'
                  }`}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
