import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? (
        <LightModeIcon sx={{ color: "red" }} />
      ) : (
        <DarkModeIcon sx={{ color: "white" }} />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
