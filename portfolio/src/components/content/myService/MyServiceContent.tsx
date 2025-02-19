import { useTranslation } from "react-i18next";
import ContentSection from "shared/components/contentSection/ContentSection";
import { useRef } from "react";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import { Container, Description } from "./service.styles";
import { useThemeStore } from "theme/useThemeStore";
import { sectionIds } from "shared/constants/sectionsIds";
import ColabProcess from "./components/ColabProcess";
import ServiceProducts from "./components/serviceProducts/ServiceProducts";

const MyServiceContent = () => {
  const { t: translate } = useTranslation();
  const serviceRef = useRef(null);
  const { isVisible } = useIntersectionObserver(serviceRef);
  const { currentTheme } = useThemeStore();

  return (
    <ContentSection
      isVisible={isVisible}
      ref={serviceRef}
      title={translate("serviceTitle")}
      subTitle={translate("serviceSubtitle")}
      contentWidth={90}
    >
      <Container id={sectionIds.service}>
        <Description theme={currentTheme}>
          {translate("serviceDescription")}
        </Description>

        <ColabProcess />
        <ServiceProducts />
      </Container>
    </ContentSection>
  );
};

export default MyServiceContent;
