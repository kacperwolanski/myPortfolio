import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";

const ExperienceButton = () => {
  return <TopMenuButton title="Experience" sectionId={sectionIds.experience} />;
};

export default ExperienceButton;
