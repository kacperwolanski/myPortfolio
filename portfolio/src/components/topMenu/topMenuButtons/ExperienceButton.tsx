import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
const ExperienceButton = () => {
  const { t: translate } = useTranslation();
  return (
    <TopMenuButton
      title={translate("experienceButton")}
      sectionId={sectionIds.experience}
      extraScrollOffset
    />
  );
};

export default ExperienceButton;
