import React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";
import { darkTheme, lightTheme } from "theme/theme";
import useThrottled from "shared/hooks/useThrottled";

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useThemeStore();
  const currentlyLightMode = currentTheme === lightTheme;
  const currentlyDarkMode = !currentlyLightMode;

  const toggleTheme = () => {
    const newTheme = currentlyLightMode ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
    const themeMode = currentlyLightMode ? "dark" : "light";
    sessionStorage.setItem("currentTheme", themeMode);
  };

  const throttledToggleTheme = useThrottled(toggleTheme, 1000);
  const ThemeIcon = styled.div`
    color: ${currentTheme.palette.custom.header};
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
  `;
  return (
    <IconButton onClick={throttledToggleTheme}>
      <ThemeIcon>
        {currentlyLightMode && <DarkModeIcon />}
        {currentlyDarkMode && <LightModeIcon />}
      </ThemeIcon>
    </IconButton>
  );
};

export default ThemeSwitcher;
