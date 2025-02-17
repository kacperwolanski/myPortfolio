import React, { lazy, Suspense } from "react";
import TechnologiesSkeleton from "shared/components/skeletons/TechnologiesSkeleton";

const TechnologiesContent = lazy(
  () => import("./components/TechnologiesContent")
);

const Technologies = () => {
  return (
    <Suspense fallback={<TechnologiesSkeleton />}>
      <TechnologiesContent />
    </Suspense>
  );
};

export default Technologies;
