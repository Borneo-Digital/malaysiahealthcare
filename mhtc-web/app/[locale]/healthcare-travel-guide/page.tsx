import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Plane,
  Hotel,
  Car,
  CreditCard,
  Stethoscope,
  Users,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { getServerTranslations, isRTL } from "@/utils/translations";
import { Locale } from "@/types/i18n";
import { HealthcareTravelGuideTranslations } from "@/types/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = getServerTranslations<HealthcareTravelGuideTranslations>(
    locale,
    "healthcare-travel-guide"
  );

  return {
    title: `${translations.pageTitle} | Malaysia Healthcare Travel Council`,
    description: translations.pageDescription,
    alternates: {
      canonical: `https://malaysiahealthcare.org/healthcare-travel-guide`,
      languages: {
        en: "https://malaysiahealthcare.org/en/healthcare-travel-guide",
        ms: "https://malaysiahealthcare.org/ms/healthcare-travel-guide",
        id: "https://malaysiahealthcare.org/id/healthcare-travel-guide",
        zh: "https://malaysiahealthcare.org/zh/healthcare-travel-guide",
        ar: "https://malaysiahealthcare.org/ar/healthcare-travel-guide",
      },
    },
  };
}

// const quickLinks = [
//   {
//     icon: Plane,
//     title: "Visa Information",
//     description: "Entry requirements and visa processes",
//   },
//   {
//     icon: Hotel,
//     title: "Accommodation",
//     description: "Find suitable places to stay",
//   },
//   {
//     icon: Car,
//     title: "Local Transportation",
//     description: "Getting around in Malaysia",
//   },
//   {
//     icon: CreditCard,
//     title: "Financial Planning",
//     description: "Costs and payment information",
//   },
// ];

// const journeyStages = [
//   {
//     title: "Pre-Arrival",
//     description: "Prepare for your trip",
//     icon: Calendar,
//   },
//   { title: "Arrival", description: "Your welcome to Malaysia", icon: Plane },
//   {
//     title: "Treatment",
//     description: "World-class healthcare",
//     icon: Stethoscope,
//   },
//   { title: "Post-Treatment", description: "Recovery and beyond", icon: Users },
// ];

export default async function HealthcareTravelGuide({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const translations = getServerTranslations<HealthcareTravelGuideTranslations>(
    locale,
    "healthcare-travel-guide"
  );
  const rtl = isRTL(locale);

  // Map translations to quickLinks data
  const translatedQuickLinks = [
    {
      icon: Plane,
      title: translations.resources?.items?.visa?.title || "Visa Information",
      description:
        translations.resources?.items?.visa?.description ||
        "Entry requirements and visa processes",
    },
    {
      icon: Hotel,
      title: translations.quickLinks?.accommodation || "Accommodation",
      description:
        translations.sections?.beforeTravel?.steps?.planning?.items
          ?.accommodation || "Find suitable places to stay",
    },
    {
      icon: Car,
      title: translations.quickLinks?.transportation || "Local Transportation",
      description:
        translations.sections?.beforeTravel?.steps?.planning?.items
          ?.transportation || "Getting around in Malaysia",
    },
    {
      icon: CreditCard,
      title: translations.quickLinks?.financialPlanning || "Financial Planning",
      description:
        translations.sections?.beforeTravel?.steps?.planning?.items?.expenses ||
        "Costs and payment information",
    },
  ];

  // Map translations to journey stages
  const translatedJourneyStages = [
    {
      title: translations.sections?.beforeTravel?.title || "Pre-Arrival",
      description:
        translations.sections?.beforeTravel?.description ||
        "Prepare for your trip",
      icon: Calendar,
    },
    {
      title:
        translations.sections?.duringStay?.steps?.arrival?.title || "Arrival",
      description:
        translations.sections?.duringStay?.steps?.arrival?.description ||
        "Your welcome to Malaysia",
      icon: Plane,
    },
    {
      title:
        translations.sections?.duringStay?.steps?.treatment?.title ||
        "Treatment",
      description:
        translations.sections?.duringStay?.steps?.treatment?.description ||
        "World-class healthcare",
      icon: Stethoscope,
    },
    {
      title: translations.sections?.afterCare?.title || "Post-Treatment",
      description:
        translations.sections?.afterCare?.description || "Recovery and beyond",
      icon: Users,
    },
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
          {translations.pageDescription}
        </p>

        {/* Quick Links Section */}
        <section className="mb-8 sm:mb-16" aria-labelledby="quick-links-title">
          <h2
            id="quick-links-title"
            className="text-2xl font-semibold mb-4 sm:mb-6"
            tabIndex={0}
          >
            {translations.resources?.title || "Essential Travel Information"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {translatedQuickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <link.icon
                    className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2"
                    aria-hidden="true"
                  />
                  <CardTitle>{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <span className="sr-only">
                      {translations.quickLinks?.learnMore || "Learn More"}
                    </span>
                    {translations.quickLinks?.learnMore || "Learn More"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Healthcare Journey Section */}
        <section className="mb-8 sm:mb-16" aria-labelledby="journey-title">
          <h2
            id="journey-title"
            className="text-2xl font-semibold mb-4 sm:mb-6"
            tabIndex={0}
          >
            {translations.hero?.title || "Your Healthcare Journey"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {translatedJourneyStages.map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <stage.icon
                    className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2"
                    aria-hidden="true"
                  />
                  <CardTitle>{stage.title}</CardTitle>
                  <CardDescription>{stage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {translations.sections?.beforeTravel?.description ||
                      "Learn about what to expect and how to prepare for this stage of your journey."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/${locale}/${stage.title.toLowerCase()}`}
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <span className="sr-only">
                        Explore {stage.title} stage
                      </span>
                      {translations.journeyStages?.exploreStage ||
                        "Explore Stage"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 sm:mb-16" aria-labelledby="faq-title">
          <h2
            id="faq-title"
            className="text-2xl font-semibold mb-4 sm:mb-6"
            tabIndex={0}
          >
            {translations.faqs?.title || "Frequently Asked Questions"}
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle
                  className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary"
                  aria-hidden="true"
                />
                {translations.faqs?.description ||
                  "Common Questions About Healthcare Travel"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {translations.faqs?.items?.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <span className="sr-only">
                  {translations.faqs?.viewAll || "View All FAQs"}
                </span>
                {translations.faqs?.viewAll || "View All FAQs"}
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Testimonials Section */}
        <section className="mb-8 sm:mb-16" aria-labelledby="testimonials-title">
          <h2
            id="testimonials-title"
            className="text-2xl font-semibold mb-4 sm:mb-6"
            tabIndex={0}
          >
            {translations.testimonials?.title || "Patient Testimonials"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {translations.testimonials?.items?.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Image
                      src={`/images/patient-mock.jpeg?height=50&width=50&text=Patient+${
                        index + 1
                      }`}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.patientName}
                      </CardTitle>
                      <CardDescription>
                        {testimonial.treatmentType}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/${locale}/testimonials`}
                    className="text-primary hover:underline"
                  >
                    <span className="sr-only">
                      {`${
                        translations.testimonials?.screenReaderPrefix ||
                        "Read full story of Patient"
                      } ${index + 1}`}
                    </span>
                    {translations.testimonials?.readMore || "Read Full Story"} →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-title">
          <Card className="bg-primary text-white">
            <CardHeader>
              <CardTitle
                id="cta-title"
                className="text-xl sm:text-2xl"
                tabIndex={0}
              >
                {translations.cta?.title ||
                  "Ready to Start Your Healthcare Journey?"}
              </CardTitle>
              <CardDescription className="text-white/80">
                {translations.cta?.description ||
                  "Our team is here to assist you every step of the way."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4" tabIndex={0}>
                {translations.resources?.description ||
                  "Get personalized support for your medical travel to Malaysia. We&apos;re here to answer your questions and help you plan your journey."}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="secondary" className="w-full sm:w-auto">
                <span className="sr-only">
                  {translations.cta?.button || "Contact Us"}
                </span>
                {translations.cta?.button || "Contact Us"}
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <span className="sr-only">
                  {translations.resources?.items?.tourism?.link ||
                    "Download Travel Guide"}
                </span>
                {translations.resources?.items?.tourism?.link ||
                  "Download Travel Guide"}
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
