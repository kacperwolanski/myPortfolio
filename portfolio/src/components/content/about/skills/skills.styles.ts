import { Theme } from "@mui/material";
import styled from "styled-components";

export const SkillsWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;
  flex-direction: column;
  z-index: 10;
  gap: 50px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    gap: 30px;
    margin-top: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: 30px;
    margin-top: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 15px;
    margin-top: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: 10px;
    margin-top: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: 5px;
    margin-top: 20px;
  }
`;
export const SkillsSetContainer = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: -11px;
  min-width: 200px;
`;

export const SkillSetTitle = styled.h3<{ theme: Theme }>`
  flex-wrap: wrap;
  text-align: center;
  color: ${(props) => props.theme.palette.custom.header};
  font-size: 14px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 12px;
    min-width: 160px;
    text-align: left;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 14px;
    min-width: 180px;
    text-align: left;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    min-width: 180px;
    font-size: 14px;
    text-align: left;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    min-width: 230px;
    font-size: 16px;
    text-align: left;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    min-width: 230px;
    font-size: 16px;
    text-align: left;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    min-width: 250px;
    font-size: 18px;
    text-align: left;
  }
`;

export const SkillsContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  align-items: center;
  gap: 5px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    gap: 5px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    gap: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 25px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    gap: 25px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    gap: 25px;
  }
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const SkillContainer = styled.div`
  font-weight: 200;
`;
