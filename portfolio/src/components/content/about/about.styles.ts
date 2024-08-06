import styled from "styled-components";
import theme from "theme/theme";

export const Description = styled.p`
  text-align: center;
  max-width: 600px;
  color: ${theme.palette.secondary.main};
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
