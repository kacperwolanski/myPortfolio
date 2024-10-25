import React, { useEffect, useState } from "react";
import {
  Description,
  IntroductionContainer,
  NameContainer,
  SubTitle,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import ContactMeButton from "components/topMenu/ContactMeButton";
import ProfileImage from "./ProfileImage";
import { animated, useSprings } from "@react-spring/web";
import useSpringsAndRefs from "./hooks/useSpringsAndRefs";

const Introduction = () => {
  const { currentTheme, isMobile } = useThemeStore();
  const { t: translate } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [waveDelay, setWaveDelay] = useState<number>(500);

  const { nameSpring, subTitleSpring, descSpring, buttonSpring } =
    useSpringsAndRefs();

  const name = "Kacper Wolański".split("");
  const { jobTitle } = introductionData;

  const springs = useSprings(
    name.length,
    name.map((_, i) => ({
      transform: hoveredIndex === i ? "translateY(-10px)" : "translateY(0px)",
      config: { tension: 500, friction: 10 },
    }))
  );

  useEffect(() => {
    setTimeout(() => {
      const nameCopy = [...name, null];
      nameCopy.forEach((_, index) => {
        setTimeout(() => {
          setHoveredIndex(index);
        }, index * 60);
      });
    }, waveDelay);
  }, [currentTheme]);

  useEffect(() => {
    setWaveDelay(0);
  }, []);

  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-100} left={-400} theme={currentTheme} />
      <ProfileImage />
      <animated.div style={nameSpring}>
        <NameContainer theme={currentTheme}>
          <div style={{ display: "flex" }}>
            {springs.map((springStyle, index) => (
              <animated.span
                key={index}
                style={{
                  ...springStyle,
                  display: "inline-block",
                  marginRight: name[index] === " " ? "8px" : "0",
                }}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              >
                {name[index]}
              </animated.span>
            ))}
          </div>
        </NameContainer>
      </animated.div>
      <animated.div style={subTitleSpring}>
        <SubTitle theme={currentTheme}>{jobTitle}</SubTitle>
      </animated.div>

      <Description theme={currentTheme}>
        <animated.div style={descSpring}>
          {translate("introduction")}
        </animated.div>
      </Description>

      <animated.div style={buttonSpring}>
        <ContactMeButton />
      </animated.div>
    </IntroductionContainer>
  );
};

export default Introduction;
