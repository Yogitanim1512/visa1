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
        isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#dfd3c1]/70 text-[#241a12]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047] mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Consultancy Enquiries</span>
          </div>

          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl font-serif-ashen font-medium tracking-tight leading-tight text-[#241a12] dark:text-white"
          >
            Clear Answers For Your Peace of Mind
          </h2>

          <p className="text-base text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-3 font-normal">
            Everything you need to know about our paperless process, 3D archival library, AI gesture support, and visa eligibility.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all border overflow-hidden ${
                  isOpen
                    ? isEcoMode
                      ? 'bg-[#241a12] border-[#b89047] shadow-md'
                      : 'bg-[#fdf8ef] border-[#b89047] shadow-[0_12px_28px_-10px_rgba(52,34,16,0.14)] ring-1 ring-[#b89047]/30'
                    : isEcoMode
                    ? 'bg-[#1a140e]/90 border-[#3d2c1d]'
                    : 'bg-[#f6efe1] border-[#241a12]/15 hover:border-[#b89047]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89047]"
                >
                  <span className="text-base sm:text-lg font-serif-ashen font-medium text-[#241a12] dark:text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#241a12] text-[#f6efe1]' : 'bg-[#ede5d5] text-[#241a12] dark:bg-[#241a12] dark:text-[#f1e9dd]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 leading-relaxed border-t border-[#241a12]/10 dark:border-white/10 pt-4 font-normal">
                    {faq.a}
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
