import React from "react";
import Skill from "./Skill";
import {
  SkillsContainer,
  SkillSetTitle,
  SkillsSetContainer,
} from "./skills.styles";
import { SkillSet } from "shared/constants/types";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";

interface Props {
  skillSet: SkillSet;
}

const SkillsSet: React.FC<Props> = ({ skillSet }) => {
  const { t: translate } = useTranslation();
  const { currentTheme } = useThemeStore();
  const { title, skills } = skillSet;
  return (
    <SkillsSetContainer theme={currentTheme}>
      <SkillSetTitle theme={currentTheme}>{translate(title)}</SkillSetTitle>
      <SkillsContainer theme={currentTheme}>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </SkillsContainer>
    </SkillsSetContainer>
  );
};

export default SkillsSet;
