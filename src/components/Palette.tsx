import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from '../styles/components/Palette.module.css';

interface SwatchProps {
  color: string;
}

export function Palette() {
  const { theme } = useTheme();

  const darkColors = [
    '#000000',
    '#121212',
    '#3a3b3f',
    '#5f5f5f',
    '#afafaf',
    '#eeeeee',
    '#ffffff',
    '#d7d7ff',
    '#7cdce7',
    '#84afd7',
    '#d7af87',
    '#fd6389',
  ];

  const lightColors = [
    '#000000',
    '#121212',
    '#3a3b3f',
    '#5f5f5f',
    '#afafaf',
    '#eeeeee',
    '#ffffff',
    '#9787af',
    '#5fafaf',
    '#6787af',
    '#af875f',
    '#dd4c4f',
  ];

  const colors = theme === 'dark' ? darkColors : lightColors;

  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <Swatch key={color} color={color} />
      ))}
    </div>
  );
}

export function Swatch({ color }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  function copyCode(e: React.MouseEvent<HTMLButtonElement>) {
    const text = e.currentTarget.innerText;

    navigator.clipboard.writeText(text).then(
      function () {
        setCopied(true);
        setTimeout(function () {
          setCopied(false);
        }, 3000);
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }

  return (
    <button
      key={color}
      type="button"
      className={styles.swatch}
      style={{ backgroundColor: color }}
      onClick={(e) => copyCode(e)}
    >
      <span>{copied ? 'Copied' : color}</span>
    </button>
  );
}
