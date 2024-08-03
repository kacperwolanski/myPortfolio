import React from "react";
import { SkillContainer } from "./skills.styles";

interface Props {
  skill: string;
}
const Skill = ({ skill }: Props) => {
  return <SkillContainer>{skill}</SkillContainer>;
};

export default Skill;
