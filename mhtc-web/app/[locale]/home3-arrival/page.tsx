import { Metadata } from 'next'
import { Header } from '@/components/home3/header'
import { Footer } from '@/components/home3/footer'
import { Container } from '@/components/home3/ui/container'
import { Home3JourneyNavigation } from '@/components/home3/home3-journey-navigation'
import { Home3ArrivalHero } from '@/components/home3/home3-arrival-hero'
import { InteractiveArrivalTimeline } from '@/components/home3/interactive-arrival-timeline'
import { AirportConciergeGrid } from '@/components/home3/airport-concierge-grid'
import { MalaysianHospitalityFocus } from '@/components/home3/malaysian-hospitality-focus'

export const metadata: Metadata = {
  title: 'Arrival in Malaysia | Home3 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Your seamless welcome to healthcare excellence. Comprehensive arrival support and services in Malaysia.',
}

export default function Home3Arrival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home3ArrivalHero />
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home3JourneyNavigation activeStage="arrival" />
        </Container>
        
        {/* Arrival Timeline Section */}
        <Container className="py-16">
          <InteractiveArrivalTimeline />
        </Container>
        
        {/* Airport Concierge Services */}
        <section className="py-16 bg-white/50">
          <Container>
            <AirportConciergeGrid />
          </Container>
        </section>
        
        {/* Malaysian Hospitality */}
        <Container className="py-16">
          <MalaysianHospitalityFocus />
        </Container>
      </main>
      
      <Footer />
    </div>
  )
} 