import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";

const HomeButton = () => {
  return <TopMenuButton title="Home" sectionId={sectionIds.home} />;
};

export default HomeButton;
