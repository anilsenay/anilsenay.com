import StarIcon from "@/assets/star";
import React from "react";
import styles from "./project.module.scss";

type Props = {
  theme?: string | undefined;
  videoSrc?: string;
};

export default function Project({ theme, videoSrc }: Props) {
  return (
    <div className={styles.project}>
      <div
        className={styles.imageContainer}
        style={{ background: theme === "light" ? "#fff" : "#000" }}
      >
        <div
          className={`${styles.image} ${
            theme === "dark" ? styles.imageDark : ""
          }`}
        >
          {videoSrc ? (
            <video autoPlay loop muted playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className={styles.placeholder} />
          )}
          <div className={styles.background} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h6>Project Name</h6>
          <div className={styles.starText}>
            <StarIcon />
            <h6>120</h6>
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
