import { Destination, VisaService } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    tag: 'Your Journey Starts Here',
    title: 'Your Gateway to',
    highlight: 'Global Opportunities',
    description:
      'Make your international dreams a reality with trusted visa and passport consultancy services. Enjoy personalized expert guidance, digital document handling, and high approval rates at every milestone.',
    ctaPrimary: 'Start Your Application',
    ctaSecondary: 'Explore Visa Services',
    image: '/src/assets/images/hero_global_travel_1791373305548.jpg',
    metric: '99.4% Approval Rate',
  },
  {
    id: 'slide-2',
    tag: 'Travel Without Limits',
    title: 'Explore the World',
    highlight: 'With Complete Confidence',
    description:
      'From meticulous documentation auditing to seamless biometric slot booking, our senior immigration specialists keep your travel journey completely clear, transparent, and hassle-free.',
    ctaPrimary: 'Check Requirements',
    ctaSecondary: 'Talk To An Expert',
    image: '/src/assets/images/dest_uk_london_1791373330952.jpg',
    metric: '45,000+ Visas Granted',
  },
  {
    id: 'slide-3',
    tag: 'Trusted Visa Experts',
    title: 'From Application',
    highlight: 'To Final Approval',
    description:
      'Eco-friendly digital application workflows that reduce paper waste while speeding up consulate processing times. Tailored specifically for your chosen country, purpose, and timeline.',
    ctaPrimary: 'Free Consultation',
    ctaSecondary: 'Eco-Visa Calculator',
    image: '/src/assets/images/dest_canada_nature_1791373317375.jpg',
    metric: '10+ Years Excellence',
  },
];

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'canada',
    name: 'Canada',
    region: 'North America',
    flag: '🇨🇦',
    image: '/src/assets/images/dest_canada_nature_1791373317375.jpg',
    processingTime: '15 – 25 Business Days',
    successRate: '98.8%',
    standardFee: '$100 CAD',
    description: 'World-class universities, breathtaking natural landscapes, and accessible pathways for professionals and tourists alike.',
    keyRequirements: [
      'Valid passport (min. 6 months validity)',
      'Proof of financial solvency (bank statements)',
      'Biometrics collection appointment',
      'Purpose of travel itinerary & lodging booking'
    ],
    ecoFriendlyScore: 92,
    popularFor: 'Work Permit & Express Entry'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    flag: '🇬🇧',
    image: '/src/assets/images/dest_uk_london_1791373330952.jpg',
    processingTime: '3 – 15 Business Days',
    successRate: '99.1%',
    standardFee: '£115 GBP',
    description: 'Historic cultural hubs, leading global financial center, and prestigious universities with priority processing options.',
    keyRequirements: [
      'Current travel passport with blank page',
      'Evidence of funds to cover stay duration',
      'Accommodation and travel flight schedule',
      'Employment verification or academic enrollment'
    ],
    ecoFriendlyScore: 89,
    popularFor: 'Standard Visitor & Student Visa'
  },
  {
    id: 'usa',
    name: 'United States',
    region: 'North America',
    flag: '🇺🇸',
    image: '/src/assets/images/hero_global_travel_1791373305548.jpg',
    processingTime: 'Varies by Consulate Queue',
    successRate: '96.5%',
    standardFee: '$185 USD',
    description: 'Global business epicenter, technological innovation centers, and premier tourist destinations from coast to coast.',
    keyRequirements: [
      'Form DS-160 online confirmation barcode',
      'Consular interview appointment letter',
      'Ties to home country documentation',
      'Recent 5x5 cm biometric digital photograph'
    ],
    ecoFriendlyScore: 85,
    popularFor: 'B1/B2 Tourist & F-1 Academic'
  },
  {
    id: 'australia',
    name: 'Australia',
    region: 'Oceania',
    flag: '🇦🇺',
    image: '/src/assets/images/dest_australia_sydney_1791373341768.jpg',
    processingTime: '7 – 20 Business Days',
    successRate: '98.4%',
    standardFee: '$190 AUD',
    description: 'Pristine coastal cities, great outdoor adventure, and expanding post-study work opportunities across all territories.',
    keyRequirements: [
      'Genuine Temporary Entrant (GTE) statement',
      'Certified identification papers',
      'Sufficient funds for duration of trip',
      'Health examination & biometrics clearance'
    ],
    ecoFriendlyScore: 94,
    popularFor: 'Subclass 600 & 500 Student'
  },
  {
    id: 'dubai',
    name: 'Dubai / UAE',
    region: 'Middle East',
    flag: '🇦🇪',
    image: '/src/assets/images/hero_global_travel_1791373305548.jpg',
    processingTime: '24 – 72 Hours',
    successRate: '99.7%',
    standardFee: '$95 USD',
    description: 'Futuristic architecture, tax-friendly business climate, and ultra-fast eVisa digital processing within 48 hours.',
    keyRequirements: [
      'Clear color passport bio-page scan',
      'Passport-size photo with white backdrop',
      'Confirmed return flight reservation',
      'Hotel booking or resident host letter'
    ],
    ecoFriendlyScore: 82,
    popularFor: '30/60 Days Tourist & Remote Work'
  },
  {
    id: 'schengen',
    name: 'Europe / Schengen Area',
    region: 'Europe (29 Countries)',
    flag: '🇪🇺',
    image: '/src/assets/images/dest_uk_london_1791373330952.jpg',
    processingTime: '10 – 15 Business Days',
    successRate: '97.8%',
    standardFee: '€90 EUR',
    description: 'Single borderless visa granting seamless access across France, Germany, Italy, Switzerland, Spain, and Nordic nations.',
    keyRequirements: [
      'Uniform Schengen application form',
      'Schengen-compliant travel medical insurance (€30k min.)',
      'Round-trip flight reservation details',
      'Proof of accommodation for all destinations'
    ],
    ecoFriendlyScore: 95,
    popularFor: 'Short-Stay Uniform Tourist (Type C)'
  }
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    category: 'tourist',
    iconName: 'Palmtree',
    tagline: 'Leisure, Family Visits & Sightseeing',
    description: 'Travel, explore, and create unforgettable memories with end-to-end tourist visa assistance, itinerary curation, and appointment fast-tracking.',
    processingDays: '3 – 15 Days',
    feeEstimate: 'From $85',
    includedFeatures: [
      'Embassy appointment slot scheduling',
      'Personalized cover letter preparation',
      'Itinerary & flight reservation alignment',
      'Real-time status tracking'
    ]
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    category: 'student',
    iconName: 'GraduationCap',
    badge: 'Most Popular',
    tagline: 'University & College Admissions',
    description: 'Expert guidance for your international academic journey. From Offer Letter review and CAS/I-20 alignment to visa interview prep.',
    processingDays: '15 – 30 Days',
    feeEstimate: 'From $150',
    includedFeatures: [
      'Statement of Purpose (SOP) vetting',
      'Financial bank statement verification',
      'Post-study work permit roadmap',
      'Mock visa interview simulations'
    ]
  },
  {
    id: 'business-visa',
    title: 'Business Visa',
    category: 'business',
    iconName: 'Briefcase',
    tagline: 'Conferences, Corporate Meetings & Trade',
    description: 'Accelerate international corporate mobility with rapid-turnaround corporate filing, chamber of commerce endorsements, and multi-entry setups.',
    processingDays: '2 – 7 Days',
    feeEstimate: 'From $120',
    includedFeatures: [
      'Corporate invitation letter review',
      'Multiple-entry validity advisory',
      'Priority consulate queue management',
      'Dedicated corporate account manager'
    ]
  },
  {
    id: 'work-visa',
    title: 'Work Visa',
    category: 'work',
    iconName: 'Building2',
    tagline: 'Skilled Migration & Employment',
    description: 'Take your career international with accredited labor market impact verification, employment contract validation, and relocation guidance.',
    processingDays: '30 – 60 Days',
    feeEstimate: 'From $280',
    includedFeatures: [
      'Skill credential credential evaluation',
      'Employer compliance verification',
      'Dependent visa family filing',
      'Legal appeal support if required'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Share your destination, timeline, and travel purpose. Our senior consultants review your eligibility and outline the optimal visa category with zero upfront commitment.',
    iconName: 'MessageSquare',
    timeframe: 'Same Day'
  },
  {
    number: '02',
    title: 'Digital Document Audit',
    description: 'Upload your documents to our paperless, encrypted digital portal. Our dual AI-verification engine and compliance officers inspect every document to eliminate errors.',
    iconName: 'FileCheck2',
    timeframe: '24 Hours'
  },
  {
    number: '03',
    title: 'Application Submission',
    description: 'We compile the official dossier, schedule required biometric or consular appointments, and submit the application directly to the embassy or accredited center.',
    iconName: 'Send',
    timeframe: '1 – 2 Days'
  },
  {
    number: '04',
    title: 'Receive Your Visa',
    description: 'Once approved, your eVisa is delivered instantly to your inbox, or your stamped physical passport is dispatched with tracked courier to your doorstep.',
    iconName: 'PlaneTakeoff',
    timeframe: 'Final Milestone'
  }
];

export const TRUST_METRICS = [
  { value: '10+', label: 'Years of Proven Expertise', sub: 'Established 2016' },
  { value: '99.2%', label: 'Approval Success Rate', sub: 'Industry Leading' },
  { value: '45,000+', label: 'Passports & Visas Approved', sub: 'Across 120+ Countries' },
  { value: '18,450 kg', label: 'CO₂ Saved Via Paperless Visas', sub: 'Eco-certified processing' }
];

export const FAQS = [
  {
    q: 'How does the digital paperless visa application save carbon emissions?',
    a: 'By transitioning 100% of the initial audit, document notarization, and consultation to our digital cloud platform, applicants avoid physical courier deliveries and unnecessary embassy commute visits. Each digital visa reduces approximately 1.4 kg to 3.8 kg of CO₂ equivalent.'
  },
  {
    q: 'How can I navigate this website using AI gestures?',
    a: 'Enable AI Gesture Mode in the top navigation or press Alt+G. You can either use your webcam to wave left/right to browse destinations and hold up an open palm to inspect details, or use our interactive Virtual Air Gesture Pad on any phone or laptop.'
  },
  {
    q: 'What accessibility features are supported?',
    a: 'We built a complete universal accessibility suite: Text-to-Speech (TTS) voice narrator that reads guides aloud, dynamic font scaling (80% to 140%), Dyslexia-friendly typography, WCAG AAA High Contrast mode, and reduced motion.'
  },
  {
    q: 'What is your visa approval guarantee or refund policy?',
    a: 'If our initial document assessment reveals that an applicant has low eligibility, we communicate this transparently before collecting government filing fees. Our 99.2% approval rate is the result of strict pre-submission checks.'
  }
];
