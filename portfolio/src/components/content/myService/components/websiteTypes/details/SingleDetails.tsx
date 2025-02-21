import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { WebsitesDetails } from "../websiteTypesData";
import {
  DescriptionImageContainer,
  DetailsContainer,
} from "../websiteTypes.styles";
import SubHeader from "./SubHeader";
import FeaturesTable from "../../serviceProducts/FeaturesTable";
import TitleDescription from "./TitleDescription";
import { useThemeStore } from "theme/useThemeStore";
import ProductImage from "./ProductImage";

interface Props {
  details: WebsitesDetails;
  isFeaturesFirst?: boolean;
}

const SingleDetails = ({ details, isFeaturesFirst }: Props) => {
  const { title, description, features, example, linkToPage, hoverTitle } =
    details;
  const { t: translate } = useTranslation();
  const { currentTheme } = useThemeStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ opacity, scale }, set] = useSpring(() => ({
    opacity: 0,
    scale: 0.1,
    config: { mass: 1, tension: 100, friction: 50 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / windowHeight)
      );

      set({
        opacity: scrollProgress,
        scale: 0.9 + scrollProgress * 0.18,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

  return (
    <animated.div ref={containerRef} style={{ opacity, scale }}>
      <DetailsContainer theme={currentTheme} id={title}>
        {isFeaturesFirst ? (
          <>
            <div>
              <SubHeader title={translate("productFeatures")} />
              <FeaturesTable
                features={features.map((fet) => translate(fet))}
                withBorders
                animationFromLeft={isFeaturesFirst}
              />
            </div>
            <DescriptionImageContainer>
              <TitleDescription title={title} description={description} />
              <>
                <SubHeader title={translate("productExample")} />
                <ProductImage
                  examplePath={example}
                  linkToPage={linkToPage}
                  hoverTitle={hoverTitle}
                />
              </>
            </DescriptionImageContainer>
          </>
        ) : (
          <>
            <DescriptionImageContainer>
              <TitleDescription title={title} description={description} />
              <div style={{ maxWidth: "800px" }}>
                <SubHeader title={translate("productExample")} />
                <ProductImage
                  examplePath={example}
                  linkToPage={linkToPage}
                  hoverTitle={hoverTitle}
                />
              </div>
            </DescriptionImageContainer>
            <div>
              <SubHeader title={translate("productFeatures")} />
              <FeaturesTable
                features={features.map((fet) => translate(fet))}
                withBorders
                animationFromLeft={isFeaturesFirst}
              />
            </div>
          </>
        )}
      </DetailsContainer>
    </animated.div>
  );
};

export default SingleDetails;
