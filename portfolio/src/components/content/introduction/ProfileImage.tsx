import React, { useState } from "react";
import { introductionData } from "shared/constants/introduction";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { Theme } from "@mui/material";

const Img = styled.img<{ isLoading: boolean; theme: Theme }>`
  border-radius: 50%;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  width: 200px;
  height: 200px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    width: 230px;
    height: 230px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    width: 350px;
    height: 350px;
  }
`;

const ProfileImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useThemeStore();
  const { darkProfileImgUrl, lightProfileImgUrl } = introductionData;
  const themeIsLight = currentTheme === lightTheme;

  const src = themeIsLight ? lightProfileImgUrl : darkProfileImgUrl;
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Img
      theme={currentTheme}
      src={src}
      alt={"Profile"}
      isLoading={isLoading}
      onLoad={handleImageLoad}
      loading="lazy"
    />
  );
};

export default ProfileImage;
