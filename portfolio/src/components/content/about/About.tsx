import React from "react";

import { Description } from "./about.styles";
import Skills from "./skills/Skills";
import ContentSection from "shared/components/contentSection/ContentSection";

const About = () => {
  return (
    <ContentSection index="01" title="About Me">
      <div>
        <Description>
          I specialize in creating web applications with React. My goal is to
          deliver high-quality, seamless user experiences. While my main focus
          is on front-end development, I also have solid experience with
          back-end technologies like NestJs and Python. Check out my mobile
          application project developed with React Native on my GitHub profile.
          It’s a testament to my versatility and ability to adapt to different
          technologies.
        </Description>

        <Skills />
      </div>
    </ContentSection>
  );
};

export default About;
