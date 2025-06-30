import { Metadata } from "next";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";

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
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
