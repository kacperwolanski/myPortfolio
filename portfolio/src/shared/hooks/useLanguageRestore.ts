import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguageRestore = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const currentLSLanguage = sessionStorage.getItem("currentLanguage");
    if (currentLSLanguage) {
      i18n.changeLanguage(currentLSLanguage);
    }
  }, []);
};

export default useLanguageRestore;
