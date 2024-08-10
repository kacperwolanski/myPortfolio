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
  ImageDescription,
} from "./project.styles";
import { useThemeStore } from "theme/useThemeStore";
import ProjectImageSkeleton from "shared/components/skeletons/ProjectImageSkeleton";

const ProjectImageComponent = lazy(() => import("./ProjectImageComponent"));

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  const { currentTheme } = useThemeStore();

  return (
    <ProjectContainer theme={currentTheme}>
      <RawLink to={project.githubUrl} openInNewTab>
        <ImageDescription>
          <ProjectDescription
            theme={currentTheme}
            className="project-description"
          >
            {project.description}
          </ProjectDescription>
          {project.imageUrl && (
            <Suspense fallback={<ProjectImageSkeleton />}>
              <ProjectImageComponent
                src={project.imageUrl}
                alt={project.name}
              />
            </Suspense>
          )}
        </ImageDescription>
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
            <LinkIcon />
          </GithubLink>
        </TextContainer>
      </RawLink>
    </ProjectContainer>
  );
};

export default Project;
