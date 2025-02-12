import { Theme } from "@mui/material";
import styled from "styled-components";

export const SingleServiceContainer = styled.div<{ theme: Theme }>`
  font-family: Inter;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
  background: rgba(256, 256, 256, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const ServiceTitle = styled.header<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 800;
  font-size: 20px;
`;
export const ServiceDescription = styled.p<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
`;
