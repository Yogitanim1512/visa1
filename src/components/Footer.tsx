import React from 'react';
import { 
  Leaf, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Eye,
  Hand
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenApply: () => void;
  onOpenA11y: () => void;
  onOpenGesture: () => void;
  isEcoMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenA11y,
  onOpenGesture,
  isEcoMode,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      role="contentinfo"
      className={`border-t transition-colors ${
        isEcoMode
          ? 'bg-[#040e1c] border-blue-900/40 text-slate-300'
          : 'bg-[#0A3670] border-[#082b5a] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Eco Statement (span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <a
              href="#"
              className="inline-block shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
              aria-label="Global Visa and Passport Services - Back to top"
            >
              <Logo className="h-14 w-auto" variant="white" />
            </a>

            <p className="text-sm text-blue-100/80 leading-relaxed max-w-sm font-normal">
              Trusted visa and passport consultancy dedicated to seamless international travel, student mobility, executive golden visas, and corporate immigration with paperless digital workflows.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-blue-200/90 font-medium">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Carbon-Neutral Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Regulated &amp; Registered Immigration Counsel</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/75">
              <li><a href="#destinations" className="hover:text-white transition-colors">Canada Visa &amp; PR</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United Kingdom Standard</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United States (B1/B2, F1)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Australia Subclass 600</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Dubai / UAE Express eVisa</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Schengen Area (29 Nations)</a></li>
            </ul>
          </div>

          {/* Column 3: Visa Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Visa Services
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/75">
              <li><a href="#services" className="hover:text-white transition-colors">Tourist &amp; Leisure Visa</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">International Student Visa</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business &amp; Corporate Travel</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Skilled Worker Relocation</a></li>
              <li><a href="#archive" className="hover:text-white transition-colors">3D Passport &amp; Visa Shelf</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Consular Contact
            </h4>
            <ul className="space-y-3 text-sm text-blue-100/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>Global Consular Plaza, Suite 400, International Terminal Way</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <a href="mailto:support@globalvisapassport.com" className="hover:text-white transition-colors">support@globalvisapassport.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 shrink-0" />
                <a href="tel:+18005558472" className="hover:text-white transition-colors">+1 (800) 555-VISA</a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-blue-800/60">
              <button
                type="button"
                onClick={onOpenApply}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#1565C0] text-white hover:bg-[#1a73e8] transition-colors shadow-sm"
              >
                Start Your Dossier
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/70">
          <div>
            &copy; {new Date().getFullYear()} Global Visa &amp; Passport Services. All rights reserved. Registered Immigration Consultancy.
          </div>

          {/* Accessibility Quick Dock and Back to Top */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenA11y}
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="Open Accessibility Controls"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Accessibility Tools</span>
            </button>
            <span aria-hidden="true">&middot;</span>
            <button
              type="button"
              onClick={onOpenGesture}
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="Open AI Gestures"
            >
              <Hand className="w-3.5 h-3.5" />
              <span>AI Gestures</span>
            </button>
            <span aria-hidden="true">&middot;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
