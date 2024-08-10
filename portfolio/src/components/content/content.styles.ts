import styled from "styled-components";

export const ContentWrapper = styled.div<{ blurredContent: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  overflow: hidden;
  filter: ${(props) => (props.blurredContent ? "blur(10px)" : "none")};
  pointer-events: ${(props) => (props.blurredContent ? "none" : "default")};
`;
