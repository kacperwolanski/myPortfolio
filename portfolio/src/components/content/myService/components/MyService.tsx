import React, { lazy, Suspense } from "react";
import ProjectsSkeleton from "shared/components/skeletons/SectionSkeleton";

const MyServiceContent = lazy(() => import("../MyServiceContent"));

const MyService = () => {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <MyServiceContent />
    </Suspense>
  );
};

export default MyService;
