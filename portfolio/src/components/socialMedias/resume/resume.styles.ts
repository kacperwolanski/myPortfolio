import styled from "styled-components";
import { Theme } from "@mui/material";

export const ResumeContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
