import styled from "styled-components";

interface Props {
  strokeColor?: string;
  color?: string;
  fillColor?: string;
  onClick?: () => void;
  minWidth?: number;
  currentTheme: any;
}

export const Container = styled.button<Props>`
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "none")};
  border-radius: 15px;
  background: ${({ fillColor }) => (fillColor ? fillColor : "none")};
  border: 1px solid;
  color: ${({ color, currentTheme }) =>
    color ? color : currentTheme.palette.secondary.main};
  padding: 15px 30px;
  border-color: ${({ strokeColor, currentTheme }) =>
    strokeColor ? strokeColor : currentTheme.palette.secondary.main};
  &:hover {
    cursor: pointer;
  }
  @media (min-width: ${({ currentTheme }) =>
      currentTheme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
  @media (min-width: ${({ currentTheme }) =>
      currentTheme.breakpoints.values.md}px) {
    font-size: 13px;
  }
  @media (min-width: ${({ currentTheme }) =>
      currentTheme.breakpoints.values.lg}px) {
    font-size: 15px;
  }
  @media (min-width: ${({ currentTheme }) =>
      currentTheme.breakpoints.values.xl}px) {
    font-size: 15px;
  }
`;
