import React from "react";
import { ContentWrapper } from "./content.styles";
import SocialMedias from "../socialMedias/SocialMedias";
import About from "./about/About";
import Introduction from "./introduction/Introduction";
import Education from "./education/Education";

const Content = () => {
  return (
    <ContentWrapper>
      <Introduction />
      <About />
      <Education />
      <SocialMedias />
    </ContentWrapper>
  );
};

export default Content;
