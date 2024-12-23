import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Stethoscope, Activity, Smile } from 'lucide-react'

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
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Your Treatment in Malaysia</h1>
      <p className="text-xl text-gray-600 mb-12">
        Experience world-class healthcare with state-of-the-art facilities, internationally trained medical professionals, and compassionate care throughout your treatment journey.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Medical Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatmentCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <category.icon className="mr-2 h-6 w-6 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{category.description}</p>
                <ul className="list-disc pl-5 mb-4">
                  {category.treatments.map((treatment, idx) => (
                    <li key={idx}>{treatment}</li>
                  ))}
                </ul>
                <Link href={`/medical-directory?specialty=${category.name.toLowerCase()}`}>
                  <Button variant="outline">Find Specialists</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Your Treatment Journey</h2>
        <Tabs defaultValue="consultation" className="w-full">
          <TabsList>
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
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">World-Class Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=300&width=500&text=State-of-the-art+Medical+Facility"
              alt="State-of-the-art medical facility in Malaysia"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-600">
              Our hospitals are equipped with the latest medical technologies and adhere to international standards of care and safety.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Internationally accredited hospitals</li>
              <li>Cutting-edge medical equipment</li>
              <li>Stringent hygiene and safety protocols</li>
              <li>Comfortable and modern patient rooms</li>
              <li>Multilingual medical staff</li>
            </ul>
            <Link href="/medical-directory">
              <Button>Explore Our Hospitals</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Patient Support Services</h2>
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Care Beyond Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <Stethoscope className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">24/7 Nursing Care</h3>
                  <p>Round-the-clock support from our dedicated nursing staff</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Dietary Consultation</h3>
                  <p>Personalized nutrition plans to support your recovery</p>
                </div>
              </li>
              <li className="flex items-start">
                <Activity className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Physiotherapy</h3>
                  <p>Expert physical therapy to aid in your rehabilitation</p>
                </div>
              </li>
              <li className="flex items-start">
                <Smile className="mr-2 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Counseling Services</h3>
                  <p>Emotional and psychological support throughout your journey</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Ready to Start Your Treatment Journey?</CardTitle>
          <CardDescription>Our team is here to guide you through every step of your healthcare experience in Malaysia.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Contact Us for Personalized Assistance</Button>
        </CardContent>
      </Card>
    </div>
  )
}

