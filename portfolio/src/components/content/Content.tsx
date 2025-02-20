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
import { useSideMenuStore } from "components/topMenu/hooks/useSideMenuStore";
import { useThemeStore } from "theme/useThemeStore";
import Technologies from "./technologies/Technologies";
import MyService from "./myService/components/MyService";

const Content = () => {
  const { isMobile } = useThemeStore();
  const { isSideMenuOpened } = useSideMenuStore();
  const blurredContent = isMobile && isSideMenuOpened;
  return (
    <>
      <TopMenu />
      <ContentWrapper blurredContent={blurredContent}>
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Education />
        <MyService />
        <Contact />
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default Content;
