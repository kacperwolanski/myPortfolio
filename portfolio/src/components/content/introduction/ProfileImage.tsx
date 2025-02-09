import React from "react";
import { useThemeStore } from "theme/useThemeStore";
import { lightTheme } from "theme/theme";
import { Img } from "./introduction.styles";
import { Dark, Light } from "shared/assets/images/Images";

import * as motion from "motion/react-client";
const ProfileImage = () => {
  const { currentTheme } = useThemeStore();
  const themeIsLight = currentTheme === lightTheme;

  return (
    <motion.div
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
    >
      <Img theme={currentTheme} draggable={false}>
        {themeIsLight ? <Light /> : <Dark />}
      </Img>
    </motion.div>
  );
};

export default ProfileImage;
