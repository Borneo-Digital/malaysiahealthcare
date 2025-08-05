import Script from 'next/script'

interface OrganizationSchemaProps {
  locale: string
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  // Locale-specific descriptions
  const descriptions = {
    en: "Official tourism promotion agency for Malaysia's healthcare travel industry",
    ms: "Agensi promosi pelancongan rasmi untuk industri perjalanan penjagaan kesihatan Malaysia",
    id: "Badan promosi pariwisata resmi untuk industri perjalanan kesehatan Malaysia",
    zh: "马来西亚医疗旅游行业官方推广机构",
    ar: "وكالة الترويج السياحي الرسمية لصناعة السفر الصحي في ماليزيا"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Malaysia Healthcare Travel Council",
    "alternateName": "MHTC",
    "url": `https://malaysiahealthcare.org/${locale}`,
    "logo": "https://malaysiahealthcare.org/logo.png",
    "description": descriptions[locale as keyof typeof descriptions] || descriptions.en,
    "foundingDate": "2009",
    "inLanguage": locale,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY",
      "addressLocality": "Kuala Lumpur",
      "addressRegion": "Kuala Lumpur",
      "postalCode": "50088",
      "streetAddress": "Level 1, MATRADE Exhibition and Convention Centre"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+60-3-2694-5454",
      "contactType": "customer service",
      "availableLanguage": ["English", "Malay", "Indonesian", "Chinese", "Arabic"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.facebook.com/MalaysiaHealthcare",
      "https://www.instagram.com/malaysiahealthcare",
      "https://www.linkedin.com/company/malaysia-healthcare-travel-council",
      "https://www.youtube.com/user/malaysiahealthcare"
    ],
    "knowsAbout": [
      "Medical Tourism",
      "Healthcare Services",
      "Medical Treatment",
      "Hospital Services",
      "Health Tourism"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Malaysia"
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface WebsiteSchemaProps {
  locale: string
}

export function WebsiteSchema({ locale }: WebsiteSchemaProps) {
  // Locale-specific website descriptions
  const descriptions = {
    en: "Discover world-class healthcare in Malaysia with MHTC - your trusted guide to medical tourism",
    ms: "Temui penjagaan kesihatan bertaraf dunia di Malaysia dengan MHTC - panduan terpercaya anda untuk pelancongan perubatan",
    id: "Temukan layanan kesehatan kelas dunia di Malaysia dengan MHTC - panduan terpercaya Anda untuk wisata medis",
    zh: "通过MHTC探索马来西亚的世界级医疗服务 - 您值得信赖的医疗旅游指南",
    ar: "اكتشف الرعاية الصحية ذات المستوى العالمي في ماليزيا مع MHTC - دليلك الموثوق للسياحة الطبية"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Malaysia Healthcare Travel Council",
    "url": `https://malaysiahealthcare.org/${locale}`,
    "description": descriptions[locale as keyof typeof descriptions] || descriptions.en,
    "inLanguage": locale,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://malaysiahealthcare.org/${locale}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Malaysia Healthcare Travel Council",
      "logo": {
        "@type": "ImageObject",
        "url": "https://malaysiahealthcare.org/logo.png"
      }
    },
    "alternativeHeadline": descriptions[locale as keyof typeof descriptions] || descriptions.en
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}