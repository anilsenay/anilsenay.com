import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";

type Props = {};

export default function Projects({}: Props) {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY < 1300) {
        setTranslate(-window.scrollY / 2);
      }
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(${translate}px) `,
          }}
        >
          <div className={styles.projectItem} />
          <div className={styles.projectItem} />
          <div className={styles.projectItem} />
          <div className={styles.projectItem} />
        </div>
      </div>
    </div>
  );
}
