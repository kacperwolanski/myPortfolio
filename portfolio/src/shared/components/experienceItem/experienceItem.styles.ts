import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-width: 1000px;
  display: flex;
  justify-content: space-between;
  font-family: "Inter";
`;
export const Headers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.span<{
  clickable: boolean;
  theme: Theme;
}>`
  ${(props) => props.clickable && "cursor: pointer;"};
  font-size: 25px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.custom.header};
`;

export const Subtitle = styled.div<{ theme: Theme }>`
  font-size: 14px;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 400;
`;
export const DateItem = styled.span`
  font-weight: 100;
`;

export const DatesContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 14px;
  margin-top: 10px;
`;
