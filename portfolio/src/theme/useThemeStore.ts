import { Theme } from "@mui/material";
import { create } from "zustand";
import { darkTheme } from "./theme";

interface ThemeStore {
  currentTheme: Theme;
  isMobile: boolean;
  setCurrentTheme: (newTheme: Theme) => void;
  setIsMobile: (isMobile: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isMobile: false,
  currentTheme: darkTheme,
  setCurrentTheme: (newTheme: Theme) => set({ currentTheme: newTheme }),
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
}));
