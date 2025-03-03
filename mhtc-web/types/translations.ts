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