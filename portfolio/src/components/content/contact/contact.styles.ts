import theme from "../../../theme/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
export const EmailContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.palette.custom.darkGray};
  width: 260px;
  padding: 20px 10px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.01);
  }
`;
export const Email = styled.span`
  color: ${theme.palette.secondary.main};
`;
export const MainLink = styled.a`
  text-decoration: none;
`;
