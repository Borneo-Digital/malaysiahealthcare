import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Stethoscope, Activity, Smile, CheckCircle, Users, Download } from 'lucide-react'
import { JourneyNavigation } from '@/components/JourneyNavigation'

export const metadata: Metadata = {
  title: 'Treatment Information | Malaysia Healthcare Travel Council',
  description: 'Learn about world-class healthcare services, medical procedures, and patient care available during your treatment in Malaysia.',
}

const treatmentCategories = [
  {
    name: "Cardiology",
    icon: Heart,
    description: "World-class cardiac care and procedures",
    treatments: ["Angioplasty", "Bypass Surgery", "Heart Valve Replacement"]
  },
  {
    name: "Oncology",
    icon: Activity,
    description: "Comprehensive cancer treatments and therapies",
    treatments: ["Chemotherapy", "Radiation Therapy", "Immunotherapy"]
  },
  {
    name: "Orthopedics",
    icon: Stethoscope,
    description: "Advanced orthopedic surgeries and treatments",
    treatments: ["Joint Replacement", "Spine Surgery", "Sports Medicine"]
  },
  {
    name: "Fertility",
    icon: Smile,
    description: "Cutting-edge fertility treatments and services",
    treatments: ["In Vitro Fertilization (IVF)", "Intrauterine Insemination (IUI)", "Egg Freezing"]
  }
]

export default function Treatment() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Your Treatment in Malaysia
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Experience world-class healthcare with state-of-the-art facilities, internationally trained medical professionals, 
            and compassionate care throughout your treatment journey.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 z-0 hidden md:block" />
            <div className="flex flex-col md:flex-row justify-between relative z-10">
              {['Pre-Arrival', 'Arrival', 'Treatment', 'Post-Treatment'].map((step, i) => (
                <div key={i} className="flex md:flex-col items-center mb-4 md:mb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i === 2 ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200'
                  }`}>
                    {i === 2 ? <CheckCircle className="w-5 h-5" /> : (i + 1)}
                  </div>
                  <span className={`ml-3 md:ml-0 md:mt-2 font-medium ${
                    i === 2 ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Medical Specialties Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Medical Specialties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatmentCategories.map((category, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="space-y-1 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary/60" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/medical-directory?specialty=${category.name.toLowerCase()}`}>
                      <Button variant="outline" className="w-full">Find Specialists</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Treatment Journey Tabs */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Your Treatment Journey</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Tabs defaultValue="consultation" className="w-full">
                  <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-6">
                    <TabsTrigger value="consultation">Initial Consultation</TabsTrigger>
                    <TabsTrigger value="diagnosis">Diagnosis & Planning</TabsTrigger>
                    <TabsTrigger value="procedure">Procedure</TabsTrigger>
                    <TabsTrigger value="recovery">Recovery & Follow-up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="consultation">
                    <Card>
                      <CardHeader>
                        <CardTitle>Initial Consultation</CardTitle>
                        <CardDescription>Your first step in the treatment process</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Meet with your assigned specialist</li>
                          <li>Discuss your medical history and current condition</li>
                          <li>Undergo initial examinations or tests if required</li>
                          <li>Receive an overview of potential treatment options</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="diagnosis">
                    <Card>
                      <CardHeader>
                        <CardTitle>Diagnosis & Planning</CardTitle>
                        <CardDescription>Comprehensive assessment and treatment planning</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Undergo necessary diagnostic tests and procedures</li>
                          <li>Receive a detailed diagnosis from your medical team</li>
                          <li>Discuss treatment options, risks, and benefits</li>
                          <li>Develop a personalized treatment plan</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="procedure">
                    <Card>
                      <CardHeader>
                        <CardTitle>Procedure</CardTitle>
                        <CardDescription>Your treatment carried out by expert medical professionals</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Undergo pre-procedure preparations</li>
                          <li>Receive your planned medical treatment or surgery</li>
                          <li>Experience care from highly skilled medical staff</li>
                          <li>Begin immediate post-procedure care and monitoring</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="recovery">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recovery & Follow-up</CardTitle>
                        <CardDescription>Ensuring your continued care and well-being</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Receive post-treatment care and support</li>
                          <li>Undergo follow-up consultations and assessments</li>
                          <li>Get guidance on rehabilitation and recovery</li>
                          <li>Plan for any necessary future treatments or check-ups</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Journey Navigation */}
          <JourneyNavigation currentStep="treatment" />

          {/* CTA Section */}
          <div className="mt-12">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Ready to Begin Your Treatment?</h2>
                    <p className="text-white/90">Our medical team is here to guide you through your treatment journey.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Button 
                      variant="secondary"
                      className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Contact Medical Team
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

