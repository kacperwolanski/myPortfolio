import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Content from "./components/content/Content";
import { useThemeStore } from "./theme/useThemeStore";
import { GlobalStyle, MainContainer } from "./globalStyles";

const App: React.FC = () => {
  const { currentTheme } = useThemeStore();
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
