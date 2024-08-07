import React from "react";
import { ContentWrapper } from "./content.styles";
import About from "./about/About";
import Introduction from "./introduction/Introduction";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import TopMenu from "../topMenu/TopMenu";

const Content = () => {
  return (
    <div>
      <TopMenu />
      <ContentWrapper>
        <Introduction />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ContentWrapper>
    </div>
  );
};

export default Content;
