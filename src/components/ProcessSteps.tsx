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
        return <MessageSquare className="w-5 h-5 text-[#1565C0]" aria-hidden="true" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-[#0A3670]" aria-hidden="true" />;
      case 'Send':
        return <Send className="w-5 h-5 text-indigo-600" aria-hidden="true" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-5 h-5 text-emerald-600" aria-hidden="true" />;
      default:
        return <MessageSquare className="w-5 h-5 text-[#1565C0]" aria-hidden="true" />;
    }
  };

  return (
    <section 
      id="process" 
      aria-labelledby="process-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#071529] text-slate-100' : 'bg-slate-50 text-[#0A3670]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
            <span>Verified Methodology</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono opacity-85">Four Streamlined Chapters</span>
          </div>

          <h2 
            id="process-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}
          >
            Your Visa Journey,{' '}
            <span className="text-[#1565C0]">Simplified</span>
          </h2>

          <p className={`text-base sm:text-lg mt-4 leading-relaxed font-normal ${
            isEcoMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We handle the intricate immigration bureaucracy, appointment queues, and embassy liaison so you can focus entirely on your destination.
          </p>
        </div>

        {/* 4 Process Cards */}
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
                      ? 'bg-[#0A1C38] border-[#1565C0] ring-1 ring-[#1565C0]/60'
                      : 'bg-blue-50/50 border-[#1565C0] shadow-[0_12px_28px_-10px_rgba(10,54,112,0.18)] ring-1 ring-[#1565C0]/40'
                    : isEcoMode
                    ? 'bg-[#061427] border-blue-900/50 hover:border-[#1565C0]'
                    : 'bg-white border-slate-200/90 hover:border-[#1565C0] hover:shadow-md'
                }`}
              >
                {/* Number & Icon lockup */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-3xl sm:text-4xl font-black tabular-nums transition-colors ${
                    isEcoMode ? 'text-blue-900' : 'text-blue-200'
                  }`}>
                    {step.number}
                  </span>
                  
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shadow-sm ${
                    isEcoMode ? 'bg-[#0A1C38] border-blue-800' : 'bg-white border-blue-100'
                  }`}>
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                  isEcoMode ? 'text-white' : 'text-[#0A3670]'
                }`}>
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className={`text-sm leading-relaxed mb-4 font-normal ${
                  isEcoMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {step.description}
                </p>

                {/* Turnaround Timeframe indicator */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                  isEcoMode ? 'border-blue-900/50 text-slate-400' : 'border-slate-200/70 text-slate-500'
                }`}>
                  <span className={`font-semibold ${
                    isEcoMode ? 'text-white' : 'text-[#0A3670]'
                  }`}>Turnaround:</span>
                  <span className="font-mono tabular-nums text-[#1565C0] font-bold">
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
            className="py-3.5 px-8 text-sm font-bold rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white hover:from-[#082a57] hover:to-[#0f4d96] transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Book Free Pre-Assessment Consultation</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};
