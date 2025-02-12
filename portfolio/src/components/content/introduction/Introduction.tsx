import React from "react";
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

const Introduction = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const { isMobile } = useThemeStore();
  const {
    firstNameSpring,
    surnameSpring,
    subTitleSpring,
    descSpring,
    buttonSpring,
  } = useSpringsAndRefs();

  const { jobTitle } = introductionData;

  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-100} left={-400} theme={currentTheme} />
      <ProfileImage />

      <animated.div style={firstNameSpring}>
        <FirstName theme={currentTheme} isMobile={isMobile}>
          {Array(50)
            .fill("Kacper")
            .map((name, index) => (
              <span key={index}>{name}</span>
            ))}
        </FirstName>
      </animated.div>

      <animated.div style={surnameSpring}>
        <Surname theme={currentTheme} isMobile={isMobile}>
          {Array(50)
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
