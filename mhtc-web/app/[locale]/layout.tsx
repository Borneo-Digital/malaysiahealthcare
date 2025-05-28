// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { locales } from "@/middleware";
import "../globals.css";
import { HeaderTranslations } from "@/types/translations";
import TopNavBar from "@/components/TopNavBar";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className={inter.variable}>
      <body
        className={`${
          isRTL ? "rtl" : "ltr"
        } flex flex-col min-h-screen bg-white`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded"
        >
          {headerT.accessibility.skipToContent}
        </a>

        <TopNavBar />
        {/* <Header /> */}

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
