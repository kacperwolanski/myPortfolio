import styled from "styled-components";
import { Theme } from "@mui/material";

export const TMButtonContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  transition: background 0.3s, color 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  z-index: 100;
  min-width: 100px;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 12px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 14px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 18px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 18px;
  }
`;

export const TitleContainer = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  font-family: "Montserrat", sans-serif;
`;
