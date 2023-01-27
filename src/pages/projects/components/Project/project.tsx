import GithubIcon from "@/assets/github";
import StarIcon from "@/assets/star";
import React from "react";
import styles from "./project.module.scss";

type Props = {
  name: string;
  url?: string;
  star?: number | undefined;
  theme?: string | undefined;
  videoSrc?: string;
  buttonText?: string;
  buttonIconComponent?: JSX.Element;
  children?: JSX.Element;
};

export default function Project({
  name,
  url,
  star,
  theme,
  videoSrc,
  buttonText,
  buttonIconComponent,
  children,
}: Props) {
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
          {url && buttonText && buttonText.length > 0 && (
            <a
              className={styles.button}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{buttonText}</span> {buttonIconComponent}
            </a>
          )}
          <div className={styles.background} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h6>{name}</h6>
          <div className={styles.starText}>
            {star && star > 0 && (
              <>
                <StarIcon />
                <h6>{star}</h6>
              </>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
