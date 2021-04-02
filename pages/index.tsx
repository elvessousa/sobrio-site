import { Layout } from '../components/Layout';
import { Palette } from '../components/Palette';
import { Languages } from '../components/Languages';
import { AppsSupported } from '../components/AppSupported';

export default function Home() {
  return (
    <Layout
      title="Sobrio Theme"
      heroImage="./images/screens/vscode/screenshot.png"
      description="A theme with sober colors, hence the name"
      heroButtons
    >
      <section className="about">
        <h2 id="about">About</h2>
        <p>
          Sobrio is theme made to create a comfortable experience while coding.
          I made it because I was a little tired of the purple/magenta colored
          themes that seem to be the hype today. Nothing against it, but it is
          not my type.
        </p>
        <p>
          It's been actively developed: more apps supported and variants to come
          soon. For those who like it white, a light theme is being made. Just
          you wait!
        </p>
      </section>
      <hr />

      <section className="available">
        <h2 id="apps">Available for</h2>
        <AppsSupported />
      </section>
      <hr />

      <section id="palette" className="colors">
        <h2>Palette</h2>
        <Palette />
      </section>
      <hr />

      <section id="languages" className="languages">
        <h2>Languages supported</h2>
        <Languages />
      </section>
    </Layout>
  );
}
