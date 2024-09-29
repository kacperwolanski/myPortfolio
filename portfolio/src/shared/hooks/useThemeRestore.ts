import { useEffect } from "react";
import { darkTheme, lightTheme } from "theme/theme";
import { useThemeStore } from "theme/useThemeStore";

const useThemeRestore = () => {
  const { setCurrentTheme } = useThemeStore();
  useEffect(() => {
    const currentLSTheme = sessionStorage.getItem("currentTheme");
    if (currentLSTheme) {
      const parsedTheme = currentLSTheme === "dark" ? darkTheme : lightTheme;
      setCurrentTheme(parsedTheme);
    }
  }, []);
};

export default useThemeRestore;
