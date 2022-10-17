import React, { forwardRef, useContext } from "react";
import ThemeContext from "ThemeContext";

interface ThemeModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

function ThemeModal(props, ref) {
  const { isModalOpen, toggleModal }: ThemeModalProps = props;
  const { theme, toggleThemeHandler } = useContext(ThemeContext);

  return (
    <div
      className="dropdown_menu dropdown_menu--animated dropdown_menu-6"
      ref={ref}
      style={{ display: isModalOpen ? "block" : "none" }}
    >
      <p>Choose your theme!</p>
      <ul className="options-container">
        <li
          onClick={() => {
            toggleThemeHandler("light"), toggleModal();
          }}
        >
          Light Theme
        </li>
        <li
          onClick={() => {
            toggleThemeHandler("dark"), toggleModal();
          }}
        >
          Dark Theme
        </li>
        <li
          onClick={() => {
            toggleThemeHandler("rick"), toggleModal();
          }}
        >
          Rick Theme
        </li>
        <li
          onClick={() => {
            toggleThemeHandler("morty"), toggleModal();
          }}
        >
          Morty Theme
        </li>
      </ul>
    </div>
  );
}

export default forwardRef(ThemeModal);
