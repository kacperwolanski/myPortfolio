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
} from "shared/constants/skillSets";
const Skills = () => {
  return (
    <div>
      <SkillsSet skillSet={programmingLanguages} />
      <p>
        <SkillsSet skillSet={frontend} />
      </p>
      <SkillsSet skillSet={backend} />
      <SkillsSet skillSet={testing} />
      <SkillsSet skillSet={uiDesign} />
      <SkillsSet skillSet={automation} />
      <SkillsSet skillSet={teamwork} />
      <SkillsSet skillSet={os} />
      <SkillsSet skillSet={otherSkills} />
    </div>
  );
};

export default Skills;
