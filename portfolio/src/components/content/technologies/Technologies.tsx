import { useTranslation } from "react-i18next";
import ContentSection from "shared/components/contentSection/ContentSection";
import { myTechnologiesList } from "shared/constants/technologies";
import TechnologiesList from "./components/TechnologiesList";
import { useRef } from "react";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Technologies = () => {
  const { t: translate } = useTranslation();
  const techRef = useRef(null);
  const { isVisible } = useIntersectionObserver(techRef);

  const multipliedTechList = [
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
  ];
  return (
    <ContentSection
      isVisible={isVisible}
      ref={techRef}
      title={translate("technologiesTitle")}
      subTitle={translate("technologiesSubtitle")}
      contentWidth={90}
    >
      <TechnologiesList techList={multipliedTechList} />
    </ContentSection>
  );
};

export default Technologies;
