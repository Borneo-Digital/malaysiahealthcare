import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CheckCircle, 
  Plane, 
  Users, 
  Download,
  Hospital,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Heart,
  TrendingUp,
  Home,
  Compass,
  Clock,
  Smile,
  Award,
  Video,
  MessageSquare,
  FileText,
  Activity
} from 'lucide-react'
import TopBar from "@/components/home2/top-bar"
import MainNavigation from "@/components/home2/main-navigation"
import Footer from "@/components/home2/footer"
import Home2JourneyNavigation from "@/components/home2/home2-journey-navigation"

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Malaysia Healthcare Travel Council',
  description: 'Learn about post-treatment care, follow-up services, and support available after your medical treatment in Malaysia.',
}

const recoveryPhases = [
  {
    phase: "IMMEDIATE",
    timeline: "0-3 Days",
    title: "Immediate Recovery",
    icon: Heart,
    focus: "Initial recovery monitoring",
    activities: ["Vital signs monitoring", "Pain management", "Medication guidance", "Basic mobility"],
    progress: 25
  },
  {
    phase: "SHORT-TERM", 
    timeline: "4-14 Days",
    title: "Active Recovery",
    icon: Activity,
    focus: "Rehabilitation & wellness",
    activities: ["Physiotherapy sessions", "Gradual activity increase", "Dietary adjustments", "Wound care"],
    progress: 60
  },
  {
    phase: "EXTENDED",
    timeline: "2-8 Weeks", 
    title: "Extended Care",
    icon: TrendingUp,
    focus: "Strengthening & preparation",
    activities: ["Strength building", "Travel preparation", "Documentation", "Final assessments"],
    progress: 85
  },
  {
    phase: "TRANSITION",
    timeline: "Ongoing",
    title: "Home Transition", 
    icon: Home,
    focus: "Long-term support",
    activities: ["Remote monitoring", "Follow-up scheduling", "Home care planning", "Lifestyle guidance"],
    progress: 100
  }
]

const supportServices = [
  {
    category: "MEDICAL SUPPORT",
    icon: Hospital,
    color: "bg-gradient-to-br from-red-50 to-pink-50",
    borderColor: "border-red-200",
    services: [
      { name: "24/7 Medical Hotline", description: "Round-the-clock medical support", availability: "Always" },
      { name: "Follow-up Consultations", description: "Scheduled check-ups with specialists", availability: "Scheduled" },
      { name: "Medication Management", description: "Prescription guidance and delivery", availability: "Daily" },
      { name: "Emergency Response", description: "Immediate emergency medical care", availability: "Always" }
    ]
  },
  {
    category: "WELLNESS & REHABILITATION",
    icon: Activity, 
    color: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    services: [
      { name: "Physiotherapy Program", description: "Personalized recovery exercises", availability: "Daily" },
      { name: "Nutrition Counseling", description: "Diet plans for optimal recovery", availability: "Weekly" },
      { name: "Mental Health Support", description: "Counseling and wellness coaching", availability: "On-demand" },
      { name: "Recovery Tracking", description: "Digital progress monitoring", availability: "Continuous" }
    ]
  },
  {
    category: "TRAVEL & LOGISTICS",
    icon: Plane,
    color: "bg-gradient-to-br from-purple-50 to-indigo-50", 
    borderColor: "border-purple-200",
    services: [
      { name: "Travel Clearance", description: "Medical approval for travel", availability: "As needed" },
      { name: "Airport Assistance", description: "Departure support services", availability: "Scheduled" },
      { name: "Documentation", description: "Medical reports and certificates", availability: "On-request" },
      { name: "Insurance Support", description: "Claims and reimbursement help", availability: "Business hours" }
    ]
  },
  {
    category: "DIGITAL SERVICES",
    icon: Video,
    color: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200", 
    services: [
      { name: "Telemedicine", description: "Virtual consultations with doctors", availability: "Scheduled" },
      { name: "Digital Health Records", description: "Secure access to medical files", availability: "Always" },
      { name: "Mobile App Support", description: "Recovery tracking application", availability: "Always" },
      { name: "Remote Monitoring", description: "Health data transmission", availability: "Continuous" }
    ]
  }
]

const continueCareOptions = [
  {
    title: "Extended Stay Programs",
    description: "Luxury recovery resorts with medical supervision",
    icon: Star,
    features: ["Resort-style accommodation", "Medical supervision", "Recreational activities", "Cultural experiences"],
    duration: "1-4 weeks",
    suitability: "Complex procedures"
  },
  {
    title: "Home Recovery Support", 
    description: "Comprehensive care coordination for home recovery",
    icon: Home,
    features: ["Home care nurses", "Equipment delivery", "Family training", "Progress monitoring"],
    duration: "2-12 weeks",
    suitability: "Most procedures"
  },
  {
    title: "Remote Care Network",
    description: "Digital health monitoring and virtual care",
    icon: Video,
    features: ["Virtual consultations", "Health monitoring", "Medication reminders", "Emergency alerts"],
    duration: "Ongoing",
    suitability: "All procedures"
  }
]

const recoveryMetrics = [
  { icon: Users, value: "Complete", label: "Support Services" },
  { icon: Clock, value: "Available", label: "When You Need" },
  { icon: Smile, value: "Quality", label: "Care Facilitation" },
  { icon: Award, value: "Trusted", label: "Healthcare Partner" }
]

export default function Home2PostTreatment() {
  return (
    <>
      <TopBar />
      <MainNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Brand-Focused Hero */}
        <section className="relative bg-gradient-to-br from-[#BE1E2D] to-[#A50E25] py-20 overflow-hidden">
          {/* Subtle background patterns */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0id2F2ZXMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0ibTAgMzAgcTUgLTEwIDEwIDAgdDEwIDAgdDEwIDAgdDEwIDAgdDEwIDAgdDEwIDAtNSAxMCAtMTAgMCB0LTEwIDAgdC0xMCAwIHQtMTAgMCB0LTEwIDAgdC0xMCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjd2F2ZXMpIi8+PC9zdmc+')] opacity-30"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Content Side */}
              <div className="lg:col-span-2 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                  <Compass className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">RECOVERY & WELLNESS JOURNEY</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
                  YOUR RECOVERY
                  <span className="block font-medium text-white/90">CONTINUES HERE</span>
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                  Comprehensive post-treatment care designed to ensure your continued wellness, 
                  smooth recovery, and seamless transition back to your daily life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg"
                    className="bg-white text-[#BE1E2D] hover:bg-white/90 px-8 py-6 h-auto font-medium shadow-xl"
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    START RECOVERY TRACKING
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-8 py-6 h-auto font-medium"
                  >
                    <Video className="w-5 h-5 mr-3" />
                    VIRTUAL CONSULTATION
                  </Button>
                </div>
              </div>

              {/* Metrics Side */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 gap-4">
                  {recoveryMetrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="inline-block p-3 bg-white/20 rounded-xl mb-4">
                        <metric.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-white/80 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Component */}
        <Home2JourneyNavigation currentStep="post-treatment" />

        {/* Recovery Phases Dashboard */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-[1400px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                RECOVERY TIMELINE
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track your progress through personalized recovery phases designed for optimal healing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recoveryPhases.map((phase, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Progress Header */}
                    <div className="bg-[#BE1E2D] p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 opacity-20">
                        <phase.icon className="w-16 h-16" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xs font-medium uppercase tracking-wider">{phase.phase}</div>
                          <div className="text-xs bg-white/20 px-2 py-1 rounded-full">{phase.timeline}</div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-white/90 text-sm">{phase.focus}</p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                        <div 
                          className="h-full bg-white transition-all duration-1000 ease-out"
                          style={{ width: `${phase.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-600">Recovery Progress</span>
                          <span className="text-sm font-bold text-gray-900">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#BE1E2D] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-4 uppercase tracking-wide">
                Comprehensive Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A complete ecosystem of care designed to support every aspect of your recovery journey
              </p>
            </div>

            <Tabs defaultValue="MEDICAL SUPPORT" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-100 rounded-xl p-1">
                {supportServices.map((service) => (
                  <TabsTrigger 
                    key={service.category} 
                    value={service.category}
                    className="data-[state=active]:bg-[#BE1E2D] data-[state=active]:text-white font-medium text-xs lg:text-sm"
                  >
                    {service.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {supportServices.map((serviceCategory) => (
                <TabsContent key={serviceCategory.category} value={serviceCategory.category}>
                  <div className={`${serviceCategory.color} ${serviceCategory.borderColor} border-2 rounded-3xl p-8 relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 opacity-10">
                      <serviceCategory.icon className="w-24 h-24 text-gray-600" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                          <serviceCategory.icon className="w-10 h-10 text-[#BE1E2D]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{serviceCategory.category}</h3>
                          <p className="text-gray-600">Specialized support for your unique needs</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {serviceCategory.services.map((service, idx) => (
                          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-semibold text-gray-900">{service.name}</h4>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {service.availability}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Continue Care Options */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-4 uppercase tracking-wide">
                Continued Care Options
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect continuation of care that fits your lifestyle and recovery needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {continueCareOptions.map((option, index) => (
                <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-block p-4 bg-[#BE1E2D]/10 rounded-full mb-4 group-hover:bg-[#BE1E2D]/20 transition-colors">
                        <option.icon className="w-12 h-12 text-[#BE1E2D]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-[#BE1E2D] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium mb-1">Duration</div>
                        <div className="text-blue-900 font-semibold">{option.duration}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm text-green-600 font-medium mb-1">Best For</div>
                        <div className="text-green-900 font-semibold">{option.suitability}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#BE1E2D] hover:bg-[#A50E25] text-white group-hover:scale-105 transition-all duration-300">
                      LEARN MORE
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Support CTA */}
        <section className="py-20 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImhlYXJ0cyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Im01MCA2NSBjLTEwIC0xNSAtMjUgLTI1IC0yNSAtNDAgYzAgLTE1IDEwIC0yNSAyNSAtMjUgYzE1IDAgMjUgMTAgMjUgMjUgYzAgMTUgLTE1IDI1IC0yNSA0MHoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGVhcnRzKSIvPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-6 uppercase tracking-wide">
                Continue Your Wellness Journey
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Our recovery specialists are here to support you every step of the way. 
                Your health and wellness remain our top priority.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <MessageSquare className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">24/7 Support Chat</h3>
                  <p className="text-white/80 text-sm">Instant messaging with care coordinators</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Video className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Virtual Consultations</h3>
                  <p className="text-white/80 text-sm">Video calls with medical specialists</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <FileText className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Digital Records</h3>
                  <p className="text-white/80 text-sm">Secure access to all medical documents</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  size="lg"
                  className="bg-white text-[#BE1E2D] hover:bg-white/90 px-10 py-6 h-auto text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-6 h-6 mr-3" />
                  SPEAK TO RECOVERY SPECIALIST
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-10 py-6 h-auto text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-6 h-6 mr-3" />
                  RECOVERY GUIDE
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-white/90">
                  <Phone className="h-5 w-5" />
                  <span>+603 2726 8688</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Mail className="h-5 w-5" />
                  <span>recovery@mhtc.org.my</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Heart className="h-5 w-5" />
                  <span>#YourWellnessJourney</span>
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