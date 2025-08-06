import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Container } from '@/components/home4/ui/container'
import { Home4JourneyNavigation } from '@/components/home4/home4-journey-navigation'
import { ContinuumOfCareInteractive } from '@/components/home4/continuum-of-care-interactive'
import { Home4ContinuedSupportCTA } from '@/components/home4/home4-continued-support-cta'

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Healthcare Journey | Malaysia Healthcare Travel Council',
  description: 'Comprehensive recovery and ongoing support. Your healing continues with world-class aftercare in Malaysia.',
}

export default function Home4PostArrival() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-white to-grey-50/30 flex items-center">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Post-Arrival Support
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your journey continues with comprehensive post-treatment care and support.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Journey Navigation */}
        <Container className="py-8">
          <Home4JourneyNavigation activeStage="post-treatment" />
        </Container>
        
        {/* Continuum of Care */}
        <section className="py-16 bg-white/50">
          <Container>
            <ContinuumOfCareInteractive />
          </Container>
        </section>
        
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