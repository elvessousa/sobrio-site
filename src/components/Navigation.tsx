import Link from 'next/link';

import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

import styles from '../styles/components/Navigation.module.css';

export function Navigation() {
  const { t, locale, setLocale } = useTranslation();
  const { theme, setTheme } = useTheme();
  const imgFilter = theme == 'dark' ? 'invert(1)' : '';

  function handleThemeChange() {
    const otherTheme = theme == 'dark' ? 'light' : 'dark';
    setTheme(otherTheme);
    localStorage.setItem('theme', otherTheme);
  }

  function toggleLocale() {
    const otherLanguage = locale === 'en' ? 'pt' : 'en';
    setLocale(otherLanguage);
    localStorage.setItem('lang', otherLanguage);
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <h1>
          <img src={`/logo-${theme}.png`} alt="Sobrio logo" />
          <Link href="/">
            <a>Sobrio</a>
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link href="/#apps">
            <a>Apps</a>
          </Link>
        </li>
        <li>
          <Link href="/#palette">
            <a>{t('palette')}</a>
          </Link>
        </li>
        <li>
          <Link href="/#languages">
            <a>{t('langs')}</a>
          </Link>
        </li>
      </ul>
      <div className={styles.options}>
        <button className={styles.themeButton} onClick={handleThemeChange}>
          <img
            alt="Dark/Light theme"
            src="/images/icons/lamp.svg"
            style={{ filter: imgFilter }}
          />
        </button>
        <button className={styles.languageButton} onClick={toggleLocale}>
          {locale}
        </button>
      </div>
    </nav>
  );
}
