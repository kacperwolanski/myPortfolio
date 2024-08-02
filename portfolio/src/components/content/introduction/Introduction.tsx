import React from "react";
import {
  Description,
  IntroductionContainer,
  MyNameIs,
  NameContainer,
  SubTitle,
} from "./introduction.styles";

const Introduction = () => {
  return (
    <IntroductionContainer>
      <MyNameIs>Hi, my name is</MyNameIs>
      <NameContainer>Kacper Wolański</NameContainer>
      <SubTitle>I build things for the web</SubTitle>
      <Description>
        Hi, I'm passionate Software Developer with experience in React
        development. Throughout my career, I've had the chance to work on a
        variety of exciting projects, from a full-stack carpooling web
        application to a video streaming platform.
      </Description>
    </IntroductionContainer>
  );
};

export default Introduction;
