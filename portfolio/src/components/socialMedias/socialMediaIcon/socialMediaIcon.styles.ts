import { Theme } from "@mui/material";
import styled from "styled-components";

export const IconWrapper = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  svg {
    height: 25px;
    width: 25px;
  }
`;
