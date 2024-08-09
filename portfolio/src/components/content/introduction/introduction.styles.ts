import styled from "styled-components";
import { Theme } from "@mui/material";

export const IntroductionContainer = styled.div`
  margin-top: 200px;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
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
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    margin-top: -30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    margin-top: -40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    margin-top: -50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    margin-top: -60px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    margin-top: -60px;
  }
  text-align: center;
  margin-top: -25px;
  color: ${(props) => props.theme.palette.secondary.main};
`;
