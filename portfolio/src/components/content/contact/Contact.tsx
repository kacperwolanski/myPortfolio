import { GmailIcon } from "shared/assets/icons/Icons";
import React, { useRef } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import {
  EmailContainer,
  Email,
  Container,
  MainLink,
  PhoneNumber,
} from "./contact.styles";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { introductionData } from "shared/constants/introduction";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import FloatingMac from "shared/components/animatedElements/FloatingMac";

const Contact = () => {
  const { email } = introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const contactRef = useRef(null);
  const { isVisible } = useIntersectionObserver(contactRef);

  const htmlPageContent = (
    <div
      style={{
        background: `rgba(${currentTheme.palette.custom.background})`,
        borderRadius: "20px",

        padding: "5px",
      }}
    >
      <MainLink href={`mailto:${email}`}>
        <EmailContainer theme={currentTheme}>
          <GmailIcon />
          <Email theme={currentTheme}>{email}</Email>
        </EmailContainer>
      </MainLink>
      <PhoneNumber theme={currentTheme}>+48 796 082 796</PhoneNumber>
    </div>
  );
  return (
    <ContentSection
      isVisible={isVisible}
      ref={contactRef}
      title={translate("contactTitle")}
      subTitle={translate("contactSubtitle")}
    >
      <Container id={sectionIds.contact}>
        <BlurredRectangle top={100} left={-500} theme={currentTheme} />
        <FloatingMac htmlPageContent={htmlPageContent} />
      </Container>
    </ContentSection>
  );
};

export default Contact;
