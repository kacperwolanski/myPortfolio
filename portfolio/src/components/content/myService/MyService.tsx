import { useTranslation } from "react-i18next";
import ContentSection from "shared/components/contentSection/ContentSection";

import { useRef } from "react";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import { Box, Typography } from "@mui/material";
import SingleService from "./components/SingleService";

const MyService = () => {
  const { t: translate } = useTranslation();
  const serviceRef = useRef(null);
  const { isVisible } = useIntersectionObserver(serviceRef);

  return (
    <ContentSection
      isVisible={isVisible}
      ref={serviceRef}
      title={translate("serviceTitle")}
      subTitle={translate("serviceSubtitle")}
    >
      <Typography>
        <SingleService
          title="1. Konsultacja i analiza"
          description="Dokładne omówienie celów, potrzeb oraz oczekiwań względem projektu."
          icon={<></>}
        />
      </Typography>
    </ContentSection>
  );
};

export default MyService;
