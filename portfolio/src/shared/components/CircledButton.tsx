import { useThemeStore } from "theme/useThemeStore";
import React, { forwardRef } from "react";
import { Container } from "./circuledButton/circularButton.styles";

interface Props {
  title: string;
  strokeColor?: string;
  color?: string;
  fillColor?: string;
  onClick?: () => void;
  minWidth?: number;
  isActive?: boolean;
}
const CircledButton = forwardRef<HTMLButtonElement, Props>(
  (
    { title, strokeColor, fillColor, onClick, color, minWidth, isActive },
    ref
  ) => {
    const { currentTheme } = useThemeStore();

    return (
      <Container
        ref={ref}
        onClick={onClick}
        strokeColor={strokeColor}
        fillColor={fillColor}
        color={color}
        minWidth={minWidth}
        currentTheme={currentTheme}
        isActive={isActive}
      >
        <span style={{ zIndex: 10 }}>{title}</span>
      </Container>
    );
  }
);

export default CircledButton;
