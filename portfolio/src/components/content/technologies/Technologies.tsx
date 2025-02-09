import { useTranslation } from "react-i18next";
import ContentSection from "shared/components/contentSection/ContentSection";
import { myTechnologiesList } from "shared/constants/technologies";
import TechnologiesList from "./components/TechnologiesList";

const Technologies = () => {
  const { t: translate } = useTranslation();

  const multipliedTechList = [
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
    ...myTechnologiesList,
  ];
  return (
    <ContentSection
      isVisible={true}
      ref={null}
      title={translate("technologiesTitle")}
      subTitle={translate("technologiesSubtitle")}
    >
      <TechnologiesList techList={multipliedTechList} />
    </ContentSection>
  );
};

export default Technologies;
