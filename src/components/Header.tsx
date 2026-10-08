import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Hand, 
  Eye, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Compass,
  Briefcase,
  GraduationCap,
  Plane,
  Stamp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { Logo } from './Logo';
import { A11ySettings, VisaCategory } from '../types';

interface HeaderProps {
  onOpenApply: (category?: VisaCategory) => void;
  onOpenCheckRequirements: (countryId?: string, category?: VisaCategory) => void;
  isGestureModeActive: boolean;
  onToggleGestureMode: () => void;
  isA11yOpen: boolean;
  onToggleA11y: () => void;
  isEcoMode: boolean;
  onToggleEcoMode: () => void;
  a11ySettings: A11ySettings;
  currentPage?: 'home' | 'about' | 'tourist-visa';
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onNavigateTouristVisa?: () => void;
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
  a11ySettings,
  currentPage = 'home',
  onNavigateHome,
  onNavigateAbout,
  onNavigateTouristVisa,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
  const [passportDropdownOpen, setPassportDropdownOpen] = useState(false);

  const visaDropdownRef = useRef<HTMLDivElement>(null);
  const passportDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (visaDropdownRef.current && !visaDropdownRef.current.contains(event.target as Node)) {
        setVisaDropdownOpen(false);
      }
      if (passportDropdownRef.current && !passportDropdownRef.current.contains(event.target as Node)) {
        setPassportDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const visaServicesList = [
    { label: 'Tourist Visa', desc: 'Fast leisure & visitor visas for 75+ countries', icon: Plane, category: 'tourist' as VisaCategory },
    { label: 'Student Visa', desc: 'University admissions & study permit facilitation', icon: GraduationCap, category: 'student' as VisaCategory },
    { label: 'Business Visa', desc: 'Corporate delegations, trade fairs & conferences', icon: Briefcase, category: 'business' as VisaCategory },
    { label: 'Work Visa', desc: 'Skilled worker permits & employment sponsorship', icon: FileText, category: 'work' as VisaCategory },
    { label: 'Holiday Packages', desc: 'Curated international tour & visa combo itineraries', icon: Compass, category: 'tourist' as VisaCategory },
  ];

  const passportServicesList = [
    { label: 'Fresh / Renewal Passport', desc: 'New passport booklet issue or regular reissue', icon: Stamp },
    { label: 'Urgent / Tatkaal Passport', desc: 'Expedited processing within 24-48 hours', icon: Clock },
    { label: 'Minor Passport', desc: 'Child passports (under 18) with annexures', icon: ShieldCheck },
    { label: 'Lost / Damaged Passport', desc: 'FIR filing guidance and fast duplicate issue', icon: FileText },
    { label: 'Name Change in Gazette', desc: 'Legal name alteration notification in official Gazette', icon: FileText },
    { label: 'Apostille & Attestation Services', desc: 'MEA Apostille, HRD & Embassy authentication', icon: CheckCircle2 },
  ];

  return (
    <>
      {/* Skip to Main Content Link for WCAG A11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1565C0] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* =========================================
           TOP CONTACT & UTILITY BAR
      ========================================== */}
      <div 
        className={`border-b text-xs transition-colors py-2 px-4 sm:px-6 lg:px-8 ${
          isEcoMode 
            ? 'bg-[#040e1d] border-blue-950 text-blue-200' 
            : 'bg-[#0A3670] border-[#082852] text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Left: Contact Phone, Email & Working Hours */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href="tel:+919899974500" 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium tracking-wide"
              aria-label="Call customer support at +91 9899974500"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>+91 9899974500</span>
            </a>

            <a 
              href="mailto:info@globaltravelservices.live" 
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              aria-label="Email customer support at info@globaltravelservices.live"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>info@globaltravelservices.live</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-blue-200/90">
              <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </div>

            <a
              href="#contact"
              className="hidden xl:flex items-center gap-1 text-blue-200/90 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Offices: Greater Noida · Delhi · Lucknow · Gurugram</span>
            </a>
          </div>

          {/* Right: Social Links + Quick Accessibility / Eco Toggles */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/20">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-3 h-3 fill-current" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yogita-nim-b7a22b380/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-3 h-3 fill-current" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-3 h-3" />
              </a>
            </div>

            {/* Eco Mode Toggle */}
            <button
              type="button"
              onClick={onToggleEcoMode}
              title={isEcoMode ? 'Eco Mode Active' : 'Enable Eco-Friendly UI (Alt+E)'}
              aria-label="Toggle Eco Mode"
              aria-pressed={isEcoMode}
              className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold ${
                isEcoMode
                  ? 'bg-emerald-900 text-emerald-200 border border-emerald-500'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-300" aria-hidden="true" />
              <span className="hidden sm:inline">Eco</span>
            </button>

            {/* A11y Toggle */}
            <button
              type="button"
              onClick={onToggleA11y}
              title="Universal Accessibility Settings (Alt+A)"
              aria-label="Open Accessibility Panel"
              aria-expanded={isA11yOpen}
              className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold ${
                isA11yOpen
                  ? 'bg-white text-[#0A3670] font-bold shadow-sm'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <Eye className="w-3 h-3" aria-hidden="true" />
              <span>A11y</span>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================
           MAIN NAVIGATION HEADER (STICKY)
      ========================================== */}
      <header
        role="banner"
        className={`sticky top-0 z-40 transition-colors duration-200 border-b backdrop-blur-md ${
          isEcoMode
            ? 'bg-[#071933]/95 border-blue-900/60 text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'bg-white/95 border-slate-200/90 text-[#0A3670] shadow-[0_2px_14px_rgba(10,54,112,0.06)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Official Logo */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1565C0] rounded-xl p-1 text-left"
            aria-label="Global Visa and Passport Services - Home"
          >
            <Logo 
              className="h-11 sm:h-12 w-auto transition-transform group-hover:scale-[1.01]" 
              variant={isEcoMode ? "white" : "color"} 
            />
          </button>

          {/* Zone 2: Navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6 text-sm font-semibold"
          >
            <button
              type="button"
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors hover:text-[#1565C0] relative py-1 ${
                currentPage === 'home'
                  ? isEcoMode ? 'text-blue-300 font-bold border-b-2 border-blue-400' : 'text-[#1565C0] font-bold border-b-2 border-[#1565C0]'
                  : isEcoMode ? 'text-slate-300' : 'text-[#0A3670]'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => {
                if (onNavigateAbout) onNavigateAbout();
                else {
                  const el = document.getElementById('why-us');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`transition-colors hover:text-[#1565C0] relative py-1 ${
                currentPage === 'about'
                  ? isEcoMode ? 'text-blue-300 font-bold border-b-2 border-blue-400' : 'text-[#1565C0] font-bold border-b-2 border-[#1565C0]'
                  : isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              About Us
            </button>

            {/* Tourist Visa Dedicated Nav Link */}
            <button
              type="button"
              onClick={() => {
                if (onNavigateTouristVisa) onNavigateTouristVisa();
              }}
              className={`transition-colors hover:text-[#1565C0] relative py-1 flex items-center gap-1.5 ${
                currentPage === 'tourist-visa'
                  ? isEcoMode ? 'text-blue-300 font-bold border-b-2 border-blue-400' : 'text-[#1565C0] font-bold border-b-2 border-[#1565C0]'
                  : isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              <span>Tourist Visa</span>
              <span className="hidden lg:inline text-[9px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900 text-[#1565C0] dark:text-blue-300 px-1.5 py-0.5 rounded-full">
                Top
              </span>
            </button>

            {/* Visa Services Dropdown */}
            <div 
              ref={visaDropdownRef}
              className="relative"
              onMouseEnter={() => setVisaDropdownOpen(true)}
              onMouseLeave={() => setVisaDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setVisaDropdownOpen(!visaDropdownOpen)}
                aria-expanded={visaDropdownOpen}
                className={`flex items-center gap-1 transition-colors hover:text-[#1565C0] py-2 focus:outline-none ${
                  isEcoMode ? 'text-slate-200' : 'text-[#0A3670]'
                }`}
              >
                <span>Visa Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${visaDropdownOpen ? 'rotate-180 text-[#1565C0]' : ''}`} />
              </button>

              {visaDropdownOpen && (
                <div 
                  className={`absolute left-0 top-full mt-1 w-80 rounded-2xl shadow-2xl border p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    isEcoMode 
                      ? 'bg-[#091b36] border-blue-800 text-slate-100' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1565C0] px-3 py-1 mb-1">
                    Global Visa Categories
                  </div>
                  <div className="space-y-1">
                    {visaServicesList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setVisaDropdownOpen(false);
                            if (item.category === 'tourist' && onNavigateTouristVisa) {
                              onNavigateTouristVisa();
                            } else {
                              onOpenApply(item.category);
                            }
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 group ${
                            isEcoMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-50/80'
                          }`}
                        >
                          <div className={`p-2 rounded-lg mt-0.5 ${
                            isEcoMode ? 'bg-blue-950 text-blue-300' : 'bg-blue-100/70 text-[#1565C0]'
                          }`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0A3670] dark:text-blue-100 group-hover:text-[#1565C0]">
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className={`mt-2 pt-2 border-t text-center ${isEcoMode ? 'border-blue-900' : 'border-slate-100'}`}>
                    <a
                      href="#services"
                      onClick={() => setVisaDropdownOpen(false)}
                      className="text-xs font-bold text-[#1565C0] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View All Visa Categories</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Passport Services Dropdown */}
            <div 
              ref={passportDropdownRef}
              className="relative"
              onMouseEnter={() => setPassportDropdownOpen(true)}
              onMouseLeave={() => setPassportDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPassportDropdownOpen(!passportDropdownOpen)}
                aria-expanded={passportDropdownOpen}
                className={`flex items-center gap-1 transition-colors hover:text-[#1565C0] py-2 focus:outline-none ${
                  isEcoMode ? 'text-slate-200' : 'text-[#0A3670]'
                }`}
              >
                <span>Passport Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${passportDropdownOpen ? 'rotate-180 text-[#1565C0]' : ''}`} />
              </button>

              {passportDropdownOpen && (
                <div 
                  className={`absolute left-0 top-full mt-1 w-84 rounded-2xl shadow-2xl border p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    isEcoMode 
                      ? 'bg-[#091b36] border-blue-800 text-slate-100' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1565C0] px-3 py-1 mb-1">
                    Consular Passport Assistance
                  </div>
                  <div className="space-y-1">
                    {passportServicesList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setPassportDropdownOpen(false);
                            onOpenApply('tourist');
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-start gap-3 group ${
                            isEcoMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-50/80'
                          }`}
                        >
                          <div className={`p-2 rounded-lg mt-0.5 ${
                            isEcoMode ? 'bg-blue-950 text-blue-300' : 'bg-blue-100/70 text-[#1565C0]'
                          }`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0A3670] dark:text-blue-100 group-hover:text-[#1565C0]">
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className={`mt-2 pt-2 border-t text-center ${isEcoMode ? 'border-blue-900' : 'border-slate-100'}`}>
                    <a
                      href="#archive"
                      onClick={() => setPassportDropdownOpen(false)}
                      className="text-xs font-bold text-[#1565C0] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Sovereign Passport Shelf</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#destinations"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              Countries
            </a>

            <a
              href="#archive"
              className={`transition-colors hover:text-[#1565C0] flex items-center gap-1 ${
                isEcoMode ? 'text-blue-200' : 'text-[#0A3670]'
              }`}
            >
              <span>3D Passport Shelf</span>
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
              href="#contact"
              className={`transition-colors hover:text-[#1565C0] ${
                isEcoMode ? 'text-slate-300' : 'text-[#0A3670]/80'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Actions & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Gesture Navigation Toggle */}
            <button
              type="button"
              onClick={onToggleGestureMode}
              title={isGestureModeActive ? 'Disable AI Gesture Navigation' : 'Enable AI Gesture Navigation (Alt+G)'}
              aria-label="Toggle AI Gesture Navigation"
              aria-pressed={isGestureModeActive}
              className={`hidden sm:flex relative p-2 sm:px-3 sm:py-2 text-xs font-semibold rounded-full items-center gap-1.5 transition-all ${
                isGestureModeActive
                  ? 'bg-[#0A3670] text-white ring-2 ring-[#1565C0]'
                  : isEcoMode
                  ? 'bg-blue-950/80 text-blue-200 border border-blue-800 hover:text-white'
                  : 'bg-blue-50 text-[#0A3670] border border-blue-200/80 hover:bg-blue-100'
              }`}
            >
              <Hand className="w-3.5 h-3.5 text-[#1565C0]" aria-hidden="true" />
              <span className="hidden md:inline">AI Gestures</span>
              {isGestureModeActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              )}
            </button>

            {/* Secondary CTA: Check Requirements */}
            <button
              type="button"
              onClick={() => onOpenCheckRequirements()}
              className={`hidden lg:inline-flex px-3.5 py-2 text-xs font-bold rounded-full border transition-all ${
                isEcoMode
                  ? 'border-blue-700 text-blue-200 hover:bg-blue-900/60'
                  : 'border-slate-300 text-[#0A3670] hover:border-[#1565C0] hover:bg-blue-50/50'
              }`}
            >
              Check Requirements
            </button>

            {/* Primary Action Button: Apply Online */}
            <button
              type="button"
              onClick={() => onOpenApply()}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082852] hover:to-[#104d94] transition-all rounded-full shadow-md hover:shadow-lg whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#1565C0]"
            >
              <span>Apply For Visa</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Mobile Navigation Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl focus:outline-none transition-colors ${
                isEcoMode 
                  ? 'text-white hover:bg-blue-900/60' 
                  : 'text-[#0A3670] hover:bg-blue-50'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* =========================================
             MOBILE DROPDOWN NAVIGATION DRAWER
        ========================================== */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className={`xl:hidden px-4 pt-4 pb-8 border-t max-h-[85vh] overflow-y-auto ${
              isEcoMode
                ? 'bg-[#071933] border-blue-900 text-slate-100'
                : 'bg-white border-slate-200 text-[#0A3670]'
            }`}
          >
            {/* Quick Contact Banner on Mobile */}
            <div className={`p-4 rounded-2xl mb-4 border flex flex-col gap-2 ${
              isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-blue-50/70 border-blue-100'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1565C0]">
                24/7 Helpline &amp; Branch Support
              </div>
              <a href="tel:+919899974500" className="flex items-center gap-2 text-sm font-bold text-[#0A3670] dark:text-blue-100">
                <Phone className="w-4 h-4 text-[#1565C0]" />
                <span>+91 9899974500</span>
              </a>
              <a href="mailto:info@globaltravelservices.live" className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#1565C0]" />
                <span>info@globaltravelservices.live</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 text-base font-semibold">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateHome) onNavigateHome();
                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2 px-3 rounded-lg text-left ${
                  currentPage === 'home'
                    ? isEcoMode ? 'bg-blue-900/60 text-blue-200 font-bold' : 'bg-blue-100/70 text-[#1565C0] font-bold'
                    : isEcoMode ? 'hover:bg-blue-900/40 text-slate-100' : 'hover:bg-blue-50 text-[#0A3670]'
                }`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateAbout) onNavigateAbout();
                  else {
                    const el = document.getElementById('why-us');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`py-2 px-3 rounded-lg text-left ${
                  currentPage === 'about'
                    ? isEcoMode ? 'bg-blue-900/60 text-blue-200 font-bold' : 'bg-blue-100/70 text-[#1565C0] font-bold'
                    : isEcoMode ? 'hover:bg-blue-900/40 text-slate-100' : 'hover:bg-blue-50 text-[#0A3670]'
                }`}
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateTouristVisa) onNavigateTouristVisa();
                }}
                className={`py-2 px-3 rounded-lg text-left flex items-center justify-between ${
                  currentPage === 'tourist-visa'
                    ? isEcoMode ? 'bg-blue-900/60 text-blue-200 font-bold' : 'bg-blue-100/70 text-[#1565C0] font-bold'
                    : isEcoMode ? 'hover:bg-blue-900/40 text-slate-100' : 'hover:bg-blue-50 text-[#0A3670]'
                }`}
              >
                <span>Tourist Visa</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-[#1565C0] dark:text-blue-300">
                  Featured
                </span>
              </button>

              {/* Visa Services Accordion in Mobile */}
              <div className={`rounded-xl border p-3 ${isEcoMode ? 'border-blue-900 bg-blue-950/30' : 'border-slate-100 bg-slate-50/60'}`}>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2">
                  Visa Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {visaServicesList.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.category === 'tourist' && onNavigateTouristVisa) {
                          onNavigateTouristVisa();
                        } else {
                          onOpenApply(item.category);
                        }
                      }}
                      className="text-left py-1.5 px-2 rounded-lg hover:text-[#1565C0] hover:bg-white/60 dark:hover:bg-blue-900/40 flex items-center gap-2"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#1565C0]" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Passport Services Accordion in Mobile */}
              <div className={`rounded-xl border p-3 ${isEcoMode ? 'border-blue-900 bg-blue-950/30' : 'border-slate-100 bg-slate-50/60'}`}>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2">
                  Passport &amp; Legal Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {passportServicesList.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenApply('tourist');
                      }}
                      className="text-left py-1.5 px-2 rounded-lg hover:text-[#1565C0] hover:bg-white/60 dark:hover:bg-blue-900/40 flex items-center gap-2"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#1565C0]" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg ${isEcoMode ? 'hover:bg-blue-900/40' : 'hover:bg-blue-50'}`}
              >
                Countries
              </a>

              <a
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg ${isEcoMode ? 'hover:bg-blue-900/40' : 'hover:bg-blue-50'}`}
              >
                3D Passport &amp; Visa Shelf
              </a>

              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg ${isEcoMode ? 'hover:bg-blue-900/40' : 'hover:bg-blue-50'}`}
              >
                Application Process
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg ${isEcoMode ? 'hover:bg-blue-900/40' : 'hover:bg-blue-50'}`}
              >
                Contact Us
              </a>

              <div className={`pt-4 border-t flex flex-col gap-2.5 ${isEcoMode ? 'border-blue-900' : 'border-slate-200'}`}>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckRequirements();
                  }}
                  className={`w-full py-3 text-center text-sm font-bold border rounded-xl ${
                    isEcoMode
                      ? 'border-blue-700 text-blue-100 hover:bg-blue-900/40'
                      : 'border-[#0A3670]/20 text-[#0A3670] hover:bg-blue-50'
                  }`}
                >
                  Check Requirements
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-3.5 text-center text-sm font-bold bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white rounded-xl shadow-md hover:shadow-lg"
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
