import styles from '../styles/components/Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <h1>
          <a href="/">Sobrio</a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#palette">Palette</a>
        </li>
        <li>
          <a href="#screen">Screenshots</a>
        </li>
        <li>
          <a href="#test">Test</a>
        </li>
      </ul>
      <div className={styles.action}>stars</div>
    </nav>
  );
}
