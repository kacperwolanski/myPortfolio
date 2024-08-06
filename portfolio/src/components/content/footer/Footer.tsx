import TopMenuLogo from "../../../components/topMenu/topMenuLogo/TopMenuLogo";
import TopMenuButtons from "../../../components/topMenu/topMenuButtons/TopMenuButtons";
import React from "react";
import SocialMedias from "../../../components/socialMedias/SocialMedias";
import { Container, LogoButtons, Signature } from "./footer.styles";

const Footer = () => {
  return (
    <Container>
      <LogoButtons>
        <TopMenuLogo />
        <TopMenuButtons />
        <SocialMedias />
      </LogoButtons>
      <Signature>created by Kacper Wolański</Signature>
    </Container>
  );
};

export default Footer;
