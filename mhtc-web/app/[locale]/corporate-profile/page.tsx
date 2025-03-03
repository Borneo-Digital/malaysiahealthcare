"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users,
  Building,
  Globe,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { CorporateProfileTranslations } from "@/types/translations";

const iconMap = {
  qualityAssurance: Award,
  patientExperience: Users,
  industryCollaboration: Building,
  globalPromotion: Globe,
  innovation: Sparkles,
  capacityBuilding: BookOpen,
};

export default function CorporateProfile() {
  const { t, isRTL } =
    useTranslation<CorporateProfileTranslations>("corporate-profile");

  const focusAreaKeys = [
    "qualityAssurance",
    "patientExperience",
    "industryCollaboration",
    "globalPromotion",
    "innovation",
    "capacityBuilding",
  ];

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className={`container mx-auto px-4 py-16 ${isRTL ? "rtl" : ""}`}>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg text-gray-600">{t.hero.subtitle}</p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {t.mission.title}
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600">{t.mission.content}</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {t.vision.title}
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600">{t.vision.content}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/corporate-image.png"
              alt="MHTC Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Focus Areas Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
            {t.focusAreas.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreaKeys.map((key) => {
              const Icon = iconMap[key as keyof typeof iconMap];
              return (
                <Card
                  key={key}
                  className="border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <CardHeader className="space-y-1">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {
                        t.focusAreas.areas[
                          key as keyof typeof t.focusAreas.areas
                        ].title
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {
                        t.focusAreas.areas[
                          key as keyof typeof t.focusAreas.areas
                        ].description
                      }
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
            {t.achievements.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["facilities", "patients", "awards", "years"] as const).map(
              (statKey) => (
                <Card
                  key={statKey}
                  className="text-center border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-primary mb-2">
                      {t.achievements.stats[statKey].number}
                    </p>
                    <p className="text-gray-600">
                      {t.achievements.stats[statKey].label}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-primary text-white border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-white/90 mb-6">{t.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    {t.cta.button}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
