# Production Setup Guide

## Environment Variables Required

Set these environment variables in your production environment:

### Required Variables
```bash
# Google Analytics (already configured)
NEXT_PUBLIC_GA_ID=G-XF937XX8XL

# Google Search Console Verification
# Get this from Google Search Console -> Settings -> Users and permissions -> Verification details
GOOGLE_SITE_VERIFICATION=your_verification_code_here

# Production URL
NEXT_PUBLIC_SITE_URL=https://malaysiahealthcare.org

# Environment
NODE_ENV=production
```

### Optional WordPress Variables (if using WordPress integration)
```bash
# WordPress API Configuration
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_AUTH_REFRESH_TOKEN=your_jwt_token_here
WORDPRESS_PREVIEW_SECRET=your_preview_secret_here
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

## Fixing the Google Search Console 5xx Error

The 5xx server error was likely caused by:

1. **Placeholder verification codes** - Now fixed to use environment variables
2. **Missing environment configuration** - WordPress API calls failing
3. **Potential image loading issues** - Added safety checks

## Deploy Steps

1. **Set Environment Variables** in your hosting platform (Vercel, Netlify, etc.)
2. **Add Google Search Console Verification**:
   ```bash
   GOOGLE_SITE_VERIFICATION=your_actual_verification_code
   ```
3. **If NOT using WordPress**, leave WordPress variables empty or unset
4. **Deploy the updated code**

## Verification Steps

1. After deployment, test the site: `https://malaysiahealthcare.org`
2. Check browser console for any errors
3. Use Google Search Console "URL Inspection" tool to test the URL
4. Submit the URL for indexing once it passes

## Common Issues and Solutions

### 5xx Server Error
- Ensure all environment variables are properly set
- Check server logs for specific error messages
- Verify all referenced images exist in the public folder

### Google Search Console Issues
- Verify the `GOOGLE_SITE_VERIFICATION` environment variable is set correctly
- Ensure the verification meta tag appears in the page source
- Wait 24-48 hours after fixes before re-testing

### WordPress Integration (if applicable)
- Test WordPress API endpoints manually
- Ensure authentication tokens are valid
- Check CORS settings on WordPress site 