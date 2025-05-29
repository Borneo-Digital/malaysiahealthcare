"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  FileText, 
  MapPin, 
  ArrowRight,
  Clock,
  MessageCircle,
  Download
} from "lucide-react";

interface QuickActionsProps {
  isRTL?: boolean;
}

export default function QuickActions({ isRTL = false }: QuickActionsProps) {
  const quickActions = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Connect with our healthcare travel specialists for personalized guidance",
      action: "Book Now",
      href: "/contact",
      color: "bg-blue-500 hover:bg-blue-600",
      iconColor: "text-blue-500",
    },
    {
      icon: Phone,
      title: "24/7 Helpline",
      description: "Get immediate assistance from our healthcare travel coordinators",
      action: "Call Now",
      href: "tel:+60327268688",
      color: "bg-green-500 hover:bg-green-600",
      iconColor: "text-green-500",
    },
    {
      icon: FileText,
      title: "Healthcare Travel Guide",
      description: "Download comprehensive information about medical tourism in Malaysia",
      action: "Download",
      href: "/healthcare-travel-guide",
      color: "bg-purple-500 hover:bg-purple-600",
      iconColor: "text-purple-500",
    },
    {
      icon: MapPin,
      title: "Find Member Hospitals",
      description: "Explore our network of accredited healthcare facilities across Malaysia",
      action: "Explore",
      href: "/member-hospital",
      color: "bg-orange-500 hover:bg-orange-600",
      iconColor: "text-orange-500",
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Healthcare Coordination",
      description: "Connect with member hospitals",
      available: true,
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Travel assistance hotline",
      available: true,
    },
    {
      icon: Download,
      title: "Travel Resources",
      description: "Guides and information",
      available: true,
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
          Start Your Healthcare Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Let us guide you to Malaysia&apos;s finest healthcare facilities and create your personalized medical travel experience
        </motion.p>
      </div>

      {/* Main Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 shadow-md">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className={`w-8 h-8 ${action.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {action.description}
                </p>
                
                <Link href={action.href} className="w-full">
                  <Button 
                    className={`w-full ${action.color} text-white group-hover:scale-105 transition-all duration-300`}
                  >
                    {action.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Support Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Need Healthcare Travel Assistance?
          </h3>
          <p className="text-gray-600">
            Our healthcare travel coordinators are here to facilitate your medical journey to Malaysia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {option.title}
              </h4>
              <p className="text-sm text-gray-600">
                {option.description}
              </p>
              {option.available && (
                <div className="flex items-center justify-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-green-600 font-medium">Available</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 