import React from "react";
import TopMenuButton from "./topMenuButton/TopMenuButton";
import { sectionIds } from "shared/constants/sectionsIds";
import { useTranslation } from "react-i18next";

const HomeButton = () => {
  const { t: translate } = useTranslation();

  return (
    <TopMenuButton
      title={translate("homeButton")}
      sectionId={sectionIds.home}
    />
  );
};

export default HomeButton;
