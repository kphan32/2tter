import { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import { usePosts } from "./PostProvider";

import styles from "../styles/NewPost.module.css";

const NewPost = () => {
  const { loading, addPost } = usePosts();

  const [body, setBody] = useState("");

  const onSubmit = () => {
    if (loading || body === "") return;

    addPost({
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
        <button className={styles.post} onClick={onSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
