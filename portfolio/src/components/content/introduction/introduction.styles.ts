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

export const NameContainer = styled.h1<{ theme: Theme }>`
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
`;

export const SubTitle = styled.h1<{ theme: Theme }>`
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
`;

export const Description = styled.p<{ theme: Theme }>`
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
`;

export const Img = styled.div<{ theme: Theme }>`
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    width: 550px;
    height: 550px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    width: 550px;
    height: 550px;
  }
`;
