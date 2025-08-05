// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";
import { locales } from "@/middleware";
import "../globals.css";
import { HeaderTranslations } from "@/types/translations";
import { OrganizationSchema, WebsiteSchema } from "@/components/JsonLdSchema";
import { HealthcareSchema, MedicalTourismSchema } from "@/components/HealthcareSchema";
import WebVitals from "@/components/WebVitals";
import GoogleSearchConsole from "@/components/GoogleSearchConsole";

// Generate static paths for all locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Metadata
export const metadata: Metadata = {
  title: "Malaysia Healthcare Travel Council",
  description:
    "Your premier destination for world-class healthcare services in Malaysia. Discover JCI-accredited hospitals, world-class medical specialists, and comprehensive healthcare tourism services.",
  keywords: [
    "Malaysia healthcare",
    "medical tourism",
    "JCI accredited hospitals",
    "healthcare travel",
    "medical treatment Malaysia",
    "MHTC",
    "medical tourism Malaysia",
    "health tourism",
    "international healthcare"
  ],
  authors: [{ name: "Malaysia Healthcare Travel Council" }],
  creator: "Malaysia Healthcare Travel Council",
  publisher: "Malaysia Healthcare Travel Council",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined, // Only include if env var is set
  },
  other: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION
    })
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://malaysiahealthcare.org',
    siteName: 'Malaysia Healthcare Travel Council',
    title: 'Malaysia Healthcare Travel Council - World-Class Healthcare Services',
    description: 'Discover world-class healthcare in Malaysia with MHTC - your trusted guide to medical tourism with JCI-accredited hospitals and international-standard medical care.',
    images: [
      {
        url: 'https://malaysiahealthcare.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Malaysia Healthcare Travel Council',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@malaysiahealthcare',
    creator: '@malaysiahealthcare',
    title: 'Malaysia Healthcare Travel Council - World-Class Healthcare Services',
    description: 'Discover world-class healthcare in Malaysia with MHTC - your trusted guide to medical tourism.',
    images: ['https://malaysiahealthcare.org/og-image.jpg'],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Check if the language is right-to-left
  const isRTL = locale === "ar";

  // Server component approach - Using dynamic import instead of require
  const headerT: HeaderTranslations = await import(`@/locales/${locale}/header.json`).then(
    (module) => module.default || module
  );

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className="font-helvetica">
      <body
        className={`${
          isRTL ? "rtl" : "ltr"
        } flex flex-col min-h-screen bg-white font-helvetica`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded"
        >
          {headerT.accessibility.skipToContent}
        </a>

        {/* SEO Schema Markup */}
        <OrganizationSchema locale={locale} />
        <WebsiteSchema locale={locale} />
        <HealthcareSchema />
        <MedicalTourismSchema />

        {/* Google Search Console */}
        <GoogleSearchConsole />

        {/* Web Vitals Tracking */}
        <WebVitals />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XF937XX8XL" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XF937XX8XL');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
