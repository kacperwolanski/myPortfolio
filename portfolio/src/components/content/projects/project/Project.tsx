import React from "react";
import { Project as ProjectType } from "shared/constants/types";
import styled from "styled-components";
import { RawLink } from "shared/components/RawLink";
import theme from "theme/theme";
import { LinkIcon } from "../../../../shared/assets/icons/Icons";

interface Props {
  project: ProjectType;
}

const ProjectContainer = styled.div`
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

const TextContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 200px;
  max-width: 350px;
`;

const ProjectName = styled.h2`
  font-family: "Inter";
  font-size: 20px;
  font-weight: 600;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 10px;
  max-width: 300px;
`;

const Technology = styled.span`
  font-weight: 100;
  color: ${theme.palette.secondary.main};
  font-size: 14px;
`;

const ProjectDescription = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 220px;
  width: 350px;
  border-radius: 10px;
  padding: 20px;
  color: white;
  z-index: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  transition: z-index 0.3s, opacity 0.3s;
  opacity: 0;
`;

const ProjectImage = styled.img`
  height: 220px;
  width: 350px;
  z-index: 1;
  position: relative;
  border-radius: 10px;
  transition: z-index 0.3s, opacity 0.3s;
`;

const GithubLink = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
`;

const Project = ({ project }: Props) => {
  return (
    <ProjectContainer>
      <ProjectDescription className="project-description">
        {project.description}
      </ProjectDescription>
      {project.imageUrl && (
        <ProjectImage
          className="project-image"
          src={project.imageUrl}
          alt={project.name}
        />
      )}
      <TextContainer>
        <ProjectName>{project.name}</ProjectName>
        <TechStackList>
          {project.techStack.map((technology, index) => (
            <Technology key={index}>{technology}</Technology>
          ))}
        </TechStackList>

        <GithubLink>
          <RawLink to={project.githubUrl} openInNewTab>
            <LinkIcon />
          </RawLink>
        </GithubLink>
      </TextContainer>
    </ProjectContainer>
  );
};

export default Project;
