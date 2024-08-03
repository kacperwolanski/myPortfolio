import React from "react";
import Skill from "./Skill";
import { SkillSet } from "../../../shared/constants/types";
import {
  SkillsContainer,
  SkillSetTitle,
  SkillsSetContainer,
} from "./skills.styles";

interface Props {
  skillSet: SkillSet;
}

const SkillsSet: React.FC<Props> = ({ skillSet }) => {
  const { title, skills } = skillSet;
  return (
    <SkillsSetContainer>
      <SkillSetTitle>{title}</SkillSetTitle>
      <SkillsContainer>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </SkillsContainer>
    </SkillsSetContainer>
  );
};

export default SkillsSet;
