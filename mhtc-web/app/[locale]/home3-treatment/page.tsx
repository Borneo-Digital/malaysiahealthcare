import { Metadata } from 'next'
import { Header } from '@/components/home3/header'
import { Footer } from '@/components/home3/footer'
import { Container } from '@/components/home3/ui/container'
import { Home3JourneyNavigation } from '@/components/home3/home3-journey-navigation'
import { Home3TreatmentHero } from '@/components/home3/home3-treatment-hero'
import { SpecialtiesExplorerGrid } from '@/components/home3/specialties-explorer-grid'
import { TreatmentFlowVisual } from '@/components/home3/treatment-flow-visual'
import { QualityTrustSection } from '@/components/home3/quality-trust-section'
import { Home3ExpertConsultCTA } from '@/components/home3/home3-expert-consult-cta'

export const metadata: Metadata = {
  title: 'Treatment Excellence | Home3 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Advanced care, personalized for you. Leading medical expertise with compassionate delivery in Malaysia.',
}

export default function Home3Treatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home3TreatmentHero />
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home3JourneyNavigation activeStage="treatment" />
        </Container>
        
        {/* Specialties Explorer Section */}
        <Container className="py-16">
          <SpecialtiesExplorerGrid />
        </Container>
        
        {/* Treatment Flow */}
        <section className="py-16 bg-white/50">
          <Container>
            <TreatmentFlowVisual />
          </Container>
        </section>
        
        {/* Quality & Trust */}
        <Container className="py-16">
          <QualityTrustSection />
        </Container>
        
        {/* Expert Consult CTA */}
        <section className="py-16 bg-gradient-to-r from-[#BE1E2D] to-[#A01825]">
          <Container>
            <Home3ExpertConsultCTA />
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 