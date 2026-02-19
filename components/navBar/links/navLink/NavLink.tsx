"use client";
import { NavLink } from "@/interfaces/interfaces";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  link: NavLink;
  onClick?: () => void;
}

const NavLinkComponent = ({ link, onClick }: Props) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div
      className={`${styles.container}  ${pathName === link.path && styles.active}`}
      onClick={onClick}
    >
      <Link href={link.path}>{link.title}</Link>
    </div>
  );
};

export default NavLinkComponent;
