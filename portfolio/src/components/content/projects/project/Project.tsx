import React from "react";
import { Project as ProjectType } from "shared/constants/types";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import { RawLink } from "shared/components/RawLink";

interface Props {
  project: ProjectType;
}

const ProjectContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 20px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  padding: 20px;
  border-radius: 10px;
`;

const ProjectName = styled.h2`
  padding: 0;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 14px;
  max-width: 200px;
  line-height: 10px;
`;

const Technology = styled.span`
  font-weight: 100;
`;

const ProjectDescription = styled.div`
  max-width: 400px;
  padding: 20px;
  color: white;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: 350px;
  width: 500px;
  top: 10px;
  left: 350px;
  position: relative;
  border-radius: 10px;
`;

const GithubLink = styled.div`
  margin-top: 5px;
  margin-bottom: 0;
  padding: 0;
  width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Project = ({ project }: Props) => {
  return (
    <ProjectContainer>
      <TextContainer>
        <ProjectName>{project.name}</ProjectName>
        <TechStackList>
          {project.techStack.map((technology, index) => (
            <Technology key={index}>{technology}</Technology>
          ))}
        </TechStackList>
        <ProjectDescription>
          {project.description}
          {project.githubUrl && (
            <GithubLink>
              <RawLink to={project.githubUrl} openInNewTab>
                <GitHubIcon style={{ cursor: "pointer" }} />
              </RawLink>
            </GithubLink>
          )}
        </ProjectDescription>
      </TextContainer>
      {project.imageUrl && (
        <ProjectImage src={project.imageUrl} alt={project.name} />
      )}
    </ProjectContainer>
  );
};

export default Project;
