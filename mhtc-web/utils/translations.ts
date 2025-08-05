// utils/translations.ts
import { Locale, Namespace } from '@/types/i18n';

/**
 * Load translations for server components
 * @param locale Current locale
 * @param namespace Translation namespace
 * @returns Typed translation object
 */
export function getServerTranslations<T>(locale: Locale, namespace: Namespace): T {
  try {
    // Validate locale is supported
    const supportedLocales = ['en', 'ms', 'id', 'zh', 'ar'];
    if (!supportedLocales.includes(locale)) {
      console.warn(`Unsupported locale: ${locale}, falling back to 'en'`);
      locale = 'en';
    }

    return require(`@/locales/${locale}/${namespace}.json`) as T;
  } catch (error) {
    console.error(`Error loading translation for ${locale}/${namespace}`, error);
    
    // Fallback to English
    try {
      return require(`@/locales/en/${namespace}.json`) as T;
    } catch (fallbackError) {
      console.error(`Failed to load fallback translation for ${namespace}`, fallbackError);
      
      // Return a minimal fallback object to prevent app crashes
      console.error('CRITICAL: No fallback translations available, using minimal fallback');
      const minimalFallback = {
        navigation: {
          home: 'Home',
          memberHospital: 'Member Hospital',
          healthcareTravelGuide: 'Healthcare Travel Guide',
          mhtcChronicles: 'MHTC Chronicles',
          corporateProfile: 'Corporate Profile',
          mymt2026: 'MYMT2026',
          contact: 'Contact Us'
        },
        accessibility: {
          search: 'Search',
          notifications: 'Notifications',
          toggleMenu: 'Toggle menu',
          skipToContent: 'Skip to content'
        }
      };
      
      return minimalFallback as T;
    }
  }
}

/**
 * Determine if a locale is right-to-left
 * @param locale Current locale
 * @returns Boolean indicating if the locale is RTL
 */
export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}