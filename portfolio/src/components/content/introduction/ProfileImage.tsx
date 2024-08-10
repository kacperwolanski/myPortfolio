import React, { useState } from "react";
import { introductionData } from "shared/constants/introduction";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { Img } from "./introduction.styles";

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
