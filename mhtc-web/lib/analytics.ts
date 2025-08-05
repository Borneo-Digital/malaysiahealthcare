// Core Web Vitals tracking utilities
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export interface WebVitalMetric {
  name: 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB';
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export function reportWebVitals(metric: WebVitalMetric) {
  // Send to Google Analytics 4
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
      custom_parameter_1: metric.rating,
    });

    // Send detailed metric data
    window.gtag('event', 'web_vital_measurement', {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
      metric_id: metric.id,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      note: metric.name === 'INP' ? 'INP replaces FID as Core Web Vital in 2024' : undefined,
    });
  }
}

export function trackPageView(url: string, title?: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XF937XX8XL', {
      page_title: title,
      page_location: url,
    });
  }
}

export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
}

// Healthcare-specific tracking events
export function trackHealthcareInteraction(action: string, data: {
  specialty?: string;
  hospital?: string;
  treatment?: string;
  language?: string;
  [key: string]: unknown;
}) {
  trackEvent('healthcare_interaction', {
    action,
    ...data,
    timestamp: new Date().toISOString(),
  });
}

export function trackHospitalInquiry(hospitalName: string, specialty: string) {
  trackEvent('hospital_inquiry', {
    hospital_name: hospitalName,
    specialty: specialty,
    event_category: 'Healthcare Engagement',
  });
}

export function trackTreatmentInterest(treatmentType: string, source: string = 'website') {
  trackEvent('treatment_interest', {
    treatment_type: treatmentType,
    source: source,
    event_category: 'Treatment Engagement',
  });
}

export function trackLanguageChange(fromLanguage: string, toLanguage: string) {
  trackEvent('language_change', {
    from_language: fromLanguage,
    to_language: toLanguage,
    event_category: 'User Experience',
  });
}

export function trackDownload(fileName: string, fileType: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'Resource Downloads',
  });
}

// Search Console related utilities
export function generateSearchConsoleSitemap() {
  return {
    hospitals: '/sitemap-hospitals.xml',
    treatments: '/sitemap-treatments.xml',
    news: '/sitemap-news.xml',
    main: '/sitemap.xml'
  };
}

// SEO performance monitoring
export function monitorSEOPerformance() {
  // Track page load time
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackEvent('page_load_time', {
        load_time_ms: loadTime,
        event_category: 'Performance',
      });
    });
  }
}

// Initialize analytics and monitoring
export function initializeAnalytics() {
  if (typeof window !== 'undefined') {
    monitorSEOPerformance();
    
    // Track any 404 errors
    if (document.title.includes('404') || window.location.pathname.includes('404')) {
      trackEvent('404_error', {
        page: window.location.pathname,
        referrer: document.referrer,
        event_category: 'Error Tracking',
      });
    }
  }
}