import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={"/contact.png"}
            alt="image"
            fill
            className={styles.imagePost}
          />
        </div>
        <span className={styles.date}>01.06.2023</span>
      </div>
      <div className={styles.bottomContainer}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.desc}>
          desc desc GET /blog 200 in 290ms (compile: 201ms, render: 89ms) desc
          desc GET /blog 200 in 290ms (compile: 201ms, render: 89ms)
        </p>
        <Link href={""} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
