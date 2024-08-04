import React from "react";
import { ContentSectionWrapper } from "./contentSection.styles";
import SectionHeader from "./sectionHeader/SectionHeader";

interface Props {
  title: string;
  index: string;
  children: JSX.Element;
}
const ContentSection = ({ title, index, children }: Props) => {
  return (
    <ContentSectionWrapper>
      <SectionHeader title={title} index={index} />
      {children}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
