import React, { Suspense, lazy } from "react";
import { Project as ProjectType } from "shared/constants/types";
import { RawLink } from "shared/components/RawLink";
import { LinkIcon } from "../../../../shared/assets/icons/Icons";
import {
  ProjectContainer,
  ProjectDescription,
  TextContainer,
  ProjectName,
  TechStackList,
  Technology,
  GithubLink,
} from "./project.styles";
import { useThemeStore } from "theme/useThemeStore";
import ProjectImageSkeleton from "shared/components/skeletons/ProjectImageSkeleton";

const ProjectImage = lazy(() => import("./ProjectImageContainer"));

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
        <Suspense fallback={<ProjectImageSkeleton />}>
          <ProjectImage src={project.imageUrl} alt={project.name} />
        </Suspense>
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
