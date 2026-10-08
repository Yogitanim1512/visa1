import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Eye,
  Hand,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenApply: (category?: any) => void;
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
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#why-us' },
    { label: 'Visa Services', href: '#services' },
    { label: 'Countries', href: '#destinations' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const servicesList = [
    { label: 'Tourist Visa', category: 'tourist' },
    { label: 'Student Visa', category: 'student' },
    { label: 'Business Visa', category: 'business' },
    { label: 'Work Visa', category: 'work' },
    { label: 'Fresh / Renewal Passport', category: 'passport' },
    { label: 'Urgent Passport', category: 'passport' },
    { label: 'Minor Passport', category: 'passport' },
    { label: 'Lost / Damaged Passport', category: 'passport' },
    { label: 'Name Change in Gazette', category: 'passport' },
    { label: 'Apostille Services', category: 'passport' },
    { label: 'Holiday Packages', category: 'tourist' },
  ];

  const officeLocations = [
    {
      title: 'Greater Noida Office',
      address: 'Office-1206, 12th Floor, Gaur City Mall, Greater Noida West',
      mapUrl: 'https://share.google/ObyRiEr86n6omXGNf',
    },
    {
      title: 'Delhi Office',
      address: 'Hemkunt Chambers, 1203-B, Plot No. 89, Nehru Place, New Delhi - 110019',
      mapUrl: 'https://share.google/p08S0cap6gT3FiexJ',
    },
    {
      title: 'Lucknow Office',
      address: '20A, Lower Ground Floor, Burlington Arcade Mall, Vidhan Sabha Road, Lucknow - 226001',
      mapUrl: 'https://share.google/v4WdWdn7swurGxRJR',
    },
    {
      title: 'Gurugram Office',
      address: 'LG-006, Spring House, DLF Grand Mall, Mehrauli-Gurgaon Rd, Sector 28, DLF Phase 1, Gurugram - 122002',
      mapUrl: 'https://share.google/RKzFLR1uKv7AhLp9y',
    },
    {
      title: 'Tilak Nagar Office',
      address: '3rd Floor, double story, 5/58, Street No. 1, near Metro Station Gate, Old Market, Block 2, Tilak Nagar, Delhi, 110018, India',
      mapUrl: 'https://share.google/FNwU4BUVvCiPTwO6N',
    },
  ];

  return (
    <footer 
      id="contact"
      role="contentinfo"
      className={`border-t transition-colors ${
        isEcoMode
          ? 'bg-[#040d1a] border-blue-950 text-slate-200'
          : 'bg-[#07244c] border-[#0a3670] text-white'
      }`}
    >
      {/* =========================================
           FOOTER MAIN
      ========================================== */}
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* =================================
                 COLUMN 1 - BRAND (lg:col-span-4)
            ================================== */}
            <div className="lg:col-span-4 space-y-6">
              <a 
                href="/" 
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl"
                aria-label="Global Visa and Passport Services Home"
              >
                <Logo className="h-12 w-auto" variant="white" />
              </a>


              <p className="text-sm sm:text-base text-blue-100/85 leading-relaxed font-normal max-w-sm">
                Your trusted partner for professional visa consultancy services. We make your international travel dreams simpler, easier and stress-free.
              </p>

              {/* Social Media */}
              <div className="pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-blue-300 mb-3">
                  Connect With Us
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1565C0] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-blue-400 hover:scale-105"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                  </a>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-pink-400 hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/yogita-nim-b7a22b380/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0077B5] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-blue-400 hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                  </a>

                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-red-400 hover:scale-105"
                  >
                    <Youtube className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>

              {/* Consultation Callout */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenApply()}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#1565C0] to-[#1E88E5] text-white hover:from-[#0d47a1] hover:to-[#1565C0] transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 border border-blue-400/30"
                >
                  <span>Book Free Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* =================================
                 COLUMN 2 - QUICK LINKS (lg:col-span-2)
            ================================== */}
            <div className="lg:col-span-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm text-blue-100/80">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-2 hover:text-white transition-colors duration-150"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================
                 COLUMN 3 - VISA SERVICES (lg:col-span-3)
            ================================== */}
            <div className="lg:col-span-3">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Services
              </h3>

              <ul className="space-y-2.5 text-sm text-blue-100/80">
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => onOpenApply(service.category)}
                      className="group flex items-center gap-2 text-left hover:text-white transition-colors duration-150 focus:outline-none"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
                      <span className="leading-snug">{service.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================
                 COLUMN 4 - CONTACT (lg:col-span-3)
            ================================== */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Get In Touch
              </h3>

              <div className="space-y-4 text-sm text-blue-100/90">
                
                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-0.5">
                      Phone
                    </span>
                    <a 
                      href="tel:+919899974500" 
                      className="font-semibold text-white hover:text-blue-200 transition-colors tracking-wide"
                    >
                      +91 9899974500
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-0.5">
                      Email
                    </span>
                    <a 
                      href="mailto:info@globaltravelservices.live" 
                      className="font-medium text-white hover:text-blue-200 transition-colors break-all"
                    >
                      info@globaltravelservices.live
                    </a>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="pt-2">
                  <div className="text-xs uppercase font-bold tracking-wider text-blue-300 mb-3">
                    Our Branch Offices
                  </div>
                  <div className="space-y-3.5 max-h-[360px] overflow-y-auto pr-1">
                    {officeLocations.map((office, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-all text-xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            {office.title}
                          </span>
                          <a 
                            href={office.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-blue-300 hover:text-white inline-flex items-center gap-0.5 hover:underline"
                            title="View on Google Maps"
                          >
                            <span>Map</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <a 
                          href={office.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-100/75 hover:text-white transition-colors block leading-relaxed"
                        >
                          {office.address}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================
           FOOTER BOTTOM
      ========================================== */}
      <div className="border-t border-blue-800/60 bg-[#051c3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200/80 text-center md:text-left">
            
            {/* Copyright & Developer Credit */}
            <div className="space-y-1">
              <p className="font-normal">
                &copy; {currentYear} <strong className="font-bold text-white">Global Visa &amp; Passport Services</strong>. All Rights Reserved.
              </p>
              <p className="text-blue-300/80">
                Designed &amp; Developed By{' '}
                <a 
                  href="https://www.linkedin.com/in/yogita-nim-b7a22b380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-blue-200 underline decoration-blue-400 underline-offset-2 transition-colors"
                >
                  Yogita Nim
                </a>
              </p>
            </div>

            {/* Bottom Links & Accessibility shortcuts */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-blue-200/80 font-medium">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span aria-hidden="true" className="text-blue-400/50">|</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
              <span aria-hidden="true" className="text-blue-400/50">|</span>
              <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              <span aria-hidden="true" className="text-blue-400/50">|</span>

              <button
                type="button"
                onClick={onOpenA11y}
                className="hover:text-white inline-flex items-center gap-1 transition-colors"
                title="Accessibility Preferences"
              >
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Accessibility</span>
              </button>

              <span aria-hidden="true" className="text-blue-400/50">|</span>

              <button
                type="button"
                onClick={onOpenGesture}
                className="hover:text-white inline-flex items-center gap-1 transition-colors"
                title="AI Gestures"
              >
                <Hand className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Gestures</span>
              </button>

              <span aria-hidden="true" className="text-blue-400/50">|</span>

              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-white inline-flex items-center gap-1 transition-colors group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Top</span>
              </button>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};
