import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { Palette } from '../components/Palette';
import { Screens } from '../components/Screens';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sobrio Theme</title>
      </Head>
      <Navigation />
      <Hero />

      <main className="main">
        <section className="available">
          <h2>Available for</h2>
          <p>Soon...</p>
        </section>
        <hr />

        <section className="colors">
          <h2>Palette</h2>
          <Palette />
        </section>
        <hr />

        <section className="screenshots">
          <h2>Screenshots</h2>
          <Screens />
        </section>
        <hr />

        <section className="trial">
          <h2>Test the theme</h2>
          <p>Soon...</p>
        </section>
      </main>

      <footer className="footer">
        <p>
          Copyright &copy;{' '}
          <span>
            <a
              href="https://elvessousa.com.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              Elves Sousa
            </a>{' '}
          </span>
          - 2021
        </p>
      </footer>
    </div>
  );
}
