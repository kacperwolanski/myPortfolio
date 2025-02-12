import React from "react";
import { useThemeStore } from "theme/useThemeStore";
import {
  ServiceDescription,
  ServiceTitle,
  SingleServiceContainer,
} from "../service.styles";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SingleService = ({ icon, title, description }: Props) => {
  const { currentTheme } = useThemeStore();

  return (
    <SingleServiceContainer theme={currentTheme}>
      {icon}
      <ServiceTitle theme={currentTheme}>{title}</ServiceTitle>
      <ServiceDescription theme={currentTheme}>
        {description}
      </ServiceDescription>
    </SingleServiceContainer>
  );
};

export default SingleService;
