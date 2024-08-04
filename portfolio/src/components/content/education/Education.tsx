import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import SubPointsList from "shared/components/SubPointsList";
import SubPointsItem from "shared/components/SubPointsItem";
import { education } from "shared/constants/education";
const Education = () => {
  return (
    <ContentSection index="02" title="My Education">
      <div>
        <SubPointsItem
          header={education.institution}
          subtitle2={`${education.degree} in  ${education.field}`}
          startDate={education.startDate}
          endDate={education.endDate}
          headerUrl={education.schoolUrl}
        />
        <SubPointsList subPoints={education.skillsSubPoints} />
      </div>
    </ContentSection>
  );
};

export default Education;
