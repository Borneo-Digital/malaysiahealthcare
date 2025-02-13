import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users,
  Building,
  Globe,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About MHTC | Malaysia Healthcare Travel Council",
  description:
    "Learn about the Malaysia Healthcare Travel Council, our mission, vision, and commitment to world-class healthcare.",
};

const focusAreas = [
  {
    title: "Quality Assurance",
    icon: Award,
    description:
      "Ensuring the highest standards of healthcare delivery through rigorous quality control and accreditation processes.",
  },
  {
    title: "Patient Experience",
    icon: Users,
    description:
      "Creating seamless and comfortable healthcare journeys for international patients with personalized care and support.",
  },
  {
    title: "Industry Collaboration",
    icon: Building,
    description:
      "Fostering partnerships with healthcare providers, facilitators, and industry stakeholders to strengthen Malaysia&apos;s healthcare ecosystem.",
  },
  {
    title: "Global Promotion",
    icon: Globe,
    description:
      "Promoting Malaysia as a leading destination for healthcare travel through strategic marketing and international partnerships.",
  },
  {
    title: "Innovation in Healthcare",
    icon: Sparkles,
    description:
      "Embracing cutting-edge medical technologies and innovative healthcare solutions to enhance patient care.",
  },
  {
    title: "Capacity Building",
    icon: BookOpen,
    description:
      "Developing healthcare professionals and industry expertise through training, education, and knowledge sharing.",
  },
];

export default function CorporateProfile() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Corporate Profile
        </h1>
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-28 pb-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About MHTC
            </h1>
            <p className="text-lg text-gray-600">
              Pioneering Excellence in Healthcare Travel
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Our Mission
                </h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      The Malaysia Healthcare Travel Council (MHTC) is committed
                      to facilitating and promoting the healthcare travel
                      industry of Malaysia. We strive to position Malaysia as
                      the leading global healthcare destination, offering
                      world-class quality healthcare services to international
                      patients.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Our Vision
                </h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      To make Malaysia the preferred destination for world-class
                      healthcare services, fostering sustainable economic growth
                      through medical tourism while ensuring the highest
                      standards of patient care and satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/travel3.webp?height=400&width=600&text=MHTC+Team"
                alt="MHTC Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Focus Areas Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
              Our Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <CardHeader className="space-y-1">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "250+", label: "Healthcare Facilities" },
                { number: "1M+", label: "International Patients" },
                { number: "30+", label: "Industry Awards" },
                { number: "10+", label: "Years of Excellence" },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="text-center border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Join Us in Shaping the Future of Healthcare Travel
                </h2>
                <p className="text-white/90 mb-6">
                  Connect with us to learn more about our initiatives and
                  opportunities for collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
