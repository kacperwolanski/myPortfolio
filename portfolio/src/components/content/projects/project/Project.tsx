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
import * as motion from "motion/react-client";

const ProjectImageComponent = lazy(() => import("./ProjectImageComponent"));

interface Props {
  index: number;
  project: ProjectType;
  isVisible: boolean;
}

const Project = ({ index, project, isVisible }: Props) => {
  const { currentTheme } = useThemeStore();
  const animationDuration = 1;
  const delay = 0.4 + (index * animationDuration) / 3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: isVisible ? delay : 0,
        duration: animationDuration,
        scale: {
          type: "spring",
          visualDuration: animationDuration,
          bounce: 0.6,
        },
      }}
    >
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
    </motion.div>
  );
};

export default Project;
