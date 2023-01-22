import SunIcon from "@/assets/sun";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useTheme } from "next-themes";
import { navigation } from "@/consts/app-config";
import MoonIcon from "@/assets/moon";
import HamburgerIcon from "@/assets/hamburger";
import NavLink from "./components/NavLink";
import MobileMenu from "./components/MobileMenu";

type Props = {};

export default function Header({}: Props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (typeof window !== "undefined") {
    let header = document.getElementById("fixed-header");
    const offset = window.innerWidth >= 1140 ? 400 : 250;
    window.addEventListener("scroll", () => {
      header = header || document.getElementById("fixed-header");
      if (header != null) {
        if (window.pageYOffset > offset) {
          header.setAttribute("style", "transform: translateY(0)");
        } else {
          header.setAttribute("style", "transform: translateY(-100%)");
        }
      }
    });
  }

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
          className={styles.iconContainer}
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
      </header>
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        setToggleMobileMenu={setToggleMobileMenu}
      />
    </>
  );
}
