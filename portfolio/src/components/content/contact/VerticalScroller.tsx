import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

const PAGE_COUNT = 5;

const VerticalScroller = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const localRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
    config: { tension: 120, friction: 14 },
  }));

  const { scrollYProgress } = useScroll({
    container: localRef as React.MutableRefObject<HTMLElement>,
    onChange: ({ value: { scrollYProgress } }) => {
      textApi.start({ y: scrollYProgress > 0.7 ? "0" : "100%" });
    },
    default: { immediate: false },
  });

  return (
    <Body ref={localRef}>
      <AnimatedLayers>
        <AnimatedDot
          style={{
            clipPath: scrollYProgress.to(
              (val) => `circle(${Math.min(val * 120, 100)}%)`
            ),
          }}
        >
          <Title>
            <span>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>You found me!</animated.span>
            </span>
          </Title>
        </AnimatedDot>
      </AnimatedLayers>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <FullPage key={index} />
      ))}
    </Body>
  );
});

const Body = styled.div`
  background-color: #171717;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

const AnimatedLayers = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  & > * {
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
  }
`;

const AnimatedDot = styled(animated.div)`
  background-color: orange;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: clip-path 0.3s ease-out;
`;

const Title = styled.h1`
  color: rgb(5, 74, 238);
  font-size: 8vw;
  padding-left: 8vw;
  overflow: hidden;

  & > span {
    display: block;
    overflow: hidden;

    & > span {
      display: block;
    }
  }
`;

export default VerticalScroller;
