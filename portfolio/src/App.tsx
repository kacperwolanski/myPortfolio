import React from "react";
import styled from "styled-components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Content from "./components/content/Content";
import { useThemeStore } from "./theme/useThemeStore";
import { GlobalStyle } from "./globalStyles";

const App: React.FC = () => {
  const { currentTheme } = useThemeStore();
  const MainContainer = styled.div`
    position: relative;
    overflow-x: hidden;
    width: 100%;
    background-color: rgba(${currentTheme.palette.custom.background}, 1);
  `;

  return (
    <MainContainer>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle theme={currentTheme} />
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </MainContainer>
  );
};

export default App;
