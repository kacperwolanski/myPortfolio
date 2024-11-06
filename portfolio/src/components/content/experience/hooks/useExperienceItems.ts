import { useTranslation } from "react-i18next";

const useExperienceItems = () => {
  const { t: translate } = useTranslation();

  const turms = {
    startDate: translate("turmsStartDate"),
    endDate: translate("turmsEndDate"),
    company: "Turms Ride",
    position: translate("turmsPosition"),
    companyUrl: "https://www.turms.io/",
    skillsSubPoints: [
      translate("turmsSkill1"),
      translate("turmsSkill2"),
      translate("turmsSkill3"),
      translate("turmsSkill4"),
      translate("turmsSkill5"),
    ],
  };
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

  const experienceItems = [turms, codespot, sas];
  return { experienceItems };
};

export default useExperienceItems;
