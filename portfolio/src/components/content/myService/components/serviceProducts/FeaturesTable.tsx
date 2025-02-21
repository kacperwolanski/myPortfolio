import React, { useRef } from "react";
import SingleFeature from "./SingleFeature";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import useIsMobile from "shared/hooks/useIsMobile";

interface Props {
  features: string[];
  withBorders?: boolean;
  animationFromLeft?: boolean;
}
const FeaturesTable = ({ features, withBorders, animationFromLeft }: Props) => {
  const containerRef = useRef(null);
  const { isVisible } = useIntersectionObserver(containerRef);
  const isMobile = useIsMobile();
  return (
    <div
      style={{ width: "100%", minWidth: isMobile ? "" : "600px" }}
      ref={containerRef}
    >
      {features.map((feature: string, index: number) => (
        <SingleFeature
          key={feature}
          elementIndex={index + 1}
          elementTitle={feature}
          isLast={index === features.length - 1}
          withBorders={withBorders}
          isVisible={isVisible}
          animationFromLeft={animationFromLeft}
        />
      ))}
    </div>
  );
};

export default FeaturesTable;
