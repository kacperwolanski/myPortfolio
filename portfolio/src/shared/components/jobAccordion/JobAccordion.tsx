import React, { useState } from "react";
import {
  AccordionContainer,
  ContentContainer,
  ElementTitleButton,
  TitlesList,
} from "./jobAccordion.styles";
import { useThemeStore } from "theme/useThemeStore";

interface AccordionElement {
  title: string;
  content: JSX.Element;
}

interface Props {
  elements: AccordionElement[];
}

const JobAccordion: React.FC<Props> = ({ elements }) => {
  const { currentTheme } = useThemeStore();
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
    <AccordionContainer theme={currentTheme}>
      <TitlesList theme={currentTheme}>
        {elements.map((element: AccordionElement, index: number) => {
          const buttonSelected = currentElement.title === element.title;
          return (
            <ElementTitleButton
              theme={currentTheme}
              key={index}
              data-title={element.title}
              isSelected={buttonSelected}
              onClick={() => !buttonSelected && handleElementChange(element)}
            >
              <span
                style={{
                  zIndex: 10,
                  color: buttonSelected
                    ? currentTheme.palette.primary.main
                    : "white",
                }}
              >
                {element.title}
              </span>
            </ElementTitleButton>
          );
        })}
      </TitlesList>
      <ContentContainer istransitioning={isTransitioning}>
        {currentElement.content}
      </ContentContainer>
    </AccordionContainer>
  );
};

export default JobAccordion;
