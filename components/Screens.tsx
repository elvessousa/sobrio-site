import styles from '../styles/components/Screens.module.css';

export function Screens() {
  const screens = [
    {
      name: 'vscode',
      label: 'Visual Studio Code',
    },
    {
      name: 'vim',
      label: 'Vim / Neovim',
    },
  ];

  return (
    <div className={styles.screens}>
      {screens.map(({ name, label }) => (
        <a key={name} href="#" data-label="ver galeria">
          <img src={`images/${name}/screen.png`} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
