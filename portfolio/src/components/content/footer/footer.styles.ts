import theme from "../../../theme/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 50px 50px 10px 50px;
  border-top: 1px solid ${theme.palette.custom.borderGray};
`;
export const LogoButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Signature = styled.span`
  color: ${theme.palette.secondary.main};
  text-align: center;
  font-size: 16px;
  font-family: "Inter";
`;
