import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translationStrings } from './strings';

export function useTranslation() {
  const { locale } = useContext(LanguageContext);

  function t(string: string) {
    return translationStrings[locale][string];
  }

  return { t, locale };
}
