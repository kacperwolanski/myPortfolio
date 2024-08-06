import React from "react";

import styled from "styled-components";
import { RawLink } from "./RawLink";
import theme from "theme/theme";

interface Props {
  header: string;
  startDate: string;
  endDate: string;
  headerUrl?: string;
  subtitle2?: string;
}

const Container = styled.div`
  max-width: 100%;
  min-width: 1000px;
  display: flex;
  justify-content: space-between;
  font-family: "Inter";
`;
const Headers = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.span<{ clickable: boolean }>`
  ${(props) => props.clickable && "cursor: pointer;"};
  font-size: 25px;
  font-weight: 400;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: ${theme.palette.primary.main};
  font-weight: 400;
`;
const DateItem = styled.span`
  font-weight: 100;
`;

const DatesContainer = styled.div`
  color: ${theme.palette.secondary.main};
  font-size: 14px;
  margin-top: 10px;
`;

const ExperienceItem = ({
  header,
  headerUrl,
  subtitle2,
  startDate,
  endDate,
}: Props) => {
  return (
    <Container>
      <Headers>
        {headerUrl ? (
          <RawLink to={headerUrl} openInNewTab>
            <HeaderContainer clickable={true}>{header}</HeaderContainer>
          </RawLink>
        ) : (
          <h3>{header}</h3>
        )}
        <Subtitle>{subtitle2}</Subtitle>
      </Headers>
      <DatesContainer>
        <DateItem>{startDate}</DateItem> - <DateItem>{endDate}</DateItem>
      </DatesContainer>
    </Container>
  );
};

export default ExperienceItem;
