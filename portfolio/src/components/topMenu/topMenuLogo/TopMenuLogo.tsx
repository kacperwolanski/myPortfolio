import React from "react";
import { TopMenuLogoContainer } from "./topMenuLogo.styles";
import { useThemeStore } from "theme/useThemeStore";

const TopMenuLogo = () => {
  const { currentTheme } = useThemeStore();
  return <TopMenuLogoContainer theme={currentTheme}>KW</TopMenuLogoContainer>;
};

export default TopMenuLogo;
