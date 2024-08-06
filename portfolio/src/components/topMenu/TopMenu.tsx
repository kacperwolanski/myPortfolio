import React from "react";
import { SubContainer, TopMenuContainer } from "./topMenu.styles";
import TopMenuLogo from "./topMenuLogo/TopMenuLogo";
import useIsTopMenuHidden from "./hooks/useIsTopMenuHidden";
import LanguageSwitcher from "shared/components/languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "shared/components/themeSwitcher/ThemeSwitcher";
import CircledButton from "shared/components/CircledButton";
import theme from "theme/theme";
import TopMenuButtons from "./topMenuButtons/TopMenuButtons";

const TopMenu = () => {
  const { isHidden } = useIsTopMenuHidden();

  return (
    <TopMenuContainer isHidden={isHidden}>
      <TopMenuLogo />
      <TopMenuButtons />
      <SubContainer>
        <CircledButton
          title="Contact Me"
          strokeColor={theme.palette.primary.main}
        />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SubContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
