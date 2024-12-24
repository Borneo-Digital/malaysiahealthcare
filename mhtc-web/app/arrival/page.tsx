import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Plane, Users, Building, Car, CheckCircle, Download } from 'lucide-react'
import { JourneyNavigation } from '@/components/JourneyNavigation'

export const metadata: Metadata = {
  title: 'Arrival Information | Malaysia Healthcare Travel Council',
  description: 'Learn about the arrival process for your healthcare journey in Malaysia, including meet and greet services, immigration assistance, and transportation options.',
}

const arrivalServices = [
  {
    title: "Meet and Greet",
    icon: Users,
    content: "Our dedicated team will welcome you at the airport and assist you through the arrival process.",
    link: "#meet-and-greet"
  },
  {
    title: "Immigration Assistance",
    icon: Plane,
    content: "Receive support with immigration procedures to ensure a smooth entry into Malaysia.",
    link: "#immigration-assistance"
  },
  {
    title: "Malaysia Concierge Lounge",
    icon: Building,
    content: "Relax in our exclusive lounge while we handle your arrival formalities.",
    link: "#concierge-lounge"
  },
  {
    title: "Transportation",
    icon: Car,
    content: "Comfortable and reliable transportation from the airport to your accommodation or healthcare facility.",
    link: "#transportation"
  }
]

export default function Arrival() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Arrival in Malaysia
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Welcome to Malaysia! We&apos;ve prepared a seamless arrival experience to ensure your healthcare journey begins smoothly and comfortably.
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
                    i === 1 ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200'
                  }`}>
                    {i === 1 ? <CheckCircle className="w-5 h-5" /> : (i + 1)}
                  </div>
                  <span className={`ml-3 md:ml-0 md:mt-2 font-medium ${
                    i === 1 ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {arrivalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="space-y-1 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{service.content}</p>
                </CardHeader>
                <CardContent>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Journey Navigation */}
          <JourneyNavigation currentStep="arrival" />

          {/* CTA Section */}
          <div className="mt-12">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Need Assistance with Your Arrival?</h2>
                    <p className="text-white/90">Our care team is here to ensure a smooth arrival experience.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Button 
                      variant="secondary"
                      className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Contact Care Team
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

