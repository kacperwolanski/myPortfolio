import React from "react";
import { useThemeStore } from "theme/useThemeStore";
import { FeatureContainer, FeatureIndex } from "./products.styles";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  elementIndex: number;
  elementTitle: string;
  isLast: boolean;
  withBorders?: boolean;
  isVisible: boolean;
  animationFromLeft?: boolean;
}
const SingleFeature = ({
  elementIndex,
  elementTitle,
  isLast,
  withBorders,
  isVisible,
  animationFromLeft,
}: Props) => {
  const { currentTheme } = useThemeStore();
  const doubleDigitIndex = elementIndex.toString().length > 1;

  const initialX = animationFromLeft ? -200 : 200;
  const springStyle = useSpring({
    from: {
      x: initialX,
      opacity: 0,
    },
    to: {
      x: isVisible ? 0 : initialX,
      opacity: isVisible ? 1 : 0,
    },
    config: { duration: 400 },
    delay: 700 + elementIndex * 100,
  });

  return (
    <animated.div style={springStyle}>
      <FeatureContainer
        withBorders={withBorders}
        isLast={isLast}
        theme={currentTheme}
      >
        <FeatureIndex doubleDigit={doubleDigitIndex} theme={currentTheme}>
          {doubleDigitIndex ? elementIndex : `0${elementIndex}`}.
        </FeatureIndex>
        <span>{elementTitle}</span>
      </FeatureContainer>
    </animated.div>
  );
};

export default SingleFeature;
