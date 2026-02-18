import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <Links />
    </div>
  );
};

export default Navbar;
