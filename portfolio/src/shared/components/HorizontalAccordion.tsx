import React, { useState } from "react";
import styled from "styled-components";
import theme from "theme/theme";

interface AccordionElement {
  title: string;
  content: JSX.Element;
}

interface Props {
  elements: AccordionElement[];
}

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TitlesList = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  justify-content: left;
`;

const ElementTitleButton = styled.button<{ isSelected?: boolean }>`
  border: none;
  background: none;
  color: ${(props) =>
    props.isSelected ? theme.palette.primary.main : "white"};
  cursor: pointer;
`;

const HorizontalAccordion: React.FC<Props> = ({ elements }) => {
  const [currentElement, setCurrentElement] = useState(elements[0]);

  return (
    <AccordionContainer>
      <TitlesList>
        {elements.map((element: AccordionElement, index: number) => (
          <ElementTitleButton
            key={index}
            isSelected={currentElement.title === element.title}
            onClick={() => setCurrentElement(element)}
          >
            {element.title}
          </ElementTitleButton>
        ))}
      </TitlesList>
      {currentElement.content}
    </AccordionContainer>
  );
};

export default HorizontalAccordion;
