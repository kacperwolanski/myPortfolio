import { Theme } from "@mui/material";
import { scrollAnimationL } from "components/content/introduction/introduction.styles";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
  &:hover div {
    opacity: 1;
    bottom: -60px;
  }

  &:hover img {
    filter: blur(15px);
    opacity: 0.5;
  }
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
`;

const ProductExampleWrapper = styled.img`
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  opacity: 0.95;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s ease;
`;

const HoverDescription = styled.div<{ theme: Theme }>`
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  bottom: -200px;
  left: 0;
  width: max-content;
  font-size: 160px;

  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 200px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 200px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 180px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 200px;
  }
  font-weight: 500;
  color: ${(props) => props.theme.palette.custom.header};
  z-index: 10;
  opacity: 0;
  transition: opacity 0.8s ease, bottom 0.4s ease;
  animation: ${scrollAnimationL} 60s linear infinite;
`;
const WordSpan = styled.span`
  margin-left: 350px;
  letter-spacing: -10px;
`;
interface Props {
  examplePath: string;
  hoverTitle: string;
  linkToPage: string;
}
const ProductImage = ({ examplePath, hoverTitle, linkToPage }: Props) => {
  const { t: translate } = useTranslation();
  const { currentTheme } = useThemeStore();
  return (
    <a href={linkToPage} target="_blank" rel="noopener noreferrer">
      <ImageContainer>
        <HoverDescription theme={currentTheme}>
          {Array(10)
            .fill(translate(hoverTitle))
            .map((name, index) => (
              <WordSpan key={index}>{name}</WordSpan>
            ))}
        </HoverDescription>
        <ProductExampleWrapper src={examplePath} alt="productExample" />
      </ImageContainer>
    </a>
  );
};

export default ProductImage;
