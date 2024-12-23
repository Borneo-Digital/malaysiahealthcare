import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plane, Users, Building, Car } from 'lucide-react'

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
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Your Arrival in Malaysia</h1>
      <p className="text-xl text-gray-600 mb-12">
        Welcome to Malaysia! We've prepared a seamless arrival experience to ensure your healthcare journey begins smoothly and comfortably.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {arrivalServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className="mr-2 h-6 w-6 text-primary" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.content}</p>
              <Link href={service.link}>
                <Button variant="outline">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <section id="meet-and-greet" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet and Greet Services</h2>
        <p className="mb-4">
          Our Meet and Greet service ensures a warm welcome and a smooth start to your healthcare journey in Malaysia.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Personal greeting at the airport gate</li>
          <li>Assistance with luggage</li>
          <li>Guidance through immigration and customs</li>
          <li>Escort to the Malaysia Concierge Lounge or your transportation</li>
        </ul>
        <p className="mb-4">
          To book our Meet and Greet service, please contact your chosen hospital's international patient center or our Malaysia Healthcare Travel Council representative.
        </p>
      </section>

      <section id="immigration-assistance" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Immigration Assistance</h2>
        <p className="mb-4">
          Our team will help facilitate your entry into Malaysia, ensuring all necessary documentation is in order.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What documents do I need for immigration?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>Valid passport (with at least 6 months validity)</li>
                <li>Visa (if required)</li>
                <li>Completed immigration form</li>
                <li>Letter from the hospital confirming your treatment</li>
                <li>Proof of sufficient funds for your stay</li>
                <li>Return ticket</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long can I stay in Malaysia for medical treatment?</AccordionTrigger>
            <AccordionContent>
              Most visitors are granted a 90-day stay upon arrival. If you require a longer stay for your treatment, our team can assist you with extending your visa or applying for a special medical visa.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="concierge-lounge" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Malaysia Concierge Lounge</h2>
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=300&width=600&text=Malaysia+Concierge+Lounge"
            alt="Malaysia Concierge Lounge"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>
        <p className="mb-4">
          The Malaysia Concierge Lounge is a comfortable and exclusive space where you can relax after your flight while we handle your arrival formalities.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Comfortable seating and refreshments</li>
          <li>Complimentary Wi-Fi</li>
          <li>Assistance with any last-minute travel arrangements</li>
          <li>Information about your healthcare journey and stay in Malaysia</li>
        </ul>
      </section>

      <section id="transportation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Transportation Services</h2>
        <p className="mb-4">
          We offer reliable and comfortable transportation from the airport to your accommodation or healthcare facility.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Private car services</li>
          <li>Wheelchair-accessible vehicles (upon request)</li>
          <li>Express Rail Link (ERL) tickets to Kuala Lumpur city center</li>
        </ul>
        <p className="mb-4">
          Transportation costs vary depending on your destination and chosen mode of transport. Your hospital's international patient center can provide you with detailed information and assist with bookings.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Prepare for Your Arrival</CardTitle>
          <CardDescription>Ensure a smooth arrival by booking our services in advance.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Contact Us to Arrange Your Arrival</Button>
        </CardContent>
      </Card>
    </div>
  )
}

