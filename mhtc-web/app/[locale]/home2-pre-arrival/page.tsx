import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Plane, 
  Hospital, 
  Clipboard, 
  Calculator,  
  CheckCircle,
  Users,
  Download,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import TopBar from "@/components/home2/top-bar"
import MainNavigation from "@/components/home2/main-navigation"
import Footer from "@/components/home2/footer"
import Home2JourneyNavigation from "@/components/home2/home2-journey-navigation"

export const metadata: Metadata = {
  title: 'Pre-Arrival Information | Malaysia Healthcare Travel Council',
  description: 'Plan your healthcare journey to Malaysia with essential pre-arrival information including visa requirements, hospital selection, treatment planning, and cost estimation.',
}

const planningSteps = [
  {
    step: "01",
    title: "DOCUMENTATION",
    icon: Plane,
    description: "Prepare your travel and medical documents",
    checklist: [
      "Valid passport (6+ months)",
      "Medical records & reports", 
      "Insurance documentation",
      "Emergency contact details"
    ],
    timeframe: "2-4 weeks before",
    difficulty: "Easy"
  },
  {
    step: "02", 
    title: "HOSPITAL SELECTION",
    icon: Hospital,
    description: "Choose your preferred healthcare facility",
    checklist: [
      "Research specializations",
      "Compare hospital ratings",
      "Check accreditations",
      "Book initial consultation"
    ],
    timeframe: "3-6 weeks before",
    difficulty: "Medium"
  },
  {
    step: "03",
    title: "TREATMENT PLANNING", 
    icon: Clipboard,
    description: "Plan your medical journey timeline",
    checklist: [
      "Schedule procedures",
      "Plan recovery time",
      "Arrange accommodation",
      "Coordinate with specialists"
    ],
    timeframe: "4-8 weeks before", 
    difficulty: "Medium"
  },
  {
    step: "04",
    title: "FINANCIAL PLANNING",
    icon: Calculator,
    description: "Understand costs and payment options",
    checklist: [
      "Get detailed quotations",
      "Check insurance coverage",
      "Arrange payment methods",
      "Budget for extras"
    ],
    timeframe: "2-3 weeks before",
    difficulty: "Easy"
  }
]

const quickFacts = [
  { icon: Globe, title: "Visa-Free Entry", description: "90 days for most nationalities" },
  { icon: Clock, title: "Multilingual Support", description: "Available in major languages" },
  { icon: Shield, title: "JCI Standards", description: "International healthcare accreditation" },
  { icon: Star, title: "Tourism Support", description: "Healthcare travel facilitation" }
]

export default function Home2PreArrival() {
  return (
    <>
      <TopBar />
      <MainNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Minimal Hero Section */}
        <section className="relative bg-gradient-to-br from-[#BE1E2D] via-[#B01020] to-[#A50E25] py-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-wide">
                PREPARE YOUR
                <span className="block font-medium">HEALTHCARE JOURNEY</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Everything you need to plan your world-class medical care in Malaysia
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Component */}
        <Home2JourneyNavigation currentStep="pre-arrival" />

        {/* Quick Facts Banner */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-[#BE1E2D]/10 rounded-lg">
                    <fact.icon className="w-6 h-6 text-[#BE1E2D]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#BE1E2D] text-lg">{fact.title}</div>
                    <div className="text-gray-600 text-sm">{fact.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Planning Steps */}
        <section className="py-20">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-4 uppercase tracking-wide">
                Your Pre-Arrival Roadmap
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these essential steps to ensure a smooth start to your healthcare journey
              </p>
            </div>

            <div className="space-y-8">
              {planningSteps.map((step, index) => (
                <div key={index} className="group">
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Step Number & Icon */}
                      <div className="lg:w-1/4 bg-gradient-to-br from-[#BE1E2D] to-[#A50E25] p-8 flex flex-col items-center justify-center text-white relative">
                        <div className="absolute top-4 right-4 opacity-20">
                          <step.icon className="w-16 h-16" />
                        </div>
                        <div className="text-6xl font-light mb-2 opacity-90">{step.step}</div>
                        <div className="text-center">
                          <div className="font-medium text-lg uppercase tracking-wide mb-2">{step.title}</div>
                          <div className="text-white/80 text-sm">{step.description}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:w-3/4 p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                          {/* Checklist */}
                          <div className="lg:w-2/3">
                            <h3 className="font-medium text-xl mb-6 text-gray-900">Essential Checklist</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {step.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                  <CheckCircle className="w-5 h-5 text-[#BE1E2D] flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="lg:w-1/3">
                            <div className="space-y-6">
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-sm text-blue-600 uppercase font-medium mb-1">Timeline</div>
                                <div className="text-blue-900 font-medium">{step.timeframe}</div>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-sm text-green-600 uppercase font-medium mb-1">Difficulty</div>
                                <div className="text-green-900 font-medium">{step.difficulty}</div>
                              </div>
                              <Button className="w-full bg-[#BE1E2D] hover:bg-[#A50E25] text-white">
                                GET STARTED
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Support CTA */}
        <section className="py-20 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-6 uppercase tracking-wide">
                Need Expert Guidance?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Our healthcare travel specialists are here to help you navigate every step of your pre-arrival planning
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-white text-[#BE1E2D] hover:bg-white/90 px-10 py-6 h-auto text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-6 h-6 mr-3" />
                  SPEAK TO A SPECIALIST
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-10 py-6 h-auto text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-6 h-6 mr-3" />
                  DOWNLOAD CHECKLIST
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-white/90">
                  <Phone className="h-5 w-5" />
                  <span>+603 2726 8688</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Mail className="h-5 w-5" />
                  <span>pre-arrival@mhtc.org.my</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 