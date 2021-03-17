import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Palette } from '../components/Palette';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sobrio Theme</title>
      </Head>

      <Hero />

      <main className="main">
        <section className="colors">
          <h2>Palette</h2>
          <Palette />
        </section>

        <hr />
        <section className="screenshots">
          <h2>Screenshots</h2>
          <p>Soon...</p>
        </section>

        <hr />
        <section className="trial">
          <h2>Test the theme</h2>
          <p>Soon...</p>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright - Elves Sousa - 2021</p>
      </footer>
    </div>
  );
}
