import React, { useEffect } from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import JobAccordion from "shared/components/jobAccordion/JobAccordion";
import SubPointsItem from "shared/components/experienceItem/ExperienceItem";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import { workExperience } from "shared/constants/workExperience";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { ExperienceContainer } from "./experience.styles";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useExperienceItems from "./hooks/useExperienceItems";

const Experience = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate, i18n } = useTranslation();
  const { experienceItems } = useExperienceItems();
  console.log(experienceItems);
  if (!experienceItems.length) return <></>;

  return (
    <ContentSection
      title={translate("experienceTitle")}
      subTitle={translate("experienceSubtitle")}
    >
      <ExperienceContainer id={sectionIds.experience}>
        <BlurredRectangle top={0} left={900} theme={currentTheme} />
        <JobAccordion
          key={i18n.language}
          elements={experienceItems.map((work) => {
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
