import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';

export default function HomePage() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-display-md font-heading font-bold text-darkAccent mb-6">
          {t('title')}
        </h1>
        <p className="text-display-sm font-subheading text-secondary mb-4">
          {t('subtitle')}
        </p>
        <p className="text-body-lg text-darkAccent/80 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            {t('cta.primary')}
          </Button>
          <Button variant="secondary" size="lg">
            {t('cta.secondary')}
          </Button>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">500+</div>
            <div className="text-body-sm text-darkAccent/70">{t('stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">300+</div>
            <div className="text-body-sm text-darkAccent/70">{t('stats.clients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">14+</div>
            <div className="text-body-sm text-darkAccent/70">{t('stats.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">25+</div>
            <div className="text-body-sm text-darkAccent/70">{t('stats.awards')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}