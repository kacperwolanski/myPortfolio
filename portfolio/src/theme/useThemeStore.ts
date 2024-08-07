import { Theme } from "@mui/material";
import { create } from "zustand";
import { darkTheme } from "./theme";

interface ThemeStore {
  currentTheme: Theme;
  setCurrentTheme: (newTheme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: darkTheme,
  setCurrentTheme: (newTheme: Theme) => set({ currentTheme: newTheme }),
}));
