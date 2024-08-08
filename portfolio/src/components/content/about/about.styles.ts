import { Theme } from "@mui/material";
import styled from "styled-components";

export const Description = styled.p<{ theme: Theme }>`
  text-align: center;
  max-width: 600px;
  color: ${(props) => props.theme.palette.secondary.main};
  font-family: "Inter";
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
