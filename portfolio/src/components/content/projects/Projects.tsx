import React from "react";
import ContentSection from "shared/components/contentSection/ContentSection";
import { projects } from "shared/constants/projects";
import Project from "./project/Project";
import { Box } from "@mui/material";

const Projects = () => {
  return (
    <ContentSection index="04" title="Projects">
      <div>
        {projects.map((project, index) => {
          const marginLeft = index % 2 === 0 ? "-100px" : "100px";
          return (
            <Box
              key={index}
              sx={{
                ml: marginLeft,
              }}
            >
              <Project project={project} />
            </Box>
          );
        })}
      </div>
    </ContentSection>
  );
};
export default Projects;
