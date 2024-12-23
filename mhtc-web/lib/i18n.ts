type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    home: "Home",
    medicalDirectory: "Medical Directory",
    forTraveller: "For Traveller",
    newsUpdate: "News Update",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    startYourJourney: "Start Your Journey",
    watchOurStory: "Watch Our Story",
    yourHealthcareJourney: "Your Healthcare Journey",
    preArrival: "Pre-Arrival",
    arrival: "Arrival",
    treatment: "Treatment",
    postTreatment: "Post-Treatment",
    planYourJourney: "Plan Your Healthcare Journey",
    welcomeToMalaysia: "Welcome to Malaysia",
    worldClassHealthcare: "World-Class Healthcare",
    recoveryAndBeyond: "Recovery & Beyond",
    visaRequirements: "Visa Requirements",
    hospitalSelection: "Hospital Selection",
    treatmentPlanning: "Treatment Planning",
    costEstimation: "Cost Estimation",
    meetAndGreet: "Meet & Greet Services",
    immigrationAssistance: "Immigration Assistance",
    transportation: "Transportation",
    conciergeServices: "Concierge Services",
    medicalProcedures: "Medical Procedures",
    specialistConsultation: "Specialist Consultation",
    patientCare: "Patient Care",
    companionActivities: "Companion Activities",
    followUpCare: "Follow-up Care",
    rehabilitation: "Rehabilitation",
    tourismActivities: "Tourism Activities",
    returnPlanning: "Return Planning",
    learnMore: "Learn More",
    newsAndArticles: "News & Articles",
  },
  ms: {
    home: "Laman Utama",
    medicalDirectory: "Direktori Perubatan",
    forTraveller: "Untuk Pelancong",
    newsUpdate: "Berita Terkini",
    aboutUs: "Tentang Kami",
    contactUs: "Hubungi Kami",
    startYourJourney: "Mulakan Perjalanan Anda",
    watchOurStory: "Tonton Kisah Kami",
    yourHealthcareJourney: "Perjalanan Penjagaan Kesihatan Anda",
    preArrival: "Pra-Ketibaan",
    arrival: "Ketibaan",
    treatment: "Rawatan",
    postTreatment: "Pasca Rawatan",
    planYourJourney: "Rancang Perjalanan Penjagaan Kesihatan Anda",
    welcomeToMalaysia: "Selamat Datang ke Malaysia",
    worldClassHealthcare: "Penjagaan Kesihatan Bertaraf Dunia",
    recoveryAndBeyond: "Pemulihan & Seterusnya",
    visaRequirements: "Keperluan Visa",
    hospitalSelection: "Pemilihan Hospital",
    treatmentPlanning: "Perancangan Rawatan",
    costEstimation: "Anggaran Kos",
    meetAndGreet: "Perkhidmatan Sambutan",
    immigrationAssistance: "Bantuan Imigresen",
    transportation: "Pengangkutan",
    conciergeServices: "Perkhidmatan Concierge",
    medicalProcedures: "Prosedur Perubatan",
    specialistConsultation: "Konsultasi Pakar",
    patientCare: "Penjagaan Pesakit",
    companionActivities: "Aktiviti Pengiring",
    followUpCare: "Penjagaan Susulan",
    rehabilitation: "Pemulihan",
    tourismActivities: "Aktiviti Pelancongan",
    returnPlanning: "Perancangan Pulang",
    learnMore: "Ketahui Lebih Lanjut",
    newsAndArticles: "Berita & Artikel",
  },
};

export function useTranslation(lang: string) {
  return {
    t: (key: string) => translations[lang]?.[key] || key,
  };
}

