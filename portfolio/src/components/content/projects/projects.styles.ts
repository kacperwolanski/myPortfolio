import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 35px;
  row-gap: 50px;
  margin-top: 30px;
  align-content: center;
  justify-content: center;
`;

export const FilterButtons = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    flex-direction: row;
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
  gap: 50px;
  margin-top: 80px;
`;
