import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
} from "@/assets/project_banners";

type Props = {};

export default function Projects({}: Props) {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth >= 992) {
        if (window.scrollY < 1300) {
          setTranslate(-window.scrollY / 2);
        }
      } else {
        setTranslate(-window.scrollY);
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
          <div className={styles.projectItem}>
            <Image
              src={projectImage2}
              alt="https://github.com/go-swagno/swagno"
              placeholder="blur"
            />
          </div>
          <div className={styles.projectItem}>
            <Image
              src={projectImage1}
              alt="github.com/anilsenay/next-e-commerce"
              placeholder="blur"
            />
          </div>
          <div className={styles.projectItem}>
            <Image
              src={projectImage3}
              alt="CatchUp Figma Design"
              placeholder="blur"
            />
          </div>
          <div className={styles.projectItem}>
            <Image
              src={projectImage4}
              alt="github.com/anilsenay"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
