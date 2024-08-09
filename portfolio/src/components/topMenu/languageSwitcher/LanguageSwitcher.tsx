import React from "react";
import { useTranslation } from "react-i18next";
import { FlagButton } from "./languageSwitcher.styles";
import { British, Poland } from "shared/assets/icons/Icons";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLenIsPolish = i18n.language === "pl";

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {!currentLenIsPolish ? (
        <FlagButton onClick={() => handleChangeLanguage("pl")}>
          <Poland />
        </FlagButton>
      ) : (
        <FlagButton onClick={() => handleChangeLanguage("en")}>
          <British />
        </FlagButton>
      )}
    </>
  );
};

export default LanguageSwitcher;
