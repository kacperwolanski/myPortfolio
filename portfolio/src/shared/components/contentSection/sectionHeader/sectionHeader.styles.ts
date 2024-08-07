import styled from "styled-components";
import { Theme } from "@mui/material";

export const HeaderContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "Inter";
`;

export const SectionTitle = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
  font-size: 45px;
  font-weight: 1000;
  letter-spacing: -1px;
`;

export const SubTitle = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 14px;
  font-weight: 600;
  margin-top: -10px;
`;
