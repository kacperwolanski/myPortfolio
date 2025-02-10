import React from "react";
import TopMenuButtons from "../topMenuButtons/TopMenuButtons";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ContactMeButton from "../ContactMeButton";
import TopMenuLogo from "../topMenuLogo/TopMenuLogo";
import { SubContainer } from "../topMenu.styles";
const TopMenuDesktop = () => {
  return (
    <>
      <TopMenuLogo />
      <TopMenuButtons />
      <SubContainer>
        <ContactMeButton />
        <LanguageSwitcher />
        {/* <ThemeSwitcher /> */}
      </SubContainer>
    </>
  );
};

export default TopMenuDesktop;
