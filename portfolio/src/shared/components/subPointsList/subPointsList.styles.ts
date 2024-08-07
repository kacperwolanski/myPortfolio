import styled from "styled-components";
import { Theme } from "@mui/material";

export const SubList = styled.div`
  text-align: left;
  margin-top: 15px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  margin-top: -15px;
`;
export const SubPoint = styled.p<{ theme: Theme }>`
  font-weight: 100;
  color: ${(props) => props.theme.palette.secondary.main};
`;
