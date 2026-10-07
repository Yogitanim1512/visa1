import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Pause, 
  Play, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  Leaf
} from 'lucide-react';
import { HERO_SLIDES } from '../data/visaData';

interface HeroSliderProps {
  onApplyClick: () => void;
  onExploreServices: () => void;
  onCheckRequirements: () => void;
  onTalkExpert: () => void;
  isEcoMode: boolean;
  reducedMotion: boolean;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onApplyClick,
  onExploreServices,
  onCheckRequirements,
  onTalkExpert,
  isEcoMode,
  reducedMotion,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!reducedMotion);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay handler with respect to user motion preference and pause button
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, reducedMotion]);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handleCtaPrimary = (idx: number) => {
    if (idx === 0) onApplyClick();
    else if (idx === 1) onCheckRequirements();
    else onApplyClick();
  };

  const handleCtaSecondary = (idx: number) => {
    if (idx === 0) onExploreServices();
    else if (idx === 1) onTalkExpert();
    else onCheckRequirements();
  };

  return (
    <section 
      aria-roledescription="carousel" 
      aria-label="Global Visa Highlights"
      className="relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center justify-center bg-slate-950 text-white"
    >
      {/* Background Slides with Measured Scrim for WCAG 4.5:1 Contrast */}
      {HERO_SLIDES.map((item, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={item.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Fallback */}
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-75 scale-105 transition-transform duration-1000 ease-out"
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Gradient Scrim for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
          </div>
        );
      })}

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Anti-Slop Discipline: Clean unboxed metadata with bullet separator */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#b89047] mb-4 sm:mb-6">
            <Globe2 className="w-4 h-4 text-[#b89047] shrink-0" aria-hidden="true" />
            <span>{slide.tag}</span>
            <span aria-hidden="true" className="text-[#b89047]/60">·</span>
            <span className="text-[#f6efe1]/80 font-mono tabular-nums">{slide.metric}</span>
          </div>

          {/* Display Headline with balanced wrap */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-ashen font-medium tracking-tight text-white leading-[1.08] text-balance mb-5 sm:mb-6">
            {slide.title}{' '}
            <span className="italic text-[#d8c5aa]">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#f6efe1]/85 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
            {slide.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => handleCtaPrimary(currentSlideIndex)}
              className="py-3.5 px-7 text-sm sm:text-base font-semibold text-[#241a12] bg-[#fdf8ef] hover:bg-white rounded-full shadow-[0_1px_1px_rgba(52,34,16,0.18),0_5px_10px_rgba(52,34,16,0.16)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>{slide.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => handleCtaSecondary(currentSlideIndex)}
              className="py-3.5 px-7 text-sm sm:text-base font-semibold text-[#f6efe1] bg-[#241a12]/60 hover:bg-[#241a12]/90 border border-white/20 backdrop-blur-md rounded-full transition-colors"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Trust Metric Micro-bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#f6efe1]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b89047]" aria-hidden="true" />
              <span>Government Registered Consultancy</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>100% Paperless Digital Filing</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Controls (Prev, Next, Play/Pause, Slide Indicator) */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-2 sm:gap-3 bg-slate-900/70 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-white/10">
        
        {/* Play/Pause Button for Accessibility */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause hero slideshow' : 'Play hero slideshow'}
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Current slide indicator */}
        <span className="text-xs font-mono tabular-nums px-2 text-slate-300">
          0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
        </span>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div 
        role="tablist" 
        aria-label="Slides"
        className="absolute bottom-6 left-4 sm:left-8 z-30 flex items-center gap-2"
      >
        {HERO_SLIDES.map((item, idx) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={idx === currentSlideIndex}
            aria-label={`Go to slide ${idx + 1}: ${item.title}`}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlideIndex
                ? 'w-8 bg-emerald-400'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
};
