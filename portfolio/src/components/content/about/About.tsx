import React, { useRef } from "react";
import { Container, Description } from "./about.styles";
import Skills from "./skills/Skills";
import ContentSection from "shared/components/contentSection/ContentSection";
import CircledButton from "shared/components/CircledButton";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import { openResume } from "shared/helpers/openResume";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const About = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const aboutRef = useRef(null);
  const { isVisible } = useIntersectionObserver(aboutRef);

  return (
    <ContentSection
      isVisible={isVisible}
      ref={aboutRef}
      title={translate("aboutTitle")}
      subTitle={translate("aboutSubtitle")}
    >
      <Container id={sectionIds.about}>
        <BlurredRectangle top={-140} right={-600} theme={currentTheme} />
        <Description theme={currentTheme}>
          {translate("aboutDescription")}
        </Description>

        <Skills />
        <CircledButton
          onClick={openResume}
          title={translate("downloadResume")}
          strokeColor={currentTheme.palette.primary.main}
        />
      </Container>
    </ContentSection>
  );
};

export default About;
