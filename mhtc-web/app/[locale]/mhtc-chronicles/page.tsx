import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerTranslations, isRTL } from "@/utils/translations";
import { Locale } from "@/types/i18n";
import { MHTCChroniclesTranslations } from "@/types/translations";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const translations = getServerTranslations<MHTCChroniclesTranslations>(
    locale,
    "mhtc-chronicles"
  );

  return {
    title: `${translations.pageTitle} | Malaysia Healthcare Travel Council`,
    description: translations.pageDescription,
  };
}

const newsArticles = [
  {
    id: 1,
    title: "Malaysia Ranked Top Healthcare Destination in Southeast Asia",
    excerpt:
      "Malaysia has been recognized as the leading healthcare destination in Southeast Asia, according to a recent international survey.",
    date: "2023-05-15",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Healthcare+Ranking",
  },
  {
    id: 2,
    title: "New State-of-the-Art Cancer Treatment Center Opens in Kuala Lumpur",
    excerpt:
      "A cutting-edge cancer treatment facility has been inaugurated in Kuala Lumpur, offering advanced therapies and personalized care.",
    date: "2023-04-28",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Cancer+Center",
  },
  {
    id: 3,
    title: "MHTC Launches Digital Health Initiative for International Patients",
    excerpt:
      "The Malaysia Healthcare Travel Council introduces a new digital platform to streamline services for international patients.",
    date: "2023-04-10",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Digital+Health",
  },
];

export default function MHTCChronicles({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const translations = getServerTranslations<MHTCChroniclesTranslations>(
    locale,
    "mhtc-chronicles"
  );
  const rtl = isRTL(locale);

  const categoryItems = [
    translations.categories.items.healthcareInnovations,
    translations.categories.items.patientStories,
    translations.categories.items.industryUpdates,
    translations.categories.items.events,
    translations.categories.items.travelTips,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id}>
              <CardHeader>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href={`/news/${article.id}`}>
                    {translations.articles.readMore}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            {translations.categories.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            {categoryItems.map((category) => (
              <Button key={category} variant="outline">
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            {translations.newsletter.title}
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">{translations.newsletter.description}</p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder={translations.newsletter.emailPlaceholder}
                  className="flex-grow px-4 py-2 border rounded-md"
                />
                <Button>{translations.newsletter.subscribeButton}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
