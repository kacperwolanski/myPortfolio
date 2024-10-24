import React, { useEffect } from "react";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { Img } from "./introduction.styles";
import { Dark, Light } from "shared/assets/images/Images";
import { useSpring, animated } from "@react-spring/web";

const ProfileImage = () => {
  const { currentTheme } = useThemeStore();
  const themeIsLight = currentTheme === lightTheme;

  const [imageSpring, api] = useSpring(() => ({
    opacity: 0,
    config: { duration: 500 },
  }));

  useEffect(() => {
    api.start({ opacity: 1, from: { opacity: 0 } });
  }, [currentTheme, api]);
  return (
    <animated.div style={{ ...imageSpring, zIndex: 10 }}>
      <Img theme={currentTheme} draggable={false}>
        {themeIsLight ? <Light /> : <Dark />}
      </Img>
    </animated.div>
  );
};

export default ProfileImage;
