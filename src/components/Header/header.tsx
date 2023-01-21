import SunIcon from "@/assets/sun";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useTheme } from "next-themes";
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
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log("theme", theme);

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
      <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
    </header>
  );
}
