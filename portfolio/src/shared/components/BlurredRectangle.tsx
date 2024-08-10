import { Theme } from "@mui/material";
import styled from "styled-components";

export const BlurredRectangle = styled.div<{
  top: number;
  left?: number;
  right?: number;
  theme: Theme;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;

  z-index: 0;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    rgba(${(props) => props.theme.palette.custom.blurredBackground}, 0.4) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  pointer-events: none;
`;
