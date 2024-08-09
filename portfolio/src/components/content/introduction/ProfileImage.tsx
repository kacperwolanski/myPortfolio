import React, { useState } from "react";
import { introductionData } from "shared/constants/introduction";
import styled from "styled-components";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
const Img = styled.img<{ isLoading: boolean }>`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
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
      src={src}
      alt={"Profile"}
      isLoading={isLoading}
      onLoad={handleImageLoad}
      loading="lazy"
    />
  );
};

export default ProfileImage;
