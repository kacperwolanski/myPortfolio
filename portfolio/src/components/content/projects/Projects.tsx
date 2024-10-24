import React, { useRef, useState } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import Project from "./project/Project";
import { ProjectLabel } from "shared/constants/types";
import { ProjectsContainer } from "./projects.styles";
import Filters from "./Filters";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
import useProjectsItems from "./hooks/useProjectsItems";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Projects = () => {
  const { t: translate, i18n } = useTranslation();
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
      key={i18n.language}
      title={translate("projectsTitle")}
      subTitle={translate("projectsSubtitle")}
    >
      <div id={sectionIds.projects}>
        <Filters
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />

        <ProjectsContainer>
          {filteredProjects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </ProjectsContainer>
      </div>
    </ContentSection>
  );
};
export default Projects;
