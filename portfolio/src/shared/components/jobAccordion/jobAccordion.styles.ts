import styled from "styled-components";
import theme from "theme/theme";

export const AccordionContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: 80px;
`;

export const TitlesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  margin-right: 100px;
`;

export const ElementTitleButton = styled.button<{ isSelected?: boolean }>`
  border: none;
  background: ${(props) =>
    props.isSelected ? theme.palette.custom.darkGray : "none"};
  color: white;
  cursor: pointer;
  transition: background 0.3s, color 0.2s; /* Added transition for background */
  width: 160px;
  height: 56px;
`;

export const ContentContainer = styled.div<{ isTransitioning: boolean }>`
  min-height: 360px;
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  transition: opacity 0.2s;
`;
