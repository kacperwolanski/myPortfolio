import styled from "styled-components";
import theme from "theme/theme";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TitlesList = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 30px;
  justify-content: center;
  margin-right: 100px;
`;

export const ElementTitleButton = styled.button<{ isSelected?: boolean }>`
  border: none;
  background: none;
  color: ${(props) =>
    props.isSelected ? theme.palette.primary.main : "white"};
  cursor: pointer;
  transition: color 0.2s;
`;

export const ContentContainer = styled.div<{ isTransitioning: boolean }>`
  min-height: 360px;
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  transition: opacity 0.2s;
`;
