import React from "react";

import { Box } from "@mui/material";
import styled from "styled-components";
import { RawLink } from "./RawLink";

interface Props {
  header: string;
  startDate: string;
  endDate: string;
  headerUrl?: string;
  subtitle2?: string;
}

const DateItem = styled.span`
  font-weight: 100;
`;

const DatesContainer = styled.div`
  margin-top: -20px;
`;
const HeaderContainer = styled.h3<{ clickable: boolean }>`
  ${(props) => props.clickable && "cursor: pointer;"}
`;
const SubPointsItem = ({
  header,
  headerUrl,
  subtitle2,
  startDate,
  endDate,
}: Props) => {
  return (
    <Box display="flex">
      <div>
        {headerUrl ? (
          <RawLink to={headerUrl}>
            <HeaderContainer clickable={true}>{header}</HeaderContainer>
          </RawLink>
        ) : (
          <h3>{header}</h3>
        )}
        <DatesContainer>
          <DateItem>{startDate}</DateItem> - <DateItem>{endDate}</DateItem>
        </DatesContainer>
        <p>{subtitle2}</p>
      </div>
    </Box>
  );
};

export default SubPointsItem;
