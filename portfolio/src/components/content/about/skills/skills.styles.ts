import { Theme } from "@mui/material";
import styled from "styled-components";

export const SkillsSetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin-top: -11px;
`;

export const SkillSetTitle = styled.h3<{ theme: Theme }>`
  min-width: 250px;
  flex-shrink: 0;
  color: ${(props) => props.theme.palette.custom.header};
`;

export const SkillsContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  align-items: center;
  gap: 25px;
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const SkillContainer = styled.div`
  font-weight: 200;
`;
