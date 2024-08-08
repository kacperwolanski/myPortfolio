import CircledButton from "shared/components/CircledButton";
import React from "react";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
const ContactMeButton = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const handleClick = () => {
    scrollToSection(sectionIds.contact);
  };

  return (
    <CircledButton
      title={translate("contactMeButton")}
      onClick={handleClick}
      strokeColor={currentTheme.palette.primary.main}
    />
  );
};

export default ContactMeButton;
