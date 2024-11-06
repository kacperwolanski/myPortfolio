import React from "react";
import { useTranslation } from "react-i18next";
import { FlagButton } from "./languageSwitcher.styles";
import useThrottled from "shared/hooks/useThrottled";
import { engLanguageKeyword, plLanguageKeyword } from "shared/i18n/i18n";
import { Language } from "shared/constants/types";
import { ENGflagIcon, PLflagIcon } from "shared/assets/icons/Icons";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLenIsPolish = i18n.language === plLanguageKeyword;

  const handleChangeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem("currentLanguage", lng);
  };

  const throttledLanguageChange = useThrottled(handleChangeLanguage, 500);

  return (
    <>
      {currentLenIsPolish ? (
        <FlagButton onClick={() => throttledLanguageChange(engLanguageKeyword)}>
          <PLflagIcon />
        </FlagButton>
      ) : (
        <FlagButton onClick={() => throttledLanguageChange(plLanguageKeyword)}>
          <ENGflagIcon />
        </FlagButton>
      )}
    </>
  );
};

export default LanguageSwitcher;
