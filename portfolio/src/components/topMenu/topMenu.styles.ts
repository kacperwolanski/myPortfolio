import { Theme } from "@mui/material";
import styled from "styled-components";

interface TopMenuContainerProps {
  isHidden: boolean;
  theme: Theme;
}

export const TopMenuContainer = styled.div<TopMenuContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;
  background: rgba(${(props) => props.theme.palette.custom.background}, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: 0.4s ease;
  transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
  z-index: 1000;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.05), transparent);
    pointer-events: none;
  }
`;

export const TopMenuButtonsContainer = styled.div<{
  theme: Theme;
  ismobile: boolean;
  vertical?: boolean;
}>`
  display: flex;
  flex-wrap: ${(props) => (props.ismobile ? "wrap" : "nowrap")};
  justify-content: center;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};

  gap: 15px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    gap: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: ${(props) => (props.vertical ? "20px" : "15px")};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 10px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: ${(props) => (props.vertical ? "30px" : "25px")};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: ${(props) => (props.vertical ? "40px" : "30px")};
  }
  align-items: center;
`;

export const SubContainer = styled.div<{
  theme: Theme;
}>`
  display: flex;
  gap: 12px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: 10px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: 30px;
  }
  align-items: center;
`;
