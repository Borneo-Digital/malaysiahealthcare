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
import JourneyPath from "@/components/home2/journey-path"
import QuickJumpMenu from "@/components/home2/quick-jump-menu"

export default function Home2Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopBar />
      <MainNavigation />

      {/* Background journey path that follows scroll 
      <JourneyPath />*/}

      {/* Quick jump navigation */}
      <QuickJumpMenu />

      <div id="hero">
        <HeroBanner />
      </div>

      <div id="healing-journey">
        <HealingJourney />
      </div>

      <BreastCancerBanner />

      <div id="treatments">
        <SpecializedTreatments />
      </div>

      <div id="why-choose">
        <WhyChooseMalaysia />
      </div>

      <div id="hospitals">
        <HospitalNetwork />
      </div>

      <div id="stories">
        <PatientStories />
      </div>

      <div id="news">
        <NewsEvents />
      </div>

      <CallToAction />
      <Footer />
    </main>
  )
} 