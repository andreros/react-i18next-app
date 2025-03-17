import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { languageResources } from '@/i18n/constants';

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem('locale') || 'pt',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  resources: languageResources
});
