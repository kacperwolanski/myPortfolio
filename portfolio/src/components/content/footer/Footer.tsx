import TopMenuLogo from "../../../components/topMenu/topMenuLogo/TopMenuLogo";
import TopMenuButtons from "../../../components/topMenu/topMenuButtons/TopMenuButtons";
import React from "react";
import SocialMedias from "../../../components/socialMedias/SocialMedias";
import { Container, LogoButtons, Signature } from "./footer.styles";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  return (
    <Container theme={currentTheme}>
      <LogoButtons>
        <TopMenuLogo />
        <TopMenuButtons />
        <SocialMedias />
      </LogoButtons>
      <Signature theme={currentTheme}>{translate("signature")}</Signature>
    </Container>
  );
};

export default Footer;
