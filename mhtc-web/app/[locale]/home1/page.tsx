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

// New enhanced components for home1
import WhyChooseUs from "@/components/home1/WhyChooseUs";
import TestimonialsSection from "@/components/home1/TestimonialsSection";
import StatsSection from "@/components/home1/StatsSection";
import CTASection from "@/components/home1/CTASection";
import JourneySectionHeader from "@/components/home1/JourneySectionHeader";

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

        {/* Your Healthcare Journey Section - Emphasized and placed right after hero */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                  <JourneySectionHeader isRTL={rtl} />
                </div>
                <JourneyBridge translations={journeyTranslations} isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Why Choose Us Section - Core value proposition */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <WhyChooseUs isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Stats Section - Social proof */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-12 md:py-16 bg-primary text-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <StatsSection isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Carousel Section - Visual showcase */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="w-full bg-white">
              <HomeCarousel translations={carouselTranslations} />
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Testimonials Section - Social proof */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <TestimonialsSection isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* News Updates Section - Latest information */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {newsTranslations.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    Latest updates from Malaysia Healthcare
                  </p>
                </div>
                <NewsUpdates translations={newsTranslations} isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>

        {/* Final CTA Section - Conversion */}
        <ErrorBoundary fallback={ErrorDisplay}>
          <Suspense fallback={<LoadingSpinner size="large" className="py-12" />}>
            <section className="py-16 md:py-20 relative overflow-hidden bg-gray-50">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <CTASection isRTL={rtl} />
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
} 