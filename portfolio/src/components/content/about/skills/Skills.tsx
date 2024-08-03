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
  os,
  otherSkills,
} from "../../../shared/constants/skillSets";
import { MainSkillSetsContainer } from "./skills.styles";

const Skills = () => {
  return (
    <MainSkillSetsContainer>
      <SkillsSet skillSet={programmingLanguages} />
      <SkillsSet skillSet={frontend} />
      <SkillsSet skillSet={backend} />
      <SkillsSet skillSet={testing} />
      <SkillsSet skillSet={uiDesign} />
      <SkillsSet skillSet={automation} />
      <SkillsSet skillSet={teamwork} />
      <SkillsSet skillSet={os} />
      <SkillsSet skillSet={otherSkills} />
    </MainSkillSetsContainer>
  );
};

export default Skills;
