import { NavLink } from "@/interfaces/interfaces";
import NavLinkComponent from "./navLink/NavLink";
import styles from "./links.module.css";

const links: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Links = () => {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLinkComponent link={link} key={link.title} />
      ))}
      <NavLinkComponent link={{ title: "admin", path: "/admin" }} />
      <NavLinkComponent link={{ title: "Login", path: "/login" }} />
    </div>
  );
};

export default Links;
