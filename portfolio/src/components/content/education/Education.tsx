import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import ExperienceItem from "shared/components/ExperienceItem";
import { education } from "shared/constants/education";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { EducationContainer } from "./education.styles";
import { sectionIds } from "shared/constants/sectionsIds";
const Education = () => {
  return (
    <ContentSection title="Education" subTitle="Journey for knowledge">
      <EducationContainer id={sectionIds.education}>
        <BlurredRectangle top={-200} left={-900} />
        <ExperienceItem
          header={education.institution}
          subtitle2={`${education.degree} in  ${education.field}`}
          startDate={education.startDate}
          endDate={education.endDate}
          headerUrl={education.schoolUrl}
        />
        <SubPointsList subPoints={education.skillsSubPoints} />
      </EducationContainer>
    </ContentSection>
  );
};

export default Education;
