import React from "react";
import {
  Description,
  IntroductionContainer,
  NameContainer,
  ProfileImage,
  SubTitle,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import CircledButton from "shared/components/CircledButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";

const Introduction = () => {
  const { name, subTitle, description, darkProfileImgUrl, lightProfileImgUrl } =
    introductionData;
  const { currentTheme } = useThemeStore();
  const themeIsLight = currentTheme === lightTheme;
  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-40} left={-400} theme={currentTheme} />
      <ProfileImage
        src={themeIsLight ? lightProfileImgUrl : darkProfileImgUrl}
      />
      <NameContainer theme={currentTheme}>{name}</NameContainer>
      <SubTitle theme={currentTheme}>{subTitle}</SubTitle>
      <Description theme={currentTheme}>{description}</Description>
      <CircledButton
        title="Contact Me"
        strokeColor={currentTheme.palette.primary.main}
      />
    </IntroductionContainer>
  );
};

export default Introduction;
