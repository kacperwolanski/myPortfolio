import styled, { keyframes } from "styled-components";
import { Theme } from "@mui/material";

export const IntroductionContainer = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  position: relative;
`;

export const scrollAnimationR = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
   transform: translateX(50%);
  }
`;

export const scrollAnimationL = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
   transform: translateX(-50%);
  }
`;

export const FirstName = styled.h1<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  opacity: 0.3;
  font-weight: 900;
  letter-spacing: -3px;
  font-size: 140px;
  top: 0px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 140px;
    top: 0px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 150px;
    top: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 180px;
    top: 0px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 190px;
    top: -20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 200px;
    top: -20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 200px;
    top: -20px;
  }
  position: absolute;

  left: 0;
  display: flex;
  width: 200%;
  white-space: nowrap;
  animation: ${scrollAnimationR} 75s linear infinite;
  span {
    padding-right: 300px;
  }
`;

export const Surname = styled.h1<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-weight: 900;
  letter-spacing: -3px;
  height: 300px;
  font-size: 80px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 90px;
    bottom: 0px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 100px;
    bottom: 10px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 110px;
    bottom: 100px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 110px;
    bottom: 10px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 120px;
    bottom: 10px;
  }
  position: absolute;

  right: 0;
  display: flex;
  width: 200%;
  white-space: nowrap;
  animation: ${scrollAnimationL} 50s linear infinite;
  opacity: 0.8;
  span {
    padding-right: 300px;
  }
`;

export const SubTitle = styled.h1<{ theme: Theme }>`
  z-index: 10;
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 15px;
  margin-top: 125px;
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
  z-index: 10;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-top: 300px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    width: 300px;
    height: 300px;
    margin-top: 100px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    width: 300px;
    height: 300px;
    margin-top: 250px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: 450px;
    height: 450px;
    margin-top: 270px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 450px;
    height: 450px;
    margin-top: 300px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    width: 550px;
    height: 550px;
    margin-top: 300px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    width: 550px;
    height: 550px;
    margin-top: 300px;
  }
`;
