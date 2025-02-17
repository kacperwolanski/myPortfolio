import React, { lazy, Suspense } from "react";
import ContactSkeleton from "shared/components/skeletons/ContactSkeleton";

const ContactContent = lazy(() => import("./ContactContent"));

const Contact = () => {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
};

export default Contact;
