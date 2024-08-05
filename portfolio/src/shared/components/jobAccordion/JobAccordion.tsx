import React, { useState } from "react";
import {
  AccordionContainer,
  ContentContainer,
  ElementTitleButton,
  TitlesList,
} from "./jobAccordion.styles";

interface AccordionElement {
  title: string;
  content: JSX.Element;
}

interface Props {
  elements: AccordionElement[];
}

const JobAccordion: React.FC<Props> = ({ elements }) => {
  const [currentElement, setCurrentElement] = useState(elements[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleElementChange = (element: AccordionElement) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentElement(element);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <AccordionContainer>
      <TitlesList>
        {elements.map((element: AccordionElement, index: number) => (
          <ElementTitleButton
            key={index}
            data-title={element.title}
            isSelected={currentElement.title === element.title}
            onClick={() => handleElementChange(element)}
          >
            {element.title}
          </ElementTitleButton>
        ))}
      </TitlesList>
      <ContentContainer isTransitioning={isTransitioning}>
        {currentElement.content}
      </ContentContainer>
    </AccordionContainer>
  );
};

export default JobAccordion;
