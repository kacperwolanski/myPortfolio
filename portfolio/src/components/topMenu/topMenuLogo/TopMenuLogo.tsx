import React from "react";
import { TopMenuLogoContainer } from "./topMenuLogo.styles";
import { useThemeStore } from "theme/useThemeStore";
import { Logo } from "shared/assets/icons/Icons";

const TopMenuLogo = () => {
  const { currentTheme } = useThemeStore();
  return (
    <TopMenuLogoContainer theme={currentTheme}>
      <Logo />
    </TopMenuLogoContainer>
  );
};

export default TopMenuLogo;
