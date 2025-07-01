import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Home4JourneyNavigation } from '@/components/home4/home4-journey-navigation'
import { Home4PostTreatmentHero } from '@/components/home4/home4-post-treatment-hero'
import { RecoveryTimelineView } from '@/components/home4/recovery-timeline-view'
import { ContinuumOfCareInteractive } from '@/components/home4/continuum-of-care-interactive'
import { MalaysianAftercareBenefits } from '@/components/home4/malaysian-aftercare-benefits'
import { Home4ContinuedSupportCTA } from '@/components/home4/home4-continued-support-cta'

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Home4 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Comprehensive recovery and ongoing support. Your healing continues with world-class aftercare in Malaysia.',
}

export default function Home4PostArrival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4PostTreatmentHero />
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="post-treatment" />
        </Container>
        
        {/* Recovery Timeline */}
        <Container className="py-16">
          <RecoveryTimelineView />
        </Container>
        
        {/* Continuum of Care */}
        <section className="py-16 bg-white/50">
          <Container>
            <ContinuumOfCareInteractive />
          </Container>
        </section>
        
        {/* Malaysian Aftercare Benefits */}
        <Container className="py-16">
          <MalaysianAftercareBenefits />
        </Container>
        
        {/* Continued Support CTA */}
        <section className="py-16 bg-gradient-to-r from-[#BE1E2D] to-[#A01825]">
          <Container>
            <Home4ContinuedSupportCTA />
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 