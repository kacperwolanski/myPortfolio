import styled from "styled-components";

export const ContentSectionWrapper = styled.div<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}%` : "70%")};
  transition: opacity 1s ease-out, transform 1s ease-out;
`;
