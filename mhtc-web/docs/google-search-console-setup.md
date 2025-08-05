# Google Search Console Setup Guide for MHTC

## Overview
This guide helps you set up Google Search Console for the Malaysia Healthcare Travel Council website to monitor SEO performance, track search rankings, and identify optimization opportunities.

## 1. Google Search Console Property Setup

### Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property"

### Step 2: Add Your Property
1. Choose "URL prefix" property type
2. Enter your domain: `https://malaysiahealthcare.org`
3. Click "Continue"

### Step 3: Verify Ownership
Choose the **HTML meta tag** method:
1. Copy the verification code from Google Search Console
2. Replace `REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE` in:
   - `app/[locale]/layout.tsx` (lines 47 and 50)
3. Deploy the changes
4. Click "Verify" in Google Search Console

## 2. Required Code Updates

### Update Verification Code
In `app/[locale]/layout.tsx`, replace the placeholder:

```typescript
verification: {
  google: 'YOUR_ACTUAL_VERIFICATION_CODE_HERE',
},
other: {
  'google-site-verification': 'YOUR_ACTUAL_VERIFICATION_CODE_HERE',
},
```

### Install Web Vitals Package
Run this command to add Core Web Vitals tracking:

```bash
npm install web-vitals
```

## 3. Submit Sitemaps

After verification, submit these sitemaps:
1. Main sitemap: `https://malaysiahealthcare.org/sitemap.xml`
2. Future specialty sitemaps (when implemented):
   - `https://malaysiahealthcare.org/sitemap-hospitals.xml`
   - `https://malaysiahealthcare.org/sitemap-treatments.xml`
   - `https://malaysiahealthcare.org/sitemap-news.xml`

## 4. International Targeting

### Set Geographic Target
1. Go to Search Console → Legacy tools and reports → International Targeting
2. Set target country to **Malaysia**
3. Configure hreflang for multi-language support

### Language Targeting
Your site already includes proper hreflang tags for:
- English (en)
- Malay (ms)
- Indonesian (id)
- Chinese (zh)
- Arabic (ar)

## 5. Monitor Key Metrics

### Essential Reports to Track
1. **Performance**: Track search rankings and click-through rates
2. **Coverage**: Monitor indexing status and crawl errors
3. **Core Web Vitals**: Track user experience metrics
4. **Mobile Usability**: Ensure mobile-friendly design
5. **Security Issues**: Monitor for security problems

### Healthcare-Specific Keywords to Monitor
- "Malaysia medical tourism"
- "JCI hospitals Malaysia"
- "Healthcare travel Malaysia"
- "Medical treatment Malaysia"
- "MHTC"
- Treatment-specific terms (cardiology, oncology, etc.)

## 6. Set Up Alerts

### Email Notifications
Configure alerts for:
- Critical crawl errors
- Security issues
- Manual actions
- Significant traffic drops

### URL Inspection
Use for:
- Testing new pages
- Checking indexing status
- Requesting re-indexing

## 7. Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Mobile-First Indexing
Ensure:
- Responsive design works properly
- Content parity between mobile and desktop
- Fast loading on mobile devices

## 8. Healthcare SEO Best Practices

### Content Guidelines
- Use medical terminology correctly
- Include location-based keywords
- Add patient testimonials (with consent)
- Create treatment-specific landing pages

### Schema Markup (Already Implemented)
- Organization schema for MHTC
- Medical organization schema
- Healthcare service schema
- Local business schema

### Regular Maintenance
- Monthly performance reviews
- Quarterly content audits
- Annual SEO strategy updates

## 9. Integration with Analytics

Your setup already includes:
- Google Analytics 4 (G-XF937XX8XL)
- Core Web Vitals tracking
- Healthcare-specific event tracking
- Multi-language analytics

## 10. Troubleshooting

### Common Issues
1. **Verification Fails**: Ensure meta tag is in `<head>` section
2. **Sitemap Not Found**: Check robots.txt and sitemap.xml accessibility
3. **Coverage Issues**: Review robots.txt disallow rules
4. **Mobile Usability**: Test with Google's Mobile-Friendly Test

### Support Resources
- [Google Search Console Help](https://support.google.com/webmasters)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Healthcare Content Guidelines](https://developers.google.com/search/docs/advanced/guidelines/medical)

## 11. Next Steps After Setup

1. Monitor for 1-2 weeks to gather initial data
2. Identify top-performing and underperforming pages
3. Optimize content based on search performance
4. Plan content strategy around search insights
5. Consider implementing structured data for treatments and hospitals

## Files Created/Modified

### New Files:
- `app/sitemap.ts` - Dynamic sitemap generation
- `components/JsonLdSchema.tsx` - Organization and website schema
- `components/HealthcareSchema.tsx` - Healthcare-specific schema
- `components/WebVitals.tsx` - Core Web Vitals tracking
- `components/GoogleSearchConsole.tsx` - Search Console integration
- `lib/analytics.ts` - Analytics utilities
- `public/.well-known/security.txt` - Security contact information
- `public/humans.txt` - Team and technology information

### Modified Files:
- `app/[locale]/layout.tsx` - Added SEO metadata and schema components
- `public/robots.txt` - Enhanced crawling directives

Remember to replace all placeholder verification codes with your actual Google Search Console verification code before deploying to production.