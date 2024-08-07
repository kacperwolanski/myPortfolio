import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";

const AboutButton = () => {
  return <TopMenuButton title="About" sectionId={sectionIds.about} />;
};

export default AboutButton;
