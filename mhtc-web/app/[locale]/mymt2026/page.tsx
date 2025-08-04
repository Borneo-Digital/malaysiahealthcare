import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import components to avoid hydration issues
const Header = dynamic(() => import("@/components/home4/header").then(mod => ({ default: mod.Header })), { ssr: false });
const Footer = dynamic(() => import("@/components/home4/footer").then(mod => ({ default: mod.Footer })), { ssr: false });
const MYMT2026Hero = dynamic(() => import("@/components/home4/mymt2026-hero"), { ssr: false });
const MYMT2026SocialMedia = dynamic(() => import("@/components/home4/mymt2026-social-media"), { ssr: false });
const MYMT2026About = dynamic(() => import("@/components/home4/mymt2026-about"), { ssr: false });
const MYMT2026WhatsHappening = dynamic(() => import("@/components/home4/mymt2026-whats-happening"), { ssr: false });
const MYMT2026BrandGuideline = dynamic(() => import("@/components/home4/mymt2026-brand-guideline"), { ssr: false });
const MYMT2026OurPartners = dynamic(() => import("@/components/home4/mymt2026-our-partners"), { ssr: false });
const MYMT2026SupportedBy = dynamic(() => import("@/components/home4/mymt2026-supported-by"), { ssr: false });

// Generate metadata dynamically based on locale
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  try {
    const translations = await import(`@/locales/${locale}/mymt2026.json`).then(
      (module) => module.default || module
    );
    
    return {
      title: translations.meta.title,
      description: translations.meta.description,
    };
  } catch {
    // Fallback to English if locale not found
    const fallbackTranslations = await import(`@/locales/en/mymt2026.json`).then(
      (module) => module.default || module
    );
    
    return {
      title: fallbackTranslations.meta.title,
      description: fallbackTranslations.meta.description,
    };
  }
}

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
