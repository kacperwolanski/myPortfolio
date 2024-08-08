// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FlagButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 30px; /* Adjust the size as needed */
    height: auto;
  }

  &:focus {
    outline: none;
  }
`;

const LanguageSwitcherContainer = styled.div`
  display: flex;
  gap: 10px; /* Adjust the gap between the flags as needed */
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageSwitcherContainer>
      <FlagButton onClick={() => changeLanguage("en")}>
        <img
          src={
            "https://github.com/user-attachments/assets/f0c59417-ca70-40ee-8b7f-d77f34d4f381"
          }
          alt="English"
        />
      </FlagButton>
      <FlagButton onClick={() => changeLanguage("pl")}>
        <img
          src={
            "https://github.com/user-attachments/assets/592a6183-eb60-44f9-a3de-8b32536c4892"
          }
          alt="Polski"
        />
      </FlagButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
