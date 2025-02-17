import React, { lazy, Suspense } from "react";
import ExperienceSkeleton from "shared/components/skeletons/ExperienceSkeleton";

const ExperienceContent = lazy(() => import("./ExperienceContent"));

const Experience = () => {
  return (
    <Suspense fallback={<ExperienceSkeleton />}>
      <ExperienceContent />
    </Suspense>
  );
};

export default Experience;
