import Head from 'next/head';
import { ReactNode } from 'react';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { useTheme } from '../hooks/useTheme';
import { Footer } from './Footer';

interface LayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroButtons?: boolean;
  children: ReactNode;
  repo?: string;
}

export function Layout({
  title,
  heroImage,
  heroButtons,
  description,
  repo,
  children,
}: LayoutProps) {
  const { theme } = useTheme();

  console.log(theme);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
      </Head>

      <Navigation />
      <Hero
        title={title}
        image={heroImage}
        description={description}
        showButtons={heroButtons}
        repo={repo}
      />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
