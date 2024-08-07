import React from "react";
import { TitleContainer, TMButtonContainer } from "./topMenuButton.styles";
import { scrollToSection } from "shared/helpers/scrollToSection";
interface Props {
  title: string;
  sectionId: string;
}
const TopMenuButton = ({ title, sectionId }: Props) => {
  const handleClick = () => {
    scrollToSection(sectionId);
  };
  return (
    <TMButtonContainer onClick={handleClick}>
      <TitleContainer>{title}</TitleContainer>
    </TMButtonContainer>
  );
};

export default TopMenuButton;
