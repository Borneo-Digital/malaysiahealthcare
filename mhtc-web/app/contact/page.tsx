import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Malaysia Healthcare Travel Council",
  description:
    "Get in touch with the Malaysia Healthcare Travel Council for inquiries about healthcare travel to Malaysia.",
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <Input placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <Input placeholder="Subject" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" rows={5} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Malaysia Healthcare Travel Council</p>
                <p>Level 12, Surian Tower, No. 1 Jalan PJU 7/3</p>
                <p>Mutiara Damansara, 47810 Petaling Jaya</p>
                <p>Selangor Darul Ehsan, Malaysia</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+60 3 7841 9999</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>callcentre@mhtc.org.my</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2" /> Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Find Us on Map</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7225706442384!2d101.60698661475803!3d3.1580406977075494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f32eb4c3cf1%3A0x9d6a1d4a4a3f3a18!2sMalaysia%20Healthcare%20Travel%20Council%20(MHTC)!5e0!3m2!1sen!2smy!4v1620815087728!5m2!1sen!2smy"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
