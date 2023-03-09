import Layout from "../components/Layout";
import styles from "../styles/app.module.sass";

export default function Home() {
  return (
    <div className={styles.dark}>
      <Layout>
        <h1>Hello home</h1>
      </Layout>
    </div>
  );
}
