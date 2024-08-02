import React from "react";
import { IndexContainer, TMButtonContainer } from "./topMenuButton.styles";

interface Props {
  index: string;
  title: string;
}
const TopMenuButton = ({ index, title }: Props) => {
  return (
    <TMButtonContainer>
      <IndexContainer>{index}.</IndexContainer> {title}
    </TMButtonContainer>
  );
};

export default TopMenuButton;
