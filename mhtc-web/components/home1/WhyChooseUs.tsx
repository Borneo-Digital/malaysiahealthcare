"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Clock, 
  Heart, 
  Globe, 
  Shield,
  CheckCircle
} from "lucide-react";

interface WhyChooseUsProps {
  isRTL?: boolean;
}

export default function WhyChooseUs({ isRTL = false }: WhyChooseUsProps) {
  const advantages = [
    {
      icon: Award,
      title: "Qualified Medical Professionals",
      description: "Fellowship-certified doctors with international credentials and national registry privileges",
      features: ["Fellowship certifications", "International training", "Continuous education"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Shield,
      title: "Accredited Healthcare Facilities",
      description: "Hospitals with JCI and other international accreditations maintaining global quality standards",
      features: ["JCI accreditation", "International standards", "Quality assurance"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Clock,
      title: "Modern Medical Infrastructure",
      description: "Contemporary medical technology and equipment supporting various treatment options",
      features: ["Modern equipment", "Updated facilities", "Digital health systems"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      title: "Quality Healthcare Services",
      description: "Comprehensive medical care with established protocols and patient-centered approach",
      features: ["Comprehensive care", "Patient focus", "Clinical protocols"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Globe,
      title: "Multicultural Environment",
      description: "Diverse, welcoming culture with multilingual support and international patient services",
      features: ["Language support", "Cultural sensitivity", "International services"],
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Malaysia Healthcare Advantages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Key factors that support Malaysia as a healthcare travel destination
        </motion.p>
      </div>

      {/* Main Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group border-gray-200">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${advantage.iconBg} group-hover:bg-primary/20 transition-all`}>
                  <advantage.icon className={`w-6 h-6 ${advantage.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {advantage.description}
                </p>
                
                <ul className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 