// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationFR from "./fr/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false, // no need for key separators in the translations files
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
