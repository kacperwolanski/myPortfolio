import { useThemeStore } from "theme/useThemeStore";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  strokeColor?: string;
  color?: string;
  fillColor?: string;
  onClick?: () => void;
  minWidth?: number;
}
const CircledButton = ({
  title,
  strokeColor,
  fillColor,
  onClick,
  color,
  minWidth,
}: Props) => {
  const { currentTheme } = useThemeStore();
  const Container = styled.button`
    min-width: ${minWidth ? `${minWidth}px` : "none"};
    border-radius: 15px;
    background: ${fillColor ? fillColor : "none"};
    border: 1px solid;

    color: ${color ? color : currentTheme.palette.secondary.main};
    padding: 15px 30px;
    border-color: ${strokeColor
      ? strokeColor
      : currentTheme.palette.secondary.main};
    &:hover {
      cursor: pointer;
    }
    @media (min-width: ${currentTheme.breakpoints.values.sm}px) {
      font-size: 12px;
    }
    @media (min-width: ${currentTheme.breakpoints.values.md}px) {
      font-size: 13px;
    }
    @media (min-width: ${currentTheme.breakpoints.values.lg}px) {
      font-size: 15px;
    }
    @media (min-width: ${currentTheme.breakpoints.values.xl}px) {
      font-size: 15px;
    }
  `;
  return (
    <Container onClick={onClick}>
      <span style={{ zIndex: 10 }}>{title}</span>
    </Container>
  );
};

export default CircledButton;
