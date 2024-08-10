import React from "react";
import { useTranslation } from "react-i18next";
import TopMenuButton from "components/topMenu/topMenuButtons/topMenuButton/TopMenuButton";
import { openResume } from "shared/helpers/openResume";
const Resume: React.FC = () => {
  const { t: translate } = useTranslation();
  return (
    <div onClick={openResume}>
      <TopMenuButton title={translate("resumeButton")} />
    </div>
  );
};

export default Resume;
