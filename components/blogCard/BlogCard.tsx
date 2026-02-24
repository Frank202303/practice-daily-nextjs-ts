import styles from "./blogCard.module.css";

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}></div>
      <div className={styles.bottomContainer}></div>
    </div>
  );
};

export default BlogCard;
