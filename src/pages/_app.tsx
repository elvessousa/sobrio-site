import '../styles/globals.css';
import { LanguageProvider } from '../context/translation/LanguageContext';
import { ThemeProvider } from '../context/theme/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
