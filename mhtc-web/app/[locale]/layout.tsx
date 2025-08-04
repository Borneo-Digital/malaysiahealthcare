// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";
import { locales } from "@/middleware";
import "../globals.css";
import { HeaderTranslations } from "@/types/translations";

// Generate static paths for all locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Metadata
export const metadata: Metadata = {
  title: "Malaysia Healthcare Travel Council",
  description:
    "Your premier destination for world-class healthcare services in Malaysia",
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
