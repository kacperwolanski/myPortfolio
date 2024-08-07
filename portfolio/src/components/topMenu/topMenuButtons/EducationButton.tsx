import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";

const EducationButton = () => {
  return <TopMenuButton title="Education" sectionId={sectionIds.education} />;
};

export default EducationButton;
