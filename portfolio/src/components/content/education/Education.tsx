import React, { lazy, Suspense } from "react";
import EducationSkeleton from "shared/components/skeletons/SectionSkeleton";

const EducationContent = lazy(() => import("./components/EducationContent"));

const Education = () => {
  return (
    <Suspense fallback={<EducationSkeleton />}>
      <EducationContent />
    </Suspense>
  );
};

export default Education;
