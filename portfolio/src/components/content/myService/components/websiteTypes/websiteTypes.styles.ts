import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

export const WebsiteTypeButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  z-index: 20;
  transition: opacity 0.5 ease-in-out;
  width: 100%;
`;

export const TypeContainer = styled.div<{
  background?: string;
  theme: Theme;
  borderColor: string;
}>`
  color: rgb(230, 228, 228);
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 10px;
  min-width: 150px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    min-width: 250px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    min-width: 250px;
  }

  max-width: 300px;
  padding: 18px 25px;
  border-radius: 10px;
  background: ${({ background }) => background || "transparent"};
  border: ${({ background, borderColor }) =>
    background ? "none" : `1px solid ${borderColor}`};

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 7px 7px 0px rgba(255, 255, 255, 0.1);
  }
  transition: background 0.5s, transform 0.3s, box-shadow 0.2s ease-in-out;
`;

export const DetailsContainer = styled.div<{ theme: Theme }>`
  display: flex;
  padding: 150px 20px;
  transition: background 0.5s ease-in-out;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 50px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    padding: 100px 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    padding: 100px 45px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.mobile}px) {
    padding: 100px 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 100px;
    padding: 120px 80px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    flex-direction: row;
    gap: 200px;
    padding: 150px 100px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    flex-direction: row;
    gap: 200px;
    padding: 150px 100px;
  }
`;

export const DescriptionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DetailsDescription = styled.p<{ theme: Theme }>`
  z-index: 10;
  text-align: left;
  color: ${(props) => props.theme.palette.secondary.main};
`;
