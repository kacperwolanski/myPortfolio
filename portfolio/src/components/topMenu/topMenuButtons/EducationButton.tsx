import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
const EducationButton = () => {
  const { t: translate } = useTranslation();
  return (
    <TopMenuButton
      title={translate("educationButton")}
      sectionId={sectionIds.education}
    />
  );
};

export default EducationButton;
