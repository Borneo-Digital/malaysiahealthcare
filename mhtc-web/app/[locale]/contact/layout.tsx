import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Malaysia Healthcare Travel Council",
  description:
    "Get in touch with the Malaysia Healthcare Travel Council for inquiries about healthcare travel to Malaysia.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
