import React, { lazy, Suspense } from "react";
import MyServiceSkeleton from "shared/components/skeletons/MyServiceSkeleton";

const MyServiceContent = lazy(() => import("../MyServiceContent"));

const MyService = () => {
  return (
    <Suspense fallback={<MyServiceSkeleton />}>
      <MyServiceContent />
    </Suspense>
  );
};

export default MyService;
