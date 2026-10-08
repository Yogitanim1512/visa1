import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Headset, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TRUST_METRICS } from '../data/visaData';

interface WhyChooseUsProps {
  onTalkExpert: () => void;
  onApplyClick: () => void;
  isEcoMode: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onTalkExpert,
  onApplyClick,
  isEcoMode,
}) => {
  return (
    <section 
      id="why-us" 
      aria-labelledby="why-heading"
      className={`py-20 sm:py-28 transition-colors ${
        isEcoMode ? 'bg-[#061427] text-slate-100' : 'bg-white text-[#0A3670]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Trust Block & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Visual Trust Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[4/3] border border-blue-100 dark:border-blue-900">
              <img
                src="/src/assets/images/hero_global_travel_1791373305548.jpg"
                alt="Professional visa consultation team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3670]/85 via-transparent to-transparent" />

              {/* 10+ Years Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-blue-400/40">
                <span className="text-4xl font-black tabular-nums text-white">10+</span>
                <span className="text-xs uppercase font-bold tracking-wider leading-snug text-blue-100">
                  Years of<br />Excellence
                </span>
              </div>
            </div>

            {/* Accreditation trust tag */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 font-medium">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#1565C0]" />
                <span>ICCRC &amp; MARA Registered Counsel</span>
              </span>
              <span>100% Confidential Dossier</span>
            </div>
          </div>

          {/* Right Column: Why Choose Us Copy & Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1565C0] mb-2.5">
              <span>Why Choose Global Visa &amp; Passport Services</span>
            </div>

            <h2 
              id="why-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 ${
                isEcoMode ? 'text-white' : 'text-[#0A3670]'
              }`}
            >
              Your Trusted Partner For{' '}
              <span className="text-[#1565C0]">Global Travel</span>
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed mb-8 font-normal ${
              isEcoMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We believe getting an international visa should never be stressful. Our veteran consultants deliver transparent advice, rigorous document auditing, and personalized casework from day one.
            </p>

            {/* 3 Core Pillars */}
            <div className="space-y-4 mb-8">
              
              <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                isEcoMode 
                  ? 'bg-[#0A1C38] border-blue-900/60 hover:border-[#1565C0]' 
                  : 'bg-slate-50 border-slate-200/80 hover:border-[#1565C0]'
              }`}>
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${
                  isEcoMode ? 'bg-[#071933] border-blue-800' : 'bg-white border-blue-100'
                }`}>
                  <UserCheck className="w-6 h-6 text-[#1565C0]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${
                    isEcoMode ? 'text-white' : 'text-[#0A3670]'
                  }`}>
                    Experienced Immigration Counsel
                  </h3>
                  <p className={`text-sm mt-1 font-normal ${
                    isEcoMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Direct access to certified visa strategists who have handled thousands of complex consulate scenarios and interview clearances.
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                isEcoMode 
                  ? 'bg-[#0A1C38] border-blue-900/60 hover:border-[#1565C0]' 
                  : 'bg-slate-50 border-slate-200/80 hover:border-[#1565C0]'
              }`}>
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${
                  isEcoMode ? 'bg-[#071933] border-blue-800' : 'bg-white border-blue-100'
                }`}>
                  <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${
                    isEcoMode ? 'text-white' : 'text-[#0A3670]'
                  }`}>
                    100% Transparent Process &amp; Zero Hidden Fees
                  </h3>
                  <p className={`text-sm mt-1 font-normal ${
                    isEcoMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Clear upfront pricing, honest pre-assessment eligibility ratings, and zero surprise charges before submission.
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                isEcoMode 
                  ? 'bg-[#0A1C38] border-blue-900/60 hover:border-[#1565C0]' 
                  : 'bg-slate-50 border-slate-200/80 hover:border-[#1565C0]'
              }`}>
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${
                  isEcoMode ? 'bg-[#071933] border-blue-800' : 'bg-white border-blue-100'
                }`}>
                  <Headset className="w-6 h-6 text-[#0A3670]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${
                    isEcoMode ? 'text-white' : 'text-[#0A3670]'
                  }`}>
                    Dedicated 24/7 Application Concierge
                  </h3>
                  <p className={`text-sm mt-1 font-normal ${
                    isEcoMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Live updates via email, WhatsApp, and encrypted dashboard with proactive reminders for passport appointments and biometrics.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onApplyClick}
                className="py-3.5 px-8 text-sm font-bold text-white bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082a57] hover:to-[#0f4d96] rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Start Your Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onTalkExpert}
                className={`py-3.5 px-6 text-sm font-bold rounded-full transition-colors border ${
                  isEcoMode 
                    ? 'text-white bg-[#0A1C38] border-blue-800 hover:bg-[#0c2347]' 
                    : 'text-[#0A3670] bg-white border-slate-300 hover:bg-blue-50/60'
                }`}
              >
                Talk to an Expert
              </button>
            </div>

          </div>

        </div>

        {/* Quantified Metrics Band */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-8 rounded-3xl border ${
          isEcoMode ? 'bg-[#0A1C38] border-blue-900/60' : 'bg-slate-50 border-slate-200/80'
        }`}>
          {TRUST_METRICS.map((item, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className={`text-3xl sm:text-4xl font-black tabular-nums tracking-tight ${
                isEcoMode ? 'text-white' : 'text-[#0A3670]'
              }`}>
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1565C0] mt-1">
                {item.label}
              </div>
              <div className={`text-xs mt-0.5 ${
                isEcoMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
