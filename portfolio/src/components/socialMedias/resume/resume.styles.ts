import styled from "styled-components";
import theme from "theme/theme";

export const ResumeContainer = styled.div`
  color: ${theme.palette.secondary.main};
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
