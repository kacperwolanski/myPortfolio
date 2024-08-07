import React from "react";
import { ResumeContainer } from "./resume.styles";
import { useThemeStore } from "theme/useThemeStore";

const Resume: React.FC = () => {
  const { currentTheme } = useThemeStore();
  const handleOpenPdf = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/KacperWolanski.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <ResumeContainer theme={currentTheme} onClick={handleOpenPdf}>
      Resume
    </ResumeContainer>
  );
};

export default Resume;
