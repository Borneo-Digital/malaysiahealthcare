import TopBar from "@/components/home2/top-bar"
import MainNavigation from "@/components/home2/main-navigation"
import HeroBanner from "@/components/home2/hero-banner"
import HealingJourney from "@/components/home2/healing-journey"
import BreastCancerBanner from "@/components/home2/breast-cancer-banner"
import SpecializedTreatments from "@/components/home2/specialized-treatments"
import WhyChooseMalaysia from "@/components/home2/why-choose-malaysia"
import HospitalNetwork from "@/components/home2/hospital-network"
import PatientStories from "@/components/home2/patient-stories"
import NewsEvents from "@/components/home2/news-events"
import CallToAction from "@/components/home2/call-to-action"
import Footer from "@/components/home2/footer"
import QuickJumpMenu from "@/components/home2/quick-jump-menu"
import SectionDivider from "@/components/home2/section-divider"

export default function Home2Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <TopBar />
      <MainNavigation />
      <QuickJumpMenu />

      {/* Hero Section - Primary Entry Point */}
      <HeroBanner />

      {/* Core Journey Section - Strategic spacing with larger bottom margin */}
      <div id="healing-journey" className="relative">
        <HealingJourney />
      </div>

      <SectionDivider variant="gradient" />

      {/* Service Sections - Grouped with consistent rhythm */}
      <div className="bg-gradient-to-b from-white to-gray-50/50">
        <div id="treatments" className="relative">
          <SpecializedTreatments />
        </div>

        {/* Strategic placement of breast cancer banner within treatments context */}
        <div className="relative -mt-10 mb-10">
          <BreastCancerBanner />
        </div>

        <div id="why-choose" className="relative">
          <WhyChooseMalaysia />
        </div>
      </div>

      <SectionDivider variant="minimal" />

      {/* Infrastructure & Social Proof - Different background for clear section break */}
      <div className="bg-white">
        <div id="hospitals" className="relative">
          <HospitalNetwork />
        </div>

        <div id="stories" className="relative -mt-8">
          <PatientStories />
        </div>
      </div>

      <SectionDivider variant="gradient" />

      {/* Content & Engagement - Final grouping */}
      <div className="bg-gray-50/30">
        <div id="news" className="relative">
          <NewsEvents />
        </div>
      </div>

      {/* Call to Action - Now with built-in sophisticated design */}
      <CallToAction />

      {/* Subtle visual transition to footer */}
      <div className="h-1 bg-gradient-to-r from-[#A50E25] via-[#BE1E2D] to-[#A50E25]"></div>

      <Footer />
    </main>
  )
} 