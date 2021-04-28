import { GetStaticProps, GetStaticPaths } from 'next';

import { Layout } from '../../components/Layout';
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
  };
}

export default function AppPage({ pageData }: AppPageProps) {
  const { title, description, contentHtml, image, repo, link } = pageData;

  return (
    <Layout
      title={title}
      description={description}
      heroImage={image}
      repo={repo}
    >
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <a
        href={link}
        className="install-button"
        target="_blank"
        rel="noreferrer noopenenr"
      >
        Install
      </a>
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
