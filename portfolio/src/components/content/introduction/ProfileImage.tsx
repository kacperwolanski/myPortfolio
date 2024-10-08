import React, { useEffect, useState } from "react";
import { introductionData } from "shared/constants/introduction";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { Img } from "./introduction.styles";

const ProfileImage = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const { currentTheme } = useThemeStore();
  const { darkProfileImgUrl, lightProfileImgUrl } = introductionData;
  const themeIsLight = currentTheme === lightTheme;

  const fadeOutDuration = 600;

  useEffect(() => {
    const lightImage = new Image();
    const darkImage = new Image();
    lightImage.src = lightProfileImgUrl;
    darkImage.src = darkProfileImgUrl;
  }, [lightProfileImgUrl, darkProfileImgUrl]);

  useEffect(() => {
    const newSrc = themeIsLight ? lightProfileImgUrl : darkProfileImgUrl;
    setIsFadingOut(true);

    const img = new Image();
    img.src = newSrc;
    img.onload = () => {
      const timeoutId = setTimeout(() => {
        setImageSrc(newSrc);
        setIsFadingOut(false);
      }, fadeOutDuration);

      return () => clearTimeout(timeoutId);
    };
  }, [currentTheme, themeIsLight, lightProfileImgUrl, darkProfileImgUrl]);
  return (
    <Img
      theme={currentTheme}
      src={imageSrc}
      alt=""
      draggable={false}
      isfadingout={isFadingOut}
    />
  );
};

export default ProfileImage;
