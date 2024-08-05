import styled from "styled-components";
import theme from "theme/theme";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "Inter";
`;

export const SectionTitle = styled.span`
  color: white;
  font-size: 45px;
  font-weight: 1000;
  letter-spacing: -1px;
`;

export const SubTitle = styled.span`
  color: ${theme.palette.primary.main};
  font-size: 14px;
  font-weight: 600;
  margin-top: -10px;
`;
