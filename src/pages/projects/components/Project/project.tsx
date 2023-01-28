import GithubIcon from "@/assets/github";
import StarIcon from "@/assets/star";
import React, { useEffect, useState } from "react";
import styles from "./project.module.scss";

type Props = {
  name: string;
  url?: string;
  repo?: string;
  theme?: string | undefined;
  videoSrc?: string;
  buttonText?: string;
  buttonIconComponent?: JSX.Element;
  children?: JSX.Element;
};

type repositoryData = {
  stargazers_count: number;
};

export default function Project({
  name,
  url,
  repo,
  theme,
  videoSrc,
  buttonText,
  buttonIconComponent,
  children,
}: Props) {
  const [repoData, setRepoData] = useState<repositoryData | null>(null);

  useEffect(() => {
    const fn = async () => {
      if (repo && repo.length > 0) {
        const res = await fetch(`https://api.github.com/repos/` + repo);
        const data = await res.json();
        setRepoData(data);
      }
    };

    fn();

    return () => {
      setRepoData(null);
    };
  }, [repo]);

  console.log("repoData", repoData);

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
            {repoData && (
              <>
                <StarIcon />
                <h6>{repoData.stargazers_count}</h6>
              </>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
