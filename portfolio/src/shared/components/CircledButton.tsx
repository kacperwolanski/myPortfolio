import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

interface Props {
  title: string;
  strokeColor?: string;
  fillColor?: string;
}
const CircledButton = ({ title, strokeColor, fillColor }: Props) => {
  const Container = styled.button`
    border-radius: 15px;
    background: ${fillColor ? fillColor : "none"};
    border: 1px solid;
    color: white;
    padding: 15px 30px;
    border-color: ${strokeColor ? strokeColor : theme.palette.secondary.main};
  `;
  return <Container>{title}</Container>;
};

export default CircledButton;
