import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
// import { Home4JourneyNavigation } from '@/components/home4/home4-journey-navigation'
import { Home4PreArrivalHero } from '@/components/home4/home4-pre-arrival-hero'
import { Home4PlanningSteps } from '@/components/home4/home4-planning-steps'
// import { QuickFactsSlider } from '@/components/home4/quick-facts-slider'

import { CTAPreArrival } from '@/components/home4/cta-pre-arrival'

export const metadata: Metadata = {
  title: 'Pre-Arrival Planning | Home4 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Begin your healthcare journey with confidence. Comprehensive pre-arrival planning guide for your medical travel to Malaysia.',
}

export default function Home4PreArrival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4PreArrivalHero />
        
        {/* Journey Navigation
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="pre-arrival" />
        </Container> */}
        
        {/* Planning Steps Section */}
        <Container className="py-16">
          <Home4PlanningSteps />
        </Container>
        
        {/* Malaysia Quick Facts
        <section className="py-16 bg-white/50">
          <Container>
            <QuickFactsSlider />
          </Container>
        </section> */}

        {/* CTA Steps */}
        <Container className="py-16">
          <CTAPreArrival />
        </Container>
        
        {/* Dedicated Support CTA
        <Container className="py-16">
          <Home4DedicatedSupportCTA />
        </Container> */}
      </main>
      
      <Footer />
    </div>
  )
} 