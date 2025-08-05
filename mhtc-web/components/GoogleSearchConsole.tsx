import Script from 'next/script'

interface GoogleSearchConsoleProps {
  verificationCode?: string
}

export function GoogleSearchConsole({ verificationCode }: GoogleSearchConsoleProps) {
  // Use environment variable or prop, but don't include script if neither is available
  const finalVerificationCode = verificationCode || process.env.GOOGLE_SITE_VERIFICATION
  
  // Don't render anything if no verification code is provided
  if (!finalVerificationCode || finalVerificationCode.includes('REPLACE_WITH_YOUR')) {
    return null
  }

  return (
    <>
      {/* Google Search Console Verification Script */}
      <Script
        id="google-search-console-verification"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Google Search Console verification helper
            if (typeof window !== 'undefined') {
              // Store verification code in global scope for debugging
              window.googleVerificationCode = '${finalVerificationCode}';
              console.log('Google Search Console verification loaded');
              
              // Additional Search Console tracking if needed
              if (typeof gtag !== 'undefined') {
                gtag('config', 'G-XF937XX8XL', {
                  custom_map: {
                    'custom_parameter_1': 'search_console_verified'
                  }
                });
              }
            }
          `
        }}
      />
      
      {/* Google Tag Manager (optional - if you want to use GTM instead of direct GA) */}
      {/* 
      <Script
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `
        }}
      />
      */}
    </>
  )
}

export default GoogleSearchConsole