import React, { useRef } from "react";
import WebsitesTypes from "../websiteTypes/WebsitesTypes";
import SingleDetails from "../websiteTypes/details/SingleDetails";
import { websitesDetails } from "../websiteTypes/websiteTypesData";
import { useThemeStore } from "theme/useThemeStore";
import { useMediaQuery } from "@mui/material";

const ServiceProducts = () => {
  const containerRef = useRef(null);
  const { currentTheme } = useThemeStore();
  const isLgOrXl = useMediaQuery(currentTheme.breakpoints.up("lg"));
  return (
    <div
      ref={containerRef}
      style={{
        width: "110%",
        marginTop: "100px",
        fontFamily: "Inter",
        display: "flex",
        gap: "120px",
        flexDirection: "column",
      }}
    >
      <WebsitesTypes />

      <SingleDetails details={websitesDetails.basicDetails} />
      <SingleDetails
        details={websitesDetails.advancedDetails}
        isFeaturesFirst={isLgOrXl}
      />
      <SingleDetails details={websitesDetails.reactDetails} />
    </div>
  );
};

export default ServiceProducts;
