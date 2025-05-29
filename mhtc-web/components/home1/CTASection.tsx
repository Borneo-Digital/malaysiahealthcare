"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Calendar, 
  FileText,
  CheckCircle,
  Phone
} from "lucide-react";

interface CTASectionProps {
  isRTL?: boolean;
}

export default function CTASection({ isRTL = false }: CTASectionProps) {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Healthcare Consultation",
      description: "Connect with our team for information about healthcare facilities in Malaysia",
      action: "Schedule Consultation",
      href: "/contact",
      primary: true,
      features: ["Information session", "Facility recommendations", "Process guidance"],
    },
    {
      icon: FileText,
      title: "Healthcare Guide",
      description: "Access comprehensive information about healthcare travel in Malaysia",
      action: "View Guide",
      href: "/healthcare-travel-guide",
      primary: false,
      features: ["Treatment information", "Facility directory", "Travel guidance"],
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
          Begin Your Healthcare Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We&apos;re here to help coordinate your healthcare travel to Malaysia
        </motion.p>
      </div>

      {/* Main CTA Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {ctaOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-xl border-gray-200 bg-white">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {option.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {option.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Button */}
                <Link href={option.href} className="block w-full">
                  <Button 
                    className={`w-full h-12 text-base font-medium transition-all duration-300 ${
                      option.primary
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {option.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <div className="inline-flex items-center text-gray-600 text-sm">
          <Phone className="w-4 h-4 mr-2" />
          <span>
            Questions? Call{" "}
            <a 
              href="tel:+60327268688" 
              className="font-semibold text-primary hover:underline"
            >
              +603 2726 8688
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
} 