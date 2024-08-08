import { useTranslation } from "react-i18next";

const useEducationItems = () => {
  const { t: translate } = useTranslation();
  const pwEdu = {
    startDate: translate("educationStartDate"),
    endDate: translate("educationEndDate"),
    institution: translate("educationSchool"),
    degree: translate("educationDegree"),
    field: translate("educationField"),
    schoolUrl: "https://www.pw.edu.pl/",
    skillsSubPoints: [
      translate("educationSkill1"),
      translate("educationSkill2"),
      translate("educationSkill3"),
      translate("educationSkill4"),
    ],
  };
  const educationItems = [pwEdu];
  return { educationItems };
};

export default useEducationItems;
