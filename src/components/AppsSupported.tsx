import Link from 'next/link';

import { useTheme } from '../hooks/useTheme';
import { useTranslation } from '../hooks/useTranslation';

import styles from '../styles/components/AppsSupported.module.css';

export function AppsSupported() {
  const { locale } = useTranslation();
  const { theme } = useTheme();

  const apps = ['VS Code', 'Neovim', 'Vim', 'Alacritty', 'Sublime Text'];
  const todo = ['Atom', 'GNU Emacs', 'Tmux'];
  const imgFilter = theme == 'dark' ? 'invert(1)' : '';

  return (
    <div className={styles.apps}>
      {apps.map((app) => {
        const name = app.replace(/\s/g, '').toLowerCase();
        return (
          <Link key={app} href={`/${locale}/${name}`}>
            <a className={styles.app}>
              <img
                alt={app}
                src={`/images/icons/apps/${name}.svg`}
                style={{ filter: imgFilter }}
              />
              <span>{app}</span>
            </a>
          </Link>
        );
      })}
      {todo.map((app) => (
        <div key={app} className={styles.app} style={{ opacity: 0.3 }}>
          <img
            alt={app}
            src={`/images/icons/apps/${app
              .replace(/\s/g, '')
              .toLowerCase()}.svg`}
            style={{ filter: imgFilter }}
          />
          <span>{app} (soon)</span>
        </div>
      ))}
    </div>
  );
}
