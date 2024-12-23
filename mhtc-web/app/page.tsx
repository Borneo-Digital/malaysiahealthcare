import Image from 'next/image'
import { Button } from '@/components/ui/button'
import JourneyBridge from '@/components/JourneyBridge'
import QuickAccess from '@/components/QuickAccess'
import Link from 'next/link'
import Script from 'next/script'
import MonthlyThemeBanner from '@/components/MonthlyThemeBanner'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center">
          {/* Background with Malaysian elements */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/maalaysia-image.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg" tabIndex={0}>
              Experience the Perfect Harmony of Healthcare and Hospitality
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white text-shadow-md" tabIndex={0}>
              Where world-class medical excellence meets Malaysian warmth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/for-traveller">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                >
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Journey Bridge Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-24" aria-labelledby="journey-title">
          <div className="container mx-auto text-center mb-8">
            <h2 id="journey-title" className="text-2xl sm:text-3xl font-bold text-primary mb-4" tabIndex={0}>
              Your Health Travel Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" tabIndex={0}>
              We&apos;re with you every step of the way. Explore our comprehensive health travel journey designed for your comfort and peace of mind.
            </p>
          </div>
          <JourneyBridge />
        </section>

        {/* Quick Access Section */}
        <section className="bg-gray-50 py-12 sm:py-24" aria-labelledby="quick-access-title">
          <div className="container mx-auto">
            <h2 id="quick-access-title" className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center" tabIndex={0}>
              Quick Access
            </h2>
            <QuickAccess />
          </div>
        </section>

        {/* Monthly Theme Banner */}
        <section className="bg-white py-12 sm:py-16" aria-labelledby="monthly-theme-title">
          <div className="container mx-auto px-4">
            <h2 id="monthly-theme-title" className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center" tabIndex={0}>
              Monthly Health Theme
            </h2>
            <MonthlyThemeBanner />
          </div>
        </section>
      </main>

      {/* Structured Data for Healthcare Service */}
      <Script id="healthcare-service-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Malaysia Healthcare Travel Council",
            "image": "https://malaysiahealthcare.org/logo.png",
            "url": "https://malaysiahealthcare.org",
            "telephone": "+60378419999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Level 12, Surian Tower, No. 1 Jalan PJU 7/3",
              "addressLocality": "Petaling Jaya",
              "addressRegion": "Selangor",
              "postalCode": "47810",
              "addressCountry": "MY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 3.1580406,
              "longitude": 101.6069866
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/MHTCMalaysia",
              "https://twitter.com/MHTCMalaysia",
              "https://www.linkedin.com/company/malaysia-healthcare-travel-council"
            ]
          }
        `}
      </Script>
    </div>
  )
}

