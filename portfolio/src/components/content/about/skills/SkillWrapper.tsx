import React from "react";
import { animated } from "@react-spring/web";
import { useSpring } from "@react-spring/web";
import SkillsSet from "./SkillsSet";
import { SkillSet } from "shared/constants/types";

interface Props {
  skillSet: SkillSet;
  index: number;
  isVisible: boolean;
  marginBottom?: boolean;
}
const SkillWrapper = ({ skillSet, isVisible, marginBottom, index }: Props) => {
  const styleSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isVisible ? 1 : 0,
    },
    config: { duration: 2000 },
    delay: (0.8 + 0.1 * index) * 1000,
  });
  console.log(1 + 0.2 * index);
  return (
    <animated.div style={styleSpring}>
      <SkillsSet skillSet={skillSet} />
      {marginBottom && <br />}
    </animated.div>
  );
};

export default SkillWrapper;
