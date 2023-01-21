import { useTheme } from "next-themes";
import React from "react";
import styles from "./describe.module.scss";

type Props = {};

export default function Describe({}: Props) {
  const { theme } = useTheme();

  return (
    <div className={styles.describe}>
      <span className={styles.sticky}>I describe myself as</span>
      <div className={styles.texts}>
        <span style={{ color: theme === "dark" ? "#F7DF1E" : "#000" }}>
          JavaScript Enthusiast
        </span>
        <span style={{ color: theme === "dark" ? "#A76605" : "#000" }}>
          Software Craftsman
        </span>
        <span style={{ color: theme === "dark" ? "#61DAFB" : "#000" }}>
          React Lover
        </span>
        <span style={{ color: theme === "dark" ? "#3C9CCE" : "#000" }}>
          Gopher
        </span>
        <span style={{ color: theme === "dark" ? "#E92C81" : "#000" }}>
          Gamer
        </span>
        <span style={{ color: theme === "dark" ? "#64E69C" : "#000" }}>
          Geek
        </span>
      </div>
    </div>
  );
}
