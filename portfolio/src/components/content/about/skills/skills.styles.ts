import styled from "styled-components";
import theme from "theme/theme";

export const SkillsSetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin-top: -11px;
`;

export const SkillSetTitle = styled.h3`
  min-width: 250px;
  flex-shrink: 0;
  color: white;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  align-items: center;
  gap: 25px;
  color: ${theme.palette.secondary.main};
`;

export const SkillContainer = styled.div`
  font-weight: 200;
`;
