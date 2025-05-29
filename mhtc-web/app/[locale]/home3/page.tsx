import Image from "next/image"
import { Header } from "@/components/home3/header"
import { Footer } from "@/components/home3/footer"
import { HealingJourney } from "@/components/home3/healing-journey"
import { MonthlyTheme } from "@/components/home3/monthly-theme"
import { SupportNavigation } from "@/components/home3/support-navigation"
import { InteractiveHero } from "@/components/home3/interactive-hero"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/home3/ui/container"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Interactive Hero Section */}
        <InteractiveHero />

        {/* Healing Journey Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <Container>
            <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Your Healing Journey</h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground px-4 sm:px-0">
                We&apos;re with you every step of the way. Explore each stage of your healthcare travel experience in
                Malaysia, designed with our commitment to quality, affordability, accessibility, communication, and hospitality.
              </p>
            </div>
            <HealingJourney />
          </Container>
        </section>

        {/* Monthly Health Theme */}
        <section className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <Container>
            <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Monthly Health Focus</h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground px-4 sm:px-0">
                Stay informed about important health topics with our monthly awareness campaigns and special initiatives.
              </p>
            </div>
            <MonthlyTheme />
          </Container>
        </section>

        {/* Support Navigation */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <Container>
            <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Explore More</h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground px-4 sm:px-0">
                Discover comprehensive resources and information to help plan your healthcare journey in Malaysia.
              </p>
            </div>
            <SupportNavigation />
          </Container>
        </section>

        {/* Testimonials Section 
        <section className="bg-slate-50 py-16 md:py-24">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Patient Stories</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Hear from patients who have experienced healthcare excellence in Malaysia.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                      <Image
                        src={patientImages[i % patientImages.length]}
                        alt={`Patient ${i + 1}`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Patient Name</h3>
                      <p className="text-sm text-muted-foreground">Country of Origin</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The quality of care I received in Malaysia was exceptional. From the moment I arrived until my
                    departure, every detail was taken care of with professionalism and warmth."
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline">View All Stories</Button>
            </div>
          </Container>
        </section>*/}

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
