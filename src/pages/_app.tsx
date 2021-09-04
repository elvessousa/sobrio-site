import '../styles/globals.css';
import { LanguageProvider } from '../context/translation/LanguageContext';
import { ThemeProvider } from '../context/theme/ThemeContext';
import {Analytics} from '../components/Analytics';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics id="G-L5VS7LT70D" />
    </LanguageProvider>
  );
}

export default MyApp;
