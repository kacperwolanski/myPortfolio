import React, { lazy, Suspense } from "react";
import EducationSkeleton from "shared/components/skeletons/EducationSkeleton";

const EducationContent = lazy(() => import("./components/EducationContent"));

const Education = () => {
  return (
    <Suspense fallback={<EducationSkeleton />}>
      <EducationContent />
    </Suspense>
  );
};

export default Education;
