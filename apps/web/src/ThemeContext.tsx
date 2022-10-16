
import { createContext, ReactElement, useState } from "react";

export const ThemeContext = createContext({
  theme: 'light',
  toggleThemeHandler: (theme: Themes) => {},
});

type ThemePropsInterface = {
  children?: JSX.Element | Array<JSX.Element>;
}

type Themes = 'light' | 'dark' |'rick' | 'morty';
const isBrowser = typeof document !== "undefined";

const isLocalStorageEmpty = (): boolean => !localStorage.getItem("data-theme");

const initialThemeHandler = (): Themes => {
  let count = 0
  count++
  console.log('read', count)
  if (!isBrowser) return 'light'
  if (isLocalStorageEmpty()) {
    const systemTheme = window.matchMedia('prefers-color-scheme: dark')?.media ? 'dark' : 'light';
    localStorage.setItem("data-theme", systemTheme);
    document.documentElement.setAttribute('data-theme', systemTheme);
    return systemTheme
  } else {
    const storedTheme: string = localStorage.getItem("data-theme") ?? 'light';
    if (storedTheme === 'dark' || storedTheme === 'light' || storedTheme === 'rick' || storedTheme === 'morty') {
      document.documentElement.setAttribute('data-theme', storedTheme);
      return storedTheme
    };
    return 'light'
  }
}

export const ThemeContextProvider = (
  props: ThemePropsInterface
): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState<Themes>(initialThemeHandler());

  const toggleThemeHandler = (nextTheme: Themes): void => {
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", `${nextTheme}`);
    localStorage.setItem("data-theme", `${nextTheme}`);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;