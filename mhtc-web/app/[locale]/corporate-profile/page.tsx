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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Profile | Malaysia Healthcare Travel Council",
  description: "Learn about the Malaysia Healthcare Travel Council, our mission, vision, and commitment to world-class healthcare.",
};

const iconMap = {
  qualityAssurance: Award,
  patientExperience: Users,
  industryCollaboration: Building,
  globalPromotion: Globe,
  innovation: Sparkles,
  capacityBuilding: BookOpen,
};

const focusAreas = [
  {
    key: "qualityAssurance",
    title: "Quality Assurance",
    description: "Ensuring the highest standards of healthcare quality and patient safety across all accredited facilities.",
    icon: Award,
  },
  {
    key: "patientExperience",
    title: "Patient Experience",
    description: "Enhancing the overall patient journey with personalized care and exceptional service delivery.",
    icon: Users,
  },
  {
    key: "industryCollaboration",
    title: "Industry Collaboration",
    description: "Fostering partnerships between healthcare providers, government agencies, and international organizations.",
    icon: Building,
  },
  {
    key: "globalPromotion",
    title: "Global Promotion",
    description: "Promoting Malaysia as a premier healthcare destination through strategic marketing and international outreach.",
    icon: Globe,
  },
  {
    key: "innovation",
    title: "Innovation",
    description: "Driving healthcare innovation through technology adoption and continuous improvement initiatives.",
    icon: Sparkles,
  },
  {
    key: "capacityBuilding",
    title: "Capacity Building",
    description: "Developing healthcare workforce capabilities and infrastructure to meet growing international demand.",
    icon: BookOpen,
  },
];

const achievements = {
  facilities: { number: "100+", label: "Accredited Facilities" },
  patients: { number: "1.2M+", label: "International Patients" },
  awards: { number: "15+", label: "Industry Awards" },
  years: { number: "20+", label: "Years of Excellence" },
};

export default function CorporateProfile() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-mhtc-primary mb-8">
          Corporate Profile
        </h1>
        <p className="text-lg sm:text-xl text-grey-600 mb-8 sm:mb-12 max-w-3xl">
          The Malaysia Healthcare Travel Council (MHTC) is an agency under the Ministry of Health Malaysia, 
          entrusted with facilitating and promoting the healthcare travel industry in Malaysia.
        </p>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-grey-900">
                  Our Mission
                </h2>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-grey-600">
                      To position Malaysia as the leading healthcare destination in Asia by facilitating 
                      the growth of the healthcare travel industry through strategic partnerships, 
                      quality assurance, and innovative service delivery.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-grey-900">
                  Our Vision
                </h3>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-grey-600">
                      To be the global benchmark for healthcare travel excellence, recognized for 
                      world-class medical services, exceptional patient experiences, and sustainable 
                      industry growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/corporate-image.png"
                alt="MHTC Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-mhtc-primary mb-8">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.key} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-1">
                    <div className="p-2 rounded-lg bg-mhtc-primary/10 w-fit">
                      <Icon className="w-5 h-5 text-mhtc-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl text-grey-900">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-grey-600">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-mhtc-primary mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(achievements).map(([key, stat]) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-mhtc-primary mb-2 text-center">
                    {stat.number}
                  </p>
                  <p className="text-grey-600 text-center">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-mhtc-primary text-white border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Ready to Experience Malaysian Healthcare?
              </h2>
              <p className="text-white/90 mb-6 text-center">
                Contact our dedicated team to learn more about our services and how we can assist 
                with your healthcare travel needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="bg-white text-mhtc-primary hover:bg-white/90"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
