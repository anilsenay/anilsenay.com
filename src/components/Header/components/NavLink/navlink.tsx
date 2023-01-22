import Link from "next/link";
import React from "react";
import styles from "./navlink.module.scss";

type NavLinkProps = {
  text: string;
  href: string;
  active: boolean;
  darkMode: boolean;
};

export default function NavLink({
  text,
  href,
  active,
  darkMode,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${active ? styles.active : ""} ${
        darkMode ? styles.dark : ""
      }`}
    >
      {text}
    </Link>
  );
}
