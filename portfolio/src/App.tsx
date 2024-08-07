import React from "react";
import styled from "styled-components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Content from "./components/content/Content";

const MainContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  background-color: ${theme.palette.custom.background};
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </MainContainer>
  );
};

export default App;
