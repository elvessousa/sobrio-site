import { GetStaticProps, GetStaticPaths } from 'next';

import { Layout } from '../../components/Layout';
import { Screens } from '../../components/Screens';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from '../../hooks/useTranslation';
import { getAllIds, getContentData } from '../../lib/apps';

interface AppPageProps {
  locale: string;
  pageData: {
    contentHtml: string;
    description: string;
    id: string;
    image: string;
    lang: string;
    title: string;
    repo?: string;
    link?: string;
    app?: string;
  };
}

export default function AppPage({ pageData }: AppPageProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { app, title, description, contentHtml, image, repo, link } = pageData;
  const heroImage = theme === 'light' ? 'light/window.png' : 'window.png';

  return (
    <Layout
      title={title}
      description={description}
      heroImage={`/images/screens/${app}/${heroImage}`}
      repo={repo}
    >
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <a
        href={link}
        className="install-button"
        target="_blank"
        rel="noreferrer noopenenr"
      >
        {t('install')}
      </a>
      {app && <Screens app={app} title={t('screenshots')} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContentData(`/${params.lang}/${params.app}`);

  return {
    props: {
      locale: params?.lang || 'pt',
      pageData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds();

  return {
    paths,
    fallback: false,
  };
};
