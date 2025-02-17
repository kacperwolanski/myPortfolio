import React from "react";
import { TitleContainer, TMButtonContainer } from "./topMenuButton.styles";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { useThemeStore } from "theme/useThemeStore";
interface Props {
  title: string;
  extraScrollOffset?: boolean;
  sectionId?: string;
}
const TopMenuButton = ({ title, sectionId, extraScrollOffset }: Props) => {
  const { currentTheme } = useThemeStore();
  const handleClick = () => {
    if (sectionId) scrollToSection(sectionId, extraScrollOffset);
  };
  return (
    <TMButtonContainer theme={currentTheme} onClick={handleClick}>
      <TitleContainer theme={currentTheme}>{title}</TitleContainer>
    </TMButtonContainer>
  );
};

export default TopMenuButton;
