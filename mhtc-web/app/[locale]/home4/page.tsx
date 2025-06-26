import Image from "next/image"
import { Header } from "@/components/home4/header"
import { Footer } from "@/components/home4/footer"
import Hero4 from "@/components/home4/hero4"
import HealingJourney from "@/components/home4/healing-journey"
import StatsSection from "@/components/home4/stats"
import { Button } from "@/components/home4/ui/button"
import { Container } from "@/components/home4/ui/container"

export default function Home4Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Interactive Hero Section */}
        <Hero4 />

        {/* Healing Journey Section */}
        <HealingJourney />

        {/* Stats Section */}
        <section className="bg-[#BE1E2D] py-16 md:py-24">
          <Container>
            <StatsSection />
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-[#BE1E2D] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/images/home2/medical-tourism.jpg"
              alt="Malaysian healthcare excellence"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center px-4 sm:px-0">
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Begin Your Journey?</h2>
              <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                Contact our dedicated healthcare travel concierge team for personalized assistance and experience quality care for your peace of mind.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
                <Button size="lg" variant="outline" className="border-white bg-white text-[#BE1E2D] hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Download Guide
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
} 