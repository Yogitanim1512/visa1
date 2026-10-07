import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { VisaSearch } from './components/VisaSearch';
import { ConsularArchiveShelf } from './components/ConsularArchiveShelf';
import { PopularDestinations } from './components/PopularDestinations';
import { VisaServices } from './components/VisaServices';
import { ProcessSteps } from './components/ProcessSteps';
import { EcoSustainabilityHub } from './components/EcoSustainabilityHub';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AiGestureController } from './components/AiGestureController';
import { A11yControlPanel } from './components/A11yControlPanel';
import { RequirementsModal } from './components/RequirementsModal';
import { ApplyModal } from './components/ApplyModal';
import { POPULAR_DESTINATIONS } from './data/visaData';
import { Destination, VisaCategory, A11ySettings } from './types';
import { playGestureSound } from './utils/audio';

export default function App() {
  // Theme & Modes
  const [isEcoMode, setIsEcoMode] = useState<boolean>(false);
  const [isGestureModeActive, setIsGestureModeActive] = useState<boolean>(false);
  const [isA11yOpen, setIsA11yOpen] = useState<boolean>(false);

  // Accessibility settings state
  const [a11ySettings, setA11ySettings] = useState<A11ySettings>({
    fontScale: 1,
    highContrast: false,
    dyslexicFont: false,
    reducedMotion: false,
    screenReaderActive: false,
    audioFeedback: true,
  });

  // Modal dialog states
  const [isReqModalOpen, setIsReqModalOpen] = useState<boolean>(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(POPULAR_DESTINATIONS[0]);
  const [selectedVisaCategory, setSelectedVisaCategory] = useState<VisaCategory>('tourist');

  // Hero slide cycle ref for AI gestures
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  // Handle Eco Mode toggle
  const handleToggleEcoMode = () => {
    setIsEcoMode((prev) => {
      const next = !prev;
      document.body.classList.toggle('eco-mode', next);
      if (a11ySettings.audioFeedback) playGestureSound('toggle');
      return next;
    });
  };

  // Handle A11y updates
  const handleUpdateA11y = (updated: Partial<A11ySettings>) => {
    setA11ySettings((prev) => ({ ...prev, ...updated }));
  };

  // Open Requirements for a specific destination & category
  const handleOpenRequirements = (countryId?: string, category: VisaCategory = 'tourist') => {
    if (countryId) {
      const found = POPULAR_DESTINATIONS.find((d) => d.id === countryId);
      if (found) setSelectedDestination(found);
    }
    setSelectedVisaCategory(category);
    setIsReqModalOpen(true);
    if (a11ySettings.audioFeedback) playGestureSound('select');
  };

  // Open Apply modal
  const handleOpenApply = (destinationId?: string, category: VisaCategory = 'tourist') => {
    if (destinationId) {
      const found = POPULAR_DESTINATIONS.find((d) => d.id === destinationId);
      if (found) setSelectedDestination(found);
    }
    setSelectedVisaCategory(category);
    setIsApplyModalOpen(true);
    if (a11ySettings.audioFeedback) playGestureSound('select');
  };

  // Global Keyboard shortcuts for accessibility & speed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsReqModalOpen(false);
        setIsApplyModalOpen(false);
        setIsA11yOpen(false);
        setIsGestureModeActive(false);
      } else if (e.altKey && (e.key === 'g' || e.key === 'G')) {
        e.preventDefault();
        setIsGestureModeActive((prev) => !prev);
      } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsA11yOpen((prev) => !prev);
      } else if (e.altKey && (e.key === 'e' || e.key === 'E')) {
        e.preventDefault();
        handleToggleEcoMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Gesture Action Handlers
  const handleGestureNext = () => {
    const nextIdx = (POPULAR_DESTINATIONS.findIndex((d) => d.id === selectedDestination?.id) + 1) % POPULAR_DESTINATIONS.length;
    setSelectedDestination(POPULAR_DESTINATIONS[nextIdx]);
    
    const destEl = document.getElementById('destinations');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleGesturePrev = () => {
    const currentIdx = POPULAR_DESTINATIONS.findIndex((d) => d.id === selectedDestination?.id);
    const prevIdx = (currentIdx - 1 + POPULAR_DESTINATIONS.length) % POPULAR_DESTINATIONS.length;
    setSelectedDestination(POPULAR_DESTINATIONS[prevIdx]);

    const destEl = document.getElementById('destinations');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleGestureSelect = () => {
    setIsReqModalOpen(true);
  };

  const handleGesturePause = () => {
    setA11ySettings((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isEcoMode ? 'bg-[#1a140e] text-[#f1e9dd]' : 'bg-[#c6ae8e] text-[#241a12]'
    }`}>
      
      {/* Universal Top Navigation */}
      <Header
        onOpenApply={() => handleOpenApply()}
        onOpenCheckRequirements={() => handleOpenRequirements()}
        isGestureModeActive={isGestureModeActive}
        onToggleGestureMode={() => setIsGestureModeActive((prev) => !prev)}
        isA11yOpen={isA11yOpen}
        onToggleA11y={() => setIsA11yOpen((prev) => !prev)}
        isEcoMode={isEcoMode}
        onToggleEcoMode={handleToggleEcoMode}
        a11ySettings={a11ySettings}
      />

      {/* Main Content Area */}
      <main id="main-content" role="main" className="flex-1 focus:outline-none">
        
        {/* Section 1: Hero Slider */}
        <HeroSlider
          onApplyClick={() => handleOpenApply()}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onCheckRequirements={() => handleOpenRequirements()}
          onTalkExpert={() => handleOpenApply()}
          isEcoMode={isEcoMode}
          reducedMotion={a11ySettings.reducedMotion}
        />

        {/* Floating Visa Search Bar */}
        <VisaSearch
          onCheckRequirements={handleOpenRequirements}
          isEcoMode={isEcoMode}
        />

        {/* Section 2: 3D Ashen Press Sovereign Consular Archive Shelf */}
        <ConsularArchiveShelf
          onOpenApply={() => handleOpenApply()}
          onOpenRequirements={() => handleOpenRequirements()}
          isEcoMode={isEcoMode}
        />

        {/* Section 3: Popular Destinations */}
        <PopularDestinations
          onSelectDestination={(dest) => {
            setSelectedDestination(dest);
            setIsReqModalOpen(true);
          }}
          isEcoMode={isEcoMode}
        />

        {/* Section 4: Visa Services */}
        <VisaServices
          onSelectService={(category) => {
            setSelectedVisaCategory(category);
            setIsApplyModalOpen(true);
          }}
          isEcoMode={isEcoMode}
        />

        {/* Section 5: Simple 4-Step Process */}
        <ProcessSteps
          onStartConsultation={() => handleOpenApply()}
          isEcoMode={isEcoMode}
        />

        {/* Section 6: Eco Sustainability & Digital Footprint Hub */}
        <EcoSustainabilityHub
          isEcoMode={isEcoMode}
          onToggleEcoMode={handleToggleEcoMode}
        />

        {/* Section 7: Why Choose Us & Trust Metrics */}
        <WhyChooseUs
          onTalkExpert={() => handleOpenApply()}
          onApplyClick={() => handleOpenApply()}
          isEcoMode={isEcoMode}
        />

        {/* Section 8: FAQs Accordion */}
        <FaqSection isEcoMode={isEcoMode} />

      </main>

      {/* Universal Footer */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onOpenA11y={() => setIsA11yOpen(true)}
        onOpenGesture={() => setIsGestureModeActive(true)}
        isEcoMode={isEcoMode}
      />

      {/* Floating AI Gesture Controller */}
      <AiGestureController
        isOpen={isGestureModeActive}
        onClose={() => setIsGestureModeActive(false)}
        onSwipeNext={handleGestureNext}
        onSwipePrev={handleGesturePrev}
        onSelectAction={handleGestureSelect}
        onPauseAction={handleGesturePause}
        isEcoMode={isEcoMode}
      />

      {/* Floating Accessibility Control Panel */}
      <A11yControlPanel
        isOpen={isA11yOpen}
        onClose={() => setIsA11yOpen(false)}
        settings={a11ySettings}
        onUpdateSettings={handleUpdateA11y}
        isEcoMode={isEcoMode}
      />

      {/* Visa Requirements Checklist Modal */}
      <RequirementsModal
        isOpen={isReqModalOpen}
        onClose={() => setIsReqModalOpen(false)}
        destination={selectedDestination}
        visaCategory={selectedVisaCategory}
        onProceedToApply={(destId, category) => {
          setIsReqModalOpen(false);
          handleOpenApply(destId, category);
        }}
        isEcoMode={isEcoMode}
      />

      {/* Multi-Step Digital Visa Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialDestinationId={selectedDestination?.id || 'canada'}
        initialCategory={selectedVisaCategory}
        isEcoMode={isEcoMode}
      />

    </div>
  );
}
