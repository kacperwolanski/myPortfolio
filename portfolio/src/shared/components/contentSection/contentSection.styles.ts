import styled from "styled-components";

export const ContentSectionWrapper = styled.div<{
  isVisible: boolean;
  moveFromLeft?: boolean;
}>`
  width: 70%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, moveFromLeft }) =>
    isVisible
      ? "translateY(0)"
      : `translateX(${moveFromLeft ? "-100px" : "100px"})`};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 1s ease-out, transform 1s ease-out;
`;
