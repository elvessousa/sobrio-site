import { useContext } from 'react';
import { LanguageContext } from '../context/translation/LanguageContext';
import { translationStrings } from '../lib/strings';

export function useTranslation() {
  const { locale, setLocale } = useContext(LanguageContext);

  function t(string: string) {
    return translationStrings[locale][string];
  }

  return { t, locale, setLocale };
}
