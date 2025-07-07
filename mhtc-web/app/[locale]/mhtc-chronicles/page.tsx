import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from '@/components/home4/header';
import { Footer } from '@/components/home4/footer';
import { Button } from "@/components/home4/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/home4/ui/container";
import { getServerTranslations } from "@/utils/translations";
import { Locale } from "@/types/i18n";
import { MHTCChroniclesTranslations } from "@/types/translations";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

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
    category: "Industry Updates",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Healthcare+Ranking",
  },
  {
    id: 2,
    title: "New State-of-the-Art Cancer Treatment Center Opens in Kuala Lumpur",
    excerpt:
      "A cutting-edge cancer treatment facility has been inaugurated in Kuala Lumpur, offering advanced therapies and personalized care.",
    date: "2023-04-28",
    category: "Healthcare Innovations",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Cancer+Center",
  },
  {
    id: 3,
    title: "MHTC Launches Digital Health Initiative for International Patients",
    excerpt:
      "The Malaysia Healthcare Travel Council introduces a new digital platform to streamline services for international patients.",
    date: "2023-04-10",
    category: "Digital Health",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Digital+Health",
  },
  {
    id: 4,
    title: "Patient Success Story: Journey to Recovery in Malaysia",
    excerpt:
      "Follow the inspiring journey of an international patient who found hope and healing through Malaysia's healthcare system.",
    date: "2023-03-22",
    category: "Patient Stories",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Patient+Story",
  },
  {
    id: 5,
    title: "Malaysian Hospitals Receive International Accreditation",
    excerpt:
      "Several Malaysian healthcare facilities have been awarded prestigious international accreditations for quality and safety.",
    date: "2023-03-15",
    category: "Industry Updates",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Accreditation",
  },
  {
    id: 6,
    title: "Travel Tips: Planning Your Medical Journey to Malaysia",
    excerpt:
      "Essential travel tips and guidance for international patients planning their healthcare journey to Malaysia.",
    date: "2023-03-08",
    category: "Travel Tips",
    image:
      "/images/maalaysia-image.webp?height=200&width=400&text=Travel+Tips",
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

  return (
    <div className="min-h-screen bg-grey-50">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mhtc-primary to-mhtc-primary-hover py-16">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-white text-mhtc-primary border-white mb-6">
                <Newspaper className="h-4 w-4 mr-2" />
                News & Updates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-grey-900">
                {translations.pageTitle}
              </h1>
              <p className="text-xl text-grey-700 mb-8">
                Stay updated with the latest news, innovations, and stories from Malaysia&apos;s healthcare industry.
              </p>
            </div>
          </Container>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-mhtc-primary text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-grey-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <CardTitle className="text-xl mb-3 text-grey-900 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-grey-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white"
                      asChild
                    >
                      <Link href={`/news/${article.id}`}>
                        {translations.articles.readMore}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Categories Section
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-grey-900 mb-4">
                {translations.categories.title}
              </h2>
              <p className="text-lg text-grey-600 max-w-2xl mx-auto">
                Explore our content by category to find the information most relevant to your interests.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categoryItems.map((category) => (
                <Button 
                  key={category} 
                  variant="outline"
                  className="border-grey-300 text-grey-700 hover:border-mhtc-primary hover:text-mhtc-primary hover:bg-mhtc-primary/5"
                >
                  {category}
                </Button>
              ))}
            </div>
          </Container>
        </section> */}

        {/* Newsletter Section
        <section className="py-16 bg-grey-50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mhtc-primary/10 mb-6">
                  <Mail className="h-8 w-8 text-mhtc-primary" />
                </div>
                <h2 className="text-2xl font-bold text-grey-900 mb-4">
                  {translations.newsletter.title}
                </h2>
                <p className="text-grey-600 mb-6">
                  {translations.newsletter.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder={translations.newsletter.emailPlaceholder}
                    className="flex-grow px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-mhtc-primary focus:border-mhtc-primary outline-none"
                  />
                  <Button className="bg-mhtc-primary hover:bg-mhtc-primary-hover text-white px-8">
                    {translations.newsletter.subscribeButton}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
