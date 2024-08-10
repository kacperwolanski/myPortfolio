import TopMenuLogo from "../../../components/topMenu/topMenuLogo/TopMenuLogo";
import TopMenuButtons from "../../../components/topMenu/topMenuButtons/TopMenuButtons";
import React from "react";
import {
  Container,
  LogoButtons,
  Signature,
  SocialMediasWrapper,
} from "./footer.styles";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import SocialMediasElements from "components/socialMedias/SocialMediasElements";

const Footer = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  return (
    <Container theme={currentTheme}>
      <LogoButtons theme={currentTheme}>
        <TopMenuLogo />
        <TopMenuButtons />

        <SocialMediasWrapper theme={currentTheme}>
          <SocialMediasElements />
        </SocialMediasWrapper>
      </LogoButtons>
      <Signature theme={currentTheme}>{translate("signature")}</Signature>
    </Container>
  );
};

export default Footer;
