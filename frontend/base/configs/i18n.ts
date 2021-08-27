import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export enum Language {
  ENGLISH = "en",
  GERMAN = "de",
}

const englishTranslations = {
  common: require("public/locales/en/common.json"),
};

const germanTranslations = {
  common: require("public/locales/de/common.json"),
};

i18n.use(initReactI18next).init({
  resources: {
    [Language.ENGLISH]: englishTranslations,
    [Language.GERMAN]: germanTranslations,
  },
  lng: Language.ENGLISH,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
