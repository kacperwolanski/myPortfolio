import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { SubContainer, SubList } from "./subPointsList.styles";
import styled from "styled-components";

interface SubPointsListProps {
  subPoints: string[];
}

const SubPoint = styled.p`
  font-weight: 100;
`;
const SubPointsList: React.FC<SubPointsListProps> = ({ subPoints }) => {
  return (
    <SubList>
      {subPoints.map((subPoint, index) => (
        <SubContainer key={index}>
          <CircleIcon sx={{ fontSize: "10px" }} />
          <SubPoint>{subPoint}</SubPoint>
        </SubContainer>
      ))}
    </SubList>
  );
};

export default SubPointsList;
