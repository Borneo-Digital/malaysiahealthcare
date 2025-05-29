import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users, 
  Car, 
  CheckCircle, 
  Download,
  ArrowRight,
  Phone,
  Mail,
  Plane,
  MapPin,
  Heart,
  Coffee,
  Wifi,
  Shield
} from 'lucide-react'
import TopBar from "@/components/home2/top-bar"
import MainNavigation from "@/components/home2/main-navigation"
import Footer from "@/components/home2/footer"
import Home2JourneyNavigation from "@/components/home2/home2-journey-navigation"

export const metadata: Metadata = {
  title: 'Arrival Information | Malaysia Healthcare Travel Council',
  description: 'Learn about the arrival process for your healthcare journey in Malaysia, including meet and greet services, immigration assistance, and transportation options.',
}

const arrivalExperience = [
  {
    phase: "TOUCHDOWN",
    title: "Aircraft to Terminal",
    icon: Plane,
    time: "0-15 min",
    services: ["Aircraft bridge assistance", "Wheelchair accessibility", "Priority disembarkation"],
    description: "Smooth transition from aircraft to terminal with dedicated assistance"
  },
  {
    phase: "WELCOME",
    title: "Meet & Greet Service",
    icon: Users,
    time: "15-30 min", 
    services: ["Personal welcome representative", "Luggage assistance", "Welcome refreshments"],
    description: "Personal welcome by our healthcare travel specialists"
  },
  {
    phase: "PROCESS",
    title: "Immigration & Customs",
    icon: Shield,
    time: "30-45 min",
    services: ["Fast-track processing", "Document verification", "Language interpretation"],
    description: "Expedited clearance with multilingual support"
  },
  {
    phase: "COMFORT",
    title: "Malaysia Lounge",
    icon: Coffee,
    time: "45-75 min",
    services: ["Complimentary refreshments", "Wi-Fi access", "Medical consultation"],
    description: "Relax in our exclusive healthcare travelers lounge"
  },
  {
    phase: "DEPARTURE",
    title: "Premium Transfer",
    icon: Car,
    time: "75+ min",
    services: ["Luxury vehicle transport", "Professional chauffeur", "Direct hospital route"],
    description: "Comfortable journey to your healthcare destination"
  }
]

const airportServices = [
  {
    icon: Users,
    title: "Personal Assistant",
    features: ["Dedicated specialist", "Cultural liaison", "24/7 availability"]
  },
  {
    icon: Wifi,
    title: "Digital Services", 
    features: ["Free premium WiFi", "Digital check-in", "Real-time updates"]
  },
  {
    icon: Heart,
    title: "Medical Support",
    features: ["On-site nurse", "Emergency protocols", "Health monitoring"]
  },
  {
    icon: MapPin,
    title: "Navigation Help",
    features: ["Terminal guidance", "Facility locations", "Accessibility routes"]
  }
]

export default function Home2Arrival() {
  return (
    <>
      <TopBar />
      <MainNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Split Hero Section */}
        <section className="relative h-[60vh] flex flex-col lg:flex-row overflow-hidden">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 bg-gradient-to-br from-[#BE1E2D] to-[#A50E25] flex items-center justify-center p-8 lg:p-16 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10 text-white max-w-lg">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                  SELAMAT DATANG • WELCOME
                </span>
                <h1 className="text-4xl lg:text-5xl font-light mb-4 leading-tight">
                  YOUR MALAYSIA
                  <span className="block font-medium">ARRIVAL EXPERIENCE</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  From touchdown to your first treatment consultation, we ensure every moment is seamless
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="lg:w-1/2 bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Animated plane icon */}
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Plane className="w-16 h-16 text-[#BE1E2D]" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BE1E2D] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Component */}
        <Home2JourneyNavigation currentStep="arrival" />

        {/* Arrival Timeline */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-4 uppercase tracking-wide">
                Your Arrival Timeline
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A carefully orchestrated experience from touchdown to your healthcare destination
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#BE1E2D] via-blue-400 to-green-400 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                {arrivalExperience.map((phase, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-4 border-[#BE1E2D] rounded-full transform md:-translate-x-1/2 z-10"></div>
                    
                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-[#BE1E2D]/10 rounded-xl">
                              <phase.icon className="w-8 h-8 text-[#BE1E2D]" />
                            </div>
                            <div>
                              <div className="text-sm text-[#BE1E2D] font-medium uppercase">{phase.phase}</div>
                              <div className="text-xl font-medium text-gray-900">{phase.title}</div>
                            </div>
                            <div className="ml-auto bg-blue-50 px-3 py-2 rounded-lg">
                              <div className="text-sm text-blue-600 font-medium">{phase.time}</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                          
                          <div className="grid grid-cols-1 gap-3">
                            {phase.services.map((service, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-[#BE1E2D] flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{service}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-20 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIgcG9pbnRzPSIzMCwxIDUyLDE1IDUyLDQ1IDMwLDU5IDgsNDUgOCwxNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIi8+PC9zdmc+')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 uppercase tracking-wide">
                Premium Airport Services
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Exclusive amenities designed for healthcare travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {airportServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-white/20 rounded-xl mb-6 group-hover:bg-white/30 transition-colors">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="text-white/90 text-sm">{feature}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Malaysian Hospitality Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-6 uppercase tracking-wide">
                  Malaysian Hospitality
                  <span className="block font-medium text-gray-900">Beyond Expectations</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Experience the warmth of Malaysia from your first step into our country. Our multicultural approach 
                  ensures you feel welcome regardless of your background or needs.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-[#BE1E2D] mb-2">15+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Languages Spoken</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-[#BE1E2D] mb-2">24/7</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Cultural Support</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-[#BE1E2D] hover:bg-[#A50E25] text-white px-8 py-6 h-auto font-medium"
                  >
                    BOOK ARRIVAL SERVICE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white px-8 py-6 h-auto font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    ARRIVAL GUIDE
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-[#BE1E2D]/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-200/50 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                        <Heart className="w-12 h-12 text-[#BE1E2D]" />
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">Truly Malaysia</h3>
                      <p className="text-gray-600">Where healthcare meets hospitality</p>
                    </div>
                    
                    <div className="space-y-4 text-sm text-gray-600">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <span className="text-2xl">🌺</span>
                        <span>Halal-certified dining options</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <span className="text-2xl">🕌</span>
                        <span>Prayer rooms & spiritual support</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <span className="text-2xl">🌍</span>
                        <span>Cultural orientation programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Need Arrival Assistance?</h3>
                <p className="text-gray-600">Our specialists are available 24/7 to help</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-[#BE1E2D]" />
                  <span>+603 2726 8688</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-[#BE1E2D]" />
                  <span>arrival@mhtc.org.my</span>
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