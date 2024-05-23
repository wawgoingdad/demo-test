import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './locales/en.json';
import japanese from './locales/ja.json';

const resources = {
    en: {
      translation: english
    },
    ja: {
      translation: japanese
    }
  };

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: resources,
        fallbackLng: 'en',
        detection: {
          order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
          caches: ['localStorage', 'cookie'],
        },
        debug: true,
        interpolation: {
        escapeValue: false
    }
  });

export default i18n;
