import React from "react";

interface Props {
  skill: string;
}
const Skill = ({ skill }: Props) => {
  return <div>{skill}</div>;
};

export default Skill;
