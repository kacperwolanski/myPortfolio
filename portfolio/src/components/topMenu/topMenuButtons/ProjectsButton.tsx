import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";

const ProjectsButton = () => {
  return <TopMenuButton title="Projects" sectionId={sectionIds.projects} />;
};

export default ProjectsButton;
