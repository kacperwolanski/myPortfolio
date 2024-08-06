import { GmailIcon } from "../../../shared/assets/icons/Icons";
import React from "react";
import ContentSection from "../../../shared/components/contentSection/ContentSection";
import { EmailContainer, Email, Container, MainLink } from "./contact.styles";
import { BlurredRectangle } from "../../../shared/components/BlurredRectangle";
import { introductionData } from "../../../shared/constants/introduction";

const Contact = () => {
  const { email } = introductionData;
  return (
    <ContentSection title="Get in touch" subTitle="Let's create together">
      <Container>
        <BlurredRectangle top={-600} left={-800} />
        <MainLink href={`mailto:${email}`}>
          <EmailContainer>
            <GmailIcon />
            <Email>{email}</Email>
          </EmailContainer>
        </MainLink>
      </Container>
    </ContentSection>
  );
};

export default Contact;
