import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Inter, Playfair_Display, Merriweather, Lato, Cairo, Tajawal } from 'next/font/google';
import { cn } from '@/lib/utils';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const locales = ['en', 'ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const messages = await getMessages();
  const seo = (messages as any).seo?.home;

  return {
    title: seo?.title || 'Maraseem Home Decor',
    description: seo?.description || 'Luxury Interior Design & Custom Furniture',
    keywords: [
      'interior design',
      'custom furniture',
      'luxury home decor',
      'Saudi Arabia',
      'Riyadh',
      'تصميم داخلي',
      'أثاث مخصص',
      'ديكور فاخر',
    ],
    authors: [{ name: 'Maraseem Home Decor' }],
    creator: 'Maraseem Home Decor',
    publisher: 'Maraseem Home Decor',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: `https://maraseem.com/${locale}`,
      siteName: 'Maraseem Home Decor',
      title: seo?.title || 'Maraseem Home Decor',
      description: seo?.description || 'Luxury Interior Design & Custom Furniture',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Maraseem Home Decor',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@maraseem_decor',
      creator: '@maraseem_decor',
      title: seo?.title || 'Maraseem Home Decor',
      description: seo?.description || 'Luxury Interior Design & Custom Furniture',
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://maraseem.com/${locale}`,
      languages: {
        'en': 'https://maraseem.com/en',
        'ar': 'https://maraseem.com/ar',
      },
    },
    other: {
      'theme-color': '#2C3E50',
      'msapplication-TileColor': '#2C3E50',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRTL = locale === 'ar';

  return (
    <html 
      lang={locale} 
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        inter.variable,
        playfairDisplay.variable,
        merriweather.variable,
        lato.variable,
        cairo.variable,
        tajawal.variable,
        'scroll-smooth'
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={cn(
        'font-body antialiased',
        isRTL ? 'font-arabic-body' : 'font-body'
      )}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-accent">
            {/* Skip to content link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-secondary text-primary px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            
            {/* Main layout structure will be added here */}
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}