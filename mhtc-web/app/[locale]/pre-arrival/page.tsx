import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
// import { Home4JourneyNavigation } from '@/components/home4/home4-journey-navigation'
import { Home4PreArrivalHero } from '@/components/home4/home4-pre-arrival-hero'
import { Home4PlanningSteps } from '@/components/home4/home4-planning-steps'
// import { QuickFactsSlider } from '@/components/home4/quick-facts-slider'

import { CTAPreArrival } from '@/components/home4/cta-pre-arrival'
import { getServerTranslations } from '@/utils/translations'
import { JourneyPreArrivalTranslations } from '@/types/translations'
import { Locale } from '@/types/i18n'

export const metadata: Metadata = {
  title: 'Pre-Arrival Planning | Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Begin your healthcare journey with confidence. Comprehensive pre-arrival planning guide for your medical travel to Malaysia.',
}

interface PreArrivalPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Home4PreArrival({ params }: PreArrivalPageProps) {
  const { locale } = await params;
  const t = getServerTranslations<JourneyPreArrivalTranslations>(locale, "journey-pre-arrival")
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4PreArrivalHero heroTranslations={t.hero} />
        
        {/* Journey Navigation
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="pre-arrival" />
        </Container> */}
        
        {/* Planning Steps Section */}
        <Container className="py-16">
          <Home4PlanningSteps planningTranslations={t.planningSteps} />
        </Container>
        
        {/* Malaysia Quick Facts
        <section className="py-16 bg-white/50">
          <Container>
            <QuickFactsSlider />
          </Container>
        </section> */}

        {/* CTA Steps */}
        <Container className="py-16">
          <CTAPreArrival ctaTranslations={t.cta} />
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