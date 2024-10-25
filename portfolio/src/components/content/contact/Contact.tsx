import { GmailIcon } from "shared/assets/icons/Icons";
import React, { useRef } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import { EmailContainer, Email, Container, MainLink } from "./contact.styles";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { introductionData } from "shared/constants/introduction";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Contact = () => {
  const { email } = introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const projectsRef = useRef(null);
  const { isVisible } = useIntersectionObserver(projectsRef);
  return (
    <ContentSection
      isVisible={isVisible}
      ref={projectsRef}
      title={translate("contactTitle")}
      subTitle={translate("contactSubtitle")}
    >
      <Container id={sectionIds.contact}>
        <BlurredRectangle top={100} left={-500} theme={currentTheme} />
        <MainLink href={`mailto:${email}`}>
          <EmailContainer theme={currentTheme}>
            <GmailIcon />
            <Email theme={currentTheme}>{email}</Email>
          </EmailContainer>
        </MainLink>
      </Container>
    </ContentSection>
  );
};

export default Contact;
