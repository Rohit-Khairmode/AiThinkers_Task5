"use client";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface DarkModeContextType {
  mode: PaletteMode | undefined;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export default function DarkModeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode | undefined>("light");
  const darkModeTheme = createTheme({
    palette: {
      mode,
    },
  });
  function toggleDarkMode() {
    document.body.style.backgroundColor = mode == "light" ? "#2a2a2a" : "#fff";
    document.body.style.color = mode == "light" ? "#fff" : "#2a2a2a";
    setMode((curMode) => (curMode === "light" ? "dark" : "light"));
  }
  return (
    <DarkModeContext.Provider value={{ mode, toggleDarkMode }}>
      <ThemeProvider theme={darkModeTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => {
  const state = useContext(DarkModeContext);
  if (!state) throw new Error("DarkModeContext is used outside of provider");
  return state;
};
