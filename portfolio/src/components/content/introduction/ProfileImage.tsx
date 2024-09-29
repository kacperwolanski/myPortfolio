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

  const src = themeIsLight ? lightProfileImgUrl : darkProfileImgUrl;

  useEffect(() => {
    setIsFadingOut(true);

    const fadeOutDuration = 500;

    const timeoutId = setTimeout(() => {
      setIsFadingOut(false);
      setImageSrc(src);
    }, fadeOutDuration);

    return () => clearTimeout(timeoutId);
  }, [currentTheme, src]);

  return (
    <Img
      theme={currentTheme}
      src={imageSrc}
      alt=""
      draggable={false}
      isfadingout={isFadingOut}
      loading="lazy"
    />
  );
};

export default ProfileImage;
