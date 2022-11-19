import { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import { useTweets } from "./TweetProvider";

import styles from "../styles/NewPost.module.css";

const NewPost = () => {
  const { loading, addTweet } = useTweets();

  const [body, setBody] = useState("");

  const onSubmit = () => {
    if (loading || body === "") return;

    addTweet({
      username: "Kavin Phan",
      handle: "kphan",
      body,
    });

    setBody("");
  };

  return (
    <div className={styles.container}>
      <TextareaAutosize
        className={styles.body}
        placeholder="What's happening?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></TextareaAutosize>

      <div className={styles.buttons}>
        <button className={styles.tweet} onClick={onSubmit}>
          Tweet
        </button>
      </div>
    </div>
  );
};

export default NewPost;
