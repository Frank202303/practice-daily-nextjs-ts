"use client";
import { NavLink } from "@/interfaces/interfaces";
import NavLinkComponent from "./navLink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";
import Image from "next/image";

const links: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  // MOCK  TODO
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.container}>
        {links.map((link) => (
          <NavLinkComponent link={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLinkComponent link={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <NavLinkComponent link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src={"/menu.png"}
        height={32}
        width={32}
        alt="menu image"
        className={styles.btnMenu}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <NavLinkComponent
              link={link}
              key={link.title}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
