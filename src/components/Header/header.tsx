import SunIcon from "@/assets/sun";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useTheme } from "next-themes";
import MoonIcon from "@/assets/moon";
import HamburgerIcon from "@/assets/hamburger";
import NavLink from "./components/NavLink";
import MobileMenu from "./components/MobileMenu";

type Props = {
  pages: pageData[];
};

export default function Header({ pages }: Props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.mobileMenuButton}
          onClick={() => setToggleMobileMenu(true)}
        >
          <HamburgerIcon fill={currentTheme === "light" ? "#000" : "#fff"} />
        </div>
        <nav>
          {pages.map((item: pageData) => (
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
          className={styles.iconContainer}
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
      </header>
      <MobileMenu
        pages={pages}
        toggleMobileMenu={toggleMobileMenu}
        setToggleMobileMenu={setToggleMobileMenu}
      />
    </>
  );
}
