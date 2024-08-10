import React, { Suspense, lazy } from "react";
import {
  Description,
  IntroductionContainer,
  NameContainer,
  SubTitle,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import CircledButton from "shared/components/CircledButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import ProfileImageSkeleton from "shared/components/skeletons/ProfileImageSkeleton";
import ContactMeButton from "components/topMenu/ContactMeButton";
const ProfileImage = lazy(() => import("./ProfileImage"));

const Introduction = () => {
  const { name, jobTitle } = introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();

  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-100} left={-400} theme={currentTheme} />
      <Suspense fallback={<ProfileImageSkeleton />}>
        <ProfileImage />
      </Suspense>
      <NameContainer theme={currentTheme}>{name}</NameContainer>
      <SubTitle theme={currentTheme}>{jobTitle}</SubTitle>
      <Description theme={currentTheme}>
        {translate("introduction")}
      </Description>
      <ContactMeButton />
    </IntroductionContainer>
  );
};

export default Introduction;
