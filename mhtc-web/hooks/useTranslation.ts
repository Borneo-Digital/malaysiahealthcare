'use client';

import { useParams } from 'next/navigation';
import { Locale, Namespace, TranslationHookReturn } from '@/types/i18n';
import { useMemo } from 'react';

/**
 * Type-safe translation hook for client components
 * @param namespace Translation namespace
 * @returns Typed translation object, locale, and RTL flag
 */
export function useTranslation<T = Record<string, any>>(namespace: Namespace = 'common'): TranslationHookReturn<T> {
  // Get locale from URL parameters
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  
  // Check if language is RTL
  const isRTL = locale === 'ar';
  
  // Cache translations with useMemo to avoid reloading on each render
  const t = useMemo(() => {
    try {
      // Dynamic import would be better, but require works for now
      return require(`@/locales/${locale}/${namespace}.json`) as T;
    } catch (error) {
      console.error(`Could not load translations for ${locale}/${namespace}`, error);
      
      // Fallback to English
      try {
        return require(`@/locales/en/${namespace}.json`) as T;
      } catch (fallbackError) {
        console.error(`Failed to load fallback translation for ${namespace}`, fallbackError);
        return {} as T;
      }
    }
  }, [locale, namespace]);
  
  return { t, locale, isRTL };
}