import { ProjectLabel } from "shared/constants/types";
import React from "react";
import { FilterButtons } from "./projects.styles";
import CircledButton from "shared/components/CircledButton";

import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { projectsLabels } from "shared/constants/projectsLabels";

interface Props {
  selectedLabel: ProjectLabel;
  setSelectedLabel: React.Dispatch<React.SetStateAction<ProjectLabel>>;
}
const Filters = ({ selectedLabel, setSelectedLabel }: Props) => {
  const { currentTheme } = useThemeStore();
  const isLightMode = currentTheme === lightTheme;
  return (
    <FilterButtons>
      {projectsLabels.map((label) => (
        <CircledButton
          onClick={() => {
            setSelectedLabel(label);
          }}
          key={label}
          title={label}
          strokeColor={
            isLightMode ? "transparent" : currentTheme.palette.custom.darkGray
          }
          color={
            label !== selectedLabel
              ? currentTheme.palette.secondary.main
              : currentTheme.palette.custom.header
          }
          fillColor={
            label === selectedLabel
              ? currentTheme.palette.custom.darkGray
              : "none"
          }
        />
      ))}
    </FilterButtons>
  );
};

export default Filters;
