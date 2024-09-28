import React, { forwardRef } from "react";
import { ContentSectionWrapper } from "./contentSection.styles";
import SectionHeader from "./sectionHeader/SectionHeader";

interface Props {
  title: string;
  children: JSX.Element;
  subTitle: string;
  isVisible: boolean;
  moveFromLeft?: boolean;
}
const ContentSection = forwardRef<HTMLDivElement, Props>(
  ({ title, subTitle, children, isVisible, moveFromLeft }, ref) => {
    return (
      <ContentSectionWrapper
        ref={ref}
        isVisible={isVisible}
        moveFromLeft={moveFromLeft}
      >
        <SectionHeader title={title} subTitle={subTitle} />
        {children}
      </ContentSectionWrapper>
    );
  }
);

export default ContentSection;
