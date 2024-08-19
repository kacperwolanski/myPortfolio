import { useTranslation } from "react-i18next";

const useExperienceItems = () => {
  const { t: translate } = useTranslation();
  const codespot = {
    startDate: translate("codespotStartDate"),
    endDate: translate("codespotEndDate"),
    company: "Codespot",
    position: translate("codespotPosition"),
    companyUrl: "https://www.codespot.io/",
    skillsSubPoints: [
      translate("codespotSkill1"),
      translate("codespotSkill2"),
      translate("codespotSkill3"),
      translate("codespotSkill4"),
      translate("codespotSkill5"),
      translate("codespotSkill6"),
    ],
  };
  const sas = {
    startDate: translate("sasStartDate"),
    endDate: translate("sasEndDate"),
    company: "SAS Institute",
    position: translate("sasPosition"),
    companyUrl: "https://www.sas.com/pl_pl/home.html",
    skillsSubPoints: [
      translate("sasSkill1"),
      translate("sasSkill2"),
      translate("sasSkill3"),
    ],
  };

  const experienceItems = [codespot, sas];
  return { experienceItems };
};

export default useExperienceItems;
