import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  Copy, 
  Check, 
  Calendar,
  User,
  Mail,
  Phone,
  Globe
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

    // Generate unique application tracking reference
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRef = `GVP-2026-${randomNum}`;
    setReferenceId(newRef);
    setStep(3);
    playGestureSound('success');
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            ? 'bg-[#1a140e] border-[#3d2c1d] text-[#f1e9dd]'
            : 'bg-[#fdf8ef] border-[#241a12]/15 text-[#241a12]'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#241a12]/10 dark:border-white/10 flex items-center justify-between bg-[#f6efe1] dark:bg-[#241a12]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b89047]">
              <span>Paperless Application Portal</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">Step {step} of 3</span>
            </div>
            <h2 id="apply-modal-title" className="text-xl sm:text-2xl font-serif-ashen font-medium tracking-tight text-[#241a12] dark:text-white">
              {step === 3 ? 'Application Initiated' : 'Start Your Visa Application'}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleReset}
            aria-label="Close application form"
            className="p-2 text-[#241a12]/60 hover:text-[#241a12] dark:text-[#f1e9dd]/60 dark:hover:text-white rounded-full hover:bg-[#ede5d5] dark:hover:bg-[#382b20] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-5">
              <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 font-normal">
                Choose your destination country and category to customize your digital dossier requirements:
              </p>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#241a12]/60 dark:text-[#f1e9dd]/60 mb-1.5">
                  Destination Country
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] dark:bg-[#241a12] text-[#241a12] dark:text-white font-medium text-sm focus:ring-2 focus:ring-[#b89047]"
                >
                  {POPULAR_DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.flag} {d.name} ({d.region})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#241a12]/60 dark:text-[#f1e9dd]/60 mb-1.5">
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
                          ? 'border-[#b89047] bg-[#f6efe1] text-[#241a12] shadow-sm ring-1 ring-[#b89047]'
                          : 'border-[#241a12]/15 text-[#241a12]/75 hover:bg-[#f6efe1]'
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
                  className="py-3 px-7 rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors text-sm font-semibold flex items-center gap-2"
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
                <label className="block text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] mb-1">
                  Full Legal Name (as per Passport) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#241a12]/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Alexander Smith"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] text-[#241a12] dark:bg-[#241a12] dark:text-white text-sm focus:ring-2 focus:ring-[#b89047]"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#241a12]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] text-[#241a12] dark:bg-[#241a12] dark:text-white text-sm focus:ring-2 focus:ring-[#b89047]"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#241a12]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] text-[#241a12] dark:bg-[#241a12] dark:text-white text-sm focus:ring-2 focus:ring-[#b89047]"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] mb-1">
                  Target Travel Date (Estimated)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#241a12]/40 absolute left-3.5 top-3.5" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] text-[#241a12] dark:bg-[#241a12] dark:text-white text-sm focus:ring-2 focus:ring-[#b89047]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241a12] dark:text-[#f1e9dd] mb-1">
                  Specific Travel Purpose or Questions
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. University term starting in September, need priority student visa processing"
                  className="w-full p-3 rounded-2xl border border-[#241a12]/15 bg-[#f6efe1] text-[#241a12] dark:bg-[#241a12] dark:text-white text-sm focus:ring-2 focus:ring-[#b89047]"
                />
              </div>

              {/* Eco Paperless Guarantee Notice */}
              <div className="p-3.5 rounded-2xl bg-[#1e2a22]/10 dark:bg-[#1e2a22]/40 border border-emerald-800/30 flex items-center gap-2.5 text-xs text-[#1e2a22] dark:text-emerald-200">
                <Leaf className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span>Zero paper filing: We create your digital dossier and prepare all consulate appointment slots.</span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-2.5 px-5 rounded-full text-xs font-semibold text-[#241a12]/70 dark:text-[#f1e9dd]/70 hover:bg-[#ede5d5] dark:hover:bg-[#382b20]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="py-3 px-7 rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors text-sm font-semibold flex items-center gap-2 shadow-sm"
                >
                  <span>Submit Application Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#f6efe1] dark:bg-[#241a12] border border-[#b89047] text-[#b89047] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif-ashen font-medium text-[#241a12] dark:text-white">
                  Application Initiated Successfully!
                </h3>
                <p className="text-sm text-[#241a12]/75 dark:text-[#f1e9dd]/75 mt-2 max-w-md mx-auto font-normal">
                  Your dedicated visa consultant will review your case file and contact you via email & WhatsApp within 2 hours.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className="max-w-xs mx-auto p-4 rounded-3xl bg-[#f6efe1] dark:bg-[#241a12] border border-[#241a12]/15">
                <span className="text-xs text-[#241a12]/60 dark:text-[#f1e9dd]/60 block uppercase font-mono">
                  Your Reference Tracking ID
                </span>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-xl font-mono font-extrabold text-[#b89047]">
                    {referenceId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-1.5 rounded-lg text-[#241a12]/60 hover:text-[#241a12] dark:hover:text-white"
                    title="Copy Reference ID"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#b89047]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-8 rounded-full bg-[#241a12] text-[#f6efe1] hover:bg-[#382b20] transition-colors text-sm font-semibold"
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
