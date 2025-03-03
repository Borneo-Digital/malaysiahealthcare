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
    return require(`@/locales/${locale}/${namespace}.json`) as T;
  } catch (error) {
    console.error(`Error loading translation for ${locale}/${namespace}`, error);
    
    // Fallback to English
    try {
      return require(`@/locales/en/${namespace}.json`) as T;
    } catch (fallbackError) {
      console.error(`Failed to load fallback translation for ${namespace}`, fallbackError);
      // Return an empty object but log this as a critical error
      console.error('CRITICAL: No fallback translations available');
      return {} as T;
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