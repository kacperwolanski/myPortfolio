import React from "react";
import { Container, Description } from "./about.styles";
import Skills from "./skills/Skills";
import ContentSection from "shared/components/contentSection/ContentSection";
import CircledButton from "shared/components/CircledButton";
import theme from "theme/theme";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import { sectionIds } from "shared/constants/sectionsIds";

const About = () => {
  return (
    <ContentSection title="About Me" subTitle="Get to know me">
      <Container id={sectionIds.about}>
        <BlurredRectangle top={-140} left={800} />
        <Description>
          I specialize in creating web applications with React. My goal is to
          deliver high-quality, seamless user experiences. While my main focus
          is on front-end development, I also have solid experience with
          back-end technologies like NestJs and Python. <br /> <br />
          Check out my mobile application project developed with React Native on
          my GitHub profile. It’s a testament to my versatility and ability to
          adapt to different technologies.
        </Description>

        <Skills />
        <CircledButton
          title="Download Resume"
          strokeColor={theme.palette.primary.main}
        />
      </Container>
    </ContentSection>
  );
};

export default About;
