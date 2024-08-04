import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import HorizontalAccordion from "shared/components/HorizontalAccordion";
import SubPointsItem from "shared/components/SubPointsItem";
import SubPointsList from "shared/components/SubPointsList";
import { workExperience } from "shared/constants/workExperience";

const Experience = () => {
  return (
    <ContentSection index="03" title="Experience">
      <HorizontalAccordion
        elements={workExperience.map((work) => {
          return {
            title: work.company,
            content: (
              <div>
                <SubPointsItem
                  header={work.position}
                  subtitle2={work.company}
                  startDate={work.startDate}
                  endDate={work.endDate}
                  headerUrl={work.companyUrl}
                />
                <SubPointsList subPoints={work.skillsSubPoints} />
              </div>
            ),
          };
        })}
      />
    </ContentSection>
  );
};

export default Experience;
