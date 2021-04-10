import styles from '../styles/components/Hero.module.css';
import { useTranslation } from '../translation/useTranslation';

interface HeroProps {
  showButtons?: boolean;
  image: string;
  description?: string;
  title: string;
  repo?: string;
}

export function Hero({
  showButtons,
  image,
  description,
  repo,
  title,
}: HeroProps) {
  const { t } = useTranslation();
  const githubUrl = 'https://ghbtns.com/github-btn.html?user=elvessousa';

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
        <div className={styles.productName}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {showButtons && (
          <div className={styles.cta}>
            <a className={styles.ctaMain} href="#apps">
              {t('install')}
            </a>
            <a className={styles.ctaBtn} href="#about">
              {t('more')}
            </a>
          </div>
        )}
        {repo && (
          <iframe
            src={`${githubUrl}&repo=${repo}&type=star&count=true&size=large`}
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        )}
      </div>
    </header>
  );
}
