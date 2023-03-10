import { useState } from "react";
import styles from "../styles/app.module.sass";

export default function Home() {
  const [theme, setTheme] = useState<string>(styles.light);
  return (
    <>
      <h1>Hello home</h1>
      <button
        onClick={() =>
          setTheme(theme === styles.light ? styles.dark : styles.light)
        }
      >
        Switch theme to
        {theme === styles.light ? " dark" : " light"}
      </button>
    </>
  );
}
