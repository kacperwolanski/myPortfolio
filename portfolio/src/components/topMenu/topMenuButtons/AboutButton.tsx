import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
const AboutButton = () => {
  const { t: translate } = useTranslation();
  return (
    <TopMenuButton
      title={translate("aboutButton")}
      sectionId={sectionIds.about}
      extraScrollOffset
    />
  );
};

export default AboutButton;
