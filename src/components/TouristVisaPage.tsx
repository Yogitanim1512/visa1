import React, { useState } from 'react';
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  CreditCard, 
  FileText, 
  AlertCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Sparkles, 
  Globe2, 
  Users, 
  Search, 
  CheckSquare, 
  ChevronDown, 
  ExternalLink,
  HelpCircle,
  Award,
  Luggage,
  Compass,
  FileCheck2,
  DollarSign
} from 'lucide-react';
import { VisaCategory } from '../types';

interface TouristVisaPageProps {
  onBackToHome: () => void;
  onOpenApply: (category?: VisaCategory) => void;
  onOpenCheckRequirements?: (countryId?: string, category?: VisaCategory) => void;
  isEcoMode: boolean;
}

interface DestinationVisa {
  id: string;
  country: string;
  region: 'europe' | 'asia' | 'americas' | 'oceania' | 'middle-east';
  badge: string;
  flag: string;
  image: string;
  title: string;
  processingTime: string;
  validity: string;
  stayDuration: string;
  estFee: string;
  approvalRate: string;
  highlights: string[];
  description: string;
  countryId?: string;
}

export const TouristVisaPage: React.FC<TouristVisaPageProps> = ({
  onBackToHome,
  onOpenApply,
  onOpenCheckRequirements,
  isEcoMode,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'doc-1': true,
    'doc-2': true,
  });

  // Quick calculator state
  const [calcCountry, setCalcCountry] = useState('schengen');
  const [calcTravelers, setCalcTravelers] = useState('1');
  const [calcProfile, setCalcProfile] = useState('salaried');

  const touristDestinations: DestinationVisa[] = [
    {
      id: 'schengen',
      country: 'Europe / Schengen Area',
      region: 'europe',
      badge: 'Most Popular',
      flag: '🇪🇺',
      image: '/src/assets/images/tourist_dest_europe_1791486496540.jpg',
      title: 'Uniform Schengen Short-Stay Visa (Type C)',
      processingTime: '10 – 15 Working Days',
      validity: 'Up to 90 Days per 180 Days',
      stayDuration: 'Max 90 Days',
      estFee: '€90 Embassy Fee',
      approvalRate: '98.6%',
      countryId: 'schengen',
      description: 'Single borderless travel permit granting access to 29 European countries including France, Switzerland, Germany, Italy, Austria, Spain, and Greece.',
      highlights: [
        'Free borderless travel across 29 Schengen states',
        'Embassy slot booking (VFS / TLScontact / BLS)',
        'Approved travel health insurance coverage included',
        'Verified dummy flight & hotel vouchers'
      ]
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      region: 'europe',
      badge: 'Priority Slots Available',
      flag: '🇬🇧',
      image: '/src/assets/images/dest_uk_london_1791373330952.jpg',
      title: 'UK Standard Visitor Visa (Leisure & Sightseeing)',
      processingTime: '3 – 15 Business Days',
      validity: '6 Months to 10 Years Multiple',
      stayDuration: 'Up to 6 Months per visit',
      estFee: '£115 Embassy Fee',
      approvalRate: '99.1%',
      countryId: 'uk',
      description: 'Explore London, Edinburgh, Manchester, and the scenic Scottish Highlands with high-confidence document preparation and fast-track processing.',
      highlights: [
        'Options for 6-month, 2-year, 5-year, or 10-year validity',
        'VFS priority & super priority appointment coordination',
        'Comprehensive financial statement audits',
        'Cover letter matching UK Visas and Immigration (UKVI) standards'
      ]
    },
    {
      id: 'dubai',
      country: 'Dubai / United Arab Emirates',
      region: 'middle-east',
      badge: 'Express 24-48h Approval',
      flag: '🇦🇪',
      image: '/src/assets/images/hero_global_travel_1791373305548.jpg',
      title: 'UAE Express Tourist eVisa (30 & 60 Days)',
      processingTime: '24 – 48 Hours',
      validity: '60 Days from issue',
      stayDuration: '30 or 60 Days Single/Multiple',
      estFee: 'From $95 USD',
      approvalRate: '99.8%',
      countryId: 'dubai',
      description: 'Ultra-fast paperless visa processing for holidaymakers visiting Dubai, Abu Dhabi, and Sharjah with zero physical embassy visits needed.',
      highlights: [
        '100% digital online approval without physical embassy visit',
        'Fastest approval turnaround in as little as 24 hours',
        'OTB (Ok To Board) status update included',
        'Family and child visa bundle assistance'
      ]
    },
    {
      id: 'maldives-asia',
      country: 'Tropical Asia (Maldives / Bali / Thailand)',
      region: 'asia',
      badge: 'Honeymoon & Leisure',
      flag: '🏝️',
      image: '/src/assets/images/tourist_dest_asia_1791486524598.jpg',
      title: 'South-East Asia & Island Tourist Visas',
      processingTime: '1 – 4 Business Days',
      validity: '30 to 90 Days',
      stayDuration: 'Up to 30/60 Days',
      estFee: 'From $45 USD',
      approvalRate: '99.9%',
      description: 'Exotic beaches, overwater villas, and rich culture. Seamless digital eVisa and arrival clearance for Thailand, Bali (Indonesia), Singapore, and Maldives.',
      highlights: [
        'Instant digital e-Visa on Arrival (e-VoA) pre-approval',
        'Customized day-wise resort holiday itineraries',
        'Mandatory health & immigration arrival card assistance',
        'Instant passport validity verification'
      ]
    },
    {
      id: 'usa',
      country: 'United States',
      region: 'americas',
      badge: '10-Year Multiple Entry',
      flag: '🇺🇸',
      image: '/src/assets/images/tourist_visa_hero_1791486466535.jpg',
      title: 'USA B1/B2 Tourist & Visitor Visa',
      processingTime: 'Dependent on Consular Slots',
      validity: 'Up to 10 Years Multiple Entry',
      stayDuration: 'Up to 6 Months per entry',
      estFee: '$185 USD Consular Fee',
      approvalRate: '96.8%',
      countryId: 'usa',
      description: 'Coast-to-coast American vacation, Disney World, national parks, or family visits. Full DS-160 application guidance, slot monitoring, and mock interviews.',
      highlights: [
        'Complete DS-160 filling with zero margin for errors',
        'Automated consular slot monitoring for earliest dates',
        'Rigorous consular interview preparation & mock Q&A',
        'Strong ties to home country dossier compilation'
      ]
    },
    {
      id: 'canada',
      country: 'Canada',
      region: 'americas',
      badge: 'Long-Term Multiple',
      flag: '🇨🇦',
      image: '/src/assets/images/dest_canada_nature_1791373317375.jpg',
      title: 'Canada Temporary Resident Visa (TRV - Visitor)',
      processingTime: '15 – 25 Business Days',
      validity: 'Up to 10 Years (Passport Validity)',
      stayDuration: 'Up to 6 Months per visit',
      estFee: '$100 CAD + Biometrics',
      approvalRate: '98.5%',
      countryId: 'canada',
      description: 'Visit family, Niagara Falls, Banff National Park, or explore Vancouver and Toronto with expert IRCC portal application management.',
      highlights: [
        'IRCC digital portal submission & biometric appointment slot',
        'Invitation letter and proof of ties vetting',
        'Travel history and financial documentation roadmap',
        'Super Visa assistance for parents & grandparents available'
      ]
    },
    {
      id: 'australia',
      country: 'Australia',
      region: 'oceania',
      badge: 'Digital eVisa Stream',
      flag: '🇦🇺',
      image: '/src/assets/images/dest_australia_sydney_1791373341768.jpg',
      title: 'Australia Visitor Visa (Subclass 600)',
      processingTime: '7 – 20 Business Days',
      validity: '3 Months to 1 Year',
      stayDuration: 'Up to 3 Months per entry',
      estFee: '$190 AUD',
      approvalRate: '98.4%',
      countryId: 'australia',
      description: 'Sydney Opera House, Great Barrier Reef, Gold Coast, and outback adventures. Complete ImmiAccount handling and Genuine Temporary Entrant statement.',
      highlights: [
        'Genuine Temporary Entrant (GTE) statement structuring',
        'ImmiAccount direct digital upload & biometric scheduling',
        'No physical passport deposit needed at the embassy',
        'Fast turnaround for clean travel profiles'
      ]
    }
  ];

  const filteredDestinations = selectedRegion === 'all'
    ? touristDestinations
    : touristDestinations.filter(d => d.region === selectedRegion);

  const documentChecklist = [
    {
      id: 'doc-1',
      category: 'Primary Passport & Identity',
      name: 'Original Passport',
      details: 'Must have at least 6 months validity from return date and minimum 2 blank pages.'
    },
    {
      id: 'doc-2',
      category: 'Primary Passport & Identity',
      name: 'Passport-Sized Photographs',
      details: 'Recent (within 3 months), white background, 35x45mm (or 50x50mm for US), 80% face coverage, matte/glossy finish without border.'
    },
    {
      id: 'doc-3',
      category: 'Financial Solvency Proof',
      name: 'Bank Account Statements (Last 6 Months)',
      details: 'Original bank statement stamped & signed by bank manager, demonstrating steady maintaining balance.'
    },
    {
      id: 'doc-4',
      category: 'Financial Solvency Proof',
      name: 'Income Tax Returns (ITR / Form 16)',
      details: 'ITR-V acknowledgement copies of the last 2 to 3 financial years, proving domestic tax compliance.'
    },
    {
      id: 'doc-5',
      category: 'Employment & Occupation Proof',
      name: 'Leave Sanction Letter / NOC from Employer',
      details: 'On official company letterhead stating employment tenure, approved travel dates, salary, and designating role.'
    },
    {
      id: 'doc-6',
      category: 'Employment & Occupation Proof',
      name: 'Salary Slips (Last 3 to 6 Months)',
      details: 'Official pay stubs matching the monthly salary credits shown on the bank statement.'
    },
    {
      id: 'doc-7',
      category: 'Travel & Accommodation Logistics',
      name: 'Confirmed Flight Itinerary / Return Reservation',
      details: 'Verifiable round-trip flight booking with PNR. Global Visa provides consular-approved hold reservations without buying expensive non-refundable tickets.'
    },
    {
      id: 'doc-8',
      category: 'Travel & Accommodation Logistics',
      name: 'Hotel Bookings & Day-Wise Tour Itinerary',
      details: 'Voucher confirmations matching every night of your stay plus a coherent day-to-day sightseeing schedule.'
    },
    {
      id: 'doc-9',
      category: 'Medical & Travel Protection',
      name: 'Overseas Travel Medical Insurance',
      details: 'Mandatory minimum €30,000 / $50,000 emergency medical and repatriation coverage valid across all visited countries.'
    },
  ];

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedDocsCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercent = Math.round((completedDocsCount / documentChecklist.length) * 100);

  const faqs = [
    {
      q: 'How much minimum bank balance is required for a tourist visa?',
      a: 'Requirements vary by destination. For European Schengen and UK tourist visas, consulates generally recommend having an average balance of ₹2.5 Lakhs to ₹4.5 Lakhs (or ~$3,000–$5,000 USD) per applicant for a 10–14 day trip, showing steady transactions rather than a sudden unexplained lump-sum deposit. Our specialists review your bank statements and guide you on the ideal balance presentation.'
    },
    {
      q: 'Do I need to buy non-refundable flight tickets before my visa is approved?',
      a: 'No! Embassies explicitly advise against purchasing non-refundable air tickets prior to visa decision. Global Visa provides consular-compliant verifiable flight reservations (with active airline PNR) and hotel vouchers specifically designed for visa filing. Once your visa is stamped, you can book your final flights at your convenience.'
    },
    {
      q: 'What is the success rate for first-time international travelers?',
      a: 'Even if you have a fresh, blank passport with zero travel history, you can successfully obtain Schengen, UK, Australian, or US tourist visas. The key lies in creating an airtight case file with strong proofs of economic and social ties to India (e.g., permanent job, property, business, family) and a well-reasoned cover letter. Our team specializes in first-time applicant dossiers, maintaining a 98%+ approval rate.'
    },
    {
      q: 'Can Global Visa help if I had a previous visa rejection?',
      a: 'Yes, absolutely. A previous visa rejection does not permanently disqualify you. We conduct an in-depth refusal analysis based on the consular refusal letter, identify the exact deficiency (such as unclear purpose of stay, questionable financial capacity, or vague itinerary), and rebuild a reinforced reapplication with a strong legal cover letter addressing every prior concern.'
    },
    {
      q: 'How far in advance should I start my tourist visa application?',
      a: 'We strongly recommend starting 45 to 90 days before your intended travel date. Most embassies (like Schengen and UK) allow filing up to 6 months in advance. Early filing ensures you secure prime biometric appointment dates, avoid peak season rush, and have ample time for flight/hotel deals.'
    },
    {
      q: 'What services are included in the Global Visa Tourist Package?',
      a: 'Our end-to-end service includes: initial profile assessment, custom document checklist, professional cover letter drafting, day-to-day itinerary planning, verifiable flight & hotel vouchers, embassy biometric appointment slot scheduling, application form verification, pre-interview orientation, and round-the-clock status tracking.'
    }
  ];

  return (
    <div className={`w-full min-h-screen transition-colors ${
      isEcoMode ? 'bg-[#040e1d] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>

      {/* =========================================
           TOP BREADCRUMB & BACK LINK
      ========================================== */}
      <div className={`border-b py-3 px-4 sm:px-6 lg:px-8 text-xs font-medium ${
        isEcoMode ? 'bg-[#08182f] border-blue-900/60 text-slate-300' : 'bg-white border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <button 
              type="button"
              onClick={onBackToHome}
              className="hover:text-[#1565C0] flex items-center gap-1 transition-colors focus:outline-none"
            >
              <span>Home</span>
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-slate-400">Visa Services</span>
            <span className="text-slate-400">/</span>
            <span className="font-bold text-[#1565C0] dark:text-blue-400">Tourist Visa Services</span>
          </div>

          <button
            type="button"
            onClick={onBackToHome}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1565C0] hover:underline"
          >
            <span>&larr; Back to Main Portal</span>
          </button>
        </div>
      </div>

      {/* =========================================
           HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 dark:border-blue-900/40">
        {/* Background Gradients */}
        <div className={`absolute inset-0 pointer-events-none ${
          isEcoMode 
            ? 'bg-gradient-to-b from-[#081b36] via-[#040e1d] to-[#040e1d]' 
            : 'bg-gradient-to-b from-blue-50/70 via-white to-slate-50'
        }`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Tourist & Visitor Visa Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Explore The World With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] via-blue-600 to-cyan-600">Guaranteed Visa Confidence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Turn your international travel dreams into reality. We manage end-to-end tourist visa documentation, embassy appointments, tailored itineraries, and verified hotel/flight vouchers for Europe (Schengen), UK, USA, Canada, Australia, UAE, and 70+ countries with an industry-best <strong className="text-[#1565C0] dark:text-blue-300">99.4% approval track record</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenApply('tourist')}
                  className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1565C0] to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Plane className="w-5 h-5" />
                  <span>Apply For Tourist Visa</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('destinations-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 border ${
                    isEcoMode
                      ? 'bg-blue-950/80 text-blue-200 border-blue-800 hover:bg-blue-900'
                      : 'bg-white text-[#0A3670] border-slate-300 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <Luggage className="w-5 h-5 text-[#1565C0]" />
                  <span>Browse 75+ Destinations</span>
                </button>

                <a
                  href="tel:+919899974500"
                  className={`px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 border ${
                    isEcoMode
                      ? 'bg-transparent text-slate-300 border-slate-700 hover:border-slate-500'
                      : 'bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>Call +91 9899974500</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-2xl mx-auto lg:mx-0">
                <div className={`p-3 rounded-xl border text-center ${
                  isEcoMode ? 'bg-blue-950/40 border-blue-900/60' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-xl sm:text-2xl font-black text-[#1565C0] dark:text-blue-400">99.4%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Approval Rate</div>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isEcoMode ? 'bg-blue-950/40 border-blue-900/60' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-xl sm:text-2xl font-black text-[#1565C0] dark:text-blue-400">75+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Countries Covered</div>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isEcoMode ? 'bg-blue-950/40 border-blue-900/60' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-xl sm:text-2xl font-black text-[#1565C0] dark:text-blue-400">24-48h</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Fast eVisa Turnaround</div>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isEcoMode ? 'bg-blue-950/40 border-blue-900/60' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-xl sm:text-2xl font-black text-[#1565C0] dark:text-blue-400">45k+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Happy Travelers</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-blue-900 group">
                <img
                  src="/src/assets/images/tourist_visa_hero_1791486466535.jpg"
                  alt="Happy international tourists holding passports at airport"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Visual Glass Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 w-fit backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>MEA & Consular Certified</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug">
                    Zero Bureaucracy. Stress-Free Vacation Planning.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Direct embassy appointment scheduling and professional dossier review.
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className={`hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 p-4 rounded-2xl shadow-xl border backdrop-blur-md ${
                isEcoMode ? 'bg-[#08182f]/95 border-blue-800 text-white' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900 text-[#1565C0] dark:text-blue-300 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Trusted Quality</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">10+ Years Consular Expertise</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
           WHY CHOOSE US FOR TOURIST VISAS
      ========================================== */}
      <section className={`py-12 sm:py-16 ${isEcoMode ? 'bg-[#061427]' : 'bg-white'} border-b border-slate-200/80 dark:border-blue-900/40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1565C0] dark:text-blue-400 mb-2">
              The Global Visa Advantage
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Holidaymakers Trust Us With Their Passports
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Unlike generic booking aggregators, our senior visa consultants audit every single sheet of your application before submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isEcoMode ? 'bg-blue-950/30 border-blue-900 hover:border-blue-700' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-[#1565C0] dark:text-blue-300 flex items-center justify-center mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Tailored Cover Letters
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Customized cover letters drafted by legal professionals articulating your genuine intent of return and holiday itinerary.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isEcoMode ? 'bg-blue-950/30 border-blue-900 hover:border-blue-700' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Priority Slot Booking
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Real-time tracking of VFS Global, TLScontact, and US Consular appointment queues to secure prime submission slots.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isEcoMode ? 'bg-blue-950/30 border-blue-900 hover:border-blue-700' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/60 text-cyan-600 dark:text-cyan-300 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Flight & Hotel Hold Proofs
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Verifiable embassy-compliant flight tickets and hotel vouchers so you never risk money on non-refundable tickets.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
              isEcoMode ? 'bg-blue-950/30 border-blue-900 hover:border-blue-700' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Previous Refusal Overhaul
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Experienced case managers who diagnose prior rejections and construct foolproof fresh applications with high success rates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
           FEATURED DESTINATIONS CATALOG
      ========================================== */}
      <section id="destinations-catalog" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1565C0] dark:text-blue-400 mb-1">
                Top Holiday Destinations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Choose Your Next Tourist Visa Destination
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select from our top holiday corridors with transparent processing times and clear requirements.
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-blue-950 text-xs font-semibold">
              {[
                { id: 'all', label: 'All Regions' },
                { id: 'europe', label: 'Europe (Schengen & UK)' },
                { id: 'middle-east', label: 'Dubai / UAE' },
                { id: 'asia', label: 'Tropical Asia' },
                { id: 'americas', label: 'USA & Canada' },
                { id: 'oceania', label: 'Australia' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedRegion(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    selectedRegion === tab.id
                      ? 'bg-[#1565C0] text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#1565C0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map(item => (
              <div
                key={item.id}
                className={`group rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isEcoMode
                    ? 'bg-[#08182f] border-blue-900/80 hover:border-blue-700'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                {/* Card Image Header */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#1565C0] text-white shadow-md">
                      {item.badge}
                    </span>
                    <span className="text-xl drop-shadow">{item.flag}</span>
                  </div>

                  {/* Country Name on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{item.country}</h3>
                    <p className="text-xs text-blue-200 font-medium truncate">{item.title}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metadata Pill Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div className={`p-2 rounded-xl ${isEcoMode ? 'bg-blue-950/60' : 'bg-slate-100'}`}>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Processing</span>
                        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-blue-500" />
                          {item.processingTime}
                        </span>
                      </div>

                      <div className={`p-2 rounded-xl ${isEcoMode ? 'bg-blue-950/60' : 'bg-slate-100'}`}>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Approval Rate</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                          {item.approvalRate}
                        </span>
                      </div>

                      <div className={`p-2 rounded-xl ${isEcoMode ? 'bg-blue-950/60' : 'bg-slate-100'}`}>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Stay Duration</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block truncate">
                          {item.stayDuration}
                        </span>
                      </div>

                      <div className={`p-2 rounded-xl ${isEcoMode ? 'bg-blue-950/60' : 'bg-slate-100'}`}>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Standard Fee</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block truncate">
                          {item.estFee}
                        </span>
                      </div>
                    </div>

                    {/* Included Highlights */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Features:</div>
                      {item.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 dark:border-blue-900/60 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenApply('tourist')}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1565C0] hover:bg-blue-700 shadow-sm hover:shadow transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {item.countryId && onOpenCheckRequirements && (
                      <button
                        type="button"
                        onClick={() => onOpenCheckRequirements(item.countryId, 'tourist')}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-colors ${
                          isEcoMode 
                            ? 'border-blue-800 text-blue-300 hover:bg-blue-900/50' 
                            : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                        title="Check Specific Requirements"
                      >
                        Checklist
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
           INTERACTIVE DOCUMENT CHECKLIST TOOL
      ========================================== */}
      <section className={`py-12 sm:py-16 ${isEcoMode ? 'bg-[#061427]' : 'bg-slate-100/70'} border-y border-slate-200/80 dark:border-blue-900/40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Checklist Left Header & Progress Meter */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-[#1565C0] dark:text-blue-300">
                <FileText className="w-3.5 h-3.5" />
                <span>Interactive Readiness Audit</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Tourist Visa Document Checklist & Audit
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A missing signature, invalid photograph dimension, or incomplete bank seal is the #1 reason for consular refusal. Use our interactive checklist to inspect your readiness before filing.
              </p>

              {/* Progress Card */}
              <div className={`p-5 rounded-2xl border ${
                isEcoMode ? 'bg-[#08182f] border-blue-900' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Dossier Readiness</span>
                  <span className="text-base font-black text-[#1565C0] dark:text-blue-400">{readinessPercent}% Ready</span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-blue-950 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${readinessPercent}%` }}
                  />
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-3 flex items-center justify-between">
                  <span>{completedDocsCount} of {documentChecklist.length} essential items verified</span>
                  {readinessPercent === 100 && (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready to file!
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-blue-900 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      const allChecked: Record<string, boolean> = {};
                      documentChecklist.forEach(d => allChecked[d.id] = true);
                      setCheckedDocs(allChecked);
                    }}
                    className="text-xs font-semibold text-[#1565C0] hover:underline"
                  >
                    Select All Items
                  </button>
                  <button
                    type="button"
                    onClick={() => setCheckedDocs({})}
                    className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Reset Checkmarks
                  </button>
                </div>
              </div>

              {/* Assistance Callout */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isEcoMode ? 'bg-blue-950/40 border-blue-800' : 'bg-blue-50/80 border-blue-200'
              }`}>
                <AlertCircle className="w-5 h-5 text-[#1565C0] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <strong className="block text-[#0A3670] dark:text-blue-200 mb-0.5">Need customized formats?</strong>
                  We provide authorized draft templates for employer NOCs, sponsorship letters, and financial affidavits.
                </div>
              </div>

            </div>

            {/* Checklist Right Item Cards */}
            <div className="lg:col-span-7 space-y-3">
              {documentChecklist.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? isEcoMode
                          ? 'bg-blue-950/60 border-blue-700/80 text-white'
                          : 'bg-white border-blue-300 shadow-sm'
                        : isEcoMode
                          ? 'bg-[#08182f]/50 border-blue-900/60 text-slate-300 hover:border-blue-800'
                          : 'bg-white/70 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-[#1565C0] text-white'
                          : 'border-2 border-slate-300 dark:border-slate-600 bg-transparent'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-bold ${
                          isChecked 
                            ? 'text-slate-900 dark:text-white' 
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {doc.name}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-blue-950 px-2 py-0.5 rounded">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {doc.details}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenApply('tourist')}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#1565C0] to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Send My Documents For Free Expert Audit</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
           4-STEP TOURIST VISA PROCESS WORKFLOW
      ========================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1565C0] dark:text-blue-400 mb-1">
              Hassle-Free Execution
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              How Our Tourist Visa Process Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              From the initial document upload to receiving your stamped passport, we streamline every consular checkpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between ${
              isEcoMode ? 'bg-[#08182f] border-blue-900' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#1565C0] font-black flex items-center justify-center text-lg mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Profile Assessment & Strategy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We analyze your travel purpose, previous passport visas, financial standing, and employment profile to recommend the optimal destination visa route.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/60 text-xs font-semibold text-[#1565C0]">
                Within 2 Hours
              </div>
            </div>

            {/* Step 2 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between ${
              isEcoMode ? 'bg-[#08182f] border-blue-900' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 font-black flex items-center justify-center text-lg mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Dossier Auditing & Cover Letter
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our case managers curate verified flight & hotel holds, audit your bank statements, and draft a high-impact personalized cover letter.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/60 text-xs font-semibold text-indigo-600">
                1 - 2 Business Days
              </div>
            </div>

            {/* Step 3 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between ${
              isEcoMode ? 'bg-[#08182f] border-blue-900' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 font-black flex items-center justify-center text-lg mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Biometrics & Appointment Slot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We book prime submission appointments at VFS Global / TLS / Embassy centres, complete the DS-160 or visa form, and prep you for interview questions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/60 text-xs font-semibold text-cyan-600">
                Guaranteed Slots
              </div>
            </div>

            {/* Step 4 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between ${
              isEcoMode ? 'bg-[#08182f] border-blue-900' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-black flex items-center justify-center text-lg mb-4">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Visa Grant & Safe Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time tracking of consular passport progress, secure courier delivery to your doorstep, and final pre-departure customs guidance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/60 text-xs font-semibold text-emerald-600">
                Stamped & Delivered
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
           QUICK ESTIMATOR / INQUIRY WIDGET
      ========================================== */}
      <section className={`py-12 sm:py-16 ${
        isEcoMode ? 'bg-[#07172e]' : 'bg-gradient-to-br from-[#0A3670] to-[#041d42]'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-blue-200 inline-block">
                Instant Planning Helper
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Plan Your Vacation Visa Timeline & Budget
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Choose your desired destination and applicant count to see standard timelines and initiate an expedited priority dossier review.
              </p>
              <div className="pt-2 space-y-2 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Initial Dossier Evaluation with No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Airline PNR and Hotel Confirmations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Physical Offices in Noida, Delhi, Lucknow & Gurugram</span>
                </div>
              </div>
            </div>

            {/* Form Widget Box */}
            <div className="lg:col-span-7 bg-white dark:bg-[#08182f] text-slate-800 dark:text-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#1565C0]" />
                <span>Tourist Visa Instant Assessment</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Destination
                  </label>
                  <select
                    value={calcCountry}
                    onChange={(e) => setCalcCountry(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 dark:border-blue-900 bg-slate-50 dark:bg-blue-950 font-medium focus:ring-2 focus:ring-[#1565C0] focus:outline-none"
                  >
                    <option value="schengen">Europe (Schengen 29 Countries)</option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="dubai">Dubai & UAE (eVisa)</option>
                    <option value="usa">United States (B1/B2)</option>
                    <option value="canada">Canada (Visitor TRV)</option>
                    <option value="australia">Australia (Subclass 600)</option>
                    <option value="asia">Thailand / Bali / Singapore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    No. of Travelers
                  </label>
                  <select
                    value={calcTravelers}
                    onChange={(e) => setCalcTravelers(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 dark:border-blue-900 bg-slate-50 dark:bg-blue-950 font-medium focus:ring-2 focus:ring-[#1565C0] focus:outline-none"
                  >
                    <option value="1">Solo Traveler (1 Adult)</option>
                    <option value="2">Couple (2 Adults)</option>
                    <option value="3">Family (3 Members)</option>
                    <option value="4+">Family / Group (4+ Members)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Employment Status
                  </label>
                  <select
                    value={calcProfile}
                    onChange={(e) => setCalcProfile(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 dark:border-blue-900 bg-slate-50 dark:bg-blue-950 font-medium focus:ring-2 focus:ring-[#1565C0] focus:outline-none"
                  >
                    <option value="salaried">Salaried Employee</option>
                    <option value="business">Business Owner / Director</option>
                    <option value="freelance">Freelance / Consultant</option>
                    <option value="retired">Senior Citizen / Retired</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Guidance Output */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 mb-5 text-xs text-slate-700 dark:text-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-[#0A3670] dark:text-blue-300">
                    Estimated Processing Duration:
                  </div>
                  <div>
                    {calcCountry === 'dubai' ? '24 to 48 Hours Express eVisa' : 
                     calcCountry === 'schengen' ? '10 to 15 Working Days (Book slots 4-6 weeks early)' :
                     calcCountry === 'uk' ? '3 to 15 Days (Priority options available)' :
                     calcCountry === 'usa' ? 'Slot dependent (Emergency requests possible)' :
                     '7 to 20 Business Days'}
                  </div>
                </div>

                <div className="text-right sm:text-left">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">
                    High Approval Profile
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-300">
                    Cover letter and NOC matching ready
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenApply('tourist')}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#1565C0] to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all flex items-center justify-center gap-2 text-sm focus:outline-none"
                >
                  <Plane className="w-4 h-4" />
                  <span>Start Application with These Details</span>
                </button>

                <a
                  href="tel:+919899974500"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm border border-slate-300 dark:border-blue-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Consultant</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
           FREQUENTLY ASKED QUESTIONS (FAQS)
      ========================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1565C0] dark:text-blue-400 mb-1">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Tourist Visa Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Everything you need to know about holiday visa compliance, financial criteria, and application timelines.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? isEcoMode
                        ? 'bg-[#08182f] border-blue-700'
                        : 'bg-white border-blue-300 shadow-sm'
                      : isEcoMode
                        ? 'bg-[#061427] border-blue-900/60'
                        : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#1565C0] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#1565C0]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-blue-900/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
           OFFICES & DIRECT CONTACT BANNER
      ========================================== */}
      <section className={`py-12 border-t ${
        isEcoMode ? 'bg-[#051122] border-blue-950 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Visit Us at Any of Our 4 Physical Locations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Greater Noida West (Gaur City Mall) · Nehru Place (New Delhi) · Burlington Arcade (Lucknow) · Spaze i-Tech (Gurugram)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919899974500"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9899974500</span>
              </a>

              <a
                href="mailto:info@globaltravelservices.live"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-blue-800 hover:bg-white dark:hover:bg-blue-900 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#1565C0]" />
                <span>info@globaltravelservices.live</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
