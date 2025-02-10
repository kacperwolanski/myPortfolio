import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "../../translationEN.json";
import translationPL from "../../translationPL.json";

export const engLanguageKeyword = "en";
export const plLanguageKeyword = "pl";

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18next
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "pl",

    lng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
