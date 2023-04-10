import { createContext, ReactElement, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleThemeHandler: (theme: Themes) => {},
});

type ThemePropsInterface = {
  children?: JSX.Element | Array<JSX.Element>;
};

type Themes = "light" | "dark" | "rick" | "morty";
const isBrowser = typeof document !== "undefined";

const isLocalStorageEmpty = (): boolean => !localStorage.getItem("data-theme");

export const ThemeContextProvider = (
  props: ThemePropsInterface
): ReactElement => {
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<Themes>("light");

  const setInitialTheme = () => {
    if (!isBrowser) return;
    if (isLocalStorageEmpty()) {
      const systemTheme = window.matchMedia("prefers-color-scheme: dark")?.media
        ? "dark"
        : "light";
      localStorage.setItem("data-theme", systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
      setCurrentTheme(systemTheme);
    } else {
      const storedTheme: string = localStorage.getItem("data-theme") ?? "light";
      if (
        storedTheme === "dark" ||
        storedTheme === "light" ||
        storedTheme === "rick" ||
        storedTheme === "morty"
      ) {
        document.documentElement.setAttribute("data-theme", storedTheme);
        setCurrentTheme(storedTheme as Themes);
      } else {
        setCurrentTheme("light");
      }
    }
    setThemeLoaded(true);
  };

  useEffect(() => {
    setInitialTheme();
  }, []);

  const toggleThemeHandler = (nextTheme: Themes): void => {
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", `${nextTheme}`);
    localStorage.setItem("data-theme", `${nextTheme}`);
  };

  if (!themeLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
