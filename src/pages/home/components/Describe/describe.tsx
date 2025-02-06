import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import styles from "./describe.module.scss";

type Props = {};

export default function Describe({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={styles.describe}>
      <span
        className={`${styles.sticky} ${
          currentTheme === "dark" ? styles.dark : ""
        }`}
      >
        I describe myself as
      </span>
      <div className={styles.texts}>
        <span
          style={{ color: currentTheme === "dark" ? "#F7DF1E" : undefined }}
        >
          JavaScript Enthusiast
        </span>
        <span
          style={{ color: currentTheme === "dark" ? "#A76605" : undefined }}
        >
          Software Craftsman
        </span>
        <span
          style={{ color: currentTheme === "dark" ? "#61DAFB" : undefined }}
        >
          React Lover
        </span>
        <span
          style={{ color: currentTheme === "dark" ? "#3C9CCE" : undefined }}
        >
          Gopher
        </span>
        <span
          style={{ color: currentTheme === "dark" ? "#E92C81" : undefined }}
        >
          Gamer
        </span>
        <span
          style={{ color: currentTheme === "dark" ? "#64E69C" : undefined }}
        >
          Geek
        </span>
      </div>
    </div>
  );
}
