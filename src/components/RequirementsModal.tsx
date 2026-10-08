import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight, 
  Leaf
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
            ? 'bg-[#091b36] border-blue-900 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">{currentDest.flag}</span>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1565C0]">
                <span>Visa Dossier Specifications</span>
                <span aria-hidden="true">·</span>
                <span className="capitalize">{visaCategory} Visa</span>
              </div>
              <h2 id="req-modal-title" className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isEcoMode ? 'text-white' : 'text-[#0A3670]'
              }`}>
                {currentDest.name} Requirements Checklist
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close requirements checklist"
            className={`p-2 rounded-full transition-colors ${
              isEcoMode ? 'text-slate-400 hover:text-white hover:bg-blue-900/40' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Quick Metrics Bar */}
          <div className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border ${
            isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-blue-50/50 border-blue-100'
          }`}>
            <div>
              <span className={`text-xs block ${isEcoMode ? 'text-slate-400' : 'text-slate-500'}`}>Processing Time</span>
              <span className={`text-sm font-bold font-mono tabular-nums ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                {currentDest.processingTime}
              </span>
            </div>
            <div>
              <span className={`text-xs block ${isEcoMode ? 'text-slate-400' : 'text-slate-500'}`}>Government Fee</span>
              <span className="text-sm font-bold font-mono tabular-nums text-[#1565C0]">
                {currentDest.standardFee}
              </span>
            </div>
            <div>
              <span className={`text-xs block ${isEcoMode ? 'text-slate-400' : 'text-slate-500'}`}>Approval Benchmark</span>
              <span className={`text-sm font-bold font-mono tabular-nums ${isEcoMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                {currentDest.successRate}
              </span>
            </div>
          </div>

          {/* Mandatory Documents Checklist */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}>
              <FileCheck className="w-4 h-4 text-[#1565C0]" />
              <span>Standard Mandatory Dossier Documents</span>
            </h3>

            <div className="space-y-2.5">
              {currentDest.keyRequirements.map((req, i) => (
                <div 
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${
                    isEcoMode 
                      ? 'bg-[#061833] border-blue-900/60 text-slate-200' 
                      : 'bg-slate-50/80 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1565C0] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Paperless & Eco Travel Advantage */}
          <div className={`p-4 rounded-2xl border text-xs flex items-start gap-3 ${
            isEcoMode ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">100% Certified Paperless Submission Available</strong>
              <p className="mt-0.5 opacity-90 leading-relaxed">
                You can upload PDF and high-res mobile photo scans. We encrypt and format them to consular standards without you printing a single physical page.
              </p>
            </div>
          </div>

          {/* Quick Eligibility Pre-Check Quiz */}
          <div className={`p-5 rounded-2xl border ${
            isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-sm font-bold ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                Quick Eligibility Assessment
              </h3>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1565C0] text-white">
                {score}% Ready
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasPassport} 
                  onChange={(e) => setHasPassport(e.target.checked)}
                  className="rounded border-slate-300 text-[#1565C0] focus:ring-[#1565C0] w-4 h-4"
                />
                <span className={isEcoMode ? 'text-slate-300' : 'text-slate-700'}>I possess a passport with at least 6 months validity</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasFunds} 
                  onChange={(e) => setHasFunds(e.target.checked)}
                  className="rounded border-slate-300 text-[#1565C0] focus:ring-[#1565C0] w-4 h-4"
                />
                <span className={isEcoMode ? 'text-slate-300' : 'text-slate-700'}>I have bank statements showing sufficient travel / living funds</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={cleanRecord} 
                  onChange={(e) => setCleanRecord(e.target.checked)}
                  className="rounded border-slate-300 text-[#1565C0] focus:ring-[#1565C0] w-4 h-4"
                />
                <span className={isEcoMode ? 'text-slate-300' : 'text-slate-700'}>I have no prior visa denials or immigration infractions</span>
              </label>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-slate-50 border-slate-200'
        }`}>
          <p className={`text-xs text-center sm:text-left ${isEcoMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Free initial consultation · Zero commitment required
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className={`w-1/2 sm:w-auto px-5 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-colors ${
                isEcoMode 
                  ? 'border-blue-800 text-slate-300 hover:bg-blue-900/50' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onProceedToApply(currentDest.id, visaCategory);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082852] hover:to-[#104d94] text-white transition-all text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
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
