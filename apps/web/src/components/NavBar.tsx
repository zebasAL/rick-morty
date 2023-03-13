import styles from "../styles/layout/all.module.sass";
export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.itemList}>
        <text className={styles.options}>navItem1</text>
        <text className={styles.options}>navItem2</text>
        <text className={styles.options}>navItem3</text>
      </div>
    </div>
  );
}
