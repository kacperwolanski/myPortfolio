import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

interface Props {
  title: string;
  strokeColor?: string;
  color?: string;
  fillColor?: string;
  onClick?: () => void;
}
const CircledButton = ({
  title,
  strokeColor,
  fillColor,
  onClick,
  color,
}: Props) => {
  const Container = styled.button`
    border-radius: 15px;
    background: ${fillColor ? fillColor : "none"};
    border: 1px solid;
    color: ${color ? color : theme.palette.secondary.main};
    padding: 15px 30px;
    border-color: ${strokeColor ? strokeColor : theme.palette.secondary.main};
    &:hover {
      cursor: pointer;
    }
  `;
  return <Container onClick={onClick}>{title}</Container>;
};

export default CircledButton;
