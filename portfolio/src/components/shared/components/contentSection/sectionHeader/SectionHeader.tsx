import React from "react";
import {
  HeaderContainer,
  SectionDivider,
  SectionIndex,
  SectionTitle,
} from "./sectionHeader.styles";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  index: string;
}
const SectionHeader = ({ title, index }: Props) => {
  return (
    <HeaderContainer>
      <SectionIndex>{index}.</SectionIndex>
      <SectionTitle>{title}</SectionTitle>
      <SectionDivider />
    </HeaderContainer>
  );
};

export default SectionHeader;
