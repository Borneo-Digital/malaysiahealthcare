import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Home4TreatmentHero } from '@/components/home4/home4-treatment-hero'
import { SpecialtiesExplorerGrid } from '@/components/home4/specialties-explorer-grid'
import { TreatmentFlowVisual } from '@/components/home4/treatment-flow-visual'
import { CTATreatment } from '@/components/home4/cta-treatment'
import { getServerTranslations } from '@/utils/translations'
import { JourneyTreatmentTranslations } from '@/types/translations'
import { Locale } from '@/types/i18n'

export const metadata: Metadata = {
  title: 'Treatment Excellence | Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Advanced care, personalized for you. Leading medical expertise with compassionate delivery in Malaysia.',
}

interface TreatmentPageProps {
  params: { locale: Locale }
}

export default function Home4Treatment({ params: { locale } }: TreatmentPageProps) {
  const t = getServerTranslations<JourneyTreatmentTranslations>(locale, "journey-treatment")
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4TreatmentHero heroTranslations={t.hero} />
        
        {/* Journey Navigation
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="treatment" />
        </Container> */}
        
        {/* Specialties Explorer Section */}
        <Container className="py-16">
          <SpecialtiesExplorerGrid specialtiesTranslations={t.specialties} />
        </Container>
        
        {/* Treatment Flow */}
        <section className="py-16 bg-white/50">
          <Container>
            <TreatmentFlowVisual flowTranslations={t.treatmentFlow} />
          </Container>
        </section>
        
        {/* Quality & Trust
        <Container className="py-16">
          <QualityTrustSection />
        </Container> */}
        
        {/* Expert Consult CTA
        <section className="py-16 bg-gradient-to-r from-[#BE1E2D] to-[#A01825]">
          <Container>
            <Home3ExpertConsultCTA />
          </Container>
        </section> */}

        {/* CTA Steps */}
        <Container className="py-16">
          <CTATreatment ctaTranslations={t.cta} />
        </Container>
      </main>
      
      <Footer />
    </div>
  )
}

