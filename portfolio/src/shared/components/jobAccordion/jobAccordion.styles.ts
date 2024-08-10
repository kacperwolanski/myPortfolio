import { Theme } from "@mui/material";
import styled from "styled-components";
export const AccordionContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    flex-direction: row;
    align-items: start;
    gap: 80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    flex-direction: row;
    align-items: start;
    gap: 80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    flex-direction: row;
    align-items: start;
    gap: 100px;
  }
  align-items: start;
  margin-top: 80px;
`;

export const TitlesList = styled.div<{ theme: Theme }>`
  display: flex;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    flex-direction: row;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    flex-direction: row;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    flex-direction: column;
  }
  margin-top: 20px;
  justify-content: center;
`;

export const ElementTitleButton = styled.button<{
  theme: Theme;
  isSelected?: boolean;
}>`
  border: none;
  background: ${(props) =>
    props.isSelected ? props.theme.palette.custom.darkGray : "none"};
  color: ${(props) =>
    props.isSelected
      ? props.theme.palette.custom.header
      : props.theme.palette.secondary.main};
  cursor: pointer;
  transition: background 0.3s, color 0.2s; /* Added transition for background */
  width: 160px;
  height: 56px;
`;

export const ContentContainer = styled.div<{ isTransitioning: boolean }>`
  min-height: 360px;
  width: 100%;
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  transition: opacity 0.2s;
`;
