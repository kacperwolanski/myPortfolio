import { Theme } from "@mui/material";
import styled from "styled-components";

export const FeatureContainer = styled.div<{
  withBorders?: boolean;
  isLast: boolean;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.palette.custom.header};
  display: flex;
  opacity: 0.8;
  gap: 25px;
  width: 100%;
  font-size: 16px;
  padding: 20px 10px;

  border-top: ${({ withBorders, theme }) =>
    withBorders ? `1px solid ${theme.palette.custom.borderGray}` : "none"};
  border-bottom: ${({ withBorders, isLast, theme }) =>
    withBorders && isLast
      ? `1px solid ${theme.palette.custom.borderGray}`
      : "none"};

  font-size: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 10px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 16px;
  }
`;

export const FeatureIndex = styled.span<{ doubleDigit: boolean; theme: Theme }>`
  color: ${({ theme }) => theme.palette.primary.main};
  letter-spacing: ${({ doubleDigit }) => (doubleDigit ? "2px" : "normal")};
`;
