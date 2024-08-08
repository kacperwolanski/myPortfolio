import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
const ProjectsButton = () => {
  const { t: translate } = useTranslation();
  return (
    <TopMenuButton
      title={translate("projectsButton")}
      sectionId={sectionIds.projects}
    />
  );
};

export default ProjectsButton;
