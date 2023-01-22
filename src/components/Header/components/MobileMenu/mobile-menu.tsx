import React, { useEffect, useState } from "react";
import CloseIcon from "@/assets/close";
import styles from "./mobile-menu.module.scss";
import NavLink from "../NavLink";
import { navigation } from "@/consts/app-config";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import SocialMediaIcons from "@/components/SocialMediaIcons";

type Props = {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: (b: boolean) => void;
};

export default function MobileMenu({
  toggleMobileMenu,
  setToggleMobileMenu,
}: Props) {
  const router = useRouter();
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setToggleMobileMenu(false);
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    return () => {
      setToggleMobileMenu(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickOutside = (e: any) => {
    if (e.target.id === "mobile-navigation") {
      setToggleMobileMenu(false);
    }
  };

  return (
    <div
      className={styles.mobileNavigation}
      style={{
        transform: toggleMobileMenu ? "translateX(0)" : "translateX(-100vw)",
      }}
      id="mobile-navigation"
      onClick={onClickOutside}
    >
      <nav
        style={{
          transform: toggleMobileMenu ? "translateX(0)" : "translateX(-100vw)",
          backgroundColor: currentTheme === "dark" ? "#111" : "#fff",
        }}
      >
        <CloseIcon
          style={{ marginRight: "auto" }}
          fill={currentTheme === "dark" ? "#fff" : "#000"}
          onClick={() => setToggleMobileMenu(false)}
        />
        <ul>
          {navigation.map((item: { title: string; path: string }) => (
            <NavLink
              key={item.path}
              text={item.title}
              href={item.path}
              active={router.pathname === item.path}
              darkMode={currentTheme === "dark"}
            />
          ))}
        </ul>
        <SocialMediaIcons theme={currentTheme} />
      </nav>
    </div>
  );
}
