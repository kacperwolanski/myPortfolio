import React from "react";
import { ContentSectionWrapper } from "./contentSection.styles";
import SectionHeader from "./sectionHeader/SectionHeader";

interface Props {
  title: string;

  children: JSX.Element;
}
const ContentSection = ({ title, children }: Props) => {
  return (
    <ContentSectionWrapper>
      <SectionHeader title={title} />
      {children}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
