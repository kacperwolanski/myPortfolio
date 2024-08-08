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
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { name, jobTitle, darkProfileImgUrl, lightProfileImgUrl } =
    introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const themeIsLight = currentTheme === lightTheme;

  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-40} left={-400} theme={currentTheme} />
      <ProfileImage
        src={themeIsLight ? lightProfileImgUrl : darkProfileImgUrl}
      />
      <NameContainer theme={currentTheme}>{name}</NameContainer>
      <SubTitle theme={currentTheme}>{jobTitle}</SubTitle>
      <Description theme={currentTheme}>
        {translate("introduction")}
      </Description>
      <CircledButton
        title={translate("contactMeButton")}
        strokeColor={currentTheme.palette.primary.main}
      />
    </IntroductionContainer>
  );
};

export default Introduction;
