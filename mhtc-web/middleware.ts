// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['en', 'ms', 'id', 'zh', 'ar'];
export const defaultLocale = 'en';

// Paths to block entirely (security probes & legacy WordPress) - return 404 immediately
const blockedPaths = [
  '/web/',           // Legacy WordPress API
  '/.env',           // Environment files
  '/.git',           // Git directory
  '/.ftpconfig',     // FTP config
  '/wp-',            // WordPress files
  '/winscp',         // WinSCP config
  '/elmah',          // ASP.NET logs
  '/phpinfo',        // PHP info
  '/.htaccess',      // Apache config
  '/.htpasswd',      // Apache passwords
  '/xmlrpc.php',     // WordPress XML-RPC
];

function getLocale(request: NextRequest): string {
  try {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    
    // Filter out invalid language tags before matching
    const validLanguages = languages.filter(lang => 
      lang !== '*' && /^[a-zA-Z]{2,3}(-[a-zA-Z]{2,4})?$/.test(lang)
    );
    
    if (validLanguages.length === 0) {
      return defaultLocale;
    }
    
    return match(validLanguages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Block known malicious/legacy paths immediately with 404
  const isBlockedPath = blockedPaths.some(blocked => 
    pathname.toLowerCase().startsWith(blocked.toLowerCase())
  );
  
  if (isBlockedPath) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the pathname
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Exclude static assets and API routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
