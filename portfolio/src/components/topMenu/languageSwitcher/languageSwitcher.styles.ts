import styled from "styled-components";

export const FlagButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  img {
    width: 30px;
    height: auto;
  }

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
