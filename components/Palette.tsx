import styles from '../styles/components/Palette.module.css';

export function Palette() {
  const colors = [
    '#000000',
    '#121212',
    '#3a3b3f',
    '#5f5f5f',
    '#7cdce7',
    '#84afd7',
    '#afafaf',
    '#d7af87',
    '#d7d7ff',
    '#fd6389',
  ];

  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <div
          key={color}
          className={styles.swatch}
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}
