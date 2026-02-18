import { NavLink } from "@/interfaces/interfaces";
import Link from "next/link";
import React from "react";

const links: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
