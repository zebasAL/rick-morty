import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext"

export default function Home() {
  const { theme, toggleThemeHandler } = useContext(ThemeContext);
  const [value, setValue] = useState<string>('')
  console.log('theme', theme)

  return (
    <>
      <h1>Hello home</h1>

      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <div style={{ border: 'red 1px solid', width: '500px', height: '300px', margin: 'auto' }}>
        <h3>Set Theme</h3>
        <div>
          <button onClick={() => toggleThemeHandler('light')}>
            Light theme
          </button>
          <button onClick={() => toggleThemeHandler('morty')}>
            Morty theme
          </button>
          <button onClick={() => toggleThemeHandler('rick')}>
            Rick theme
          </button>
          <button onClick={() => toggleThemeHandler('dark')}>
            Dark theme
          </button>
        </div>
      </div>
      <p>Texto</p>
    </>
  );
}