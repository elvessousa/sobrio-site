import { Layout } from '../components/Layout';
import { Palette } from '../components/Palette';
import { Languages } from '../components/Languages';
import { Screens } from '../components/Screens';
import { AppsSupported } from '../components/AppSupported';

export default function Home() {
  return (
    <Layout
      title="Sobrio Theme"
      heroImage="./images/screens/vscode/screenshot.png"
      description="A theme with sober colors, hence the name"
      heroButtons
    >
      <section className="available">
        <h2>Available for</h2>
        <AppsSupported />
      </section>
      <hr />

      <section className="colors">
        <h2>Palette</h2>
        <Palette />
      </section>
      <hr />

      <section className="languages">
        <h2>Languages supported</h2>
        <Languages />
      </section>

      {/*<section className="screenshots">
        <h2>Screenshots</h2>
        <Screens />
      </section>
      <hr />

      <section className="trial">
        <h2>Test the theme</h2>
        <p>Soon...</p>
        </section> */}
    </Layout>
  );
}
