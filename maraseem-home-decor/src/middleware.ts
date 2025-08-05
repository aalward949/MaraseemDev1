import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Locale detection strategy
  localeDetection: true,

  // The `pathnames` object holds pairs of an internal
  // pathname and the external representation
  pathnames: {
    '/': '/',
    '/about': {
      'en': '/about',
      'ar': '/من-نحن'
    },
    '/services': {
      'en': '/services',
      'ar': '/الخدمات'
    },
    '/furniture': {
      'en': '/furniture',
      'ar': '/الأثاث-المخصص'
    },
    '/projects': {
      'en': '/projects',
      'ar': '/المشاريع'
    },
    '/materials': {
      'en': '/materials',
      'ar': '/المواد'
    },
    '/news': {
      'en': '/news',
      'ar': '/الأخبار'
    },
    '/events': {
      'en': '/events',
      'ar': '/الفعاليات'
    },
    '/directory': {
      'en': '/directory',
      'ar': '/دليل-الأعمال'
    },
    '/contact': {
      'en': '/contact',
      'ar': '/اتصل-بنا'
    }
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};