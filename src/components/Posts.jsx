import { usePosts } from "./PostProvider";

import styles from "../styles/Posts.module.css";

const Posts = () => {
  const { posts, loading } = usePosts();

  if (loading) return <div className={styles.container}>Loading</div>;

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.card}>
            <div className={styles.header}>
              <p className={styles.username}>{post.username}</p>
              <p className={styles.handle}>@{post.handle}</p>
            </div>

            <p className={styles.body}>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
