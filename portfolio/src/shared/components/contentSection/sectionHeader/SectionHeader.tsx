import React from "react";
import {
  HeaderContainer,
  SectionTitle,
  SubTitle,
} from "./sectionHeader.styles";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  title: string;
  subTitle?: string;
}
const SectionHeader = ({ title, subTitle }: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <HeaderContainer theme={currentTheme}>
      <SectionTitle theme={currentTheme}>{title}</SectionTitle>
      {subTitle && <SubTitle theme={currentTheme}>{subTitle}</SubTitle>}
    </HeaderContainer>
  );
};

export default SectionHeader;
