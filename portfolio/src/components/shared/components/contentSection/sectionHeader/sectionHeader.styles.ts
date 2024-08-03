import styled from "styled-components";
import theme from "../../../../../theme/theme";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const SectionIndex = styled.span`
  color: ${theme.palette.primary.main};
  font-size: 25px;
`;
export const SectionTitle = styled.span`
  margin-left: 5px;
  font-size: 25px;
`;

export const SectionDivider = styled.span`
  width: 70%;
  height: 1px;
  background: white;
  margin-left: 10px;
`;
