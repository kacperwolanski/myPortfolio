import React from "react";
import TopMenu from "./components/topMenu/TopMenu";
import styled from "styled-components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import SocialMedias from "./components/socialMedias/SocialMedias";
import Content from "./components/content/Content";

const MainContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-x: hidden;
  width: 100%;
  background-color: ${theme.palette.custom.background};
`;
const App: React.FC = () => {
  return (
    <MainContainer>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopMenu />
        <Content />
        {/* <SocialMedias /> */}
      </ThemeProvider>
    </MainContainer>
  );
};

export default App;
