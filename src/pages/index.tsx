import { Layout } from '../components/Layout';
import { Palette } from '../components/Palette';
import { Languages } from '../components/Languages';
import { AppsSupported } from '../components/AppsSupported';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const prefix = theme === 'dark' ? '' : 'light/';

  return (
    <Layout
      title="Sobrio"
      heroImage={`./images/screens/vscode/${prefix}screenshot.png`}
      description={t('slogan')}
      heroButtons
    >
      <section className="about">
        <h2 id="about">{t('about')}</h2>
        <p>
          Sobrio is theme made to create a comfortable experience while coding.
          I made it because I was a little tired of purple / magenta colored
          themes that seem to be the norm today. Nothing against it, but it is
          not my type.
        </p>
        <p>
          It's been actively developed: more apps supported and variants to come
          soon. For those who like it white, a light theme is available.
        </p>
      </section>
      <hr />

      <section className="available">
        <h2 id="apps">{t('available')}</h2>
        <AppsSupported />
      </section>
      <hr />

      <section id="palette" className="colors">
        <h2>{t('palette')}</h2>
        <Palette />
      </section>
      <hr />

      <section id="languages" className="languages">
        <h2>{t('lsup')}</h2>
        <Languages />
      </section>
    </Layout>
  );
}
