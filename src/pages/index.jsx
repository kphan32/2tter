import { Layout } from "../components/Layout";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <NewPost />
        <Posts />
      </div>
    </Layout>
  );
};

export default Home;
