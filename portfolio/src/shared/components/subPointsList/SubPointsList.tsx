import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { SubContainer, SubList, SubPoint } from "./subPointsList.styles";
import { useThemeStore } from "theme/useThemeStore";

interface SubPointsListProps {
  subPoints: string[];
}

const SubPointsList: React.FC<SubPointsListProps> = ({ subPoints }) => {
  const { currentTheme } = useThemeStore();
  return (
    <SubList>
      {subPoints.map((subPoint, index) => (
        <SubContainer key={index}>
          <CircleIcon
            sx={{
              fontSize: "10px",
              color: currentTheme.palette.secondary.main,
            }}
          />
          <SubPoint theme={currentTheme}>{subPoint}</SubPoint>
        </SubContainer>
      ))}
    </SubList>
  );
};

export default SubPointsList;
