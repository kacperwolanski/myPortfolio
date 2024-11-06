import React, { lazy, Suspense } from "react";
import FooterSkeleton from "shared/components/skeletons/SectionSkeleton";

const FooterContent = lazy(() => import("./FooterContent"));
const Footer = () => {
  return (
    <Suspense fallback={<FooterSkeleton />}>
      <FooterContent />
    </Suspense>
  );
};

export default Footer;
