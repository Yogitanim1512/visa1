import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  Copy, 
  Check, 
  Calendar,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/visaData';
import { VisaCategory } from '../types';
import { playGestureSound } from '../utils/audio';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestinationId?: string;
  initialCategory?: VisaCategory;
  isEcoMode: boolean;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  initialDestinationId = 'canada',
  initialCategory = 'tourist',
  isEcoMode,
}) => {
  const [step, setStep] = useState<number>(1);
  const [destinationId, setDestinationId] = useState<string>(initialDestinationId);
  const [visaCategory, setVisaCategory] = useState<VisaCategory>(initialCategory);
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Confirmation state
  const [referenceId, setReferenceId] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full legal name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!phone.trim()) errs.phone = 'Please enter a contact phone number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    // Generate random application ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setReferenceId(`GVS-${destinationId.toUpperCase().slice(0, 3)}-${randomNum}`);
    setStep(3);
    playGestureSound('select');
  };

  const handleCopyRef = () => {
    if (referenceId) {
      navigator.clipboard.writeText(referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    setTravelDate('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
    >
      <div 
        className={`relative w-full max-w-2xl rounded-3xl shadow-2xl border overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          isEcoMode
            ? 'bg-[#091b36] border-blue-900 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1565C0]">
              <span>Paperless Application Portal</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">Step {step} of 3</span>
            </div>
            <h2 id="apply-modal-title" className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isEcoMode ? 'text-white' : 'text-[#0A3670]'
            }`}>
              {step === 3 ? 'Application Initiated' : 'Start Your Visa Application'}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleReset}
            aria-label="Close application form"
            className={`p-2 rounded-full transition-colors ${
              isEcoMode ? 'text-slate-400 hover:text-white hover:bg-blue-900/40' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-5">
              <p className={`text-sm font-normal leading-relaxed ${isEcoMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Choose your destination country and category to customize your digital dossier requirements:
              </p>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                  isEcoMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Destination Country
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className={`w-full p-3 rounded-2xl border text-sm font-medium focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                    isEcoMode
                      ? 'bg-[#061833] border-blue-800 text-white'
                      : 'bg-white border-slate-300 text-slate-800'
                  }`}
                >
                  {POPULAR_DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id} className={isEcoMode ? 'bg-[#061833] text-white' : 'bg-white text-slate-900'}>
                      {d.flag} {d.name} ({d.region})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                  isEcoMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Visa Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'tourist', label: 'Tourist Visa' },
                    { id: 'student', label: 'Student Visa' },
                    { id: 'business', label: 'Business Visa' },
                    { id: 'work', label: 'Work Visa' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setVisaCategory(cat.id as VisaCategory)}
                      className={`p-3.5 rounded-2xl border text-sm font-semibold text-left transition-all ${
                        visaCategory === cat.id
                          ? 'border-[#1565C0] bg-blue-50/70 text-[#0A3670] shadow-sm ring-1 ring-[#1565C0]'
                          : isEcoMode
                          ? 'border-blue-900/60 text-slate-300 hover:bg-blue-950'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-7 rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082852] hover:to-[#104d94] text-white transition-all text-sm font-semibold flex items-center gap-2 shadow-md"
                >
                  <span>Continue to Applicant Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${isEcoMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  Full Legal Name (as per Passport) *
                </label>
                <div className="relative">
                  <User className={`w-4 h-4 absolute left-3.5 top-3.5 ${isEcoMode ? 'text-slate-400' : 'text-slate-400'}`} />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Alexander Smith"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                      isEcoMode
                        ? 'bg-[#061833] border-blue-800 text-white placeholder-slate-500'
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isEcoMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className={`w-4 h-4 absolute left-3.5 top-3.5 ${isEcoMode ? 'text-slate-400' : 'text-slate-400'}`} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                        isEcoMode
                          ? 'bg-[#061833] border-blue-800 text-white placeholder-slate-500'
                          : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isEcoMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className={`w-4 h-4 absolute left-3.5 top-3.5 ${isEcoMode ? 'text-slate-400' : 'text-slate-400'}`} />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98999 74500"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                        isEcoMode
                          ? 'bg-[#061833] border-blue-800 text-white placeholder-slate-500'
                          : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isEcoMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  Target Travel Date (Estimated)
                </label>
                <div className="relative">
                  <Calendar className={`w-4 h-4 absolute left-3.5 top-3.5 ${isEcoMode ? 'text-slate-400' : 'text-slate-400'}`} />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                      isEcoMode
                        ? 'bg-[#061833] border-blue-800 text-white'
                        : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isEcoMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  Specific Travel Purpose or Questions
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. University term starting in September, or renewal of damaged passport..."
                  className={`w-full p-3 rounded-2xl border text-sm focus:ring-2 focus:ring-[#1565C0] focus:outline-none ${
                    isEcoMode
                      ? 'bg-[#061833] border-blue-800 text-white placeholder-slate-500'
                      : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Eco Paperless Guarantee Notice */}
              <div className={`p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs ${
                isEcoMode 
                  ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200' 
                  : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}>
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero paper filing: We create your digital dossier and prepare all consulate appointment slots.</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`py-2.5 px-5 rounded-full text-xs font-semibold transition-colors ${
                    isEcoMode 
                      ? 'text-slate-300 hover:bg-blue-900/40' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="py-3 px-7 rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] hover:from-[#082852] hover:to-[#104d94] text-white transition-all text-sm font-semibold flex items-center gap-2 shadow-md"
                >
                  <span>Submit Application Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  isEcoMode ? 'text-white' : 'text-[#0A3670]'
                }`}>
                  Application Initiated Successfully!
                </h3>
                <p className={`text-sm mt-2 max-w-md mx-auto font-normal leading-relaxed ${
                  isEcoMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Your dedicated visa consultant will review your case file and contact you via email & WhatsApp within 2 hours.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className={`max-w-xs mx-auto p-4 rounded-3xl border ${
                isEcoMode ? 'bg-[#051329] border-blue-900' : 'bg-blue-50/70 border-blue-200'
              }`}>
                <span className={`text-xs block uppercase font-mono font-medium ${
                  isEcoMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Your Reference Tracking ID
                </span>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-xl font-mono font-black text-[#1565C0]">
                    {referenceId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#1565C0] transition-colors"
                    title="Copy Reference ID"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-8 rounded-full bg-gradient-to-r from-[#0A3670] to-[#1565C0] text-white hover:from-[#082852] hover:to-[#104d94] transition-all text-sm font-semibold shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
