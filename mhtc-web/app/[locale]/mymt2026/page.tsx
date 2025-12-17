"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";

// Dynamically import heavy components to improve initial load
const MYMT2026Hero = dynamic(() => import("@/components/home4/mymt2026-hero"));
const MYMT2026SocialMedia = dynamic(() => import("@/components/home4/mymt2026-social-media"));
const MYMT2026About = dynamic(() => import("@/components/home4/mymt2026-about"));
const MYMT2026WhatsHappening = dynamic(() => import("@/components/home4/mymt2026-whats-happening"));
const MYMT2026BrandGuideline = dynamic(() => import("@/components/home4/mymt2026-brand-guideline"));
const MYMT2026OurPartners = dynamic(() => import("@/components/home4/mymt2026-our-partners"));
const MYMT2026SupportedBy = dynamic(() => import("@/components/home4/mymt2026-supported-by"));

export default function MYMT2026Page() {
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
