import React from "react";
import SkillsSet from "./SkillsSet";
import {
  programmingLanguages,
  frontend,
  backend,
  testing,
  uiDesign,
  automation,
  teamwork,
  otherSkills,
  cms,
} from "shared/constants/skillSets";
import { SkillsWrapper } from "./skills.styles";
import { useThemeStore } from "theme/useThemeStore";
const Skills = () => {
  const { currentTheme } = useThemeStore();
  return (
    <SkillsWrapper theme={currentTheme}>
      <SkillsSet skillSet={programmingLanguages} />
      <br />
      <SkillsSet skillSet={frontend} />
      <br />
      <SkillsSet skillSet={backend} />
      <SkillsSet skillSet={testing} />
      <SkillsSet skillSet={uiDesign} />
      <SkillsSet skillSet={automation} />
      <SkillsSet skillSet={teamwork} />
      {/* <SkillsSet skillSet={os} /> */}
      <SkillsSet skillSet={cms} />
      <br />
      <SkillsSet skillSet={otherSkills} />
    </SkillsWrapper>
  );
};

export default Skills;
