import React from "react";
import { ContentWrapper } from "./content.styles";
import About from "./about/About";
import Introduction from "./introduction/Introduction";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const Content = () => {
  return (
    <ContentWrapper>
      <Introduction />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </ContentWrapper>
  );
};

export default Content;
