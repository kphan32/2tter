import { Layout } from "../components/Layout";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <NewPost />
        <Posts />
      </div>
    </Layout>
  );
};

export default Home;
