import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const stats = [
  { value: "10K+", label: "Years of experience" },
  { value: "300+", label: "Projects completed" },
  { value: "50+", label: "Team members" },
];

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          {stats.map((sts) => (
            <div className={styles.box} key={sts.label}>
              <h1>{sts.value}</h1>
              <p>{sts.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="about" fill className={styles.img} />
      </div>
    </section>
  );
};

export default AboutPage;
