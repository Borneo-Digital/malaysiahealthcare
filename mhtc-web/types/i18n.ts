// types/i18n.ts

/**
 * Supported locales in the application
 */
export type Locale = 'en' | 'ms' | 'id' | 'zh' | 'ar';

/**
 * Available translation namespaces
 * Update this when adding new translation files
 */
export type Namespace = 
  | 'common'
  | 'home'
  | 'contact'
  | 'header'
  | 'corporate-profile'
  | 'member-hospital'
  | 'healthcare-travel-guide'
  | 'navbar'
  | 'footer';

/**
 * Return type for the useTranslation hook
 */
export interface TranslationHookReturn<T> {
  t: T;
  locale: Locale;
  isRTL: boolean;
}

/**
 * Text/layout direction
 */
export type Direction = 'ltr' | 'rtl';

/**
 * Get direction based on locale
 */
export function getDirection(locale: Locale): Direction {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/**
 * Get locale display name
 */
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames: Record<Locale, string> = {
    en: 'English',
    ms: 'Bahasa Melayu',
    id: 'Bahasa Indonesia',
    zh: '中文',
    ar: 'العربية'
  };
  
  return displayNames[locale] || locale;
}

// Re-export all translation interfaces
export * from './translations';