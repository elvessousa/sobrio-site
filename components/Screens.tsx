import { useTheme } from '../hooks/useTheme';
import { screenshots } from '../lib/screenshots';
import styles from '../styles/components/Screens.module.css';

interface ScreensProps {
  app: string;
  title: string;
}

export function Screens({ app, title }: ScreensProps) {
  const { theme } = useTheme();
  const path = theme === 'light' ? 'light/' : '';

  if (app === 'alacritty') {
    return null;
  }

  return (
    <>
      <hr />
      <h3>{title}</h3>
      <div className={styles.screens}>
        {screenshots.map(({ type, label }) => (
          <div key={type}>
            <h3>{label}</h3>
            <a href="#" data-label="ver galeria">
              <img src={`/images/screens/${app}/${path}${type}.png`} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
