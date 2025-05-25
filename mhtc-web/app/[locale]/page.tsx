// app/[locale]/page.tsx
import React, { Suspense } from "react";
import { Metadata } from "next";
import { Locale } from "@/types/i18n";
import { getServerTranslations, isRTL } from "@/utils/translations";
import { HomeTranslations } from "@/types/translations";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ErrorDisplay from "@/components/ErrorDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";
import { JourneyTranslations } from "@/components/JourneyBridge";
import { redirect } from "next/navigation";

// Your existing components
import AnimatedHero from "@/components/AnimatedHero";
import JourneyBridge from "@/components/JourneyBridge";
import HomeCarousel from "@/components/HomeCarousel";
import NewsUpdates from "@/components/NewsUpdates";

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

export default function Page() {
  redirect("/home1");
  return null;
}
