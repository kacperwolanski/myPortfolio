import { GmailIcon } from "shared/assets/icons/Icons";
import React, { useRef, useState } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import {
  EmailContainer,
  Email,
  Container,
  MainLink,
  PhoneNumber,
  PageContainer,
  CopyButton,
  PhoneNumberContainer,
  CopyInfo,
} from "./contact.styles";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { introductionData } from "shared/constants/introduction";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import FloatingMac from "shared/components/animatedElements/FloatingMac";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ContactContent = () => {
  const { email, phoneNumber } = introductionData;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const [displayCopyInfo, setDisplayCopyInfo] = useState(false);

  const contactRef = useRef(null);
  const { isVisible } = useIntersectionObserver(contactRef);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);

    setDisplayCopyInfo(true);
    setTimeout(() => {
      setDisplayCopyInfo(false);
    }, 3000);
  };

  const htmlPageContent = (
    <PageContainer theme={currentTheme}>
      <MainLink href={`mailto:${email}`}>
        <EmailContainer theme={currentTheme}>
          <GmailIcon />
          <Email theme={currentTheme}>{email}</Email>
        </EmailContainer>
      </MainLink>
      <PhoneNumberContainer
        theme={currentTheme}
        onClick={() => copyToClipboard(phoneNumber)}
      >
        <PhoneNumber theme={currentTheme}>{phoneNumber}</PhoneNumber>
        <CopyButton theme={currentTheme}>
          <ContentCopyIcon />
        </CopyButton>
      </PhoneNumberContainer>
      <CopyInfo isVisible={displayCopyInfo}>
        Numer skopiowano do schowka
      </CopyInfo>
    </PageContainer>
  );

  return (
    <ContentSection
      isVisible={isVisible}
      ref={contactRef}
      title={translate("contactTitle")}
      subTitle={translate("contactSubtitle")}
      contentWidth={95}
    >
      <Container id={sectionIds.contact}>
        <BlurredRectangle top={100} left={-500} theme={currentTheme} />
        <FloatingMac htmlPageContent={htmlPageContent} />
      </Container>
    </ContentSection>
  );
};

export default ContactContent;
