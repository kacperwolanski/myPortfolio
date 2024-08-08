import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import ExperienceItem from "shared/components/experienceItem/ExperienceItem";
import { education } from "shared/constants/education";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { EducationContainer } from "./education.styles";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
const Education = () => {
  const { currentTheme } = useThemeStore();
  return (
    <ContentSection title="Education" subTitle="Journey for knowledge">
      <EducationContainer id={sectionIds.education}>
        <BlurredRectangle top={-200} left={-900} theme={currentTheme} />
        {education.map((edu) => {
          return (
            <>
              <ExperienceItem
                header={edu.institution}
                subtitle2={`${edu.degree} in  ${edu.field}`}
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
