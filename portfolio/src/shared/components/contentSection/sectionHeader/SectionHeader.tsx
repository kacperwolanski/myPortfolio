import React from "react";
import {
  HeaderContainer,
  SectionTitle,
  SubTitle,
} from "./sectionHeader.styles";

interface Props {
  title: string;
  subTitle?: string;
}
const SectionHeader = ({ title, subTitle }: Props) => {
  return (
    <HeaderContainer>
      <SectionTitle>{title}</SectionTitle>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </HeaderContainer>
  );
};

export default SectionHeader;
