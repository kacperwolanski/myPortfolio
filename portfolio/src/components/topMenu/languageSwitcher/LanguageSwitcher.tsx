import React from "react";
import { useTranslation } from "react-i18next";
import { FlagButton } from "./languageSwitcher.styles";
import useThrottled from "shared/hooks/useThrottled";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLenIsPolish = i18n.language === "pl";

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const throttledLanguageChange = useThrottled(handleChangeLanguage, 1000);
  return (
    <>
      {currentLenIsPolish ? (
        <FlagButton onClick={() => throttledLanguageChange("en")}>
          <img
            style={{ width: "50px", height: "30px" }}
            alt="PL"
            src="https://github.com/user-attachments/assets/1ec77f8b-7048-4571-a716-7182562ba576"
          />
        </FlagButton>
      ) : (
        <FlagButton onClick={() => throttledLanguageChange("pl")}>
          <img
            style={{ width: "50px", height: "30px" }}
            alt="ENG"
            src="https://github.com/user-attachments/assets/7a429467-527b-42a0-8c92-d84ad6ca91a0"
          />
        </FlagButton>
      )}
    </>
  );
};

export default LanguageSwitcher;
