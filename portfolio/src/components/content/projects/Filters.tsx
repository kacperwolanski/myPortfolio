import { ProjectLabel } from "../../../shared/constants/types";
import React from "react";
import { FilterButtons } from "./projects.styles";
import CircledButton from "../../../shared/components/CircledButton";
import { projectsLabels } from "../../../shared/constants/projects";
import theme from "../../../theme/theme";

interface Props {
  selectedLabel: ProjectLabel;
  setSelectedLabel: React.Dispatch<React.SetStateAction<ProjectLabel>>;
}
const Filters = ({ selectedLabel, setSelectedLabel }: Props) => {
  return (
    <FilterButtons>
      {projectsLabels.map((label) => (
        <CircledButton
          onClick={() => {
            setSelectedLabel(label);
          }}
          key={label}
          title={label}
          strokeColor={theme.palette.custom.darkGray}
          color={
            label !== selectedLabel ? theme.palette.secondary.main : "white"
          }
          fillColor={
            label === selectedLabel ? theme.palette.custom.darkGray : "none"
          }
        />
      ))}
    </FilterButtons>
  );
};

export default Filters;
