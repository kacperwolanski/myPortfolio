import React from "react";
import { ResumeContainer } from "./resume.styles";

const Resume: React.FC = () => {
  const handleOpenPdf = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/KacperWolanski.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return <ResumeContainer onClick={handleOpenPdf}>Resume</ResumeContainer>;
};

export default Resume;
