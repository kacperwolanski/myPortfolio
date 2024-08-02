import React from "react";
import { ContentWrapper } from "./content.styles";
import SocialMedias from "../socialMedias/SocialMedias";
import About from "./about/About";
import Introduction from "./introduction/Introduction";

const Content = () => {
  return (
    <ContentWrapper>
      <Introduction />
      <About />
      <SocialMedias />
    </ContentWrapper>
  );
};

export default Content;
