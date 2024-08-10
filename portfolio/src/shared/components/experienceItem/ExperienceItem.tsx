import React from "react";
import { RawLink } from "../RawLink";
import {
  Container,
  Headers,
  HeaderContainer,
  Subtitle,
  DatesContainer,
  DateItem,
} from "./experienceItem.styles";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  header: string;
  startDate: string;
  endDate: string;
  headerUrl?: string;
  subtitle2?: string;
}

const ExperienceItem = ({
  header,
  headerUrl,
  subtitle2,
  startDate,
  endDate,
}: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <Container theme={currentTheme}>
      <Headers>
        {headerUrl ? (
          <RawLink to={headerUrl} openInNewTab>
            <HeaderContainer theme={currentTheme} clickable={true}>
              {header}
            </HeaderContainer>
          </RawLink>
        ) : (
          <h3>{header}</h3>
        )}
        <Subtitle theme={currentTheme}>{subtitle2}</Subtitle>
      </Headers>
      <DatesContainer theme={currentTheme}>
        <DateItem>{startDate}</DateItem> - <DateItem>{endDate}</DateItem>
      </DatesContainer>
    </Container>
  );
};

export default ExperienceItem;
