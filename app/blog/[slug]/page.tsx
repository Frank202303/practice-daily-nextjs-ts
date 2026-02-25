import Image from "next/image";
import styles from "./singlePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/about.png"} alt="" fill className={styles.postImage} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.infosContainer}>
          <Image
            src={"/about.png"}
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailContainer}>
            <p className={styles.detailKey}>Author</p>
            <p className={styles.detailValue}>Tom</p>
          </div>
          <div className={styles.detailContainer}>
            <p className={styles.detailKey}>Author</p>
            <p className={styles.detailValue}>Tom</p>
          </div>
        </div>
        <p>
          Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App Tutorial
          for Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App
          Tutorial for{" "}
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
