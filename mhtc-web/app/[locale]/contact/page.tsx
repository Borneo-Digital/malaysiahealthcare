// app/[locale]/contact/page.tsx
"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ContactTranslations } from "@/types/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation<ContactTranslations>("contact");
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
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.getInTouch}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl">{t.contactInfo.address}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Malaysia Healthcare Travel Council
                <br />
                28 Tower 2, Jalan Rakyat, Brickfields
                <br />
                50470 Kuala Lumpur, Malaysia
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Mail className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl">{t.contactInfo.email}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <a
                  href="mailto:info@malaysiahealthcare.org"
                  className="text-primary hover:underline"
                >
                  info@malaysiahealthcare.org
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Phone className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl">{t.contactInfo.phone}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <a
                  href="tel:+60323005500"
                  className="text-primary hover:underline"
                >
                  +60 3-2300 5500
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {t.getInTouch}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {t.form.success}
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {t.form.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
                >
                  {t.form.submit}
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Hours and Map */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">{t.contactInfo.hours}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday & Sunday: Closed
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{t.map.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Google Maps or similar integration */}
                  <p className="text-gray-500">
                    Map placeholder - Google Maps would be integrated here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
