import type { AppProps } from "next/app";
import React, { createContext, useEffect, useState } from "react";

export enum Style {
  LaTeX,
  GitHub,
}

export const ThemeContext = createContext<{
  colorMode: string;
  setColorMode: (mode: string) => void;
}>({} as any);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorMode, setColorMode] = useState("");

  // Runs once on initial render. Gets the color mode from the HTML element.
  useEffect(() => {
    const initialColorMode =
      document.documentElement.getAttribute("data-color-mode");
    setColorMode(initialColorMode === "dark" ? "dark" : "light");
  }, []);

  // Runs each time colorMode is updated. Update the HTML element and store
  // the new value in local storage
  useEffect(() => {
    if (colorMode !== "") {
      document.documentElement.setAttribute("data-color-mode", colorMode);
      window.localStorage.setItem("data-color-mode", colorMode);
    }
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default MyApp;
