import React, { forwardRef } from "react";
import { ContentSectionWrapper } from "./contentSection.styles";
import SectionHeader from "./sectionHeader/SectionHeader";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  title: string;
  children: JSX.Element;
  subTitle: string;
  isVisible: boolean;
  threshold?: number;
}
const ContentSection = forwardRef<HTMLDivElement, Props>(
  ({ title, subTitle, children, isVisible, threshold }, ref) => {
    const containerSprings = useSpring({
      from: { y: 300, opacity: 0 },
      to: { y: isVisible ? 0 : 300, opacity: isVisible ? 1 : 0 },
      config: { duration: 1000 },
      threshold: threshold,
    });

    return (
      <ContentSectionWrapper ref={ref}>
        <animated.div style={containerSprings}>
          <SectionHeader title={title} subTitle={subTitle} />
          {children}
        </animated.div>
      </ContentSectionWrapper>
    );
  }
);

export default ContentSection;
