import React, { useRef, useState } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import Project from "./project/Project";
import { ProjectLabel } from "shared/constants/types";
import { Container, ProjectsContainer } from "./projects.styles";
import Filters from "./Filters";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
import useProjectsItems from "./hooks/useProjectsItems";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const ProjectsContent = () => {
  const { t: translate } = useTranslation();
  const { projectItems } = useProjectsItems();
  const [selectedLabel, setSelectedLabel] = useState<ProjectLabel>("All");
  const projectsRef = useRef(null);
  const { isVisible } = useIntersectionObserver(projectsRef);

  const filteredProjects = projectItems.filter((project) => {
    return project.labels.includes(selectedLabel);
  });

  return (
    <ContentSection
      isVisible={isVisible}
      ref={projectsRef}
      title={translate("projectsTitle")}
      subTitle={translate("projectsSubtitle")}
      doNotAnimateY
    >
      <Container id={sectionIds.projects}>
        <Filters
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />

        <ProjectsContainer>
          {filteredProjects.map((project, index) => {
            return (
              <Project
                key={index}
                project={project}
                isVisible={isVisible}
                index={index}
              />
            );
          })}
        </ProjectsContainer>
      </Container>
    </ContentSection>
  );
};
export default ProjectsContent;
