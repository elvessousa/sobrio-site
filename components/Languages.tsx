import styles from '../styles/components/Languages.module.css';

export function Languages() {
  const languages = [
    'C',
    'CSS3',
    'Elixir',
    'HTML5',
    'JSON',
    'JavaScript',
    'Markdown',
    'PHP',
    'Python',
    'Rust',
    'React',
    'SVG',
    'Sass',
    'Shell',
    'TypeScript',
  ];

  return (
    <div className={styles.languages}>
      {languages.map((lang) => (
        <div key={lang} className={styles.language}>
          <img src={`/images/icons/languages/${lang.toLowerCase()}.svg`} />
          <span>{lang}</span>
        </div>
      ))}
    </div>
  );
}
