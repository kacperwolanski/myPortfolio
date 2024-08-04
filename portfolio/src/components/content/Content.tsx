import React from "react";
import { ContentWrapper } from "./content.styles";
import SocialMedias from "../socialMedias/SocialMedias";
import About from "./about/About";
import Introduction from "./introduction/Introduction";
import Education from "./education/Education";
import Experience from "./experience/Experience";

const Content = () => {
  return (
    <ContentWrapper>
      <Introduction />
      <About />
      <Education />
      <Experience />
      <SocialMedias />
    </ContentWrapper>
  );
};

export default Content;
