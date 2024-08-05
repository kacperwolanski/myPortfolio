import React from "react";
import { Description } from "./about.styles";
import Skills from "./skills/Skills";
import ContentSection from "shared/components/contentSection/ContentSection";
import styled from "styled-components";
import CircledButton from "shared/components/CircledButton";
import theme from "theme/theme";
import { BlurredRectangle } from "shared/components/BlurredRectangle";

const About = () => {
  const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  `;
  return (
    <ContentSection title="About Me" subTitle="Get to know me">
      <Container>
        <BlurredRectangle top={-140} left={800} />
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
        <CircledButton
          title="Download Resume"
          strokeColor={theme.palette.primary.main}
        />
      </Container>
    </ContentSection>
  );
};

export default About;
