import React, { useRef } from "react";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import { TypeContainer } from "./websiteTypes.styles";
import { animated, useSpring } from "@react-spring/web";
import { WebsiteType } from "./websiteTypesData";
import { scrollToSection } from "shared/helpers/scrollToSection";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

interface Props {
  type: WebsiteType;
  index: number;
}
const SingleType = ({ type, index }: Props) => {
  const { title, background, icon, linkTo } = type;
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const containerRef = useRef(null);
  const { isVisible } = useIntersectionObserver(containerRef);
  const [hoverStyle, setHoverStyle] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));
  const springStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
    config: { duration: 1700 },
    delay: 400 + 200 * index,
  });
  const handleMouseEnter = () => setHoverStyle({ scale: 1.2 });
  const handleMouseLeave = () => setHoverStyle({ scale: 1 });
  const handleClick = () => scrollToSection(linkTo);
  return (
    <animated.div style={springStyle}>
      <TypeContainer
        theme={currentTheme}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        background={background}
        borderColor={currentTheme.palette.custom.borderGray}
        onClick={handleClick}
      >
        <animated.div
          style={{
            marginTop: "5px",
            transform: hoverStyle.scale.interpolate((s) => `scale(${s})`),
          }}
        >
          {icon}
        </animated.div>

        <span>{translate(title)}</span>
      </TypeContainer>
    </animated.div>
  );
};

export default SingleType;
