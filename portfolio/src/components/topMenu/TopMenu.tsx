import React from "react";
import AboutButton from "./topMenuButtons/AboutButton";
import EducationButton from "./topMenuButtons/EducationButton";
import ExperienceButton from "./topMenuButtons/ExperienceButton";
import ContactButton from "./topMenuButtons/ContactButton";
import {
  SubContainer,
  TopMenuButtonsContainer,
  TopMenuContainer,
} from "./topMenu.styles";
import TopMenuLogo from "./topMenuLogo/TopMenuLogo";
import useIsTopMenuHidden from "./hooks/useIsTopMenuHidden";
import ProjectsButton from "./topMenuButtons/ProjectsButton";
import HomeButton from "./topMenuButtons/HomeButton";
import Resume from "../../components/socialMedias/resume/Resume";
import LanguageSwitcher from "shared/components/languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "shared/components/themeSwitcher/ThemeSwitcher";

const TopMenu = () => {
  const { isHidden } = useIsTopMenuHidden();

  return (
    <TopMenuContainer isHidden={isHidden}>
      <TopMenuLogo />
      <TopMenuButtonsContainer>
        <HomeButton />
        <AboutButton />
        <EducationButton />
        <ExperienceButton />
        <ProjectsButton />
        <Resume />
      </TopMenuButtonsContainer>
      <SubContainer>
        <ContactButton />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </SubContainer>
    </TopMenuContainer>
  );
};

export default TopMenu;
