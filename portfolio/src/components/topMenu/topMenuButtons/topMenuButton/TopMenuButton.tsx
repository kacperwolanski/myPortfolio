import React from "react";
import { TitleContainer, TMButtonContainer } from "./topMenuButton.styles";
interface Props {
  title: string;
  isSelected?: boolean;
}
const TopMenuButton = ({ title, isSelected }: Props) => {
  return (
    <TMButtonContainer>
      <TitleContainer isSelected={isSelected}>{title}</TitleContainer>
    </TMButtonContainer>
  );
};

export default TopMenuButton;
