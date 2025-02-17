import React, { useRef } from "react";
import { useThemeStore } from "theme/useThemeStore";
import {
  IconWrapper,
  ServiceDescription,
  ServiceTitle,
  SingleServiceContainer,
} from "../service.styles";
import { Service } from "shared/constants/types";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { sectionIds } from "shared/constants/sectionsIds";
import { animated, useSpring } from "@react-spring/web";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

interface Props {
  service: Service;
}
const SingleService = ({ service }: Props) => {
  const { icon, title, description } = service;
  const containerRef = useRef(null);

  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();

  const [hoverStyle, setHoverStyle] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = () => setHoverStyle({ scale: 1.2 });
  const handleMouseLeave = () => setHoverStyle({ scale: 1 });

  const handleServiceClick = () => {
    scrollToSection(sectionIds.contact);
  };

  return (
    <SingleServiceContainer
      ref={containerRef}
      theme={currentTheme}
      onClick={handleServiceClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconWrapper>
        <animated.div
          style={{
            transform: hoverStyle.scale.interpolate((s) => `scale(${s})`),
          }}
        >
          {icon}
        </animated.div>
      </IconWrapper>

      <div>
        <ServiceTitle theme={currentTheme}>{translate(title)}</ServiceTitle>
        <ServiceDescription theme={currentTheme}>
          {translate(description)}
        </ServiceDescription>
      </div>
    </SingleServiceContainer>
  );
};

export default SingleService;
