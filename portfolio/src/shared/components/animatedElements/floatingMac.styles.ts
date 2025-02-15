import { a as web } from "@react-spring/web";
import styled from "styled-components";
import { Theme } from "@mui/material";

export const MainContainer = styled(web.main)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 100;
  flex-direction: column;
  padding: 10px;
  max-height: 350px;
  max-width: 350px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    max-height: 420px;
    max-width: 420px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    max-height: 600px;
    max-width: 600px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    max-height: 800px;
    max-width: 800px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    max-height: 1000px;
    max-width: 1000px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    max-height: 1000px;
    max-width: 1000px;
  }
`;

export const ResponsiveTitle = styled(web.h1)<{ theme: Theme }>`
  opacity: 0.6;

  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 12px;
  margin-bottom: 0px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 14px;
    margin-bottom: -50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 16px;
    margin-bottom: -70px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 18px;
    margin-bottom: -80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 20px;
    margin-bottom: -120px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 20px;
    margin-bottom: -120px;
  }
`;
