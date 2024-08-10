import React from "react";
import { TopMenuButtonsContainer } from "../topMenu.styles";
import AboutButton from "../topMenuButtons/AboutButton";
import EducationButton from "../topMenuButtons/EducationButton";
import ExperienceButton from "../topMenuButtons/ExperienceButton";
import ProjectsButton from "../topMenuButtons/ProjectsButton";
import HomeButton from "../topMenuButtons/HomeButton";
import Resume from "../../../shared/components/Resume";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  vertical?: boolean;
}
const TopMenuButtons = ({ vertical }: Props) => {
  const { currentTheme, isMobile } = useThemeStore();
  return (
    <TopMenuButtonsContainer
      theme={currentTheme}
      vertical={vertical}
      isMobile={isMobile}
    >
      <HomeButton />
      <AboutButton />
      <EducationButton />
      <ExperienceButton />
      <ProjectsButton />
      <Resume />
    </TopMenuButtonsContainer>
  );
};

export default TopMenuButtons;
