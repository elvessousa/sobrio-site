import { createContext, useEffect, useState } from 'react';

interface LanguageContextData {
  locale: string;
  setLocale: Function;
}

export const defaultLanguage = 'en';
export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem('lang') || defaultLanguage;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
