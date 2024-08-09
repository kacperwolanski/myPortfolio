import styled from "styled-components";
import { Theme } from "@mui/material";

export const HeaderContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "Inter";
`;

export const SectionTitle = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-size: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 35px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 45px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 45px;
  }
  font-weight: 1000;
  letter-spacing: -1px;
`;

export const SubTitle = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 12px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 14px;
  }
  font-weight: 600;
  margin-top: -10px;
`;
