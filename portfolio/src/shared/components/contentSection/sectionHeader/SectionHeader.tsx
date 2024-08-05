import React from "react";
import {
  HeaderContainer,
  SectionDivider,
  SectionTitle,
} from "./sectionHeader.styles";

interface Props {
  title: string;
}
const SectionHeader = ({ title }: Props) => {
  return (
    <HeaderContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDivider />
    </HeaderContainer>
  );
};

export default SectionHeader;
