// app/[locale]/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/home4/ui/container";
import { Button } from "@/components/home4/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus("error");
      return;
    }

    // Form submission logic would go here
    // For demo purposes, we&apos;ll just simulate a successful submission
    // TODO: Implement actual form submission to backend API
    setFormStatus("success");

    // Reset form after 3 seconds on success
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Bunga Raya Traditional Malaysian Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-20">
          <Image
            src="/images/Bunga Raya Asset-01.png"
            alt="Bunga Raya - Traditional Malaysian hibiscus background"
            fill
            className="object-cover object-right-top"
            sizes="(max-width: 1024px) 0vw, 33vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:hidden opacity-15">
          <Image
            src="/images/Bunga Raya Asset-01.png"
            alt="Bunga Raya decorative accent"
            fill
            className="object-cover object-bottom-left"
            sizes="256px"
          />
        </div>
      </div>

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none z-10"></div>

      <div className="relative z-20 pt-20">
        <Container>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in <span className="text-[#BE1E2D]">Touch</span>
            </h1>
            
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {/* Main Office */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#BE1E2D]/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-[#BE1E2D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Main Office</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unit 13A-1, Level 13A, Block 2A, Plaza Sentral, 5 Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur, Malaysia
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#BE1E2D]/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-[#BE1E2D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <a href="tel:+603 2785 1814" className="hover:text-[#BE1E2D] transition-colors">
                    +603 2785 1814
                  </a>
                </p>
                <p className="text-xs text-gray-500">Main Office</p>
                <p className="text-sm text-gray-600 mb-1">Mon – Sunday (9.00am – 6.00pm)</p>

              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#BE1E2D]/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-[#BE1E2D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600">
                  <a href="mailto:callcentre@mhtc.org.my" className="hover:text-[#BE1E2D] transition-colors">
                    callcentre@mhtc.org.my
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#BE1E2D]/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#BE1E2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-[#BE1E2D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <a href="https://wa.me/60188700100" className="hover:text-[#BE1E2D] transition-colors">
                  +6018 870 0100
                  </a>
                </p>
                
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {formStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4">
                      Please fill in all required fields.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE1E2D] focus:border-[#BE1E2D] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE1E2D] focus:border-[#BE1E2D] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE1E2D] focus:border-[#BE1E2D] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE1E2D] focus:border-[#BE1E2D] transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="bg-[#BE1E2D] hover:bg-[#BE1E2D]/90 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Call Centre */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#BE1E2D]" />
                    Call Centre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">+603 8776 6168</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      Mon – Sunday (9.00am – 6.00pm)
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MH Concierge */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#BE1E2D]" />
                    MH Concierge & Lounge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">+603 8776 6168 <span className="text-xs text-gray-500">(KLIA)</span></p>
                    <p className="text-sm text-gray-600">+604 643 1626 <span className="text-xs text-gray-500">(PIA)</span></p>
                  </div>
                </CardContent>
              </Card>

              {/* MHRO Indonesia */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#BE1E2D]" />
                    MHRO Indonesia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">+62 21 5010 9636</p>
                    <p className="text-sm text-gray-600">callcentre.IDN@mhtc.org.my</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
}
