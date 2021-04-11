import styles from '../styles/components/Navigation.module.css';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

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
          <a href="/">Sobrio</a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/#apps">Apps</a>
        </li>
        <li>
          <a href="/#palette">{t('palette')}</a>
        </li>
        <li>
          <a href="/#languages">{t('langs')}</a>
        </li>
        <button onClick={handleThemeChange}>
          <img src="/images/icons/lamp.svg" style={{ filter: imgFilter }} />
        </button>
      </ul>
    </nav>
  );
}
