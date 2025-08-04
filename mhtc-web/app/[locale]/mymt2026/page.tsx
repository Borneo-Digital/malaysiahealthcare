"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MYMT2026Translations } from "@/types/translations";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";
import MYMT2026Hero from "@/components/home4/mymt2026-hero";
import MYMT2026SocialMedia from "@/components/home4/mymt2026-social-media";
import MYMT2026About from "@/components/home4/mymt2026-about";
import MYMT2026WhatsHappening from "@/components/home4/mymt2026-whats-happening";
import MYMT2026BrandGuideline from "@/components/home4/mymt2026-brand-guideline";
import MYMT2026OurPartners from "@/components/home4/mymt2026-our-partners";
import MYMT2026SupportedBy from "@/components/home4/mymt2026-supported-by";

export default function MYMT2026Page() {
  useTranslation<MYMT2026Translations>("mymt2026");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Video Background */}
        <MYMT2026Hero />
        
        {/* Social Media Section */}
        <MYMT2026SocialMedia />

        {/* About MYMT26 Section with Cards */}
        <MYMT2026About />

        {/* What's Happening Section */}
        <MYMT2026WhatsHappening />

        {/* Brand Guideline Section */}
        <MYMT2026BrandGuideline />

        {/* Our Partners Section */}
        <MYMT2026OurPartners />

        {/* Supported By Section */}
        <MYMT2026SupportedBy />
      </main>
      
      <Footer />
    </div>
  );
}
