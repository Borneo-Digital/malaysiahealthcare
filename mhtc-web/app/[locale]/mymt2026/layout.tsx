import { Metadata } from "next";

// Generate metadata dynamically based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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

export default function MYMT2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

