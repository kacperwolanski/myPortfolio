import React from "react";
import { Project as ProjectType } from "shared/constants/types";
import { RawLink } from "shared/components/RawLink";
import { LinkIcon } from "../../../../shared/assets/icons/Icons";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  TextContainer,
  ProjectName,
  TechStackList,
  Technology,
  GithubLink,
} from "./project.styles";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <ProjectContainer>
      <ProjectDescription theme={currentTheme} className="project-description">
        {project.description}
      </ProjectDescription>
      {project.imageUrl && (
        <ProjectImage
          className="project-image"
          src={project.imageUrl}
          alt={project.name}
        />
      )}
      <TextContainer theme={currentTheme}>
        <ProjectName theme={currentTheme}>{project.name}</ProjectName>
        <TechStackList>
          {project.techStack.map((technology, index) => (
            <Technology theme={currentTheme} key={index}>
              {technology}
            </Technology>
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
