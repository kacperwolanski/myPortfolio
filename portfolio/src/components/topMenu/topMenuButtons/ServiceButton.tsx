import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";
const ServiceButton = () => {
  const { t: translate } = useTranslation();
  return (
    <TopMenuButton
      title={translate("serviceButton")}
      sectionId={sectionIds.service}
      extraScrollOffset
    />
  );
};

export default ServiceButton;
