import React from "react";
import AboutButton from "./topMenuButtons/AboutButton";
import EducationButton from "./topMenuButtons/EducationButton";
import ExperienceButton from "./topMenuButtons/ExperienceButton";
import ContactButton from "./topMenuButtons/ContactButton";
import { TopMenuButtonsContainer, TopMenuContainer } from "./topMenu.styles";
import TopMenuLogo from "./topMenuLogo/TopMenuLogo";
import useIsTopMenuHidden from "./hooks/useIsTopMenuHidden";
import ProjectsButton from "./topMenuButtons/ProjectsButton";

const TopMenu = () => {
  const { isHidden } = useIsTopMenuHidden();

  return (
    <TopMenuContainer isHidden={isHidden}>
      <TopMenuLogo />
      <TopMenuButtonsContainer>
        <AboutButton />
        <EducationButton />
        <ExperienceButton />
        <ProjectsButton />
        <ContactButton />
      </TopMenuButtonsContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
