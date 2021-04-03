import styles from '../styles/components/AppsSupported.module.css';

export function AppsSupported() {
  const apps = ['VS Code', 'Neovim', 'Vim', 'Alacritty'];
  const todo = ['Sublime Text', 'Atom', 'GNU Emacs', 'Tmux'];

  return (
    <div className={styles.apps}>
      {apps.map((app) => {
        const name = app.replace(/\s/g, '').toLowerCase();
        return (
          <a key={app} href={`app/${name}`} className={styles.app}>
            <img src={`/images/icons/apps/${name}.svg`} />
            <span>{app}</span>
          </a>
        );
      })}
      {todo.map((app) => (
        <div key={app} className={styles.app} style={{ opacity: 0.3 }}>
          <img
            src={`/images/icons/apps/${app
              .replace(/\s/g, '')
              .toLowerCase()}.svg`}
          />
          <span>{app} (soon)</span>
        </div>
      ))}
    </div>
  );
}
