import { MetadataRoute } from 'next'
import { locales } from '@/middleware'

const baseUrl = 'https://malaysiahealthcare.org'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get current date for lastModified
  const currentDate = new Date()
  
  // Define all your routes based on the existing app structure
  const routes = [
    '',
    '/mymt2026',
    '/mhtc-chronicles',
    '/member-hospital',
    '/faq',
    '/corporate-governance',
    '/contact',
    '/treatment',
    '/pre-arrival',
    '/post-treatment',
    '/post-arrival',
    '/arrival',
    '/privacy-policy',
    '/corporate-profile',
    '/healthcare-travel-guide',
    '/videos',
    '/calendar',
    '/magic-contest-tnc'
  ]
  
  // Generate sitemap entries for each route and locale
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  routes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    })
  })
  
  // Add root URL that redirects to default locale
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0
  })
  
  return sitemapEntries
}