import React from "react";
import Skill from "./Skill";
import {
  SkillsContainer,
  SkillSetTitle,
  SkillsSetContainer,
} from "./skills.styles";
import { SkillSet } from "shared/constants/types";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  skillSet: SkillSet;
}

const SkillsSet: React.FC<Props> = ({ skillSet }) => {
  const { title, skills } = skillSet;
  const { currentTheme } = useThemeStore();
  return (
    <SkillsSetContainer>
      <SkillSetTitle theme={currentTheme}>{title}</SkillSetTitle>
      <SkillsContainer theme={currentTheme}>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </SkillsContainer>
    </SkillsSetContainer>
  );
};

export default SkillsSet;
