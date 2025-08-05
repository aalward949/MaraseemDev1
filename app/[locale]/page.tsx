import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
    openGraph: {
      title: t('hero.title'),
      description: t('hero.subtitle'),
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
    },
  };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <main className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-darkAccent/80 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button className="btn-primary text-lg px-8 py-4">
              {t('hero.cta')}
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('services.title')}</h2>
            <p className="body-text text-darkAccent-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'interiorDesign', icon: '🏠' },
              { key: 'furnitureDesign', icon: '🪑' },
              { key: 'finishingWorks', icon: '🎨' },
              { key: 'projectManagement', icon: '📋' },
            ].map((service) => (
              <div key={service.key} className="card card-hover text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-3 mb-3">{t(`services.${service.key}`)}</h3>
                <p className="body-text text-darkAccent-600">
                  {t(`services.${service.key}Desc`, { defaultValue: '' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('projects.title')}</h2>
            <p className="body-text text-darkAccent-600 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { key: 'residential', image: '/images/project-1.jpg' },
              { key: 'commercial', image: '/images/project-2.jpg' },
              { key: 'hospitality', image: '/images/project-3.jpg' },
            ].map((project) => (
              <div key={project.key} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`projects.${project.key}`)}
                    </h3>
                    <button className="btn-primary text-sm">
                      {t('common.view')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-secondary text-lg px-8 py-4">
              {t('projects.viewAll')}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4">{t('cta.title')}</h2>
          <p className="body-text mb-8 max-w-2xl mx-auto opacity-90">
            {t('cta.subtitle')}
          </p>
          <button className="btn-primary text-lg px-8 py-4 bg-secondary text-primary hover:bg-secondary-600">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </main>
  );
}