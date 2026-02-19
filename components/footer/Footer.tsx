import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>frankdev</p>
      <p className={styles.text}>
        Frank creative thoughts agency © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
