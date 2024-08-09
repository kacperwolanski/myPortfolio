import React, { useState } from "react";
import TopMenuLogo from "../../topMenuLogo/TopMenuLogo";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styled from "styled-components";
import { Theme } from "@mui/material";
import { useThemeStore } from "theme/useThemeStore";
import SideMenu from "./SideMenu";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;
const StyledIconButton = styled.button<{ theme: Theme }>`
  background: none;
  border: none;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.palette.custom.header};
    width: 40px;
    height: 40px;
  }
  &:hover {
    background: none;
  }
`;
const TopMenuMobile = () => {
  const { currentTheme } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <TopMenuLogo />
      <StyledIconButton theme={currentTheme} onClick={handleDrawerToggle}>
        <MenuRoundedIcon />
      </StyledIconButton>
      <SideMenu handleDrawerToggle={handleDrawerToggle} mobileOpen={menuOpen} />
    </Container>
  );
};

export default TopMenuMobile;
