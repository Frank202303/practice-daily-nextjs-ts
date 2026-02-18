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
  // MOCK  TODO
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLinkComponent link={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLinkComponent link={{ title: "Admin", path: "/admin" }} />
          )}
          <button>Logout</button>
        </>
      ) : (
        <NavLinkComponent link={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
