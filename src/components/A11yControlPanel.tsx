import React, { useState } from 'react';
import { 
  Eye, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sun, 
  Moon, 
  X, 
  Type, 
  Keyboard, 
  Sparkles,
  Play,
  Square,
  HelpCircle
} from 'lucide-react';
import { A11ySettings } from '../types';
import { speakText, playGestureSound } from '../utils/audio';

interface A11yControlPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: A11ySettings;
  onUpdateSettings: (newSettings: Partial<A11ySettings>) => void;
  isEcoMode: boolean;
}

export const A11yControlPanel: React.FC<A11yControlPanelProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  isEcoMode,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [stopSpeechFn, setStopSpeechFn] = useState<(() => void) | null>(null);

  // Read aloud current page summary
  const handleReadAloud = () => {
    if (isSpeaking && stopSpeechFn) {
      stopSpeechFn();
      setIsSpeaking(false);
      return;
    }

    const narration = `Welcome to Global Visa and Passport Services. Trusted international visa consultancy with a 99.4% approval rate and over 45,000 visas processed across 120 destinations including Canada, United Kingdom, United States, and Australia. We offer 100% paperless digital visa dossiers saving over 18,000 kilograms of carbon emissions. Use our interactive requirement checker to view needed documents and book a free pre-assessment consultation.`;

    const cancel = speakText(narration, () => {
      setIsSpeaking(false);
    });
    setStopSpeechFn(() => cancel);
    setIsSpeaking(true);
  };

  const adjustFontScale = (delta: number) => {
    const next = Math.min(1.4, Math.max(0.85, Number((settings.fontScale + delta).toFixed(2))));
    document.documentElement.style.setProperty('--font-scale', next.toString());
    onUpdateSettings({ fontScale: next });
    if (settings.audioFeedback) playGestureSound('select');
  };

  const resetFontScale = () => {
    document.documentElement.style.setProperty('--font-scale', '1');
    onUpdateSettings({ fontScale: 1 });
    if (settings.audioFeedback) playGestureSound('toggle');
  };

  const toggleHighContrast = () => {
    const next = !settings.highContrast;
    document.body.classList.toggle('high-contrast', next);
    onUpdateSettings({ highContrast: next });
    if (settings.audioFeedback) playGestureSound('toggle');
  };

  const toggleDyslexic = () => {
    const next = !settings.dyslexicFont;
    document.body.classList.toggle('font-dyslexic', next);
    onUpdateSettings({ dyslexicFont: next });
    if (settings.audioFeedback) playGestureSound('toggle');
  };

  const toggleReducedMotion = () => {
    const next = !settings.reducedMotion;
    onUpdateSettings({ reducedMotion: next });
    if (settings.audioFeedback) playGestureSound('toggle');
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Universal Accessibility Panel"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl border transition-all duration-300 bg-slate-950/95 border-teal-500/40 text-white backdrop-blur-xl"
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600/30 border border-teal-500/50 flex items-center justify-center text-teal-400">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">Accessibility Suite</h3>
            <p className="text-[11px] text-slate-400">WCAG AA Compliant Controls</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Accessibility Suite"
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Settings Body */}
      <div className="p-4 space-y-4">
        
        {/* Feature 1: Text-to-Speech Voice Narrator */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Voice Screen Reader (TTS)</span>
            </span>
            {isSpeaking && (
              <span className="text-[10px] text-teal-400 animate-pulse font-mono">
                Narrating...
              </span>
            )}
          </div>

          <p className="text-[11px] text-slate-400 mb-3">
            Listen to an audio summary of visa options, requirements, and consultancy benefits.
          </p>

          <button
            type="button"
            onClick={handleReadAloud}
            className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
              isSpeaking
                ? 'bg-rose-600 hover:bg-rose-700 text-white'
                : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            {isSpeaking ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Stop Narration</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Read Page Aloud</span>
              </>
            )}
          </button>
        </div>

        {/* Feature 2: Font Size Scaler */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-teal-400" />
              <span>Text Sizing</span>
            </span>
            <span className="text-xs font-mono text-teal-400 font-semibold tabular-nums">
              {Math.round(settings.fontScale * 100)}%
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => adjustFontScale(-0.1)}
              aria-label="Decrease text size"
              className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1"
            >
              <ZoomOut className="w-3.5 h-3.5" />
              <span>A-</span>
            </button>

            <button
              type="button"
              onClick={resetFontScale}
              aria-label="Reset text size to standard 100%"
              className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>100%</span>
            </button>

            <button
              type="button"
              onClick={() => adjustFontScale(0.1)}
              aria-label="Increase text size"
              className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>A+</span>
            </button>
          </div>
        </div>

        {/* Feature 3: Contrast & Readability Toggles */}
        <div className="space-y-2">
          
          {/* High Contrast Mode */}
          <button
            type="button"
            onClick={toggleHighContrast}
            aria-pressed={settings.highContrast}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
              settings.highContrast
                ? 'bg-amber-400 text-black border-amber-300 font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <span>High Contrast (WCAG AAA)</span>
            <span className="text-[11px] font-mono">{settings.highContrast ? 'ON' : 'OFF'}</span>
          </button>

          {/* Dyslexia-friendly Font */}
          <button
            type="button"
            onClick={toggleDyslexic}
            aria-pressed={settings.dyslexicFont}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
              settings.dyslexicFont
                ? 'bg-teal-500 text-slate-950 border-teal-300 font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <span>Dyslexia-Friendly Typography</span>
            <span className="text-[11px] font-mono">{settings.dyslexicFont ? 'ON' : 'OFF'}</span>
          </button>

          {/* Reduced Motion */}
          <button
            type="button"
            onClick={toggleReducedMotion}
            aria-pressed={settings.reducedMotion}
            className={`w-full p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
              settings.reducedMotion
                ? 'bg-teal-500 text-slate-950 border-teal-300 font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <span>Reduced Motion Animations</span>
            <span className="text-[11px] font-mono">{settings.reducedMotion ? 'ON' : 'OFF'}</span>
          </button>

        </div>

        {/* Keyboard Shortcuts Trigger */}
        <div className="pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
            className="w-full py-2 text-xs font-medium text-slate-400 hover:text-white flex items-center justify-center gap-1.5"
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span>{showKeyboardHelp ? 'Hide' : 'View'} Keyboard Shortcuts</span>
          </button>

          {showKeyboardHelp && (
            <div className="mt-2 p-2.5 rounded-xl bg-slate-900 text-[11px] text-slate-300 space-y-1.5 font-mono">
              <div className="flex justify-between"><span>Alt + A</span><span className="text-slate-400">Accessibility Dock</span></div>
              <div className="flex justify-between"><span>Alt + G</span><span className="text-slate-400">AI Gesture Controller</span></div>
              <div className="flex justify-between"><span>Alt + E</span><span className="text-slate-400">Eco Energy Mode</span></div>
              <div className="flex justify-between"><span>Esc</span><span className="text-slate-400">Close Any Modal</span></div>
            </div>
          )}
        </div>

      </div>
    </aside>
  );
};
