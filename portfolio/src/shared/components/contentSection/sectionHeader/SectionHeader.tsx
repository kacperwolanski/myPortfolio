import React from "react";
import {
  HeaderContainer,
  SectionTitle,
  SubTitle,
} from "./sectionHeader.styles";
import { useThemeStore } from "theme/useThemeStore";
import useWavedLetters from "shared/hooks/useWavedLetters";
import { animated } from "@react-spring/web";

interface Props {
  title: string;
  subTitle?: string;
}
const SectionHeader = ({ title, subTitle }: Props) => {
  const { currentTheme, isMobile } = useThemeStore();
  const splitTitle = title.split("");

  const { springs, setHoveredIndex } = useWavedLetters(splitTitle);
  return (
    <HeaderContainer theme={currentTheme}>
      <SectionTitle theme={currentTheme}>
        {springs.map((springStyle, index) => (
          <animated.span
            key={index}
            style={{
              ...springStyle,
              display: "inline-block",
              marginRight: splitTitle[index] === " " ? "8px" : "0",
            }}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            {splitTitle[index]}
          </animated.span>
        ))}
      </SectionTitle>
      {subTitle && <SubTitle theme={currentTheme}>{subTitle}</SubTitle>}
    </HeaderContainer>
  );
};

export default SectionHeader;
