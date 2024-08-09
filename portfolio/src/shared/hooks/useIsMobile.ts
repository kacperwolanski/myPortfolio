import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useThemeStore } from "theme/useThemeStore";
import { darkTheme } from "theme/theme";

const useIsMobile = () => {
  const isMobile = useMediaQuery(
    `(max-width:${darkTheme.breakpoints.values.mobile}px)`
  );
  const { setIsMobile } = useThemeStore();

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  return isMobile;
};

export default useIsMobile;
