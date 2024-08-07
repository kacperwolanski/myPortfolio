import styled from "styled-components";
import { Theme } from "@mui/material";

export const ProjectContainer = styled.div`
  position: relative;
  padding: 20px;
  max-height: 380px;

  &:hover .project-image {
    z-index: 0;
    opacity: 0.5;
  }

  &:hover .project-description {
    z-index: 1;
    opacity: 1;
  }
`;

export const TextContainer = styled.div<{ theme: Theme }>`
  background: rgba(${(props) => props.theme.palette.custom.background}, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  max-width: 350px;
`;

export const ProjectName = styled.h2<{ theme: Theme }>`
  font-family: "Inter";
  font-size: 20px;
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
  top: 20px;
  left: 20px;
  height: 220px;
  width: 350px;
  border-radius: 10px;
  padding: 20px;
  color: ${(props) => props.theme.palette.custom.header};
  z-index: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  transition: z-index 0.3s, opacity 0.3s;
  opacity: 0;
`;

export const ProjectImage = styled.img`
  height: 220px;
  width: 350px;
  z-index: 1;
  position: relative;
  border-radius: 10px;
  transition: z-index 0.3s, opacity 0.3s;
`;

export const GithubLink = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
`;
