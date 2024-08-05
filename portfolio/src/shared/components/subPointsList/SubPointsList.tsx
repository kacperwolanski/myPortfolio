import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { SubContainer, SubList } from "./subPointsList.styles";
import styled from "styled-components";
import theme from "theme/theme";

interface SubPointsListProps {
  subPoints: string[];
}

const SubPoint = styled.p`
  font-weight: 100;
  color: ${theme.palette.secondary.main};
`;
const SubPointsList: React.FC<SubPointsListProps> = ({ subPoints }) => {
  return (
    <SubList>
      {subPoints.map((subPoint, index) => (
        <SubContainer key={index}>
          <CircleIcon
            sx={{ fontSize: "10px", color: theme.palette.secondary.main }}
          />
          <SubPoint>{subPoint}</SubPoint>
        </SubContainer>
      ))}
    </SubList>
  );
};

export default SubPointsList;
