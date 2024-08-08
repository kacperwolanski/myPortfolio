import React from "react";
import { useTranslation } from "react-i18next";
import TopMenuButton from "components/topMenu/topMenuButtons/topMenuButton/TopMenuButton";
const Resume: React.FC = () => {
  const { t: translate } = useTranslation();
  const handleOpenPdf = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/KacperWolanski.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div onClick={handleOpenPdf}>
      <TopMenuButton title={translate("resumeButton")} />
    </div>
  );
};

export default Resume;
