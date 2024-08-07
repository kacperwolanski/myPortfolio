import CircledButton from "shared/components/CircledButton";
import React from "react";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";

const ContactMeButton = () => {
  const { currentTheme } = useThemeStore();
  const handleClick = () => {
    scrollToSection(sectionIds.contact);
  };
  return (
    <CircledButton
      title="Contact Me"
      onClick={handleClick}
      strokeColor={currentTheme.palette.primary.main}
    />
  );
};

export default ContactMeButton;
