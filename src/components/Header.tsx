import React, { useState } from 'react';
import { 
  Compass, 
  Menu, 
  X, 
  Hand, 
  Eye, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { A11ySettings } from '../types';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenCheckRequirements: () => void;
  isGestureModeActive: boolean;
  onToggleGestureMode: () => void;
  isA11yOpen: boolean;
  onToggleA11y: () => void;
  isEcoMode: boolean;
  onToggleEcoMode: () => void;
  a11ySettings: A11ySettings;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenCheckRequirements,
  isGestureModeActive,
  onToggleGestureMode,
  isA11yOpen,
  onToggleA11y,
  isEcoMode,
  onToggleEcoMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to Main Content Link for WCAG A11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Bar Contract: 3 zones only (Brand, Nav links, Actions) in Ashen Press Theme */}
      <header
        role="banner"
        className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
          isEcoMode
            ? 'bg-[#1a140e]/95 border-[#3d2c1d] text-[#f1e9dd]'
            : 'bg-[#fdf8ef]/95 border-[#241a12]/15 text-[#241a12] backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single Wordmark text element */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89047] rounded-lg p-1"
            aria-label="Global Visa and Passport Services - Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#241a12] flex items-center justify-center text-[#f6efe1] shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className={`font-serif-ashen text-xl tracking-wide ${isEcoMode ? 'text-white' : 'text-[#241a12]'}`}>
              Global Visa <span className="text-[#b89047] font-serif italic">&</span> Passport
            </span>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
          >
            <a
              href="#archive"
              className={`transition-colors hover:text-[#b89047] flex items-center gap-1.5 ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]'
              }`}
            >
              <span>3D Archive</span>
            </a>
            <a
              href="#destinations"
              className={`transition-colors hover:text-[#b89047] ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]/80'
              }`}
            >
              Destinations
            </a>
            <a
              href="#services"
              className={`transition-colors hover:text-[#b89047] ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]/80'
              }`}
            >
              Visa Services
            </a>
            <a
              href="#process"
              className={`transition-colors hover:text-[#b89047] ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]/80'
              }`}
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className={`transition-colors hover:text-[#b89047] ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]/80'
              }`}
            >
              Why Choose Us
            </a>
            <a
              href="#sustainability"
              className={`transition-colors hover:text-[#b89047] flex items-center gap-1.5 ${
                isEcoMode ? 'text-emerald-400 font-semibold' : 'text-[#241a12]/80'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              Eco Hub
            </a>
            <a
              href="#faq"
              className={`transition-colors hover:text-[#b89047] ${
                isEcoMode ? 'text-[#e5dcce]' : 'text-[#241a12]/80'
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary Actions & Essential Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Gesture Mode Toggle */}
            <button
              type="button"
              onClick={onToggleGestureMode}
              title={isGestureModeActive ? 'Disable AI Gesture Navigation' : 'Enable AI Gesture Navigation (Alt+G)'}
              aria-label="Toggle AI Gesture Navigation"
              aria-pressed={isGestureModeActive}
              className={`relative p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all ${
                isGestureModeActive
                  ? 'bg-[#241a12] text-[#f6efe1] ring-2 ring-[#b89047]'
                  : isEcoMode
                  ? 'bg-[#241a12] text-[#e5dcce] border border-[#3d2c1d] hover:text-white'
                  : 'bg-[#f6efe1] text-[#241a12] border border-[#241a12]/15 hover:bg-[#ede5d5]'
              }`}
            >
              <Hand className="w-3.5 h-3.5 text-[#b89047]" aria-hidden="true" />
              <span className="hidden sm:inline">AI Gestures</span>
              {isGestureModeActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              )}
            </button>

            {/* Eco Mode Toggle */}
            <button
              type="button"
              onClick={onToggleEcoMode}
              title={isEcoMode ? 'Eco Mode Active' : 'Enable Eco-Friendly UI (Alt+E)'}
              aria-label="Toggle Eco Mode"
              aria-pressed={isEcoMode}
              className={`p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all ${
                isEcoMode
                  ? 'bg-[#2d4a3e] text-[#f1e9dd] border border-emerald-600'
                  : 'bg-[#f6efe1] text-[#241a12] border border-[#241a12]/15 hover:bg-[#ede5d5]'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              <span className="hidden md:inline">Eco Mode</span>
            </button>

            {/* Universal Accessibility Dock Toggle */}
            <button
              type="button"
              onClick={onToggleA11y}
              title="Universal Accessibility Settings (Alt+A)"
              aria-label="Open Accessibility Panel"
              aria-expanded={isA11yOpen}
              className={`p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all ${
                isA11yOpen
                  ? 'bg-[#241a12] text-[#f6efe1]'
                  : isEcoMode
                  ? 'bg-[#241a12] text-[#e5dcce] border border-[#3d2c1d]'
                  : 'bg-[#f6efe1] text-[#241a12] border border-[#241a12]/15 hover:bg-[#ede5d5]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#b89047]" aria-hidden="true" />
              <span className="hidden lg:inline">A11y</span>
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenApply}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#f6efe1] bg-[#241a12] hover:bg-[#382b20] transition-colors rounded-full shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#b89047]"
            >
              <span>Apply For Visa</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" aria-hidden="true" />
            </button>

            {/* Mobile Navigation Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#241a12] hover:bg-[#f6efe1] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className={`lg:hidden px-4 pt-3 pb-6 border-t ${
              isEcoMode
                ? 'bg-slate-950 border-emerald-950 text-slate-200'
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                Popular Destinations
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                Visa Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                How It Works
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                Why Choose Us
              </a>
              <a
                href="#sustainability"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2"
              >
                <Leaf className="w-4 h-4 text-emerald-500" />
                Eco Hub & Paperless Savings
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                FAQs
              </a>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckRequirements();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200"
                >
                  Check Requirements
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-slate-900 text-white"
                >
                  Start Visa Application
                </button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
