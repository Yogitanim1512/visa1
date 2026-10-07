import React from 'react';
import { 
  Compass, 
  Leaf, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Eye,
  Hand
} from 'lucide-react';

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
          ? 'bg-[#15100b] border-[#3d2c1d] text-[#e5dcce]'
          : 'bg-[#241a12] border-[#382b20] text-[#f6efe1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Eco Statement (span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <a
              href="#"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#f6efe1] group"
            >
              <div className="w-8 h-8 rounded-full bg-[#f6efe1] flex items-center justify-center text-[#241a12] shadow-md">
                <Compass className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-serif-ashen text-xl tracking-wide">
                Global Visa <span className="text-[#b89047] font-serif italic">&</span> Passport
              </span>
            </a>

            <p className="text-sm text-[#f6efe1]/75 leading-relaxed max-w-sm font-normal">
              Trusted visa and passport consultancy dedicated to seamless international travel, student mobility, and corporate immigration with paperless digital workflows.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#f6efe1]/70">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Carbon-Neutral Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>Regulated & Registered Immigration Counsel</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b89047] mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-[#f6efe1]/70">
              <li><a href="#destinations" className="hover:text-white transition-colors">Canada Visa & PR</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United Kingdom Standard</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">United States (B1/B2, F1)</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Australia Subclass 600</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Dubai / UAE Express eVisa</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Schengen Area (29 Nations)</a></li>
            </ul>
          </div>

          {/* Column 3: Visa Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b89047] mb-4">
              Visa Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#f6efe1]/70">
              <li><a href="#services" className="hover:text-white transition-colors">Tourist & Leisure Visa</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">International Student Visa</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business & Corporate Travel</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Skilled Worker Relocation</a></li>
              <li><a href="#archive" className="hover:text-white transition-colors">3D Consular Dossier Shelf</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Paperless Digital Dossier</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Accessibility */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b89047] mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-sm text-[#f6efe1]/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>support@globalvisapassport.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b89047] shrink-0" />
                <span>+1 (800) 456-VISA (8472)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b89047] shrink-0 mt-0.5" />
                <span>750 Global Gateway Blvd, Suite 400</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#382b20] flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenA11y}
                className="text-xs text-[#f6efe1]/80 hover:text-white flex items-center gap-1.5 p-1 rounded"
              >
                <Eye className="w-3.5 h-3.5 text-[#b89047]" />
                <span>Accessibility</span>
              </button>
              <span className="text-[#382b20]">·</span>
              <button
                type="button"
                onClick={onOpenGesture}
                className="text-xs text-[#f6efe1]/80 hover:text-white flex items-center gap-1.5 p-1 rounded"
              >
                <Hand className="w-3.5 h-3.5 text-[#b89047]" />
                <span>AI Gestures</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-[#382b20] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f6efe1]/60">
          <div>
            © {new Date().getFullYear()} Global Visa & Passport Services Consultancy. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#f6efe1]/80 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
