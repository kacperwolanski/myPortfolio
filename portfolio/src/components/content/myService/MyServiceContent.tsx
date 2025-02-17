import { useTranslation } from "react-i18next";
import ContentSection from "shared/components/contentSection/ContentSection";
import { useRef } from "react";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import SingleService from "./components/SingleService";
import { services } from "shared/constants/services";
import { Service } from "shared/constants/types";
import { Container, Description, ServicesContainer } from "./service.styles";
import { useThemeStore } from "theme/useThemeStore";
import { sectionIds } from "shared/constants/sectionsIds";

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
    >
      <Container id={sectionIds.service}>
        <Description theme={currentTheme}>
          {translate("serviceDescription")}
        </Description>

        <ServicesContainer theme={currentTheme}>
          {services.map((service: Service) => (
            <SingleService key={service.title} service={service} />
          ))}
        </ServicesContainer>
      </Container>
    </ContentSection>
  );
};

export default MyServiceContent;
