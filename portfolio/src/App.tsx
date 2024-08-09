import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Content from "./components/content/Content";
import { useThemeStore } from "./theme/useThemeStore";
import { GlobalStyle, MainContainer } from "./globalStyles";
import useIsMobile from "shared/hooks/useIsMobile";

const App: React.FC = () => {
  const { currentTheme } = useThemeStore();
  useIsMobile();
  return (
    <MainContainer theme={currentTheme}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle theme={currentTheme} />
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </MainContainer>
  );
};

export default App;
