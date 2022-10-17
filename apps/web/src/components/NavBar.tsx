import { useContext, useState } from "react";
import Button from "ui/Button";
import styles from "../styles/layout/all.module.sass";
import { ThemeContext } from "../ThemeContext";
import Image from "next/image";
import rickMortyImg from "../public/rickMorty.svg";
import ThemeModal from "./modals/ThemeModal";

export default function Navbar() {
  const { theme, toggleThemeHandler } = useContext(ThemeContext);
  const [themeModal, openThemeModal] = useState<boolean>(false);

  return (
    <div className={styles.nav}>
      <div className={styles.itemList}>
        <text className={styles.options}>op1</text>
        <text className={styles.options}>op2</text>
        <text className={styles.options}>op3</text>
        <text className={styles.options}>op3</text>
      </div>
      <div
        className={styles.themeBtn}
        onClick={() => openThemeModal(!themeModal)}
      >
        <Image src={rickMortyImg} alt="" width="100%" height="100%" />
      </div>
      {themeModal ? (
        <ThemeModal themeModal={themeModal} openThemeModal={openThemeModal} />
      ) : (
        <></>
      )}
    </div>
  );
}
