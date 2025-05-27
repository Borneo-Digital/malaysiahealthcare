import React, { Suspense } from "react";
import { Metadata } from "next";
import { Locale } from "@/types/i18n";
import { getServerTranslations, isRTL } from "@/utils/translations";
import { HomeTranslations } from "@/types/translations";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ErrorDisplay from "@/components/ErrorDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";
import { JourneyTranslations } from "@/components/JourneyBridge";
import AnimatedHero from "@/components/AnimatedHero";
import JourneyBridge from "@/components/JourneyBridge";
import HomeCarousel from "@/components/HomeCarousel";
import NewsUpdates from "@/components/NewsUpdates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const homeT = getServerTranslations<HomeTranslations>(locale, "home");

  return {
    title: `${homeT.hero.title} | MHTC`,
    description: homeT.hero.subtitle,
    alternates: {
      canonical: `https://malaysiahealthcare.org`,
      languages: {
        en: "https://malaysiahealthcare.org/en",
        ms: "https://malaysiahealthcare.org/ms",
        id: "https://malaysiahealthcare.org/id",
        zh: "https://malaysiahealthcare.org/zh",
        ar: "https://malaysiahealthcare.org/ar",
      },
    },
  };
}

export default function Home1Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const translations = getServerTranslations<HomeTranslations>(locale, "home");
  const rtl = isRTL(locale);

  const journeyTranslations: JourneyTranslations = {
    ...translations.journey,
    meetAndGreet: "Meet & Greet",
    immigrationAssistance: "Immigration Assistance",
    transportation: "Transportation",
    conciergeServices: "Concierge Services",
    medicalProcedures: "Medical Procedures",
    specialistConsultation: "Specialist Consultation",
    patientCare: "Patient Care",
    companionActivities: "Companion Activities",
    rehabilitation: "Rehabilitation",
    tourismActivities: "Tourism Activities",
  };

  const carouselTranslations = {
    slides: translations.carousel.slides || [],
  };

  const newsTranslations = {
    title: translations.news.title,
    viewAll: translations.news.viewAll,
    items: translations.news.items || [],
  };

  return (
    <>
      <Header />
      <div className={`home-page ${rtl ? "rtl" : "ltr"}`}>
        {/* Hero Section */}
        <section className="w-full">
          <AnimatedHero translations={translations.hero} />
        </section>

        {/* Journey Section */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-24 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <JourneyBridge translations={journeyTranslations} isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Carousel Section */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="w-full">
              <HomeCarousel translations={carouselTranslations} />
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* News Updates Section */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <NewsUpdates translations={newsTranslations} isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
} 