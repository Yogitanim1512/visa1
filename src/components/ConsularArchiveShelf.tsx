import React from 'react';
import { Scene } from './Scene';
import { BookOpen, Sparkles, Hand, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

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
        isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#c6ae8e] text-[#241a12]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#241a12]/70 dark:text-[#f1e9dd]/70 mb-2">
              <Compass className="w-3.5 h-3.5 text-[#241a12] dark:text-[#f1e9dd]" aria-hidden="true" />
              <span>ThreeUI 3D Art-Book Experience</span>
              <span aria-hidden="true">·</span>
              <span className="font-serif italic font-normal">Sovereign Consular Archive</span>
            </div>

            <h2
              id="archive-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-ashen font-medium tracking-tight text-[#241a12] dark:text-white leading-[1.12]"
            >
              The Sovereign Consular Shelf
            </h2>

            <p className="text-base sm:text-lg text-[#241a12]/80 dark:text-[#f1e9dd]/80 mt-3 font-normal leading-relaxed">
              A tactile 3D library of ten clothbound volumes, embossed consular plates, and reflective oak surfaces. Direct hover, select, flip, and drag to inspect immigration pathways.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={onOpenRequirements}
              className="py-2.5 px-5 rounded-full text-xs font-semibold bg-[#fdf8ef] text-[#241a12] border border-[#241a12]/15 hover:bg-white shadow-[0_1px_1px_rgba(52,34,16,0.18),0_3px_6px_rgba(52,34,16,0.14)] transition-all"
            >
              Check Volume Requirements
            </button>
            <button
              type="button"
              onClick={onOpenApply}
              className="py-2.5 px-5 rounded-full text-xs font-semibold bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors flex items-center gap-1.5"
            >
              <span>Apply For Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3D AshenPress Scene */}
        <div className="relative">
          <Scene />

          {/* Quick interaction footer hint */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#241a12]/75 dark:text-[#f1e9dd]/75 px-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Hand className="w-3.5 h-3.5 text-[#b89047]" />
                <span>Hover & Click any volume to open</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Flip pages & drag to inspect binding</span>
            </div>
            <span className="font-mono text-[11px] opacity-80">
              Three.js r181 · Custom GLSL · CanvasTexture
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
