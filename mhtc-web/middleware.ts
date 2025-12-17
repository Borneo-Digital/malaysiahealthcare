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

/**
 * Check if a path (without locale prefix) matches any blocked pattern
 */
function isBlockedPath(pathname: string): boolean {
  const lowerPath = pathname.toLowerCase();
  return blockedPaths.some(blocked => lowerPath.startsWith(blocked.toLowerCase()));
}

/**
 * Strip locale prefix from pathname if present
 * Returns the pathname without the locale prefix
 */
function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1); // Remove "/{locale}" prefix
    }
    if (pathname === `/${locale}`) {
      return '/';
    }
  }
  return pathname;
}

function getLocale(request: NextRequest): string {
  try {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    
    // Filter out wildcard '*' which can cause issues, but let the match function
    // handle complex BCP 47 tags like zh-Hant-TW, en-001, etc. natively
    const filteredLanguages = languages.filter(lang => lang !== '*');
    
    if (filteredLanguages.length === 0) {
      return defaultLocale;
    }
    
    return match(filteredLanguages, locales, defaultLocale);
  } catch (e) {
    // Fallback to default locale if matching fails (e.g., malformed headers)
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get the path without locale prefix for security checks
  const pathWithoutLocale = stripLocalePrefix(pathname);
  
  // Block known malicious/legacy paths - check both raw path and path without locale
  // This prevents bypasses like /en/wp-admin
  if (isBlockedPath(pathname) || isBlockedPath(pathWithoutLocale)) {
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
