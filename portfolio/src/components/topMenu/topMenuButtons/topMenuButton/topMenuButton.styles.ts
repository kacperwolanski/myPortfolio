import styled from "styled-components";
import theme from "../../../../theme/theme";

export const TMButtonContainer = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const TitleContainer = styled.span<{ isSelected?: boolean }>`
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.primary.main : theme.palette.secondary.main};
  font-family: "Montserrat", sans-serif;
`;
