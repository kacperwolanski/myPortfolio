import CircledButton from "shared/components/CircledButton";
import React from "react";
import theme from "theme/theme";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { sectionIds } from "shared/constants/sectionsIds";

const ContactMeButton = () => {
  const handleClick = () => {
    scrollToSection(sectionIds.contact);
  };
  return (
    <CircledButton
      title="Contact Me"
      onClick={handleClick}
      strokeColor={theme.palette.primary.main}
    />
  );
};

export default ContactMeButton;
