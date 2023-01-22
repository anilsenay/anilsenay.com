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
  darkMode: boolean;
};

function NavLink({ text, href, active, darkMode }: NavLinkProps) {
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

export default function Header({}: Props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className={styles.header}>
      <nav>
        {navigation.map((item: { title: string; path: string }) => (
          <NavLink
            key={item.path}
            text={item.title}
            href={item.path}
            active={router.pathname === item.path}
            darkMode={currentTheme === "dark"}
          />
        ))}
      </nav>
      <div
        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      >
        {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
    </header>
  );
}
