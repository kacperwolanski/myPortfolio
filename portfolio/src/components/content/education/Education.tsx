import React, { useRef } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import ExperienceItem from "shared/components/experienceItem/ExperienceItem";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { EducationContainer } from "./education.styles";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useEducationItems from "./hooks/useEducationItems";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Education = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const eduRef = useRef(null);
  const { educationItems } = useEducationItems();
  const { isVisible } = useIntersectionObserver(eduRef);
  return (
    <ContentSection
      isVisible={isVisible}
      ref={eduRef}
      title={translate("educationTitle")}
      subTitle={translate("educationSubtitle")}
    >
      <EducationContainer id={sectionIds.education}>
        <BlurredRectangle top={-200} left={1000} theme={currentTheme} />
        {educationItems.map((edu) => {
          return (
            <>
              <ExperienceItem
                header={edu.institution}
                subtitle2={`${edu.degree} ${translate("educationFieldWord")} ${
                  edu.field
                }`}
                startDate={edu.startDate}
                endDate={edu.endDate}
                headerUrl={edu.schoolUrl}
              />
              <SubPointsList subPoints={edu.skillsSubPoints} />
            </>
          );
        })}
      </EducationContainer>
    </ContentSection>
  );
};

export default Education;
