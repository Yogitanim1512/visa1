import React from 'react';
import { Scene } from './Scene';
import { Sparkles, Hand, ArrowRight, ShieldCheck, Globe2, BookOpen } from 'lucide-react';

interface ConsularArchiveShelfProps {
  onOpenApply: () => void;
  onOpenRequirements: () => void;
  isEcoMode: boolean;
}

export const ConsularArchiveShelf: React.FC<ConsularArchiveShelfProps> = ({
  onOpenApply,
  onOpenRequirements,
  isEcoMode,
}) => {
  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className={`py-16 sm:py-24 transition-colors ${
        isEcoMode
          ? 'bg-[#071933] text-slate-100 border-t border-b border-blue-900/40'
          : 'bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 text-[#0A3670] border-t border-b border-blue-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
              <Globe2 className="w-4 h-4 text-[#1565C0]" aria-hidden="true" />
              <span>Interactive 3D Library</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0A3670]">Sovereign Passports &amp; Consular Visa Shelf</span>
            </div>

            <h2
              id="archive-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] ${
                isEcoMode ? 'text-white' : 'text-[#0A3670]'
              }`}
            >
              The Sovereign Passport &amp; Visa Shelf
            </h2>

            <p className={`text-base sm:text-lg mt-3 font-normal leading-relaxed ${
              isEcoMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Explore ten tactile 3D sovereign passport codices and diplomatic visa dossiers with embossed gold foil seals, official biometric security watermarks, and international entry credentials. Direct hover, select, flip, and drag to inspect each country’s document requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={onOpenRequirements}
              className="py-3 px-5 rounded-full text-xs font-bold bg-white text-[#0A3670] border border-[#0A3670]/20 hover:border-[#1565C0] hover:bg-blue-50 shadow-sm transition-all"
            >
              Check Visa Requirements
            </button>
            <button
              type="button"
              onClick={onOpenApply}
              className="py-3 px-6 rounded-full text-xs font-bold bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white hover:from-[#082a57] hover:to-[#0f4d96] shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Apply For Passport/Visa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3D AshenPress Scene */}
        <div className="relative">
          <Scene />

          {/* Quick interaction footer hint */}
          <div className={`mt-4 flex flex-wrap items-center justify-between gap-3 text-xs px-3 ${
            isEcoMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <Hand className="w-4 h-4 text-[#1565C0]" />
                <span>Hover &amp; click any passport to inspect</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Click &ldquo;Inspect Passport Page&rdquo; to open visa stamps &amp; MRZ lines</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Drag to rotate 3D binding</span>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#1565C0]">
              Three.js r181 · Custom GLSL · CanvasTexture
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
