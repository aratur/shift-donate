import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import donationCard from './donationCard';
import common from './common';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    common,
    donationCard,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
