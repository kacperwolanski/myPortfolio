import { Box, Drawer, Theme } from "@mui/material";
import SocialMedias from "components/socialMedias/SocialMedias";
import SocialMediasElements from "components/socialMedias/SocialMediasElements";
import ContactMeButton from "components/topMenu/ContactMeButton";
import LanguageSwitcher from "components/topMenu/languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "components/topMenu/themeSwitcher/ThemeSwitcher";
import TopMenuButtons from "components/topMenu/topMenuButtons/TopMenuButtons";
import TopMenuLogo from "components/topMenu/topMenuLogo/TopMenuLogo";
import React from "react";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}
const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;
const SideMenuContent = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.div<{ theme: Theme }>`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DividerWrapper = styled.div<{ theme: Theme }>`
  margin-top: 40px;
  justify-content: space-evenly;
  padding: 40px;
  align-items: center;
  display: flex;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.palette.custom.borderGray};
  gap: 20px;
`;
const SideMenu = ({ handleDrawerToggle, mobileOpen }: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <Drawer
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          minWidth: "250px",
          width: "65%",
          background: `rgba(${currentTheme.palette.custom.background})`,
        },
      }}
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
    >
      <SideMenuContent>
        <LogoWrapper>
          <TopMenuLogo />
        </LogoWrapper>
        <div onClick={handleDrawerToggle}>
          <TopMenuButtons vertical />
        </div>
        <BottomSection>
          <ContactMeButton />
          <LanguageSwitcher />
          <ThemeSwitcher />
        </BottomSection>
        <DividerWrapper theme={currentTheme}>
          <SocialMediasElements />
        </DividerWrapper>
      </SideMenuContent>
    </Drawer>
  );
};

export default SideMenu;
