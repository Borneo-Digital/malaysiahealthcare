import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Home4PostTreatmentHero } from '@/components/home4/home4-post-treatment-hero'
import { MalaysianAftercareBenefits } from '@/components/home4/malaysian-aftercare-benefits'
import { RecoveryTimelineView } from '@/components/home4/recovery-timeline-view'

export const metadata: Metadata = {
  title: 'Post-Treatment Support | Home4 Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Continue your recovery journey with comprehensive post-treatment support and resources from Malaysia Healthcare Travel Council.',
}

export default function Home4PostTreatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-grey-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Home4PostTreatmentHero />
        
        {/* Recovery Timeline Section */}
        <Container className="py-16">
          <RecoveryTimelineView />
        </Container>
        
        {/* Malaysian Aftercare Benefits */}
        <section className="py-16 bg-white/50">
          <Container>
            <MalaysianAftercareBenefits />
          </Container>
        </section>
        
        {/* Continued Support CTA */}
        <section className="py-16 bg-gradient-to-r from-[#BE1E2D] to-[#A01825]">
          <Container>
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Recovery Journey Continues
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Access ongoing support, resources, and connections to ensure your continued wellness and recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-mhtc-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Access Support Resources
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-mhtc-primary transition-colors">
                  Contact Support Team
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 