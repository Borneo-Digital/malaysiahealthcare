// types/translations.ts

/**
 * Common translations used across the site
 */
export interface CommonTranslations {
  welcome: string;
  readMore: string;
  backToHome: string;
  loading: string;
  error: string;
  somethingWentWrong: string;
  tryAgain: string;
  languages: {
    en: string;
    ms: string;
    id: string;
    zh: string;
    ar: string;
    [key: string]: string; // Allow any other language codes
  };
  accessibility: {
    languageSwitcher: string;
    switchTo: string;
    skipToContent: string;
    [key: string]: string; // Other accessibility keys
  };
}

/**
 * Header component translations
 */
export interface HeaderTranslations {
  navigation: {
    home: string;
    memberHospital: string;
    healthcareTravelGuide: string;
    mhtcChronicles: string;
    corporateProfile: string;
    mymt2026: string;
    contact: string;
  };
  accessibility: {
    toggleMenu: string;
    toggleSearch: string;
    notifications: string;
    languageSwitcher: string;
    skipToContent: string;
  };
  search: {
    placeholder: string;
    button: string;
  };
}

/**
 * Home page translations
 */
export interface HomeTranslations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  journey: {
    title: string;
    description: string;
    learnMore: string;
    // Pre-arrival phase
    preArrival: string;
    visaRequirements: string;
    hospitalSelection: string;
    treatmentPlanning: string;
    insuranceCoverage: string;
    medicalVisaExtension: string;
    // Arrival phase
    arrival: string;
    welcomeToMalaysia: string;
    malaysiaAtGlance: string;
    arrivalProcesses: string;
    airportPickup: string;
    accommodationOptions: string;
    // Treatment phase
    treatment: string;
    hospitalAppointment: string;
    consultationProcess: string;
    treatmentOptions: string;
    hospitalization: string;
    dischargeProcedure: string;
    medicationManagement: string;
    // Post-treatment phase
    postTreatment: string;
    followUpCare: string;
    recoveryAndBeyond: string;
    leisureActivities: string;
    returnPlanning: string;
    // Journey planner
    planYourJourney: string;
    worldClassHealthcare: string;
    patientProtection: string;
    // Any additional properties needed
    doctorSelection: string;
    costEstimation: string;
    paymentOptions: string;
    emergencyContacts: string;
    culturalConsiderations: string;
    // Additional properties required by JourneyBridge
    meetAndGreet: string;
    immigrationAssistance: string;
    transportation: string;
    conciergeServices: string;
    medicalProcedures: string;
    specialistConsultation: string;
    patientCare: string;
    companionActivities: string;
    rehabilitation: string;
    tourismActivities: string;
  };
  carousel: {
    title: string;
    subtitle: string;
    slides: Array<{
      id: number;
      title: string;
      description: string;
      image: string;
    }>;
  };
  news: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: Array<{
      id: number;
      title: string;
      excerpt: string;
      date: string;
      image: string;
      link: string;
    }>;
  };
}

/**
 * Contact page translations
 */
export interface ContactTranslations {
  getInTouch: string;
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    success: string;
    error: string;
    validation: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
  };
  contactInfo: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  map: {
    title: string;
  };
}

/**
 * Corporate profile page translations
 */
export interface CorporateProfileTranslations {
  pageTitle: string;
  hero: {
    title: string;
    subtitle: string;
  };
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  focusAreas: {
    title: string;
    areas: {
      qualityAssurance: {
        title: string;
        description: string;
      };
      patientExperience: {
        title: string;
        description: string;
      };
      industryCollaboration: {
        title: string;
        description: string;
      };
      globalPromotion: {
        title: string;
        description: string;
      };
      innovation: {
        title: string;
        description: string;
      };
      capacityBuilding: {
        title: string;
        description: string;
      };
    };
  };
  achievements: {
    title: string;
    stats: {
      facilities: {
        number: string;
        label: string;
      };
      patients: {
        number: string;
        label: string;
      };
      awards: {
        number: string;
        label: string;
      };
      years: {
        number: string;
        label: string;
      };
    };
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

/**
 * Footer component translations
 */
export interface FooterTranslations {
  contactUs: string;
  organizationName: string;
  address: string;
  quickLinks: string;
  memberHospitals: string;
  healthcareTravelGuide: string;
  mhtcChronicles: string;
  corporateProfile: string;
  followUs: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  copyright: string;
}

/**
 * Navbar component translations
 */
export interface NavbarTranslations {
  search: {
    placeholder: string;
    button: string;
  };
  account: {
    login: string;
    register: string;
    profile: string;
    settings: string;
    logout: string;
  };
  mobileMenu: {
    close: string;
  };
}

/**
 * Member Hospital page translations
 */
export interface MemberHospitalTranslations {
  pageTitle: string;
  pageDescription: string;
  hero: {
    title: string;
    subtitle: string;
  };
  elitePartners: {
    title: string;
    description: string;
    details: {
      address: string;
      phone: string;
      email: string;
      specialties: string;
      website: string;
      hoverHint: string;
      clickHint: string;
      contactInfo: string;
      close: string;
    };
  };
  ordinaryMembers: {
    title: string;
    description: string;
  };
  supporters: {
    title: string;
    subtitle: string;
  };
  search: {
    title: string;
    nameInput: string;
    locationSelect: {
      placeholder: string;
      options: {
        kualaLumpur: string;
        penang: string;
        johor: string;
        malacca: string;
        [key: string]: string;
      };
    };
    typeSelect: {
      placeholder: string;
      options: {
        hospital: string;
        clinic: string;
        specialist: string;
        [key: string]: string;
      };
    };
    button: string;
  };
  specialties: {
    title: string;
    list: {
      cardiology: string;
      oncology: string;
      orthopedics: string;
      neurology: string;
      pediatrics: string;
      dermatology: string;
      ophthalmology: string;
      dentistry: string;
      [key: string]: string;
    };
  };
}

/**
 * Healthcare Travel Guide page translations
 */
export interface HealthcareTravelGuideTranslations {
  pageTitle: string;
  pageDescription: string;
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    beforeTravel: {
      title: string;
      description: string;
      steps: {
        research: {
          title: string;
          description: string;
        };
        documentation: {
          title: string;
          description: string;
          items: {
            passport: string;
            visa: string;
            medicalDocuments: string;
            insurance: string;
          };
        };
        planning: {
          title: string;
          description: string;
          items: {
            accommodation: string;
            transportation: string;
            accompaniment: string;
            expenses: string;
          };
        };
      };
    };
    duringStay: {
      title: string;
      description: string;
      steps: {
        arrival: {
          title: string;
          description: string;
          items: {
            immigration: string;
            transport: string;
            checkin: string;
            orientation: string;
          };
        };
        treatment: {
          title: string;
          description: string;
          items: {
            consultation: string;
            procedure: string;
            recovery: string;
            followup: string;
          };
        };
        support: {
          title: string;
          description: string;
          items: {
            translation: string;
            assistance: string;
            emergency: string;
            cultural: string;
          };
        };
      };
    };
    afterCare: {
      title: string;
      description: string;
      steps: {
        recovery: {
          title: string;
          description: string;
        };
        followUp: {
          title: string;
          description: string;
        };
        continuedCare: {
          title: string;
          description: string;
        };
      };
    };
  };
  resources: {
    title: string;
    description: string;
    items: {
      hospitals: {
        title: string;
        description: string;
        link: string;
      };
      insurance: {
        title: string;
        description: string;
        link: string;
      };
      visa: {
        title: string;
        description: string;
        link: string;
      };
      tourism: {
        title: string;
        description: string;
        link: string;
      };
    };
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  // New fields for FAQs, testimonials, quickLinks, and journeyStages
  faqs?: {
    title: string;
    description: string;
    viewAll: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  testimonials?: {
    title: string;
    description?: string;
    readMore: string;
    screenReaderPrefix?: string;
    items: Array<{
      patientName: string;
      treatmentType: string;
      quote: string;
    }>;
  };
  quickLinks?: {
    accommodation: string;
    transportation: string;
    financialPlanning: string;
    learnMore: string;
  };
  journeyStages?: {
    exploreStage: string;
  };
}

/**
 * MHTC Chronicles page translations
 */
export interface MHTCChroniclesTranslations {
  pageTitle: string;
  pageDescription: string;
  categories: {
    title: string;
    items: {
      healthcareInnovations: string;
      patientStories: string;
      industryUpdates: string;
      events: string;
      travelTips: string;
    };
  };
  newsletter: {
    title: string;
    description: string;
    emailPlaceholder: string;
    subscribeButton: string;
  };
  articles: {
    readMore: string;
  };
}

export interface MYMT2026Translations {
  hero: {
    title: string;
    description: string;
    cta: string;
    date: string;
  };
  meta: {
    title: string;
    description: string;
  };
}