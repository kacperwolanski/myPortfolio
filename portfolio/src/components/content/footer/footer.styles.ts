import styled from "styled-components";
import { Theme } from "@mui/material";

export const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 50px 50px 10px 50px;
  border-top: 1px solid ${(props) => props.theme.palette.custom.borderGray};
`;

export const LogoButtons = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;

  gap: 10px;
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
`;
export const SocialMediasWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  margin-top: 10px;
  justify-content: center;

  gap: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    gap: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    gap: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: 50px;
  }
`;
export const Signature = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  text-align: center;
  font-size: 16px;
  font-family: "Inter";
  font-weight: 200;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 16px;
  }
`;
