'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/analytics'

export function WebVitals() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    // Note: web-vitals v5+ uses onCLS, onINP, etc. INP replaces FID as Core Web Vital
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals)
      onINP(reportWebVitals)  // INP (Interaction to Next Paint) replaces FID
      onFCP(reportWebVitals)
      onLCP(reportWebVitals)
      onTTFB(reportWebVitals)
    })
  }, [])

  return null
}

export default WebVitals