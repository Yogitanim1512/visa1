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
        isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#fdf8ef] text-[#241a12]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Trust Block & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Visual Trust Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[4/3] border border-[#241a12]/15">
              <img
                src="/src/assets/images/hero_global_travel_1791373305548.jpg"
                alt="Professional visa consultation team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241a12]/85 via-transparent to-transparent" />

              {/* 10+ Years Floating Experience Badge in Antique Oak & Ink */}
              <div className="absolute bottom-6 left-6 bg-[#241a12] text-[#f6efe1] p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-[#b89047]">
                <span className="text-4xl font-serif-ashen font-normal tabular-nums text-[#b89047]">10+</span>
                <span className="text-xs uppercase font-bold tracking-wider leading-snug">
                  Years of<br />Excellence
                </span>
              </div>
            </div>

            {/* Accreditation trust tag */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 px-2">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#b89047]" />
                <span>ICCRC & MARA Licensed Counsel</span>
              </span>
              <span>100% Confidential Dossier</span>
            </div>
          </div>

          {/* Right Column: Why Choose Us Copy & Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047] mb-2.5">
              <span>Why Choose Global Visa Passport Services</span>
            </div>

            <h2 
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-ashen font-medium tracking-tight leading-tight text-[#241a12] dark:text-white mb-6"
            >
              Your Trusted Partner For{' '}
              <span className="italic">Global Travel</span>
            </h2>

            <p className="text-base sm:text-lg text-[#241a12]/75 dark:text-[#f1e9dd]/75 leading-relaxed mb-8 font-normal">
              We believe getting an international visa should never be stressful. Our veteran consultants deliver transparent advice, rigorous document auditing, and personalized casework from day one.
            </p>

            {/* 3 Core Pillars */}
            <div className="space-y-6 mb-8">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#f6efe1] dark:hover:bg-[#241a12]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#f6efe1] dark:bg-[#1a140e] text-[#241a12] dark:text-[#f1e9dd] border border-[#241a12]/15 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-[#b89047]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-serif-ashen font-medium text-[#241a12] dark:text-white">
                    Experienced Immigration Counsel
                  </h3>
                  <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-1 font-normal">
                    Direct access to certified visa strategists who have handled thousands of complex consulate scenarios and interview clearances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#f6efe1] dark:hover:bg-[#241a12]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#f6efe1] dark:bg-[#1a140e] text-[#241a12] dark:text-[#f1e9dd] border border-[#241a12]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#b89047]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-serif-ashen font-medium text-[#241a12] dark:text-white">
                    100% Transparent Process & Zero Hidden Fees
                  </h3>
                  <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-1 font-normal">
                    Clear upfront pricing, honest pre-assessment eligibility ratings, and zero surprise charges before submission.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#f6efe1] dark:hover:bg-[#241a12]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#f6efe1] dark:bg-[#1a140e] text-[#241a12] dark:text-[#f1e9dd] border border-[#241a12]/15 flex items-center justify-center shrink-0">
                  <Headset className="w-6 h-6 text-[#b89047]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-serif-ashen font-medium text-[#241a12] dark:text-white">
                    Dedicated 24/7 Application Concierge
                  </h3>
                  <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-1 font-normal">
                    Live updates via email, WhatsApp, and encrypted dashboard with proactive reminders for passport appointments and biometrics.
                  </p>
                </div>
              </div>

            </div>

            <button
              type="button"
              onClick={onTalkExpert}
              className="py-3.5 px-7 text-sm font-semibold rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Talk To Our Senior Experts</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

          </div>

        </div>

        {/* Proof of Rigor: Quantitative Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#f6efe1] dark:bg-[#241a12] border border-[#241a12]/15 mb-16 sm:mb-20">
          {TRUST_METRICS.map((metric, i) => (
            <div key={i} className="text-center sm:text-left">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif-ashen font-normal text-[#241a12] dark:text-white tabular-nums">
                {metric.value}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-[#241a12]/85 dark:text-[#f1e9dd]/85 mt-1">
                {metric.label}
              </span>
              <span className="block text-[11px] text-[#241a12]/60 dark:text-[#f1e9dd]/60 mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Prominent High-Conversion Call To Action Banner in Rich Antique Clothbound Ink */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#241a12] via-[#2d2016] to-[#3a281a] text-[#f6efe1] border border-[#b89047]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b89047]">
              Ready To Start Your Journey?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-ashen font-medium tracking-tight text-white mt-2 leading-tight">
              Your Next Adventure Is Just One Application Away.
            </h3>
            <p className="text-sm text-[#f1e9dd]/80 mt-2">
              Get an instant document checklist and start your paperless application in under 3 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onApplyClick}
              className="w-full sm:w-auto py-3.5 px-8 rounded-full font-semibold text-[#241a12] bg-[#fdf8ef] hover:bg-white shadow-[0_1px_1px_rgba(52,34,16,0.18),0_5px_10px_rgba(52,34,16,0.16)] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Apply For Your Visa</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
