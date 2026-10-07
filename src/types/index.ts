export type VisaCategory = 'tourist' | 'student' | 'business' | 'work' | 'all';

export interface Destination {
  id: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  processingTime: string;
  successRate: string;
  standardFee: string;
  description: string;
  keyRequirements: string[];
  ecoFriendlyScore: number; // 1-100 green travel rating
  popularFor: string;
}

export interface VisaService {
  id: string;
  title: string;
  category: VisaCategory;
  iconName: string;
  badge?: string;
  tagline: string;
  description: string;
  processingDays: string;
  feeEstimate: string;
  includedFeatures: string[];
}

export interface A11ySettings {
  fontScale: number; // 0.85 to 1.35
  highContrast: boolean;
  dyslexicFont: boolean;
  reducedMotion: boolean;
  screenReaderActive: boolean;
  audioFeedback: boolean;
}

export interface GestureDetection {
  type: 'swipe_left' | 'swipe_right' | 'wave_up' | 'palm_pause' | 'thumb_confirm' | 'none';
  confidence: number;
  label: string;
  timestamp: number;
}
