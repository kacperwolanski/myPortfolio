import React from "react";
import { ContentSectionWrapper } from "./contentSection.styles";
import SectionHeader from "./sectionHeader/SectionHeader";

interface Props {
  title: string;
  children: JSX.Element;
  subTitle: string;
}
const ContentSection = ({ title, subTitle, children }: Props) => {
  return (
    <ContentSectionWrapper>
      <SectionHeader title={title} subTitle={subTitle} />
      {children}
    </ContentSectionWrapper>
  );
};

export default ContentSection;
