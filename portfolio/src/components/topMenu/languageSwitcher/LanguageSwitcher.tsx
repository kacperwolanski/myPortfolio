import React from "react";
import { useTranslation } from "react-i18next";
import { FlagButton } from "./languageSwitcher.styles";
import useThrottled from "shared/hooks/useThrottled";
import { engLanguageKeyword, plLanguageKeyword } from "shared/i18n/i18n";
import { engLangIcon, plLangIcon } from "shared/assets/icons/Icons";
import { Language } from "shared/constants/types";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLenIsPolish = i18n.language === plLanguageKeyword;

  const handleChangeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem("currentLanguage", lng);
  };

  const throttledLanguageChange = useThrottled(handleChangeLanguage, 500);
  const iconStyle = { width: "50px", height: "30px" };
  return (
    <>
      {currentLenIsPolish ? (
        <FlagButton onClick={() => throttledLanguageChange(engLanguageKeyword)}>
          <img style={iconStyle} alt="PL" src={plLangIcon} />
        </FlagButton>
      ) : (
        <FlagButton onClick={() => throttledLanguageChange(plLanguageKeyword)}>
          <img style={iconStyle} alt="ENG" src={engLangIcon} />
        </FlagButton>
      )}
    </>
  );
};

export default LanguageSwitcher;
