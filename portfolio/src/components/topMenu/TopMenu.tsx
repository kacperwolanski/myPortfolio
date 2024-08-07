import React from "react";
import { SubContainer, TopMenuContainer } from "./topMenu.styles";
import TopMenuLogo from "./topMenuLogo/TopMenuLogo";
import useIsTopMenuHidden from "./hooks/useIsTopMenuHidden";
import TopMenuButtons from "./topMenuButtons/TopMenuButtons";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./languageSwitcher/LanguageSwitcher";
import ContactMeButton from "./ContactMeButton";

const TopMenu = () => {
  const { isHidden } = useIsTopMenuHidden();

  return (
    <TopMenuContainer isHidden={isHidden}>
      <TopMenuLogo />
      <TopMenuButtons />
      <SubContainer>
        <ContactMeButton />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SubContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
