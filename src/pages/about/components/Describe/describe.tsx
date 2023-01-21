import React from "react";
import styles from "./describe.module.scss";

type Props = {};

export default function Describe({}: Props) {
  return (
    <div className={styles.describe}>
      <span className={styles.sticky}>I describe myself as</span>
      <div className={styles.texts}>
        <span>JavaScript Enthusiast</span>
        <span>React Lover</span>
        <span>Gopher</span>
        <span>Software Craftsman</span>
        <span>Gamer</span>
        <span>Geek</span>
      </div>
    </div>
  );
}
