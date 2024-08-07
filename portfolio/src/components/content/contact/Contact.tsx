import { GmailIcon } from "shared/assets/icons/Icons";
import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import { EmailContainer, Email, Container, MainLink } from "./contact.styles";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { introductionData } from "shared/constants/introduction";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";

const Contact = () => {
  const { email } = introductionData;
  const { currentTheme } = useThemeStore();
  return (
    <ContentSection title="Get in touch" subTitle="Let's create together">
      <Container id={sectionIds.contact}>
        <BlurredRectangle top={-600} left={-800} theme={currentTheme} />
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
