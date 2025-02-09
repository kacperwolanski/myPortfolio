import React from "react";
import {
  IconWrapper,
  TechnologyContainer,
  Title,
} from "../technologies.styles";
import { useThemeStore } from "theme/useThemeStore";

export interface Technology {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface Props {
  technology: Technology;
}

const SingleTechnology = ({ technology }: Props) => {
  const { icon, title, link } = technology;
  const { currentTheme } = useThemeStore();

  return (
    <TechnologyContainer href={link} target="_blank" rel="noopener noreferrer">
      <IconWrapper>{icon}</IconWrapper>
      <Title theme={currentTheme}>{title}</Title>
    </TechnologyContainer>
  );
};

export default SingleTechnology;
