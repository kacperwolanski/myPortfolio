import React, { useRef } from "react";
import { skillsSets } from "shared/constants/skillSets";
import { SkillsWrapperContainer } from "./skills.styles";
import { useThemeStore } from "theme/useThemeStore";
import SkillWrapper from "./SkillWrapper";
import { SkillSet } from "shared/constants/types";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Skills = () => {
  const { currentTheme } = useThemeStore();
  const skillsRef = useRef(null);
  const { isVisible } = useIntersectionObserver(skillsRef);
  return (
    <SkillsWrapperContainer theme={currentTheme} ref={skillsRef}>
      <>
        {skillsSets.map((skillSet: SkillSet, index: number) => (
          <SkillWrapper
            key={skillSet.title}
            skillSet={skillSet}
            index={index}
            marginBottom={[0, 1, 7].includes(index)}
            isVisible={isVisible}
          />
        ))}
      </>
    </SkillsWrapperContainer>
  );
};

export default Skills;
