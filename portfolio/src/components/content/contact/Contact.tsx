import { GmailIcon } from "../../../shared/assets/icons/Icons";
import React from "react";
import ContentSection from "../../../shared/components/contentSection/ContentSection";
import { EmailContainer, Email, Container } from "./contact.styles";
import { BlurredRectangle } from "../../../shared/components/BlurredRectangle";

const Contact = () => {
  return (
    <ContentSection title="Get in touch" subTitle="Let's create together">
      <Container>
        <BlurredRectangle top={-100} left={-800} />
        <EmailContainer>
          <GmailIcon />
          <Email>wolanski055@gmail.com</Email>
        </EmailContainer>
      </Container>
    </ContentSection>
  );
};

export default Contact;
