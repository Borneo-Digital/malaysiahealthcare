import { Metadata } from 'next'
import { Header } from '@/components/home3/header'
import { Footer } from '@/components/home3/footer'
import { Container } from '@/components/home3/ui/container'
import { Home3JourneyNavigation } from '@/components/home3/home3-journey-navigation'
import { Home3PreArrivalHero } from '@/components/home3/home3-pre-arrival-hero'
import { Home3PlanningSteps } from '@/components/home3/home3-planning-steps'
import { QuickFactsSlider } from '@/components/home3/quick-facts-slider'
import { Home3DedicatedSupportCTA } from '@/components/home3/home3-dedicated-support-cta'

export const metadata: Metadata = {
  title: 'Pre-Arrival Planning | Home3 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Begin your healthcare journey with confidence. Comprehensive pre-arrival planning guide for your medical travel to Malaysia.',
}

export default function Home3PreArrival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home3PreArrivalHero />
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home3JourneyNavigation activeStage="pre-arrival" />
        </Container>
        
        {/* Planning Steps Section */}
        <Container className="py-16">
          <Home3PlanningSteps />
        </Container>
        
        {/* Malaysia Quick Facts */}
        <section className="py-16 bg-white/50">
          <Container>
            <QuickFactsSlider />
          </Container>
        </section>
        
        {/* Dedicated Support CTA */}
        <Container className="py-16">
          <Home3DedicatedSupportCTA />
        </Container>
      </main>
      
      <Footer />
    </div>
  )
} 