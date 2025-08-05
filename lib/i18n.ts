import { createI18nClient } from 'next-intl/client';
import { createI18nServer } from 'next-intl/server';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Import translations
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

// Define locales
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale configuration
export const localeConfig = {
  en: {
    name: 'English',
    nameAr: 'الإنجليزية',
    dir: 'ltr' as const,
    flag: '🇺🇸',
  },
  ar: {
    name: 'العربية',
    nameAr: 'العربية',
    dir: 'rtl' as const,
    flag: '🇸🇦',
  },
};

// Translation files
export const messages = {
  en,
  ar,
};

// Client-side i18n
export const { useTranslations, useLocale, useNow, useTimeZone } = createI18nClient({
  messages,
  localeDetection: true,
});

// Server-side i18n
export const { getTranslations, getLocale, getNow, getTimeZone } = createI18nServer({
  messages,
  localeDetection: true,
});

// Request configuration
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: messages[locale as Locale],
    timeZone: locale === 'ar' ? 'Asia/Riyadh' : 'UTC',
    now: new Date(),
  };
});

// Locale utilities
export function getLocaleConfig(locale: Locale) {
  return localeConfig[locale];
}

export function isRTL(locale: Locale): boolean {
  return localeConfig[locale].dir === 'rtl';
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en';
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const locale = segments[1] as Locale;
  return locales.includes(locale) ? locale : defaultLocale;
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/');
  const locale = segments[1] as Locale;
  
  if (locales.includes(locale)) {
    return '/' + segments.slice(2).join('/');
  }
  
  return pathname;
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  const cleanPath = removeLocaleFromPathname(pathname);
  return `/${locale}${cleanPath}`;
}

// Navigation utilities
export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}

export function getLocalizedHref(href: string, locale: Locale): string {
  if (href.startsWith('http')) return href;
  return getLocalizedPath(href, locale);
}

// Date and time utilities
export function getLocaleDateFormat(locale: Locale): Intl.DateTimeFormatOptions {
  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...(locale === 'ar' && {
      calendar: 'gregory',
    }),
  };
}

export function getLocaleTimeFormat(locale: Locale): Intl.DateTimeFormatOptions {
  return {
    hour: '2-digit',
    minute: '2-digit',
    ...(locale === 'ar' && {
      hour12: false,
    }),
  };
}

// Number formatting utilities
export function getLocaleNumberFormat(locale: Locale): Intl.NumberFormatOptions {
  return {
    ...(locale === 'ar' && {
      numberingSystem: 'arab',
    }),
  };
}

// Currency formatting utilities
export function getLocaleCurrencyFormat(locale: Locale): Intl.NumberFormatOptions {
  return {
    style: 'currency',
    currency: 'SAR',
    ...(locale === 'ar' && {
      numberingSystem: 'arab',
    }),
  };
}

// Text direction utilities
export function getTextDirection(locale: Locale): 'ltr' | 'rtl' {
  return localeConfig[locale].dir;
}

export function getOppositeTextDirection(locale: Locale): 'ltr' | 'rtl' {
  return localeConfig[locale].dir === 'ltr' ? 'rtl' : 'ltr';
}

// CSS utilities
export function getLocaleCSSClass(locale: Locale): string {
  return `locale-${locale}`;
}

export function getDirectionCSSClass(locale: Locale): string {
  return `dir-${getTextDirection(locale)}`;
}

// Meta utilities
export function getLocaleMeta(locale: Locale) {
  return {
    lang: locale,
    dir: getTextDirection(locale),
    'data-locale': locale,
  };
}

// Validation utilities
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function validateLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

// SEO utilities
export function getLocaleAlternates(locale: Locale) {
  return locales
    .filter((l) => l !== locale)
    .map((l) => ({
      hreflang: l,
      href: getLocalizedPath('', l),
    }));
}

// Content utilities
export function getLocalizedContent<T extends Record<string, any>>(
  content: T,
  locale: Locale,
  fallbackLocale: Locale = 'en'
): T {
  const localizedContent = {} as T;
  
  for (const [key, value] of Object.entries(content)) {
    if (typeof value === 'object' && value !== null) {
      // Handle nested objects with locale suffixes
      const localizedKey = `${key}${locale === 'ar' ? 'Ar' : ''}`;
      const fallbackKey = `${key}${fallbackLocale === 'ar' ? 'Ar' : ''}`;
      
      localizedContent[key as keyof T] = (content as any)[localizedKey] || (content as any)[fallbackKey] || value;
    } else {
      localizedContent[key as keyof T] = value;
    }
  }
  
  return localizedContent;
}

// Form utilities
export function getLocalizedFormField(
  field: { label: string; labelAr: string; placeholder?: string; placeholderAr?: string },
  locale: Locale
) {
  return {
    label: locale === 'ar' ? field.labelAr : field.label,
    placeholder: locale === 'ar' ? field.placeholderAr : field.placeholder,
  };
}

// Error utilities
export function getLocalizedError(
  errors: Record<string, string>,
  locale: Locale
): Record<string, string> {
  const localizedErrors: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(errors)) {
    const localizedKey = `${key}${locale === 'ar' ? 'Ar' : ''}`;
    localizedErrors[key] = errors[localizedKey] || value;
  }
  
  return localizedErrors;
}