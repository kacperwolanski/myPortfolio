import React from "react";
import { TopMenuButtonsContainer } from "../topMenu.styles";
import AboutButton from "../topMenuButtons/AboutButton";
import EducationButton from "../topMenuButtons/EducationButton";
import ExperienceButton from "../topMenuButtons/ExperienceButton";
import ProjectsButton from "../topMenuButtons/ProjectsButton";
import HomeButton from "../topMenuButtons/HomeButton";
import Resume from "../../../components/socialMedias/resume/Resume";
const TopMenuButtons = () => {
  return (
    <div>
      <TopMenuButtonsContainer>
        <HomeButton />
        <AboutButton />
        <EducationButton />
        <ExperienceButton />
        <ProjectsButton />
        <Resume />
      </TopMenuButtonsContainer>
    </div>
  );
};

export default TopMenuButtons;
