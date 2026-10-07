import React, { useState } from 'react';
import { 
  MessageSquare, 
  FileCheck2, 
  Send, 
  PlaneTakeoff, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/visaData';

interface ProcessStepsProps {
  onStartConsultation: () => void;
  isEcoMode: boolean;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  onStartConsultation,
  isEcoMode,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-600" aria-hidden="true" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-teal-600" aria-hidden="true" />;
      case 'Send':
        return <Send className="w-5 h-5 text-indigo-600" aria-hidden="true" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-5 h-5 text-amber-600" aria-hidden="true" />;
      default:
        return <MessageSquare className="w-5 h-5 text-emerald-600" aria-hidden="true" />;
    }
  };

  return (
    <section 
      id="process" 
      aria-labelledby="process-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#dfd3c1]/70 text-[#241a12]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047] mb-2.5">
            <span>Archival Protocol</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono opacity-75">Four Simplified Chapters</span>
          </div>

          <h2 
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-ashen font-medium tracking-tight leading-tight text-[#241a12] dark:text-white"
          >
            Your Visa Journey,{' '}
            <span className="italic">Simplified</span>
          </h2>

          <p className="text-base sm:text-lg text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-4 leading-relaxed font-normal">
            We handle the intricate immigration bureaucracy, appointment queues, and embassy liaison so you can focus entirely on your destination.
          </p>
        </div>

        {/* 4 Process Cards with Horizontal Flow line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 border relative ${
                  isSelected
                    ? isEcoMode
                      ? 'bg-[#241a12] border-[#b89047] ring-1 ring-[#b89047]/40'
                      : 'bg-[#fdf8ef] border-[#b89047] shadow-[0_12px_28px_-10px_rgba(52,34,16,0.18)] ring-1 ring-[#b89047]/30'
                    : isEcoMode
                    ? 'bg-[#1a140e]/90 border-[#3d2c1d] hover:border-[#b89047]'
                    : 'bg-[#f6efe1] border-[#241a12]/15 hover:border-[#b89047] hover:shadow-md'
                }`}
              >
                {/* Number & Icon lockup */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-serif-ashen font-normal tabular-nums text-[#241a12]/40 dark:text-[#f1e9dd]/40 group-hover:text-[#b89047] transition-colors">
                    {step.number}
                  </span>
                  
                  <div className="w-11 h-11 rounded-2xl bg-[#fdf8ef] dark:bg-[#1a140e] border border-[#241a12]/15 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-serif-ashen font-medium text-[#241a12] dark:text-white tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 leading-relaxed mb-4 font-normal">
                  {step.description}
                </p>

                {/* Turnaround Timeframe indicator */}
                <div className="pt-4 border-t border-[#241a12]/10 dark:border-white/10 flex items-center justify-between text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60">
                  <span className="font-semibold text-[#241a12] dark:text-[#f1e9dd]">Turnaround:</span>
                  <span className="font-mono tabular-nums text-[#b89047] font-medium">
                    {step.timeframe}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartConsultation}
            className="py-3.5 px-7 text-sm font-semibold rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Book Free Pre-Assessment Consultation</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};
