import BlogCard from "@/components/blogCard/BlogCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <section className={styles.container}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
};

export default BlogPage;
