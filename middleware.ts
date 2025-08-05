import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: defaultLocale,
  
  // Always show the locale in the URL
  localePrefix: 'always',
  
  // Domains can be configured to support different locales
  // domains: [
  //   {
  //     domain: 'maraseem.com',
  //     defaultLocale: 'ar'
  //   },
  //   {
  //     domain: 'maraseem.com/en',
  //     defaultLocale: 'en'
  //   }
  // ]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};