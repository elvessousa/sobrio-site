import styles from '../styles/components/Navigation.module.css';

export function Navigation() {
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
          <a href="/#palette">Palette</a>
        </li>
        <li>
          <a href="/#languages">Screenshots</a>
        </li>
      </ul>
      {/*<div className={styles.action}>stars</div> */}
    </nav>
  );
}
