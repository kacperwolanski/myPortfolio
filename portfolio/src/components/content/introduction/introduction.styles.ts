import styled from "styled-components";
import { Theme } from "@mui/material";

export const IntroductionContainer = styled.div`
  margin-top: 200px;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

export const NameContainer = styled.h1<{ theme: Theme; isVisible: boolean }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-weight: 900;
  letter-spacing: -3px;
  font-size: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 35px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 58px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 63px;
  }

  transition: opacity 1s ease-out, transform 1s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
`;

export const SubTitle = styled.h1<{ theme: Theme; isVisible: boolean }>`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 15px;
  top: -25px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 15px;
    top: -35px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 18px;
    top: -40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 18px;
    top: -50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 22px;
    top: -60px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 26px;
    top: -60px;
  }
  position: relative;
  font-weight: 500;

  transition: opacity 1s ease-out, transform 1s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(50px)"};
`;

export const Description = styled.p<{ theme: Theme; isVisible: boolean }>`
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    margin-top: -30px;
    width: 75%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    margin-top: -30px;
    width: 75%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    margin-top: -40px;
    width: 70%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    margin-top: -50px;
    width: 60%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    margin-top: -60px;
    width: 60%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    margin-top: -60px;
    width: 60%;
  }
  text-align: center;
  margin-top: -25px;
  color: ${(props) => props.theme.palette.secondary.main};
  opacity: 0;

  transition: opacity 1s ease-out, transform 1s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(50px)"};
`;

export const Img = styled.img<{ isfadingout: boolean; theme: Theme }>`
  border-radius: 50%;
  z-index: 10;
  opacity: ${({ isfadingout }) => (isfadingout ? 0 : 1)};
  transition: opacity 0.6s ease-in-out;
  width: 200px;
  height: 200px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: 230px;
    height: 230px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    width: 350px;
    height: 350px;
  }
`;

export const ButtonWrapper = styled.div<{ isVisible: boolean }>`
  transition: opacity 1s ease-out, transform 1s ease-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(100px)"};
`;
