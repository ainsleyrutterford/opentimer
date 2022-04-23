// Big thanks to: https://www.joshwcomeau.com/react/dark-mode/

// The script seems to sometimes run twice. This makes sure it only runs the first time
if (!document.documentElement.hasAttribute("data-color-mode")) {
  const getInitialColorMode = () => {
    const localStorageColorMode =
      window.localStorage.getItem("data-color-mode");
    const hasStoragePreference = typeof localStorageColorMode === "string";

    // If the user has explicitly chosen light or dark, use it
    if (hasStoragePreference) {
      return localStorageColorMode;
    }

    // If they haven't been explicit, check the system preference
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const hasSystemPreference = typeof query.matches === "boolean";
    if (hasSystemPreference) {
      return query.matches ? "dark" : "light";
    }

    // Default to "light".
    return "light";
  };

  const colorMode = getInitialColorMode();
  document.documentElement.setAttribute("data-color-mode", colorMode);
  document.documentElement.setAttribute("data-light-theme", "light");
  document.documentElement.setAttribute("data-dark-theme", "dark");
}
