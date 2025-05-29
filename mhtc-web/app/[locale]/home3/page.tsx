import Image from "next/image"
import { Header } from "@/components/home3/header"
import { Footer } from "@/components/home3/footer"
import { HealingJourney } from "@/components/home3/healing-journey"
import { MonthlyTheme } from "@/components/home3/monthly-theme"
import { SupportNavigation } from "@/components/home3/support-navigation"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/home3/ui/container"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
          <Image
          src="/images/home3/hero-home3.jpg"
          alt="Malaysia Healthcare"
          fill
          priority
          className="object-cover"
        />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <Container className="relative z-10 py-20 md:py-32">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Begin Your Healing Journey in Malaysia
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                World-class healthcare services with the warmth of Malaysian hospitality
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="bg-[#C8102E] hover:bg-[#A00F26]">
                  Find a Hospital
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Healing Journey Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Your Healing Journey</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We&apos;re with you every step of the way. Explore each stage of your healthcare travel experience in
                Malaysia.
              </p>
            </div>
            <HealingJourney />
          </Container>
        </section>

        {/* Monthly Health Theme */}
        <section className="bg-slate-50 py-16 md:py-24">
          <Container>
            <MonthlyTheme />
          </Container>
        </section>

        {/* Support Navigation */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Explore More</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Discover resources and information to help plan your healthcare journey in Malaysia.
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
        <section className="relative overflow-hidden bg-[#C8102E] py-16 text-white md:py-24">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/images/home2/medical-tourism.jpg"
              alt="Malaysian cultural pattern"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <Container className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Begin Your Journey?</h2>
              <p className="mb-8 text-lg">
                Contact our dedicated healthcare travel concierge team for personalized assistance.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button size="lg" variant="outline" className="border-white bg-white text-[#C8102E] hover:bg-white/90">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
