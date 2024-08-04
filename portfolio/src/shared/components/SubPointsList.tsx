import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import styled from "styled-components";

interface SubPointsListProps {
  subPoints: string[];
}

const SubList = styled.div`
  text-align: left;
  margin-top: 15px;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  margin-top: -15px;
`;

const SubPointsList: React.FC<SubPointsListProps> = ({ subPoints }) => {
  return (
    <SubList>
      {subPoints.map((subPoint) => (
        <SubContainer>
          <CircleIcon sx={{ fontSize: "10px" }} />
          <p>{subPoint}</p>
        </SubContainer>
      ))}
    </SubList>
  );
};

export default SubPointsList;
