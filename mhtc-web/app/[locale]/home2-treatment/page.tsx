import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  CheckCircle, 
  Users, 
  Download,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Zap,
  Shield,
  Clock,
  Target,
  Award,
  Eye,
  Brain,
  Bone,
  Baby
} from 'lucide-react'
import TopBar from "@/components/home2/top-bar"
import MainNavigation from "@/components/home2/main-navigation"
import Footer from "@/components/home2/footer"
import Home2JourneyNavigation from "@/components/home2/home2-journey-navigation"

export const metadata: Metadata = {
  title: 'Treatment Information | Malaysia Healthcare Travel Council',
  description: 'Learn about world-class healthcare services, medical procedures, and patient care available during your treatment in Malaysia.',
}

const treatmentSpecialties = [
  {
    category: "CARDIOLOGY",
    icon: Heart,
    procedures: ["Angioplasty", "Bypass Surgery", "Valve Replacement", "Arrhythmia Treatment"],
    expertise: "Advanced cardiac care specialists",
    features: ["Minimally invasive procedures", "Modern cardiac technology", "Specialized cardiac units"]
  },
  {
    category: "ONCOLOGY", 
    icon: Activity,
    procedures: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "Precision Medicine"],
    expertise: "Comprehensive cancer care",
    features: ["Personalized treatment plans", "Advanced diagnostics", "Multidisciplinary care"]
  },
  {
    category: "ORTHOPEDICS",
    icon: Bone,
    procedures: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Reconstructive Surgery"],
    expertise: "Advanced orthopedic solutions",
    features: ["Robotic-assisted surgery", "Recovery protocols", "Rehabilitation support"]
  },
  {
    category: "FERTILITY",
    icon: Baby,
    procedures: ["IVF Treatment", "IUI", "Fertility Surgery", "Genetic Testing"],
    expertise: "Reproductive medicine specialists",
    features: ["Advanced technology", "Personalized protocols", "Counseling support"]
  },
  {
    category: "NEUROLOGY",
    icon: Brain,
    procedures: ["Brain Surgery", "Stroke Treatment", "Epilepsy Care", "Parkinson's Treatment"],
    expertise: "Neurological care specialists",
    features: ["Advanced imaging", "Multidisciplinary teams", "Rehabilitation programs"]
  },
  {
    category: "OPHTHALMOLOGY",
    icon: Eye,
    procedures: ["LASIK Surgery", "Cataract Surgery", "Retinal Treatment", "Glaucoma Care"],
    expertise: "Vision care specialists",
    features: ["Laser technology", "Day-case procedures", "Quick recovery"]
  }
]

const treatmentJourney = [
  {
    phase: "CONSULTATION",
    title: "Initial Assessment",
    description: "Comprehensive medical evaluation with specialists",
    duration: "1-2 hours",
    highlights: ["Medical history review", "Diagnostic tests", "Treatment planning"]
  },
  {
    phase: "PREPARATION", 
    title: "Pre-Treatment",
    description: "Preparation protocols and pre-operative care",
    duration: "1-3 days",
    highlights: ["Medical clearance", "Preparation procedures", "Patient education"]
  },
  {
    phase: "TREATMENT",
    title: "Active Care",
    description: "Your treatment delivered by expert medical teams",
    duration: "Varies",
    highlights: ["Expert medical care", "Advanced technology", "Patient monitoring"]
  },
  {
    phase: "RECOVERY",
    title: "Post-Treatment",
    description: "Recovery monitoring and follow-up care",
    duration: "3-7 days",
    highlights: ["Recovery monitoring", "Pain management", "Discharge planning"]
  }
]

const qualityMetrics = [
  { icon: Award, value: "Leading", label: "Healthcare Destination" },
  { icon: Users, value: "International", label: "Medical Specialists" },
  { icon: Star, value: "JCI", label: "Accredited Hospitals" },
  { icon: Shield, value: "Quality", label: "Healthcare Standards" }
]

export default function Home2Treatment() {
  return (
    <>
      <TopBar />
      <MainNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Dynamic Dashboard Hero */}
        <section className="relative bg-gray-900 py-20 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#BE1E2D] to-transparent opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500 to-transparent opacity-15 rounded-full"></div>
          </div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-[#BE1E2D]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                  <Zap className="w-5 h-5 text-[#BE1E2D]" />
                  <span className="text-sm font-medium">ADVANCED MEDICAL TECHNOLOGY</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
                  WORLD-CLASS
                  <span className="block font-medium bg-gradient-to-r from-[#BE1E2D] to-pink-500 bg-clip-text text-transparent">
                    TREATMENT EXCELLENCE
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                  Experience cutting-edge medical care delivered by internationally trained specialists using the latest technology and treatment protocols.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {qualityMetrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-8 h-8 text-[#BE1E2D]" />
                        <div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-gray-400 text-sm">{metric.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side - Treatment Specialties Preview */}
              <div className="grid grid-cols-2 gap-4">
                {treatmentSpecialties.slice(0, 4).map((specialty, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gray-50 p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-gray-200">
                      <div className="inline-block p-3 bg-[#BE1E2D] rounded-xl mb-4">
                        <specialty.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-[#BE1E2D] mb-2">
                        {specialty.category}
                      </h3>
                      <div className="text-sm text-gray-600">
                        Expert specialists
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Component */}
        <Home2JourneyNavigation currentStep="treatment" />

        {/* Interactive Specialties Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-[1400px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                TREATMENT SPECIALTIES
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of medical specialties, each backed by world-class expertise and cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentSpecialties.map((specialty, index) => (
                <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <CardContent className="p-0">
                    {/* Header with brand color */}
                    <div className="bg-[#BE1E2D] p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 opacity-20">
                        <specialty.icon className="w-20 h-20" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <specialty.icon className="w-8 h-8" />
                          <h3 className="text-xl font-bold">{specialty.category}</h3>
                        </div>
                        <p className="text-white/90 text-sm">{specialty.expertise}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Procedures */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Procedures</h4>
                        <div className="space-y-2">
                          {specialty.procedures.map((procedure, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{procedure}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {specialty.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <Target className="w-4 h-4 text-[#BE1E2D] flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-[#BE1E2D] hover:bg-[#A50E25] text-white border-none">
                        LEARN MORE
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-[#BE1E2D] mb-4 uppercase tracking-wide">
                Your Treatment Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A structured approach to your medical care, designed for optimal outcomes and comfort
              </p>
            </div>

            <Tabs defaultValue="CONSULTATION" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-100 rounded-xl p-1">
                {treatmentJourney.map((phase) => (
                  <TabsTrigger 
                    key={phase.phase} 
                    value={phase.phase}
                    className="data-[state=active]:bg-[#BE1E2D] data-[state=active]:text-white font-medium"
                  >
                    {phase.phase}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {treatmentJourney.map((phase) => (
                <TabsContent key={phase.phase} value={phase.phase}>
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[#BE1E2D] rounded-full flex items-center justify-center">
                              <Clock className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                              <p className="text-[#BE1E2D] font-medium">{phase.duration}</p>
                            </div>
                          </div>
                          
                          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {phase.description}
                          </p>
                          
                          <div className="space-y-4">
                            {phase.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-[#BE1E2D] flex-shrink-0" />
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-[#BE1E2D]/10 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
                          <div className="absolute top-4 right-4 w-24 h-24 bg-[#BE1E2D]/10 rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-200/50 rounded-full"></div>
                          
                          <div className="relative z-10 text-center">
                            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
                              <Stethoscope className="w-16 h-16 text-[#BE1E2D]" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                              {phase.title} Phase
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              Expert care tailored to your specific needs at every step of your treatment journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY2xlcyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIyIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2lyY2xlcykiLz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 uppercase tracking-wide">
                Quality Excellence Metrics
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our commitment to excellence is reflected in every metric we track
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="inline-block p-4 bg-white/20 rounded-xl mb-6 group-hover:bg-white/30 transition-colors">
                      <metric.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-white/80 text-sm uppercase tracking-wide">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-white text-[#BE1E2D] hover:bg-white/90 px-10 py-6 h-auto text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-6 h-6 mr-3" />
                  CONSULT OUR SPECIALISTS
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-10 py-6 h-auto text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-6 h-6 mr-3" />
                  TREATMENT GUIDE
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
                  <span>treatment@mhtc.org.my</span>
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