import React, { useState } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import { projects } from "shared/constants/projects";
import Project from "./project/Project";
import { ProjectLabel } from "shared/constants/types";
import { Container, ProjectsContainer } from "./projects.styles";
import Filters from "./Filters";
import { sectionIds } from "shared/constants/sectionsIds";

const Projects = () => {
  const [selectedLabel, setSelectedLabel] = useState<ProjectLabel>("All");

  const filteredProjects = projects.filter((project) => {
    return project.labels.includes(selectedLabel);
  });
  return (
    <ContentSection title="Projects" subTitle="Some of my Work">
      <Container id={sectionIds.projects}>
        <Filters
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />
        <ProjectsContainer>
          {filteredProjects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </ProjectsContainer>
      </Container>
    </ContentSection>
  );
};
export default Projects;
