import { create } from "zustand";

interface SideMenuStore {
  isSideMenuOpened: boolean;
  setIsSideMenuOpened: (isOpened: boolean) => void;
}

export const useSideMenuStore = create<SideMenuStore>((set) => ({
  isSideMenuOpened: false,
  setIsSideMenuOpened: (isOpened: boolean) =>
    set({ isSideMenuOpened: isOpened }),
}));
