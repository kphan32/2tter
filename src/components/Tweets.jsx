import { useTweets } from "./TweetProvider";

import styles from "../styles/Tweets.module.css";

const Tweets = () => {
  const { tweets, loading } = useTweets();

  if (loading) return <div className={styles.container}>Loading</div>;

  return (
    <div className={styles.container}>
      {tweets.map((tweet) => {
        return (
          <div className={styles.card}>
            <div className={styles.header}>
              <p className={styles.username}>{tweet.username}</p>
              <p className={styles.handle}>@{tweet.handle}</p>
            </div>

            <p className={styles.body}>{tweet.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
