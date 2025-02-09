import { Theme } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const TechnologyContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  max-width: 80px;
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
  }
  transition: transform 0.3s ease-in-out;
`;

export const IconWrapper = styled.div<{ theme: Theme }>`
  width: 20px;
  height: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    width: 26px;
    height: 26px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: 32px;
    height: 32px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    width: 44px;
    height: 44px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    width: 48px;
    height: 48px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.p<{ theme: Theme }>`
  font-weight: 300;

  color: ${(props) => props.theme.palette.custom.header};
`;

export const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
   transform: translateX(-50%);
  }
`;

export const MyTechnologiesSection = styled.div`
  position: relative;
  top: 70px;
`;

export const TechnologiesContainer = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  animation: ${scrollAnimation} 80s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  gap: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    gap: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: 60px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: 60px;
  }
`;

export const SideShadow = styled.div<{
  theme: Theme;
}>`
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  transition: 0.5s;
  height: 160px;
  width: 40px;
  z-index: 10;
  box-shadow: 0px 0px 50px 50px
    rgba(${(props) => props.theme.palette.custom.background}, 1);
`;
