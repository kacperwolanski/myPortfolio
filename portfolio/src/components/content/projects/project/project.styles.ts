import styled from "styled-components";
import { Theme } from "@mui/material";

export const ProjectContainer = styled.div<{ theme: Theme }>`
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover .project-image {
    z-index: 0;
  }
  &:hover .project-description {
    z-index: 1;
    opacity: 1;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    scale: 0.95;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    scale: 0.95;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    scale: 1;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    scale: 1;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    scale: 1;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    scale: 1;
  }
  max-width: 700px;
  max-height: 700px;
`;

export const ImageDescription = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: 220px;
`;
export const TextContainer = styled.div<{ theme: Theme }>`
  background: rgba(${(props) => props.theme.palette.custom.background}, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 0px 0 10px 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-top: 15px;
`;

export const ProjectName = styled.h2<{ theme: Theme }>`
  font-family: "Inter";
  font-size: 15px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 18px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 20px;
  }
  font-weight: 600;
  color: ${(props) => props.theme.palette.custom.header};
`;

export const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 10px;
  max-width: 300px;
`;

export const Technology = styled.span<{ theme: Theme }>`
  font-weight: 100;
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 14px;
`;

export const ProjectDescription = styled.div<{ theme: Theme }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 101%;
  border-radius: 10px;
  padding: 20px;
  color: ${(props) => props.theme.palette.custom.header};
  z-index: 0;
  background: rgba(${(props) => props.theme.palette.custom.background}, 0.6);
  backdrop-filter: blur(4px);
  transition: z-index 0.3s, opacity 0.3s;
  opacity: 0;
`;

export const ProjectImage = styled.img<{ isLoading: boolean; theme: Theme }>`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  border-radius: 10px;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: z-index 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const GithubLink = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
`;
