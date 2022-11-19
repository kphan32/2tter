import Head from "next/head";

import styles from "../styles/Layout.module.css";

export const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>2tter</title>
        <meta
          name="description"
          content="The next generation social media platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
