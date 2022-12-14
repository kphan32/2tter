import { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import { usePosts } from "./PostProvider";

import styles from "../styles/NewPost.module.css";

const MAX_CHAR_COUNT = 140;
const UNDER_COLOR = "rgb(145, 25, 220)";
const OVER_COLOR = "rgb(255, 0, 0)";

const NewPost = () => {
  const { loading, addPost } = usePosts();

  const [username, setUsername] = useState("Kavin Phan");
  const [handle, setHandle] = useState("kavphan");

  const [body, setBody] = useState("");

  const progress = body.length / MAX_CHAR_COUNT;
  const over = progress >= 1;

  const onSubmit = () => {
    if (loading || body === "" || username == "" || handle == "") return;

    (async () => {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tweets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            handle,
            username,
            body,
          }),
        }
      );

      if (resp.status != 200) {
        return console.error(resp);
      }

      const newPost = await resp.json();
      addPost(newPost);
    })();

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
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <CircularProgressbar
          className={styles.counter}
          value={progress}
          maxValue={1}
          strokeWidth={9}
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: over ? OVER_COLOR : UNDER_COLOR,
            trailColor: "#444",
          })}
        />
        <button className={styles.post} onClick={onSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
