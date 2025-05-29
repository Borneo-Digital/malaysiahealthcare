"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Users, Globe } from "lucide-react";

interface TrustIndicatorsProps {
  isRTL?: boolean;
}

export default function TrustIndicators({ isRTL = false }: TrustIndicatorsProps) {
  const indicators = [
    {
      icon: Award,
      title: "JCI Accredited",
      description: "40+ member hospitals",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Government Endorsed",
      description: "Ministry of Health initiative",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "1M+ Patients",
      description: "Facilitated annually",
      color: "text-purple-600",
    },
    {
      icon: Globe,
      title: "150+ Countries",
      description: "Healthcare travelers from",
      color: "text-orange-600",
    },
  ];

  const partners = [
    { name: "Ministry of Health", logo: "/images/partners/moh-logo.png" },
    { name: "Tourism Malaysia", logo: "/images/partners/tourism-malaysia-logo.png" },
    { name: "APHM", logo: "/images/partners/aphm-logo.png" },
    { name: "MSQH", logo: "/images/partners/msqh-logo.png" },
  ];

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      {/* Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3 ${indicator.color}`}>
              <indicator.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">
              {indicator.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              {indicator.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Partners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-600 text-sm mb-6">Coordinating with leading healthcare organizations</p>
        <div className="flex justify-center items-center space-x-8 opacity-60">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-16 h-8 md:w-20 md:h-10"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 