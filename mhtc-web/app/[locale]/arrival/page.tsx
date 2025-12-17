import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
// import { Home4JourneyNavigation } from '@/components/home4/home4-journey-navigation'
import { Home4ArrivalHero } from '@/components/home4/home4-arrival-hero'
import { InteractiveArrivalTimeline } from '@/components/home4/interactive-arrival-timeline'
// import { AirportConciergeGrid } from '@/components/home4/airport-concierge-grid'
// import { MalaysianHospitalityFocus } from '@/components/home4/malaysian-hospitality-focus'
import { CTAArrival } from '@/components/home4/cta-arrival'
import { getServerTranslations } from '@/utils/translations'
import { JourneyArrivalTranslations } from '@/types/translations'
import { Locale } from '@/types/i18n'

export const metadata: Metadata = {
  title: 'Arrival in Malaysia | Home4 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Your seamless welcome to healthcare excellence. Comprehensive arrival support and services in Malaysia.',
}

interface ArrivalPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Home4Arrival({ params }: ArrivalPageProps) {
  const { locale } = await params;
  const t = getServerTranslations<JourneyArrivalTranslations>(locale, "journey-arrival")
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4ArrivalHero heroTranslations={t.hero} />
        
        {/* Journey Navigation
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="arrival" />
        </Container> */}
        
        {/* Arrival Timeline Section */}
        <Container className="py-16">
          <InteractiveArrivalTimeline timelineTranslations={t.timeline} />
        </Container>
        
        {/* Airport Concierge Services
        <section className="py-16 bg-white/50">
          <Container>
            <AirportConciergeGrid />
          </Container>
        </section> */}

        {/* CTA Steps */}
        <Container className="py-16">
          <CTAArrival ctaTranslations={t.cta} />
        </Container>
        
        {/* Malaysian Hospitality
        <Container className="py-16">
          <MalaysianHospitalityFocus />
        </Container> */}
      </main>
      
      <Footer />
    </div>
  )
}

