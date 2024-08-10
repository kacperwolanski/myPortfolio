import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div<{ theme: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    flex-direction: row;
  }
  justify-content: space-between;
  font-family: "Inter";
`;
export const Headers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.span<{
  clickable: boolean;
  theme: Theme;
}>`
  ${(props) => props.clickable && "cursor: pointer;"};
  font-size: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 18px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 22px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 25px;
  }
  font-weight: 400;
  width: 100%;

  color: ${(props) => props.theme.palette.custom.header};
`;

export const Subtitle = styled.div<{ theme: Theme }>`
  font-size: 12px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 14px;
  }
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 400;
`;
export const DateItem = styled.span`
  font-weight: 100;
`;

export const DatesContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 14px;
  margin-top: 10px;
`;
