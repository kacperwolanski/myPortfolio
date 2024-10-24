import { Theme } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  :root {
    --background-color: rgba(${(props) =>
      props.theme.palette.custom.background});
    --scrollbar-thumb-color: rgba(100, 100, 100, 0.3);  
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
    transition: 0.5s;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
  background: var(--background-color);
  
    
     
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color); 
    border-radius: 10px;
    border: 3px solid var(--background-color); 
      
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(100, 100, 100, 0.5); 
  }
`;

export const MainContainer = styled.div<{ theme: Theme }>`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  transition: background 0.5s;
  background-color: rgba(
    ${(props) => props.theme.palette.custom.background},
    1
  );
`;
