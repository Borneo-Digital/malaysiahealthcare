import Script from 'next/script'

export function HealthcareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Malaysia Healthcare Travel Council",
    "description": "Promoting Malaysia as a preferred healthcare destination with world-class medical facilities and services",
    "url": "https://malaysiahealthcare.org",
    "medicalSpecialty": [
      "Cardiology",
      "Oncology", 
      "Orthopedics",
      "Fertility Treatment",
      "Neurology",
      "Ophthalmology",
      "Plastic Surgery",
      "Dentistry",
      "Health Screening",
      "Traditional and Complementary Medicine"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Malaysia"
    },
    "serviceType": [
      "Medical Tourism",
      "Healthcare Services",
      "Medical Treatment Coordination",
      "Hospital Network Services",
      "Patient Care Services"
    ],
    "hasCredential": [
      "JCI Accreditation",
      "ISO Certification",
      "Malaysian Medical Council Certification"
    ],
    "knowsLanguage": [
      "English",
      "Malay",
      "Chinese",
      "Arabic",
      "Indonesian"
    ]
  }

  return (
    <Script
      id="healthcare-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

export function MedicalTourismSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Malaysia Healthcare Tourism",
    "description": "Malaysia offers world-class healthcare services with internationally accredited hospitals and skilled medical professionals",
    "url": "https://malaysiahealthcare.org",
    "image": "https://malaysiahealthcare.org/images/malaysia-healthcare.jpg",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.2105",
      "longitude": "101.9758"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY",
      "addressRegion": "Malaysia"
    },
    "touristType": [
      "Medical Tourist",
      "Health Tourist",
      "Wellness Tourist"
    ],
    "includesAttraction": [
      {
        "@type": "TouristAttraction",
        "name": "JCI Accredited Hospitals",
        "description": "Over 13 JCI accredited hospitals providing international standard healthcare"
      },
      {
        "@type": "TouristAttraction", 
        "name": "Specialist Medical Centers",
        "description": "Specialized treatment centers for various medical conditions"
      },
      {
        "@type": "TouristAttraction",
        "name": "Wellness Centers",
        "description": "Traditional and modern wellness facilities"
      }
    ],
    "hasMap": "https://malaysiahealthcare.org/hospital-locations"
  }

  return (
    <Script
      id="medical-tourism-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}