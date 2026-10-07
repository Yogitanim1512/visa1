import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle,
  Leaf,
  DollarSign,
  Download
} from 'lucide-react';
import { Destination, VisaCategory } from '../types';
import { POPULAR_DESTINATIONS } from '../data/visaData';

interface RequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination | null;
  visaCategory: VisaCategory;
  onProceedToApply: (destId: string, category: VisaCategory) => void;
  isEcoMode: boolean;
}

export const RequirementsModal: React.FC<RequirementsModalProps> = ({
  isOpen,
  onClose,
  destination,
  visaCategory,
  onProceedToApply,
  isEcoMode,
}) => {
  const currentDest = destination || POPULAR_DESTINATIONS[0];
  const [hasPassport, setHasPassport] = useState(true);
  const [hasFunds, setHasFunds] = useState(true);
  const [cleanRecord, setCleanRecord] = useState(true);

  if (!isOpen) return null;

  // Simple eligibility calculation
  const score = (hasPassport ? 35 : 0) + (hasFunds ? 35 : 0) + (cleanRecord ? 30 : 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="req-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
    >
      <div 
        className={`relative w-full max-w-3xl rounded-3xl shadow-2xl border overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          isEcoMode
            ? 'bg-[#1a140e] border-[#3d2c1d] text-[#f1e9dd]'
            : 'bg-[#fdf8ef] border-[#241a12]/15 text-[#241a12]'
        }`}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#241a12]/10 dark:border-white/10 flex items-center justify-between bg-[#f6efe1] dark:bg-[#241a12]/60">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">{currentDest.flag}</span>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047]">
                <span>Visa Dossier Specifications</span>
                <span aria-hidden="true">·</span>
                <span className="capitalize">{visaCategory} Visa</span>
              </div>
              <h2 id="req-modal-title" className="text-xl sm:text-2xl font-serif-ashen font-medium tracking-tight text-[#241a12] dark:text-white">
                {currentDest.name} Requirements Checklist
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close requirements checklist"
            className="p-2 text-[#241a12]/60 hover:text-[#241a12] dark:text-[#f1e9dd]/60 dark:hover:text-white rounded-full hover:bg-[#ede5d5] dark:hover:bg-[#382b20] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f6efe1] dark:bg-[#241a12] border border-[#241a12]/15">
            <div>
              <span className="text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 block">Processing Time</span>
              <span className="text-sm font-bold font-mono tabular-nums text-[#241a12] dark:text-white">
                {currentDest.processingTime}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 block">Government Fee</span>
              <span className="text-sm font-bold font-mono tabular-nums text-[#b89047]">
                {currentDest.standardFee}
              </span>
            </div>
            <div>
              <span className="text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 block">Approval Benchmark</span>
              <span className="text-sm font-bold font-mono tabular-nums text-[#241a12] dark:text-white">
                {currentDest.successRate}
              </span>
            </div>
          </div>

          {/* Mandatory Documents Checklist */}
          <div>
            <h3 className="text-sm font-serif-ashen font-medium uppercase tracking-wider text-[#241a12] dark:text-white mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#b89047]" />
              <span>Standard Mandatory Dossier Documents</span>
            </h3>

            <div className="space-y-2.5">
              {currentDest.keyRequirements.map((req, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#f6efe1]/60 dark:bg-[#241a12]/40 border border-[#241a12]/10 dark:border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#b89047] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#241a12]/80 dark:text-[#f1e9dd]/80 font-medium">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Paperless & Eco Travel Advantage */}
          <div className="p-4 rounded-2xl bg-[#1e2a22]/10 dark:bg-[#1e2a22]/40 border border-emerald-800/30 text-xs text-[#1e2a22] dark:text-emerald-200 flex items-start gap-3">
            <Leaf className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">100% Certified Paperless Submission Available</strong>
              <p className="mt-0.5 opacity-85">
                You can upload PDF and high-res mobile photo scans. We encrypt and format them to consular standards without you printing a single physical page.
              </p>
            </div>
          </div>

          {/* Quick Eligibility Pre-Check Quiz */}
          <div className="p-5 rounded-2xl bg-[#f6efe1] dark:bg-[#241a12]/50 border border-[#241a12]/15">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-serif-ashen font-medium text-[#241a12] dark:text-white">
                Quick Eligibility Assessment
              </h3>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                score >= 80 ? 'bg-[#241a12] text-[#f6efe1]' : 'bg-[#ede5d5] text-[#241a12]'
              }`}>
                {score}% Ready
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasPassport} 
                  onChange={(e) => setHasPassport(e.target.checked)}
                  className="rounded border-[#241a12]/30 text-[#b89047] focus:ring-[#b89047] w-4 h-4"
                />
                <span className="text-[#241a12]/80 dark:text-[#f1e9dd]/80">I possess a passport with at least 6 months validity</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasFunds} 
                  onChange={(e) => setHasFunds(e.target.checked)}
                  className="rounded border-[#241a12]/30 text-[#b89047] focus:ring-[#b89047] w-4 h-4"
                />
                <span className="text-[#241a12]/80 dark:text-[#f1e9dd]/80">I have bank statements showing sufficient travel / living funds</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={cleanRecord} 
                  onChange={(e) => setCleanRecord(e.target.checked)}
                  className="rounded border-[#241a12]/30 text-[#b89047] focus:ring-[#b89047] w-4 h-4"
                />
                <span className="text-[#241a12]/80 dark:text-[#f1e9dd]/80">I have no prior visa denials or immigration infractions</span>
              </label>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#241a12]/10 dark:border-white/10 bg-[#f6efe1] dark:bg-[#241a12]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 text-center sm:text-left">
            Free initial consultation · Zero commitment required
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-[#241a12]/20 text-xs sm:text-sm font-semibold text-[#241a12] dark:text-[#f1e9dd] hover:bg-[#ede5d5] dark:hover:bg-[#382b20]"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onProceedToApply(currentDest.id, visaCategory);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Begin Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
