import Image from "next/image"
import { Header } from "@/components/home4/header"
import { Footer } from "@/components/home4/footer"
import Hero4 from "@/components/home4/hero4"
import HealingJourney from "@/components/home4/healing-journey"
import StatsSection from "@/components/home4/stats"
import { Button } from "@/components/home4/ui/button"
import { Container } from "@/components/home4/ui/container"

import { MonthlyTheme } from "@/components/home4/monthly-theme"
import NewsUpdates from "@/components/home4/news-events"
import { ArrowRight, Download } from "lucide-react"


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

        {/* Monthly Theme */}
        <section className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <Container>
            <MonthlyTheme />
          </Container>
        </section>

        {/* News Updates Section - Latest information */}
        <section className="py-16 md:py-20 bg-white">
          <NewsUpdates />
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-mhtc-primary py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 text-white">
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
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-white text-mhtc-primary hover:bg-white/95 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold shadow-lg hover:shadow-xl border-2 border-white rounded-[10px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-mhtc-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group relative overflow-hidden border-2 border-white text-white bg-transparent hover:bg-white hover:text-mhtc-primary hover:border-white transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold hover:scale-105 rounded-[10px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Guide
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
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