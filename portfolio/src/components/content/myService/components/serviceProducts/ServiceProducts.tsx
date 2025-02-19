import React, { useRef } from "react";
import WebsitesTypes from "../websiteTypes/WebsitesTypes";
import SingleDetails from "../websiteTypes/details/SingleDetails";
import { websitesDetails } from "../websiteTypes/websiteTypesData";
import { useSpring, animated } from "@react-spring/web";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";
import useIsMobile from "shared/hooks/useIsMobile";

const ServiceProducts = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  return (
    <div
      ref={containerRef}
      style={{
        width: "110%",
        marginTop: "100px",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "200px",
          flexDirection: "column",
        }}
      >
        {/* <ServiceHeader
          header="Stworzę od podstaw lub rozbuduję Twoją istniejącą"
          focusedPart="stronę internetową"
        /> */}

        <WebsitesTypes />

        <SingleDetails details={websitesDetails.basicDetails} />
        <SingleDetails
          details={websitesDetails.advancedDetails}
          isFeaturesFirst={!isMobile}
        />
        <SingleDetails details={websitesDetails.reactDetails} />
      </div>
    </div>
  );
};

export default ServiceProducts;
