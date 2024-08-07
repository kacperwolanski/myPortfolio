import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import JobAccordion from "shared/components/jobAccordion/JobAccordion";
import SubPointsItem from "shared/components/ExperienceItem";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import { workExperience } from "shared/constants/workExperience";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { ExperienceContainer } from "./experience.styles";
import { sectionIds } from "shared/constants/sectionsIds";

const Experience = () => {
  return (
    <ContentSection title="Experience" subTitle="Where did I worked">
      <ExperienceContainer id={sectionIds.experience}>
        <BlurredRectangle top={0} left={900} />
        <JobAccordion
          elements={workExperience.map((work) => {
            return {
              title: work.company,
              content: (
                <div>
                  <SubPointsItem
                    header={`${work.position}`}
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
      </ExperienceContainer>
    </ContentSection>
  );
};

export default Experience;
