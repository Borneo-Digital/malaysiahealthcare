import { Metadata } from 'next'
import { Header } from '@/components/home3/header'
import { Footer } from '@/components/home3/footer'
import { Container } from '@/components/home3/ui/container'
import { Home3JourneyNavigation } from '@/components/home3/home3-journey-navigation'
import { Home3PostTreatmentHero } from '@/components/home3/home3-post-treatment-hero'
import { RecoveryTimelineView } from '@/components/home3/recovery-timeline-view'
import { ContinuumOfCareInteractive } from '@/components/home3/continuum-of-care-interactive'
import { MalaysianAftercareBenefits } from '@/components/home3/malaysian-aftercare-benefits'
import { Home3ContinuedSupportCTA } from '@/components/home3/home3-continued-support-cta'

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Home3 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Comprehensive recovery and ongoing support. Your healing continues with world-class aftercare in Malaysia.',
}

export default function Home3PostTreatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home3PostTreatmentHero />
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home3JourneyNavigation activeStage="post-treatment" />
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
            <Home3ContinuedSupportCTA />
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 