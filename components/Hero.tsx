import styles from '../styles/components/Hero.module.css';

export function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.productName}>
        <h1>Sobrio Theme</h1>
        <p>A theme with sober colors for Vim/Neovim and VSCode</p>
      </div>
      <div>
        <img src="images/vscode/screenshot.png" />
        <div className={styles.cta}>
          <a className={styles.ctaMain} href="#">
            Install
          </a>
          <a className={styles.ctaBtn} href="#">
            Know more
          </a>
        </div>
      </div>
    </header>
  );
}
