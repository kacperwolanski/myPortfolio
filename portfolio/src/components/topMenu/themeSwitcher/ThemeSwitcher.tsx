import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";
import { darkTheme, lightTheme } from "theme/theme";

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useThemeStore();

  const currentlyLightMode = currentTheme === lightTheme;
  const currentlyDarkMode = !currentlyLightMode;

  const toggleTheme = () => {
    const newTheme = currentlyLightMode ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };

  const ThemeIcon = styled.div`
    &:hover {
      cursor: pointer;
    }
  `;
  return (
    <IconButton onClick={toggleTheme}>
      <ThemeIcon onClick={toggleTheme}>
        {currentlyLightMode && (
          <LightModeIcon sx={{ color: currentTheme.palette.custom.header }} />
        )}
        {currentlyDarkMode && (
          <DarkModeIcon sx={{ color: currentTheme.palette.custom.header }} />
        )}
      </ThemeIcon>
    </IconButton>
  );
};

export default ThemeSwitcher;