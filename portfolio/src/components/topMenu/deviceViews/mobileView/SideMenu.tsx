import { Drawer } from "@mui/material";
import SocialMediasElements from "components/socialMedias/SocialMediasElements";
import ContactMeButton from "components/topMenu/ContactMeButton";
import LanguageSwitcher from "components/topMenu/languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "components/topMenu/themeSwitcher/ThemeSwitcher";
import TopMenuButtons from "components/topMenu/topMenuButtons/TopMenuButtons";
import TopMenuLogo from "components/topMenu/topMenuLogo/TopMenuLogo";
import React, { useEffect, useRef } from "react";

import { useThemeStore } from "theme/useThemeStore";
import {
  BottomSection,
  DividerWrapper,
  LogoWrapper,
  SideMenuContent,
} from "./mobileView.styles";

interface Props {
  menuOpened: boolean;
  handleDrawerToggle: () => void;
}

const SideMenu = ({ handleDrawerToggle, menuOpened }: Props) => {
  const { currentTheme } = useThemeStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        handleDrawerToggle();
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [menuOpened, handleDrawerToggle]);

  return (
    <Drawer
      ref={drawerRef}
      hideBackdrop={true}
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          minWidth: "250px",
          width: "65%",
        },
      }}
      variant="temporary"
      anchor="right"
      open={menuOpened}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
    >
      <SideMenuContent currentTheme={currentTheme}>
        <LogoWrapper>
          <TopMenuLogo />
        </LogoWrapper>
        <div onClick={handleDrawerToggle}>
          <TopMenuButtons vertical />
        </div>
        <BottomSection>
          <ContactMeButton />
          <LanguageSwitcher />
          {/* <ThemeSwitcher /> */}
        </BottomSection>
        <DividerWrapper theme={currentTheme}>
          <SocialMediasElements />
        </DividerWrapper>
      </SideMenuContent>
    </Drawer>
  );
};

export default SideMenu;
