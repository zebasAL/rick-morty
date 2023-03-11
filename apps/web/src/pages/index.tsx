import { useState } from "react";
import styles from "../styles/app.module.sass";

export default function Home() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <>
      <h1>Hello home</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch theme to
        {theme === "light" ? " dark" : " light"}
      </button>
    </>
  );
}
