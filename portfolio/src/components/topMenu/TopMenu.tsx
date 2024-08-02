import React from "react";
import AboutButton from "./topMenuButtons/AboutButton";
import EducationButton from "./topMenuButtons/EducationButton";
import ExperienceButton from "./topMenuButtons/ExperienceButton";
import ContactButton from "./topMenuButtons/ContactButton";
import { TopMenuButtonsContainer, TopMenuContainer } from "./topMenu.styles";
import TopMenuLogo from "./topMenuLogo/TopMenuLogo";

const TopMenu = () => {
  return (
    <TopMenuContainer>
      <TopMenuLogo />
      <TopMenuButtonsContainer>
        <AboutButton />
        <EducationButton />
        <ExperienceButton />
        <ContactButton />
      </TopMenuButtonsContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
