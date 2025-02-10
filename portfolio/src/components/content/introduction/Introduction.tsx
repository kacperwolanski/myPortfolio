import React, { useEffect, useState } from "react";
import {
  Description,
  FirstName,
  IntroductionContainer,
  SubTitle,
  Surname,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import ContactMeButton from "components/topMenu/ContactMeButton";
import ProfileImage from "./ProfileImage";
import { animated } from "@react-spring/web";
import useSpringsAndRefs from "./hooks/useSpringsAndRefs";
import useWavedLetters from "shared/hooks/useWavedLetters";

const Introduction = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const splitName = "Kacper Wolański".split("");
  const { setHoveredIndex } = useWavedLetters(splitName);
  const [waveDelay, setWaveDelay] = useState<number>(500);

  const {
    firstNameSpring,
    surnameSpring,
    subTitleSpring,
    descSpring,
    buttonSpring,
  } = useSpringsAndRefs();

  const { jobTitle } = introductionData;

  useEffect(() => {
    setTimeout(() => {
      const nameCopy = [...splitName, null];
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

      <animated.div style={firstNameSpring}>
        <FirstName theme={currentTheme}>
          {Array(20)
            .fill("Kacper")
            .map((name, index) => (
              <span key={index}>{name}</span>
            ))}
        </FirstName>
      </animated.div>

      <animated.div style={surnameSpring}>
        <Surname theme={currentTheme}>
          {Array(20)
            .fill("Wolański")
            .map((name, index) => (
              <span key={index}>{name}</span>
            ))}
        </Surname>
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
