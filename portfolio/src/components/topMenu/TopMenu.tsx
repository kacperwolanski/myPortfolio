import React from "react";
import { TopMenuContainer } from "./topMenu.styles";
import useIsTopMenuHidden from "./hooks/useIsTopMenuHidden";
import { useThemeStore } from "theme/useThemeStore";
import TopMenuMobile from "./deviceViews/mobileView/TopMenuMobile";
import TopMenuDesktop from "./deviceViews/TopMenuDesktop";

const TopMenu = () => {
  const { isHidden } = useIsTopMenuHidden();
  const { currentTheme, isMobile } = useThemeStore();
  const topMenuDeviceBased = isMobile ? <TopMenuMobile /> : <TopMenuDesktop />;
  return (
    <TopMenuContainer theme={currentTheme} isHidden={isHidden}>
      {topMenuDeviceBased}
    </TopMenuContainer>
  );
};

export default TopMenu;
