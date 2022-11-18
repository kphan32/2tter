import TextareaAutosize from "react-autosize-textarea";

import styles from "../styles/NewPost.module.css";

const NewPost = () => {
  return (
    <div className={styles.container}>
      <TextareaAutosize
        className={styles.body}
        placeholder="What's happening?"
      ></TextareaAutosize>
      <div className={styles.divider} />
      <div className={styles.buttons}>
        <button className={styles.tweet}>Tweet</button>
      </div>
    </div>
  );
};

export default NewPost;
