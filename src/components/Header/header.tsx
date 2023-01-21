import SunIcon from "@/assets/sun";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./header.module.scss";

import { navigation } from "@/consts/app-config";
import MoonIcon from "@/assets/moon";

type Props = {};
type NavLinkProps = {
  text: string;
  href: string;
  active: boolean;
};

function NavLink({ text, href, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={active ? `${styles.link} ${styles.active}` : styles.link}
    >
      {text}
    </Link>
  );
}

export default function Header({}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        {navigation.map((item: { title: string; path: string }) => (
          <NavLink
            key={item.path}
            text={item.title}
            href={item.path}
            active={router.pathname === item.path}
          />
        ))}
      </nav>
      <div onClick={() => setDarkMode((v) => !v)}>
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </div>
    </header>
  );
}
