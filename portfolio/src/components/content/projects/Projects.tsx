import React, { lazy, Suspense } from "react";
import ProjectsSkeleton from "shared/components/skeletons/ProjectsSkeleton";

const ProjectsContent = lazy(() => import("./ProjectsContent"));

const Projects = () => {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <ProjectsContent />
    </Suspense>
  );
};

export default Projects;
