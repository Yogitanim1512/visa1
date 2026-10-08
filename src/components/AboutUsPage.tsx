import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Globe2, 
  Clock, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  HeartHandshake, 
  Compass, 
  Sparkles, 
  FileCheck,
  TrendingUp,
  FileText,
  Plane
} from 'lucide-react';
import { TRUST_METRICS } from '../data/visaData';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onOpenApply: (category?: any) => void;
  onOpenCheckRequirements?: () => void;
  isEcoMode: boolean;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onOpenApply,
  onOpenCheckRequirements,
  isEcoMode,
}) => {
  const leadershipPillars = [
    {
      title: 'Our Mission',
      desc: 'To simplify international mobility by offering transparent, reliable, and expedited visa and passport consultancy services with zero bureaucratic stress.',
      icon: Compass,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Our Vision',
      desc: 'To be the most trusted global visa partner across India and worldwide, empowering travelers, students, and businesses to reach any horizon with complete confidence.',
      icon: Globe2,
      color: 'from-blue-700 to-cyan-600',
    },
    {
      title: 'Integrity & Compliance',
      desc: 'Strict adherence to international diplomatic guidelines, MEA regulations, and data confidentiality standards to safeguard your dossier every step of the journey.',
      icon: ShieldCheck,
      color: 'from-indigo-600 to-blue-800',
    },
  ];

  const coreMilestones = [
    { year: '2014', title: 'Foundation', desc: 'Started operations in New Delhi helping outbound leisure & corporate travelers.' },
    { year: '2017', title: 'Expansion to NCR', desc: 'Opened Greater Noida West flagship office inside Gaur City Mall.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Launched paperless digital dossier auditing and passport assistance.' },
    { year: '2022', title: 'Regional Footprint', desc: 'Opened Lucknow Burlington Arcade and Gurugram corporate liaison hubs.' },
    { year: '2024+', title: '45,000+ Successes', desc: 'Achieved an industry-leading 99.2% consular visa and passport approval record.' },
  ];

  const officeLocations = [
    {
      city: 'Greater Noida Office',
      address: 'Office-1206, 12th Floor, Gaur City Mall, Greater Noida West',
      mapUrl: 'https://share.google/ObyRiEr86n6omXGNf',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      phone: '+91 9899974500'
    },
    {
      city: 'Delhi Office',
      address: 'Hemkunt Chambers, 1203-B, Plot No. 89, Nehru Place, New Delhi - 110019',
      mapUrl: 'https://share.google/p08S0cap6gT3FiexJ',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      phone: '+91 9899974500'
    },
    {
      city: 'Lucknow Office',
      address: '20A, Lower Ground Floor, Burlington Arcade Mall, Vidhan Sabha Road, Lucknow - 226001',
      mapUrl: 'https://share.google/v4WdWdn7swurGxRJR',
      hours: 'Mon - Sat: 10:00 AM - 6:30 PM',
      phone: '+91 9899974500'
    },
    {
      city: 'Gurugram Corporate Office',
      address: 'Spaze i-Tech Park, Sector 49, Sohna Road, Gurugram, Haryana - 122018',
      mapUrl: 'https://maps.google.com/?q=Spaze+i-Tech+Park+Gurugram',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM',
      phone: '+91 9899974500'
    },
  ];

  const valuePoints = [
    {
      title: 'Dedicated Case Specialists',
      desc: 'Each applicant is paired with an experienced visa consultant who audits your documentation before consular submission.',
      icon: Users
    },
    {
      title: 'End-to-End Passport Support',
      desc: 'From fresh passport registration, Tatkaal urgent reissue, to Gazette name correction and MEA Apostille attestation.',
      icon: FileCheck
    },
    {
      title: 'Transparent Pricing & Tracking',
      desc: 'Zero hidden consular surcharges or unexpected fees. Direct real-time SMS & email milestone notifications.',
      icon: TrendingUp
    },
    {
      title: 'Global Embassy Reach',
      desc: 'Processing tourist, student, business, and employment visas for over 75+ countries including USA, UK, Canada, Schengen, Australia & Gulf.',
      icon: Plane
    }
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      isEcoMode ? 'bg-[#050e1a] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Breadcrumb / Top Bar */}
      <div className={`border-b py-3 px-4 sm:px-6 lg:px-8 text-xs font-medium ${
        isEcoMode ? 'bg-[#071933] border-blue-900/60 text-slate-300' : 'bg-white border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBackToHome}
              className="text-[#1565C0] hover:underline font-bold"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <span className={isEcoMode ? 'text-white' : 'text-slate-700'}>About Us</span>
          </div>

          <button
            onClick={onBackToHome}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              isEcoMode 
                ? 'bg-blue-950 text-blue-200 hover:bg-blue-900 border border-blue-800' 
                : 'bg-blue-50 text-[#0A3670] hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <span>← Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-16 sm:py-24 border-b ${
        isEcoMode ? 'bg-gradient-to-b from-[#071933] to-[#050e1a] border-blue-900/60' : 'bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-slate-200'
      }`}>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border bg-blue-100/70 text-[#0A3670] border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-[#1565C0]" />
              <span>About Global Visa &amp; Passport Services</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}>
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3670] via-[#1565C0] to-blue-500 dark:from-blue-400 dark:to-cyan-300">
                International Travel &amp; Visas
              </span>
            </h1>

            <p className={`text-lg sm:text-xl leading-relaxed font-normal mb-8 ${
              isEcoMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              For over a decade, we have been simplifying international mobility for Indian travelers, students, business delegates, and families. From embassy visa approvals to passport documentation, we transform stressful bureaucratic hurdles into smooth, predictable journeys.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenApply()}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082b59] hover:to-[#0d47a1] shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#offices"
                className={`px-6 py-3.5 rounded-xl text-sm font-bold border transition-all ${
                  isEcoMode 
                    ? 'border-blue-800 bg-[#091e3d] text-blue-200 hover:bg-blue-900' 
                    : 'border-slate-300 bg-white text-[#0A3670] hover:bg-slate-100 shadow-sm'
                }`}
              >
                Find Nearest Branch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className={`py-12 border-b ${
        isEcoMode ? 'bg-[#061427] border-blue-950' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-2xl">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1565C0] dark:text-blue-400 mb-1">
                  {metric.value}
                </div>
                <div className={`text-sm font-bold ${isEcoMode ? 'text-slate-200' : 'text-[#0A3670]'}`}>
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Story & Mission Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border aspect-[4/3] bg-slate-900 border-blue-100 dark:border-blue-900">
              <img
                src="/src/assets/images/hero_global_travel_1791373305548.jpg"
                alt="Global Visa consultancy team"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3670]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-[#071933]/95 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A3670] to-[#1565C0] flex items-center justify-center text-white shrink-0 font-black text-xl shadow-md">
                  GV
                </div>
                <div>
                  <div className={`text-sm font-bold ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                    Global Visa &amp; Passport Services
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-300">
                    Trusted by 45,000+ Travelers Nationwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2">
              <span>Who We Are</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6 ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}>
              Building Pathways to the World with Integrity &amp; Speed
            </h2>

            <div className={`space-y-4 text-base leading-relaxed ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                Founded on the belief that international borders should be accessible to anyone with valid aspirations, <strong>Global Visa &amp; Passport Services</strong> operates as a full-service immigration, visa advisory, and passport facilitation bureau.
              </p>
              <p>
                Whether it is a family holiday to Schengen Europe, an undergraduate degree at top Canadian universities, a swift business delegation into London, or urgent Tatkaal passport issuance, our certified case managers provide transparent, end-to-end guidance from preliminary eligibility review until passport return.
              </p>
              <p>
                We do not believe in cookie-cutter solutions. Every country has distinct bilateral requirements, financial solvency expectations, and submission queues. Our team stays continuously updated on consular rule changes, visa slot dynamics, and MEA Apostille regulations to prevent costly delays.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid: Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-24">
          {leadershipPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border transition-all duration-300 ${
                  isEcoMode 
                    ? 'bg-[#071933] border-blue-900/60 hover:border-blue-700' 
                    : 'bg-white border-slate-200/80 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Our Advisory (4 Points) */}
      <section className={`py-20 border-y ${
        isEcoMode ? 'bg-[#061427] border-blue-950' : 'bg-blue-50/50 border-blue-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
              Why Clients Choose Global Visa
            </h2>
            <p className={`text-base ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
              High-touch personal care backed by state-of-the-art document processing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all ${
                    isEcoMode 
                      ? 'bg-[#081c38] border-blue-900 text-slate-200' 
                      : 'bg-white border-slate-200/90 text-slate-800 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#1565C0] dark:text-blue-300 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isEcoMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey & Timeline */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2">
            Our Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl font-black ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
            A Decade of Excellence &amp; Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {coreMilestones.map((m, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isEcoMode 
                  ? 'bg-[#071933] border-blue-900/60 text-slate-200' 
                  : 'bg-white border-slate-200 shadow-sm text-slate-800'
              }`}
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-blue-100 dark:bg-blue-950 text-[#1565C0] dark:text-blue-300 mb-3">
                  {m.year}
                </span>
                <h3 className={`text-base font-bold mb-2 ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                  {m.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isEcoMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Branch Offices Section */}
      <section id="offices" className={`py-20 border-t ${
        isEcoMode ? 'bg-[#061427] border-blue-950' : 'bg-slate-100/70 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2">
              Physical Presence
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black mb-3 ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
              Visit Our Regional Offices
            </h2>
            <p className={`text-sm ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Walk in for face-to-face consultation, physical passport submission, or notarization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeLocations.map((office, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  isEcoMode 
                    ? 'bg-[#081c38] border-blue-900 hover:border-blue-700 text-slate-200' 
                    : 'bg-white border-slate-200 shadow-md hover:shadow-xl text-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <h3 className={`text-base font-bold ${isEcoMode ? 'text-white' : 'text-[#0A3670]'}`}>
                      {office.city}
                    </h3>
                  </div>
                  <p className={`text-xs leading-relaxed mb-4 ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {office.address}
                  </p>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-blue-900/60 mt-4 flex items-center justify-between">
                  <a 
                    href={`tel:${office.phone.replace(/\s+/g, '')}`} 
                    className="text-xs font-bold text-[#1565C0] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>

                  <a 
                    href={office.mapUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-[#1565C0] hover:underline flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className={`py-16 sm:py-20 text-center ${
        isEcoMode ? 'bg-[#040d1a] text-white' : 'bg-[#0A3670] text-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Begin Your Visa or Passport Journey?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our senior immigration specialists today and enjoy guaranteed document precision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenApply()}
              className="px-8 py-4 rounded-xl text-base font-bold bg-white text-[#0A3670] hover:bg-amber-300 hover:text-slate-900 shadow-xl transition-all flex items-center gap-2"
            >
              <span>Apply For Visa Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onBackToHome}
              className="px-8 py-4 rounded-xl text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
