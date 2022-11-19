import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
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

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={53} height={12} />
          </span>
        </a>
      </footer>
    </div>
  );
};
