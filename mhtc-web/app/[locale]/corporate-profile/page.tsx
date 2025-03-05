import { Metadata } from "next";
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
import { getServerTranslations, isRTL } from "@/utils/translations";
import { Locale } from "@/types/i18n";
import { CorporateProfileTranslations } from "@/types/translations";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const translations = getServerTranslations<CorporateProfileTranslations>(
    locale,
    "corporate-profile"
  );

  return {
    title: `${translations.hero.title} | Malaysia Healthcare Travel Council`,
    description: translations.hero.subtitle,
  };
}

const iconMap = {
  qualityAssurance: Award,
  patientExperience: Users,
  industryCollaboration: Building,
  globalPromotion: Globe,
  innovation: Sparkles,
  capacityBuilding: BookOpen,
};

export default function CorporateProfile({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const translations = getServerTranslations<CorporateProfileTranslations>(
    locale,
    "corporate-profile"
  );
  const rtl = isRTL(locale);

  const focusAreaKeys = [
    "qualityAssurance",
    "patientExperience",
    "industryCollaboration",
    "globalPromotion",
    "innovation",
    "capacityBuilding",
  ];

  return (
    <div
      className={`max-w-7xl mx-auto bg-white min-h-screen ${
        rtl ? "rtl" : "ltr"
      }`}
    >
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {translations.pageTitle}
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl"
          tabIndex={0}
        >
          {translations.hero.subtitle}
        </p>

        {/* Mission & Vision Section */}
        <section className="mb-16" aria-labelledby="mission-vision-title">
          <h3 id="mission-vision-title" className="sr-only">
            {translations.mission.title} & {translations.vision.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {translations.mission.title}
                </h2>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      {translations.mission.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {translations.vision.title}
                </h3>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      {translations.vision.content}
                    </p>
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
        </section>

        {/* Focus Areas Section */}
        <section className="mb-16" aria-labelledby="focus-areas-title">
          <h2
            id="focus-areas-title"
            className="text-2xl font-semibold text-primary mb-8"
            tabIndex={0}
          >
            {translations.focusAreas.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreaKeys.map((key) => {
              const Icon = iconMap[key as keyof typeof iconMap];
              return (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-1">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit">
                      <Icon
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-xl">
                      {
                        translations.focusAreas.areas[
                          key as keyof typeof translations.focusAreas.areas
                        ].title
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {
                        translations.focusAreas.areas[
                          key as keyof typeof translations.focusAreas.areas
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
        <section className="mb-16" aria-labelledby="achievements-title">
          <h2
            id="achievements-title"
            className="text-2xl font-semibold text-primary mb-8"
            tabIndex={0}
          >
            {translations.achievements.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["facilities", "patients", "awards", "years"] as const).map(
              (statKey) => (
                <Card
                  key={statKey}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-primary mb-2 text-center">
                      {translations.achievements.stats[statKey].number}
                    </p>
                    <p className="text-gray-600 text-center">
                      {translations.achievements.stats[statKey].label}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-title">
          <Card className="bg-primary text-white border-none">
            <CardContent className="p-8">
              <h2
                id="cta-title"
                className="text-2xl font-bold mb-4 text-center"
                tabIndex={0}
              >
                {translations.cta.title}
              </h2>
              <p className="text-white/90 mb-6 text-center">
                {translations.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    {translations.cta.button}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
