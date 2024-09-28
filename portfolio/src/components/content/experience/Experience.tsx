import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import JobAccordion from "shared/components/jobAccordion/JobAccordion";
import SubPointsItem from "shared/components/experienceItem/ExperienceItem";
import SubPointsList from "shared/components/subPointsList/SubPointsList";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { ExperienceContainer } from "./experience.styles";
import { sectionIds } from "shared/constants/sectionsIds";
import { useThemeStore } from "theme/useThemeStore";
import { useTranslation } from "react-i18next";
import useExperienceItems from "./hooks/useExperienceItems";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const Experience = () => {
  const { currentTheme } = useThemeStore();
  const { t: translate, i18n } = useTranslation();
  const { experienceItems } = useExperienceItems();
  const { ref, isVisible } = useIntersectionObserver();

  if (!experienceItems.length) return <></>;
  return (
    <ContentSection
      isVisible={isVisible}
      ref={ref}
      title={translate("experienceTitle")}
      subTitle={translate("experienceSubtitle")}
      moveFromLeft={true}
    >
      <ExperienceContainer id={sectionIds.experience}>
        <BlurredRectangle top={0} right={-300} theme={currentTheme} />
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
