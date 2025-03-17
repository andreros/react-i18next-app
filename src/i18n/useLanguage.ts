import { useTranslation } from 'react-i18next';

import type { TLanguage } from '@/i18n/types';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = () => {
    return i18n.language as TLanguage;
  };

  const switchLanguage = (lang: TLanguage) => {
    i18n.changeLanguage(lang);
  };

  return { t, currentLanguage, switchLanguage };
};
