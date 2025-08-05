'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/analytics'

export function WebVitals() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals)
      getFID(reportWebVitals)
      getFCP(reportWebVitals)
      getLCP(reportWebVitals)
      getTTFB(reportWebVitals)
    })
  }, [])

  return null
}

export default WebVitals