import { Theme } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  :root {
    --background-color: rgba(${(props) =>
      props.theme.palette.custom.background});
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth !important;
    overflow-x: hidden;
    background: var(--background-color);
    width: 100%;
   
  }
`;
export const MainContainer = styled.div<{ theme: Theme }>`
    position: relative;
    overflow-x: hidden;
    width: 100%;

    background-color:rgba(${(props) =>
      props.theme.palette.custom.background},1);
  }
  `;
