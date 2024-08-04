import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";
import { Box } from "@mui/material";
import ContentSection from "shared/components/contentSection/ContentSection";
const Education = () => {
  const education = {
    startDate: "October 2019",
    endDate: "December 2023",
    institution: "Warsaw University Of Technology",
    degree: "Bachelor's Degree",
    field: "Automation & Robotics",
  };

  return (
    <ContentSection index="02" title="My Education">
      <Box display="flex" justifyContent="left">
        <div>
          <h3>{education.institution}</h3>
          <p>{education.field}</p>
          <span>{education.degree}</span>
        </div>

        <Timeline sx={{ maxWidth: "400px" }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{education.endDate}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>{education.startDate}</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </ContentSection>
  );
};

export default Education;
