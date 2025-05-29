// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: We don't use the i18n config from next.config.mjs with App Router
  // It's handled through the [locale] directory structure and middleware
  experimental: {
    // Enable any experimental features you need
  },
  // Enable SVG images to fix placeholder warnings
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Any other Next.js configuration
};

export default nextConfig;
