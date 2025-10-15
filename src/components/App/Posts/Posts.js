import Post from "./Post/Post";
import styles from "./Posts.module.sass";

export default function Posts(params) {
  return (
    <article className={styles.posts}>
      <Post />
    </article>
  );
}
