import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Hand, 
  Eye, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Logo } from './Logo';
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1565C0] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Bar: Brand, Nav links, Actions matching logo colors */}
      <header
        role="banner"
        className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
          isEcoMode
            ? 'bg-[#071933]/95 border-blue-900/50 text-slate-100 backdrop-blur-md'
            : 'bg-white/95 border-slate-200/80 text-[#0A3670] backdrop-blur-md shadow-[0_2px_12px_rgba(10,54,112,0.04)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Official Logo */}
          <a
            href="#"
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1565C0] rounded-xl p-1"
            aria-label="Global Visa and Passport Services - Home"
          >
            <Logo 
              className="h-11 sm:h-13 w-auto transition-transform group-hover:scale-[1.01]" 
              variant={isEcoMode ? "white" : "color"} 
            />
          </a>

          {/* Zone 2: Clean navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold"
          >
            <a
              href="#archive"
              className={`transition-colors hover:text-[#1565C0] flex items-center gap-1.5 ${
                isEcoMode ? 'text-blue-200' : 'text-[#0A3670]'
              }`}
            >
              <span>3D Passport Shelf</span>
            </a>
            <a
              href="#destinations"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              Destinations
            </a>
            <a
              href="#services"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              Visa Services
            </a>
            <a
              href="#process"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              Why Choose Us
            </a>
            <a
              href="#sustainability"
              className={`transition-colors hover:text-[#1565C0] flex items-center gap-1.5 ${
                isEcoMode ? 'text-emerald-400 font-semibold' : 'text-[#0A3670]/80'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              Eco Hub
            </a>
            <a
              href="#faq"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Actions & Utilities */}
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
                  ? 'bg-[#0A3670] text-white ring-2 ring-[#1565C0]'
                  : isEcoMode
                  ? 'bg-blue-950/60 text-blue-200 border border-blue-800 hover:text-white'
                  : 'bg-blue-50/80 text-[#0A3670] border border-blue-200/80 hover:bg-blue-100'
              }`}
            >
              <Hand className="w-3.5 h-3.5 text-[#1565C0]" aria-hidden="true" />
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
                  ? 'bg-emerald-950 text-emerald-200 border border-emerald-700'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
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
                  ? 'bg-[#0A3670] text-white'
                  : isEcoMode
                  ? 'bg-blue-950/60 text-blue-200 border border-blue-800'
                  : 'bg-blue-50/80 text-[#0A3670] border border-blue-200/80 hover:bg-blue-100'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#1565C0]" aria-hidden="true" />
              <span className="hidden lg:inline">A11y</span>
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenApply}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082852] hover:to-[#104d94] transition-all rounded-full shadow-md hover:shadow-lg whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#1565C0]"
            >
              <span>Apply For Visa</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" aria-hidden="true" />
            </button>

            {/* Mobile Navigation Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0A3670] hover:bg-blue-50 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className={`lg:hidden px-4 pt-4 pb-6 border-t ${
              isEcoMode
                ? 'bg-[#071933] border-blue-900 text-slate-100'
                : 'bg-white border-slate-200 text-[#0A3670]'
            }`}
          >
            <div className="flex flex-col gap-3 text-base font-semibold">
              <a
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                3D Passport &amp; Visa Shelf
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                Popular Destinations
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                Visa Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                Application Process
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                Why Choose Us
              </a>
              <a
                href="#sustainability"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 flex items-center gap-2 text-emerald-600"
              >
                <Leaf className="w-4 h-4" />
                Eco Hub
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40"
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-slate-100 dark:border-blue-900/50 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckRequirements();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold border border-[#0A3670]/20 text-[#0A3670] rounded-xl"
                >
                  Check Requirements
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-3 text-center text-sm font-bold bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white rounded-xl shadow-md"
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
