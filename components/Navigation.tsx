import Link from 'next/link';

import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

import styles from '../styles/components/Navigation.module.css';

export function Navigation() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const imgFilter = theme == 'dark' ? 'invert(1)' : '';

  function handleThemeChange() {
    const currentTheme = theme == 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <h1>
          <img src={`/logo-${theme}.png`} />
          <Link href="/">
            <a>Sobrio</a>
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link href="/#apps">
            <a href="/#apps">Apps</a>
          </Link>
        </li>
        <li>
          <Link href="/#palette">
            <a href="/#palette">{t('palette')}</a>
          </Link>
        </li>
        <li>
          <Link href="/#languages">
            <a href="/#languages">{t('langs')}</a>
          </Link>
        </li>
        <button onClick={handleThemeChange}>
          <img src="/images/icons/lamp.svg" style={{ filter: imgFilter }} />
        </button>
      </ul>
    </nav>
  );
}
