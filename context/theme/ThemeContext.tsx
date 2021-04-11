import { createContext, useEffect, useState } from 'react';

interface ThemeContextData {
  theme: string;
  setTheme: Function;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (!window) {
      return;
    }
    const colors = localStorage.getItem('theme');
    if (colors) {
      document.body.className = theme;
      setTheme(colors);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
