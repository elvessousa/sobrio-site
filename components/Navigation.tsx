import styles from '../styles/components/Navigation.module.css';
import { useTranslation } from '../translation/useTranslation';

export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <h1>
          <img src="/logo.png" />
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
      </ul>
    </nav>
  );
}
