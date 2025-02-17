import React from "react";
import TopMenuButtons from "../topMenuButtons/TopMenuButtons";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ContactMeButton from "../ContactMeButton";
import TopMenuLogo from "../topMenuLogo/TopMenuLogo";
import { SubContainer } from "../topMenu.styles";
import { useThemeStore } from "theme/useThemeStore";
const TopMenuDesktop = () => {
  const { currentTheme } = useThemeStore();
  return (
    <>
      <TopMenuLogo />
      <TopMenuButtons />
      <SubContainer theme={currentTheme}>
        <ContactMeButton />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SubContainer>
    </>
  );
};

export default TopMenuDesktop;
