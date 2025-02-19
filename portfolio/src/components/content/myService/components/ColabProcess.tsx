import React from "react";
import { ServicesContainer } from "../service.styles";
import { services } from "shared/constants/services";
import { Service } from "shared/constants/types";
import SingleService from "./SingleService";
import { useThemeStore } from "theme/useThemeStore";

const ColabProcess = () => {
  const { currentTheme } = useThemeStore();
  return (
    <ServicesContainer theme={currentTheme}>
      {services.map((service: Service) => (
        <SingleService key={service.title} service={service} />
      ))}
    </ServicesContainer>
  );
};

export default ColabProcess;
