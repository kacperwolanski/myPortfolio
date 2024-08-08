import React from "react";
import { useTranslation } from "react-i18next";
import England from "shared/components/flags/England";
import Poland from "shared/components/flags/Poland";
import { FlagButton } from "./languageSwitcher.styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLenIsPolish = i18n.language === "pl";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {!currentLenIsPolish ? (
        <FlagButton onClick={() => changeLanguage("pl")}>
          <Poland />
        </FlagButton>
      ) : (
        <FlagButton onClick={() => changeLanguage("en")}>
          <England />
        </FlagButton>
      )}
    </>
  );
};

export default LanguageSwitcher;
