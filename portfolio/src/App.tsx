import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Content from "./components/content/Content";
import { useThemeStore } from "./theme/useThemeStore";
import { GlobalStyle, MainContainer } from "./globalStyles";
import useIsMobile from "shared/hooks/useIsMobile";
import useScrollRestoration from "shared/hooks/useScrollRestore";
import useThemeRestore from "shared/hooks/useThemeRestore";

const App: React.FC = () => {
  useThemeRestore();
  const { currentTheme } = useThemeStore();
  useIsMobile();
  useScrollRestoration();
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
