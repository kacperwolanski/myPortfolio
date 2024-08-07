import { Theme } from "@mui/material";
import styled from "styled-components";

export const TopMenuLogoContainer = styled.div<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  padding: 10px;
  font-size: 40px;
`;
