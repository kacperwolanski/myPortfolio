import styled from "styled-components";
import { Theme } from "@mui/material";

export const SubList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  margin-top: -15px;
`;
export const SubPoint = styled.p<{ theme: Theme }>`
  font-weight: 100;
  font-size: 14px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 20px;
  }
  color: ${(props) => props.theme.palette.secondary.main};
`;
