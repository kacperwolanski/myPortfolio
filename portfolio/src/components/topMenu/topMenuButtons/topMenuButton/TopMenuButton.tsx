import React from "react";
import { TitleContainer, TMButtonContainer } from "./topMenuButton.styles";
import { scrollToSection } from "shared/helpers/scrollToSection";
import { useThemeStore } from "theme/useThemeStore";
interface Props {
  title: string;
  sectionId: string;
}
const TopMenuButton = ({ title, sectionId }: Props) => {
  const { currentTheme } = useThemeStore();
  const handleClick = () => {
    scrollToSection(sectionId);
  };
  return (
    <TMButtonContainer theme={currentTheme} onClick={handleClick}>
      <TitleContainer theme={currentTheme}>{title}</TitleContainer>
    </TMButtonContainer>
  );
};

export default TopMenuButton;
