import styled from "styled-components";
import { Theme } from "@mui/material";

export const TMButtonContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  z-index: 100;
  min-width: 100px;
  text-align: center;
`;

export const TitleContainer = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  font-family: "Montserrat", sans-serif;
`;
