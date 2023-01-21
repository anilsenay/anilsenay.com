import StarIcon from "@/assets/star";
import React from "react";
import styles from "./project.module.scss";

type Props = {};

export default function Project({}: Props) {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span>Project Name</span>
          <div className={styles.starText}>
            <StarIcon />
            <span>120</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          <br></br>
          <br></br>
          Build with:
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>Tailwind</li>
            <li>Scss</li>
            <li>Vercel</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
