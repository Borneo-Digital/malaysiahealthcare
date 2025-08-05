import { Metadata } from "next";
import { Locale } from "@/types/i18n";
import { getServerTranslations } from "@/utils/translations";
import { HomeTranslations } from "@/types/translations";
import Image from "next/image"
import { Header } from "@/components/home4/header"
import { Footer } from "@/components/home4/footer"
import Hero4 from "@/components/home4/hero4"
import HealingJourney from "@/components/home4/healing-journey"
// import StatsSection from "@/components/home4/stats"
import { Button } from "@/components/home4/ui/button"
import { Container } from "@/components/home4/ui/container"

// import MHWellnessEvents from "@/components/home4/mh-wellness-events"
import Testimonials from "@/components/home4/testimonials"
import { ArrowRight } from "lucide-react"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const homeT = getServerTranslations<HomeTranslations>(locale, "home");

  return {
    title: `${homeT.hero.title} | Malaysia Healthcare Travel Council`,
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Interactive Hero Section */}
        <Hero4 />

        {/* Healing Journey Section */}
        <HealingJourney />

        {/* Stats Section */}
        {/* <section className="bg-[#BE1E2D] py-16 md:py-24">
          <Container>
            <StatsSection />
          </Container>
        </section> */}

        {/* MH Wellness Events for Expat Communities */}
        {/* <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <MHWellnessEvents />
          </Container>
        </section> */}

        {/* Patient Testimonials */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <Testimonials />
          </Container>
        </section>

        {/* CTA Section - Malaysian Heritage Design */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#BE1E2D] via-[#BE1E2D] to-[#A50E25] py-20 md:py-32">
          {/* Bunga Raya Traditional Malaysian Pattern - Spread Across */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Main large Bunga Raya pattern - full width but more subtle */}
            <div className="absolute inset-0 opacity-25">
              <Image
                src="/images/Bunga Raya Asset-01.png"
                alt="Bunga Raya - Malaysian hibiscus heritage pattern"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={false}
              />
            </div>
            {/* Secondary Bunga Raya pattern - right side for depth */}
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-20">
              <Image
                src="/images/Bunga Raya Asset-01.png"
                alt="Bunga Raya decorative pattern"
                fill
                className="object-cover object-right-top scale-110"
                sizes="67vw"
                priority={false}
              />
            </div>
            {/* Home4 decorative motif - spread more evenly */}
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 opacity-15">
              <Image
                src="/images/home4/motif.png"
                alt="Malaysian decorative motif"
                fill
                className="object-contain object-bottom-center"
                sizes="50vw"
                priority={false}
              />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#BE1E2D]/80 via-[#BE1E2D]/60 to-transparent z-10"></div>

          <Container className="relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
              {/* Left Content - Asymmetrical Layout */}
              <div className="space-y-8 text-white">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Ready to Begin Your
                    <span className="block text-white">Healthcare Journey?</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">
                    Experience world-class medical care with authentic Malaysian hospitality. 
                    Our dedicated concierge team ensures your peace of mind throughout your journey.
                  </p>
                </div>

                {/* Malaysian-themed Contact Actions */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="group bg-white text-[#BE1E2D] hover:bg-gray-50 hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 py-4 font-semibold shadow-lg rounded-lg"
                      asChild
                    >
                      <a href="/contact">
                        <span className="flex items-center gap-2">
                          Contact Our Team
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="group border-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#BE1E2D] transition-all duration-300 text-base md:text-lg px-8 py-4 font-semibold rounded-lg"
                      asChild
                    >
                      <a href="https://wa.me/60188700100" target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2">
                          WhatsApp Us
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </Button>
                  </div>

                  {/* Quick Contact Info */}
                  {/* <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>+603 2785 1814</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>58 Hospitals Network</span>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right Side - Clean space for Bunga Raya pattern visibility */}
              <div className="hidden lg:block relative">
                <div className="relative h-96">
                  {/* Clean space allows the beautiful Bunga Raya pattern to be the focus */}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
