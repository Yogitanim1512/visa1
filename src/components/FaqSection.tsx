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
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-[#0A3670] dark:text-white"
          >
            Clear Answers For Your Peace of Mind
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 font-normal">
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
                      ? 'bg-[#0A1C38] border-[#1565C0] shadow-md'
                      : 'bg-white border-[#1565C0] shadow-[0_12px_28px_-10px_rgba(10,54,112,0.14)] ring-1 ring-[#1565C0]/30'
                    : isEcoMode
                    ? 'bg-[#061427] border-blue-900/60'
                    : 'bg-white border-slate-200/90 hover:border-[#1565C0]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0A3670] dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1565C0]"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-100 text-[#1565C0] dark:bg-blue-900/50' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-blue-950/80">
                    <p>{faq.answer}</p>
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
