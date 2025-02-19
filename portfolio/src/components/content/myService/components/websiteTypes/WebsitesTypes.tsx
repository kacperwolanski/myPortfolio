import React from "react";
import { websitesTypes, WebsiteType } from "./websiteTypesData";
import SingleType from "./SingleType";
import { WebsiteTypeButtonsContainer } from "./websiteTypes.styles";

const WebsitesTypes = () => {
  return (
    <WebsiteTypeButtonsContainer>
      {websitesTypes.map((type: WebsiteType, index: number) => (
        <SingleType type={type} key={type.title} index={index} />
      ))}
    </WebsiteTypeButtonsContainer>
  );
};

export default WebsitesTypes;
