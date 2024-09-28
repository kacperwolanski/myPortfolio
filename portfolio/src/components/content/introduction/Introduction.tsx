import React, { Suspense, lazy } from "react";
import {
  ButtonWrapper,
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
import ProfileImageSkeleton from "shared/components/skeletons/ProfileImageSkeleton";
import ContactMeButton from "components/topMenu/ContactMeButton";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
const ProfileImage = lazy(() => import("./ProfileImage"));

const Introduction = () => {
  const { name, jobTitle } = introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();

  const { ref: nameRef, isVisible: isNameVisible } =
    useIntersectionObserver(300);
  const { ref: subtitleRef, isVisible: isSubtitleVisible } =
    useIntersectionObserver(500);
  const { ref: descriptionRef, isVisible: isDescriptionVisible } =
    useIntersectionObserver(1000);
  const { ref: buttonRef, isVisible: isButtonVisible } =
    useIntersectionObserver(1500);

  return (
    <IntroductionContainer id={sectionIds.home}>
      <BlurredRectangle top={-100} left={-400} theme={currentTheme} />
      <Suspense fallback={<ProfileImageSkeleton />}>
        <ProfileImage />
      </Suspense>
      <NameContainer
        theme={currentTheme}
        ref={nameRef}
        isVisible={isNameVisible}
      >
        {name}
      </NameContainer>
      <SubTitle
        theme={currentTheme}
        ref={subtitleRef}
        isVisible={isSubtitleVisible}
      >
        {jobTitle}
      </SubTitle>
      <Description
        theme={currentTheme}
        ref={descriptionRef}
        isVisible={isDescriptionVisible}
      >
        {translate("introduction")}
      </Description>
      <ButtonWrapper isVisible={isButtonVisible} ref={buttonRef}>
        <ContactMeButton />
      </ButtonWrapper>
    </IntroductionContainer>
  );
};

export default Introduction;
